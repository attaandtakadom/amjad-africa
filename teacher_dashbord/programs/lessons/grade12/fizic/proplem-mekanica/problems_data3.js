const questions = [
    {
        id: "1",
        text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (1) <br> يسقط جسم كتلته 20kg سقوطاً حراً من ارتفاع قدره 30m. أوجد الطاقة الكلية للجسم بعد أن يسقط مسافة قدرها 20m:</div>",
        
        givensHTML: `
            <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
                <svg viewBox="0 0 500 250" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="50" y1="230" x2="450" y2="230" stroke="#333" stroke-width="4"/>
                    <line x1="100" y1="50" x2="100" y2="230" stroke="#777" stroke-dasharray="5,5"/>
                    <text x="50" y="140" fill="#777" font-weight="bold">30m</text>
                    
                    <circle cx="250" cy="50" r="12" fill="#d32f2f"/>
                    <text x="270" y="55" font-weight="bold">النقطة A (بداية السقوط)</text>
                    
                    <circle cx="250" cy="180" r="12" fill="#1976d2" opacity="0.6"/>
                    <text x="270" y="185" font-weight="bold">النقطة B (على ارتفاع 10m)</text>
                    
                    <text x="350" y="40" fill="#1a237e" font-weight="bold">m = 20 kg</text>
                </svg>
            </div>
        `,
        
        solutionHTML: `
            <div id="solution-container-1" style="text-align: center; margin-top: 20px;">
                <button onclick="toggleSolution('1')" id="btn-1" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الحل والخطوات</button>
                <div id="sol-content-1" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                    <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                        <h4 style="margin: 0; color: #01579b;">💡 ركن التفكير:</h4>
                        حسب قانون حفظ الطاقة، الطاقة الكلية (الطاقة الميكانيكية) ثابتة عند أي نقطة في مسار الحركة ما دام الاحتكاك مهمل.
                        أي أن: الطاقة عند النقطة A = الطاقة عند النقطة B.
                    </div>
                    <p>1) عند النقطة A (أعلى ارتفاع): الجسم ساكن، إذاً طاقة الحركة = 0.</p>
                    <p>الطاقة الكلية (A) = طاقة الوضع = m × g × h = 20 × 10 × 30 = 6000 J.</p>
                    <p>2) عند النقطة B (بعد سقوط 20 متر): يكون الارتفاع المتبقي عن الأرض هو 10 أمتار.</p>
                    <p style="font-weight: bold; color: #d32f2f;">بما أن الطاقة الكلية مقدار ثابت (ما لم تؤثر قوة خارجية):</p>
                    <p style="font-size: 1.3em; font-weight: 900; color: #1a237e; text-align: center; background: #f0f0f0; padding: 10px;">الطاقة الكلية عند B = 6000 جول</p>
                </div>
            </div>
        `
    },

{
    id: "2",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (2) <br> قُذف حجر كتلته 0.8kg إلى أعلى بسرعة 10m/s. احسب طاقة حركته الابتدائية، وأقصى ارتفاع يصل إليه الحجر:</div>",
    
givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 300" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="260" x2="450" y2="260" stroke="#333" stroke-width="3"/>
                
                <line x1="250" y1="250" x2="250" y2="60" stroke="#ccc" stroke-dasharray="5,5" stroke-width="2"/>
                
                <circle cx="250" cy="250" r="12" fill="#d32f2f">
                    <animate 
                        attributeName="cy" 
                        values="250;60;250" 
                        dur="3s" 
                        repeatCount="indefinite" 
                        calcMode="spline" 
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                    <animate 
                        attributeName="fill" 
                        values="#d32f2f;#1976d2;#d32f2f" 
                        dur="3s" 
                        repeatCount="indefinite" />
                </circle>

                <text x="270" y="255" font-weight="bold" fill="#d32f2f" font-size="14">النقطة (أ): الأرض (Ek قصوى | Ep=0)</text>
                <text x="270" y="55" font-weight="bold" fill="#1976d2" font-size="14">النقطة (ب): القمة (Ek=0 | Ep قصوى)</text>

                <path d="M220 180 L220 130" stroke="#4caf50" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#4caf50" />
                    </marker>
                </defs>
                
                <text x="50" y="40" fill="#1a237e" font-size="16" font-weight="900">m = 0.8 kg</text>
                <text x="50" y="70" fill="#2e7d32" font-size="16" font-weight="900">v = 10 m/s</text>
            </svg>
            <p style="color: #666; font-size: 0.9em; margin-top: 10px;">(توضيح متحرك لمسار الحجر وتبادل الطاقة)</p>
        </div>
    `,    
    solutionHTML: `
        <div id="solution-container-2" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('2')" id="btn-2" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الشرح والخطوات بالتفصيل</button>
            <div id="sol-content-2" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 1.8;">
                
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0 0 10px 0; color: #01579b;">💡 ركن التفكير (شرح المفاهيم):</h4>
                    <p style="margin: 5px 0;">أي جسم يتحرك رأسياً يتبادل طاقته بين "الحركة" و "الوضع" مع بقاء المجموع ثابتاً:</p>
                    <ul style="margin: 5px 0; padding-right: 20px;">
                        <li><b>عند سطح الأرض (النقطة أ):</b> الارتفاع يساوي صفر، لذا <b>طاقة الوضع = 0</b>. وتكون طاقة الحركة في أقصى قيمتها لأننا قذفناه بسرعة.</li>
                        <li><b>أثناء الصعود:</b> تقل السرعة (تقل طاقة الحركة) ويزداد الارتفاع (تزداد طاقة الوضع).</li>
                        <li><b>عند أقصى ارتفاع (النقطة ب):</b> يسكن الجسم لحظياً (السرعة = 0)، لذا <b>طاقة الحركة = 0</b>. وتتحول كل الطاقة إلى <b>طاقة وضع</b>.</li>
                    </ul>
                </div>

                <p><strong>1) حساب طاقة الحركة الابتدائية (عند النقطة أ):</strong></p>
                <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">
                    Ek = ½ m v² <br>
                    Ek = 0.5 × 0.8 × (10)² = 0.4 × 100 = <b>40 Joule</b>
                </p>

                <p><strong>2) حساب أقصى ارتفاع (عند النقطة ب):</strong></p>
                <p>بتطبيق قانون حفظ الطاقة: (الطاقة الكلية عند أ = الطاقة الكلية عند ب)</p>
                <p style="color: #2e7d32; font-weight: bold;">(طاقة الحركة + طاقة الوضع) عند أ = (طاقة الحركة + طاقة الوضع) عند ب</p>
                
                <p style="background: #f0f4c3; padding: 10px; border-radius: 5px; text-align: center;">
                    40 + 0 = 0 + (m × g × h)
                </p>

                <p>إذاً: 40 = 0.8 × 10 × h</p>
                <p>40 = 8 × h</p>
                
                <div style="font-size: 1.4em; font-weight: 900; color: #d32f2f; text-align: center; background: #1a237e; color: white; padding: 15px; border-radius: 10px; margin-top: 15px;">
                    أقصى ارتفاع (h) = 40 ÷ 8 = 5 متر
                </div>
            </div>
        </div>
    `
},

{
    id: "3",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (3) <br> ينزلق طفل كتلته 25kg من السكون على منحدر يميل بزاوية 30° مع الأفقي. إذا كان طول المنحدر 15m، أوجد سرعة الطفل عند أسفل المنحدر:</div>",
    
givensHTML: `
        <div style="text-align: center; background: #fff; padding: 10px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 550 320" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="550" height="320" fill="#fafafa" rx="10"/>

                <path d="M100 240 L450 240 L450 90 Z" fill="#e3f2fd" stroke="#1976d2" stroke-width="3"/>
                
                <path d="M160 240 A50 50 0 0 0 152 225" fill="none" stroke="red" stroke-width="2" />
                <text x="175" y="235" fill="red" font-weight="bold" font-size="16">30°</text>

                <g>
                    <circle cx="435" cy="105" r="10" fill="#f44336" stroke="#b71c1c" stroke-width="2"/>
                    <text x="415" y="65" font-weight="bold" fill="#d32f2f" font-size="14" text-anchor="middle">النقطة A</text>
                    <text x="415" y="80" fill="#d32f2f" font-size="11" text-anchor="middle">(سكون)</text>
                </g>

                <g>
                    <circle cx="115" cy="230" r="10" fill="#1976d2" stroke="#0d47a1" stroke-width="2"/>
                    <text x="100" y="265" font-weight="bold" fill="#2e7d32" font-size="14" text-anchor="middle">النقطة B</text>
                    <text x="100" y="280" fill="#2e7d32" font-size="11" text-anchor="middle">(المطلوب v)</text>
                </g>

                <text x="240" y="150" transform="rotate(-23, 240, 150)" font-weight="bold" fill="#1a237e" font-size="14">L = 15m</text>
                
                <line x1="450" y1="90" x2="450" y2="240" stroke="#e65100" stroke-dasharray="5,5" stroke-width="2"/>
                <text x="455" y="170" fill="#e65100" font-weight="bold" font-size="14">h = ?</text>
            </svg>
        </div>
    `,    solutionHTML: `
        <div id="solution-container-3" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('3')" id="btn-3" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الحل والخطوات</button>
            <div id="sol-content-3" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #e8f5e9; border-right: 6px solid #4caf50; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; color: #2e7d32;">💡 ركن التفكير:</h4>
                    <p>1. نحسب الارتفاع الرأسي (h) أولاً من طول المنحدر: h = L . sin(θ)</p>
                    <p>2. نطبق قانون بقاء الطاقة الكلية بين النقطتين A و B.</p>
                </div>

                <p><b>أولاً: حساب الارتفاع (h):</b></p>
                <p style="text-align: center;">h = 15 × sin(30) = 15 × 0.5 = <b>7.5 m</b></p>

                <p><b>ثانياً: تطبيق قانون بقاء الطاقة:</b></p>
                <p style="text-align: center; font-weight: bold;">الطاقة الكلية عند A = الطاقة الكلية عند B</p>
                <p style="text-align: center; font-weight: bold; color: #1a237e;">(Ek + Ep)<sub>A</sub> = (Ek + Ep)<sub>B</sub></p>

                <p><b>بالتعويض عن القيم (مع حذف m):</b></p>
                <p>عند A: السكون يعني <b>Ek = 0</b></p>
                <p>عند B: الوصول للأرض يعني <b>Ep = 0</b></p>
                
                <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; text-align: center; direction: ltr; font-weight: bold;">
                    (0) + (g . h) = (½ . v²) + (0) <br>
                    10 × 7.5 = 0.5 × v² <br>
                    75 = 0.5 × v²
                </div>

                <p><b>حساب السرعة (v):</b></p>
                <p style="text-align: center;">v² = 75 ÷ 0.5 = 150</p>
                <p style="text-align: center;">v = √150</p>

                <div style="margin-top: 20px; padding: 15px; background: #1a237e; color: white; border-radius: 10px; text-align: center;">
                    <span style="font-size: 1.2em;">سرعة الطفل عند أسفل المنحدر:</span><br>
                    <span style="font-size: 2.2em; font-weight: 900; color: #ffca28;">v ≈ 12.25 m/s</span>
                </div>
            </div>
        </div>
    `
},{
    id: "4",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (4) <br> تتسلق فتاة كتلتها 65kg جبلاً إلى ارتفاع قدره 3.2km. احسب طاقة وضعها عند القمة:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 320" width="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="shadow" x="0" y="0" width="200%" height="200%">
                        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#aaa"/>
                    </filter>
                </defs>

                <path d="M50 300 L250 50 L450 300 Z" fill="#cfd8dc" stroke="#455a64" stroke-width="3" filter="url(#shadow)"/>
                <path d="M200 112 L250 50 L300 112 Q250 130 200 112" fill="#fff" opacity="0.8"/> 

                <g>
                    <rect x="-6" y="-12" width="12" height="15" rx="3" fill="#e91e63" /> 
                    <rect x="-2" y="-15" width="4" height="4" fill="#a0522d" />
                    <circle cx="0" y="-20" r="5" fill="#a0522d" stroke="#5d4037" stroke-width="0.5" />
                    <path d="M-5 -24 Q0 -30 5 -24 L5 -18 Q0 -15 -5 -18 Z" fill="#3e2723" />
                    
                    <animateMotion 
                        path="M70 280 L235 70" 
                        dur="6s" 
                        repeatCount="indefinite" 
                        calcMode="linear" />
                </g>

                <line x1="250" y1="50" x2="250" y2="300" stroke="#00796b" stroke-dasharray="5,5" stroke-width="2"/>
                <text x="255" y="180" fill="#00796b" font-weight="bold" font-size="16">h = 3.2 km</text>
                
                <g transform="translate(20, 20)">
                    <rect x="0" y="0" width="130" height="45" fill="#f5f5f5" rx="8" stroke="#1a237e" stroke-width="2"/>
                    <text x="65" y="28" fill="#1a237e" font-size="18" font-weight="900" text-anchor="middle">m = 65 kg</text>
                </g>
            </svg>
            <p style="color: #666; font-size: 0.9em; margin-top: 10px;">(زيادة الارتفاع تعني زيادة طاقة الوضع المختزنة)</p>
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-4" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('4')" id="btn-4" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الشرح والخطوات</button>
            <div id="sol-content-4" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #fff3e0; border-right: 6px solid #ff9800; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0 0 10px 0; color: #e65100;">💡 ركن التفكير:</h4>
                    <p>1. نحول الكيلومتر لمتر: $3.2 \times 1000 = 3200 \, \text{m}$</p>
                    <p>2. نحسب طاقة الوضع بالقانون الأساسي ($m \cdot g \cdot h$)</p>
                    <p>3. نختصر الناتج بوحدات الكيلو والميجا.</p>
                </div>

                <p><strong>حساب طاقة الوضع (Ep):</strong></p>
                <div style="background: #f9f9f9; padding: 10px; border-radius: 8px; text-align: center; font-family: 'Courier New', monospace; font-size: 1.1em;">
                    Ep = 65 × 10 × 3200 = <b>2,080,000 J</b>
                </div>

                <div style="margin-top: 20px; padding: 20px; background: #1a237e; color: white; border-radius: 15px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                    <div style="margin-bottom: 15px; border-bottom: 1px dashed #5c6bc0; padding-bottom: 10px;">
                        <span style="font-size: 1.1em; color: #ffca28;">الناتج النهائي بوحدات مختلفة:</span>
                    </div>
                    
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="font-size: 1.4em; font-weight: bold;">2,080,000 J <small>(بالجول)</small></div>
                        <div style="font-size: 1.7em; font-weight: 900; color: #4caf50;">2,080 kJ <small>(كيلو جول)</small></div>
                        <div style="font-size: 1.9em; font-weight: 900; color: #ffca28;">2.08 MJ <small>(ميجاجول)</small></div>
                    </div>
                </div>

                <div style="margin-top: 15px; font-size: 0.9em; color: #555; text-align: center;">
                    * لاحظ أننا قسمنا على 1000 للكيلو، وعلى مليون للميجا.
                </div>
            </div>
        </div>
    `
},

