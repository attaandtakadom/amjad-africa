

 questionsMatrix = [


{
    id: "1-c",
    title: "س 1 (تمارين الكتاب 1-B - فقرة ج): تحليل القوى في الاتجاهات OX و OY بدلالة F و θ",
    text: "حلِّل القوة Mوضحة في الشكل (ج) في الاتجاهات OX و OY على التوالي بدلالة F و θ°. حيث تقع القوة F في الربع الثاني وتصنع زاوية θ° مع المحور الموجب OX (أو الزاوية المحصورة بين الاتجاه الموجب لمحور x وخط عمل القوة).",
    hint: "لاحظ أن القوة F تقع في الربع الثاني؛ بالتالي تكون مركبتها على محور OX سالبة (-F cos θ) ومركبتها على محور OY موجبة (+F sin θ).",
    solution: "خطوة 1: تحليل القوة في الاتجاه الأفقي OX ⇐ Fx = -F cos(θ°). <br> خطوة 2: تحليل القوة في الاتجاه الرأسي OY ⇐ Fy = F sin(θ°).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-gray' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#64748b'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' stroke='#94a3b8' stroke-width='2' marker-end='url(#arrow-gray)'/><line x1='250' y1='250' x2='250' y2='30' stroke='#94a3b8' stroke-width='2' marker-end='url(#arrow-gray)'/><text x='440' y='205' class='label' font-size='14' fill='#475569'>X</text><text x='230' y='40' class='label' font-size='14' fill='#475569'>Y</text><text x='235' y='198' class='label' font-size='14' fill='#475569'>O</text><line x1='250' y1='180' x2='130' y2='60' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='110' y='55' class='label' font-size='15' fill='#2563eb'>F</text><path d='M 290 180 A 40 40 0 0 0 215 145' fill='none' stroke='#dc2626' stroke-width='2' stroke-dasharray='4'/><text x='305' y='160' class='label' font-size='14' fill='#dc2626'>θ°</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='262' class='label' font-size='13' fill='#16a34a'>المركبات: OX = -F cos θ , OY = F sin θ ✅</text></svg>",
    options: [
        { text: "أ) OX = -F cos θ° ، OY = F sin θ°", isCorrect: true },
        { text: "ب) OX = F cos θ° ، OY = F sin θ°", isCorrect: false },
        { text: "ج) OX = -F sin θ° ، OY = F cos θ°", isCorrect: false },
        { text: "د) OX = -F cos θ° ، OY = -F sin θ°", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحديد مركبة المحور الأفقي (OX)",
            question: "بما أن القوة F تقع في الربع الثاني وتصنع زاوية θ° مع المحور الأفقي OX، ما هي المركبة الأفقية؟",
            options: [
                { text: "OX = -F cos θ°", isCorrect: true },
                { text: "OX = F cos θ°", isCorrect: false }
            ],
            feedback: "✅ صحيح! الاتجاه على المحور الأفقي يساراً (السالب) في الربع الثاني، والزاوية مجاورة للمحور الأفقي."
        },
        {
            title: "الخطوة 2: تحديد مركبة المحور الرأسي (OY)",
            question: "ما هي المركبة الرأسية للقوة F على المحور OY؟",
            options: [
                { text: "OY = F sin θ°", isCorrect: true },
                { text: "OY = -F sin θ°", isCorrect: false }
            ],
            feedback: "✅ ممتاز! المركبة الرأسية موجهة لأعلى (موجبة) وتساوي F sin θ°."
        }
    ],
   pdfSolutionSteps: [
    "══════════════ الخيارات ══════════════",
    "أ) OX = -F cos θ° ، OY = F sin θ°  ✅ (الإجابة الصحيحة)",
    "ب) OX = F cos θ° ، OY = F sin θ°",
    "ج) OX = -F sin θ° ، OY = F cos θ°",
    "د) OX = -F cos θ° ، OY = -F sin θ°",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. تحليل القوة F في الربع الثاني بالنسبة للمحاور:",
    "   - المركبة الأفقية على المحور OX مجاورة للزاوية θ وفي الاتجاه السالب ⟸ OX = -F cos θ°",
    "   - المركبة الرأسية على المحور OY مقابلة للزاوية θ وفي الاتجاه الموجب ⟸ OY = F sin θ°",
    "",
    "الإجابة الصحيحة: أ) OX = -F cos θ° ، OY = F sin θ° ✅"
],
pdfFinalAnswer: "الإجابة الصحيحة: أ) OX = -F cos θ° ، OY = F sin θ° ✅"
},
{
    id: 2,
    title: "س 2 (تمارين الكتاب 1-B): حركة كتلة على مستوى مائل أملس",
    text: "تُرِكت كتلة خشبية قدرُها (4 kg) لتتحرك من السكون على مستوى مائل بزاوية (30°) مع الأفقي وبفرض لا وجود للاحتكاك. احسب عجلة الكتلة الخشبية وسرعتها بعد أن تقطع مسافة قدرها (3 m) (باعتبار g = 10 m/s²).",
    hint: "بما أن المستوى أملس (لا يوجد احتكاك)، فإن القوة الوحيدة المسببة للحركة أسفل المستوى هي مركبة الوزن (mg sin θ). العجلة تجدها من القانون a = g sin θ، ثم استخدم معادلة الحركة v² = u² + 2as لحساب السرعة النهائية.",
    solution: "خطوة 1: حساب العجلة ⇐ a = g sin(30°) = 10 × 0.5 = 5 m/s². <br> خطوة 2: حساب السرعة النهائية بعد مسافة 3m من السكون (u = 0) ⇐ v² = 0² + 2(5)(3) = 30 ⇐ v = √30 ≈ 5.48 m/s.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='220' x2='420' y2='220' stroke='#64748b' stroke-width='3'/><path d='M 50 220 L 400 80 L 400 220 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 100 220 A 50 50 0 0 0 90 204' fill='none' stroke='#dc2626' stroke-width='2'/><text x='115' y='210' class='label' font-size='13' fill='#dc2626'>30°</text><g transform='translate(225,150) rotate(-21.8)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='3'/><text x='0' y='-10' class='label' font-size='12' fill='#0f172a'>4 kg</text></g><line x1='225' y1='135' x2='155' y2='163' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='150' y='185' class='label' font-size='12' fill='#2563eb'>mg sin 30°</text><line x1='225' y1='135' x2='225' y2='215' stroke='#dc2626' stroke-width='2' marker-end='url(#arrow-red)'/><text x='250' y='210' class='label' font-size='12' fill='#dc2626'>W = 40 N</text><rect x='40' y='250' width='420' height='25' fill='none'/><text x='250' y='265' class='label' font-size='13' fill='#16a34a'>العجلة a = 5 m/s² ، السرعة v ≈ 5.48 m/s ✅</text></svg>",
    options: [
        { text: "أ) العجلة = 5 m/s² ، السرعة = 5.48 m/s", isCorrect: true },
        { text: "ب) العجلة = 10 m/s² ، السرعة = 7.75 m/s", isCorrect: false },
        { text: "ج) العجلة = 2.5 m/s² ، السرعة = 3.87 m/s", isCorrect: false },
        { text: "د) العجلة = 5 m/s² ، السرعة = 30 m/s", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب العجلة (a) النازلة على المستوى",
            question: "ما المعادلة المستخدمة لحساب العجلة على مستوى مائل أملس بدون احتكاك؟",
            options: [
                { text: "a = g sin 30°", isCorrect: true },
                { text: "a = g cos 30°", isCorrect: false }
            ],
            feedback: "✅ صحيح! قوة الحركة هي مركبة الوزن الأفقية على امتداد المستوى (mg sin θ)، بالتالي: a = g sin 30° = 10 × 0.5 = 5 m/s²."
        },
        {
            title: "الخطوة 2: حساب السرعة النهائية (v) بعد قطع مسافة 3m",
            question: "باستخدام معادلة الحركة v² = u² + 2as حيث u = 0 و s = 3m، ما قيمة v؟",
            options: [
                { text: "v = √(2 × 5 × 3) = √30 ≈ 5.48 m/s", isCorrect: true },
                { text: "v = 2 × 5 × 3 = 30 m/s", isCorrect: false }
            ],
            feedback: "✅ ممتاز! v² = 30 ⇐ v = √30 ≈ 5.48 m/s."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) العجلة = 5 m/s² ، السرعة = 5.48 m/s  ✅ (الإجابة الصحيحة)",
        "ب) العجلة = 10 m/s² ، السرعة = 7.75 m/s",
        "ج) العجلة = 2.5 m/s² ، السرعة = 3.87 m/s",
        "د) العجلة = 5 m/s² ، السرعة = 30 m/s",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب العجلة على المستوى المائل الأملس:",
        "   F = mg sin 30°",
        "   ma = mg sin 30°",
        "   a = g sin 30° = 10 × 0.5 = 5 m/s²  ✅",
        "",
        "2. حساب السرعة بعد قطع مسافة s = 3 m بدءاً من السكون u = 0:",
        "   v² = u² + 2as",
        "   v² = 0 + 2 × 5 × 3 = 30",
        "   v = √30 ≈ 5.48 m/s  ✅",
        "",
        "الإجابة الصحيحة: أ) العجلة = 5 m/s² ، السرعة = 5.48 m/s ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) العجلة a = 5 m/s² ، وسرعة الكتلة الخشبية v ≈ 5.48 m/s ✅"
},
{
    id: 3,
    title: "س 3 (تمارين الكتاب 1-B): حركة سيارة صاعدة على طريق مائل مع وجود مقاومة",
    text: "تتحرك سيارة كتلتها (850 kg) بعجلة قدرها (0.3 m/s²) إلى أعلى طريق مستقيم يميل بزاوية قدرها (12°) مع الأفقي وهناك قوة مقاومة للحركة مقدارها (250 N). احسب مقدار القوة المحركة للسيارة (باعتبار g = 10 m/s²).",
    hint: "تتحرك السيارة لأعلى المستوى المائل، بالتالي تعمل قوة المحرك (F) لأعلى، بينما تعمل مقاومة الحركة (R = 250 N) ومركبة الوزن (mg sin 12°) لأسفل. طبق قانون نيوتن الثاني: ΣF = m × a.",
    solution: "خطوة 1: حساب مركبة الوزن لأسفل المستوى ⇐ W_parallel = 850 × 10 × sin(12°) ≈ 8500 × 0.20791 = 1767.25 N. <br> خطوة 2: تطبيق قانون نيوتن الثاني (F - R - W_parallel = m × a) ⇐ F - 250 - 1767.25 = 850 × 0.3. <br> خطوة 3: حساب القوة المحركة ⇐ F = 255 + 250 + 1767.25 ≈ 2272.25 N (أو 2272.27 N بحسب درجات التقريب).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 150 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 110 230 A 60 60 0 0 0 102 218' fill='none' stroke='#dc2626' stroke-width='2'/><text x='125' y='220' class='label' font-size='13' fill='#dc2626'>12°</text><g transform='translate(230,190) rotate(-12)'><rect x='-30' y='-30' width='60' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>850 kg</text></g><line x1='245' y1='173' x2='330' y2='155' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='345' y='145' class='label' font-size='13' fill='#2563eb'>قوة المحرك F</text><line x1='215' y1='180' x2='130' y2='198' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='110' y='220' class='label' font-size='12' fill='#dc2626'>R = 250N + mg sin(12°)</text><rect x='40' y='250' width='420' height='25' fill='none'/><text x='250' y='265' class='label' font-size='13' fill='#16a34a'>القوة المحركة F ≈ 2272.27 N ✅</text></svg>",
    options: [
        { text: "أ) القوة المحركة = 2272.27 N", isCorrect: true },
        { text: "ب) القوة المحركة = 2017.27 N", isCorrect: false },
        { text: "ج) القوة المحركة = 255.00 N", isCorrect: false },
        { text: "د) القوة المحركة = 2522.27 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب المركبة الموازية للوزن (أسفل المستوى)",
            question: "ما القوة الناتجة عن مرّكبة الوزن لأسفل المستوى المائل؟",
            options: [
                { text: "W_parallel = mg sin(12°) = 8500 × sin(12°) ≈ 1767.27 N", isCorrect: true },
                { text: "W_parallel = mg cos(12°) = 8500 × cos(12°) ≈ 8313.68 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! المركبة الموازية للمستوى المائل دائماً تأخذ الجيب (sin θ) وتكون اتجاهها لأسفل المستوى."
        },
        {
            title: "الخطوة 2: تطبيق قانون نيوتن الثاني لإيجاد القوة المحركة (F)",
            question: "ما هي القوة الكلية المحصلة ΣF المسببة للحركة بعجلة a = 0.3 m/s²؟",
            options: [
                { text: "F - R - mg sin(12°) = m × a", isCorrect: true },
                { text: "F + R + mg sin(12°) = m × a", isCorrect: false }
            ],
            feedback: "✅ ممتاز! قوة المحرك تعمل لأعلى فتكون بموجب، بينما قوى المقاومة والمركبة الموازية للوزن تعاكس الاتجاه. F - 250 - 1767.27 = 850 × 0.3 ⇐ F = 255 + 2017.27 = 2272.27 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) القوة المحركة = 2272.27 N  ✅ (الإجابة الصحيحة)",
        "ب) القوة المحركة = 2017.27 N",
        "ج) القوة المحركة = 255.00 N",
        "د) القوة المحركة = 2522.27 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب مركبة الوزن الموازية للمستوى المائل لأسفل:",
        "   W_parallel = m × g × sin(12°)",
        "   W_parallel = 850 × 10 × sin(12°)",
        "   W_parallel = 8500 × 0.20791 = 1767.27 N",
        "",
        "2. إيجاد القوة الناتجة عن التسارع (مجموع القوة الكلية):",
        "   F_net = m × a = 850 × 0.3 = 255 N",
        "",
        "3. تطبيق قانون نيوتن الثاني للحركة لأعلى المستوى:",
        "   F_engine - R - W_parallel = F_net",
        "   F_engine - 250 - 1767.27 = 255",
        "   F_engine = 255 + 250 + 1767.27 = 2272.27 N  ✅",
        "",
        "الإجابة الصحيحة: أ) القوة المحركة = 2272.27 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) القوة المحركة للسيارة F ≈ 2272.27 N ✅"
},
{
    id: 4,
    title: "س 4 (تمارين الكتاب 1-B): حركة دراجة هابطة على منحدر مائل بدون مقاومة",
    text: "تتحرك دراجة كتلتها (60 kg) إلى أسفل منحدر يميل بزاوية قدرها (6°) مع الأفقي وبفرض لا وجود لمقاومة الحركة. احسب العجلة إلى أسفل المنحدر وبين أن سرعتها تزيد من (4 m/s) إلى (16 m/s) عندما تقطع مسافة قدرها (117 m) (باعتبار g = 10 m/s²).",
    hint: "تتحرك الدراجة لأسفل المستوى تحت تأثير مركبة الوزن فقط (mg sin 6°) لعدم وجود مقاومة. طبق قانون نيوتن الثاني: ΣF = m × a لإيجاد العجلة، ثم استخدم معادلة الحركة: v² = u² + 2as للتأكد من السرعة النهائية.",
    solution: "خطوة 1: حساب العجلة لأسفل المنحدر ⇐ m × g × sin(6°) = m × a ⇐ a = 10 × sin(6°) ≈ 1.045 m/s². <br> خطوة 2: إثبات السرعة النهائية بعد قطع 117 m ⇐ v² = 4² + 2 × 1.0453 × 117 = 16 + 244.6 = 260.6 ⇐ v = √260.6 ≈ 16.14 m/s (وتُقرّب إلى 16 m/s كما هو مطلوب في السؤال).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='140' x2='450' y2='220' stroke='#64748b' stroke-width='3'/><path d='M 50 220 L 450 220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><path d='M 120 220 A 70 70 0 0 0 112 208' fill='none' stroke='#dc2626' stroke-width='2'/><text x='130' y='212' class='label' font-size='13' fill='#dc2626'>6°</text><g transform='translate(200,170) rotate(11.3)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>60 kg</text></g><line x1='215' y1='170' x2='290' y2='185' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='310' y='205' class='label' font-size='12' fill='#16a34a'>mg sin(6°)</text><line x1='180' y1='140' x2='240' y2='152' stroke='#2563eb' stroke-width='2' stroke-dasharray='3' marker-end='url(#arrow-blue)'/><text x='210' y='130' class='label' font-size='11' fill='#2563eb'>a ≈ 1.045 m/s²</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>العجلة a ≈ 1.045 m/s² | السرعة v ≈ 16.14 m/s (≈ 16 m/s) ✅</text></svg>",
    options: [
        { text: "أ) العجلة = 1.045 m/s²، والسرعة النهائية v ≈ 16 m/s (تحديداً 16.14 m/s)", isCorrect: true },
        { text: "ب) العجلة = 0.522 m/s²، والسرعة النهائية v ≈ 12.00 m/s", isCorrect: false },
        { text: "ج) العجلة = 9.945 m/s²، والسرعة النهائية v ≈ 48.30 m/s", isCorrect: false },
        { text: "د) العجلة = 1.045 m/s²، والسرعة النهائية v ≈ 20.00 m/s", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب العجلة لأسفل المنحدر (a)",
            question: "ما المعادلة المسببة للحركة إلى أسفل المنحدر في عدم وجود مقاومة؟",
            options: [
                { text: "mg sin(6°) = m × a  ⇐  a = g sin(6°) ≈ 1.045 m/s²", isCorrect: true },
                { text: "mg cos(6°) = m × a  ⇐  a = g cos(6°) ≈ 9.945 m/s²", isCorrect: false }
            ],
            feedback: "✅ صحيح! القوة الوحيدة المسببة للحركة هي مركبة الوزن الموازية للمستوى المائل (mg sin θ). وبما أن الكتلة تظهر في الطرفين، تختصر لتصبح العجلة a = g sin(6°) = 10 × 0.10453 = 1.045 m/s²."
        },
        {
            title: "الخطوة 2: إثبات أن السرعة تزيد إلى 16 m/s بعد قطع مسافة 117 m",
            question: "أي معادلة حركة نستخدمها لإيجاد السرعة النهائية (v) مع السرعة الابتدائية u = 4 m/s والمسافة s = 117 m؟",
            options: [
                { text: "v² = u² + 2as  ⇐  v = √(4² + 2 × 1.0453 × 117) ≈ 16.14 m/s", isCorrect: true },
                { text: "v = u + at  ⇐  v = 4 + 1.045 × 117 ≈ 126.27 m/s", isCorrect: false }
            ],
            feedback: "✅ ممتاز! المعادلة الثالثة للحركة تربط السرعة بالمسافة والعجلة بدون الحاجة للزمن. التعويض: v² = 16 + 244.6 = 260.6 ⇐ v ≈ 16.14 m/s (وتُقرّب إلى 16 m/s كما هو مطلوب بالإثبات)."
        }
    ],
   pdfSolutionSteps: [
    "══════════════ الخيارات ══════════════",
    "أ) العجلة = 1.045 m/s²، والسرعة النهائية v ≈ 16.14 m/s (≈ 16 m/s)  ✅ (الإجابة الصحيحة)",
    "ب) العجلة = 0.522 m/s²، والسرعة النهائية v ≈ 12.00 m/s",
    "ج) العجلة = 9.945 m/s²، والسرعة النهائية v ≈ 48.30 m/s",
    "د) العجلة = 1.045 m/s²، والسرعة النهائية v ≈ 20.00 m/s",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. حساب العجلة لأسفل المنحدر:",
    "   بفرض عدم وجود مقاومة R = 0:",
    "   ΣF = m × a",
    "   m × g × sin 6° = m × a",
    "   a = g × sin 6°",
    "   a = 10 × 0.104528 = 1.0453 m/s²  ✅",
    "",
    "2. إثبات مقدار السرعة النهائية v بعد قطع مسافة s = 117 m:",
    "   استخدام معادلة الحركة: v² = u² + 2as",
    "   v² = 4² + 2 × 1.04528 × 117",
    "   v² = 16 + 244.60 = 260.60",
    "   v = √260.60 ≈ 16.14 m/s ≈ 16 m/s  ✅",
    "",
    "الإجابة الصحيحة: أ) العجلة = 1.045 m/s²، والسرعة النهائية v ≈ 16.14 m/s (تصل إلى 16 m/s) ✅"
],
pdfFinalAnswer: "الإجابة الصحيحة: أ) العجلة a ≈ 1.045 m/s²، وتصل السرعة لـ v ≈ 16 m/s ✅"


},



{
    id: 5,
    title: "س 5 (تمارين الكتاب 1-B): اتزان جسم تحت تأثير ثلاث قوى متعامدة وضبط القيمة المجهولة",
    text: "يتزن جسم تحت تأثير ثلاث قوى والموضحة في الشكل المقابل. وبالتحليل في اتجاه القوة (Y N)، بيّن أن Y = 5 N، ثم احسب قيمة (X).",
    hint: "بما أن الجسم في حالة اتزان تحت تأثير ثلاث قوى، فإن محصلة القوى العمودية تساوي صفراً (ΣF_y = 0) ومحصلة القوى الأفقية تساوي صفراً (ΣF_x = 0). استخدم تحليل القوة المائلة (10 N) المائلة بزاوية (60° مع العمودي / 30° مع الأفقي).",
    solution: "خطوة 1: التحليل في اتجاه Y لإثبات قيمتها ⇐ Y - 10 cos(60°) = 0 ⇐ Y = 10 × 0.5 = 5 N (تم الإثبات). <br> خطوة 2: التحليل في الاتجاه الأفقي لحساب X ⇐ X - 10 sin(60°) = 0 ⇐ X = 10 × (√3 / 2) ≈ 8.66 N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='80' y1='150' x2='420' y2='150' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><line x1='250' y1='30' x2='250' y2='250' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><circle cx='250' cy='150' r='6' fill='#334155'/><line x1='250' y1='150' x2='250' y2='40' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='250' y='25' class='label' font-size='13' fill='#2563eb'>Y N</text><line x1='250' y1='150' x2='90' y2='150' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='70' y='155' class='label' font-size='13' fill='#dc2626'>X N</text><line x1='250' y1='150' x2='380' y2='225' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='410' y='235' class='label' font-size='13' fill='#16a34a'>10 N</text><path d='M 250 190 A 40 40 0 0 0 285 170' fill='none' stroke='#dc2626' stroke-width='2'/><text x='275' y='205' class='label' font-size='12' fill='#dc2626'>60°</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>Y = 5 N (مُثبتة) | X ≈ 8.66 N ✅</text></svg>",
    options: [
        { text: "أ) Y = 5 N، والقوة X ≈ 8.66 N", isCorrect: true },
        { text: "ب) Y = 5 N، والقوة X = 5.00 N", isCorrect: false },
        { text: "ج) Y = 8.66 N، والقوة X = 5.00 N", isCorrect: false },
        { text: "د) Y = 10 N، والقوة X = 10.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: التحليل بالاتجاه الرأسي لتأكيد أن Y = 5 N",
            question: "ما المعادلة الناتجة عن تحليل القوة المائلة (10 N) في اتجاه محور Y للوصول للاتزان؟",
            options: [
                { text: "Y = 10 × cos(60°)  ⇐  Y = 10 × 0.5 = 5 N", isCorrect: true },
                { text: "Y = 10 × sin(60°)  ⇐  Y = 10 × 0.866 = 8.66 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! الزاوية المعطاة 60° محصورة مع المحور الرأسي السفلي، فيكون المركبة الرأسية هي 10 cos(60°). وبالتوازن مع القوة Y للأعلى: Y = 10 × 0.5 = 5 N (وهو المطلوب إثباته)."
        },
        {
            title: "الخطوة 2: التحليل بالاتجاه الأفقي لحساب القوة X",
            question: "كيف نحسب القوة X المتزنة أفقياً مع المركبة الأفقية للقوة المائلة؟",
            options: [
                { text: "X = 10 × sin(60°)  ⇐  X = 10 × (√3 / 2) ≈ 8.66 N", isCorrect: true },
                { text: "X = 10 × tan(60°)  ⇐  X = 10 × 1.732 ≈ 17.32 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! المركبة الأفقية للقوة 10 N تأخذ الجيب sin(60°) لأن الزاوية المعطاة مع الراسي. بالتالي أفقياً: X = 10 × sin(60°) ≈ 8.66 N."
        }
    ],
   pdfSolutionSteps: [
    "══════════════ الخيارات ══════════════",
    "أ) Y = 5 N، والقوة X ≈ 8.66 N  ✅ (الإجابة الصحيحة)",
    "ب) Y = 5 N، والقوة X = 5.00 N",
    "ج) Y = 8.66 N، والقوة X = 5.00 N",
    "د) Y = 10 N، والقوة X = 10.00 N",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. إثبات قيمة القوة Y بالتحليل في اتجاه Y رأسياً:",
    "   ΣF_y = 0",
    "   Y - 10 × cos 60° = 0",
    "   Y = 10 × cos 60°",
    "   Y = 10 × 0.5 = 5 N  ✅ - وهو المطلوب إثباته",
    "",
    "2. حساب قيمة القوة X بالتحليل في اتجاه X أفقياً:",
    "   ΣF_x = 0",
    "   X - 10 × sin 60° = 0",
    "   X = 10 × sin 60°",
    "   X = 10 × 0.866025 ≈ 8.66 N  ✅",
    "",
    "الإجابة الصحيحة: أ) Y = 5 N، والقوة X ≈ 8.66 N ✅"
],
pdfFinalAnswer: "الإجابة الصحيحة: أ) Y = 5 N - مُثبتة، والقوة X ≈ 8.66 N ✅"
},
{
    id: 6,
    title: "س 6 (تمارين الكتاب 1-B): اتزان صندوق على مستوى مائل تحت تأثير قوة أفقية",
    text: "يستقر صندوق كتلته (6 kg) على مستوى مائل بزاوية قدرها (20°) مع الأفقي بواسطة قوة أفقية (F)[cite: 3]. أوجد مقدار هذه القوة ثم احسب مقدار قوة الاتصال العمودية المؤثرة على الصندوق (باعتبار g = 10 m/s²)[cite: 3].",
    hint: "بما أن الصندوق مستقر (في حالة اتزان)، فإن محصلة القوى الموازية للمستوى المائل تساوي صفراً، ومحصلة القوى العمودية على المستوى تساوي صفراً. قم بتحليل كل من قوة الوزن (mg = 60 N) والقوة الأفقية (F) إلى مركبات موازية وعمودية على المستوى.",
    solution: "خطوة 1: تحليل القوى الموازية للمستوى لحساب F ⇐ F cos(20°) = mg sin(20°) ⇐ F = 60 × tan(20°) ≈ 21.84 N. <br> خطوة 2: تحليل القوى العمودية على المستوى لحساب R ⇐ R = mg cos(20°) + F sin(20°) ⇐ R = 60 × cos(20°) + 21.84 × sin(20°) ≈ 56.38 + 7.47 ≈ 63.85 N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 100 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 110 230 A 60 60 0 0 0 102 212' fill='none' stroke='#dc2626' stroke-width='2'/><text x='125' y='220' class='label' font-size='13' fill='#dc2626'>20°</text><g transform='translate(230,175) rotate(-20)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>6 kg</text></g><line x1='230' y1='160' x2='310' y2='160' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='330' y='165' class='label' font-size='12' fill='#2563eb'>القوة الأفقية F</text><line x1='230' y1='155' x2='200' y2='70' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='200' y='55' class='label' font-size='12' fill='#16a34a'>الاتصال العمودي R</text><line x1='230' y1='160' x2='230' y2='245' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='230' y='263' class='label' font-size='12' fill='#dc2626'>الوزن W = 60 N</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>F ≈ 21.84 N | R ≈ 63.85 N ✅</text></svg>",
    options: [
        { text: "أ) القوة الأفقية F ≈ 21.84 N، وقوة الاتصال العمودية R ≈ 63.85 N", isCorrect: true },
        { text: "ب) القوة الأفقية F ≈ 56.38 N، وقوة الاتصال العمودية R ≈ 20.52 N", isCorrect: false },
        { text: "ج) القوة الأفقية F ≈ 20.52 N، وقوة الاتصال العمودية R ≈ 56.38 N", isCorrect: false },
        { text: "د) القوة الأفقية F ≈ 60.00 N، وقوة الاتصال العمودية R ≈ 60.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحليل القوى موازاةً للمستوى المائل لإيجاد القوة الأفقية (F)",
            question: "ما المعادلة الموازية للمستوى المائل والتي تضمن اتزان الصندوق؟",
            options: [
                { text: "F cos(20°) = mg sin(20°)  ⇐  F = 60 × tan(20°) ≈ 21.84 N", isCorrect: true },
                { text: "F sin(20°) = mg cos(20°)  ⇐  F = 60 / tan(20°) ≈ 164.85 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! مرّكبة القوة الأفقية التي تدفع لأعلى المستوى هي F cos(20°)، وهي تتوازن مع مرّكبة الوزن التي تسحب لأسفل المستوى mg sin(20°). بالتالي: F = 60 × (sin 20° / cos 20°) = 60 × tan(20°) ≈ 21.84 N."
        },
        {
            title: "الخطوة 2: حساب قوة الاتصال العمودية (R)",
            question: "كيف نحسب قوة الاتصال العمودية R بالتعامد على المستوى المائل؟",
            options: [
                { text: "R = mg cos(20°) + F sin(20°) ≈ 56.38 + 7.47 = 63.85 N", isCorrect: true },
                { text: "R = mg cos(20°) - F sin(20°) ≈ 56.38 - 7.47 = 48.91 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! قوة الاتصال العمودية R للعلَى تُعادل المركبة العمودية للوزن (mg cos 20°) بالإضافة إلى المركبة العمودية للقوة الأفقية الضاغطة على المستوى (F sin 20°). التعويض: R = 60 × cos(20°) + 21.84 × sin(20°) ≈ 63.85 N."
        }
    ],
   pdfSolutionSteps: [
    "══════════════ الخيارات ══════════════",
    "أ) القوة الأفقية F ≈ 21.84 N، وقوة الاتصال العمودية R ≈ 63.85 N  ✅ (الإجابة الصحيحة)",
    "ب) القوة الأفقية F ≈ 56.38 N، وقوة الاتصال العمودية R ≈ 20.52 N",
    "ج) القوة الأفقية F ≈ 20.52 N، وقوة الاتصال العمودية R ≈ 56.38 N",
    "د) القوة الأفقية F ≈ 60.00 N، وقوة الاتصال العمودية R ≈ 60.00 N",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. إيجاد القوة الأفقية F من معادلة الاتزان موازاةً للمستوى المائل:",
    "   ΣF_parallel = 0",
    "   F cos 20° - mg sin 20° = 0",
    "   F cos 20° = 60 × sin 20°",
    "   F = 60 × (sin 20° / cos 20°) = 60 × tan 20°",
    "   F = 60 × 0.36397 ≈ 21.84 N  ✅",
    "",
    "2. إيجاد قوة الاتصال العمودية R من معادلة الاتزان عمودياً على المستوى:",
    "   ΣF_perpendicular = 0",
    "   R - mg cos 20° - F sin 20° = 0",
    "   R = mg cos 20° + F sin 20°",
    "   R = (60 × 0.93969) + (21.838 × 0.34202)",
    "   R = 56.381 + 7.469 = 63.85 N  ✅",
    "",
    "الإجابة الصحيحة: أ) القوة الأفقية F ≈ 21.84 N، وقوة الاتصال العمودية R ≈ 63.85 N ✅"
],
pdfFinalAnswer: "الإجابة الصحيحة: أ) القوة الأفقية F ≈ 21.84 N، وقوة الاتصال العمودية R ≈ 63.85 N ✅"
},{
    id: 7,
    title: "س 7 (تمارين الكتاب 1-B): حركة متزلج بسرعة ثابتة على منحدر مائل مع وجود احتكاك",
    text: "يُجر متزلج كتلته (78 kg) بسرعة ثابتة إلى أعلى منحدر زاويته (12°) بواسطة قوة مقدارها (210 N) تؤثر إلى أعلى بزاوية (20°) مع المنحدر. أوجد قوة الاحتكاك وقوة الاتصال العمودية المؤثرة على المتزلج (باعتبار g = 10 m/s²).",
    hint: "بما أن حركة المتزلج تتم بسرعة ثابتة، فإن العجلة تساوي صفراً (a = 0) والقوى في حالة اتزان ديناميكي. قم بتحليل قوة الشد (210 N) إلى مركبتين: واحدة موازية للمنحدر (210 cos 20°) وأخرى عمودية عليه (210 sin 20°). طبق شرطي الاتزان موازاةً وعمودياً على المنحدر.",
    solution: "خطوة 1: الاتزان موازاةً للمنحدر لإيجاد قوة الاحتكاك (f) ⇐ f + mg sin(12°) = 210 cos(20°) ⇐ f = 210 cos(20°) - 780 sin(12°) ≈ 197.33 - 162.17 = 35.16 N. <br> خطوة 2: الاتزان عمودياً على المنحدر لإيجاد قوة الاتصال العمودية (R) ⇐ R + 210 sin(20°) = mg cos(12°) ⇐ R = 780 cos(12°) - 210 sin(20°) ≈ 762.89 - 71.82 = 691.07 N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 150 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 110 230 A 60 60 0 0 0 102 218' fill='none' stroke='#dc2626' stroke-width='2'/><text x='125' y='220' class='label' font-size='13' fill='#dc2626'>12°</text><g transform='translate(220,193) rotate(-12)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>78 kg</text></g><line x1='235' y1='175' x2='325' y2='120' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='345' y='110' class='label' font-size='12' fill='#2563eb'>قوة الشد 210 N (بزاوية 20°)</text><line x1='205' y1='182' x2='135' y2='197' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='120' y='217' class='label' font-size='11' fill='#dc2626'>f + mg sin(12°)</text><line x1='220' y1='178' x2='195' y2='88' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='190' y='73' class='label' font-size='12' fill='#16a34a'>الاتصال العمودي R</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>f ≈ 35.16 N | R ≈ 691.07 N ✅</text></svg>",
    options: [
        { text: "أ) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 691.07 N", isCorrect: true },
        { text: "ب) قوة الاحتكاك f ≈ 197.33 N، وقوة الاتصال العمودية R ≈ 762.89 N", isCorrect: false },
        { text: "ج) قوة الاحتكاك f ≈ 162.17 N، وقوة الاتصال العمودية R ≈ 71.82 N", isCorrect: false },
        { text: "د) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 762.89 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحليل القوى موازاةً للمنحدر لإيجاد قوة الاحتكاك (f)",
            question: "ما هي معادلة الاتزان موازاةً للمنحدر للحركة بسرعة ثابتة إلى أعلى؟",
            options: [
                { text: "210 cos(20°) = f + mg sin(12°)  ⇐  f = 210 cos(20°) - 780 sin(12°) ≈ 35.16 N", isCorrect: true },
                { text: "210 sin(20°) = f + mg cos(12°)  ⇐  f = 210 sin(20°) - 780 cos(12°) ≈ -691.07 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! المركبة الموازية لقوة الجر لأعلى المنحدر هي 210 cos(20°)، وهي تتزن مع قوة الاحتكاك f ومركبة الوزن mg sin(12°) اللتين تعاكسان اتجاه الحركة لأسفل المنحدر. f = 197.33 - 162.17 = 35.16 N."
        },
        {
            title: "الخطوة 2: حساب قوة الاتصال العمودية (R)",
            question: "كيف نحسب قوة الاتصال العمودية R بالتعامد على المنحدر؟",
            options: [
                { text: "R + 210 sin(20°) = mg cos(12°)  ⇐  R = 780 cos(12°) - 210 sin(20°) ≈ 691.07 N", isCorrect: true },
                { text: "R = mg cos(12°) + 210 sin(20°)  ⇐  R = 762.89 + 71.82 = 834.71 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! قوة الشد المائلة تسحب المتزلج للأعلى عمودياً بمركبتها (210 sin 20°)، مما يخفف الضغط على المنحدر. بالتالي: R + 210 sin(20°) = mg cos(12°) ⇐ R = 762.89 - 71.82 = 691.07 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 691.07 N  ✅ (الإجابة الصحيحة)",
        "ب) قوة الاحتكاك f ≈ 197.33 N، وقوة الاتصال العمودية R ≈ 762.89 N",
        "ج) قوة الاحتكاك f ≈ 162.17 N، وقوة الاتصال العمودية R ≈ 71.82 N",
        "د) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 762.89 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب قوة الاحتكاك (f) من معادلة الاتزان موازاةً للمنحدر (a = 0):",
        "   ΣF_parallel = 0",
        "   F_pull cos(20°) - f - mg sin(12°) = 0",
        "   f = 210 × cos(20°) - 78 × 10 × sin(12°)",
        "   f = (210 × 0.93969) - (780 × 0.20791)",
        "   f = 197.335 - 162.171 ≈ 35.16 N  ✅",
        "",
        "2. حساب قوة الاتصال العمودية (R) من معادلة الاتزان عمودياً على المنحدر:",
        "   ΣF_perpendicular = 0",
        "   R + F_pull sin(20°) - mg cos(12°) = 0",
        "   R = mg cos(12°) - 210 sin(20°)",
        "   R = (780 × 0.97815) - (210 × 0.34202)",
        "   R = 762.955 - 71.824 ≈ 691.13 N  ✅",
        "",
        "الإجابة الصحيحة: أ) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 691.07 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) قوة الاحتكاك f ≈ 35.16 N، وقوة الاتصال العمودية R ≈ 691.07 N ✅"
},{
    id: 8,
    title: "س 8 (تمارين الكتاب 1-B): اتزان جسم على مستوى أملس في ثلاث حالات واتجاهات للقوة",
    text: "وُضع جسم وزنه (10 N) على مستوى أملس يميل بزاوية قدرها (35°) مع الأفقي. أوجد مقدار القوة اللازمة للمحافظة على الجسم في اتزان إذا ما أثرت هذه القوة في:\nأ) اتجاه يوازي المستوى.\nب) اتجاه أفقي.\nجـ) اتجاه إلى أعلى يصنع زاوية (25°) مع اتجاه المستوى.\nثم اذكر بدون حسابات الحالات الثلاث التي تكون لها قوة اتصال عمودية أكبر.",
    hint: "بما أن المستوى أملس (لا يوجد احتكاك)، فإن قوة الاتزان تتغلب على مركبة الوزن لأسفل المستوى (W sin 35° = 10 sin 35° ≈ 5.74 N). بالنسبة لقوة الاتصال العمودية (R)، القوة التي تضغط على المستوى تزيد من قيمة R، بينما القوة التي تسحب للأعلى تخفف من قيمة R.",
    solution: "أ) اتجاه يوازي المستوى: F_a = 10 sin(35°) ≈ 5.74 N، وقوة الاتصال R_a = 10 cos(35°) ≈ 8.19 N.<br>ب) اتجاه أفقي: F_b cos(35°) = 10 sin(35°) ⇐ F_b = 10 tan(35°) ≈ 7.00 N، وقوة الاتصال R_b = 10 cos(35°) + F_b sin(35°) ≈ 8.19 + 4.02 = 12.21 N.<br>جـ) اتجاه يصنع 25° مع المستوى: F_c cos(25°) = 10 sin(35°) ⇐ F_c = 5.736 / cos(25°) ≈ 6.33 N، وقوة الاتصال R_c = 10 cos(35°) - F_c sin(25°) ≈ 8.19 - 2.67 = 5.52 N.<br>ترتيب قوة الاتصال العمودية من الأكبر إلى الأصغر: الحالة (ب) > الحالة (أ) > الحالة (جـ).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 80 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 120 230 A 70 70 0 0 0 107 207' fill='none' stroke='#dc2626' stroke-width='2'/><text x='130' y='220' class='label' font-size='13' fill='#dc2626'>35°</text><g transform='translate(230,157) rotate(-35)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>10 N</text></g><line x1='245' y1='145' x2='315' y2='96' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='335' y='90' class='label' font-size='12' fill='#2563eb'>F_a = 5.74 N</text><line x1='230' y1='142' x2='180' y2='70' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='170' y='55' class='label' font-size='12' fill='#16a34a'>R_b max = 12.21 N</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>F_a = 5.74N | F_b = 7.00N | F_c = 6.33N | R_b هي الأكبر ✅</text></svg>",
    options: [
        { text: "أ) F_a ≈ 5.74 N، F_b ≈ 7.00 N، F_c ≈ 6.33 N، والحالة (ب) لها أكبر قوة اتصال عمودية", isCorrect: true },
        { text: "ب) F_a ≈ 8.19 N، F_b ≈ 5.74 N، F_c ≈ 7.00 N، والحالة (أ) لها أكبر قوة اتصال عمودية", isCorrect: false },
        { text: "ج) F_a ≈ 5.74 N، F_b ≈ 6.33 N، F_c ≈ 7.00 N، والحالة (جـ) لها أكبر قوة اتصال عمودية", isCorrect: false },
        { text: "د) F_a ≈ 10.00 N، F_b ≈ 10.00 N، F_c ≈ 10.00 N، وجميع الحالات متساوية في R", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب القوة F في الحالات الثلاث (أ، ب، جـ)",
            question: "كيف نحسب قيم القوة F اللازمة للاتزان في الحالات الثلاث؟",
            options: [
                { text: "أ) F_a = 10 sin(35°) ≈ 5.74 N | ب) F_b = 10 tan(35°) ≈ 7.00 N | جـ) F_c = 5.736 / cos(25°) ≈ 6.33 N", isCorrect: true },
                { text: "أ) F_a = 10 cos(35°) ≈ 8.19 N | ب) F_b = 10 / tan(35°) ≈ 14.28 N | جـ) F_c = 8.191 / sin(25°) ≈ 19.38 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! مركبة الوزن الموازية لأسفل هي W sin(35°) ≈ 5.736 N. تعادلها F مباشرة في (أ)، وتتزن مع F cos(35°) في (ب)، ومع F cos(25°) في (جـ)."
        },
        {
            title: "الخطوة 2: المقارنة الاستنتاجية لقوة الاتصال العمودية (R)",
            question: "بدون حسابات، أي الحالات تكون لها قوة اتصال عمودية أكبر؟",
            options: [
                { text: "الحالة (ب) لأن القوة الأفقية تضغط على المستوى وتزيد الضغط العام، بينما (جـ) تسحب للأعلى فتقلل R", isCorrect: true },
                { text: "الحالة (جـ) لأن الزاوية 25° تعطي أكبر قوة عمودية", isCorrect: false }
            ],
            feedback: "✅ ممتاز! في الحالة (ب)، المركبة العمودية للقوة الأفقية تدفع الجسم باتجاه المستوى (تضاف إلى مركبة الوزن 10 cos 35°)، في حين أن القوة في الحالة (جـ) لها مركبة رأسية تجذب الجسم لأعلى فتخفف R."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) F_a ≈ 5.74 N، F_b ≈ 7.00 N، F_c ≈ 6.33 N، والحالة (ب) لها أكبر R  ✅ (الإجابة الصحيحة)",
        "ب) F_a ≈ 8.19 N، F_b ≈ 5.74 N، F_c ≈ 7.00 N، والحالة (أ) لها أكبر R",
        "ج) F_a ≈ 5.74 N، F_b ≈ 6.33 N، F_c ≈ 7.00 N، والحالة (جـ) لها أكبر R",
        "د) F_a ≈ 10.00 N، F_b ≈ 10.00 N، F_c ≈ 10.00 N، وجميع الحالات متساوية",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب القوة اللازمة للاتزان في الحالات الثلاث:",
        "   مركبة الوزن الموازية لأسفل المستوى = W sin(35°) = 10 × 0.57358 = 5.736 N",
        "",
        "   أ) القوة بموازاة المستوى:",
        "      F_a = W sin(35°) = 5.74 N  ✅",
        "",
        "   ب) القوة أفقية:",
        "      F_b cos(35°) = W sin(35°)",
        "      F_b = 10 × tan(35°) = 10 × 0.70021 ≈ 7.00 N  ✅",
        "",
        "   جـ) القوة تصنع زاوية 25° مع المستوى لأعلى:",
        "      F_c cos(25°) = W sin(35°)",
        "      F_c = 5.7358 / cos(25°) = 5.7358 / 0.90631 ≈ 6.33 N  ✅",
        "",
        "2. المقارنة وقيم قوة الاتصال العمودية (R):",
        "   - R_a = W cos(35°) = 8.19 N",
        "   - R_b = W cos(35°) + F_b sin(35°) = 8.19 + 4.02 = 12.21 N  (الأكبر)",
        "   - R_c = W cos(35°) - F_c sin(25°) = 8.19 - 2.67 = 5.52 N  (الأصغر)",
        "",
        "   استنتاج بدون حسابات: الحالة (ب) القوة أفقية تضغط على المستوى المائل فلها أكبر قوة اتصال عمودية.",
        "",
        "الإجابة الصحيحة: أ) F_a ≈ 5.74 N، F_b ≈ 7.00 N، F_c ≈ 6.33 N، والحالة (ب) لها أكبر قوة اتصال عمودية ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) F_a ≈ 5.74 N، F_b ≈ 7.00 N، F_c ≈ 6.33 N، والحالة (ب) هي الأكبر في قوة الاتصال العمودية R ✅"
},{
    id: 9,
    title: "س 9 (تمارين الكتاب 1-B): اتزان كرة معلقة بسلسلة وسحبها بقوة أفقية",
    text: "عُلقت كرة معدنية وزنها (500 N) في نقطة ثابتة بواسطة سلسلة، ثم سُحبت الكرة أفقياً بقوة قدرها (250 N) واتزنت الكرة بعد أن صنعت السلسلة زاوية (θ) مع الرأسي[cite: 8]. أوجد الشد في السلسلة وقيمة الزاوية (θ)[cite: 8].",
    hint: "بما أن الكرة متزنة تحت تأثير ثلاث قوى (الوزن لأسفل W = 500 N، القوة الأفقية F = 250 N، الشد في السلسلة T المائل بزاوية θ مع الرأسي): طبّق شرطي الاتزان الأفقي (T sin θ = F) والرأسي (T cos θ = W)، واقسم المعادلين لإيجاد tan θ ثم حساب الشد T.",
    solution: "خطوة 1: حساب الزاوية θ ⇐ tan(θ) = F / W = 250 / 500 = 0.5 ⇐ θ = tan⁻¹(0.5) ≈ 26.57°. <br> خطوة 2: حساب الشد T ⇐ T = W / cos(θ) = 500 / cos(26.57°) ≈ 559.02 N (أو باستخدام نظرية فيثاغورس: T = √(250² + 500²) ≈ 559.02 N).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='150' y1='40' x2='350' y2='40' stroke='#64748b' stroke-width='4'/><line x1='250' y1='40' x2='250' y2='220' stroke='#94a3b8' stroke-width='2' stroke-dasharray='4'/><line x1='250' y1='40' x2='330' y2='160' stroke='#334155' stroke-width='3'/><path d='M 250 80 A 40 40 0 0 0 274 72' fill='none' stroke='#dc2626' stroke-width='2'/><text x='270' y='100' class='label' font-size='13' fill='#dc2626'>θ ≈ 26.57°</text><circle cx='330' cy='160' r='20' fill='#cbd5e1' stroke='#334155' stroke-width='2'/><line x1='330' y1='160' x2='270' y2='70' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='250' y='70' class='label' font-size='12' fill='#2563eb'>T ≈ 559.02 N</text><line x1='330' y1='160' x2='420' y2='160' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='435' y='165' class='label' font-size='12' fill='#16a34a'>F = 250 N</text><line x1='330' y1='160' x2='330' y2='250' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='330' y='268' class='label' font-size='12' fill='#dc2626'>W = 500 N</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>T ≈ 559.02 N | θ ≈ 26.57° ✅</text></svg>",
    options: [
        { text: "أ) الشد T ≈ 559.02 N، وزاوية الميل θ ≈ 26.57°", isCorrect: true },
        { text: "ب) الشد T = 750.00 N، وزاوية الميل θ = 30.00°", isCorrect: false },
        { text: "ج) الشد T ≈ 447.21 N، وزاوية الميل θ ≈ 63.43°", isCorrect: false },
        { text: "د) الشد T ≈ 500.00 N، وزاوية الميل θ ≈ 45.00°", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: إيجاد زاوية الميل (θ) مع الرأسي",
            question: "ما هي معادلة إيجاد الزاوية θ عند قسمة شرط الاتزان الأفقي على شرط الاتزان الرأسي؟",
            options: [
                { text: "tan(θ) = F / W = 250 / 500 = 0.5  ⇐  θ = tan⁻¹(0.5) ≈ 26.57°", isCorrect: true },
                { text: "sin(θ) = F / W = 250 / 500 = 0.5  ⇐  θ = sin⁻¹(0.5) = 30.00°", isCorrect: false }
            ],
            feedback: "✅ صحيح! الاتزان الأفقي يعطي T sin(θ) = 250، والاتزان الرأسي يعطي T cos(θ) = 500. بقسمة المعادلين: tan(θ) = 250 / 500 = 0.5 ⇐ θ ≈ 26.57°."
        },
        {
            title: "الخطوة 2: حساب قوة الشد في السلسلة (T)",
            question: "كيف نحسب مقدار الشد T باستخدام الزاوية المحسوبة أو محصلة القوى؟",
            options: [
                { text: "T = √(F² + W²) = √(250² + 500²) = √(62500 + 250000) ≈ 559.02 N", isCorrect: true },
                { text: "T = W + F = 500 + 250 = 750.00 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! بما أن القوتين F و W متعامدتان، فإن الشد T يمثل الوتر للاتجاهين المتعامدين: T = √(250² + 500²) ≈ 559.02 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) الشد T ≈ 559.02 N، وزاوية الميل θ ≈ 26.57°  ✅ (الإجابة الصحيحة)",
        "ب) الشد T = 750.00 N، وزاوية الميل θ = 30.00°",
        "ج) الشد T ≈ 447.21 N، وزاوية الميل θ ≈ 63.43°",
        "د) الشد T ≈ 500.00 N، وزاوية الميل θ ≈ 45.00°",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. معادلات الاتزان للكرة المعلقة:",
        "   - الاتزان أفقياً: T × sin(θ) = F = 250 N",
        "   - الاتزان رأسياً: T × cos(θ) = W = 500 N",
        "",
        "2. إيجاد قياس الزاوية (θ):",
        "   بقسمة المعادلة الأفيلية على المعادلة الرأسية:",
        "   (T sin θ) / (T cos θ) = 250 / 500",
        "   tan(θ) = 0.5",
        "   θ = tan⁻¹(0.5) ≈ 26.565° ≈ 26.57°  ✅",
        "",
        "3. إيجاد الشد في السلسلة (T):",
        "   يمكن إيجاده إما بـ: T = 500 / cos(26.565°) ≈ 559.02 N",
        "   أو باستخدام نظرية فيثاغورس للقوتين المتعامدتين:",
        "   T = √(F² + W²)",
        "   T = √(250² + 500²)",
        "   T = √(62500 + 250000) = √312500 ≈ 559.02 N  ✅",
        "",
        "الإجابة الصحيحة: أ) الشد T ≈ 559.02 N، وزاوية الميل θ ≈ 26.57° ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) الشد T ≈ 559.02 N، وزاوية الميل θ ≈ 26.57° ✅"
},
{
    id: 10,
    title: "س 10 (تمارين الكتاب 1-B): اتزان صورة معلقة بواسطة سلكين بزوايا مختلفة مع الأفقي",
    text: "اتزنت صورة كتلتهـا (12 kg) بواسطة سلكين يميل الأول بزاوية (20°) والثاني بزاوية (70°) مع الأفقي[cite: 9]. أوجد الشد في كل سلك (باعتبار g = 10 m/s²)[cite: 9].",
    hint: "تخضع الصورة للاتزان تحت تأثير ثلاث قوى: قوة الوزن لأسفل (W = 120 N) والشد في السلك الأول (T₁) المائل بزاوية 20° مع الأفقي والشد في السلك الثاني (T₂) المائل بزاوية 70° مع الأفقي. طبّق شرطي الاتزان الأفقي (ΣF_x = 0) والرأسي (ΣF_y = 0)، أو لاحظ أن السلكين متعامدان لأن (20° + 70° = 90°).",
    solution: "خطوة 1: الاتزان الأفقي ⇐ T₁ cos(20°) = T₂ cos(70°) ⇐ T₂ = T₁ × (cos 20° / cos 70°) ≈ 2.747 T₁. <br> خطوة 2: التعويض في الاتزان الرأسي ⇐ T₁ sin(20°) + T₂ sin(70°) = 120 ⇐ T₁(0.342) + (2.747 T₁)(0.940) = 120 ⇐ 2.924 T₁ = 120 ⇐ T₁ ≈ 41.04 N. <br> خطوة 3: حساب T₂ ⇐ T₂ = 120 × sin(70°) ≈ 112.76 N (أو T₂ = 2.747 × 41.04 ≈ 112.74 N).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='50' x2='450' y2='50' stroke='#64748b' stroke-width='4'/><line x1='250' y1='50' x2='250' y2='170' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4'/><line x1='100' y1='50' x2='250' y2='170' stroke='#2563eb' stroke-width='3'/><path d='M 130 50 A 30 30 0 0 0 120 62' fill='none' stroke='#dc2626' stroke-width='2'/><text x='140' y='70' class='label' font-size='12' fill='#dc2626'>20°</text><line x1='350' y1='50' x2='250' y2='170' stroke='#16a34a' stroke-width='3'/><path d='M 320 50 A 30 30 0 0 0 330 78' fill='none' stroke='#dc2626' stroke-width='2'/><text x='315' y='80' class='label' font-size='12' fill='#dc2626'>70°</text><rect x='210' y='170' width='80' height='50' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='200' class='label' font-size='12' fill='#0f172a'>12 kg</text><line x1='250' y1='220' x2='250' y2='255' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='250' y='270' class='label' font-size='12' fill='#dc2626'>W = 120 N</text><text x='160' y='120' class='label' font-size='12' fill='#2563eb'>T₁ ≈ 41.04 N</text><text x='330' y='120' class='label' font-size='12' fill='#16a34a'>T₂ ≈ 112.76 N</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>T₁ ≈ 41.04 N | T₂ ≈ 112.76 N ✅</text></svg>",
    options: [
        { text: "أ) الشد في السلك الأول T₁ ≈ 41.04 N، والشد في السلك الثاني T₂ ≈ 112.76 N", isCorrect: true },
        { text: "ب) الشد في السلك الأول T₁ ≈ 60.00 N، والشد في السلك الثاني T₂ ≈ 60.00 N", isCorrect: false },
        { text: "ج) الشد في السلك الأول T₁ ≈ 112.76 N، والشد في السلك الثاني T₂ ≈ 41.04 N", isCorrect: false },
        { text: "د) الشد في السلك الأول T₁ ≈ 43.68 N، والشد في السلك الثاني T₂ ≈ 120.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحليل القوى بالاتجاه الأفقي والتعبير عن الشد T₂ بدلالة T₁",
            question: "ما هي العلاقة بين T₁ و T₂ الناتجة عن شرط الاتزان الأفقي؟",
            options: [
                { text: "T₁ cos(20°) = T₂ cos(70°)  ⇐  T₂ = T₁ × (cos 20° / cos 70°) ≈ 2.747 T₁", isCorrect: true },
                { text: "T₁ sin(20°) = T₂ sin(70°)  ⇐  T₂ = T₁ × (sin 20° / sin 70°) ≈ 0.364 T₁", isCorrect: false }
            ],
            feedback: "✅ صحيح! مرّكبة الشد الأولى جهة اليسار T₁ cos(20°) تتزن مع مركبة الشد الثانية جهة اليمين T₂ cos(70°). قسمة cos(20°)/cos(70°) = 0.9397 / 0.3420 ≈ 2.747."
        },
        {
            title: "الخطوة 2: التعويض في معادلة الاتزان الرأسي لحساب T₁ و T₂",
            question: "كيف نحسب T₁ و T₂ باستخدام معادلة مجموع القوى الرأسية (ΣF_y = W = 120 N)؟",
            options: [
                { text: "T₁ sin(20°) + T₂ sin(70°) = 120  ⇐  T₁(0.342 + 2.747 × 0.940) = 120  ⇐  T₁ ≈ 41.04 N، T₂ ≈ 112.76 N", isCorrect: true },
                { text: "T₁ cos(20°) + T₂ cos(70°) = 120  ⇐  T₁ ≈ 60 N، T₂ ≈ 60 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! المركبتان الرأسيتان للشد للعلَى تتوازنان مع الوزن لأسفل (120 N). بالتعويض عن T₂: T₁(0.3420 + 2.5818) = 120 ⇐ 2.9238 T₁ = 120 ⇐ T₁ ≈ 41.04 N، ومنها T₂ = 2.747 × 41.04 ≈ 112.76 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) الشد الأول T₁ ≈ 41.04 N، والشد الثاني T₂ ≈ 112.76 N  ✅ (الإجابة الصحيحة)",
        "ب) الشد الأول T₁ ≈ 60.00 N، والشد الثاني T₂ ≈ 60.00 N",
        "ج) الشد الأول T₁ ≈ 112.76 N، والشد الثاني T₂ ≈ 41.04 N",
        "د) الشد الأول T₁ ≈ 43.68 N، والشد الثاني T₂ ≈ 120.00 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب الوزن الإجمالي للصورة:",
        "   W = m × g = 12 × 10 = 120 N",
        "",
        "2. معادلة الاتزان الأفقي (ΣF_x = 0):",
        "   T₁ × cos(20°) = T₂ × cos(70°)",
        "   T₂ = T₁ × (cos(20°) / cos(70°))",
        "   T₂ = T₁ × (0.93969 / 0.34202) ≈ 2.7474 × T₁",
        "",
        "3. معادلة الاتزان الرأسي (ΣF_y = 0):",
        "   T₁ × sin(20°) + T₂ × sin(70°) = 120",
        "   T₁ × (0.34202) + (2.7474 × T₁) × (0.93969) = 120",
        "   T₁ × (0.34202 + 2.58170) = 120",
        "   2.92372 × T₁ = 120",
        "   T₁ = 120 / 2.92372 ≈ 41.04 N  ✅",
        "",
        "4. إيجاد الشد في السلك الثاني T₂:",
        "   T₂ = 2.7474 × 41.043 ≈ 112.76 N  ✅",
        "   (ملاحظة: بما أن السلكين متعامدان 20° + 70° = 90°، يمكن أيضاً استخدام T₁ = W sin 20° = 120 sin 20° ≈ 41.04 N و T₂ = W sin 70° = 120 sin 70° ≈ 112.76 N)",
        "",
        "الإجابة الصحيحة: أ) الشد في السلك الأول T₁ ≈ 41.04 N، والشد في السلك الثاني T₂ ≈ 112.76 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) الشد في السلك الأول T₁ ≈ 41.04 N، والشد في السلك الثاني T₂ ≈ 112.76 N ✅"
},
{
    id: 11,
    title: "س 11 (تمارين الكتاب 1-B): حركة صندوق على مستوى مائل بعجلة ثابتة لحساب القيمة المجهولة X وقوة الاتصال العمودية",
    text: "يُجر صندوق كتلته (12 kg) بعجلة ثابتة مقدارها (1.75 m/s²) إلى أعلى مسار يميل بزاوية (30°) مع الأفقي. فإذا كانت قوة الجر (2X N) تصنع زاوية (10°) مع المسار وقوة الاحتكاك (X N) كما هو موضح في الشكل المقابل[cite: 9]، احسب قيمة (X) وقوة الاتصال العمودية المؤثرة على الصندوق (باعتبار g = 10 m/s²)[cite: 9].",
    hint: "تخضع الحركة لقانون نيوتن الثاني في اتجاه المسار: ΣF = m × a. القوة المحركة لأعلى المسار هي المركبة الموازية لقوة الجر (2X cos 10°)، وتعاكسها قوة الاحتكاك (X) ومركبة الوزن (mg sin 30° = 120 sin 30° = 60 N). بعد إيجاد قيمة X، احسب قوة الاتصال العمودية بالتعامد على المسار: R + 2X sin(10°) = mg cos(30°).",
    solution: "خطوة 1: تطبيق قانون نيوتن الثاني موازاةً للمسار لإيجاد X ⇐ 2X cos(10°) - X - 120 sin(30°) = 12 × 1.75 ⇐ 2X(0.9848) - X - 60 = 21 ⇐ 1.9696X - X = 81 ⇐ 0.9696X = 81 ⇐ X ≈ 83.54 N. <br> خطوة 2: حساب قوة الاتصال العمودية R ⇐ R = 120 cos(30°) - 2X sin(10°) ⇐ R = 103.92 - 2(83.54)(0.1736) ≈ 103.92 - 29.01 ≈ 74.91 N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 85 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 120 230 A 70 70 0 0 0 105 200' fill='none' stroke='#dc2626' stroke-width='2'/><text x='130' y='220' class='label' font-size='13' fill='#dc2626'>30°</text><g transform='translate(230,160) rotate(-30)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>12 kg</text></g><line x1='245' y1='145' x2='335' y2='95' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='355' y='90' class='label' font-size='12' fill='#2563eb'>2X N (بزاوية 10°)</text><line x1='215' y1='160' x2='145' y2='200' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='130' y='220' class='label' font-size='12' fill='#dc2626'>X N + mg sin(30°)</text><line x1='230' y1='145' x2='195' y2='60' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='190' y='45' class='label' font-size='12' fill='#16a34a'>الاتصال العمودي R</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>X ≈ 83.54 N | R ≈ 74.91 N ✅</text></svg>",
    options: [
        { text: "أ) قيمة X ≈ 83.54 N، وقوة الاتصال العمودية R ≈ 74.91 N", isCorrect: true },
        { text: "ب) قيمة X ≈ 41.77 N، وقوة الاتصال العمودية R ≈ 103.92 N", isCorrect: false },
        { text: "ج) قيمة X ≈ 81.00 N، وقوة الاتصال العمودية R ≈ 60.00 N", isCorrect: false },
        { text: "د) قيمة X ≈ 96.96 N، وقوة الاتصال العمودية R ≈ 83.54 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تطبيق قانون نيوتن الثاني موازاةً للمسار لحساب القيمة المجهولة (X)",
            question: "ما المعادلة الموازية للمسار المائل والتي تربط بين القوى والعجلة a = 1.75 m/s²؟",
            options: [
                { text: "2X cos(10°) - X - mg sin(30°) = m × a  ⇐  2X(0.9848) - X - 60 = 12 × 1.75", isCorrect: true },
                { text: "2X sin(10°) - X - mg cos(30°) = m × a  ⇐  2X(0.1736) - X - 103.92 = 21", isCorrect: false }
            ],
            feedback: "✅ صحيح! القوة المسببة للحركة لأعلى المسار هي المركبة الموازية لقوة الجر 2X cos(10°)، وتعاكسها قوة الاحتكاك X ومركبة الوزن mg sin(30°). التعويض: 1.9696X - X = 60 + 21 ⇐ 0.9696X = 81 ⇐ X ≈ 83.54 N."
        },
        {
            title: "الخطوة 2: حساب قوة الاتصال العمودية (R) بالتعامد على المسار",
            question: "كيف نحسب قوة الاتصال العمودية R بوجود مركبة رأسية لقوة الجر تسحب لأعلى؟",
            options: [
                { text: "R + 2X sin(10°) = mg cos(30°)  ⇐  R = 120 cos(30°) - 2(83.54) sin(10°) ≈ 74.91 N", isCorrect: true },
                { text: "R = mg cos(30°) + 2X sin(10°)  ⇐  R = 103.92 + 29.01 = 132.93 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! القوة المائلة 2X تسحب الصندوق للأعلى عمودياً بمركبتها (2X sin 10°)، مما يقلل قوة ضغط الصندوق على المسار. R = 120 × 0.8660 - 2 × 83.54 × 0.1736 ≈ 103.92 - 29.01 ≈ 74.91 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) قيمة X ≈ 83.54 N، وقوة الاتصال العمودية R ≈ 74.91 N  ✅ (الإجابة الصحيحة)",
        "ب) قيمة X ≈ 41.77 N، وقوة الاتصال العمودية R ≈ 103.92 N",
        "ج) قيمة X ≈ 81.00 N، وقوة الاتصال العمودية R ≈ 60.00 N",
        "د) قيمة X ≈ 96.96 N، وقوة الاتصال العمودية R ≈ 83.54 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب قوة التسارع الإجمالية ومركبة الوزن الموازية:",
        "   - F_net = m × a = 12 × 1.75 = 21 N",
        "   - W_parallel = m × g × sin(30°) = 12 × 10 × 0.5 = 60 N",
        "",
        "2. تطبيق قانون نيوتن الثاني باتجاه المسار (لأعلى المستوى):",
        "   ΣF_parallel = m × a",
        "   F_pull cos(10°) - f - W_parallel = F_net",
        "   2X × cos(10°) - X - 60 = 21",
        "   2X × (0.98481) - X = 21 + 60",
        "   1.96962 X - X = 81",
        "   0.96962 X = 81",
        "   X = 81 / 0.96962 ≈ 83.54 N  ✅",
        "",
        "3. حساب قوة الاتصال العمودية (R) بالتعامد على المسار:",
        "   ΣF_perpendicular = 0",
        "   R + F_pull sin(10°) - m × g × cos(30°) = 0",
        "   R = 120 × cos(30°) - 2X × sin(10°)",
        "   R = (120 × 0.86603) - 2(83.538) × (0.17365)",
        "   R = 103.923 - 29.013 ≈ 74.91 N  ✅",
        "",
        "الإجابة الصحيحة: أ) قيمة X ≈ 83.54 N، وقوة الاتصال العمودية R ≈ 74.91 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) قيمة X ≈ 83.54 N، وقوة الاتصال العمودية R ≈ 74.91 N ✅"
},
{
    id: 12,
    title: "س 12 (تمارين الكتاب 1-B): حركة لوح خشبي على مستوى مائل بزوايا مختلفة للحبل وإثبات حد أدنى للشد",
    text: "يُجر لوح خشبي كتلته (20 kg) بواسطة حبل إلى أعلى مستوى يميل بزاوية (15°) مع الأفقي، فإذا كان الحبل يصنع زاوية قدرها (30°) مع الأفقي كما هو موضح في الشكل المقابل[cite: 10].\nوضّح لماذا يجب أن تكون قيمة الشد في الحبل أكثر من (53.6 N)[cite: 10]، فإذا كان الشد في الحبل (65 N) وتتحرك اللوح بسرعة ثابتة احسب:[cite: 10]\nأ) مقدار قوة الاتصال العمودية المؤثرة على اللوح بواسطة الأرض.[cite: 10]\nب) مقدار قوة الاحتكاك.[cite: 10]",
    hint: "لاحظ أن زاوية الحبل مع المستـوى المائل هي (30° - 15° = 15°). لبداية أو استمرار الحركة لأعلى المسار يجب أن تتغلب المركبة الموازية للشد على مركبة الوزن لأسفل (T cos 15° > mg sin 15° = 200 sin 15° ≈ 51.76 N ⇐ T > 53.6 N). ثم طبق شرطي الاتزان للحركة بسرعة ثابتة (a = 0) عند T = 65 N.",
    solution: "التوضيح: المركبة الموازية للوزن لأسفل المستوى هي mg sin(15°) = 200 sin(15°) ≈ 51.76 N. لكي يتحرك اللوح لأعلى يلزم أن تكون T cos(15°) > 51.76 N ⇐ T > 51.76 / cos(15°) ≈ 53.6 N.<br>أ) قوة الاتصال العمودية R ⇐ R + T sin(15°) = mg cos(15°) ⇐ R = 200 cos(15°) - 65 sin(15°) ≈ 193.19 - 16.82 = 176.37 N.<br>ب) قوة الاحتكاك f ⇐ f + mg sin(15°) = T cos(15°) ⇐ f = 65 cos(15°) - 200 sin(15°) ≈ 62.79 - 51.76 = 11.03 N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='230' x2='450' y2='230' stroke='#64748b' stroke-width='3'/><path d='M 50 230 L 420 130 L 420 230 Z' fill='#f1f5f9' stroke='#475569' stroke-width='2'/><path d='M 110 230 A 60 60 0 0 0 103 216' fill='none' stroke='#dc2626' stroke-width='2'/><text x='125' y='220' class='label' font-size='13' fill='#dc2626'>15°</text><g transform='translate(230,181) rotate(-15)'><rect x='-25' y='-30' width='50' height='30' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='0' y='-10' class='label' font-size='11' fill='#0f172a'>20 kg</text></g><line x1='245' y1='165' x2='335' y2='115' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='355' y='105' class='label' font-size='12' fill='#2563eb'>T = 65 N (30° مع الأفقي)</text><line x1='215' y1='173' x2='145' y2='192' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='130' y='212' class='label' font-size='11' fill='#dc2626'>f + mg sin(15°)</text><line x1='230' y1='166' x2='195' y2='75' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='190' y='60' class='label' font-size='12' fill='#16a34a'>الاتصال العمودي R</text><rect x='40' y='245' width='420' height='25' fill='none'/><text x='250' y='260' class='label' font-size='13' fill='#16a34a'>T > 53.6 N | R ≈ 176.37 N | f ≈ 11.03 N ✅</text></svg>",
    options: [
        { text: "أ) T > 53.6 N للتغلب على مركبة الوزن، R ≈ 176.37 N، و f ≈ 11.03 N", isCorrect: true },
        { text: "ب) T > 50.0 N، قوة الاتصال R ≈ 193.19 N، وقوة الاحتكاك f ≈ 51.76 N", isCorrect: false },
        { text: "ج) T > 53.6 N، قوة الاتصال R ≈ 200.00 N، وقوة الاحتكاك f ≈ 65.00 N", isCorrect: false },
        { text: "د) T > 65.0 N، قوة الاتصال R ≈ 176.37 N، وقوة الاحتكاك f ≈ 51.76 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: توضيح شرط الحد الأدنى للشد (T > 53.6 N)",
            question: "لماذا يجب أن تتجاوز قيمة الشد في الحبل 53.6 N لكي يمكن تحريك اللوح لأعلى؟",
            options: [
                { text: "لأن مرّكبة الوزن لأسفل المستوى هي mg sin(15°) ≈ 51.76 N، والمركبة الساحبة للحبل هي T cos(15°)، فللاتزان T cos(15°) = 51.76 N ⇐ T ≈ 53.6 N", isCorrect: true },
                { text: "لأن الوزن الكلي 200 N مقسوماً على sin(30°) يساوي 53.6 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! زاوية الحبل مع المستوى المائل هي θ = 30° - 15° = 15°. لكي يتحرك اللوح لأعلى حتى بدون احتكاك، يجب أن تتغلب المركبة الموازية للشد على مركبة الوزن: T cos(15°) > 200 sin(15°) ⇐ T > 51.76 / 0.9659 ≈ 53.6 N."
        },
        {
            title: "الخطوة 2: حساب قوة الاتصال العمودية (R) وقوة الاحتكاك (f) عند T = 65 N",
            question: "كيف نحسب R و f للحركة بسرعة ثابتة عند شد مقدارها 65 N؟",
            options: [
                { text: "R = 200 cos(15°) - 65 sin(15°) ≈ 176.37 N  |  f = 65 cos(15°) - 200 sin(15°) ≈ 11.03 N", isCorrect: true },
                { text: "R = 200 cos(15°) + 65 sin(15°) ≈ 210.01 N  |  f = 65 cos(15°) + 200 sin(15°) ≈ 114.55 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! بالتعامد: R = 200 × 0.9659 - 65 × 0.2588 = 193.19 - 16.82 = 176.37 N. بالموازاة: f = 65 × 0.9659 - 200 × 0.2588 = 62.79 - 51.76 = 11.03 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) T > 53.6 N للتغلب على الوزن، R ≈ 176.37 N، و f ≈ 11.03 N  ✅ (الإجابة الصحيحة)",
        "ب) T > 50.0 N، قوة الاتصال R ≈ 193.19 N، وقوة الاحتكاك f ≈ 51.76 N",
        "ج) T > 53.6 N، قوة الاتصال R ≈ 200.00 N، وقوة الاحتكاك f ≈ 65.00 N",
        "د) T > 65.0 N، قوة الاتصال R ≈ 176.37 N، وقوة الاحتكاك f ≈ 51.76 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. توضيح لماذا يجب أن يكون الشد أكثر من 53.6 N:",
        "   زاوية ميل المستوى المائل = 15°",
        "   زاوية ميل الحبل مع المستوى المائل = 30° - 15° = 15°",
        "   مركبة الوزن الموازية لأسفل المستوى = m × g × sin(15°) = 20 × 10 × sin(15°) ≈ 51.76 N",
        "   مركبة الشد الموازية لأعلى المستوى = T × cos(15°)",
        "   لبدء الحركة لأعلى المسار يجب أن يكون: T × cos(15°) > 51.76 N",
        "   T > 51.763 / cos(15°) = 51.763 / 0.96593 ≈ 53.59 N ≈ 53.6 N  ✅",
        "",
        "2. عند T = 65 N والحركة بسرعة ثابتة (a = 0):",
        "   أ) حساب قوة الاتصال العمودية (R):",
        "      ΣF_perpendicular = 0",
        "      R + T × sin(15°) - mg × cos(15°) = 0",
        "      R = (200 × cos(15°)) - (65 × sin(15°))",
        "      R = (200 × 0.96593) - (65 × 0.25882)",
        "      R = 193.185 - 16.823 ≈ 176.36 N ≈ 176.37 N  ✅",
        "",
        "   ب) حساب مقدار قوة الاحتكاك (f):",
        "      ΣF_parallel = 0",
        "      T × cos(15°) - f - mg × sin(15°) = 0",
        "      f = (65 × cos(15°)) - (200 × sin(15°))",
        "      f = (65 × 0.96593) - (200 × 0.25882)",
        "      f = 62.785 - 51.764 ≈ 11.02 N ≈ 11.03 N  ✅",
        "",
        "الإجابة الصحيحة: أ) T > 53.6 N، R ≈ 176.37 N، و f ≈ 11.03 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) التوضيح: الشد اللوجستي T > 53.6 N | أ) R ≈ 176.37 N | ب) f ≈ 11.03 N ✅"
}
]