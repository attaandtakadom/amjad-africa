import os
import logging
from flask import Flask, request
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# إعداد التنبيهات (Logs) لمراقبة الأخطاء في Render
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s', level=logging.INFO)

# جلب البيانات من Environment Variables
TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID') 
# الرابط الذي يوفره لك Render (مثال: https://your-app.onrender.com)
RENDER_EXTERNAL_URL = os.getenv('RENDER_EXTERNAL_URL') 
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

# إعداد تطبيق Flask لاستقبال طلبات تليجرام
app = Flask(__name__)
ptb_application = Application.builder().token(TOKEN).build()

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
        # تأكد من أن الرابط صحيح لقناتك
        channel_username = CHANNEL_ID.replace('@', '')
        keyboard = [[InlineKeyboardButton("اشترك في القناة أولاً ✅", url=f"https://t.me/{channel_username}")]]
        await update.message.reply_text("⚠️ عذراً، يجب عليك الاشتراك في القناة أولاً.", reply_markup=InlineKeyboardMarkup(keyboard))

# إضافة الـ Handlers
ptb_application.add_handler(CommandHandler("start", start))

@app.route(f'/{TOKEN}', methods=['POST'])
async def respond():
    """هذا المسار يستقبله تليجرام عند وجود رسالة جديدة"""
    await ptb_application.update_queue.put(
        Update.de_json(request.get_json(force=True), ptb_application.bot)
    )
    return 'ok'

@app.route('/')
def index():
    return "Bot is running..."

if __name__ == '__main__':
    # تشغيل البوت بنظام Webhook
    PORT = int(os.environ.get('PORT', 10000))
    
    # إخبار تليجرام بمكان إرسال التحديثات
    ptb_application.run_webhook(
        listen="0.0.0.0",
        port=PORT,
        url_path=TOKEN,
        webhook_url=f"{RENDER_EXTERNAL_URL}/{TOKEN}"
    )