{
    id: "5",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (5) <br> ينحدر متزلج من السكون على منحدر طوله 40m، فإذا كانت سرعته عند أسفل المنحدر 15m/s، احسب زاوية ميل المنحدر على الأفقي:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 320" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 270 L450 270 L450 120 Z" fill="#e1f5fe" stroke="#333" stroke-width="3"/>
                
                <path d="M90 270 A40 40 0 0 0 87 255" fill="none" stroke="red" stroke-width="3"/>
                <text x="100" y="260" fill="red" font-weight="bold" font-size="18">θ = ?</text>
                
                <g>
                    <rect x="-12" y="-2" width="24" height="4" rx="2" fill="#333" /> <rect x="-5" y="-12" width="10" height="12" rx="2" fill="#ff5722" /> <rect x="-2" y="-15" width="4" height="4" fill="#a0522d" /> <circle cx="0" y="-20" r="5" fill="#a0522d" stroke="#5d2e17" stroke-width="0.5" /> <animateMotion 
                        path="M440 115 L60 260" 
                        dur="4s" 
                        repeatCount="indefinite" 
                        calcMode="linear" />
                </g>

                <text x="200" y="170" transform="rotate(-21, 200, 170)" font-weight="bold" fill="#1a237e">طول المنحدر (L) = 40m</text>
                <text x="50" y="295" fill="#2e7d32" font-weight="bold">السرعة النهائية (v) = 15m/s</text>
            </svg>
            <p style="color: #666; font-size: 0.9em; margin-top: 10px;">(المطلوب إيجاد زاوية الانحدار بمعلومية السرعة والمسافة)</p>
        </div>
    `,
    
// استبدلي جزء الحل في السؤال الخامس بهذا النص الواضح
solutionHTML: `
    <div style="text-align: right; direction: rtl;">
        <p><b>1) إيجاد الارتفاع الرأسي:</b></p>
        <p>10 × h = 0.5 × (15 × 15)</p>
        <p>10 × h = 112.5</p>
        <p>h = 11.25 متر</p>
        
        <p><b>2) إيجاد الزاوية:</b></p>
        <p>جيب الزاوية (sin) = 11.25 ÷ 40 = 0.281</p>
        <p>باستخدام الآلة الحاسبة (Shift + sin):</p>
        <h2 style="color: #d32f2f; text-align: center;">الزاوية ≈ 16.3 درجة</h2>
    </div>
