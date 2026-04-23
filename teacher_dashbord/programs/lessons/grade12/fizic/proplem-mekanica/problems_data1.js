const questions = [
    {
        // تم تغيير المعرف ليكون الرقم 1
        id: "1", 
        // خط السؤال غامق وواضح جداً
        text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (1) <br> تستخدم رافعة لرفع صندوق كتلته 2 طن إلى ارتفاع 75m خلال زمن قدره 45s. أوجد متوسط القدرة المبذولة بواسطة الرافعة:</div>",
        
        givensHTML: `
            <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
                <svg viewBox="0 0 400 220" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <line x1="80" y1="200" x2="320" y2="200" stroke="#333" stroke-width="4"/>
                    
                    <line x1="200" y1="10" x2="200" y2="90" stroke="#444" stroke-width="5"/>
                    
                    <rect x="165" y="90" width="70" height="70" fill="#795548" stroke="#5d4037" stroke-width="3"/>
                    
                    <text x="200" y="135" fill="white" font-size="18" font-weight="bold" text-anchor="middle">2 Ton</text>
                    
                    <line x1="330" y1="200" x2="330" y2="90" stroke="#2196f3" stroke-width="4" marker-end="url(#arrowhead)"/>
                    <text x="340" y="150" fill="#2196f3" font-size="16" font-weight="bold">h = 75m</text>
                    
                    <text x="90" y="110" fill="#e91e63" font-size="18" font-weight="bold">t = 45s</text>
                    
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto">
                            <path d="M0,0 L10,5 L0,10 Z" fill="#2196f3"/>
                        </marker>
                    </defs>
                </svg>
            </div>
            
            <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; font-size: 1.1em; text-align: right;">
                <strong>📋 معطيات المسألة:</strong>
                <ul style="margin-top: 10px; list-style: none; padding-right: 10px;">
                    <li>🔹 الكتلة (m) = 2000 kg</li>
                    <li>🔹 الارتفاع (h) = 75 m</li>
                    <li>🔹 الزمن (t) = 45 s</li>
                </ul>
            </div>
        `,
        solutionHTML: `
            <div id="solution-container-1" style="text-align: center; margin-top: 20px;">
                <button onclick="toggleSolution('1')" id="btn-1" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-family: 'Tajawal', sans-serif; font-weight: bold; font-size: 1.2em;">عرض الحل التفصيلي</button>
                
                <div id="sol-content-1" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                    <p style="color: #e65100; font-weight: bold; font-size: 1.3em; border-bottom: 2px solid #ffe0b2; padding-bottom: 10px;">💡 خطوات الحل:</p>
                    <p>1) الشغل (W) = m × g × h = 2000 × 10 × 75 = 1,500,000 J</p>
                    <p>2) القدرة (P) = W / t = 1,500,000 / 45 = 33,333.3 W</p>
                    <div style="background: #fff3e0; border-right: 5px solid #ffa000; padding: 15px; margin-top: 10px;">
                        <strong>النتيجة النهائية:</strong> P = 33.3 kW
                    </div>
                </div>
            </div>
        `
    },
{
    id: "2", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (2) <br> يتسلق رجل كتلته 90kg جبلاً ارتفاعه 1200m في زمن قدره 160min. أوجد قدرة الرجل المبذولة:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 400 220" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 200 L200 40 L350 200 Z" fill="#90a4ae" stroke="#546e7a" stroke-width="3"/>
                
                <circle cx="160" cy="100" r="8" fill="#e91e63"/>
                <text x="130" y="95" fill="#e91e63" font-size="14" font-weight="bold">90 kg</text>

                <line x1="370" y1="200" x2="370" y2="40" stroke="#2196f3" stroke-width="4" marker-end="url(#arrowhead)"/>
                <text x="310" y="30" fill="#2196f3" font-size="16" font-weight="bold">h = 1200m</text>
                
                <text x="50" y="110" fill="#f44336" font-size="16" font-weight="bold">t = 160 min</text>
                
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="0" refY="5" orient="auto">
                        <path d="M0,0 L10,5 L0,10 Z" fill="#2196f3"/>
                    </marker>
                </defs>
            </svg>
        </div>
        
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; font-size: 1.1em; text-align: right;">
            <strong>📋 معطيات المسألة:</strong>
            <ul style="margin-top: 10px; list-style: none; padding-right: 10px;">
                <li>🔹 الكتلة (m) = 90 kg</li>
                <li>🔹 الارتفاع (h) = 1200 m</li>
                <li>🔹 الزمن (t) = 160 دقيقة (يجب تحويله لثوانٍ)</li>
            </ul>
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-2" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('2')" id="btn-2" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-family: 'Tajawal', sans-serif; font-weight: bold; font-size: 1.2em;">عرض الحل التفصيلي</button>
            
            <div id="sol-content-2" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <p style="color: #e65100; font-weight: bold; font-size: 1.3em; border-bottom: 2px solid #ffe0b2; padding-bottom: 10px;">💡 خطوات الحل:</p>
                
                <p><strong>1) تحويل الزمن إلى ثوانٍ:</strong><br>
                t = 160 × 60 = <span style="color: #d32f2f;">9600 ثانية</span></p>

                <p><strong>2) حساب الشغل (W):</strong><br>
                W = m × g × h = 90 × 10 × 1200 = <span style="color: #d32f2f;">1,080,000 جول</span></p>
                
                <p><strong>3) حساب القدرة (P):</strong><br>
                P = W / t = 1,080,000 / 9600 = <span style="color: #d32f2f; font-weight: bold; font-size: 1.2em;">112.5 وات</span></p>

                <div style="background: #fff3e0; border-right: 5px solid #ffa000; padding: 15px; margin-top: 10px;">
                    <strong>النتيجة النهائية:</strong> قدرة الرجل = 112.5 W
                </div>
            </div>
        </div>
    `
},

{
    id: "3", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (3) <br> إذا كانت القدرة التي يبذلها محرك دراجة نارية تتحرك بسرعة منتظمة مقدارها 20m/s هي 12kW، أوجد مقدار قوة المقاومة للحركة:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 400 160" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="130" x2="350" y2="130" stroke="#333" stroke-width="3"/>
                
                <rect x="150" y="80" width="80" height="35" fill="#607d8b" rx="5"/>
                <circle cx="170" cy="115" r="12" fill="#333"/>
                <circle cx="210" cy="115" r="12" fill="#333"/>

                <line x1="240" y1="100" x2="300" y2="100" stroke="#4caf50" stroke-width="3" marker-end="url(#arrow-v)"/>
                <text x="250" y="90" fill="#4caf50" font-weight="bold">v = 20 m/s</text>

                <line x1="140" y1="100" x2="80" y2="100" stroke="#f44336" stroke-width="3" marker-end="url(#arrow-f)"/>
                <text x="75" y="90" fill="#f44336" font-weight="bold">F (المقاومة)</text>
                
                <text x="200" y="50" fill="#1a237e" font-size="18" font-weight="bold" text-anchor="middle">P = 12 kW</text>
                
                <defs>
                    <marker id="arrow-v" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/>
                    </marker>
                    <marker id="arrow-f" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <path d="M0,0 L10,3.5 L0,7 Z" fill="#f44336"/>
                    </marker>
                </defs>
            </svg>
        </div>
        
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; font-size: 1.1em; text-align: right;">
            <strong>📋 معطيات المسألة:</strong>
            <ul style="margin-top: 10px; list-style: none; padding-right: 10px;">
                <li>🔹 القدرة (P) = 12 kW</li>
                <li>🔹 السرعة المنتظمة (v) = 20 m/s</li>
            </ul>
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-3" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('3')" id="btn-3" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-family: 'Tajawal', sans-serif; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            
            <div id="sol-content-3" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0 0 10px 0; color: #01579b;">💡 خريطة التفكير للمسألة:</h4>
                    <p style="margin: 0; font-size: 0.95em; color: #0277bd;">
                        بما أن الجسم يتحرك بـ <b>(سرعة منتظمة)</b>، فهذا يعني أن القوة التي يبذلها المحرك تساوي تماماً <b>(قوة المقاومة)</b>. <br>
                        1. سأستخدم القانون الذي يربط القدرة والقوة والسرعة: P = F × v <br>
                        2. لإيجاد القوة (F)، سأقوم بقسمة القدرة على السرعة (F = P ÷ v). <br>
                        3. يجب ألا أنسى تحويل الكيلووات إلى وات بضربه في 1000.
                    </p>
                </div>

                <p style="color: #e65100; font-weight: bold; font-size: 1.2em; border-bottom: 2px solid #ffe0b2; padding-bottom: 10px;">🔢 خطوات التطبيق الرياضي:</p>
                
                <p>1) تحويل القدرة إلى وات:<br>
                <span style="color: #1a237e;">P = 12 × 1000 = 12,000 Watt</span></p>

                <p>2) استخدام القانون (F = P / v):<br>
                <span style="color: #1a237e;">F = 12,000 / 20</span></p>
                
                <p>3) الناتج النهائي:<br>
                <span style="color: #d32f2f; font-weight: bold; font-size: 1.2em;">F = 600 Newton</span></p>

                <div style="background: #fff3e0; border-right: 5px solid #ffa000; padding: 15px; margin-top: 10px;">
                    <strong>النتيجة النهائية:</strong> مقدار قوة المقاومة = 600 نيوتن
                </div>
            </div>
        </div>
    `
},


