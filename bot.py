import os
import requests
from flask import Flask, request

TOKEN = os.environ.get('BOT_TOKEN')
CHANNEL_ID = os.environ.get('CHANNEL_ID') # هنا نضع الرقم مثل -100xxxx
# ضع رابط قناتك هنا يدوياً لضمان عمل الزر دائماً
CHANNEL_USERNAME = "amjadafrica" 
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)

def check_subscription(user_id):
    try:
        url = f"https://api.telegram.org/bot{TOKEN}/getChatMember"
        # الفحص باستخدام الـ ID الرقمي هو الأقوى
        params = {'chat_id': CHANNEL_ID, 'user_id': user_id}
        r = requests.get(url, params=params).json()
        if r.get('ok'):
            status = r.get('result', {}).get('status', '')
            return status in ['member', 'administrator', 'creator']
        return False
    except:
        return False

@app.route('/')
def home(): return "System Online", 200

@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    data = request.get_json(force=True)
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        user_id = data['message']['from']['id']
        
        if check_subscription(user_id):
            payload = {
                'chat_id': chat_id,
                'text': "✅ تم التحقق! أهلاً بك في منظومة أمجاد أفريقيا.",
                'reply_markup': {"inline_keyboard": [[{"text": "فتح المنظومة 🚀", "web_app": {"url": WEB_APP_URL}}]]}
            }
        else:
            payload = {
                'chat_id': chat_id,
                'text': "⚠️ عذراً، يجب الاشتراك في القناة أولاً لتتمكن من استخدام المنظومة.",
                'reply_markup': {"inline_keyboard": [[{"text": "إضغط هنا للاشتراك ✅", "url": f"https://t.me/{CHANNEL_UصSERNAME}"}]]}
            }
        requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=payload)
    return 'ok', 200

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=PORT)
