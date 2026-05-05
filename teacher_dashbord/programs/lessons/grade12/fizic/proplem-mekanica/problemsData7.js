const problemsData7 = [
    {
        id: 1,
        title: "تمرين 1: إيجاد الشد في نظام بكرة بسيطة",
        content: `
            <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
                <div style="background: #e3f2fd; padding: 15px; border-radius: 10px; border-right: 5px solid #2196f3;">
                    <p>جسمان كتلتهما <b>(1kg)</b> و <b>(0.5kg)</b> يتصلان بخيط خفيف يمر على بكرة ملساء. بدأت المجموعة الحركة من السكون.</p>
                    <p style="color: #c0392b; font-weight: bold;">المطلوب: حساب مقدار الشد (T) في الخيط.</p>
                </div>

                <!-- الرسم التوضيحي -->
                <div style="text-align: center; margin: 20px 0;">
                    <svg width="200" height="150">
                        <circle cx="100" cy="30" r="10" fill="#7f8c8d"/> <!-- البكرة -->
                        <line x1="90" y1="30" x2="90" y2="100" stroke="black" stroke-width="2"/>
                        <line x1="110" y1="30" x2="110" y2="70" stroke="black" stroke-width="2"/>
                        <rect x="80" y="100" width="20" height="20" fill="#e74c3c"/> <!-- 1kg -->
                        <rect x="100" y="70" width="20" height="20" fill="#3498db"/> <!-- 0.5kg -->
                        <text x="60" y="115" font-size="12">1kg</text>
                        <text x="125" y="85" font-size="12">0.5kg</text>
                    </svg>
                </div>
            </div>`,
        options: ["6.67 N", "10.0 N", "5.0 N", "7.5 N"],
        ans: "6.67 N",
        sol: `
            <div style="direction: rtl; text-align: right; line-height: 1.8;">
                <h4 style="color: #2c3e50; border-bottom: 2px solid #27ae60;">خطوات الحل (بالتسلسل المبسط):</h4>
                
                <p><b>1. حساب العجلة المشتركة (a):</b>
                <br>العجلة = (فرق الكتل ÷ مجموع الكتل) × الجاذبية
                <br>a = (1 - 0.5) ÷ (1 + 0.5) × 10
                <br>a = 0.5 ÷ 1.5 × 10 = <b>3.33 m/s²</b></p>

                <p style="color: #c0392b; font-weight: bold;">2. حساب الشد (T) باستخدام الجسم الأصغر (0.5kg):</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                    الجسم الأصغر يصعد للأعلى، لذا:
                    <br><b>الشد = الوزن + (الكتلة × العجلة)</b>
                    <br>الشد = (0.5 × 10) + (0.5 × 3.33)
                    <br>الشد = 5 + 1.665
                    <br><span style="color: #27ae60; font-weight: bold; font-size: 20px;">T ≈ 6.67 N</span>
                </div>
            </div>`
    }
];