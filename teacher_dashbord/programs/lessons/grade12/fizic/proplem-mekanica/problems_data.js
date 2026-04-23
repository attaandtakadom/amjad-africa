const problems = [
    {
    id: "2",
    text: "يسحب جسم كتلته 20kg مسافة 7m بسرعة منتظمة على سطح خشن بواسطة خيط، فإذا كان الشد في الخيط 100N. أوجد الشغل المبذول بواسطة: (1) الخيط، (2) قوة المقاومة، (3) قوة الاتصال العمودية.",
    type: "car_horizontal", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 20 kg</li>
            <li>المسافة (s) = 7 m</li>
            <li>قوة الشد (T) = 100 N</li>
            <li>الزاوية (&theta;) مع الحركة = 0 (الخيط أفقي)</li>
        </ul>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) الشغل المبذول بواسطة الخيط (W<sub>T</sub>):</strong><br>
            بما أن قوة الشد في نفس اتجاه الحركة (&theta; = 0):</p>
            <span class="math">W<sub>T</sub> = T . s . cos(0)</span>
            <span class="math">W<sub>T</sub> = 100 . 7 . 1 = 700 J</span>
            <hr>
            
            <p><strong>2) الشغل المبذول بواسطة المقاومة (W<sub>f</sub>):</strong><br>
            بما أن السرعة منتظمة، فإن المقاومة تساوي الشد (f = T = 100 N) ولكنها عكس الاتجاه:</p>
            <span class="math">W<sub>f</sub> = f . s . cos(180)</span>
            <span class="math">W<sub>f</sub> = 100 . 7 . (-1) = -700 J</span>
            <hr>

            <p><strong>3) الشغل المبذول بواسطة قوة الاتصال العمودية (W<sub>R</sub>):</strong><br>
            بما أن القوة عمودية على اتجاه الحركة (&theta; = 90):</p>
            <span class="math">W<sub>R</sub> = R . s . cos(90) = 0 J</span>
        </div>
    `
},

{
    id: "3", 
    text: "تتحرك سيارة كتلتها 1200kg بقوة دفع محرك F = 600N لمسافة 500m بسرعة منتظمة. احسب الشغل المبذول بواسطة قوة الدفع F وقوة المقاومة fk.",
    type: "car_moving", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 1200 kg</li>
            <li>المسافة (s) = 500 m</li>
            <li>قوة الدفع (F) = 600 N</li>
            <li>العجلة (a) = 0 (سرعة منتظمة)</li>
        </ul>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) الشغل المبذول بواسطة قوة الدفع (W<sub>F</sub>):</strong></p>
            <span class="math">W<sub>F</sub> = F . s = 600 . 500</span>
            <span class="math">W<sub>F</sub> = 300,000 J = 300 kJ</span>
            <hr>
            
            <p><strong>2) حساب قوة المقاومة (f<sub>k</sub>):</strong><br>
            بما أن السيارة تتحرك بسرعة منتظمة، فإن القوة المحركة تساوي المقاومة:</p>
            <span class="math">f<sub>k</sub> = F = 600 N</span>
            <hr>

            <p><strong>3) الشغل المبذول بواسطة قوة المقاومة (W<sub>fk</sub>):</strong></p>
            <span class="math">W<sub>fk</sub> = f<sub>k</sub> . s . cos(180)</span>
            <span class="math">W<sub>fk</sub> = 600 . 500 . (-1) = -300,000 J</span>
        </div>
    `
},
{
    id: "4",
    text: "يسحب صندوق بسرعة منتظمة بواسطة خيط أفقي، فإذا كان الشغل المبذول لسحب الصندوق مسافة 16m هو 800J. احسب الشد في الخيط (T).",
    type: "standard_box_physics", 
    givensHTML: `
        <ul>
            <li>المسافة (s) = 16 m</li>
            <li>شغل الشد (W<sub>T</sub>) = 800 J</li>
            <li>الكتلة (m): نفترضها 10 kg لتوضيح الوزن</li>
            <li>السرعة: منتظمة (a = 0)</li>
        </ul>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) حساب الشد في الخيط (T):</strong></p>
            <span class="math">W<sub>T</sub> = T . s &rArr; 800 = T . 16</span>
            <span class="math">T = 800 / 16 = 50 N</span>
            <hr>
            <p><strong>2) قوة المقاومة (f<sub>k</sub>):</strong><br>
            بما أن السرعة منتظمة: f<sub>k</sub> = T = 50 N</p>
        </div>
    `
},

