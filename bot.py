import os
import requests
import logging
from flask import Flask, request

# إعداد التنبيهات لرؤية النشاط في Logs رندر
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# جلب البيانات من إعدادات البيئة في Render
TOKEN = os.environ.get('BOT_TOKEN')
CHANNEL_ID = os.environ.get('CHANNEL_ID') # تأكد من وجوده في إعدادات رندر مثل @amjad_africa
RENDER_URL = os.environ.get('RENDER_EXTERNAL_URL', '').strip().rstrip('/')
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)

def check_subscription(user_id):
    """التحقق من اشتراك المستخدم في القناة"""
    try:
        url = f"https://api.telegram.org/bot{TOKEN}/getChatMember"
        params = {'chat_id': CHANNEL_ID, 'user_id': user_id}
        response = requests.get(url, params=params).json()
        status = response.get('result', {}).get('status', '')
        return status in ['member', 'administrator', 'creator']
    except Exception as e:
        logger.error(f"Error checking subscription: {e}")
        return False

@app.route('/')
def home():
    return "Bot is Running", 200

@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    try:
        data = request.get_json(force=True)
        if 'message' in data:
            chat_id = data['message']['chat']['id']
            user_id = data['message']['from']['id']
            text = data['message'].get('text', '')

            if text.startswith('/start'):
                # فحص الاشتراك
                if check_subscription(user_id):
                    # إذا كان مشتركاً
                    payload = {
                        'chat_id': chat_id,
                        'text': "✅ أهلاً بك في منظومة أمجاد أفريقيا!\nتم التحقق من اشتراكك بنجاح.\n\nاضغط على الزر بالأسفل للدخول:",
                        'reply_markup': {
                            "inline_keyboard": [[
                                {"text": "فتح المنظومة 🚀", "web_app": {"url": WEB_APP_URL}}
                            ]]
                        }
                    }
                else:
                    # إذا لم يكن مشتركاً
                    channel_url = f"https://t.me/{CHANNEL_ID.replace('@', '')}"
                    payload = {
                        'chat_id': chat_id,
                        'text': f"⚠️ عذراً، يجب عليك الاشتراك في القناة أولاً لاستخدام المنظومة.\n\nاشترك ثم أرسل /start مرة أخرى.",
                        'reply_markup': {
                            "inline_keyboard": [[
                                {"text": "إضغط هنا للاشتراك في القناة ✅", "url": channel_url}
                            ]]
                        }
                    }
                
                requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=payload)
                
        return 'ok', 200
    except Exception as e:
        logger.error(f"Error in respond: {e}")
        return 'error', 500

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    # تحديث الـ Webhook عند التشغيل لضمان الربط
    if TOKEN and RENDER_URL:
        webhook_url = f"{RENDER_URL}/{TOKEN}"
        requests.get(f"https://api.telegram.org/bot{TOKEN}/setWebhook?url={webhook_url}&drop_pending_updates=True")
    
    app.run(host='0.0.0.0', port=PORT)
