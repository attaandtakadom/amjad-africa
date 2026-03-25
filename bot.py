import os
import logging
from flask import Flask, request
from telegram import Update, Bot, InlineKeyboardButton, InlineKeyboardMarkup

# إعداد التنبيهات
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# البيانات السرية
TOKEN = os.environ.get('BOT_TOKEN')
RENDER_URL = os.environ.get('RENDER_EXTERNAL_URL')
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)
bot = Bot(token=TOKEN)

@app.route('/')
def home():
    return "Bot is Running", 200

@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    try:
        # استلام التحديث وتحويله لكائن تليجرام
        update = Update.de_json(request.get_json(force=True), bot)
        
        if update.message and update.message.text:
            chat_id = update.message.chat_id
            text = update.message.text
            
            if text.startswith('/start'):
                # إنشاء الزر
                keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
                reply_markup = InlineKeyboardMarkup(keyboard)
                
                # إرسال الرد مباشرة
                bot.send_message(
                    chat_id=chat_id,
                    text="✅ تم الاتصال بنجاح!\nمرحباً بك في منظومة أمجاد أفريقيا.",
                    reply_markup=reply_markup
                )
                logger.info(f"Sent reply to {chat_id}")
                
        return 'ok', 200
    except Exception as e:
        logger.error(f"Error: {e}")
        return 'error', 500

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    # تفعيل الـ Webhook عند التشغيل
    webhook_url = f"{RENDER_URL}/{TOKEN}"
    bot.set_webhook(url=webhook_url, drop_pending_updates=True)
    logger.info(f"Webhook set to: {webhook_url}")
    
    app.run(host='0.0.0.0', port=PORT)