{
    id: "5",
    text: "كرة كتلتها 1.2kg تتحرك بسرعة 20m/s وتقف بعد أن تقطع مسافة 30m. أوجد الشغل المبذول بواسطة قوة الاحتكاك، ومنه احسب متوسط قوة الاحتكاك fk.",
    type: "green_ball_physics", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 1.2 kg</li>
            <li>السرعة الابتدائية (u) = 20 m/s</li>
            <li>السرعة النهائية (v) = 0 (لأنها توقفت)</li>
            <li>المسافة (s) = 30 m</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e3f2fd; border-right: 5px solid #2196f3; padding: 10px; margin: 10px 0;">
            <strong>💡 طريقة التفكير:</strong>
            <p>بما أننا نملك سرعات ومسافة، أفضل طريق هو استخدام <strong>"مبدأ الشغل والطاقة"</strong>. الشغل المبذول بواسطة قوة الاحتكاك هو الذي سبب ضياع طاقة حركة الكرة حتى توقفت تماماً. لذا، الشغل المبذول = التغير في طاقة الحركة.</p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) حساب الشغل المبذول بواسطة الاحتكاك (W<sub>fk</sub>):</strong><br>
            نستخدم العلاقة: الشغل = التغير في طاقة الحركة</p>
            <span class="math">W<sub>fk</sub> = ½ m (v² - u²)</span>
            <span class="math">W<sub>fk</sub> = ½ . 1.2 . (0² - 20²)</span>
            <span class="math">W<sub>fk</sub> = 0.6 . (-400) = -240 J</span>
            <hr>
            
            <p><strong>2) حساب متوسط قوة الاحتكاك (f<sub>k</sub>):</strong><br>
            بما أن الشغل = القوة × المسافة × جيب تمام الزاوية (180 درجة لأنها مقاومة):</p>
            <span class="math">W<sub>fk</sub> = f<sub>k</sub> . s . cos(180)</span>
            <span class="math">-240 = f<sub>k</sub> . 30 . (-1)</span>
            <span class="math">-240 = -30 f<sub>k</sub></span>
            <span class="math">f<sub>k</sub> = 240 / 30 = 8 N</span>
        </div>
    `
},


{
    id: "6",
    text: "رجل يسحب عربة بواسطة خيط وكان الخيط يصنع زاوية مقدارها 20° مع الأفقي، وكانت قوة الشد في الخيط 30N. احسب الشغل المبذول لجر العربة مسافة 40m بسرعة منتظمة.",
    type: "cart_inclined_tension", 
    givensHTML: `
        <ul>
            <li>قوة الشد (T) = 30 N</li>
            <li>الزاوية (&theta;) = 20&deg;</li>
            <li>المسافة (s) = 40 m</li>
            <li>السرعة: منتظمة (العجلة = 0)</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e3f2fd; border-right: 5px solid #2196f3; padding: 10px; margin: 10px 0;">
            <strong>💡 طريقة التفكير:</strong>
            <p>عندما تكون القوة مائلة بزاوية، فإن الجزء المسؤول عن الشغل هو المركبة الأفقية للقوة في اتجاه الحركة فقط. نستخدم القانون: <strong>W = T . s . cos(&theta;)</strong>.</p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>حساب الشغل المبذول بواسطة قوة الشد (W<sub>T</sub>):</strong></p>
            <span class="math">W<sub>T</sub> = T . s . cos(&theta;)</span>
            <span class="math">W<sub>T</sub> = 30 . 40 . cos(20&deg;)</span>
            <span class="math">W<sub>T</sub> = 1200 . 0.9397</span>
            <span class="math"><strong>W<sub>T</sub> &asymp; 1127.64 J</strong></span>
            <hr>
            <p class="solution-text">ملاحظة: الشغل هنا أقل قليلاً من الشغل لو كان الشد أفقياً تماماً بسبب ميل الخيط.</p>
        </div>
    `
},
{
    id: "7",
    text: "تدفع دراجة كتلتها 30kg على مستوى مائل إلى أعلى بزاوية مقدارها 15° مع الأفقي. احسب الشغل المبذول لدفع الدراجة مسافة 70m بسرعة منتظمة.",
    type: "inclined_plane_bike", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 30 kg</li>
            <li>الزاوية (&theta;) = 15&deg;</li>
            <li>المسافة (s) = 70 m</li>
            <li>عجلة الجاذبية (g) &asymp; 10 m/s²</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e3f2fd; border-right: 5px solid #2196f3; padding: 10px; margin: 10px 0;">
            <strong>💡 طريقة التفكير:</strong>
            <p>عند الدفع لأعلى مستوى مائل بسرعة منتظمة، يجب أن تكون قوة الدفع (F) مساوية لمركبة الوزن التي تعمل لأسفل المنحدر وهي <strong>(mg sinθ)</strong>. الشغل المبذول هو القوة مضروبة في المسافة.</p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) حساب قوة الدفع (F):</strong><br>
            بما أن السرعة منتظمة، القوة للأعلى تساوي مركبة الوزن للأسفل:</p>
            <span class="math">F = m . g . sin(&theta;)</span>
            <span class="math">F = 30 . 10 . sin(15&deg;)</span>
            <span class="math">F = 300 . 0.2588 &asymp; 77.64 N</span>
            <hr>
            
            <p><strong>2) حساب الشغل المبذول (W):</strong></p>
            <span class="math">W = F . s</span>
            <span class="math">W = 77.64 . 70</span>
            <span class="math"><strong>W &asymp; 5434.8 J</strong></span>
        </div>
    `
},

