import os
import requests
from flask import Flask, request

# الإعدادات من Render (تأكد من مطابقة الأسماء في لوحة تحكم رندر)
TOKEN = os.environ.get('BOT_TOKEN') # التوكن الخاص ببوت أمجاد
CHANNEL_ID = os.environ.get('CHANNEL_ID') # رقم القناة -100...
CHANNEL_LINK = os.environ.get('CHANNEL_LINK') # رابط الدعوة للقناة الخاصة https://t.me/+...
APP_URL = "https://attaandtakadom.github.io/amjad-africa/"

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
    return f"Amjad Africa Server is Live.", 200

@app.route(f'/{TOKEN}' if TOKEN else '/webhook', methods=['POST'])
def telegram_webhook():
    try:
        data = request.get_json(force=True, silent=True)
        if not data: return "OK", 200

        # استخراج المعرفات (نفس منطق بوتك الناجح)
        msg_obj = data.get("message") or data.get("callback_query", {}).get("message")
        user_obj = data.get("message", {}).get("from") or data.get("callback_query", {}).get("from")

        if user_obj and msg_obj:
            chat_id = msg_obj["chat"]["id"]
            user_id = user_obj["id"]

            # التحقق من الاشتراك
            is_member = False
            try:
                check_url = f"https://api.telegram.org/bot{TOKEN}/getChatMember"
                res = requests.post(check_url, json={"chat_id": CHANNEL_ID, "user_id": user_id}, timeout=8).json()
                if res.get("ok") and res["result"]["status"] in ['member', 'administrator', 'creator']:
                    is_member = True
            except Exception as e:
                print(f"Sub-check Error: {e}")

            # بناء الرد الذكي
            if is_member:
                text = "✅ تم التحقق بنجاح! مرحباً بك في منظومة أمجاد أفريقيا.\nاضغط بالأسفل للدخول:"
                kb = {"inline_keyboard": [[{"text": "دخول المنظومة 🚀", "web_app": {"url": APP_URL}}]]}
            else:
                text = "⚠️ عذراً، يجب عليك الانضمام لقناة المنظومة أولاً لتتمكن من استخدام البوت."
                kb = {"inline_keyboard": [
                    [{"text": "1️⃣ انضم للقناة من هنا", "url": CHANNEL_LINK}],
                    [{"text": "2️⃣ اضغط للتفعيل بعد الانضمام ✅", "url": f"https://t.me/amjad_africa2027bot?start=check"}]
                ]}

            # إرسال الرسالة
            requests.post(f"https://api.telegram.org/bot{TOKEN}/sendMessage", 
                          json={"chat_id": chat_id, "text": text, "reply_markup": kb}, timeout=8)

    except Exception as e:
        print(f"Global Error: {e}")
    
    return "OK", 200

if __name__ == '__main__':
    # تحديث الويب هوك تلقائياً عند التشغيل (لضمان الربط)
    RENDER_URL = os.environ.get('RENDER_EXTERNAL_URL')
    if TOKEN and RENDER_URL:
        requests.get(f"https://api.telegram.org/bot{TOKEN}/setWebhook?url={RENDER_URL}/{TOKEN}")
        
    app.run(host='0.0.0.0', port=10000)
