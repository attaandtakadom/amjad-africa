import os
import logging
import asyncio
from flask import Flask, request, jsonify
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

# التحقق من وجود المتغيرات الضرورية
if not all([TOKEN, CHANNEL_ID, RENDER_EXTERNAL_URL]):
    logger.error("❌ Missing required environment variables!")
    raise ValueError("Please set BOT_TOKEN, CHANNEL_ID, and RENDER_EXTERNAL_URL")

# 3. إعداد تطبيق Flask و Application الخاص بالتليجرام
app = Flask(__name__)

# إنشاء Application مع إعدادات محسنة
ptb_application = Application.builder().token(TOKEN).build()

# 4. وظيفة الترحيب والتحقق من الاشتراك
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """معالجة أمر /start مع التحقق من اشتراك المستخدم في القناة"""
    user_id = update.effective_user.id
    user_name = update.effective_user.first_name
    
    try:
        # التحقق من عضوية المستخدم في القناة
        member = await context.bot.get_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
        
        if member.status in ['member', 'administrator', 'creator']:
            # إنشاء زر فتح التطبيق
            keyboard = [[InlineKeyboardButton("🚀 فتح المنظومة", web_app={"url": WEB_APP_URL})]]
            
            await update.message.reply_text(
                f"✨ مرحباً بك {user_name} في منظومة أمجاد أفريقيا التعليمية!\n\n"
                f"يمكنك الآن استخدام المنظومة التعليمية بالضغط على الزر أدناه:",
                reply_markup=InlineKeyboardMarkup(keyboard)
            )
            logger.info(f"User {user_id} ({user_name}) started the bot - subscribed")
        else:
            await send_subscription_required(update, user_name)
            
    except Exception as e:
        logger.error(f"Error checking membership for user {user_id}: {e}")
        await send_subscription_required(update, user_name)


async def send_subscription_required(update: Update, user_name: str):
    """إرسال رسالة تفيد بأن الاشتراك مطلوب"""
    # تنظيف معرف القناة
    channel_username = CHANNEL_ID.replace('@', '').strip()
    channel_link = f"https://t.me/{channel_username}"
    
    keyboard = [[InlineKeyboardButton("✅ اشترك في القناة", url=channel_link)]]
    
    await update.message.reply_text(
        "⚠️ **عذراً، الاشتراك مطلوب!**\n\n"
        f"مرحباً {user_name}، للوصول إلى منظومة أمجاد أفريقيا التعليمية، "
        f"يجب عليك الاشتراك في قناتنا أولاً.\n\n"
        f"🔹 **القناة:** {CHANNEL_ID}\n\n"
        f"بعد الاشتراك، اضغط على /start مرة أخرى للدخول.",
        reply_markup=InlineKeyboardMarkup(keyboard),
        parse_mode='Markdown'
    )
    logger.info(f"Sent subscription required message to {user_name}")


# إضافة معالج الأوامر
ptb_application.add_handler(CommandHandler("start", start))

# 5. المسارات (Routes) لاستقبال طلبات Render و UptimeRobot
@app.route('/')
def home():
    """مسار رئيسي للتحقق من صحة البوت"""
    return jsonify({
        "status": "alive",
        "message": "Bot is running successfully!",
        "bot": "@" + (os.getenv('BOT_USERNAME', 'Unknown'))
    }), 200


@app.route(f'/{TOKEN}', methods=['POST'])
async def webhook():
    """استقبال التحديثات من تليجرام"""
    try:
        # استلام البيانات
        data = request.get_json(force=True)
        
        # إنشاء كائن التحديث
        update = Update.de_json(data, ptb_application.bot)
        
        # معالجة التحديث
        await ptb_application.process_update(update)
        
        return jsonify({"status": "ok"}), 200
        
    except Exception as e:
        logger.error(f"Error processing update: {e}")
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route('/health', methods=['GET'])
def health_check():
    """نقطة صحية لمراقبة البوت"""
    return jsonify({
        "status": "healthy",
        "webhook_set": bool(RENDER_EXTERNAL_URL)
    }), 200


# 6. إعداد وتشغيل المنظومة
async def setup_webhook():
    """إعداد ويب هوك البوت"""
    try:
        webhook_url = f"{RENDER_EXTERNAL_URL}/{TOKEN}"
        
        # حذف أي ويب هوك موجود
        await ptb_application.bot.delete_webhook()
        
        # تعيين الويب هوك الجديد
        await ptb_application.bot.set_webhook(
            url=webhook_url,
            allowed_updates=["message", "callback_query"]
        )
        
        # التحقق من تعيين الويب هوك
        webhook_info = await ptb_application.bot.get_webhook_info()
        
        logger.info(f"✅ Webhook set successfully to: {webhook_url}")
        logger.info(f"Webhook info: {webhook_info}")
        
        return True
        
    except Exception as e:
        logger.error(f"❌ Failed to set webhook: {e}")
        return False


def run_flask():
    """تشغيل خادم Flask"""
    port = int(os.environ.get('PORT', 10000))
    debug = os.environ.get('DEBUG', 'False').lower() == 'true'
    
    logger.info(f"🚀 Starting Flask server on port {port}")
    app.run(host='0.0.0.0', port=port, debug=debug)


if __name__ == '__main__':
    # حل مشكلة الـ Event Loop
    try:
        loop = asyncio.get_event_loop()
        if loop.is_closed():
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)
    except RuntimeError:
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
    
    # تعيين الويب هوك
    logger.info("🔄 Setting up webhook...")
    success = loop.run_until_complete(setup_webhook())
    
    if success:
        logger.info("✅ Bot is ready and webhook is set!")
    else:
        logger.warning("⚠️ Bot started but webhook setup failed!")
    
    # تشغيل خادم Flask
    run_flask()