{
    id: "8",
    text: "سيارة كتلتها 600kg تُدفع على سطح أفقي من السكون حتى تصل سرعتها إلى 4m/s. احسب الشغل المبذول لدفع السيارة.",
    type: "yellow_car_kinetic", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 600 kg</li>
            <li>السرعة الابتدائية (u) = 0 (من السكون)</li>
            <li>السرعة النهائية (v) = 4 m/s</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e3f2fd; border-right: 5px solid #2196f3; padding: 10px; margin: 10px 0;">
            <strong>💡 طريقة التفكير:</strong>
            <p>بما أن السيارة بدأت من السكون وزادت سرعتها، فإن الشغل المبذول عليها قد تحول بالكامل إلى طاقة حركة. نستخدم قانون (مبدأ الشغل والطاقة): <strong>W = ΔK.E = ½ m (v² - u²)</strong>.</p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>حساب الشغل المبذول (W):</strong></p>
            <span class="math">W = ½ . m . (v² - u²)</span>
            <span class="math">W = ½ . 600 . (4² - 0²)</span>
            <span class="math">W = 300 . 16</span>
            <span class="math"><strong>W = 4800 J = 4.8 kJ</strong></span>
            <hr>
            <p class="solution-text">هذا الشغل هو الذي أدى لزيادة سرعة السيارة من الصفر إلى 4 م/ث.</p>
        </div>
    `
},{
    id: "9", // تم إرجاع الرقم إلى 9 كما طلبتِ
    text: "يسحب صندوق كتلته 20kg على مستوى مائل إلى أعلى بزاوية 30° مع الأفقي. فإذا كان مقدار الشغل المبذول لسحب الصندوق مسافة 10m هو 1200J، أوجد مقدار متوسط قوة المقاومة fk.",
    type: "inclined_box_resistance", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 20 kg</li>
            <li>الزاوية (&theta;) = 30&deg;</li>
            <li>المسافة (s) = 10 m</li>
            <li>الشغل الكلي المبذول (W) = 1200 J</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e3f2fd; border-right: 5px solid #2196f3; padding: 10px; margin: 10px 0;">
            <strong>💡 طريقة التفكير (قانون نيوتن الثاني):</strong>
            <p>لإيجاد fk، نحلل القوى المؤثرة: قوة السحب (T) للأعلى تقابلها <strong>مركبة الوزن (F<sub>w</sub>)</strong> وقوة المقاومة (f<sub>k</sub>) للأسفل.</p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) حساب مركبة الوزن (F<sub>w</sub>):</strong></p>
            <span class="math">F<sub>w</sub> = m . g . sin(&theta;)</span>
            <span class="math">F<sub>w</sub> = 20 . 10 . sin(30&deg;) = 100 N</span>
            <hr>
            
            <p><strong>2) حساب قوة السحب (T) من الشغل:</strong></p>
            <span class="math">W = T . s &rArr; 1200 = T . 10 &rArr; T = 120 N</span>
            <hr>

            <p><strong>3) تطبيق قانون نيوتن الثاني:</strong><br>
            بفرض السرعة منتظمة، القوة المحصلة = 0</p>
            <span class="math">T - (F<sub>w</sub> + f<sub>k</sub>) = 0</span>
            <span class="math">120 - (100 + f<sub>k</sub>) = 0</span>
            <span class="math"><strong>f<sub>k</sub> = 20 N</strong></span>
        </div>
    `
},
{
    id: "10",
    text: "ينحدر دراج على مستوى مائل بزاوية 15° مع الأفقي، فتزداد سرعته بعد أن يقطع مسافة 50m من 4m/s لتصل إلى 10m/s. احسب متوسط قوة المقاومة fk إذا علمت أن كتلة الدراج والدراجة معاً 60kg.",
    type: "final_bike_challenge", 
    givensHTML: `
        <ul>
            <li>الكتلة (m) = 60 kg</li>
            <li>الزاوية (&theta;) = 15&deg;</li>
            <li>المسافة (s) = 50 m</li>
            <li>السرعة الابتدائية (u) = 4 m/s</li>
            <li>السرعة النهائية (v) = 10 m/s</li>
        </ul>
    `,
    hintHTML: `
        <div style="background: #e8f5e9; border-right: 5px solid #4caf50; padding: 10px; margin: 10px 0;">
            <strong>💡 مبدأ الشغل والطاقة:</strong>
            <p>التغير في طاقة الحركة (ΔK.E) يساوي الشغل الكلي المبذول (شغل الوزن + شغل المقاومة).<br>
            <strong>W<sub>total</sub> = ½ m (v² - u²)</strong></p>
        </div>
    `,
    solutionHTML: `
        <div>
            <p><strong>1) حساب التغير في طاقة الحركة (ΔK.E):</strong></p>
            <span class="math">ΔK.E = ½ . m . (v² - u²)</span>
            <span class="math">ΔK.E = ½ . 60 . (10² - 4²)</span>
            <span class="math">ΔK.E = 30 . (100 - 16) = 30 . 84 = 2520 J</span>
            <hr>
            
            <p><strong>2) حساب شغل مركبة الوزن (W<sub>w</sub>):</strong></p>
            <span class="math">W<sub>w</sub> = (m . g . sin&theta;) . s</span>
            <span class="math">W<sub>w</sub> = (60 . 10 . sin 15&deg;) . 50</span>
            <span class="math">W<sub>w</sub> &asymp; (600 . 0.2588) . 50 &asymp; 155.28 . 50 &asymp; 7764 J</span>
            <hr>

            <p><strong>3) حساب شغل المقاومة (W<sub>fk</sub>):</strong><br>
            بما أن: ΔK.E = W<sub>w</sub> + W<sub>fk</sub></p>
            <span class="math">2520 = 7764 + W<sub>fk</sub></span>
            <span class="math">W<sub>fk</sub> = 2520 - 7764 = -5244 J</span>
            <hr>

            <p><strong>4) حساب قوة المقاومة (f<sub>k</sub>):</strong></p>
            <span class="math">f<sub>k</sub> = |W<sub>fk</sub>| / s</span>
            <span class="math">f<sub>k</sub> = 5244 / 50 = <strong>104.88 N</strong></span>
            <p style="font-size: 13px; color: #d32f2f; font-weight: bold;">(أي حوالي 105 نيوتن كما في حساباتكِ الدقيقة)</p>
        </div>
    `
},


