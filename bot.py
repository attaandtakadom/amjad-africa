import os
import logging
import asyncio
from flask import Flask, request
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# إعداد التنبيهات لرؤية ما يحدث في Logs رندر
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# جلب البيانات من إعدادات Render
TOKEN = os.environ.get('BOT_TOKEN')
RENDER_EXTERNAL_URL = os.environ.get('RENDER_EXTERNAL_URL')
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)
# بناء التطبيق
ptb_application = Application.builder().token(TOKEN).build()

# وظيفة الترحيب البسيطة (بدون فحص قناة حالياً)
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
    await update.message.reply_text(
        "✅ تم الاتصال بنجاح!\nمرحباً بك في منظومة أمجاد أفريقيا.\nاضغط على الزر بالأسفل للدخول:",
        reply_markup=InlineKeyboardMarkup(keyboard)
    )

ptb_application.add_handler(CommandHandler("start", start))

@app.route('/')
def home(): 
    return "Bot is Running", 200

@app.route(f'/{TOKEN}', methods=['POST'])
async def respond():
    try:
        # استلام التحديث من تليجرام
        update = Update.de_json(request.get_json(force=True), ptb_application.bot)
        # إرسال التحديث لطابور المعالجة
        await ptb_application.update_queue.put(update)
        return 'ok', 200
    except Exception as e:
        logger.error(f"Error in respond: {e}")
        return 'error', 500

# إعدادات التشغيل والـ Webhook
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    
    async def setup_webhook():
        await ptb_application.initialize()
        await ptb_application.start()
        # تعيين الرابط ليتلقى الرسائل من تليجرام
        webhook_url = f"{RENDER_EXTERNAL_URL}/{TOKEN}"
        await ptb_application.bot.set_webhook(url=webhook_url, drop_pending_updates=True)
        logger.info(f"Webhook set to: {webhook_url}")

    # تشغيل حلقة الأحداث (Fix for Render)
    try:
        loop = asyncio.get_event_loop()
    except:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)

    loop.run_until_complete(setup_webhook())
    
    # تشغيل Flask
    app.run(host='0.0.0.0', port=PORT)
