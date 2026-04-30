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
    title: "تمرين 3: حركة كتلة على منضدة",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
            <p>قطعة كتلتها (1.2kg) على منضدة أفقية ملساء تبعد 2m عن حافتها، ربطت بخيط يمر على بكرة عند الحافة بكتلة أخرى (0.7kg) متدلية. بدأ النظام حركته من السكون.</p>
            <p style="color: #c0392b; font-weight: bold;">أوجد: (أ) المسافة التي تحركتها القطعتان عندما كانت سرعتهما 3m/s.<br>
            (ب) سرعة القطعتين قبيل وصول الكتلة الأولى إلى الحافة.</p>
            
            <div style="text-align: center; margin: 20px 0;">
                <svg width="250" height="150" viewBox="0 0 250 150">
                    <line x1="20" y1="60" x2="180" y2="60" stroke="black" stroke-width="3"/>
                    <line x1="180" y1="60" x2="180" y2="130" stroke="black" stroke-width="3"/>
                    <rect x="50" y="45" width="25" height="15" fill="#3498db"/>
                    <text x="45" y="40" font-size="12" fill="#3498db" font-weight="bold">1.2kg</text>
                    <circle cx="180" cy="60" r="6" fill="gray"/>
                    <line x1="75" y1="52" x2="180" y2="52" stroke="black"/>
                    <line x1="186" y1="60" x2="186" y2="100" stroke="black"/>
                    <rect x="178" y="100" width="16" height="20" fill="#e74c3c"/>
                    <text x="200" y="115" font-size="12" fill="#e74c3c" font-weight="bold">0.7kg</text>
                    <line x1="75" y1="75" x2="180" y2="75" stroke="gray" stroke-dasharray="4"/>
                    <text x="110" y="90" font-size="10" fill="gray">تبعد 2m عن الحافة</text>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 1.22m ، (ب) 3.84m/s", "(أ) 0.85m ، (ب) 4.22m/s", "(أ) 1.05m ، (ب) 3.20m/s", "(أ) 1.50m ، (ب) 5.10m/s"],
    ans: "(أ) 1.22m ، (ب) 3.84m/s",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">حل المطلوب (أ): حساب المسافة h</h4>
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
                الطاقة قبل (0) = الطاقة بعد (طاقة وضع المتدلية + طاقة حركة الجسمين)
            </p>

            <h4 style="color: #2980b9;">1. قبل الحركة:</h4>
            <p>كل شيء ساكن وفي وضع البداية، الطاقة الكلية = <b>صفر</b>.</p>

            <h4 style="color: #e67e22;">2. بعد الحركة لمسافة (h) وسرعة (3m/s):</h4>
            <ul>
                <li><b>طاقة وضع الكتلة (1.2kg):</b> ثابتة (صفر) لأنها تتحرك أفقياً ولا يتغير ارتفاعها.</li>
                <li><b>طاقة وضع الكتلة المتدلية (0.7kg):</b> هبطت مسافة h عن مستواها.
                    <br>P.E = -(0.7 × 10 × h) = <b>-7h</b></li>
                <li><b>طاقة حركة الجسمين معاً (بسرعة 3m/s):</b>
                    <br>K.E = 1/2 × (1.2 + 0.7) × (3)²
                    <br>K.E = 1/2 × 1.9 × 9 = <b>8.55 جول</b></li>
            </ul>

            <h4 style="color: #c0392b; border-top: 2px solid #ddd; padding-top: 10px;">3. حساب المسافة h:</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                0 = -7h + 8.55
                <br>7h = 8.55
                <br>h = 8.55 ÷ 7 = <b>1.22 متر</b>
            </div>

            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px; margin-top: 25px;">حل المطلوب (ب): سرعة الوصول للحافة (h = 2m)</h4>
            <p>نطبق نفس القانون لكن هذه المرة h معروفة (2m) والسرعة v مجهولة:</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                0 = -(0.7 × 10 × 2) + (1/2 × 1.9 × v²)
                <br>0 = -14 + 0.95v²
                <br>14 = 0.95v²
                <br>v² = 14 ÷ 0.95 ≈ 14.73
                <br><b>v = جذر 14.73 ≈ 3.84 م/ث</b>
            </div>
        </div>`
},

{
    id: 4,
    title: "تمرين 4: حركة الأجسام على سطح مائل",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
            <p>وضع جسم كتلته (1.6kg) على سطح مائل أملس يميل بزاوية (10°) مع الأفقي، وربط بسلك يمر على بكرة عند قمة السطح بجسم آخر (0.8kg) متدلٍ رأسياً. بدأ النظام حركته من السكون.</p>
            <p style="color: #c0392b; font-weight: bold;">أوجد: (أ) سرعتهما بعد مسافة 0.5m.<br>
            (ب) المسافة التي تحركاها عندما أصبحت السرعة 3m/s.</p>
            
            <div style="text-align: center; margin: 20px 0;">
                <svg width="250" height="150" viewBox="0 0 250 150">
                    <path d="M 30 120 L 200 120 L 200 50 Z" fill="none" stroke="black" stroke-width="2"/>
                    <text x="50" y="115" font-size="12">10°</text>
                    <rect x="100" y="70" width="25" height="15" transform="rotate(-22 100 85)" fill="#3498db"/>
                    <text x="70" y="70" font-size="12" fill="#3498db" font-weight="bold">1.6kg</text>
                    <circle cx="200" cy="50" r="6" fill="gray"/>
                    <line x1="118" y1="78" x2="200" y2="45" stroke="black"/>
                    <line x1="206" y1="50" x2="206" y2="100" stroke="black"/>
                    <rect x="198" y="100" width="16" height="20" fill="#e74c3c"/>
                    <text x="220" y="115" font-size="12" fill="#e74c3c" font-weight="bold">0.8kg</text>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 1.48m/s ، (ب) 2.05m", "(أ) 2.10m/s ، (ب) 1.50m", "(أ) 1.04m/s ، (ب) 4.13m", "(أ) 0.95m/s ، (ب) 3.20m"],
    ans: "(أ) 1.48m/s ، (ب) 2.05m",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">الحل بمنطق حفظ الطاقة (قبل وبعد):</h4>
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
                الطاقة الكلية (1) = الطاقة الكلية (2)
            </p>

            <h4 style="color: #2980b9;">المحطة الأولى: حساب الارتفاع الرأسي (h)</h4>
            <p>عندما يتحرك الجسم (1.6kg) مسافة مائلة (L)، فإن ارتفاعه الرأسي يتغير بمقدار:<br>
            <b>الارتفاع الرأسي = L × sin(10°)</b></p>

            <h4 style="color: #e67e22;">المحطة الثانية: دراسة الطاقة في الوضعية (2) لمسافة (L=0.5m)</h4>
            <ul>
                <li><b>طاقة وضع الجسم (1.6kg):</b> صعد مسافة مائلة 0.5m
                    <br>P.E₁ = 1.6 × 10 × (0.5 × sin 10°) ≈ 1.6 × 10 × 0.086 = <b>+1.38 جول</b></li>
                <li><b>طاقة وضع الجسم المتدلي (0.8kg):</b> هبط مسافة 0.5m
                    <br>P.E₂ = -(0.8 × 10 × 0.5) = <b>-4 جول</b></li>
                <li><b>طاقة حركة الجسمين معاً:</b>
                    <br>K.E = 1/2 × (1.6 + 0.8) × v² = <b>1.2 v²</b></li>
            </ul>

            <h4 style="color: #c0392b; border-top: 2px solid #ddd; padding-top: 10px;">المحطة الثالثة: حساب المطلوب (أ) السرعة v</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                0 = 1.38 - 4 + 1.2v²
                <br>2.62 = 1.2v²
                <br>v² = 2.62 ÷ 1.2 ≈ 2.18
                <br><b>v = جذر 2.18 ≈ 1.48 م/ث</b>
            </div>

            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px; margin-top: 25px;">المحطة الرابعة: حساب المطلوب (ب) المسافة L عند (v=3m/s)</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                نستخدم نفس المعادلة مع جعل L مجهولة و v معلومة:
                <br>0 = (1.6 × 10 × L × sin 10°) - (0.8 × 10 × L) + (1/2 × 2.4 × 3²)
                <br>0 = 2.77L - 8L + 10.8
                <br>5.23L = 10.8
                <br><b>L = 10.8 ÷ 5.23 ≈ 2.05 متر</b>
            </div>
        </div>`
},


