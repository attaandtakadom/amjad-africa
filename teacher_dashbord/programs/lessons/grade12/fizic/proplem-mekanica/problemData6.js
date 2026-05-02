const myQuestionsData = [
    {
    id: 0,
    title: "🚀 مفاتيح النجاح في ميكانيكا الطاقة",
    content: `
        <div style="direction: rtl; text-align: right; background: #fffbe6; padding: 25px; border-radius: 15px; border: 2px dashed #f1c40f; line-height: 1.8;">
            <h3 style="color: #d35400; text-align: center; margin-top: 0;">خمس قواعد لا تنساها أبداً:</h3>
            
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 12px;">
                    <b style="color: #2980b9;">1. الجسم الصاعد والهابط:</b>
                    <br>الارتفاع (h) يُحسب **رأسياً** فقط. إذا تحرك الجسم على سطح مائل، نستخدم: <span style="color: #c0392b;">(h = المسافة المائلة × sin الزاوية)</span>.
                </li>

                <li style="margin-bottom: 12px;">
                    <b style="color: #27ae60;">2. فريق طاقة الحركة (K.E):</b>
                    <br>في البكرات، الجسمان مربوطان بخيط واحد، لذا لهما نفس السرعة. عند حساب طاقة الحركة للنظام، نستخدم **مجموع الكتل** <span style="color: #c0392b;">(1/2 × Σm × v²)</span>.
                </li>

                <li style="margin-bottom: 12px;">
                    <b style="color: #8e44ad;">3. الشغل الخارجي (المحرك والمقاومة):</b>
                    <br>إذا وجدت قوة محرك أو مقاومة، نطبق القانون الأعم:
                    <br><span style="background: white; padding: 3px; border: 1px solid #ddd;">(طاقة البداية + شغل المحرك) = (طاقة النهاية + شغل المقاومة)</span>.
                </li>

                <li style="margin-bottom: 12px;">
                    <b style="color: #16a085;">4. شغل الخيط (الشد):</b>
                    <br>الشد لا يبذل شغلاً على "النظام ككل" (لأنه يلغي بعضه)، لكنه يبذل شغلاً على **كل جسم بمفرده**.
                </li>

                <li style="margin-bottom: 12px;">
                    <b style="color: #d35400;">5. المسافة بين الجسمين:</b>
                    <br>في البكرات الرأسية، إذا تحرك كل جسم مسافة (h)، فإن المسافة الرأسية بينهما تصبح <span style="color: #c0392b;">(2h)</span>.
                </li>
            </ul>
            
            <div style="text-align: center; background: #fff; padding: 10px; border-radius: 8px; font-weight: bold; color: #2c3e50;">
                "الفيزياء هي فن ترجمة الواقع إلى معادلات.. انطلقوا!"
            </div>
        </div>`,
    options: ["جاهزون للتحدي، لنبدأ!"],
    ans: "جاهزون للتحدي، لنبدأ!",
    sol: "ممتاز! تذكروا أن كل مسألة هي لغز ممتع ينتظر الحل."
},
    {
        id: 1,
        title: "تمرين 1: حركة البكرات",
        content: `
            <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
                <p>جسمان كتلتاهما (0.3kg) و (0.5kg) مربوطان بسلك يمر على بكرة ملساء. بدأا من السكون من مستوى أفقي واحد. أوجد سرعتهما بعد مسافة 1.3m.</p>
                <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                    <div style="text-align: center;">
                        <small>قبل الحركة</small><br>
                        <svg width="100" height="100"><circle cx="50" cy="20" r="7" fill="gray"/><line x1="45" y1="20" x2="45" y2="70" stroke="black" stroke-width="2"/><line x1="55" y1="20" x2="55" y2="70" stroke="black" stroke-width="2"/><rect x="40" y="70" width="12" height="12" fill="#3498db"/><rect x="50" y="70" width="12" height="12" fill="#e74c3c"/></svg>
                    </div>
                    <div style="text-align: center;">
                        <small>بعد الحركة</small><br>
                        <svg width="100" height="100"><circle cx="50" cy="20" r="7" fill="gray"/><line x1="45" y1="20" x2="45" y2="45" stroke="black" stroke-width="2"/><rect x="40" y="45" width="12" height="12" fill="#3498db"/><line x1="55" y1="20" x2="55" y2="95" stroke="black" stroke-width="2"/><rect x="50" y="95" width="12" height="12" fill="#e74c3c"/></svg>
                    </div>
                </div>
            </div>`,
        options: ["1.55 m/s", "2.55 m/s", "3.25 m/s", "6.50 m/s"],
        ans: "2.55 m/s",
sol: `
    <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
        <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">الحل باستخدام قانون حفظ الطاقة العام:</h4>
        <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
            (طاقة الوضع + طاقة الحركة) قبل الحركة = (طاقة الوضع + طاقة الحركة) بعد الحركة
        </p>

        <h4 style="color: #2980b9;">1. قبل الحركة (لحظة السكون):</h4>
        <ul>
            <li><b>طاقة الحركة:</b> كانت صفر (لأن السرعة صفر).</li>
            <li><b>طاقة الوضع:</b> سنعتبر المستوى الأفقي الذي بدأوا منه هو (صفر)، إذن طاقة الوضع = صفر.</li>
            <li><b>إجمالي الطاقة قبل الحركة = صفر</b></li>
        </ul>

        <h4 style="color: #e67e22;">2. بعد الحركة (بعد مسافة 1.3m):</h4>
        <ul>
            <li><b>طاقة وضع الجسم الأول (0.3kg):</b> ارتفع بمقدار 1.3m
                <br>0.3 × 10 × 1.3 = <b>+3.9 جول</b></li>
            <li><b>طاقة وضع الجسم الثاني (0.5kg):</b> انخفض بمقدار 1.3m
                <br>-(0.5 × 10 × 1.3) = <b>-6.5 جول</b></li>
            <li><b>طاقة حركة الجسمين معاً:</b>
                <br>1/2 × (0.3 + 0.5) × v² = <b>0.4v²</b></li>
        </ul>

        <h4 style="color: #c0392b; border-top: 2px solid #ddd; padding-top: 10px;">3. تطبيق المعادلة النهائية:</h4>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
            إجمالي الطاقة قبل (0) = إجمالي الطاقة بعد (3.9 - 6.5 + 0.4v²)
            <br>0 = -2.6 + 0.4v²
            <br>2.6 = 0.4v² 
            <br>v² = 2.6 ÷ 0.4 = 6.5
            <br><b>v = جذر 6.5 = 2.55 م/ث</b>
        </div>
        

        </div>
` },

{
    id: 2,
    title: "تمرين 2: حساب المسافة بين الجسمين",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
            <p>جسمان كتلتاهما (1.2kg) و (1.4kg) مربوطان بسلك يمر على بكرة ملساء. بدأت المجموعة حركتها من السكون وهما في مستوى أفقي واحد. أوجد <b>المسافة بين الجسمين</b> عندما تصبح سرعتهما (0.5m/s).</p>
            
            <div style="display: flex; justify-content: space-around; margin: 20px 0;">
                <div style="text-align: center;">
                    <small style="color:#e67e22">الوضعية (1): السكون</small><br>
                    <svg width="120" height="120">
                        <circle cx="60" cy="20" r="7" fill="gray"/>
                        <line x1="53" y1="20" x2="53" y2="70" stroke="black" stroke-width="2"/>
                        <line x1="67" y1="20" x2="67" y2="70" stroke="black" stroke-width="2"/>
                        <rect x="45" y="70" width="15" height="15" fill="#3498db"/>
                        <text x="10" y="82" font-size="10" fill="#3498db" font-weight="bold">1.2kg</text>
                        <rect x="60" y="70" width="15" height="15" fill="#e74c3c"/>
                        <text x="80" y="82" font-size="10" fill="#e74c3c" font-weight="bold">1.4kg</text>
                        <line x1="10" y1="85" x2="110" y2="85" stroke="#27ae60" stroke-dasharray="3"/>
                    </svg>
                </div>
                <div style="text-align: center;">
                    <small style="color:#27ae60">الوضعية (2): الحركة (v=0.5)</small><br>
                    <svg width="120" height="120">
                        <circle cx="60" cy="20" r="7" fill="gray"/>
                        <line x1="53" y1="20" x2="53" y2="50" stroke="black" stroke-width="2"/>
                        <rect x="45" y="50" width="15" height="15" fill="#3498db"/>
                        <text x="10" y="62" font-size="10" fill="#3498db" font-weight="bold">1.2kg</text>
                        <line x1="67" y1="20" x2="67" y2="90" stroke="black" stroke-width="2"/>
                        <rect x="60" y="90" width="15" height="15" fill="#e74c3c"/>
                        <text x="80" y="102" font-size="10" fill="#e74c3c" font-weight="bold">1.4kg</text>
                    </svg>
                </div>
            </div>
            
            <div style="background: #f0f4f8; padding: 10px; border-radius: 8px; font-size: 15px;">
                <b>المعطيات:</b> m₁=1.2kg , m₂=1.4kg , u=0 , v=0.5m/s , g=10m/s²
            </div>
        </div>`,
    options: ["0.16 m", "0.32 m", "0.08 m", "0.25 m"],
    ans: "0.32 m",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">الحل بمنطق حفظ الطاقة (قبل وبعد):</h4>
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
                الطاقة الكلية (1) = الطاقة الكلية (2)
            </p>

            <h4 style="color: #2980b9;">أولاً: قبل الحركة (الوضعية 1)</h4>
            <p>بما أن الأجسام بدأت من السكون وفي مستوى واحد، نعتبر طاقة النظام كاملة = <b>صفر</b>.</p>

            <h4 style="color: #e67e22;">ثانياً: بعد الحركة (الوضعية 2) لمسافة (h)</h4>
            <ul>
                <li><b>طاقة وضع الجسم الخفيف (1.2kg):</b> صعد مسافة h عن مستوى الصفر
                    <br>P.E₁ = 1.2 × 10 × h = <b>12h</b></li>
                <li><b>طاقة وضع الجسم الثقيل (1.4kg):</b> هبط مسافة h عن مستوى الصفر
                    <br>P.E₂ = -(1.4 × 10 × h) = <b>-14h</b></li>
                <li><b>طاقة حركة الجسمين معاً (بسرعة 0.5):</b>
                    <br>K.E = 1/2 × (1.2 + 1.4) × (0.5)²
                    <br>K.E = 1/2 × 2.6 × 0.25 = <b>0.325 جول</b></li>
            </ul>

            <h4 style="color: #c0392b; border-top: 2px solid #ddd; padding-top: 10px;">ثالثاً: حساب المسافة (h) والمسافة الكلية:</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                معادلة الطاقة: 0 = 12h - 14h + 0.325
                <br>0 = -2h + 0.325
                <br>2h = 0.325
                <br>h = 0.1625 متر (هذه مسافة تحرك كل جسم)
                <br><br>
                <b>المسافة بين الجسمين (المسافة الرأسية):</b>
                <br>بما أن أحدهما صعد h والآخر هبط h، فإن المسافة بينهما هي 2h:
                <br>المسافة بينهما = 2 × 0.1625 = <b>0.325 متر</b> (بالتقريب 0.32 متر).
            </div>
        </div>`
},
{
    id: 3,
    title: "تمرين 3: حركة كتلة على منضدة (بقاء الطاقة)",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <!-- 1. صيغة السؤال -->
            <div style="margin-bottom: 20px; border-right: 5px solid #3498db; padding-right: 15px;">
                <p>قطعة كتلتها (1.2kg) موضوعة على منضدة أفقية ملساء تبعد 2m عن حافتها، ربطت بخيط يمر على بكرة عند الحافة بكتلة أخرى (0.7kg) متدلية. بدأ النظام حركته من السكون.</p>
                <p style="color: #c0392b; font-weight: bold;">أوجد: (أ) الإزاحة (h) التي تحركتها القطعتان عندما أصبحت سرعتهما 3m/s.<br>
                (ب) سرعة القطعتين قبيل وصول الكتلة الأولى إلى الحافة.</p>
            </div>

            <!-- 2. ركن التفكير المطور (شرح المبدأ) -->
            <div style="background-color: #fff3e0; border-right: 5px solid #ff9800; padding: 15px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #e65100;">💡 ركن التفكير (قانون بقاء الطاقة):</h4>
                <p>يا أبنائي، لكي نفهم الحل بعمق، نتذكر أن <b>الطاقة الكلية لا تضيع</b>، بل تتغير من شكل لآخر. القانون يقول:</p>
                <p style="text-align: center; color: #2c3e50; background: #ffe0b2; padding: 10px; border-radius: 8px;">
                    <b>(مجموع طاقة الحركة + الوضع) قبل = (مجموع طاقة الحركة + الوضع) بعد</b>
                </p>
                
                <p><b>أولاً: قبل الحركة (عند السكون):</b></p>
                <ul>
                    <li>طاقة الحركة للجسمين = <b>صفر</b> (لأنهما ساكنان).</li>
                    <li>طاقة الوضع للجسمين = <b>صفر</b> (لأننا اعتبرنا مكانهما الأصلي هو خط الصفر).</li>
                    <li>إذن: <b>الطاقة الكلية قبل البدء = صفر.</b></li>
                </ul>

                <p><b>ثانياً: بعد الحركة (عندما تحركا مسافة h):</b></p>
                <ul>
                    <li><b>طاقة الحركة:</b> الجسمان اكتسبا سرعة، لذا طاقتيهما موجبة.</li>
                    <li><b>طاقة الوضع:</b> الجسم على الطاولة طاقته <b>صفر</b> (لم يرتفع)، بينما الجسم المتدلي هبط تحت الخط الأحمر فتصبح طاقته <b>سالبة</b>.</li>
                </ul>
                <p style="color: #d35400; font-weight: bold;">الخلاصة: مجموع هذه الطاقات (الموجب والسالب) بعد الحركة يجب أن يساوي "صفر" لكي يتوازن مع الطاقة التي كانت موجودة قبل البدء.</p>
            </div>

            <!-- 3. الرسم التوضيحي -->
            <div style="text-align: center; margin: 20px 0; background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #eee; overflow-x: auto;">
                <svg width="550" height="250" viewBox="0 0 550 250">
                    <text x="70" y="30" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">الحالة 1: السكون</text>
                    <rect x="20" y="90" width="140" height="10" fill="#8d6e63"/>
                    <line x1="20" y1="82" x2="80" y2="82" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    <line x1="155" y1="121" x2="195" y2="121" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    <line x1="65" y1="82" x2="160" y2="82" stroke="#34495e" stroke-width="2"/>
                    <line x1="168" y1="90" x2="168" y2="110" stroke="#34495e" stroke-width="2"/>
                    <rect x="40" y="75" width="25" height="15" fill="#3498db"/>
                    <circle cx="160" cy="90" r="8" fill="#7f8c8d"/>
                    <rect x="160" y="110" width="16" height="22" fill="#e74c3c"/>
                    <line x1="210" y1="110" x2="260" y2="110" stroke="#27ae60" stroke-width="3" marker-end="url(#arrowhead)"/>
                    <text x="370" y="30" font-size="16" font-weight="bold" fill="#2c3e50" text-anchor="middle">الحالة 2: بعد حركة (h)</text>
                    <rect x="300" y="90" width="140" height="10" fill="#8d6e63"/>
                    <line x1="385" y1="82" x2="440" y2="82" stroke="#34495e" stroke-width="2"/>
                    <line x1="448" y1="90" x2="448" y2="170" stroke="#34495e" stroke-width="2"/>
                    <rect x="360" y="75" width="25" height="15" fill="#3498db"/>
                    <circle cx="440" cy="90" r="8" fill="#7f8c8d"/>
                    <rect x="440" y="170" width="16" height="22" fill="#e74c3c"/>
                    <line x1="465" y1="121" x2="465" y2="181" stroke="#ff9800" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <text x="470" y="155" font-size="12" fill="#e65100" font-weight="bold">h-</text>
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="context-fill" />
                        </marker>
                    </defs>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 1.22m ، (ب) 3.84m/s", "(أ) 0.85m ، (ب) 4.22m/s", "(أ) 1.05m ، (ب) 3.20m/s", "(أ) 1.50m ، (ب) 5.10m/s"],
    ans: "(أ) 1.22m ، (ب) 3.84m/s",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71;">تطبيق قانون بقاء الطاقة بالتفصيل:</h4>
            
            <p><b>1. قبل الحركة (الحالة الأولى):</b></p>
            <p style="padding-right: 20px;">E₁ = (K.E₁ + P.E₁) + (K.E₂ + P.E₂) = (0 + 0) + (0 + 0) = <b>0</b>.</p>

            <p><b>2. بعد الحركة (الحالة الثانية):</b></p>
            <ul>
                <li>طاقة حركة الجسمين: <b>½(1.2 + 0.7)v² = 0.95v²</b></li>
                <li>طاقة وضع الجسم الأول (على الطاولة): <b>0</b> (لأنه لم يغير مستواه).</li>
                <li>طاقة وضع الجسم الثاني (المتدلي): <b>-m₂gh = -0.7 × 10 × h = -7h</b>.</li>
            </ul>

            <h4 style="color: #c0392b;">3. المساواة: (الطاقة بعد = الطاقة قبل)</h4>
            <div style="background: #fdf2f2; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2;">
                [0.95v²] + [0] + [-7h] = 0
                <br><b>0.95v² - 7h = 0  ⬅️  7h = 0.95v²</b>
            </div>

            <p style="margin-top: 15px;"><b>(أ) الإزاحة h عندما v = 3m/s:</b> 7h = 0.95(3)² ⬅️ <b>h = 1.22 m</b>.</p>
            <p><b>(ب) السرعة v عند وصول الحافة (h = 2m):</b> 7(2) = 0.95v² ⬅️ v² = 14.73 ⬅️ <b>v = 3.84 m/s</b>.</p>
        </div>`
},{
    id: 4,
    title: "تمرين 4: حركة الأجسام على سطح مائل (بقاء الطاقة)",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <!-- 1. صيغة السؤال -->
            <div style="margin-bottom: 20px; border-right: 5px solid #3498db; padding-right: 15px;">
                <p>وضع جسم كتلته (1.6kg) على سطح مائل أملس يميل بزاوية (10°) مع الأفقي، وربط بخيط يمر على بكرة عند قمة السطح بجسم آخر (0.8kg) متدلي رأسياً. بدأ النظام حركته من السكون.</p>
                <p style="color: #c0392b; font-weight: bold;">أوجد: (أ) سرعتهما بعد أن يقطعا مسافة (s) قدرها 0.5m.<br>
                (ب) المسافة (s) التي تحركاها عندما أصبحت السرعة 3m/s.</p>
            </div>

            <!-- 2. ركن التفكير المطور -->
            <div style="background-color: #fff3e0; border-right: 5px solid #ff9800; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                <h4 style="margin-top: 0; color: #e65100;">💡 ركن التفكير (لماذا نستخدم s و h؟):</h4>
                <p>يا أبنائي، لكي نطبق قانون طاقة الوضع (mgh) بشكل صحيح:</p>
                <ul style="padding-right: 20px;">
                    <li><b>المسافة (s):</b> هي طول الخيط الذي تحرك (0.5m)، وهي المسافة المائلة للجسم الأول.</li>
                    <li><b>الارتفاع الرأسي (h):</b> هو البعد العمودي عن الأرض.</li>
                    <li><b>للجسم المائل:</b> نلاحظ أنه يصعد بزاوية، لذا ارتفاعه الرأسي هو المقابل للزاوية ويساوي ⬅️ <span style="color: #c0392b; font-weight: bold;">h = s × sin(10°)</span>.</li>
                    <li><b>للجسم المتدلي:</b> يتحرك رأسياً تماماً، لذا إزاحته الرأسية (h) هي نفس مسافة الخيط (s).</li>
                </ul>
            </div>

            <!-- 3. الرسم التوضيحي المطور -->
            <div style="text-align: center; margin: 20px 0; background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #eee; overflow-x: auto;">
                <svg width="550" height="250" viewBox="0 0 550 250">
                    <!-- الحالة 1: السكون -->
                    <text x="100" y="30" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">الحالة 1: السكون</text>
                    <path d="M 30 150 L 180 150 L 180 80 Z" fill="none" stroke="#8d6e63" stroke-width="3"/>
                    <!-- خطوط الإسناد (مستويات الصفر) -->
                    <line x1="80" y1="110" x2="135" y2="110" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    <line x1="160" y1="140" x2="200" y2="140" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    
                    <rect x="90" y="105" width="25" height="15" transform="rotate(-25 90 105)" fill="#3498db"/>
                    <circle cx="180" cy="80" r="7" fill="#7f8c8d"/>
                    <line x1="110" y1="95" x2="180" y2="75" stroke="#34495e" stroke-width="2"/>
                    <line x1="187" y1="80" x2="187" y2="130" stroke="#34495e" stroke-width="2"/>
                    <rect x="180" y="130" width="14" height="20" fill="#e74c3c"/>

                    <!-- سهم الانتقال -->
                    <line x1="220" y1="120" x2="270" y2="120" stroke="#27ae60" stroke-width="3" marker-end="url(#arrowhead)"/>

                    <!-- الحالة 2: بعد الحركة -->
                    <text x="400" y="30" font-size="14" font-weight="bold" fill="#2c3e50" text-anchor="middle">الحالة 2: بعد حركة (s)</text>
                    <path d="M 300 150 L 450 150 L 450 80 Z" fill="none" stroke="#8d6e63" stroke-width="3"/>
                    <rect x="390" y="92" width="25" height="15" transform="rotate(-25 390 92)" fill="#3498db"/>
                    <circle cx="450" cy="80" r="7" fill="#7f8c8d"/>
                    <line x1="410" y1="83" x2="450" y2="75" stroke="#34495e" stroke-width="2"/>
                    <line x1="457" y1="80" x2="457" y2="190" stroke="#34495e" stroke-width="2"/>
                    <rect x="450" y="190" width="14" height="20" fill="#e74c3c"/>
                    
                    <!-- توضيح الارتفاع h للجسم الهابط -->
                    <line x1="430" y1="140" x2="475" y2="140" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    <line x1="475" y1="140" x2="475" y2="200" stroke="#ff9800" stroke-width="2" marker-end="url(#arrowhead)"/>
                    <text x="485" y="175" font-size="14" fill="#e65100" font-weight="bold">h = s</text>

                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="context-fill" />
                        </marker>
                    </defs>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 1.47m/s ، (ب) 2.07m", "(أ) 2.10m/s ، (ب) 1.50m", "(أ) 1.04m/s ، (ب) 4.13m", "(أ) 3.84m/s ، (ب) 1.22m"],
    ans: "(أ) 1.47m/s ، (ب) 2.07m",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71;">خطوات الحل (قانون بقاء الطاقة):</h4>
            
            <p><b>1. قبل الحركة (Eᵢ):</b> النظام ساكن ⬅️ <b>Eᵢ = 0</b>.</p>

            <p><b>2. بعد الحركة لمسافة (s):</b> نحسب طاقة كل جسم:</p>
            <ul>
                <li>طاقة حركة المجموعة: <b>K.E = ½ (1.6 + 0.8) v² = 1.2 v²</b></li>
                <li>طاقة وضع الجسم المائل (صعد): <b>P.E₁ = m₁ g (s sin 10°) = 1.6 × 10 × 0.1736 s = 2.77 s</b></li>
                <li>طاقة وضع الجسم المتدلي (هبط): <b>P.E₂ = -m₂ g s = -0.8 × 10 × s = -8 s</b></li>
            </ul>

            <h4 style="color: #c0392b;">3. المعادلة (مجموع الطاقات = صفر):</h4>
            <div style="background: #fdf2f2; padding: 15px; border-radius: 10px; border: 1px solid #ffcdd2;">
                1.2 v² + 2.77 s - 8 s = 0
                <br><b>1.2 v² - 5.23 s = 0</b>
            </div>

            <p style="margin-top: 15px;"><b>(أ) حساب السرعة v عندما s = 0.5m:</b>
            <br>1.2 v² = 5.23 × 0.5 ⬅️ 1.2 v² = 2.615 ⬅️ v² = 2.179 ⬅️ <b>v = 1.47 m/s</b>.</p>

            <p><b>(ب) حساب المسافة s عندما v = 3m/s:</b>
            <br>5.23 s = 1.2 × (3)² ⬅️ 5.23 s = 10.8 ⬅️ <b>s = 2.07 m</b>.</p>
        </div>`
},

{
    id: 5,
    title: "تمرين 5: حساب الشغل والشد في الخيط (نظام البكرة)",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <!-- 1. صيغة السؤال -->
            <div style="margin-bottom: 20px; border-right: 5px solid #3498db; padding-right: 15px;">
                <p>جسمان كتلتاهما (0.1kg) و (0.2kg) مربوطان بخيط يمر على بكرة ملساء. بدأت المجموعة حركتها رأسياً من السكون.</p>
                <p style="color: #c0392b; font-weight: bold;">أوجد: (أ) سرعتهما بعد مسافة 0.6m.<br>
                (ب) الشغل المبذول على الجسم (0.1kg) بواسطة الخيط.<br>
                (ج) مقدار الشد في الخيط.</p>
            </div>

            <!-- 2. ركن التفكير -->
            <div style="background-color: #fff3e0; border-right: 5px solid #ff9800; padding: 15px; margin-bottom: 20px;">
                <h4 style="margin-top: 0; color: #e65100;">💡 ركن التفكير (مبدأ الطاقة والعمل):</h4>
                <p>يا أبنائي، في هذا النظام المتصل:</p>
                <ul>
                    <li><b>تغير الطاقة:</b> الجسم الأثقل يهبط (يفقد وضع) والجسم الأخف يصعد (يكتسب وضع)، وكلاهما يكتسب حركة.</li>
                    <li><b>شغل الخيط:</b> الخيط يبذل شغلاً موجباً على الجسم الصاعد (لأنه يسحبه للأعلى) وشغلاً سالباً على الهابط.</li>
                    <li><b>السرعة المشتركة:</b> بما أنهما متصلان بنفس الخيط، فلهما نفس السرعة دائماً.</li>
                </ul>
            </div>

            <!-- 3. الرسم التوضيحي -->
            <div style="text-align: center; margin: 20px 0; background: #ffffff; padding: 20px; border-radius: 10px; border: 1px solid #eee;">
                <svg width="200" height="180" viewBox="0 0 200 180">
                    <circle cx="100" cy="30" r="12" fill="#7f8c8d"/> <!-- البكرة -->
                    <line x1="88" y1="30" x2="88" y2="130" stroke="#34495e" stroke-width="2"/>
                    <line x1="112" y1="30" x2="112" y2="80" stroke="#34495e" stroke-width="2"/>
                    
                    <!-- خطوط الإسناد -->
                    <line x1="70" y1="130" x2="100" y2="130" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    <line x1="100" y1="80" x2="130" y2="80" stroke="red" stroke-width="2" stroke-dasharray="4"/>
                    
                    <rect x="78" y="130" width="20" height="20" fill="#e74c3c"/> <!-- 0.2kg -->
                    <text x="45" y="145" font-size="12" fill="#e74c3c" font-weight="bold">0.2kg</text>
                    
                    <rect x="102" y="60" width="20" height="20" fill="#3498db"/> <!-- 0.1kg -->
                    <text x="130" y="75" font-size="12" fill="#3498db" font-weight="bold">0.1kg</text>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 2m/s ، (ب) 0.8J ، (ج) 1.33N", "(أ) 1.5m/s ، (ب) 0.5J ، (ج) 1.2N", "(أ) 2.5m/s ، (ب) 1.0J ، (ج) 1.5N", "(أ) 1.8m/s ، (ب) 0.7J ، (ج) 1.1N"],
    ans: "(أ) 2m/s ، (ب) 0.8J ، (ج) 1.33N",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71;">خطوات الحل التفصيلية:</h4>
            
            <p><b>(أ) حساب السرعة v (بقاء الطاقة):</b></p>
            <p style="padding-right: 20px;">الطاقة قبل = 0
            <br>الطاقة بعد: [½(m₁+m₂)v²] + [m₁gh] + [-m₂gh] = 0
            <br>[½(0.3)v²] + [0.1×10×0.6] - [0.2×10×0.6] = 0
            <br>0.15v² + 0.6 - 1.2 = 0 ⬅️ 0.15v² = 0.6 ⬅️ v² = 4 ⬅️ <b>v = 2 m/s</b>.</p>

            <p><b>(ب) شغل الخيط على الجسم (0.1kg):</b></p>
            <p>نستخدم نظرية (الشغل = تغير طاقة الحركة) للجسم الصغير فقط:
            <br>W_total = ΔK.E
            <br>W_tension + W_gravity = ½ m₁ v²
            <br>W_T - (0.1 × 10 × 0.6) = ½ (0.1) (2)²
            <br>W_T - 0.6 = 0.2 ⬅️ <b>W_T = 0.8 J</b>.</p>

            <p><b>(ج) الشد في الخيط (T):</b></p>
            <p>بما أن الشغل = القوة × الإزاحة (W = T × s):
            <br>0.8 = T × 0.6 ⬅️ T = 0.8 / 0.6 ⬅️ <b>T = 1.33 N</b>.</p>
        </div>`
},{
    id: 6,
    title: "تمرين 6: حركة سيارة على منحدر (ميزان الطاقة)",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <!-- 1. صيغة السؤال -->
            <div style="margin-bottom: 20px; border-right: 5px solid #3498db; padding-right: 15px;">
                <p>تتحرك سيارة كتلتها (1200kg) بسرعة (25m/s) عند أسفل منحدر (النقطة A). صعدت السيارة المنحدر لمسافة (1000m) حتى وصلت لارتفاع رأسي (600m) عند القمة (النقطة B). إذا كانت قوة المحرك (1600N) وقوة المقاومة (1150N).</p>
                <p style="color: #c0392b; font-weight: bold;">أوجد: سرعة السيارة عند وصولها لقمة المنحدر (النقطة B).</p>
            </div>

            <!-- 2. ركن التفكير المطور -->
            <div style="background-color: #fff3e0; border-right: 5px solid #ff9800; padding: 15px; margin-bottom: 20px; border-radius: 8px;">
                <h4 style="margin-top: 0; color: #e65100;">💡 ركن التفكير (منطق ميزان الطاقة):</h4>
                <p>يا أبنائي، لكي نفهم الحل، سنتخيل الطاقة كـ "رصيد":</p>
                <ul style="padding-right: 20px;">
                    <li><b>رصيد البداية (عند A):</b> هو ما تملكه السيارة من حركة + الدفعة الإضافية من المحرك.</li>
                    <li><b>رصيد النهاية (عند B):</b> هو ما تبقى للسيارة من سرعة + الارتفاع الذي وصلته + ما فُقد بسبب الاحتكاك.</li>
                    <li><b>القاعدة الثابتة:</b> إجمالي رصيد البداية عند (A) لا بد أن يساوي إجمالي رصيد النهاية عند (B).</li>
                </ul>
            </div>
        </div>`,
    options: ["13.23 m/s", "28.50 m/s", "15.80 m/s", "10.45 m/s"],
    ans: "13.23 m/s",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71;">خطوات الحل بالتسلسل المنطقي:</h4>

            <!-- المرحلة الأولى -->
            <h4 style="color: #c0392b;">المرحلة الأولى: حساب إجمالي الطاقة عند نقطة البداية (A)</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc; margin-bottom: 20px;">
                <p><b>1. حساب طاقة الحركة الابتدائية:</b> السيارة بدأت بسرعة 25m/s، فنحسب طاقتها:
                <br>K.E_A = ½ × 1200 × (25)² = <b>375,000 J</b></p>

                <p><b>2. حساب الشغل المضاف (المحرك):</b> المحرك دفع السيارة لمسافة 1000m:
                <br>شغل المحرك = القوة × المسافة = 1600 × 1000 = <b>1,600,000 J</b></p>

                <p style="border-top: 2px solid #999; padding-top: 10px; font-weight: bold;">
                💰 إجمالي الطاقة عند البداية (A) = 375,000 + 1,600,000 = 1,975,000 J
                </p>
            </div>

            <!-- المرحلة الثانية -->
            <h4 style="color: #c0392b;">المرحلة الثانية: حساب إجمالي الطاقة عند نقطة النهاية (B)</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc; margin-bottom: 20px;">
                <p><b>1. حساب طاقة الوضع (الارتفاع):</b> السيارة صعدت لارتفاع 600m:
                <br>P.E_B = الكتلة × الجاذبية × الارتفاع = 1200 × 10 × 60 = <b>720,000 J</b></p>

                <p><b>2. حساب الشغل المفقود (المقاومة):</b> المقاومة سحبت طاقة أثناء الحركة:
                <br>شغل المقاومة = قوة المقاومة × المسافة = 1150 × 1000 = <b>1,150,000 J</b></p>

                <p><b>3. طاقة الحركة عند القمة:</b> بما أن السرعة (v) مجهولة، نكتب القانون:
                <br>K.E_B = ½ × 1200 × v² = <b>600 v²</b></p>

                <p style="border-top: 2px solid #999; padding-top: 10px; font-weight: bold;">
                📉 إجمالي الطاقة عند النهاية (B) = 720,000 + 1,150,000 + 600 v²
                <br>إجمالي النهاية = 1,870,000 + 600 v²
                </p>
            </div>

            <!-- المرحلة النهائية -->
            <h4 style="color: #c0392b;">المرحلة الثالثة: المساواة وإيجاد السرعة (v)</h4>
            <div style="background: #fff3e0; padding: 15px; border-radius: 10px; border: 1px solid #ff9800;">
                <p>نطبق قانون حفظ الطاقة: <b>إجمالي الطاقة عند A = إجمالي الطاقة عند B</b></p>
                
                <p style="text-align: center; font-size: 19px; font-weight: bold;">
                    1,975,000 = 1,870,000 + 600 v²
                </p>

                <p><b>1. نقل الأرقام لجهة واحدة:</b> نطرح الطاقة المستهلكة من رصيد البداية:
                <br>600 v² = 1,975,000 - 1,870,000
                <br><b>600 v² = 105,000</b></p>

                <p><b>2. عملية القسمة:</b> نقسم الناتج على 600 لعزل (v²):
                <br><b>v² = 105,000 ÷ 600</b>
                <br><b>v² = 175</b></p>

                <p><b>3. حساب السرعة النهائية:</b> نأخذ الجذر التربيعي للناتج:
                <br>v = √175
                <br><span style="color: #27ae60; font-weight: bold; font-size: 22px;">v = 13.23 m/s</span></p>
            </div>
        </div>`
}

];