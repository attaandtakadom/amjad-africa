import os
import requests
from flask import Flask, request

# جلب البيانات من Render
TOKEN = os.environ.get('BOT_TOKEN')
WEB_APP_URL = 'https://attaandtakadom.github.io/amjad-africa/'

app = Flask(__name__)

@app.route('/')
def home():
    return "Bot is Running", 200

# هذا المسار هو الذي يرسل عليه تليجرام الرسائل (التوكن مباشرة)
@app.route(f'/{TOKEN}', methods=['POST'])
def respond():
    data = request.get_json(force=True)
    
    if 'message' in data:
        chat_id = data['message']['chat']['id']
        text = data['message'].get('text', '')

        if text.startswith('/start'):
            payload = {
                'chat_id': chat_id,
                'text': "✅ تم الاتصال بنجاح!\nمرحباً بك في منظومة أمجاد أفريقيا.",
                'reply_markup': {
                    "inline_keyboard": [[
                        {"text": "فتح المنظومة 🚀", "web_app": {"url": WEB_APP_URL}}
                    ]]
                }
            }
            # إرسال الرد فوراً
            requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", json=payload)
            
    return 'ok', 200

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=PORT)