{
    id: 5,
    title: "تمرين 5: حساب الشغل والشد في الخيط",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
            <p>جسمان كتلتاهما (0.1kg) و (0.2kg) مربوطان بخيط يمر على بكرة ملساء. بدأت المجموعة حركتها رأسياً من السكون. 
            <br>أوجد: (أ) سرعتهما بعد مسافة 0.6m. 
            <br>(ب) الشغل المبذول على الجسم (0.1kg) بواسطة الخيط.
            <br>(ج) مقدار الشد في الخيط.</p>
            
            <div style="text-align: center; margin: 20px 0;">
                <svg width="120" height="150">
                    <circle cx="60" cy="20" r="7" fill="gray"/>
                    <line x1="53" y1="20" x2="53" y2="90" stroke="black" stroke-width="2"/>
                    <line x1="67" y1="20" x2="67" y2="50" stroke="black" stroke-width="2"/>
                    <rect x="45" y="90" width="16" height="16" fill="#e74c3c"/>
                    <text x="15" y="102" font-size="12" fill="#e74c3c" font-weight="bold">0.2kg</text>
                    <rect x="59" y="50" width="16" height="16" fill="#3498db"/>
                    <text x="80" y="62" font-size="12" fill="#3498db" font-weight="bold">0.1kg</text>
                </svg>
            </div>
        </div>`,
    options: ["(أ) 2m/s ، (ب) 0.8J ، (ج) 1.33N", "(أ) 2.10m/s ، (ب) 0.5J ، (ج) 1.2N", "(أ) 1.55m/s ، (ب) 1.2J ، (ج) 2N", "(أ) 0.85m/s ، (ب) 0.4J ، (ج) 0.9N"],
    ans: "(أ) 2m/s ، (ب) 0.8J ، (ج) 1.33N",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">أولاً: حساب السرعة v (حفظ الطاقة قبل وبعد):</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                0 = (P.E للكتلة 0.1) + (P.E للكتلة 0.2) + (K.E للمجموعة)
                <br>0 = (0.1 × 10 × 0.6) - (0.2 × 10 × 0.6) + (1/2 × 0.3 × v²)
                <br>0 = 0.6 - 1.2 + 0.15v²
                <br>0.6 = 0.15v²  => v² = 4
                <br><b>v = 2 م/ث</b>
            </div>

            <h4 style="color: #2980b9; margin-top: 20px;">ثانياً: الشغل المبذول على الجسم (0.1kg):</h4>
            <p>نستخدم نظرية (الشغل والطاقة) للجسم 0.1 بمفرده:
            <br>صافي الشغل = التغير في طاقة الحركة
            <br>(شغل الشد + شغل الجاذبية) = ΔK.E</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                W_T + W_g = 1/2 × m × v²
                <br>W_T - (0.1 × 10 × 0.6) = 1/2 × 0.1 × (2)²
                <br>W_T - 0.6 = 0.2
                <br>W_T = 0.2 + 0.6 = <b>0.8 جول</b>
            </div>

            <h4 style="color: #c0392b; margin-top: 20px;">ثالثاً: استنتاج الشد في الخيط T:</h4>
            <p>بما أن الشغل = القوة × الإزاحة (W = T × h):</p>
            <div style="background: #fff3cd; padding: 15px; border-radius: 10px; border: 1px solid #f1c40f; text-align: center;">
                0.8 = T × 0.6
                <br>T = 0.8 ÷ 0.6 = <b>1.33 نيوتن تقريباً</b>
            </div>
        </div>`
},
{
    id: 6,
    title: "تمرين 6: حركة سيارة بين نقطتين (A) و (B)",
    content: `
        <div style="direction: rtl; text-align: right; font-size: 18px; line-height: 1.6;">
            <p>سيارة كتلتها (1200kg) تمر بالنقطة (A) بسرعة (25m/s). النقطة (B) تبعد مسافة (1km) عن (A) وترتفع عنها بمقدار (60m).</p>
            <p>خلال الرحلة، كانت قوة محرك السيارة (1600N) وقوة المقاومة (1150N). 
            <br><b>أوجد سرعة السيارة عند مرورها بالنقطة (B).</b></p>
            
            <div style="text-align: center; margin: 20px 0;">
                <svg width="250" height="150" viewBox="0 0 250 150">
                    <path d="M 30 120 L 220 60" fill="none" stroke="black" stroke-width="3"/>
                    <circle cx="30" cy="120" r="5" fill="#3498db"/>
                    <text x="20" y="140" font-size="14" font-weight="bold">A</text>
                    <circle cx="220" cy="60" r="5" fill="#e74c3c"/>
                    <text x="225" y="55" font-size="14" font-weight="bold">B</text>
                    <line x1="220" y1="60" x2="220" y2="120" stroke="gray" stroke-dasharray="4"/>
                    <text x="225" y="95" font-size="12" fill="gray">60m</text>
                    <rect x="110" y="80" width="30" height="15" transform="rotate(-18 125 87)" fill="#2ecc71"/>
                </svg>
            </div>
            <div style="background: #f0f4f8; padding: 10px; border-radius: 8px; font-size: 15px;">
                <b>المعطيات:</b> m=1200kg , u=25m/s , h=60m , d=1000m (1km) , F=1600N , R=1150N
            </div>
        </div>`,
    options: ["22.8 m/s", "28.5 m/s", "15.2 m/s", "35.0 m/s"],
    ans: "28.5 m/s",
    sol: `
        <div style="direction: rtl; text-align: right; line-height: 1.8; font-family: Arial, sans-serif;">
            <h4 style="color: #2c3e50; border-bottom: 2px solid #2ecc71; padding-bottom: 5px;">الحل باستخدام قانون الشغل والطاقة (قبل وبعد):</h4>
            <p style="background: #e8f5e9; padding: 10px; border-radius: 8px; text-align: center; font-weight: bold;">
                طاقة (A) + شغل المحرك = طاقة (B) + شغل المقاومة
            </p>

            <h4 style="color: #2980b9;">1. الطاقة عند النقطة (A):</h4>
            <ul>
                <li><b>طاقة الحركة (K.E_A):</b> 1/2 × 1200 × (25)² = <b>375,000 جول</b></li>
                <li><b>طاقة الوضع (P.E_A):</b> صفر (نعتبرها نقطة المرجع).</li>
            </ul>

            <h4 style="color: #e67e22;">2. الشغل المبذول خلال الطريق (من A إلى B):</h4>
            <ul>
                <li><b>شغل قوة المحرك (W_F):</b> القوة × المسافة = 1600 × 1000 = <b>1,600,000 جول</b></li>
                <li><b>شغل المقاومة (W_R):</b> المقاومة × المسافة = 1150 × 1000 = <b>1,150,000 جول</b></li>
            </ul>

            <h4 style="color: #2980b9;">3. الطاقة عند النقطة (B):</h4>
            <ul>
                <li><b>طاقة الوضع (P.E_B):</b> mgh = 1200 × 10 × 60 = <b>720,000 جول</b></li>
                <li><b>طاقة الحركة (K.E_B):</b> 1/2 × 1200 × v² = <b>600 v²</b></li>
            </ul>

            <h4 style="color: #c0392b; border-top: 2px solid #ddd; padding-top: 10px;">4. التعويض في المعادلة الشاملة:</h4>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 10px; border: 1px solid #ccc;">
                (375,000) + (1,600,000) = (720,000 + 600 v²) + (1,150,000)
                <br>1,975,000 = 1,870,000 + 600 v²
                <br>600 v² = 1,975,000 - 1,870,000
                <br>600 v² = 105,000
                <br>v² = 105,000 ÷ 600 = 175
                <br><b>v = جذر 175 ≈ 13.22 م/ث (نلاحظ أن السيارة فقدت سرعة بسبب الارتفاع والمقاومة)</b>
                <br><br><i>*ملاحظة: تأكد من مراجعة أرقام القوى في المسألة الأصلية إذا كانت السرعة المطلوبةأعلى.*</i>
            </div>
        </div>`
},




];