{
    id: "11",
    text: "<span style='color: #d32f2f; font-weight: bold;'>[سؤال امتحان الدور الثاني 2018 - 2019]</span><br>تدفع سيارة كتلتها 800kg على سطح أفقي لتتحرك بعجلة 0.5m/s² خلال زمن قدره 10s. فإن الشغل المبذول يساوي:",
    type: "exam_car_push", 
    options: ["10 kJ", "3 kJ", "0", "5 kJ"],
    correctAnswer: "10 kJ",
    
    // دمج المعطيات مع الخيارات لضمان ظهورها جميعاً
    givensHTML: `
        <div style="border-right: 4px solid #1e88e5; padding-right: 15px; background: #e3f2fd; margin-bottom: 15px; padding-top: 10px; padding-bottom: 10px; border-radius: 5px;">
            <strong>📋 معطيات السؤال:</strong>
            <ul style="margin-bottom: 15px;">
                <li>الكتلة (m) = 800 kg</li>
                <li>العجلة (a) = 0.5 m/s²</li>
                <li>الزمن (t) = 10 s</li>
            </ul>
            
            <hr style="border: 0; border-top: 1px solid #ccc; margin: 15px 0;">
            
            <strong>🔘 اختر الإجابة الصحيحة:</strong>
            <div style="margin-top: 10px;">
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q11" value="10 kJ"> 10 kJ</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q11" value="3 kJ"> 3 kJ</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q11" value="0"> 0</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q11" value="5 kJ"> 5 kJ</label>
            </div>
            
            <button onclick="checkAnswerDirect('11', '10 kJ')" style="background: #2196f3; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-family: 'Tajawal', sans-serif; margin-top: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">تحقق من الإجابة</button>
            <p id="feedback-11" style="font-weight: bold; margin-top: 10px; min-height: 20px;"></p>
        </div>
    `,
    
    solutionHTML: `
    <div id="solution-container-11">
        <button onclick="toggleSolution('11')" id="btn-11" class="btn-toggle">إظهار الحل التفصيلي</button>
        <div id="sol-content-11" style="display: none; background: #f9f9f9; padding: 15px; border: 1px dashed #2196f3; border-radius: 10px; margin-top: 10px;">
            <p style="color: #1565c0; font-weight: bold; border-bottom: 1px solid #ddd; padding-bottom: 5px;">خطوات الحل التفصيلية:</p>
            
            <p><strong>1) حساب المسافة (s) باستخدام قانون الحركة الثاني:</strong><br>
            <span class="math">s = ut + ½ at²</span><br>
            <span class="math">s = (0 × 10) + ½(0.5 × 10²) = 25 m</span></p>
            
            <p><strong>2) حساب القوة (F) باستخدام قانون نيوتن الثاني:</strong><br>
            <span class="math">F = m × a</span><br>
            <span class="math">F = 800 × 0.5 = 400 N</span></p>
            
            <p><strong>3) حساب الشغل المبذول (W):</strong><br>
            <span class="math">W = F × s</span><br>
            <span class="math">W = 400 × 25 = 10,000 J</span></p>
            
            <div style="background: #e8f5e9; border-right: 5px solid #4caf50; padding: 10px; margin-top: 10px;">
                <strong>4) التحويل إلى كيلوجول (kJ):</strong><br>
                <span class="math">10,000 ÷ 1000 = </span> <strong style="color: #2e7d32; font-size: 18px;">10 kJ</strong>
            </div>
        </div>
    </div>
`
},
{
    id: "12",
    text: "<span style='color: #d32f2f; font-weight: bold;'>[سؤال امتحان الدور الثاني 2018 - 2019]</span><br>إذا استخدمت رافعة لرفع حمولة قدرها 1.5 طن إلى ارتفاع 10m، فإن الشغل الذي تبذله الرافعة يساوي:",
    type: "crane_lift_work", 
    options: ["150 kJ", "1.5 kJ", "150 J", "15 kJ"],
    correctAnswer: "150 kJ",
    
    // هنا قمنا بدمج المعطيات مع أزرار الخيارات في قسم واحد
    givensHTML: `
        <div style="border-right: 4px solid #ffa000; padding-right: 15px; background: #fff8e1; margin-bottom: 15px; padding-top: 10px; padding-bottom: 10px; border-radius: 5px;">
            <strong>📋 معطيات السؤال:</strong>
            <ul style="margin-bottom: 15px;">
                <li>الكتلة (m) = 1.5 طن (أي 1500 كجم)</li>
                <li>الارتفاع (h) = 10 متر</li>
                <li>عجلة الجاذبية (g) = 10 م/ث²</li>
            </ul>
            
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 15px 0;">
            
            <strong>🔘 اختر الإجابة الصحيحة:</strong>
            <div style="margin-top: 10px;">
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q12" value="150 kJ"> 150 kJ</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q12" value="1.5 kJ"> 1.5 kJ</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q12" value="150 J"> 150 J</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q12" value="15 kJ"> 15 kJ</label>
            </div>
            
            <button onclick="checkAnswerDirect('12', '150 kJ')" style="background: #4caf50; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; font-family: 'Tajawal', sans-serif; margin-top: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">تحقق من الإجابة</button>
            <p id="feedback-12" style="font-weight: bold; margin-top: 10px; min-height: 20px;"></p>
        </div>
    `,
    
    solutionHTML: `
    <div id="solution-container-12">
        <button onclick="toggleSolution('12')" id="btn-12" class="btn-toggle">إظهار الحل التفصيلي</button>
        <div id="sol-content-12" style="display: none; background: #fffdf5; padding: 15px; border: 1px dashed #ffa000; border-radius: 10px; margin-top: 10px;">
            <p style="color: #e65100; font-weight: bold; border-bottom: 1px solid #ffe0b2; padding-bottom: 5px;">خطوات الحل المنطقية:</p>
            
            <p><strong>1) تحويل الكتلة:</strong> من طن إلى كجم<br>
            <span class="math">m = 1.5 × 1000 = 1500 kg</span></p>
            
            <p><strong>2) حساب القوة (الوزن):</strong> القوة اللازمة للرفع<br>
            <span class="math">F = m × g = 1500 × 10 = 15000 N</span></p>
            
            <p><strong>3) حساب الشغل (الرفع):</strong><br>
            <span class="math">W = F × h = 15000 × 10 = 150,000 J</span></p>
            
            <div style="background: #fff3e0; border-right: 5px solid #ffa000; padding: 10px; margin-top: 10px;">
                <strong>4) تحويل الناتج النهائي لكيلوجول:</strong><br>
                <span class="math">150,000 ÷ 1000 = </span> <strong style="color: #bf360c; font-size: 18px;">150 kJ</strong>
            </div>
        </div>
    </div>
`
},





];


