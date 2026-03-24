import os
import logging
import asyncio
from flask import Flask, request
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# 1. إعداد التنبيهات
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# 2. البيانات الأساسية
TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID') 
RENDER_EXTERNAL_URL = os.getenv('RENDER_EXTERNAL_URL') 
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

# 3. إعداد Flask و Application
app = Flask(__name__)
ptb_application = Application.builder().token(TOKEN).build()

# 4. وظيفة الترحيب
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    try:
        member = await context.bot.get_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
        if member.status in ['member', 'administrator', 'creator']:
            keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
            await update.message.reply_text(f"مرحباً بك {update.effective_user.first_name}!", reply_markup=InlineKeyboardMarkup(keyboard))
        else:
            raise Exception("Not Member")
    except Exception:
        channel_username = CHANNEL_ID.replace('@', '')
        keyboard = [[InlineKeyboardButton("اشترك في القناة ✅", url=f"https://t.me/{channel_username}")]]
        await update.message.reply_text("⚠️ يجب الاشتراك أولاً.", reply_markup=InlineKeyboardMarkup(keyboard))

ptb_application.add_handler(CommandHandler("start", start))

# 5. المسارات (Routes)
@app.route('/')
def home():
    return "Bot is Alive!", 200

@app.route(f'/{TOKEN}', methods=['POST'])
async def respond():
    await ptb_application.update_queue.put(
        Update.de_json(request.get_json(force=True), ptb_application.bot)
    )
    return 'ok'

# 6. التشغيل المتوافق مع Render
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    
    async def setup_webhook():
        await ptb_application.initialize()
        await ptb_application.start()
        await ptb_application.bot.set_webhook(url=f"{RENDER_EXTERNAL_URL}/{TOKEN}")

    # إعداد الـ Webhook في الخلفية قبل تشغيل Flask
    loop = asyncio.get_event_loop()
    loop.run_until_complete(setup_webhook())
    
    # تشغيل السيرفر
    app.run(host='0.0.0.0', port=PORT)
