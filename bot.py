import os
import logging
import asyncio
import threading
from flask import Flask, request
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# 1. إعداد التنبيهات لرؤية الأخطاء في Render Logs
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# 2. جلب البيانات من المتغيرات البيئية (Environment Variables)
TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID') 
RENDER_EXTERNAL_URL = os.getenv('RENDER_EXTERNAL_URL') 
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

# 3. إعداد تطبيق Flask و Application الخاص بالتليجرام
app = Flask(__name__)
ptb_application = Application.builder().token(TOKEN).build()

# 4. وظيفة الترحيب والتحقق من الاشتراك
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    try:
        # التحقق من عضوية المستخدم في القناة
        member = await context.bot.get_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
        if member.status in ['member', 'administrator', 'creator']:
            keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
            await update.message.reply_text(
                f"مرحباً بك {update.effective_user.first_name} في منظومة أمجاد أفريقيا التعليمية!",
                reply_markup=InlineKeyboardMarkup(keyboard)
            )
        else:
            raise Exception("Not Member")
    except Exception:
        # إذا لم يكن مشتركاً أو حدث خطأ في التحقق
        channel_link = f"https://t.me/{CHANNEL_ID.replace('@', '')}"
        keyboard = [[InlineKeyboardButton("اشترك في القناة أولاً ✅", url=channel_link)]]
        await update.message.reply_text(
            "⚠️ عذراً، يجب عليك الاشتراك في قناة المنظومة لتتمكن من استخدام البوت.",
            reply_markup=InlineKeyboardMarkup(keyboard)
        )

ptb_application.add_handler(CommandHandler("start", start))

# 5. المسارات (Routes) لاستقبال طلبات Render و UptimeRobot
@app.route('/')
def home():
    # هذا المسار مخصص لـ UptimeRobot ليعرف أن السيرفر يعمل
    return "Bot is Alive!", 200

@app.route(f'/{TOKEN}', methods=['POST'])
async def respond():
    # استقبال التحديثات من تليجرام وتحويلها للبوت
    update = Update.de_json(request.get_json(force=True), ptb_application.bot)
    await ptb_application.update_queue.put(update)
    return 'ok'

# 6. إعداد وتشغيل المنظومة (متوافق مع Python 3.14 و Render)
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    
    # دقيقة لضبط الـ Webhook عند بدء التشغيل
    async def setup_webhook():
        await ptb_application.initialize()
        await ptb_application.start()
        webhook_url = f"{RENDER_EXTERNAL_URL}/{TOKEN}"
        await ptb_application.bot.set_webhook(url=webhook_url)
        logger.info(f"Webhook set to: {webhook_url}")

    # حل مشكلة الـ Event Loop في النسخ الجديدة من بايثون
    try:
        loop = asyncio.get_event_loop()
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

    # تشغيل إعداد الـ Webhook
    loop.run_until_complete(setup_webhook())
    
    # تشغيل سيرفر Flask لاستقبال الطلبات
    logger.info(f"Starting Flask server on port {PORT}")
    app.run(host='0.0.0.0', port=PORT)