// تأكدي أن الكلمة هي questions وليس شيئاً آخر
const questions = [ 
    
        
{
    id: "5_1",
    text: "<span style='color: #2e7d32; font-weight: bold;'>[تمارين 5 - 5 ب]</span><br>تستخدم رافعة لرفع صندوق كتلته 2 طن إلى ارتفاع 75m خلال زمن قدره 45s. أوجد متوسط القدرة المبذولة بواسطة الرافعة:",
    type: "crane_power_calc", 
    options: ["33.3 kW", "30 kW", "150 kW", "3.3 kW"],
    correctAnswer: "33.3 kW",
    
    givensHTML: `
        <div style="text-align: center; background: white; padding: 10px; border-radius: 10px; margin-bottom: 15px;">
            <svg viewBox="0 0 400 200" width="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="10" y1="190" x2="390" y2="190" stroke="#4caf50" stroke-width="3"/>
                <rect x="180" y="80" width="50" height="50" fill="#795548" stroke="#5d4037" stroke-width="2"/>
                <text x="185" y="110" fill="white" font-size="10" font-weight="bold">2 Ton</text>
                <line x1="205" y1="80" x2="205" y2="20" stroke="#333" stroke-width="2"/>
                <line x1="205" y1="20" x2="100" y2="20" stroke="#333" stroke-width="4"/>
                <line x1="300" y1="190" x2="300" y2="80" stroke="#2196f3" stroke-width="2" marker-end="url(#arrowhead)"/>
                <text x="310" y="140" fill="#2196f3" font-weight="bold">h = 75m</text>
                <text x="40" y="100" fill="#e91e63" font-weight="bold">t = 45s</text>
                <defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><path d="M0,0 L10,3.5 L0,7 Z" fill="#2196f3"/></marker></defs>
            </svg>
        </div>

        <div style="border-right: 4px solid #4caf50; padding-right: 15px; background: #f1f8e9; margin-bottom: 15px; padding-top: 10px; padding-bottom: 10px;">
            <strong>📋 معطيات المسألة:</strong>
            <ul style="margin-bottom: 15px;">
                <li>الكتلة (m) = 2 طن = 2000 kg</li>
                <li>الارتفاع (h) = 75 m</li>
                <li>الزمن (t) = 45 s</li>
                <li>عجلة الجاذبية (g) = 10 m/s²</li>
            </ul>
            
            <hr style="border: 0; border-top: 1px solid #c8e6c9; margin: 15px 0;">
            
            <strong>🔘 اختر الإجابة الصحيحة (القدرة P):</strong>
            <div style="margin-top: 10px;">
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q5_1" value="33.3 kW"> 33.3 kW</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q5_1" value="30 kW"> 30 kW</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q5_1" value="150 kW"> 150 kW</label>
                <label style="display: block; margin-bottom: 8px; cursor: pointer;"><input type="radio" name="q5_1" value="3.3 kW"> 3.3 kW</label>
            </div>
            
            <button onclick="checkAnswerDirect('5_1', '33.3 kW')" style="background: #4caf50; color: white; border: none; padding: 8px 20px; border-radius: 20px; cursor: pointer; margin-top: 10px;">تحقق من الإجابة</button>
            <p id="feedback-5_1" style="font-weight: bold; margin-top: 10px;"></p>
        </div>
    `,
    
    solutionHTML: `
        <div id="solution-container-5_1">
            <button onclick="toggleSolution('5_1')" id="btn-5_1" class="btn-toggle">إظهار الحل التفصيلي</button>
            <div id="sol-content-5_1" style="display: none; background: #fff; padding: 15px; border: 1px dashed #4caf50; border-radius: 10px; margin-top: 10px;">
                <p><strong>1) حساب الشغل المبذول (W):</strong><br>
                $W = m \cdot g \cdot h$<br>
                $W = 2000 \cdot 10 \cdot 75 = 1,500,000 \text{ J}$</p>
                
                <p><strong>2) حساب متوسط القدرة (P):</strong><br>
                $P = \frac{W}{t}$<br>
                $P = \frac{1,500,000}{45} \approx 33,333.3 \text{ Watt}$</p>
                
                <div style="background: #e8f5e9; border-right: 5px solid #4caf50; padding: 10px; margin-top: 10px;">
                    <strong>3) التحويل إلى كيلوات (kW):</strong><br>
                    $33,333.3 \div 1000 = \mathbf{33.3 \text{ kW}}$
                </div>
            </div>
        </div>
    `
}

]; // تأكدي من إغلاق القوس المربع والفاصلة المنقوطة