{
    id: "4", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (4) <br> أوجد قدرة محرك سيارة تتحرك بسرعة منتظمة مقدارها 40m/s، بفرض أن مقدار قوة المقاومة للحركة تساوي 400N:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 450 160" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="130" x2="430" y2="130" stroke="#333" stroke-width="3"/>
                
                <path d="M140 120 L300 120 L290 90 L250 90 L230 70 L170 70 L150 90 Z" fill="#2196f3" stroke="#1976d2" stroke-width="2"/>
                <circle cx="180" cy="120" r="10" fill="#333"/>
                <circle cx="260" cy="120" r="10" fill="#333"/>

                <line x1="315" y1="100" x2="375" y2="100" stroke="#4caf50" stroke-width="3" marker-end="url(#arrow-v4)"/>
                <text x="320" y="90" fill="#4caf50" font-weight="bold">v = 40 m/s</text>

                <line x1="130" y1="100" x2="70" y2="100" stroke="#f44336" stroke-width="3" marker-end="url(#arrow-f4)"/>
                <text x="65" y="90" fill="#f44336" font-weight="bold">F = 400 N</text>
                
                <defs>
                    <marker id="arrow-v4" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/>
                    </marker>
                    <marker id="arrow-f4" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <path d="M0,0 L10,3.5 L0,7 Z" fill="#f44336"/>
                    </marker>
                </defs>
            </svg>
        </div>   
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; font-size: 1.1em; text-align: right;">
            <strong>📋 معطيات المسألة:</strong>
            <ul style="margin-top: 10px; list-style: none; padding-right: 10px;">
                <li>🔹 السرعة المنتظمة (v) = 40 m/s</li>
                <li>🔹 قوة المقاومة (F) = 400 N</li>
            </ul>
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-4" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('4')" id="btn-4" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-family: 'Tajawal', sans-serif; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            
            <div id="sol-content-4" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0 0 10px 0; color: #01579b;">💡 خريطة التفكير للمسألة:</h4>
                    <p style="margin: 0; font-size: 0.95em; color: #0277bd;">
                        بما أن المطلوب هو <b>(القدرة)</b> والمعطيات هي سرعة وقوة منتظمة:<br>
                        1. أتذكر القانون المباشر: القدرة = القوة × السرعة.<br>
                        2. بما أن السرعة منتظمة، فإن قوة المحرك يجب أن تساوي تماماً قوة المقاومة (400 نيوتن).<br>
                        3. سأقوم بضرب القيمتين مباشرة لأن الوحدات دولية وجاهزة (متر/ثانية ونيوتن).
                    </p>
                </div>

                <p style="color: #e65100; font-weight: bold; font-size: 1.2em; border-bottom: 2px solid #ffe0b2; padding-bottom: 10px;">🔢 خطوات التطبيق الرياضي:</p>
                
                <p>1) كتابة القانون المستخدم:<br>
                <span style="color: #1a237e;">P = F × v</span></p>

                <p>2) التعويض بالأرقام:<br>
                <span style="color: #1a237e;">P = 400 × 40</span></p>
                
                <p>3) الناتج النهائي:<br>
                <span style="color: #d32f2f; font-weight: bold; font-size: 1.2em;">P = 16,000 Watt</span></p>

                <div style="background: #fff3e0; border-right: 5px solid #ffa000; padding: 15px; margin-top: 10px;">
                    <strong>النتيجة النهائية:</strong> قدرة المحرك = 16,000 وات (أو 16 kW)
                </div>
            </div>
        </div>
    `
},

{
    id: "5", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (5) <br> يتحرك درّاج بسرعة منتظمة مقدارها 11m/s، فإذا كانت المقاومة للحركة 80N، أوجد القدرة التي يبذلها الدرّاج:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 450 160" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="130" x2="430" y2="130" stroke="#333" stroke-width="3"/>
                <circle cx="180" cy="115" r="15" fill="none" stroke="#555" stroke-width="3"/>
                <circle cx="240" cy="115" r="15" fill="none" stroke="#555" stroke-width="3"/>
                <line x1="180" y1="115" x2="210" y2="85" stroke="#555" stroke-width="3"/>
                <line x1="240" y1="115" x2="210" y2="85" stroke="#555" stroke-width="3"/>
                
                <line x1="265" y1="100" x2="325" y2="100" stroke="#4caf50" stroke-width="3" marker-end="url(#arrow-v5)"/>
                <text x="270" y="90" fill="#4caf50" font-weight="bold">v = 11 m/s</text>

                <line x1="155" y1="100" x2="95" y2="100" stroke="#f44336" stroke-width="3" marker-end="url(#arrow-f5)"/>
                <text x="85" y="90" fill="#f44336" font-weight="bold">F = 80 N</text>
                
                <defs>
                    <marker id="arrow-v5" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/></marker>
                    <marker id="arrow-f5" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#f44336"/></marker>
                </defs>
            </svg>
        </div>
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; text-align: right;">
            <strong>📋 المعطيات:</strong> السرعة (v) = 11 m/s | المقاومة (F) = 80 N
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-5" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('5')" id="btn-5" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-5" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    السرعة منتظمة، إذاً قوة الدراج تساوي المقاومة تماماً. نطبق القانون المباشر P = F × v.
                </div>
                <p>1) P = 80 × 11</p>
                <p>2) P = 880 Watt</p>
                <div style="background: #fff3e0; padding: 10px; border-right: 5px solid #ffa000;">النتيجة: القدرة = 880 وات</div>
            </div>
        </div>
    `
},
{
    id: "6", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (6) <br> يتحرك سائق دراجة نارية بقدرة 8kW، فإذا كانت كتلة السائق والدراجة 160kg، أوجد عجلة الدراجة عندما تصل سرعتها إلى 20m/s (أهمل المقاومة):</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 450 160" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="130" x2="430" y2="130" stroke="#333" stroke-width="3"/>
                <rect x="180" y="80" width="70" height="40" fill="#ff9800" rx="5"/>
                <text x="215" y="105" fill="white" font-size="12" font-weight="bold" text-anchor="middle">160 kg</text>
                
                <line x1="260" y1="100" x2="320" y2="100" stroke="#4caf50" stroke-width="4" marker-end="url(#arrow-v6)"/>
                <text x="265" y="90" fill="#4caf50" font-weight="bold">v = 20 m/s</text>
                <text x="215" y="60" fill="#1a237e" font-size="16" font-weight="bold" text-anchor="middle">P = 8 kW</text>

                <defs><marker id="arrow-v6" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/></marker></defs>
            </svg>
        </div>
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; text-align: right;">
            <strong>📋 المعطيات:</strong> القدرة (P) = 8000 W | الكتلة (m) = 160 kg | السرعة لحظة الحساب = 20 m/s
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-6" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('6')" id="btn-6" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-6" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    هنا السرعة ليست منتظمة لأن المطلوب هو <b>(العجلة)</b>. <br>
                    1. نستخدم القدرة والسرعة لإيجاد القوة اللحظية للمحرك: (F = P / v). <br>
                    2. بعد إيجاد القوة، نستخدم قانون نيوتن الثاني لإيجاد العجلة: (F = m × a).
                </div>
                <p>1) تحويل القدرة: P = 8 × 1000 = 8000 Watt</p>
                <p>2) حساب القوة (F): F = 8000 / 20 = 400 Newton</p>
                <p>3) حساب العجلة (a): a = F / m = 400 / 160</p>
                <p style="font-weight: bold; color: #d32f2f;">4) الناتج: a = 2.5 m/s²</p>
            </div>
        </div>
    `
},

{
    id: "7", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (7) <br> تدفع رافعة قدرتها 1kW صندوقاً وزنه 980N على مستوى مائل بسرعة منتظمة مقدارها 2m/s. أوجد زاوية ميل المستوى على الأفقي:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 250" width="100%" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff">
                <path d="M50 200 L450 200 L450 80 Z" fill="#cfd8dc" stroke="#455a64" stroke-width="3"/>
                
                <path d="M100 200 A50 50 0 0 1 92 173" fill="none" stroke="#d32f2f" stroke-width="4"/>
                <text x="110" y="190" fill="#d32f2f" font-size="24" font-weight="bold">θ</text>
                
                <g transform="rotate(-16.7, 250, 140)">
                    <rect x="220" y="115" width="60" height="45" fill="#795548" stroke="#5d4037" stroke-width="2.5"/>
                    <line x1="285" y1="137" x2="320" y2="137" stroke="#4caf50" stroke-width="3" marker-end="url(#arrow-move)"/>
                </g>
                
                <rect x="300" y="10" width="180" height="80" fill="#f9f9f9" rx="5" stroke="#eee"/>
                <text x="310" y="35" fill="#1a237e" font-size="18" font-weight="bold">P = 1 kW</text>
                <text x="310" y="60" fill="#2e7d32" font-size="18" font-weight="bold">v = 2 m/s</text>
                <text x="310" y="85" fill="#e65100" font-size="18" font-weight="bold">w = 980 N</text>

                <defs>
                    <marker id="arrow-move" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/>
                    </marker>
                </defs>
            </svg>
        </div>
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; text-align: right; font-size: 1.1em;">
            <strong>📋 المعطيات:</strong> القدرة (1000W) | الوزن (980N) | السرعة منتظمة (2m/s)
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-7" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('7')" id="btn-7" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-7" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    1. بما أن السرعة منتظمة، فقوة الرافعة لأعلى (F) تساوي مركبة الوزن لأسفل (w sin θ).<br>
                    2. نحسب القوة أولاً: F = P / v.<br>
                    3. نعوض في F = w sin θ لإيجاد الزاوية.
                </div>
                <p>1) القوة (F): F = 1000 / 2 = 500 N</p>
                <p>2) sin θ: sin θ = 500 / 980 ≈ 0.51</p>
                <p style="font-weight: bold; color: #d32f2f; font-size: 1.1em;">3) الزاوية (θ): θ = sin⁻¹(0.51) ≈ 30.6°</p>
            </div>
        </div>
    `
},
{
    id: "8", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (8) <br> سيارة كتلتها 800kg وقوة المقاومة لها 300N. أوجد قدرة السيارة عندما تكون سرعتها 10m/s وعجلتها 0.6m/s²:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 450 160" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="135" x2="430" y2="135" stroke="#333" stroke-width="3"/>
                
                <path d="M150 120 L300 120 L290 90 L250 90 L230 70 L180 70 L160 90 Z" fill="#607d8b" stroke="#455a64" stroke-width="2"/>
                <text x="225" y="105" fill="white" font-size="12" font-weight="bold" text-anchor="middle">800 kg</text>
                
                <circle cx="180" cy="125" r="12" fill="#222" stroke="#000" stroke-width="2"/>
                <circle cx="270" cy="125" r="12" fill="#222" stroke="#000" stroke-width="2"/>
                <circle cx="180" cy="125" r="5" fill="#bbb"/> <circle cx="270" cy="125" r="5" fill="#bbb"/> <line x1="310" y1="100" x2="370" y2="100" stroke="#4caf50" stroke-width="3" marker-end="url(#a-v8)"/>
                <text x="310" y="90" fill="#4caf50" font-weight="bold" font-size="12">v = 10 m/s, a = 0.6 m/s²</text>
                
                <line x1="140" y1="100" x2="80" y2="100" stroke="#f44336" stroke-width="3" marker-end="url(#a-f8)"/>
                <text x="30" y="90" fill="#f44336" font-weight="bold" font-size="13">R = 300N</text>
                
                <defs>
                    <marker id="a-v8" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/></marker>
                    <marker id="a-f8" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#f44336"/></marker>
                </defs>
            </svg>
        </div>
        <div style="border-right: 6px solid #2196f3; background: #f0f7ff; padding: 15px; border-radius: 5px; text-align: right;">
            <strong>📋 المعطيات المجمعة:</strong> الكتلة = 800 kg | المقاومة = 300 N | السرعة اللحظية = 10 m/s | العجلة = 0.6 m/s²
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-8" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('8')" id="btn-8" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-8" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    السيارة تتحرك بعجلة، لذا قوة المحرك (F) يجب أن تتغلب على المقاومة وتُسرع السيارة.<br>
                    1. نطبق قانون نيوتن الثاني: F - R = m × a لإيجاد قوة المحرك (F).<br>
                    2. نضرب القوة في السرعة اللحظية لإيجاد القدرة: P = F × v.
                </div>
                <p>1) قوة المحرك: F = R + (m × a)</p>
                <p>F = 300 + (800 × 0.6) = 300 + 480 = 780 N</p>
                <p>2) حساب القدرة: P = F × v = 780 × 10</p>
                <p style="font-weight: bold; color: #d32f2f; font-size: 1.1em;">3) الناتج: P = 7800 Watt</p>
            </div>
        </div>
    `
},

{
    id: "9", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (9) <br> تتحرك سيارة كتلها 950kg بقدرة محرك مقدارها 25kW. أوجد الزمن اللازم لتزداد سرعة السيارة من 14m/s إلى 18m/s (بفرض إهمال المقاومة):</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 180" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="140" x2="480" y2="140" stroke="#333" stroke-width="3"/>
                <rect x="180" y="80" width="140" height="55" fill="#455a64" rx="5"/>
                <circle cx="210" cy="135" r="10" fill="#222"/><circle cx="290" cy="135" r="10" fill="#222"/>
                
                <text x="250" y="45" fill="#1a237e" font-size="18" font-weight="bold" text-anchor="middle">P = 25 kW | m = 950 kg</text>
                <text x="140" y="100" fill="#4caf50" font-weight="bold">v1 = 14</text>
                <text x="360" y="100" fill="#4caf50" font-weight="bold">v2 = 18</text>
                <line x1="160" y1="110" x2="340" y2="110" stroke="#4caf50" stroke-width="2" marker-end="url(#arr-v9)"/>
                <defs><marker id="arr-v9" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#4caf50"/></marker></defs>
            </svg>
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-9" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('9')" id="btn-9" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-9" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    بما أن لدينا قدرة وتغير في السرعة، نستخدم العلاقة بين الشغل وطاقة الحركة:<br>
                    1. الشغل المبذول (W) = التغير في طاقة الحركة (ΔK).<br>
                    2. الشغل (W) = القدرة (P) × الزمن (t).<br>
                    3. إذاً: P × t = ½ m (v₂² - v₁²).
                </div>
                <p>1) تحويل القدرة: P = 25,000 W</p>
                <p>2) حساب التغير في طاقة الحركة:<br>
                ΔK = 0.5 × 950 × (18² - 14²) = 475 × (324 - 196) = 475 × 128 = 60,800 J</p>
                <p>3) حساب الزمن (t):<br>
                t = ΔK / P = 60,800 / 25,000</p>
                <p style="font-weight: bold; color: #d32f2f; font-size: 1.2em;">4) الناتج النهائي: t ≈ 2.43 ثانية</p>
            </div>
        </div>
    `
},

