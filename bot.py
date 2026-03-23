import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, ContextTypes

# جلب البيانات من إعدادات منصة Koyeb (Environment Variables)
TOKEN = os.getenv('BOT_TOKEN')
CHANNEL_ID = os.getenv('CHANNEL_ID') # مثال: @amjad_africa
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    try:
        # التحقق من الاشتراك في القناة
        member = await context.bot.get_chat_member(chat_id=CHANNEL_ID, user_id=user_id)
        
        if member.status in ['member', 'administrator', 'creator']:
            # إذا كان مشتركاً، تظهر له المنظومة
            keyboard = [[InlineKeyboardButton("فتح المنظومة 🚀", web_app={"url": WEB_APP_URL})]]
            reply_markup = InlineKeyboardMarkup(keyboard)
            await update.message.reply_text(f"مرحباً بك {update.effective_user.first_name} في منظومة أمجاد!\n\nيمكنك الآن البدء بالضغط على الزر أدناه:", reply_markup=reply_markup)
        else:
            raise Exception("Not Member")

    except Exception:
        # إذا لم يكن مشتركاً، يطلب منه الاشتراك
        keyboard = [[InlineKeyboardButton("اشترك في القناة أولاً ✅", url=f"https://t.me/{CHANNEL_ID[1:]}")]]
        await update.message.reply_text("⚠️ عذراً، يجب عليك الاشتراك في قناة أمجاد أفريقيا أولاً لاستخدام البوت والمنظومة.", reply_markup=InlineKeyboardMarkup(keyboard))

def main():
    if not TOKEN:
        print("خطأ: لم يتم العثور على BOT_TOKEN")
        return
        
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    print("البوت يعمل الآن بنجاح...")
    app.run_polling()

if __name__ == '__main__':
    main()