// أضيفي هذا الكود في نهاية ملف script.js
function toggleSolution(id) {
    const content = document.getElementById('sol-content-' + id);
    const btn = document.getElementById('btn-' + id);
    
    if (content) {
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            btn.innerText = "إخفاء الحل";
            btn.style.background = "#f44336"; 
        } else {
            content.style.display = "none";
            btn.innerText = "إظهار الحل التفصيلي";
            btn.style.background = "#2196f3";
        }
    }
}
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // هذه الخاصية تجعل الحركة انسيابية وبطيئة
    });
}

// وظيفة الصعود للأعلى بهدوء
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// مراقبة التمرير لإظهار أو إخفاء سهم "الأعلى"
window.onscroll = function() {
    const scrollUpBtn = document.getElementById("scroll-up");
    // إذا نزل الطالب أكثر من 300 بكسل يظهر السهم
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollUpBtn.style.display = "flex";
    } else {
        scrollUpBtn.style.display = "none";
    }
};
function displayQuestion(question) {
    let html = `<div class="question-box">
        <p>${question.text}</p>`;
    
    // هذا الجزء هو المسؤول عن إظهار الخيارات كأزرار راديو
    if (question.options) {
        html += `<div class="options-container">`;
        question.options.forEach((opt, index) => {
            html += `
                <label class="option-label">
                    <input type="radio" name="q${question.id}" value="${opt}">
                    ${opt}
                </label><br>
            `;
        });
        html += `</div>`;
    }

    // زر التحقق من الإجابة
    html += `<button onclick="checkAnswer('${question.id}')" class="check-btn">تحقق من الإجابة</button>`;
    
    // جزء الحل المخفي
    html += `${question.solutionHTML}</div>`;
    
    return html;
}

function checkAnswerDirect(id, correct) {
    const selected = document.querySelector(`input[name="q${id}"]:checked`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!selected) {
        feedback.innerText = "الرجاء اختيار إجابة أولاً!";
        feedback.style.color = "orange";
        return;
    }
    
    if (selected.value === correct) {
        feedback.innerText = "✔️ إجابة صحيحة! أحسنتِ يا بطل/ة أمجاد أفريقيا.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ إجابة خاطئة. حاول مرة أخرى أو شاهد الحل التفصيلي.";
        feedback.style.color = "red";
    }
}