`},


// تابع لمصفوفة الأسئلة في ملف problems_data3.js

{
    id: "6",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (6) <br> ينحدر طفل من السكون على مستوى مائل ويصل أسفله بسرعة 7m/s، فإذا فُقد 25% من طاقة وضعه بسبب الاحتكاك، احسب المسافة العمودية (h) التي ينحدرها:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 280" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 230 L450 230 L450 60 Z" fill="#fff9c4" stroke="#333" stroke-width="3" />
                <g>
                    <rect x="-15" y="-3" width="30" height="6" rx="2" fill="#d32f2f" />
                    <circle cx="-10" y="5" r="3" fill="#333" />
                    <circle cx="10" y="5" r="3" fill="#333" />
                    <rect x="-6" y="-12" width="12" height="12" rx="2" fill="#1976d2" />
                    <circle cx="0" y="-18" r="5" fill="#a0522d" />
                    <animateMotion path="M435 75 L65 225" dur="4s" repeatCount="indefinite" />
                </g>
                <text x="455" y="145" fill="#e65100" font-weight="bold">h = ?</text>
                <text x="50" y="260" fill="#2e7d32" font-weight="bold">v = 7 m/s</text>
                <rect x="130" y="20" width="240" height="30" fill="#ffebee" rx="5" stroke="#d32f2f"/>
                <text x="250" y="40" fill="#d32f2f" font-size="14" font-weight="bold" text-anchor="middle">الاحتكاك = 0.25 mgh</text>
            </svg>
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-6" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('6')" id="btn-6" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الشرح والخطوات</button>
            <div id="sol-content-6" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; color: #01579b;">💡 ركن التفكير (قانون بقاء الطاقة):</h4>
                    <p style="text-align: center; font-weight: bold;">(طاقة الحركة + طاقة الوضع) عند A = (طاقة الحركة + طاقة الوضع) عند B</p>
                </div>

                <p><b>التعويض المباشر بالقيم:</b></p>
                <p style="text-align: center; direction: ltr; font-weight: bold; color: #1a237e;">
                    0 + (m . 10 . h) = (½ . m . 7²) + (0.75 . m . 10 . h)
                </p>
                
                <p>بشطب الكتلة (m) من جميع الأطراف، تصبح المعادلة:</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; text-align: center; font-family: monospace; font-size: 1.2em;">
                    10h = 24.5 + 7.5h
                </div>

                <p><b>بترتيب حدود h في طرف واحد:</b></p>
                <p style="text-align: center;">10h - 7.5h = 24.5</p>
                <p style="text-align: center; font-weight: bold;">2.5h = 24.5</p>

                <div style="margin-top: 20px; padding: 15px; background: #1a237e; color: white; border-radius: 10px; text-align: center;">
                    <span style="font-size: 1.2em;">المسافة العمودية (h):</span><br>
                    <span style="font-size: 2.2em; font-weight: 900; color: #ffca28;">h = 9.8 m</span>
                </div>
                
                <p style="color: #666; font-size: 0.9em; text-align: center; margin-top: 10px;">(حيث 24.5 ÷ 2.5 = 9.8)</p>
            </div>
        </div>
    `
},{
    id: "7",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (7) <br> دفع صندوق كتلته 160kg إلى أعلى بواسطة آلة قدرتها 2kW. احسب المسافة الرأسية التي سيتحركها الصندوق في 7s بفرض أن سرعته منتظمة (g=10):</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 200" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect width="500" height="200" fill="#f8f9fa" rx="10"/>
                
                <g>
                    <line x1="250" y1="0" x2="250" y2="100" stroke="#555" stroke-width="2">
                        <animate attributeName="y2" values="100;40;100" dur="4s" repeatCount="indefinite" />
                    </line>
                    <rect x="210" y="100" width="80" height="60" fill="#795548" stroke="#3e2723" stroke-width="2">
                        <animate attributeName="y" values="100;40;100" dur="4s" repeatCount="indefinite" />
                    </rect>
                    <text x="250" y="135" fill="white" font-size="12" font-weight="bold" text-anchor="middle">160 kg</text>
                </g>

                <rect x="340" y="20" width="140" height="60" fill="white" stroke="#1a237e" stroke-width="1" rx="5"/>
                <text x="350" y="40" fill="#1a237e" font-size="12" font-weight="bold">P = 2000 W</text>
                <text x="350" y="65" fill="#1a237e" font-size="12" font-weight="bold">t = 7 s</text>
            </svg>
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-7" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('7')" id="btn-7" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الشرح والخطوات</button>
            <div id="sol-content-7" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #e8f5e9; border-right: 6px solid #4caf50; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; color: #2e7d32;">💡 ركن التفكير:</h4>
                    <p>1. نحسب الشغل الكلي من القدرة والزمن.</p>
                    <p>2. نساوي الشغل بطاقة الوضع (m . g . h) لإيجاد المسافة h.</p>
                </div>

                <p><b>أولاً: حساب الشغل (W):</b></p>
                <p style="text-align: center;">الشغل = القدرة × الزمن</p>
                <p style="text-align: center; font-weight: bold;">W = 2000 × 7 = 14,000 J</p>

                <p><b>ثانياً: حساب المسافة (h):</b></p>
                <p style="text-align: center;">الشغل = الكتلة × الجاذبية × المسافة</p>
                <p style="text-align: center; font-family: monospace; font-weight: bold;">14,000 = 160 × 10 × h</p>
                <p style="text-align: center; font-family: monospace;">14,000 = 1,600 × h</p>

                <div style="margin-top: 20px; padding: 15px; background: #1a237e; color: white; border-radius: 10px; text-align: center;">
                    <span style="font-size: 1.2em;">المسافة الرأسية المطلوبة:</span><br>
                    <span style="font-size: 2.2em; font-weight: 900; color: #ffca28;">h = 8.75 m</span>
                </div>
            </div>
        </div>
    `
},
    {
        id: "8",
        text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800;'>سؤال (8) <br> يجري طفل كتلته 30kg على هضبة في زمن 6s. إذا كان ارتفاع الهضبة 3m وسرعة الطفل عندها 2m/s، أوجد القدرة التي بذلها الطفل:</div>",
        givensHTML: `
            <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <svg viewBox="0 0 500 250" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 200 Q150 200 250 100 T450 100" fill="none" stroke="#4caf50" stroke-width="4"/>
                    <circle cx="50" cy="190" r="8" fill="#1565c0">
                        <animateMotion path="M0 0 Q100 0 200 -100 T400 -100" dur="5s" repeatCount="indefinite" />
                    </circle>
                    <text x="350" y="50" fill="#1a237e" font-weight="bold">h = 3m, v = 2m/s</text>
                    <text x="350" y="80" fill="#d32f2f" font-weight="bold">t = 6 s</text>
                </svg>
            </div>`,
        solutionHTML: `
            <div id="solution-container-8" style="text-align: center; margin-top: 20px;">
                <button onclick="toggleSolution('8')" id="btn-8" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold;">إظهار الحل والخطوات</button>
                <div id="sol-content-8" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                    <div style="background: #e8f5e9; border-right: 6px solid #4caf50; padding: 15px; margin-bottom: 20px;">
                        <h4>💡 ركن التفكير:</h4>
                        القدرة هنا تساوي (طاقة الوضع المكتسبة + طاقة الحركة المكتسبة) مقسومة على الزمن.
                    </div>
                    <p>1. طاقة الوضع = mgh = 30 × 10 × 3 = 900 J</p>
                    <p>2. طاقة الحركة = ½mv² = 0.5 × 30 × (2)² = 60 J</p>
                    <p>3. الطاقة الكلية = 960 J</p>
                    <div style="background: #1a237e; color: white; padding: 15px; border-radius: 10px; text-align: center; font-size: 1.5em;">القدرة = 960 ÷ 6 = 160 Watt</div>
                </div>
            </div>`
    },

    {
    id: "9",
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (9) <br> قُذف جسم على سطح أملس بزاوية 30° إلى أعلى بسرعة 4m/s، فوصل إلى أعلى نقطة في المستوى بسرعة 1.2m/s. أوجد طول المستوى (L):</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 250" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 220 L450 220 L450 50 Z" fill="#e0f2f1" stroke="#333" stroke-width="2"/>
                
                <circle cx="65" cy="210" r="10" fill="#d32f2f">
                    <animateMotion path="M0 0 L370 -160" dur="4s" repeatCount="indefinite" />
                </circle>

                <text x="60" y="245" font-weight="bold" fill="#1a237e">البداية (A): u=4m/s</text>
                <text x="350" y="40" font-weight="bold" fill="#c62828">النهاية (B): v=1.2m/s</text>
                <text x="100" y="210" fill="red" font-weight="bold">30°</text>
                <text x="455" y="130" fill="#e65100" font-weight="bold">h = ?</text>
            </svg>
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-9" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('9')" id="btn-9" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">إظهار الحل والخطوات</button>
            <div id="sol-content-9" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #fce4ec; border-right: 6px solid #e91e63; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 10px 0; color: #880e4f;">💡 ركن التفكير (قانون حفظ الطاقة):</h4>
                    <p>الطاقة الكلية عند أسفل المستوى (A) = الطاقة الكلية عند أعلى المستوى (B)</p>
                    <p style="text-align: center; font-weight: bold;">(Ek + Ep)<sub>A</sub> = (Ek + Ep)<sub>B</sub></p>
                </div>

                <p><b>1) التعويض بالقيم (مع اعتبار الارتفاع عند A يساوي صفر):</b></p>
                <p style="text-align: center; direction: ltr; font-weight: bold; color: #1a237e;">
                    ½ . m . (4)² + 0 = ½ . m . (1.2)² + m . 10 . h
                </p>
                
                <p><b>2) بقسمة المعادلة على m وحساب الأرقام:</b></p>
                <p style="background: #f9f9f9; padding: 10px; border-radius: 5px; text-align: center;">
                    0.5 × 16 = (0.5 × 1.44) + 10h <br>
                    8 = 0.72 + 10h
                </p>

                <p><b>3) إيجاد الارتفاع h:</b></p>
                <p style="text-align: center;">10h = 8 - 0.72 = 7.28</p>
                <p style="text-align: center;">h = 0.728 m</p>

                <p><b>4) حساب طول المستوى (L):</b></p>
                <p style="text-align: center;">L = h ÷ sin(30) = 0.728 ÷ 0.5</p>

                <div style="margin-top: 20px; padding: 15px; background: #1a237e; color: white; border-radius: 10px; text-align: center;">
                    <span style="font-size: 1.2em;">طول المستوى المطلوب:</span><br>
                    <span style="font-size: 2.2em; font-weight: 900; color: #ffca28;">L = 1.456 m</span>
                </div>
            </div>
        </div>
    `
}



];