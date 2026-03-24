import os
import logging
from flask import Flask, request
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# 1. إعداد التنبيهات (Logs)
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# 2. جلب البيانات من Environment Variables
TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID') 
RENDER_EXTERNAL_URL = os.getenv('RENDER_EXTERNAL_URL') 
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

# 3. إعداد Flask و Application
app = Flask(__name__)
ptb_application = Application.builder().token(TOKEN).build()

# 4. وظيفة الترحيب والتحقق من القناة
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    try:
        member = await context.bot.get_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
        if member.status in ['member', 'administrator', 'creator']:
            keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
            reply_markup = InlineKeyboardMarkup(keyboard)
            await update.message.reply_text(f"مرحباً بك {update.effective_user.first_name} في منظومة أمجاد!", reply_markup=reply_markup)
        else:
            raise Exception("Not Member")
    except Exception:
        channel_username = CHANNEL_ID.replace('@', '')
        keyboard = [[InlineKeyboardButton("اشترك في القناة أولاً ✅", url=f"https://t.me/{channel_username}")]]
        await update.message.reply_text("⚠️ عذراً، يجب عليك الاشتراك في القناة أولاً.", reply_markup=InlineKeyboardMarkup(keyboard))

ptb_application.add_handler(CommandHandler("start", start))

# ---------------------------------------------------------
# الجزء الذي طلبته (يُضاف في الأخير قبل التشغيل)
# ---------------------------------------------------------

@app.route('/')
def index():
    """هذا المسار يحل مشكلة 404 ويجعل UptimeRobot يعطي لوناً أخضر"""
    return "Bot is Alive and Running!", 200

@app.route(f'/{TOKEN}', methods=['POST'])
async def respond():
    """هذا المسار يستقبله تليجرام عند وجود رسالة جديدة"""
    await ptb_application.update_queue.put(
        Update.de_json(request.get_json(force=True), ptb_application.bot)
    )
    return 'ok'

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    
    # تشغيل الـ Webhook
    ptb_application.run_webhook(
        listen="0.0.0.0",
        port=PORT,
        url_path=TOKEN,
        webhook_url=f"{RENDER_EXTERNAL_URL}/{TOKEN}"
    )
