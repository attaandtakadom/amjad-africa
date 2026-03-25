import os
import requests
import logging
from flask import Flask, request

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# جلب البيانات من Render
TOKEN = os.environ.get('BOT_TOKEN')
CHANNEL_ID = os.environ.get('CHANNEL_ID') # تأكد أنه @amjadafrica في Render
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)

def check_subscription(user_id):
    try:
        url = f"https://api.telegram.org/bot{TOKEN}/getChatMember"
        params = {'chat_id': CHANNEL_ID, 'user_id': user_id}
        r = requests.get(url, params=params).json()
        if r.get('ok'):
            status = r.get('result', {}).get('status', '')
            return status in ['member', 'administrator', 'creator']
        return False
    except Exception as e:
        logger.error(f"Subscription Check Error: {e}")
        return False

@app.route('/')
def home(): return "Amjad Africa System: Online", 200

@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    try:
        data = request.get_json(force=True)
        if 'message' in data:
            chat_id = data['message']['chat']['id']
            user_id = data['message']['from']['id']
            
            if check_subscription(user_id):
                # رسالة المشترك (فتح المنظومة)
                payload = {
                    'chat_id': chat_id,
                    'text': "✅ أهلاً بك في منظومة أمجاد أفريقيا!\nتم التحقق من اشتراكك بنجاح. تفضل بالدخول:",
                    'reply_markup': {
                        "inline_keyboard": [[
                            {"text": "فتح المنظومة 🚀", "web_app": {"url": WEB_APP_URL}}
                        ]]
                    }
                }
            else:
                # رسالة غير المشترك (رابط القناة الصحيح)
                # نقوم ببناء الرابط يدوياً لضمان عمله
                clean_name = CHANNEL_ID.replace('@', '')
                channel_link = f"https://t.me/{clean_name}"
                
                payload = {
                    'chat_id': chat_id,
                    'text': f"⚠️ الوصول للمنظومة مخصص لمشتركي القناة فقط.\n\nيرجى الاشتراك في القناة أولاً ثم أعد إرسال /start",
                    'reply_markup': {
                        "inline_keyboard": [[
                            {"text": "إضغط هنا للاشتراك في القناة ✅", "url": channel_link}
                        ]]
                    }
                }
            requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=payload)
        return 'ok', 200
    except Exception as e:
        logger.error(f"General Error: {e}")
        return 'ok', 200

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=PORT)