{
    id: "10", 
    text: "<div style='color: #2e7d32; font-size: 1.4em; font-weight: 800; line-height: 1.5; margin-bottom: 15px;'>سؤال (10) <br> سيارة قدرة محركها 18kW وكتلتها 1200kg. أوجد عجلة السيارة عندما تكون سرعتها 25m/s، علماً بأن قوة المقاومة 200N:</div>",
    
    givensHTML: `
        <div style="text-align: center; background: #fff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #eee;">
            <svg viewBox="0 0 500 180" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="140" x2="480" y2="140" stroke="#333" stroke-width="3"/>
                <rect x="180" y="80" width="140" height="55" fill="#d32f2f" rx="5"/>
                <circle cx="210" cy="135" r="10" fill="#222"/><circle cx="290" cy="135" r="10" fill="#222"/>
                <text x="250" y="115" fill="white" font-weight="bold" text-anchor="middle">1200 kg</text>
                
                <text x="350" y="40" fill="#1a237e" font-size="16" font-weight="bold">P = 18 kW</text>
                <text x="350" y="65" fill="#f44336" font-size="16" font-weight="bold">R = 200 N</text>
                <text x="350" y="90" fill="#4caf50" font-size="16" font-weight="bold">v = 25 m/s</text>
            </svg>
        </div>
    `,
    solutionHTML: `
        <div id="solution-container-10" style="text-align: center; margin-top: 20px;">
            <button onclick="toggleSolution('10')" id="btn-10" style="background: #4caf50; color: white; border: none; padding: 12px 30px; border-radius: 30px; cursor: pointer; font-weight: bold; font-size: 1.2em;">عرض فكرة الحل والخطوات</button>
            <div id="sol-content-10" style="display: none; background: #fffdf5; padding: 25px; border: 2px dashed #ffa000; border-radius: 15px; margin-top: 25px; text-align: right; line-height: 2;">
                <div style="background: #e1f5fe; border-right: 6px solid #03a9f4; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
                    <h4 style="margin: 0; color: #01579b;">💡 خريطة التفكير:</h4>
                    1. نحسب القوة اللحظية للمحرك (F) من قانون القدرة: F = P / v.<br>
                    2. نطبق قانون نيوتن الثاني لحساب العجلة (a): القوة المحركة - المقاومة = الكتلة × العجلة (F - R = m × a).
                </div>
                <p>1) القوة المحركة: F = 18,000 / 25 = 720 N</p>
                <p>2) معادلة الحركة: 720 - 200 = 1200 × a</p>
                <p>3) حساب العجلة: 520 = 1200 × a</p>
                <p style="font-weight: bold; color: #d32f2f; font-size: 1.2em;">4) الناتج النهائي: a = 520 / 1200 ≈ 0.433 m/s²</p>
            </div>
        </div>
    `
}

];