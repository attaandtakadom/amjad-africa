function addPhysicsLawsPages() {
    const printableDoc = document.getElementById('printable-pdf-document');
    
    // ===== صفحة القوانين الأولى: الكهرباء الساكنة =====
    const page1 = document.createElement('div');
    page1.className = 'pdf-laws-page';
    page1.style.cssText = `
        page-break-after: always;
        break-after: page;
        padding: 8mm 10mm 6mm 10mm;
        font-family: 'Cairo', sans-serif;
        background: #ffffff;
        direction: rtl;
    `;
    page1.innerHTML = `
       <div style="background: #f8fafc; padding: 10px; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;">
    
    <!-- العنوان الرئيسي للملخص -->
    <div style="text-align: center; margin-bottom: 12px; border-bottom: 3px solid #2563eb; padding-bottom: 8px; direction: rtl;">
        <h1 style="font-size: 26px; color: #1a365d; font-weight: 800; margin: 0;">📚 ملخص قوانين الفيزياء</h1>
        <p style="font-size: 14px; color: #475569; margin: 4px 0 0 0;">الباب الأول: الكهرباء الساكنة</p>
    </div>

    <!-- 1. عدد الإلكترونات -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #dc2626; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">① عدد الإلكترونات</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #dc2626; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>n</span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 8px 2px 8px;">Q</span>
                <span style="padding: 2px 8px 0 8px;">e</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center; direction: ltr;">
            حيث شحنة الإلكترون: <b>e = 1.6 × 10⁻¹⁹ C</b>
        </div>
    </div>

    <!-- 2. قانون كولوم -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">② قانون كولوم</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #2563eb; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>F</span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 8px 2px 8px;">k × Q₁ × Q₂</span>
                <span style="padding: 2px 8px 0 8px;">R²</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center; direction: ltr;">
            ثابت كولوم: <b>k = 9 × 10⁹ N·m²/C²</b>
        </div>
    </div>

    <!-- 3. شدة المجال الكهربائي -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #16a34a; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">③ شدة المجال الكهربائي (E)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #16a34a; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 14px; direction: ltr;">
            <span>E =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">F</span>
                <span style="padding: 2px 4px 0 4px;">q₀</span>
            </div>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>E =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">k × Q</span>
                <span style="padding: 2px 4px 0 4px;">R²</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">
            الوحدة: <b>N/C</b> أو <b>V/m</b>
        </div>
    </div>

    <!-- 4. الجهد الكهربائي -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #8b5cf6; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">④ الجهد الكهربائي (V)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #8b5cf6; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 14px; direction: ltr;">
            <span>V =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">W</span>
                <span style="padding: 2px 4px 0 4px;">Q</span>
            </div>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>V =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">k × Q</span>
                <span style="padding: 2px 4px 0 4px;">R</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">
            الوحدة: <b>فولت (V)</b>
        </div>
    </div>

    <!-- تذييل الصفحة لحماية الحقوق -->
    <div style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 6px; direction: rtl; font-weight: bold;">
        ⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡
    </div>

</div>`;
    printableDoc.appendChild(page1);

    // ===== صفحة القوانين الثانية: التيار والمقاومة =====
    const page2 = document.createElement('div');
    page2.className = 'pdf-laws-page';
    page2.style.cssText = `
        page-break-after: always;
        break-after: page;
        padding: 8mm 10mm 6mm 10mm;
        font-family: 'Cairo', sans-serif;
        background: #ffffff;
        direction: rtl;
    `;
    page2.innerHTML = `
<div style="background: #f8fafc; padding: 10px; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;">
    
    <div style="text-align: center; margin-bottom: 12px; border-bottom: 3px solid #2563eb; padding-bottom: 6px; direction: rtl;">
        <h1 style="font-size: 22px; color: #1a365d; font-weight: 800; margin: 0;">📚 ملخص قوانين الفيزياء</h1>
        <p style="font-size: 13px; color: #475569; margin: 2px 0 0 0;">الوحدة الأولى والثانية: التيار والمقاومات والجهد الكهربائي</p>
    </div>
        
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #f59e0b; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">④ شدة التيار الكهربائي (I)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #f59e0b; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>I</span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 2px 6px;">Q</span>
                <span style="padding: 2px 6px 0 6px;">t</span>
            </div>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 2px 6px;">n × e</span>
                <span style="padding: 2px 6px 0 6px;">t</span>
            </div>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">الوحدة: <b>أمبير (A)</b> | حيث n: عدد الإلكترونات، e: شحنة الإلكترون الثابتة</div>
    </div>

    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #dc2626; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑤ قانون أوم والمقاومة</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #dc2626; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 14px; direction: ltr;">
            <span>V = I × R</span>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>I =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">V</span>
                <span style="padding: 2px 4px 0 4px;">R</span>
            </div>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>R =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">V</span>
                <span style="padding: 2px 4px 0 4px;">I</span>
            </div>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">ينطبق عند <b>ثبوت درجة الحرارة</b> | الوحدة للمقاومة: <b>أوم (Ω)</b></div>
    </div>

    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑥ المقاومة النوعية (ρ) والعوامل المؤثرة</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #2563eb; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>ρ</span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 2px 6px;">R × A</span>
                <span style="padding: 2px 6px 0 6px;">L</span>
            </div>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">الوحدة: <b>Ω·m</b> | حيث A: مساحة المقطع (πr²)، L: طول السلك بالمتر</div>
    </div>

    <div style="background: #fffbeb; border-radius: 8px; padding: 10px 14px; margin-bottom: 6px; border: 2px solid #10b981; direction: rtl;">
        <h2 style="font-size: 14px; color: #065f46; font-weight: 700; margin: 0 0 6px 0;">⑦ حساب الجهد الكهربائي (V)</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            
            <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #10b981;">
                <div style="font-size: 12px; font-weight: bold; color: #1e293b; text-align: center; margin-bottom: 6px;">أ) بدلالة الشغل المبذول</div>
                <div style="display: flex; justify-content: center; align-items: center; gap: 6px; direction: ltr; font-size: 17px; font-weight: bold; color: #1e293b; margin-bottom: 6px;">
                    <span>V</span>
                    <span>=</span>
                    <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1;">
                        <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 1px 6px;">W</span>
                        <span style="padding: 1px 6px 0 6px;">Q</span>
                    </div>
                </div>
                <div style="font-size: 11px; color: #475569; line-height: 1.4;">
                    • <b>W :</b> الشغل بالجول (J).<br>
                    • <b>Q :</b> الشحنة بالكولوم (C).
                </div>
            </div>

            <div style="background: #ffffff; border-radius: 6px; padding: 8px; border: 1px solid #10b981;">
                <div style="font-size: 12px; font-weight: bold; color: #1e293b; text-align: center; margin-bottom: 6px;">ب) لشحنة نقطية معزولة</div>
                <div style="display: flex; justify-content: center; align-items: center; gap: 6px; direction: ltr; font-size: 17px; font-weight: bold; color: #1e293b; margin-bottom: 6px;">
                    <span>V</span>
                    <span>=</span>
                    <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1;">
                        <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 1px 6px;">k × Q</span>
                        <span style="padding: 1px 6px 0 6px;">R</span>
                    </div>
                </div>
                <div style="font-size: 11px; color: #475569; line-height: 1.4;">
                    • <b>Q :</b> الشحنة المسببة للمجال (C).<br>
                    • <b>R :</b> مسافة النقطة (m).
                </div>
            </div>

        </div>

        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #10b981; margin-top: 6px; font-size: 11px; color: #1e293b; line-height: 1.4;">
            💡 <b>تفكيك ثابت كولوم (k):</b> يعبر عن الخصائص الكهربائية للهواء أو الفراغ، وحيث أن:
            <div style="display: flex; justify-content: center; align-items: center; gap: 6px; margin: 4px 0; direction: ltr; font-size: 15px; font-weight: bold;">
                <span>k</span>
                <span>=</span>
                <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                    <span style="border-bottom: 2px solid #1e293b; padding: 0 4px;">1</span>
                    <span style="padding: 1px 4px 0 4px;">4π × ε₀</span>
                </div>
                <span style="color: #475569; font-size: 14px; font-weight: bold; margin-left: 4px;">≈ 9 × 10⁹ N·m²/C²</span>
            </div>
            <span style="color: #065f46;">(حيث <b>ε₀</b> هي سماحية الفراغ الكهربائية الثابتة).</span>
        </div>
    </div>

</div>




    `;
    printableDoc.appendChild(page2);

    // ===== صفحة القوانين الثالثة: توصيل المقاومات =====
   // ===== صفحة القوانين الثالثة: توصيل المقاومات =====
// ===== صفحة القوانين الثالثة: توصيل المقاومات (معدلة) =====
   // ===== صفحة القوانين الرابعة: القدرة والطاقة والمغناطيسية =====

// ===== صفحة القوانين الثالثة: توصيل المقاومات (نسخة منسقة) =====
const page3 = document.createElement('div');
page3.className = 'pdf-laws-page';
page3.style.cssText = `
    page-break-after: always;
    break-after: page;
    padding: 5mm 8mm 5mm 8mm;
    font-family: 'Cairo', sans-serif;
    background: #ffffff;
    direction: rtl;
`;
page3.innerHTML = `
   <div style="background: #f8fafc; padding: 10px; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;">
    
    <!-- العنوان الرئيسي للملخص -->
    <div style="text-align: center; margin-bottom: 12px; border-bottom: 3px solid #2563eb; padding-bottom: 6px; direction: rtl;">
        <h1 style="font-size: 20px; color: #1a365d; font-weight: 800; margin: 0;">📚 ملخص قوانين الفيزياء</h1>
        <p style="font-size: 13px; color: #475569; margin: 2px 0 0 0;">توصيل المقاومات - التوالي والتوازي</p>
    </div>

    <!-- 8. توصيل التوالي -->
    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 8px; border-right: 4px solid #dc2626; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑦ توصيل المقاومات على التوالي</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #dc2626; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; direction: ltr;">I = I₁ = I₂ = I₃</div>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #dc2626; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; margin-top: 4px; direction: ltr;">V = V₁ + V₂ + V₃</div>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #dc2626; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; margin-top: 4px; direction: ltr;">R = R₁ + R₂ + R₃</div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center; display: flex; align-items: center; justify-content: center; gap: 6px; direction: ltr; font-weight: bold;">
            <span style="direction: rtl; font-size: 12px; color: #475569; font-weight: normal;">حالة خاصة (مقاومات متساوية):</span>
            <span>R = R × n</span>
        </div>
    </div>

    <!-- 9. توصيل التوازي -->
    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 8px; border-right: 4px solid #2563eb; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑧ توصيل المقاومات على التوازي</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #2563eb; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; direction: ltr;">V = V₁ = V₂ = V₃</div>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #2563eb; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; margin-top: 4px; direction: ltr;">I = I₁ + I₂ + I₃</div>
        
        <!-- قانون مقلوب المقاومة المكافئة كسر -->
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #2563eb; font-size: 15px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 4px; direction: ltr;">
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px;">1</span>
                <span style="padding: 1px 4px 0 4px;">R</span>
            </div>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px;">1</span>
                <span style="padding: 1px 4px 0 4px;">R₁</span>
            </div>
            <span>+</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px;">1</span>
                <span style="padding: 1px 4px 0 4px;">R₂</span>
            </div>
            <span>+</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px;">1</span>
                <span style="padding: 1px 4px 0 4px;">R₃</span>
            </div>
        </div>

        <!-- حالة خاصة توازي كسر -->
        <div style="margin-top: 6px; display: flex; align-items: center; justify-content: center; gap: 6px; direction: ltr; font-weight: bold; font-size: 15px; color: #1e293b;">
            <span style="direction: rtl; font-size: 12px; color: #475569; font-weight: normal;">حالة خاصة (مقاومات متساوية):</span>
            <span>R =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 6px;">R</span>
                <span style="padding: 1px 6px 0 6px;">n</span>
            </div>
        </div>
    </div>

    <!-- 10. مقاومتان فقط على التوازي -->
    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 8px; border-right: 4px solid #16a34a; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑨ مقاومتان فقط على التوازي</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 2px solid #16a34a; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>R<sub>t</sub></span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.2; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 8px 2px 8px;">R₁ × R₂</span>
                <span style="padding: 2px 8px 0 8px;">R₁ + R₂</span>
            </div>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">حاصل ضرب المقاومتين مقسوماً على حاصل جمعهما</div>
    </div>

    <!-- 11. التيار الكلي في التوازي -->
    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #f59e0b; direction: rtl;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑩ التيار الكلي في دائرة التوازي</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #f59e0b; text-align: center; font-size: 15px; font-weight: bold; color: #1e293b; direction: ltr;">I<sub>t</sub> = I₁ + I₂ + I₃</div>
        
        <!-- قانون أوم للتيار الكلي كسر -->
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #f59e0b; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 4px; direction: ltr;">
            <span>I<sub>t</sub></span>
            <span>=</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.2; vertical-align: middle;">
                <span style="border-bottom: 1.5px solid #1e293b; padding: 0 8px 2px 8px;">V<sub>t</sub></span>
                <span style="padding: 2px 8px 0 8px;">R<sub>t</sub></span>
            </div>
        </div>
    </div>

</div>

<div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #2563eb; direction: rtl;">
    <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑨ مجزئ الجهد (التوصيل على التوالي)</h2>
    
    <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #2563eb; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
        <span>V₁</span>
        <span>=</span>
        <span>V_total</span>
        <span>×</span>
        <div style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; line-height: 1.2;">
            <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px 2px 4px;">R₁</span>
            <span style="padding: 2px 4px 0 4px;">R_total</span>
        </div>
    </div>
    
    <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #2563eb; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 5px; direction: ltr;">
        <span>V₂</span>
        <span>=</span>
        <span>V_total</span>
        <span>×</span>
        <div style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; line-height: 1.2;">
            <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px 2px 4px;">R₂</span>
            <span style="padding: 2px 4px 0 4px;">R_total</span>
        </div>
    </div>
    
    <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">
        حيث: R_total = R₁ + R₂ (الجهد يتجزأ طردياً مع المقاومة)
    </div>
</div>

<div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #2563eb; direction: rtl;">
    <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑩ مجزئ التيار (التوصيل على التوازي)</h2>
    
    <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #2563eb; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
        <span>I₁</span>
        <span>=</span>
        <span>I_total</span>
        <span>×</span>
        <div style="display: inline-flex; flex-direction: column; vertical-align: middle; text-align: center; line-height: 1.2;">
            <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px 2px 4px;">R₂</span>
            <span style="padding: 2px 4px 0 4px;">R₁ + R₂</span>
        </div>
    </div>
    
    <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #2563eb; font-size: 16px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 5px; direction: ltr;">
        <span>I₂</span>
        <span>=</span>
        <span>I_total</span>
        <span>×</span>
        <div style="display: inline-flex; flex-style: column; flex-direction: column; vertical-align: middle; text-align: center; line-height: 1.2;">
            <span style="border-bottom: 1.5px solid #1e293b; padding: 0 4px 2px 4px;">R₁</span>
            <span style="padding: 2px 4px 0 4px;">R₁ + R₂</span>
        </div>
    </div>
    
    <div style="font-size: 12px; color: #475569; margin-top: 6px; text-align: center;">
        ملاحظة: لحساب تيار فرع نضرب التيار الكلي في مقاومة الفرع الآخر المقابل
    </div>
</div>

<div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑨ قانون مجزئ التيار (مقاومتين على التوازي)</h2>
        
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #2563eb; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>I₁</span>
            <span>=</span>
            <span>I<sub>t</sub> ×</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 8px 2px 8px;">R₂</span>
                <span style="padding: 2px 8px 0 8px;">R₁ + R₂</span>
            </div>
        </div>

        <div style="background: #eff6ff; border-radius: 6px; padding: 8px 12px; border: 1px dashed #2563eb; margin-top: 8px; font-size: 12px; color: #1e293b; line-height: 1.5;">
            💡 <b>ملاحظة هامة للطلاب:</b> عند حساب تيار فرع معين (مثل <span style="direction: ltr; display: inline-block; font-weight: bold;">I₁</span>)، فإننا نضرب التيار الكلي في مقاومة الفرع <b>الآخر المقابل له</b> (<span style="direction: ltr; display: inline-block; font-weight: bold;">R₂</span>) وليس في نفس مقاومته؛ وذلك بسبب العلاقة العكسية بين التيار والمقاومة عند ثبوت الجهد.
        </div>
    </div>
    

    <!-- 12. تأثير زيادة عدد المقاومات -->
    <div style="background: #fef3c7; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border: 2px solid #f59e0b;">
        <h2 style="font-size: 14px; color: #92400e; font-weight: 700; margin: 0 0 4px 0;">⑫ تأثير زيادة عدد المقاومات</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
            <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 2px solid #dc2626; text-align: center;">
                <div style="font-size: 14px; font-weight: bold; color: #1e293b;">توصيل التوالي</div>
                <div style="font-size: 13px; color: #475569;">⬆ تزداد المقاومة الكلية</div>
                <div style="font-size: 13px; color: #475569;">⬇ يقل التيار الكلي</div>
                <div style="font-size: 13px; color: #475569;">⬆ يزداد الجهد الكلي</div>
            </div>
            <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 2px solid #16a34a; text-align: center;">
                <div style="font-size: 14px; font-weight: bold; color: #1e293b;">توصيل التوازي</div>
                <div style="font-size: 13px; color: #475569;">⬇ تقل المقاومة الكلية</div>
                <div style="font-size: 13px; color: #475569;">⬆ يزداد التيار الكلي</div>
                <div style="font-size: 13px; color: #475569;">⬇ يقل الجهد الكلي</div>
            </div>
        </div>
        <div style="font-size: 12px; color: #78350f; margin-top: 4px; text-align: center;">
            💡 الجهد على كل مقاومة لا يتغير في حالة التوازي (V = V₁ = V₂ = V₃)
        </div>
        <div style="font-size: 12px; color: #78350f; margin-top: 2px; text-align: center;">
            💡 التيار على كل مقاومة لا يتغير في حالة التوالي (I = I₁ = I₂ = I₃)
        </div>
    </div>

    <div style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 6px; border-top: 1px solid #e2e8f0; padding-top: 4px;">
        ⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡
    </div>
`;
printableDoc.appendChild(page3);

const page4 = document.createElement('div');
page4.className = 'pdf-laws-page';
page4.style.cssText = `
    page-break-after: always;
    break-after: page;
    padding: 5mm 8mm 5mm 8mm;
    font-family: 'Cairo', sans-serif;
    background: #ffffff;
    direction: rtl;
`;
page4.innerHTML = `
    <div style="text-align: center; margin-bottom: 8px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
        <h1 style="font-size: 22px; color: #1e3a8a; font-weight: 800; margin: 0;">⚡ ملخص قوانين المغناطيسية</h1>
        <p style="font-size: 13px; color: #475569; margin: 2px 0 0 0;">حساب كثافة الفيض المغناطيسي (B) وتطبيقاتها</p>
    </div>

    <div style="background: #fef2f2; border-radius: 6px; padding: 6px 10px; margin-bottom: 8px; border: 1px dashed #ef4444; text-align: center; font-size: 12px; color: #991b1b; font-weight: bold;">
        ⚠️ تنبيه للامتحان: طول السلك ليس هو طول الملف! انتبه للمقام جيداً أثناء التعويض.
    </div>

    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #0284c7;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">① المجال المغناطيسي بالقرب من سلك مستقيم طويل</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #0284c7; display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 18px; font-weight: bold; color: #1e293b; margin-left: 8px;">B = </span>
            <table style="display: inline-table; border-collapse: collapse; text-align: center; vertical-align: middle; font-size: 17px; font-weight: bold; color: #1e293b; direction: ltr;">
                <tr><td style="border-bottom: 2px solid #1e293b; padding: 0 4px;">μ₀ × I</td></tr>
                <tr><td style="padding: 0 4px;">2π × d</td></tr>
            </table>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: right; line-height: 1.4;">
            • <b>d :</b> البُعد العمودي عن السلك بالمتر (m).<br>
            • <b>I :</b> شدة التيار الكهربائي بالأمبير (A).
        </div>
    </div>

    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #ec4899;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">② المجال المغناطيسي في مركز ملف دائري</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #ec4899; display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 18px; font-weight: bold; color: #1e293b; margin-left: 8px;">B = </span>
            <table style="display: inline-table; border-collapse: collapse; text-align: center; vertical-align: middle; font-size: 17px; font-weight: bold; color: #1e293b; direction: ltr;">
                <tr><td style="border-bottom: 2px solid #1e293b; padding: 0 4px;">μ₀ × N × I</td></tr>
                <tr><td style="padding: 0 4px;">2r</td></tr>
            </table>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: right; line-height: 1.4;">
            • <b>2r (في المقام):</b> هو <b>القطر الكامل</b> للملف الدائري بالمتر (حيث r هو نصف القطر).<br>
            • <b>N :</b> عدد لفات الملف الدائري.
        </div>
    </div>

    <div style="background: #f1f5f9; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border-right: 4px solid #10b981;">
        <h2 style="font-size: 14px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">③ المجال المغناطيسي داخل ملف لولبي (حلزوني)</h2>
        <div style="background: #ffffff; border-radius: 4px; padding: 8px 10px; border: 1px solid #10b981; display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 18px; font-weight: bold; color: #1e293b; margin-left: 8px;">B = </span>
            <table style="display: inline-table; border-collapse: collapse; text-align: center; vertical-align: middle; font-size: 17px; font-weight: bold; color: #1e293b; direction: ltr;">
                <tr><td style="border-bottom: 2px solid #1e293b; padding: 0 4px;">μ₀ × N × I</td></tr>
                <tr><td style="padding: 0 4px;">L</td></tr>
            </table>
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: right; line-height: 1.4;">
            • <b>L (في المقام):</b> هو <b>طول الملف نفسه</b> بالمتر (المسافة من أول لفة لآخر لفة).<br>
            • <b>N :</b> عدد لفات الملف الحلزوني.
        </div>
    </div>

    <div style="background: #fffbeb; border-radius: 6px; padding: 8px 12px; margin-bottom: 6px; border: 2px solid #f59e0b;">
        <h2 style="font-size: 14px; color: #92400e; font-weight: 700; margin: 0 0 4px 0;">💡 التمييز بين أنواع الأطوال في الامتحان</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
            <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 2px solid #ec4899; text-align: center;">
                <div style="font-size: 13px; font-weight: bold; color: #1e293b;">الملف الدائري (2r)</div>
                <div style="font-size: 12px; color: #475569; margin-top: 2px;">نستخدم في القانون <b>قطر المدار (2r)</b></div>
                <div style="font-size: 12px; color: #475569;">لا يوجد في قانونه طول ملف</div>
            </div>
            <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 2px solid #10b981; text-align: center;">
                <div style="font-size: 13px; font-weight: bold; color: #1e293b;">الملف اللولبي (L)</div>
                <div style="font-size: 12px; color: #475569; margin-top: 2px;">نستخدم في القانون <b>طول الملف نفسه (L)</b></div>
                <div style="font-size: 12px; color: #475569;">أي المسافة الطولية بين لفاته</div>
            </div>
        </div>
        <div style="background: #ffffff; border-radius: 4px; padding: 6px 10px; border: 1px solid #f59e0b; margin-top: 5px; text-align: center; font-size: 12px; color: #1e293b; direction: ltr;">
            <span style="direction: rtl; display: inline-block;">🔗 <b>قانون طول السلك الكلي (L_wire):</b> يُستخدم فقط إذا طلب طول السلك قبل لفه:</span><br>
            <span style="color: #b45309; font-weight: bold; font-size: 13px;">L_wire = 2πr × N</span>
        </div>
    </div>

    <div style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 6px; border-top: 1px solid #e2e8f0; padding-top: 4px;">
        ✨ مدرسة أمجاد أفريقيا الخاصة - متمنين لجميع الطلاب التوفيق والنجاح ✨
    </div>
`;
printableDoc.appendChild(page4);

const page5 = document.createElement('div');
page5.className = 'pdf-laws-page';
page4.style.cssText = `
    page-break-after: always;
    break-after: page;
    padding: 5mm 8mm 5mm 8mm;
    font-family: 'Cairo', sans-serif;
    background: #ffffff;
    direction: rtl;
`;


    page5.innerHTML = `
        <div style="background: #f8fafc; padding: 10px; border-radius: 8px; font-family: system-ui, -apple-system, sans-serif;">
    
    <!-- العنوان الرئيسي للملخص -->
    <div style="text-align: center; margin-bottom: 12px; border-bottom: 3px solid #2563eb; padding-bottom: 8px; direction: rtl;">
        <h1 style="font-size: 26px; color: #1a365d; font-weight: 800; margin: 0;">📚 ملخص قوانين الفيزياء</h1>
        <p style="font-size: 14px; color: #475569; margin: 4px 0 0 0;">القدرة - الطاقة - المغناطيسية - الحث الكهرومغناطيسي والمحولات</p>
    </div>

    <!-- 1. القدرة الكهربائية -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #dc2626; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">① القدرة الكهربائية (P)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #dc2626; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 10px; direction: ltr;">
            <span>P = V × I</span>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>P = I² × R</span>
            <span style="color: #cbd5e1; font-weight: normal;">|</span>
            <span>P =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 4px 2px 4px;">V²</span>
                <span style="padding: 2px 4px 0 4px;">R</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">الوحدة: <b>وات (W)</b></div>
    </div>

    <!-- 2. الطاقة الكهربائية -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">② الطاقة الكهربائية (E)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #2563eb; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 10px; direction: ltr;">
            <span>E = P × t = V × I × t</span>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">الوحدة: <b>جول (J)</b> أو <b>كيلووات.ساعة (kWh)</b></div>
    </div>

    <!-- 3. القوة المغناطيسية على سلك -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #16a34a; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">③ القوة المغناطيسية على سلك</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #16a34a; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; direction: ltr;">
            <span>F = B × I × L</span>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">حيث <b>B:</b> تسلا (T) | <b>I:</b> أمبير (A) | <b>L:</b> طول السلك بالمتر (m)</div>
    </div>

    <!-- 4. القوة المغناطيسية على شحنة متحركة -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #8b5cf6; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">④ القوة المغناطيسية على شحنة متحركة</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #8b5cf6; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; direction: ltr;">
            <span>F = B × Q × v</span>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">حيث <b>Q:</b> الشحنة بالكولوم (C) | <b>v:</b> السرعة بالمتر/ثانية (m/s)</div>
    </div>

    <!-- 5. قانون فاراداي للحث الكهرومغناطيسي -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #f59e0b; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑤ قانون فاراداي (القوة الدافعة الكهربائية المستحثة)</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #f59e0b; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>E = −N ×</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 6px 2px 6px;">ΔΦ</span>
                <span style="padding: 2px 6px 0 6px;">Δt</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">حيث <b>E:</b> فولت (V) | <b>N:</b> عدد اللفات | <b>Φ:</b> الفيض المغناطيسي بالويبر (Wb)</div>
    </div>

    <!-- 6. التردد والزمن الدوري -->
    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #16a34a; direction: rtl;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑥ التردد والزمن الدوري</h2>
        <div style="background: #ffffff; border-radius: 6px; padding: 10px 12px; border: 2px solid #16a34a; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 8px; direction: ltr;">
            <span>f =</span>
            <div style="display: inline-flex; flex-direction: column; text-align: center; line-height: 1.1; vertical-align: middle;">
                <span style="border-bottom: 2px solid #1e293b; padding: 0 8px 2px 8px;">1</span>
                <span style="padding: 2px 8px 0 8px;">T</span>
            </div>
        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">حيث <b>f:</b> التردد بالهرتز (Hz) | <b>T:</b> الزمن الدوري بالثانية (s)</div>
    </div>

    <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb; direction: rtl; page-break-inside: avoid; break-inside: avoid;">
        <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 6px 0;">⑦ قانون المحول الكهربائي المثالي</h2>
        
        <div style="background: #ffffff; border-radius: 6px; padding: 12px 14px; border: 2px solid #2563eb; font-size: 18px; font-weight: bold; color: #1e293b; display: flex; align-items: center; justify-content: center; gap: 12px; direction: ltr;">
            
            <div style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; width: 35px; line-height: 1.2;">
                <span style="padding-bottom: 2px;">Vₚ</span>
                <hr style="width: 100%; border: none; border-top: 2px solid #1e293b; margin: 2px 0; padding: 0;">
                <span style="padding-top: 2px;">Vₛ</span>
            </div>
            
            <span style="font-size: 19px; color: #1e293b; display: inline-block; vertical-align: middle;">=</span>
            
            <div style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; width: 35px; line-height: 1.2;">
                <span style="padding-bottom: 2px;">Nₚ</span>
        \
                <hr style="width: 100%; border: none; border-top: 2px solid #1e293b; margin: 2px 0; padding: 0;">
                <span style="padding-top: 2px;">Nₛ</span>
            </div>
            
            <span style="font-size: 19px; color: #1e293b; display: inline-block; vertical-align: middle;">=</span>
            
            <div style="display: inline-flex; flex-direction: column; align-items: center; justify-content: center; width: 35px; line-height: 1.2;">
                <span style="padding-bottom: 2px;">Iₛ</span>
                <hr style="width: 100%; border: none; border-top: 2px solid #1e293b; margin: 2px 0; padding: 0;">
                <span style="padding-top: 2px;">Iₚ</span>
            </div>

        </div>
        <div style="font-size: 13px; color: #475569; margin-top: 6px; text-align: center;">حيث <b>p:</b> ملف ابتدائي (Primary) | <b>s:</b> ملف ثانوي (Secondary)</div>
    </div>
    <!-- تذييل الصفحة لحماية الحقوق -->
    <div style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 10px; border-top: 1px solid #e2e8f0; padding-top: 6px; direction: rtl; font-weight: bold;">
        ⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡
    </div>

</div> `;
    printableDoc.appendChild(page5);

    // ===== صفحة القوانين الخامسة: النشاط الإشعاعي =====
    const page6 = document.createElement('div');
    page6.className = 'pdf-laws-page';
    page5.style.cssText = `
        page-break-after: always;
        break-after: page;
        padding: 8mm 10mm 6mm 10mm;
        font-family: 'Cairo', sans-serif;
        background: #ffffff;
        direction: rtl;
    `;
    page6.innerHTML = `
        <div style="text-align: center; margin-bottom: 12px; border-bottom: 3px solid #2563eb; padding-bottom: 8px;">
            <h1 style="font-size: 26px; color: #1a365d; font-weight: 800; margin: 0;">📖 ملخص قوانين الفيزياء</h1>
            <p style="font-size: 14px; color: #475569; margin: 4px 0 0 0;">النشاط الإشعاعي - معادلة أينشتاين - وحدات القياس</p>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #dc2626;">
            <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">⑯ اضمحلال ألفا (α)</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #dc2626; text-align: center; font-size: 16px; font-weight: bold; color: #1e293b;">ᴬ_Z X → ᴬ⁻⁴_(Z-2) Y + ⁴₂He + طاقة</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: center;">العدد الكتلي ينقص 4، العدد الذري ينقص 2</div>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #2563eb;">
            <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">⑰ اضمحلال بيتا (β⁻)</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #2563eb; text-align: center; font-size: 16px; font-weight: bold; color: #1e293b;">ᴬ_Z X → ᴬ_(Z+1) Y + β⁻ + طاقة</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: center;">العدد الكتلي ثابت، العدد الذري يزيد 1</div>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #16a34a;">
            <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">⑱ أشعة جاما (γ)</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #16a34a; text-align: center; font-size: 16px; font-weight: bold; color: #1e293b;">ᴬ_Z X* → ᴬ_Z X + γ</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: center;">العدد الكتلي والذري لا يتغيران</div>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #8b5cf6;">
            <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">⑲ معادلة أينشتاين</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #8b5cf6; text-align: center; font-size: 18px; font-weight: bold; color: #1e293b;">E = m × c²</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: center;">c = 3 × 10⁸ m/s</div>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #8b5cf6; text-align: center; font-size: 16px; font-weight: bold; color: #1e293b; margin-top: 4px;">Δm = ΔE / c²</div>
        </div>
        <div style="background: #fef3c7; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border: 2px solid #f59e0b;">
            <h2 style="font-size: 15px; color: #92400e; font-weight: 700; margin: 0 0 4px 0;">⑳ وحدات القياس الهامة</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 6px 10px; border: 2px solid #f59e0b; text-align: center; font-size: 14px; font-weight: bold; color: #1e293b;">1 m = 10² cm = 10³ mm</div>
            <div style="background: #ffffff; border-radius: 6px; padding: 6px 10px; border: 2px solid #f59e0b; text-align: center; font-size: 14px; font-weight: bold; color: #1e293b; margin-top: 4px;">1 m² = 10⁴ cm²</div>
            <div style="background: #ffffff; border-radius: 6px; padding: 6px 10px; border: 2px solid #f59e0b; text-align: center; font-size: 14px; font-weight: bold; color: #1e293b; margin-top: 4px;">1 m³ = 10⁶ cm³</div>
        </div>
        <div style="background: #f1f5f9; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; border-right: 5px solid #f59e0b;">
            <h2 style="font-size: 15px; color: #1e293b; font-weight: 700; margin: 0 0 4px 0;">㉑ عمر النصف</h2>
            <div style="background: #ffffff; border-radius: 6px; padding: 8px 12px; border: 2px solid #f59e0b; text-align: center; font-size: 16px; font-weight: bold; color: #1e293b;">الكمية المتبقية = الأصلية × (½)ⁿ</div>
            <div style="font-size: 12px; color: #475569; margin-top: 4px; text-align: center;">n = عدد فترات عمر النصف</div>
        </div>
        <div style="text-align: center; font-size: 11px; color: #94a3b8; margin-top: 8px; border-top: 1px solid #e2e8f0; padding-top: 4px;">⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡</div>
    `;
    printableDoc.appendChild(page6);
}
