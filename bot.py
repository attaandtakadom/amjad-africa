import os
import requests
from flask import Flask, request

# جلب البيانات من Render Environment
TOKEN = os.environ.get('BOT_TOKEN')
# هذا السطر سيقوم بتنظيف الرابط تلقائياً من أي مسافات أو شرطات زائدة
RENDER_URL = os.environ.get('RENDER_EXTERNAL_URL', '').strip().rstrip('/')
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)

@app.route('/')
def home():
    return "Status: OK", 200

@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    data = request.get_json(force=True)
    print(f"--- وصلت رسالة جديدة: {data}") # سيظهر هذا في Logs رندر
    
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        
        # محاولة إرسال رد بسيط جداً بدون أزرار أولاً للتجربة
        payload = {
            'chat_id': chat_id,
            'text': "✅ تم الاتصال! إذا وصلت هذه الرسالة فالسيرفر يعمل.",
            'reply_markup': {
                "inline_keyboard": [[
                    {"text": "فتح المنظومة 🚀", "web_app": {"url": WEB_APP_URL}}
                ]]
            }
        }
        
        r = requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=payload)
        print(f"--- نتيجة الرد: {r.status_code} - {r.text}")

    return 'ok', 200

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    # تحديث الـ Webhook يدوياً عند التشغيل
    webhook_url = f"{RENDER_URL}/{TOKEN}"
    requests.get(f"https://api.telegram.org/bot{TOKEN}/setWebhook?url={webhook_url}&drop_pending_updates=True")
    app.run(host='0.0.0.0', port=PORT)
