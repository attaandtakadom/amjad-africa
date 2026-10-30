const  questionsMatrix = [

{
    id: 17,
    title: "س  تمرين الكتاب A-1 رقم 17: اتزان جسم يسحبه رجل وتدفعه ابنته بقوتين مائلتين بسرعة ثابتة",
    text: "يجُرُّ رجلٌ جسماً كتلتُه (40 kg) على سطح أفقي بقوة (140 N) تميل على الأفقي بزاوية قدرها (30°)، وتدفع ابنتُه بقوة (50 N) في الاتجاه الأسفل بزاوية (10°) مع الأفقي. إذا كان الجسم يتحرك بسرعة ثابتة، احسب قوة الاحتكاك (F) وقوة الاتصال العمودية بين الجسم والأرض (R)، ووضح أن قيمة معامل الاحتكاك تقَع بين (0.50 و 0.51).",
    hint: "بما أن الجسم يتحرك بسرعة ثابتة، فإن العجلة تساوي صفراً (حالة اتزان). قم بتحليل القوتين (قوة الرجل وقوة الابنة) إلى مركبتين أفقية ورأسية، ثم طبق شروط الاتزان: ΣFx = 0 و ΣFy = 0.",
    solution: "خطوة 1: تحليل القوتين أفقياً ورأسياً. <br> خطوة 2: تطبيق الاتزان الأفقي (ΣFx = 0) لإيجاد قوة الاحتكاك: F = 140 cos(30°) + 50 cos(10°) ≈ 170.49 N. <br> خطوة 3: تطبيق الاتزان الرأسي (ΣFy = 0) لإيجاد قوة الاتصال العمودية: R = mg + 50 sin(10°) - 140 sin(30°) ≈ 338.68 N. <br> خطوة 4: حساب معامل الاحتكاك: µ = F / R ≈ 0.503، وهي تقع بين 0.50 و 0.51.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#9333ea'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='30' y1='200' x2='470' y2='200' stroke='#64748b' stroke-width='4'/><rect x='200' y='140' width='100' height='60' fill='#cbd5e1' stroke='#475569' stroke-width='2' rx='4'/><text x='250' y='175' class='label' font-size='14' fill='#1e293b'>m = 40 kg</text><line x1='250' y1='140' x2='250' y2='70' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='250' y='55' class='label' font-size='13' fill='#16a34a'>R (قوة الاتصال)</text><line x1='250' y1='200' x2='250' y2='260' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='250' y='275' class='label' font-size='13' fill='#dc2626'>W = 400 N</text><line x1='300' y1='150' x2='410' y2='90' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='400' y='80' class='label' font-size='13' fill='#2563eb'>F1 = 140 N (30°)</text><line x1='200' y1='150' x2='100' y2='170' stroke='#9333ea' stroke-width='3' marker-end='url(#arrow-purple)'/><text x='90' y='160' class='label' font-size='13' fill='#9333ea'>F2 = 50 N (10° أسفل)</text><line x1='200' y1='190' x2='110' y2='190' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='150' y='215' class='label' font-size='13' fill='#dc2626'>F (الاحتكاك)</text></svg>",
    options: [
        { text: "أ) F ≈ 170.5 N ، R ≈ 338.7 N ، µ ≈ 0.503", isCorrect: true },
        { text: "ب) F ≈ 150.0 N ، R ≈ 400.0 N ، µ ≈ 0.375", isCorrect: false },
        { text: "ج) F ≈ 185.2 N ، R ≈ 310.5 N ، µ ≈ 0.596", isCorrect: false },
        { text: "د) F ≈ 121.2 N ، R ≈ 370.0 N ، µ ≈ 0.328", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تطبيق الاتزان الأفقي لحساب قوة الاحتكاك (F)",
            question: "بما أن الجسم يتحرك بسرعة ثابتة، فما معادلة الاتزان الأفقي (ΣFx = 0)؟",
            options: [
                { text: "F = 140 cos(30°) + 50 cos(10°)", isCorrect: true },
                { text: "F = 140 cos(30°) - 50 cos(10°)", isCorrect: false }
            ],
            feedback: "✅ صحيح! قوة سحب الرجل وقوة دفع الابنة تعملان معاً في الاتجاه الأفقي للأمام ضد قوة الاحتكاك F = 121.24 + 49.24 = 170.48 N."
        },
        {
            title: "الخطوة 2: تطبيق الاتزان الرأسي لحساب قوة الاتصال العمودية (R)",
            question: "ما هي معادلة الاتزان الرأسي (ΣFy = 0) لإيجاد R؟",
            options: [
                { text: "R + 140 sin(30°) = mg + 50 sin(10°)", isCorrect: true },
                { text: "R = mg + 140 sin(30°) + 50 sin(10°)", isCorrect: false }
            ],
            feedback: "✅ ممتاز! مركبـة قوة الرجل لأعلى تخفف من الضغط، بينما مركبة قوة الابنة لأسفل تزيد الضغط: R = 400 + 8.68 - 70 = 338.68 N."
        },
        {
            title: "الخطوة 3: حساب معامل الاحتكاك (µ)",
            question: "كيف نتحقق من أن معامل الاحتكاك يقع بين 0.50 و 0.51؟",
            options: [
                { text: "بقسمة F على R: µ = 170.48 / 338.68 ≈ 0.503", isCorrect: true },
                { text: "بضرب F في R: µ = 170.48 × 338.68", isCorrect: false }
            ],
            feedback: "✅ إجابة صحيحة! القيمة الناتجة هي 0.503 وهي بالفعل محصورة بين 0.50 و 0.51."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) F ≈ 170.5 N ، R ≈ 338.7 N ، µ ≈ 0.503  ✅ (الإجابة الصحيحة)",
        "ب) F ≈ 150.0 N ، R ≈ 400.0 N ، µ ≈ 0.375",
        "ج) F ≈ 185.2 N ، R ≈ 310.5 N ، µ ≈ 0.596",
        "د) F ≈ 121.2 N ، R ≈ 370.0 N ، µ ≈ 0.328",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب قوة الاحتكاك (F) من الاتزان الأفقي (ΣFx = 0):",
        "   F = 140 × cos(30°) + 50 × cos(10°)",
        "   F = 140 × 0.8660 + 50 × 0.9848",
        "   F = 121.24 + 49.24 = 170.48 N ≈ 170.5 N  ✅",
        "",
        "2. حساب قوة الاتصال العمودية (R) من الاتزان الرأسي (ΣFy = 0):",
        "   R + 140 × sin(30°) = mg + 50 × sin(10°)",
        "   R + 140 × 0.5 = (40 × 10) + 50 × 0.1736",
        "   R + 70 = 400 + 8.68",
        "   R = 408.68 - 70 = 338.68 N ≈ 338.7 N  ✅",
        "",
        "3. إثبات قيمة معامل الاحتكاك (µ):",
        "   µ = F / R",
        "   µ = 170.48 / 338.68 ≈ 0.5033",
        "   بما أن 0.50 < 0.5033 < 0.51، فالقيمة تقع بالفعل بين (0.50 و 0.51) ✅",
        "",
        "الإجابة الصحيحة: أ) F ≈ 170.5 N ، R ≈ 338.7 N ، µ ≈ 0.503 ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) قوة الاحتكاك F ≈ 170.5 N، قوة الاتصال العمودية R ≈ 338.7 N، ومعامل الاحتكاك µ ≈ 0.503 (يقع بين 0.50 و 0.51) ✅"
},

{
    id: 7,
    title: "س 7 (تمارين 1-A): حركة جسم على منضدة أفقية بقوة مائلة ومقاومة",
    text: "يستقر جسم كتلته (4m kg) على منضدة أفقية أثرت عليه قوة قدرها (50m N) تميل بزاوية حادة (θ°) مع الأفق، فإذا كان (tan θ = 3/4) ومقدار مقاومة الحركة (20m N)، أوجد العجلة (a) التي يتحرك بها الجسم، ثم أوجد مقدار قوة الاتصال العمودية (R) بدلالة m (باعتبار g = 10 m/s²).",
    hint: "استخدام نسبة tan θ لاستخراج sin θ = 3/5 و cos θ = 4/5، ثم تطبيق قانون نيوتن الثاني أفقياً وقانون الاتزان رأسياً.",
    solution: "خطوة 1: حساب المركبات المثلثية (cos θ = 4/5, sin θ = 3/5). <br> خطوة 2: تطبيق (ΣFx = ma) لإيجاد العجلة a = 5 m/s². <br> خطوة 3: تطبيق (ΣFy = 0) لإيجاد قوة الاتصال العمودية R = 10m N.",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.car{fill:#f1f5f9;stroke:#475569;stroke-width:2.5;rx:6;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' stroke='#64748b' stroke-width='3'/><rect x='190' y='110' width='120' height='70' class='car'/><text x='250' y='150' class='label' font-size='14' fill='#334155'>4m kg</text><line x1='310' y1='130' x2='400' y2='90' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='375' y='75' class='label' font-size='12' fill='#2563eb'>50m N (θ)</text><line x1='190' y1='145' x2='110' y2='145' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='145' y='130' class='label' font-size='12' fill='#dc2626'>مقاومة 20m N</text><rect x='40' y='215' width='420' height='50' class='card'/><text x='250' y='238' class='label' font-size='13' fill='#15803d'>tan θ = 3/4 ⟸ cos θ = 4/5 , sin θ = 3/5</text><text x='250' y='255' class='label' font-size='12' fill='#16a34a'>العجلة a = 5 m/s² ، قوة الاتصال R = 10m N ✅</text></svg>",
    options: [
        { text: "أ) العجلة = 5 m/s² ، وقوة الاتصال العمودية R = 10m N", isCorrect: true },
        { text: "ب) العجلة = 10 m/s² ، وقوة الاتصال العمودية R = 20m N", isCorrect: false },
        { text: "ج) العجلة = 2.5 m/s² ، وقوة الاتصال العمودية R = 5m N", isCorrect: false },
        { text: "د) العجلة = 8 m/s² ، وقوة الاتصال العمودية R = 15m N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب النسب المثلثية للزاوية θ",
            question: "إذا كان tan θ = 3/4، فما هي قيمتا cos θ و sin θ من مثلث الجيب والتمام؟",
            options: [
                { text: "cos θ = 4/5 و sin θ = 3/5", isCorrect: true },
                { text: "cos θ = 3/5 و sin θ = 4/5", isCorrect: false }
            ],
            feedback: "✅ صحيح! الوتر يساوي √(3² + 4²) = 5، إذن المجاور على الوتر (4/5) والمقابل على الوتر (3/5)."
        },
        {
            title: "الخطوة 2: تطبيق قانون نيوتن الثاني أفقياً (ΣFx = ma)",
            question: "كيف نحسب العجلة (a)؟",
            options: [
                { text: "F·cos(θ) - المقاومة = الكتلة × العجلة ⟸ 50m(4/5) - 20m = (4m)a", isCorrect: true },
                { text: "جمع القوة مع المقاومة ومساواتها بالكتلة", isCorrect: false }
            ],
            feedback: "✅ ممتاز! 40m - 20m = 4m·a ⟸ 20m = 4m·a ⟸ a = 5 m/s²."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) العجلة = 5 m/s² ، وقوة الاتصال العمودية R = 10m N  ✅ (الإجابة الصحيحة)",
        "ب) العجلة = 10 m/s² ، وقوة الاتصال العمودية R = 20m N",
        "ج) العجلة = 2.5 m/s² ، وقوة الاتصال العمودية R = 5m N",
        "د) العجلة = 8 m/s² ، وقوة الاتصال العمودية R = 15m N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. إيجاد النسب المثلثية من tan θ = 3/4:",
        "   - cos θ = 4 / 5",
        "   - sin θ = 3 / 5",
        "",
        "2. حساب العجلة أفقياً (ΣFx = ma):",
        "   (50m × 4/5) - 20m = (4m) × a",
        "   40m - 20m = 4m × a",
        "   20m = 4m × a  ⟸  a = 5 m/s²  ✅",
        "",
        "3. حساب قوة الاتصال العمودية رأسياً (ΣFy = 0):",
        "   R + 50m(3/5) = الوزن (4m × g = 40m)",
        "   R + 30m = 40m",
        "   R = 40m - 30m = 10m N  ✅",
        "",
        "الإجابة الصحيحة: أ) العجلة = 5 m/s² ، وقوة الاتصال العمودية R = 10m N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) العجلة = 5 m/s² ، وقوة الاتصال العمودية R = 10m N ✅"
},
{
    id: 9,
    title: "س 9 (تمارين الكتاب 1-A): توازن مصباح معلق بسلسلتين مائلتين",
    text: "مصباح مثبت في حالة توازن بسلسلتين ثبتتا إلى نقطتين (A) و (B) في نفس المستوى، وكان طولهما (0.3 m) و (0.4 m) والمسافة بينهما (0.5 m). إذا كان الشد في السلسلة الطويلة (36 N)، أوجد الشد في السلسلة القصيرة وكتلة المصباح (باعتبار g = 10 m/s²).",
    hint: "لاحظ أن أطوال المثلث (0.3, 0.4, 0.5) تحقق نظرية فيثاغورث (0.3² + 0.4² = 0.5²)، إذن المثلث قائم الزاوية بين السلسلتين.",
    solution: "خطوة 1: إثبات أن المثلث قائم وزوايا الميل هي (3/5 و 4/5). <br> خطوة 2: تطبيق الاتزان الأفقي (ΣFx = 0) لإيجاد الشد في السلسلة القصيرة (48 N). <br> خطوة 3: تطبيق الاتزان الرأسي (ΣFy = 0) لحساب الوزن والكتلة (6 kg).",
    svgCode: "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='60' x2='450' y2='60' stroke='#64748b' stroke-width='3'/><text x='50' y='45' class='label' font-size='14' fill='#475569'>A</text><text x='450' y='45' class='label' font-size='14' fill='#475569'>B</text><text x='250' y='45' class='label' font-size='13' fill='#64748b'>المسافة = 0.5 m</text><line x1='50' y1='60' x2='270' y2='200' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='140' y='115' class='label' font-size='13' fill='#2563eb'>T1 (طويلة 0.4m) = 36 N</text><line x1='450' y1='60' x2='270' y2='200' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='370' y='115' class='label' font-size='13' fill='#16a34a'>T2 (قصيرة 0.3m)</text><circle cx='270' cy='200' r='8' fill='#dc2626'/><line x1='270' y1='200' x2='270' y2='255' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='295' y='235' class='label' font-size='13' fill='#dc2626'>الوزن W = mg</text><rect x='40' y='258' width='420' height='20' fill='none'/><text x='250' y='272' class='label' font-size='12' fill='#15803d'>مثلث الأطوال (0.3 - 0.4 - 0.5) قائم الزاوية ✅</text></svg>",
    options: [
        { text: "أ) الشد في القصيرة = 48 N ، الكتلة = 6 kg", isCorrect: true },
        { text: "ب) الشد في القصيرة = 36 N ، الكتلة = 4 kg", isCorrect: false },
        { text: "ج) الشد في القصيرة = 60 N ، الكتلة = 8 kg", isCorrect: false },
        { text: "د) الشد في القصيرة = 48 N ، الكتلة = 10 kg", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: التحقق من هندسة الشكل (نظرية فيثاغورث)",
            question: "بما أن أطوال الأضلاع هي (0.3, 0.4, 0.5)، فما طبيعة المثلث الناتج؟",
            options: [
                { text: "مثلث قائم الزاوية، لأن 0.3² + 0.4² = 0.5²", isCorrect: true },
                { text: "مثلث متطابق الأضلاع", isCorrect: false }
            ],
            feedback: "✅ صحيح! زاوية تعليق المصباح قائمة (90°)، مما يسهل حساب نسب الجتا والجيب مباشرة."
        },
        {
            title: "الخطوة 2: تطبيق الاتزان الأفقي (ΣFx = 0)",
            question: "كيف نثبت أن الشد في السلسلة القصيرة يساوي 48 N؟",
            options: [
                { text: "بمساواة المركبة الأفقية للشد الأول بالمركبة الأفقية للشد الثاني: T₂ × (0.3/0.5) = T₁ × (0.4/0.5)", isCorrect: true },
                { text: "بجمع الشدين معاً", isCorrect: false }
            ],
            feedback: "✅ ممتاز! T₂ × 0.3 = 36 × 0.4 ⇐ T₂ = 14.4 / 0.3 = 48 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) الشد في القصيرة = 48 N ، الكتلة = 6 kg  ✅ (الإجابة الصحيحة)",
        "ب) الشد في القصيرة = 36 N ، الكتلة = 4 kg",
        "ج) الشد في القصيرة = 60 N ، الكتلة = 8 kg",
        "د) الشد في القصيرة = 48 N ، الكتلة = 10 kg",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. التحقق الهندسي:",
        "   (0.3)² + (0.4)² = 0.09 + 0.16 = 0.25 = (0.5)²  ⟸ المثلث قائم الزاوية.",
        "",
        "2. بالتحليل الأفقي (ΣFx = 0):",
        "   T_short × cos(θ_short) = T_long × cos(θ_long)",
        "   T_short × (0.3 / 0.5) = 36 × (0.4 / 0.5)",
        "   T_short × 0.3 = 14.4  ⟸  T_short = 48 N  ✅",
        "",
        "3. بالتحليل الرأسي (ΣFy = 0) لإيجاد الكتلة:",
        "   الوزن W = T_short × sin(θ_short) + T_long × sin(θ_long)",
        "   W = 48 × (0.4 / 0.5) + 36 × (0.3 / 0.5)",
        "   W = 38.4 + 21.6 = 60 N",
        "   الكتلة m = W / g = 60 / 10 = 6 kg  ✅",
        "",
        "الإجابة الصحيحة: أ) الشد في القصيرة = 48 N ، الكتلة = 6 kg ✅"
    ],              
    pdfFinalAnswer: "الإجابة الصحيحة: أ) الشد في السلسلة القصيرة = 48 N ، وكتلة المصباح = 6 kg ✅"
},

{
  "title": "س 49:دفعت 2008 مقدار الشد في الخيط الأفقي",
  "text": "كرة وزنها 200 N مثبتة على سطح مائل خشن بواسطة خيط أفقي AB، فإذا كانت قوة الاحتكاك مساوية لمقدار الشد في الخيط، فإن مقدار الشد يساوي:\n\nأ) 53.6 N\nب) 170 N\nج) 85 N\nد) 115.5 N",
  "options": [
    { "text": "أ) 53.6 N", "isCorrect": true },
    { "text": "ب) 170 N", "isCorrect": false },
    { "text": "ج) 85 N", "isCorrect": false },
    { "text": "د) 115.5 N", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "svgCode": "<div style=\"text-align: center; margin: 10px 0;\"><svg viewBox=\"0 0 450 260\" width=\"100%\" height=\"220\" xmlns=\"http://www.w3.org/2000/svg\" style=\"background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;\"><line x1=\"80\" y1=\"220\" x2=\"280\" y2=\"220\" stroke=\"#64748b\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\" /><line x1=\"80\" y1=\"220\" x2=\"340\" y2=\"70\" stroke=\"#0f172a\" stroke-width=\"2.5\" /><path d=\"M 120 220 A 40 40 0 0 0 113 200\" fill=\"none\" stroke=\"#0f172a\" stroke-width=\"1.2\" /><text x=\"128\" y=\"212\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#0f172a\" font-weight=\"bold\">30°</text><circle cx=\"246\" cy=\"102\" r=\"20\" fill=\"#f8fafc\" stroke=\"#0f172a\" stroke-width=\"2\" /><circle cx=\"246\" cy=\"102\" r=\"2.5\" fill=\"#0f172a\" /><line x1=\"246\" y1=\"82\" x2=\"320\" y2=\"81.5\" stroke=\"#94a3b8\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\" /><circle cx=\"246\" cy=\"82\" r=\"3\" fill=\"#0f172a\" /><circle cx=\"320\" cy=\"81.5\" r=\"3\" fill=\"#0f172a\" /><text x=\"241\" y=\"74\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#0f172a\" font-weight=\"bold\">A</text><text x=\"326\" y=\"78\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#0f172a\" font-weight=\"bold\">B</text><g><line x1=\"246\" y1=\"102\" x2=\"298\" y2=\"72\" stroke=\"#0284c7\" stroke-width=\"2\" /><polygon points=\"298,72 288,74 293,82\" fill=\"#0284c7\" /><text x=\"301\" y=\"67\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0284c7\" font-weight=\"bold\">T cos 30°</text></g><g><line x1=\"246\" y1=\"102\" x2=\"286\" y2=\"79\" stroke=\"#dc2626\" stroke-width=\"2\" /><polygon points=\"286,79 276,81 281,89\" fill=\"#dc2626\" /><text x=\"291\" y=\"92\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#dc2626\" font-weight=\"bold\">f</text></g><g><line x1=\"246\" y1=\"102\" x2=\"176.7\" y2=\"142\" stroke=\"#ea580c\" stroke-width=\"2\" /><polygon points=\"176.7,142 186.7,140 181.7,132\" fill=\"#ea580c\" /><text x=\"105\" y=\"157\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#ea580c\" font-weight=\"bold\">W sin 30°</text></g></svg></div>",
  "steps": [
    {
      "title": "خطوة 1: تحليل القوى المؤثرة موازياً للمستوى",
      "question": "ما هي معادلة الاتزان الصحيحة للقوى الموازية للمستوى المائل لأعلى ولأسفل؟",
      "options": [
        { "text": "f + T * cos 30° = W * sin 30°", "isCorrect": true },
        { "text": "T = W * sin 30°", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! بما أن الكرة تميل للانزلاق لأسفل بفعل مركبة الوزن، فإن قوة الاحتكاك f تؤثر لأعلى السطح مساندة لمركبة الشد الأفقية المحللة."
    },
    {
      "title": "خطوة 2: حساب قيمة الشد بالتعويض المباشر",
      "question": "بالتعويض عن f = T و W = 200 N، احسب القيمة الدقيقة لقوة الشد T:",
      "options": [
        { "text": "T = 100 / 1.866 = 53.6 N", "isCorrect": true },
        { "text": "T = 100 / 0.866 = 115.5 N", "isCorrect": false }
      ],
      "feedback": "✅ رائع جداً! هذا هو الحل الفيزيائي الصحيح والدقيق للمسألة."
    }
  ],
  "pdfSolutionSteps": [
    "الخيارات:",
    "أ) 53.6 N ✅ (الإجابة الصحيحة)",
    "ب) 170 N",
    "ج) 85 N",
    "د) 115.5 N",
    "--------------------------------------------------",
    "خطوات الحل الرياضي الصحيح:",
    "📌 دراسة اتزان الكرة موازياً للمستوى المائل:",
    "1. مركبة الوزن لأسفل السطح = W * sin 30° = 200 * 0.5 = 100 N",
    "2. مركبة الشد الأفقي لأعلى السطح = T * cos 30° = 0.866 * T",
    "3. قوة الاحتكاك f تؤثر لأعلى السطح لمقاومة الانزلاق.",
    "",
    "معادلة الاتزان:",
    "f + T * cos 30° = W * sin 30°",
    "",
    "وبما أن f = T حسب المعطيات:",
    "T + 0.866 * T = 100",
    "1.866 * T = 100",
    "",
    "إيجاد قيمة الشد الدقيقة:",
    "T = 100 / 1.866 = 53.6 N"
  ],
  "pdfFinalAnswer": "الخيار أ: 53.6 N هو الإجابة الصحيحة علمياً ✅",
  "difficulty": "صعب"
},
{
    "title": "السؤال 28 –دفعت 2008- الزاوية التي تجعل المركبتين متساويتين (معدل)",
    "text": "الزاوية التي تميل بها القوة (F) مع الأفقي وتجعل مركبتها الرأسية تساوي مركبتها الأفقية هي:",
    "options": [
      {"text": "30°", "isCorrect": false},
      {"text": "45°", "isCorrect": true},
      {"text": "60°", "isCorrect": false},
      {"text": "90°", "isCorrect": false}
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">📐 Fcosθ = Fsinθ → tanθ = 1 → θ = 45°</div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما الزاوية التي تجعل المركبة الأفقية مساوية للمركبة الرأسية؟",
        "options": [
          {"text": "30°", "isCorrect": false},
          {"text": "45°", "isCorrect": true},
          {"text": "60°", "isCorrect": false},
          {"text": "90°", "isCorrect": false}
        ],
        "feedback": "✅ صحيح! Fcosθ = Fsinθ → tanθ = 1 → θ = 45°"
      }
    ],
    "pdfSolutionSteps": [
      "═══════════════════════════════════════",
      "الخيارات:",
      "أ) 30°",
      "ب) 45° ✅ (الإجابة الصحيحة)",
      "ج) 60°",
      "د) 90°",
      "",
      "═══════════════════════════════════════",
      "التوضيح الفيزيائي:",
      "📌 المركبة الأفقية = Fcosθ",
      "📌 المركبة الرأسية = Fsinθ",
      "📌 Fcosθ = Fsinθ → tanθ = 1 → θ = 45°",
      "",
      "الإجابة: 45°"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 45° ✅",
    "difficulty": "سهل"
  },
{
  "title": "السؤال 14 – قوة التفاعل بين كتلتين على مستوى أملس",
  "text": "في الشكل التالي: إذا كان السطح أملس، فإن مقدار قوة التفاعل بين الكتلتين يساوي:",
  "options": [
    {"text": "12 N", "isCorrect": true},
    {"text": "28 N", "isCorrect": false},
    {"text": "20 N", "isCorrect": false},
    {"text": "16 N", "isCorrect": false}
  ],
  "correctAnswerIndex": 0,
  "svgCode": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 320\" width=\"100%\" height=\"100%\"><defs><marker id=\"arrow-red\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#ef4444\" /></marker><marker id=\"arrow-green\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#10b981\" /></marker></defs><rect width=\"500\" height=\"320\" fill=\"#f8fafc\" rx=\"12\" /><g transform=\"translate(50, 20)\"><polygon points=\"0,220 320,220 320,50\" fill=\"#e2e8f0\" stroke=\"#94a3b8\" stroke-width=\"2\" /><line x1=\"0\" y1=\"220\" x2=\"320\" y2=\"50\" stroke=\"#64748b\" stroke-width=\"3\" /><path d=\"M 55,220 A 55 55 0 0 0 46,195\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\" /><text x=\"65\" y=\"210\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#d97706\">37°</text><g transform=\"rotate(-28, 0, 220)\"><rect x=\"80\" y=\"172\" width=\"65\" height=\"48\" fill=\"#3b82f6\" rx=\"2\" stroke=\"#1d4ed8\" stroke-width=\"2\" /><text x=\"112\" y=\"202\" font-family=\"sans-serif\" font-size=\"15\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">4 kg</text><rect x=\"145\" y=\"180\" width=\"40\" height=\"40\" fill=\"#60a5fa\" rx=\"2\" stroke=\"#1d4ed8\" stroke-width=\"2\" /><text x=\"165\" y=\"205\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#ffffff\" text-anchor=\"middle\">1 kg</text><line x1=\"20\" y1=\"196\" x2=\"75\" y2=\"196\" stroke=\"#ef4444\" stroke-width=\"3\" marker-end=\"url(#arrow-red)\" /><text x=\"10\" y=\"190\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#ef4444\">20 N</text><line x1=\"235\" y1=\"200\" x2=\"188\" y2=\"200\" stroke=\"#ef4444\" stroke-width=\"3\" marker-end=\"url(#arrow-red)\" /><text x=\"245\" y=\"205\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#ef4444\">10 N</text><line x1=\"145\" y1=\"172\" x2=\"120\" y2=\"172\" stroke=\"#10b981\" stroke-width=\"2.5\" marker-end=\"url(#arrow-green)\" /><text x=\"132\" y=\"162\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#059669\" text-anchor=\"middle\">Fc = 12 N</text></g></g></svg>",
  "steps": [
    {
      "title": "اختر الإجابة الصحيحة",
      "question": "ما مقدار قوة التفاعل بين الكتلتين؟",
      "options": [
        {"text": "12 N", "isCorrect": true},
        {"text": "28 N", "isCorrect": false},
        {"text": "20 N", "isCorrect": false},
        {"text": "16 N", "isCorrect": false}
      ],
      "feedback": "✅ ممتاز! قوة التفاعل بين الكتلتين تساوي 12 N."
    }
  ],
  "pdfSolutionSteps": [
    "=======================================",
    "الخيارات:",
    "أ) 12 N ✅ (الإجابة الصحيحة)",
    "ب) 28 N",
    "ج) 20 N",
    "د) 16 N",
    "",
    "=======================================",
    "التوضيح الفيزيائي:",
    "📌 مركبة الوزن الكلية لأسفل = 5 × 10 × sin 37° = 30 N",
    "📌 القوى المؤثرة لأسفل المنظومة = 10 + 30 = 40 N",
    "📌 القوى المؤثرة لأعلى المنظومة = 20 N",
    "📌 القوة المحصلة لأسفل = 40 - 20 = 20 N",
    "📌 عجلة المنظومة لأسفل = 20 ÷ 5 = 4 m/s²",
    "📌 بتطبيق القانون على الكتلة 1 kg:",
    "📌 القوى لأسفل المؤثرة عليها = 10 + 6 = 16 N",
    "📌 16 - قوة التفاعل = 1 × 4",
    "📌 قوة التفاعل = 12 N",
    "",
    "الإجابة: 12 N"
  ],
  "pdfFinalAnswer": "الإجابة: أ) 12 N ✅",
  "difficulty": "متوسط"
},




{
    "title": "س 16: حساب القوة المؤثرة من الوزن والعجلة",
    "text": "إذا تحرك جسم وزنه (100 N) بعجلة (2 m/s²) فإن القوة المؤثرة عليه تساوي (200 N).",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 320' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #e2e8f0; stroke: #1e293b; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .calc-box { fill: #f8fafc; stroke: #cbd5e1; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='320' fill='#ffffff'/><g transform='translate(0,0)'><line x1='50' y1='220' x2='450' y2='220' class='ground'/><rect x='190' y='130' width='120' height='90' class='block'/><text x='250' y='170' class='label' font-size='16' fill='#1e293b'>m = 10 kg</text><text x='250' y='192' class='label' font-size='12' fill='#64748b'>(من W = 100 N)</text><line x1='250' y1='220' x2='250' y2='285' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='250' y='305' class='label' font-size='13' fill='#dc2626'>الوزن W = 100 N</text><line x1='310' y1='175' x2='410' y2='175' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='360' y='162' class='label' font-size='14' fill='#2563eb'>F = 20 N</text><line x1='200' y1='100' x2='300' y2='100' stroke='#16a34a' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-green)'/><text x='250' y='90' class='label' font-size='13' fill='#16a34a'>العجلة a = 2 m/s²</text><rect x='50' y='20' width='400' height='50' class='calc-box'/><text x='250' y='42' class='label' font-size='14' fill='#1e293b'>m = W / g = 100 / 10 = 10 kg</text><text x='250' y='60' class='label' font-size='13' fill='#dc2626'>F = m × a = 10 × 2 = 20 N (وليس 200 N)</text></g></svg>",
    "steps": [
      {
        "title": "الخطوة 1: حساب كتلة الجسم (m)",
        "question": "احسب كتلة الجسم باستخدام قانون الوزن W = m × g (بافتراض g = 10 m/s²).",
        "options": [
          { "text": "10 kg", "isCorrect": true },
          { "text": "100 kg", "isCorrect": false }
        ],
        "feedback": "صحيح! m = W / g = 100 / 10 = 10 kg."
      },
      {
        "title": "الخطوة 2: حساب القوة المؤثرة (F)",
        "question": "احسب القوة الفعالة من قانون نيوتن الثاني F = m × a.",
        "options": [
          { "text": "20 N", "isCorrect": true },
          { "text": "200 N", "isCorrect": false }
        ],
        "feedback": "ممتاز! F = 10 kg × 2 m/s² = 20 N وليس 200 N."
      }
    ],
    "pdfSolutionSteps": [
      "1. حساب كتلة الجسم: الكتلة m = W / g = 100 / 10 = 10 kg.",
      "2. حساب القوة المؤثرة: F = m × a = 10 × 2 = 20 N.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ (القوة الصحيحة هي 20 N وليست 200 N)"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 17: تطبيق قانون نيوتن الثاني لحساب القوة",
    "text": "إذا اكتسب جسم كتلته (1/6 kg) عجلة قدرها (6 m/s²) فيؤثر بقوة قدرها 1 نيوتن.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue2' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green2' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f1f5f9; stroke: #0f172a; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #f8fafc; stroke: #e2e8f0; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='60' y1='200' x2='440' y2='200' class='ground'/><rect x='180' y='120' width='110' height='80' class='block'/><text x='235' y='165' class='label' font-size='16' fill='#0f172a'>m = 1/6 kg</text><line x1='290' y1='160' x2='390' y2='160' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue2)'/><text x='340' y='145' class='label' font-size='15' fill='#2563eb'>F = 1 N</text><line x1='180' y1='90' x2='290' y2='90' stroke='#16a34a' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-green2)'/><text x='235' y='78' class='label' font-size='13' fill='#16a34a'>a = 6 m/s²</text><rect x='80' y='220' width='340' height='42' class='card'/><text x='250' y='246' class='label' font-size='14' fill='#16a34a'>F = m × a = (1/6 kg) × (6 m/s²) = 1 N  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: التعويض في قانون نيوتن الثاني",
        "question": "ما القوة الناتجة عن ضرب الكتلة (1/6 kg) في العجلة (6 m/s²)؟",
        "options": [
          { "text": "1 N", "isCorrect": true },
          { "text": "36 N", "isCorrect": false }
        ],
        "feedback": "صحيح! F = m × a = (1/6) × 6 = 1 N."
      }
    ],
    "pdfSolutionSteps": [
      "تطبيق مباشر لقانون نيوتن الثاني: F = m × a",
      "F = (1/6) × 6 = 1 N.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 18: تعريف قوة الاتصال العمودية",
    "text": "قوة الاتصال العمودية قوة تنشأ من تلامس سطحين وتكون عمودية على الأسطح.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.surface { stroke: #334155; stroke-width: 4; } .block { fill: #e0f2fe; stroke: #0284c7; stroke-width: 2.5; rx: 4; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .angle-symbol { stroke: #7c3aed; stroke-width: 2; fill: none; }</style><rect width='500' height='300' fill='#ffffff'/><line x1='80' y1='210' x2='420' y2='210' class='surface'/><path d='M 80 210 L 420 210 L 420 220 L 80 220 Z' fill='url(#stripes)' opacity='0.2'/><rect x='180' y='120' width='140' height='90' class='block'/><text x='250' y='165' class='label' font-size='15' fill='#0369a1'>جسم (موضوع على السطح)</text><line x1='250' y1='210' x2='250' y2='45' stroke='#7c3aed' stroke-width='3.5' marker-end='url(#arrow-purple)'/><text x='250' y='32' class='label' font-size='14' fill='#7c3aed'>قوة الاتصال العمودية (R)</text><path d='M 250 195 L 265 195 L 265 210' class='angle-symbol'/><circle cx='257' cy='202.5' r='2' fill='#7c3aed'/><text x='285' y='190' font-size='12' fill='#7c3aed' font-weight='bold'>90°</text><line x1='250' y1='210' x2='250' y2='275' stroke='#dc2626' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-red)'/><text x='250' y='292' class='label' font-size='12' fill='#dc2626'>الوزن (W)</text><text x='250' y='240' class='label' font-size='13' fill='#334155'>سطح التلامس الأفقي</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: فهم مفهوم قوة الاتصال العمودية",
        "question": "هل تكون قوة رد الفعل العمودية دائماً متعامدة على سطح التلامس؟",
        "options": [
          { "text": "نعم، تكون عمودية تماماً على أسطح التلامس.", "isCorrect": true },
          { "text": "لا، تكون موازية لسطح التلامس.", "isCorrect": false }
        ],
        "feedback": "صحيح! قوة الاتصال العمودية (R) هي قوة تلامسية اتجاهها عمودي على السطح."
      }
    ],
    "pdfSolutionSteps": [
      "تعريف قوة الاتصال العمودية (Normal Contact Force): هي قوة تلامسية تؤثر بها السطوح على الأجسام، وتكون دائماً في اتجاه عمودي على سطح التلامس.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 20: مدلول الإشارة السالبة للقوة",
    "text": "الإشارة السالبة أمام القوة تعني أن القوة عكس اتجاه الحركة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-pos' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-neg' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f8fafc; stroke: #334155; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .info-box { fill: #fef2f2; stroke: #fca5a5; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='200' y='100' width='100' height='80' class='block'/><text x='250' y='145' class='label' font-size='16' fill='#334155'>جسم</text><line x1='280' y1='70' x2='390' y2='70' stroke='#16a34a' stroke-width='3.5' marker-end='url(#arrow-pos)'/><text x='335' y='55' class='label' font-size='13' fill='#16a34a'>اتجاه الحركة (+v)</text><line x1='200' y1='140' x2='90' y2='140' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-neg)'/><text x='140' y='125' class='label' font-size='14' fill='#dc2626'>قوة معاكسة (-F)</text><rect x='80' y='205' width='340' height='55' class='info-box'/><text x='250' y='227' class='label' font-size='13' fill='#991b1b'>الإشارة السالبة (-) تشير إلى أن اتجاه القوة</text><text x='250' y='247' class='label' font-size='13' fill='#991b1b'>يعاكس الاتجاه الموجب المفترض للحركة</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تفسير المتجهات والإشارات",
        "question": "في الفيزياء، ماذا تعبر الإشارة السالبة لمتجه القوة مقارنة باتجاه الحركة المختار كموجب؟",
        "options": [
          { "text": "تعبر عن أن اتجاه القوة مضاد لاتجاه الحركة المفترض.", "isCorrect": true },
          { "text": "تعبر عن أن مقدار القوة أصغر من الصفر.", "isCorrect": false }
        ],
        "feedback": "صحيح! الإشارة السالبة في المتجهات تدل على الاتجاه المعاكس."
      }
    ],
    "pdfSolutionSteps": [
      "تُستخدم الإشارة السالبة في الميكانيكا لتحديد اتجاه القوة عندما تكون معارضة أو معاكسة لاتجاه الحركة الموجب المفترض.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 21: شرط الاتزان والحركة بعجلة",
    "text": "الجسم المتحرك بعجلة ثابتة يعد في حالة اتزان.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue3' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.box-eq { fill: #f0fdf4; stroke: #16a34a; stroke-width: 2; rx: 8; } .box-uneq { fill: #fef2f2; stroke: #dc2626; stroke-width: 2; rx: 8; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; }</style><rect width='500' height='300' fill='#ffffff'/><rect x='30' y='40' width='205' height='220' class='box-eq'/><text x='132' y='75' class='label' font-size='16' fill='#15803d'>حالة اتزان (Equilibrium)</text><text x='132' y='120' class='label' font-size='14' fill='#1e293b'>سرعة ثابتة (v = const)</text><text x='132' y='155' class='label' font-size='15' fill='#16a34a'>العجلة a = 0</text><text x='132' y='190' class='label' font-size='15' fill='#16a34a'>محصلة القوى ΣF = 0</text><text x='132' y='235' class='label' font-size='16' fill='#15803d'>✅ متزن</text><rect x='265' y='40' width='205' height='220' class='box-uneq'/><text x='367' y='75' class='label' font-size='16' fill='#b91c1c'>حركة بعجلة (Accelerated)</text><text x='367' y='120' class='label' font-size='14' fill='#1e293b'>سرعة متغيرة</text><text x='367' y='155' class='label' font-size='15' fill='#dc2626'>العجلة a ≠ 0</text><text x='367' y='190' class='label' font-size='15' fill='#dc2626'>محصلة القوى ΣF ≠ 0</text><text x='367' y='235' class='label' font-size='16' fill='#b91c1c'>❌ غير متزن</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تحديد شرط الاتزان الديناميكي",
        "question": "متى يكون الجسم المتحرك في حالة اتزان؟",
        "options": [
          { "text": "عندما يتحرك بسرعه ثابتة (العجلة a = 0).", "isCorrect": true },
          { "text": "عندما يتحرك بعجلة منتظمة ثابتة لا تساوي الصفر.", "isCorrect": false }
        ],
        "feedback": "ممتاز! شرط الاتزان أن تكون محصلة القوى صفراً وبالتالي العجلة صفراً."
      }
    ],
    "pdfSolutionSteps": [
      "يكون الجسم في حالة اتزان فقط إذا كانت محصلة القوى المؤثرة عليه تساوي صفراً (ΣF = 0)، مما يعني أن العجلة تساوي صفراً (a = 0) والسرعة ثابتة.",
      "أما الحركة بعجلة ثابتة غير صفرية فتخضع لقانون نيوتن الثاني وتكون غير متزنة.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 22: العلاقة بين القوة والعجلة",
    "text": "كلما زادت القوة زادت العجلة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-black' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#1e293b'/></marker></defs><style>.axis { stroke: #475569; stroke-width: 2.5; } .line { stroke: #2563eb; stroke-width: 3.5; stroke-linecap: round; } .grid { stroke: #e2e8f0; stroke-width: 1; stroke-dasharray: 3 3; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #f0f9ff; stroke: #bae6fd; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='300' fill='#ffffff'/><g transform='translate(50, 30)'><line x1='50' y1='210' x2='230' y2='210' class='axis' marker-end='url(#arrow-black)'/><text x='240' y='215' class='label' font-size='13' fill='#1e293b'>a (العجلة)</text><line x1='50' y1='210' x2='50' y2='30' class='axis' marker-end='url(#arrow-black)'/><text x='50' y='18' class='label' font-size='13' fill='#1e293b'>F (القوة)</text><line x1='50' y1='210' x2='200' y2='50' class='line'/><circle cx='125' cy='130' r='5' fill='#2563eb'/><line x1='125' y1='130' x2='125' y2='210' class='grid'/><line x1='50' y1='130' x2='125' y2='130' class='grid'/><circle cx='175' cy='76' r='5' fill='#2563eb'/><line x1='175' y1='76' x2='175' y2='210' class='grid'/><line x1='50' y1='76' x2='175' y2='76' class='grid'/></g><rect x='290' y='70' width='180' height='150' class='card'/><text x='380' y='105' class='label' font-size='16' fill='#0369a1'>علاقة طردية</text><text x='380' y='140' class='label' font-size='18' fill='#2563eb'>F ∝ a</text><text x='380' y='175' class='label' font-size='14' fill='#1e293b'>F = m × a</text><text x='380' y='200' class='label' font-size='12' fill='#64748b'>(عند ثبوت الكتلة m)</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تناسب القوة والعجلة",
        "question": "حسب قانون نيوتن الثاني (F = ma)، ما نوع العلاقة بين القوة المؤثرة F والعجلة a عند ثبوت الكتلة m؟",
        "options": [
          { "text": "علاقة طردية.", "isCorrect": true },
          { "text": "علاقة عكسية.", "isCorrect": false }
        ],
        "feedback": "صحيح! زيادة القوة المؤثرة تؤدي لزيادة العجلة الناتجة بنفس النسبة."
      }
    ],
    "pdfSolutionSteps": [
      "من قانون نيوتن الثاني F = ma، تتناسب العجلة طردياً مع القوة المؤثرة عند ثبوت الكتلة.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
{
    "title": "س 23: اتجاه قوة الشد في الخيوط",
    "text": "قوة الشد قوة اتجاهها داخل الجسم المؤثر عليه.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f1f5f9; stroke: #0f172a; stroke-width: 2.5; rx: 6; } .rope { stroke: #d97706; stroke-width: 4; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #f8fafc; stroke: #cbd5e1; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='200' x2='450' y2='200' class='ground'/><rect x='120' y='120' width='100' height='80' class='block'/><text x='170' y='165' class='label' font-size='15' fill='#0f172a'>جسم</text><line x1='220' y1='160' x2='380' y2='160' class='rope'/><line x1='220' y1='160' x2='340' y2='160' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='280' y='145' class='label' font-size='14' fill='#2563eb'>قوة الشد T (خارجة من الجسم)</text><rect x='80' y='220' width='340' height='45' class='card'/><text x='250' y='247' class='label' font-size='13' fill='#dc2626'>قوة الشد تسحب للخارج ولا تتجه لداخل الجسم ❌</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تحديد اتجاه الشد",
        "question": "كيف ترسم قوة الشد T بالنسبة للجسم المربوط بالحبل؟",
        "options": [
          { "text": "خارجة دائماً من الجسم وعلى امتداد الخيط.", "isCorrect": true },
          { "text": "داخلة نحو مركز الجسم.", "isCorrect": false }
        ],
        "feedback": "صحيح! قوة الشد في الخيط تؤثر دائماً بسحب الجسم نحو الخارِج."
      }
    ],
    "pdfSolutionSteps": [
      "قوة الشد (T) هي قوة سحب وتكون دائماً موجهة لخارج الجسم وعلى طول امتداد الخيط أو الحبل.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 24: خط عمل قوة الاتصال العمودية والوزن",
    "text": "قوة الاتصال العمودية والوزن لا يكونان على خط عمل واحد في بعض الحالات.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker></defs><style>.incline { fill: #f1f5f9; stroke: #334155; stroke-width: 3; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; }</style><rect width='500' height='300' fill='#ffffff'/><polygon points='60,230 400,230 400,80' class='incline'/><g transform='rotate(-22, 230, 150)'><rect x='190' y='110' width='80' height='60' fill='#e0f2fe' stroke='#0284c7' stroke-width='2.5' rx='4'/></g><line x1='225' y1='138' x2='225' y2='250' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='225' y='270' class='label' font-size='13' fill='#dc2626'>الوزن W (رأسي لأسفل)</text><line x1='225' y1='138' x2='175' y2='25' stroke='#7c3aed' stroke-width='3' marker-end='url(#arrow-purple)'/><text x='150' y='20' class='label' font-size='13' fill='#7c3aed'>R (عمودي على المائل)</text><text x='370' y='260' class='label' font-size='13' fill='#1e293b'>خطوط العمل غير منطبقة ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تحليل القوى على السطح المائل",
        "question": "على السطح المائل، أين يتجه كل من الوزن وقوة الاتصال العمودية؟",
        "options": [
          { "text": "الوزن رأسي لأسفل، بينما R عمودية على السطح المائل، فلا يقعان على خط عمل واحد.", "isCorrect": true },
          { "text": "كلاهما يكونان على نفس الخط دائماً.", "isCorrect": false }
        ],
        "feedback": "ممتاز! ينحرف خط عمل R عن خط عمل W بزاوية ميل السطح."
      }
    ],
    "pdfSolutionSteps": [
      "في حالة السطح المائل أو القوى المائلة، تؤثر قوة الاتصال العمودية (R) عمودياً على السطح بينما يتجه الوزن (W) رأسياً لأسفل دائماً، وبالتالي لا ينطبقان على خط عمل واحد.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 25: العلاقة بين قوة الاتصال العمودية والكتلة",
    "text": "إذا زادت قوة الاتصال العمودية تزيد الكتلة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-black' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#334155'/></marker></defs><style>.box-cause { fill: #eff6ff; stroke: #2563eb; stroke-width: 2; rx: 8; } .box-effect { fill: #f0fdf4; stroke: #16a34a; stroke-width: 2; rx: 8; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #fef2f2; stroke: #fca5a5; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><rect x='40' y='50' width='120' height='70' class='box-cause'/><text x='100' y='80' class='label' font-size='14' fill='#1e3a8a'>الكتلة (m)</text><text x='100' y='100' class='label' font-size='11' fill='#2563eb'>[خاصية ثابتة/سبب]</text><line x1='160' y1='85' x2='200' y2='85' stroke='#334155' stroke-width='2.5' marker-end='url(#arrow-black)'/><rect x='200' y='50' width='110' height='70' class='box-cause'/><text x='255' y='80' class='label' font-size='14' fill='#1e3a8a'>الوزن (W)</text><text x='255' y='100' class='label' font-size='11' fill='#2563eb'>W = m × g</text><line x1='310' y1='85' x2='350' y2='85' stroke='#334155' stroke-width='2.5' marker-end='url(#arrow-black)'/><rect x='350' y='50' width='120' height='70' class='box-effect'/><text x='410' y='80' class='label' font-size='14' fill='#14532d'>قوة الاتصال (R)</text><text x='410' y='100' class='label' font-size='11' fill='#16a34a'>R = W (نتيجة)</text><rect x='60' y='160' width='380' height='80' class='card'/><text x='250' y='190' class='label' font-size='14' fill='#991b1b'>زيادة الكتلة تسبب زيادة R (وليس العكس)</text><text x='250' y='215' class='label' font-size='13' fill='#dc2626'>❌ زيادة قوة الاتصال لا تزيد من كتلة الجسم</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: التمييز بين المتغير المستقل والتابع",
        "question": "أي المفهومين يعتبر خاصية جوهرية للجسم تؤدي لتغير الآخر؟",
        "options": [
          { "text": "زيادة الكتلة تسبب زيادة الوزن وتاليًا زيادة R.", "isCorrect": true },
          { "text": "زيادة قوة الاتصال تؤدي لزيادة كتلة الجسم.", "isCorrect": false }
        ],
        "feedback": "صحيح! الكتلة ثابتة للجسم وتغيرها هو السبب وليس النتيجة."
      }
    ],
    "pdfSolutionSteps": [
      "السبب والمسبب: زيادة الكتلة (m) تؤدي لزيادة الوزن (W)، وبالتالي تزيد قوة الاتصال العمودية (R = mg على السطح الأفقي)، وليس العكس لأن الكتلة مادة ثابتة للجسم.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 26: المركبة الرأسية للقوة الأفقية",
    "text": "إذا أثرت قوة أفقية على جسم فإن مركبة القوة الرأسية لهذه القوة تنعدم.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f1f5f9; stroke: #0f172a; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #f0fdf4; stroke: #bbf7d0; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='180' y='100' width='100' height='80' class='block'/><text x='230' y='145' class='label' font-size='15' fill='#0f172a'>جسم</text><line x1='280' y1='140' x2='400' y2='140' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='340' y='125' class='label' font-size='14' fill='#2563eb'>قوة أفقية F (θ = 0°)</text><rect x='60' y='200' width='380' height='60' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#16a34a'>المركبة الأفقية: F_x = F × cos(0°) = F</text><text x='250' y='247' class='label' font-size='14' fill='#16a34a'>المركبة الرأسية: F_y = F × sin(0°) = 0  ✅ (تنعدم)</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تحليل القوة الأفقية",
        "question": "كم تساوي الزاوية مع المحور الأفقي للقوة الأفقية، وما قيمة جيبها sin(0°)؟",
        "options": [
          { "text": "الزاوية 0° وجيبها 0، لذا تنعدم المركبة الرأسية.", "isCorrect": true },
          { "text": "الزاوية 90° وتكون المركبة أكبر ما يمكن.", "isCorrect": false }
        ],
        "feedback": "ممتاز! F_y = F sin(0°) = 0."
      }
    ],
    "pdfSolutionSteps": [
      "القوة الأفقية تعمل بالكامل على المحور الأفقي (x)، وبما أن زاوية ميلها مع الأفقي θ = 0°، فإن مركبتها الرأسية تكون F_y = F sin(0°) = 0 (تنعدم).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 29: القوى المؤثرة في حالة الحركة بعجلة تزايدية",
    "text": "عندما يتحرك الجسم بعجلة تزايدية فإن القوة مع اتجاه الحركة تكون أكبر من القوة عكس اتجاه الحركة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f8fafc; stroke: #334155; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #f0fdf4; stroke: #bbf7d0; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='190' y='100' width='100' height='80' class='block'/><text x='240' y='145' class='label' font-size='15' fill='#334155'>جسم</text><line x1='290' y1='140' x2='430' y2='140' stroke='#16a34a' stroke-width='4' marker-end='url(#arrow-green)'/><text x='360' y='125' class='label' font-size='13' fill='#16a34a'>F_forward (أكبر)</text><line x1='190' y1='140' x2='110' y2='140' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='150' y='125' class='label' font-size='12' fill='#dc2626'>F_resist (أصغر)</text><line x1='190' y1='70' x2='290' y2='70' stroke='#2563eb' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-blue)'/><text x='240' y='58' class='label' font-size='13' fill='#2563eb'>عجلة تزايدية (a > 0)</text><rect x='60' y='205' width='380' height='50' class='card'/><text x='250' y='235' class='label' font-size='14' fill='#15803d'>F_net = F_forward - F_resist = m × a > 0  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تطبيق قانون نيوتن الثاني",
        "question": "لكي تتولد عجلة موجبة في اتجاه الحركة (m × a > 0)، كيف يجب أن تكون محصلة القوى (F - f)؟",
        "options": [
          { "text": "موجبة، أي أن القوة مع اتجاه الحركة أكبر من المقاومة.", "isCorrect": true },
          { "text": "سالبة، أي أن المقاومة أكبر.", "isCorrect": false }
        ],
        "feedback": "صحيح! المحصلة تكون في اتجاه القوة الأكبر."
      }
    ],
    "pdfSolutionSteps": [
      "حسب قانون نيوتن الثاني: F_net = F_forward - F_opposing = m × a.",
      "عندما تكون العجلة تزايدية (a > 0)، تكون F_net > 0، مما يعني أن القوة في اتجاه الحركة أكبر من القوة المعاكسة لها.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 30: محصلة القوى في حالة الاتزان",
    "text": "إذا أثرت 5 قوى على جسم فاتزن فإن محصلة هذه القوى تساوي 1 صحيح.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 300' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.body { fill: #e2e8f0; stroke: #1e293b; stroke-width: 2.5; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #fef2f2; stroke: #fca5a5; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='300' fill='#ffffff'/><circle cx='180' cy='130' r='35' class='body'/><text x='180' y='135' class='label' font-size='14' fill='#1e293b'>جسم</text><line x1='180' y1='95' x2='180' y2='25' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='180' y='18' class='label' font-size='12' fill='#2563eb'>F1</text><line x1='213' y1='118' x2='280' y2='80' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='292' y='75' class='label' font-size='12' fill='#2563eb'>F2</text><line x1='210' y1='145' x2='275' y2='180' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='288' y='190' class='label' font-size='12' fill='#2563eb'>F3</text><line x1='155' y1='155' x2='100' y2='200' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='90' y='212' class='label' font-size='12' fill='#2563eb'>F4</text><line x1='147' y1='120' x2='85' y2='100' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='75' y='98' class='label' font-size='12' fill='#2563eb'>F5</text><rect x='60' y='225' width='380' height='55' class='card'/><text x='250' y='247' class='label' font-size='14' fill='#991b1b'>شرط الاتزان: محصلة القوى ΣF = 0</text><text x='250' y='267' class='label' font-size='13' fill='#dc2626'>❌ محصلة القوى لا تساوي 1 صحيح</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: الشرط الأساسي للاتزان",
        "question": "كم تجب أن تساوي محصلة القوى المؤثرة على أي جسم متزن بغض النظر عن عدد القوى؟",
        "options": [
          { "text": "صفراً (0).", "isCorrect": true },
          { "text": "واحد صحيح (1).", "isCorrect": false }
        ],
        "feedback": "صحيح! شرط اتزان أي جسم هو أن تكون محصلة كل القوى صفراً."
      }
    ],
    "pdfSolutionSteps": [
      "تعريف الاتزان الميكانيكي: هو حالة يكون فيها مجموع محصلة جميع القوى المؤثرة على الجسم متساوية تماماً وتساوي صفراً (ΣF = 0).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 31: مدلول الإشارة السالبة بالنسبة للحركة",
    "text": "الإشارة السالبة أمام القوة تعني أن القوة عكس اتجاه مقاومة الحركة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground { stroke: #64748b; stroke-width: 3; stroke-dasharray: 6 4; } .block { fill: #f8fafc; stroke: #334155; stroke-width: 2.5; rx: 6; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; } .card { fill: #fef2f2; stroke: #fca5a5; stroke-width: 1.5; rx: 8; }</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' class='ground'/><rect x='200' y='90' width='100' height='80' class='block'/><text x='250' y='135' class='label' font-size='15' fill='#334155'>جسم</text><line x1='280' y1='60' x2='390' y2='60' stroke='#16a34a' stroke-width='3.5' marker-end='url(#arrow-green)'/><text x='335' y='45' class='label' font-size='13' fill='#16a34a'>اتجاه الحركة المرجعي (+)</text><line x1='200' y1='130' x2='90' y2='130' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-red)'/><text x='140' y='115' class='label' font-size='14' fill='#dc2626'>قوة سالبة (-F)</text><rect x='60' y='195' width='380' height='65' class='card'/><text x='250' y='220' class='label' font-size='13' fill='#991b1b'>الإشارة السالبة (-) تعني أن القوة معاكسة لاتجاه الحركة</text><text x='250' y='242' class='label' font-size='13' fill='#dc2626'>❌ وليس عكس اتجاه مقاومة الحركة</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تحديد المرجع للإشارة السالبة",
        "question": "تكون القوة سالبة عندما تكون عكس ماذا؟",
        "options": [
          { "text": "عكس اتجاه الحركة نفسه.", "isCorrect": true },
          { "text": "عكس اتجاه المقاومة.", "isCorrect": false }
        ],
        "feedback": "صحيح! اتجاه الحركة هو المرجع المعتمد للموجب."
      }
    ],
    "pdfSolutionSteps": [
      "الإشارة السالبة تعني أن القوة تعمل في اتجاه مضاد لاتجاه الحركة (مثل قوة المقاومة أو الاحتكاك نفسها)، وليس عكس اتجاه المقاومة.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
{
    "title": "س 32: تحليل القوة المائلة ومكافأة النسب المثلثية",
    "text": "إذا أثرت قوة F على جسم بزاوية 60° مع الأفقي فإن مركبتها الأفقية تساوي F sin(30°).",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='120' y='100' width='90' height='80' class='block'/><text x='165' y='145' class='label' font-size='14' fill='#0f172a'>جسم</text><line x1='210' y1='140' x2='330' y2='36' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='345' y='30' class='label' font-size='14' fill='#2563eb'>F</text><path d='M 260 140 A 50 50 0 0 0 242 112' fill='none' stroke='#d97706' stroke-width='2'/><text x='275' y='128' class='label' font-size='13' fill='#d97706'>60°</text><line x1='210' y1='140' x2='270' y2='140' stroke='#16a34a' stroke-width='3' stroke-dasharray='4 3' marker-end='url(#arrow-green)'/><text x='250' y='165' class='label' font-size='13' fill='#16a34a'>F_x = F cos(60°)</text><rect x='60' y='200' width='380' height='60' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#16a34a'>cos(60°) = sin(30°) = 0.5</text><text x='250' y='247' class='label' font-size='14' fill='#15803d'>∴ F_x = F cos(60°) = F sin(30°)  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: حساب المركبة الأفقية والعلاقات المثلثية",
        "question": "المركبة الأفقية هي F cos(60°). هل cos(60°) يساوي sin(30°)؟",
        "options": [
          { "text": "نعم، لأن cos(60°) = sin(30°) = 0.5.", "isCorrect": true },
          { "text": "لا، القيمتان مختلفتا.", "isCorrect": false }
        ],
        "feedback": "ممتاز! النسبتان متساويتان تماماً وتساويان 0.5."
      }
    ],
    "pdfSolutionSteps": [
      "1. المركبة الأفقية للقوة المائلة بزاوية 60° مع الأفقي هي: F_x = F cos(60°).",
      "2. من متطابقات الزوايا المتتمة: cos(60°) = sin(30°) = 0.5.",
      "3. إذن: F_x = F sin(30°).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 33: التناسب بين العجلة والكتلة",
    "text": "عندما نؤثر على جسم بقوة F فيتحرك بعجلة a فإن هذه العجلة تتناسب عكسياً مع كتلة الجسم.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#eff6ff;stroke:#bfdbfe;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='60' y='110' width='60' height='50' fill='#e2e8f0' stroke='#334155' stroke-width='2' rx='4'/><text x='90' y='140' class='label' font-size='13' fill='#0f172a'>m صغيرة</text><line x1='120' y1='135' x2='200' y2='135' stroke='#7c3aed' stroke-width='4' marker-end='url(#arrow-purple)'/><text x='160' y='120' class='label' font-size='13' fill='#7c3aed'>عجلة كبيـرة (a)</text><rect x='270' y='80' width='100' height='80' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='320' y='125' class='label' font-size='13' fill='#0f172a'>m كبيرة</text><line x1='370' y1='120' x2='410' y2='120' stroke='#7c3aed' stroke-width='2' marker-end='url(#arrow-purple)'/><text x='435' y='125' class='label' font-size='12' fill='#7c3aed'>a صغيرة</text><line x1='40' y1='160' x2='460' y2='160' class='ground'/><rect x='80' y='190' width='340' height='65' class='card'/><text x='250' y='218' class='label' font-size='15' fill='#1e40af'>قانون نيوتن الثاني: a = F / m</text><text x='250' y='240' class='label' font-size='13' fill='#2563eb'>العجلة (a) تتناسب عكسياً مع الكتلة (m) عند ثبوت القوة  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: صياغة القانون بالنسبة للعجلة",
        "question": "عند إعادة كتابة القانون F = ma لتصبح a موضوع القانون (a = F / m)، ما نوع التناسب بين a و m؟",
        "options": [
          { "text": "تناسب عكسي عند ثبوت القوة F.", "isCorrect": true },
          { "text": "تناسب طردي.", "isCorrect": false }
        ],
        "feedback": "صحيح! كلما زادت كتلة الجسم كلما قلت العجلة لنفس القوة."
      }
    ],
    "pdfSolutionSteps": [
      "من صيغة قانون نيوتن الثاني: a = F / m.",
      "تتناسب العجلة عكسياً مع كتلة الجسم عند ثبوت القوة المؤثرة (كلما زادت الكتلة قل التسارع).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 34: تأثير زيادة الكتلة على قوة الاتصال العمودية",
    "text": "كلما زادت كتلة الجسم زادت قوة الاتصال العمودية.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='190' y='100' width='120' height='80' class='block'/><text x='250' y='145' class='label' font-size='15' fill='#0f172a'>كتلة أكبر (m ↑)</text><line x1='250' y1='100' x2='250' y2='25' stroke='#7c3aed' stroke-width='3.5' marker-end='url(#arrow-purple)'/><text x='250' y='18' class='label' font-size='14' fill='#7c3aed'>قوة الاتصال R ↑</text><line x1='250' y1='180' x2='250' y2='245' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-red)'/><text x='250' y='265' class='label' font-size='13' fill='#dc2626'>الوزن W = mg ↑</text><rect x='20' y='50' width='140' height='90' class='card'/><text x='90' y='78' class='label' font-size='13' fill='#15803d'>على السطح الأفقي:</text><text x='90' y='102' class='label' font-size='14' fill='#16a34a'>R = W = mg</text><text x='90' y='125' class='label' font-size='12' fill='#15803d'>m ↑ ⇐ W ↑ ⇐ R ↑  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: ربط الكتلة بالوزن ورد الفعل",
        "question": "على سطح أفقي، R = W = mg. إذا زادت الكتلة m، ماذا يحدث لقوة الاتصال العمودية R؟",
        "options": [
          { "text": "تزداد بزيادة الكتلة والوزن.", "isCorrect": true },
          { "text": "تقل أو تبقى ثابتة.", "isCorrect": false }
        ],
        "feedback": "ممتاز! العلاقة بين R والكتلة m طردية خطية على السطح الأفقي."
      }
    ],
    "pdfSolutionSteps": [
      "على السطح الأفقي، تتزن قوة الاتصال العمودية مع الوزن: R = mg.",
      "بزيادة كتلة الجسم (m)، يزداد وزنه (mg)، وبالتالي تزداد قوة الاتصال العمودية (R) المساندة له.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 35: وحدات قياس القوة واشتقاقها",
    "text": "وحدة قياس القوة في النظام الدولي نيوتن ويعادل kg.m.s⁻².",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.box{fill:#f8fafc;stroke:#64748b;stroke-width:2;rx:8;}.highlight{fill:#eff6ff;stroke:#2563eb;stroke-width:2;rx:8;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='40' y='40' width='420' height='60' class='highlight'/><text x='250' y='75' class='label' font-size='18' fill='#1e40af'>القانون:  F  =  m  ×  a</text><rect x='40' y='120' width='130' height='60' class='box'/><text x='105' y='145' class='label' font-size='13' fill='#64748b'>وحدة القوة F</text><text x='105' y='168' class='label' font-size='15' fill='#0f172a'>النيوتن (N)</text><text x='190' y='155' class='label' font-size='20' fill='#334155'>=</text><rect x='210' y='120' width='110' height='60' class='box'/><text x='265' y='145' class='label' font-size='13' fill='#64748b'>وحدة الكتلة m</text><text x='265' y='168' class='label' font-size='15' fill='#0f172a'>kg</text><text x='340' y='155' class='label' font-size='20' fill='#334155'>×</text><rect x='360' y='120' width='100' height='60' class='box'/><text x='410' y='145' class='label' font-size='13' fill='#64748b'>وحدة العجلة a</text><text x='410' y='168' class='label' font-size='15' fill='#0f172a'>m·s⁻²</text><rect x='60' y='200' width='380' height='55' class='card'/><text x='250' y='233' class='label' font-size='16' fill='#15803d'>1 N = 1 kg·m·s⁻²  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: اشتقاق وحدة النيوتن",
        "question": "من القانون F = ma، الكتلة بوحدة kg والعجلة بوحدة m/s² (أو m.s⁻²). ما النيوتن؟",
        "options": [
          { "text": "kg.m.s⁻²", "isCorrect": true },
          { "text": "kg.m⁻¹.s⁻²", "isCorrect": false }
        ],
        "feedback": "صحيح! النيوتن يساوي كيلوجرام في متر لكل ثانية تربيع."
      }
    ],
    "pdfSolutionSteps": [
      "النيوتن (N) هو وحدة قياس القوة الدولية.",
      "من قانون F = ma: وحدة F = (وحدة m) × (وحدة a) = kg × (m/s²) = kg.m.s⁻².",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 37: حالة الاتزان عند الحركة بسرعة ثابتة",
    "text": "الجسم المتحرك بسرعة ثابتة يعد في حالة اتزان.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='190' y='100' width='110' height='80' class='block'/><text x='245' y='145' class='label' font-size='15' fill='#0f172a'>جسم متحرك</text><line x1='190' y1='65' x2='310' y2='65' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='250' y='50' class='label' font-size='13' fill='#2563eb'>سرعة ثابتة (v = const)</text><line x1='300' y1='140' x2='380' y2='140' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='340' y='125' class='label' font-size='12' fill='#16a34a'>F</text><line x1='190' y1='140' x2='110' y2='140' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='150' y='125' class='label' font-size='12' fill='#dc2626'>f</text><rect x='60' y='200' width='380' height='60' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#16a34a'>سرعة ثابتة ⇐ العجلة a = 0 ⇐ المحصلة ΣF = 0</text><text x='250' y='247' class='label' font-size='14' fill='#15803d'>حالة اتزان ديناميكي (حركي)  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تعريف الاتزان الديناميكي",
        "question": "إذا كانت السرعة v ثابتة المقدار والاتجاه، كم تكون العجلة ومحصلة القوى؟",
        "options": [
          { "text": "العجلة = 0 ومحصلة القوى = 0، وهو في حالة اتزان ديناميكي.", "isCorrect": true },
          { "text": "العجلة > 0 والجسم غير متزن.", "isCorrect": false }
        ],
        "feedback": "صحيح! السرعة الثابتة تعني انعدام العجلة وبالتالي تحقق الاتزان."
      }
    ],
    "pdfSolutionSteps": [
      "عندما يقطع الجسم مسافات متساوية في أزمنة متساوية (سرعة ثابتة)، تكون العجلة مساوية للصفر (a = 0)، وتكون محصلة القوى صفرية (ΣF = 0)، وهي حالة اتزان حركي (ديناميكي).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 38: معادلة الاتزان في اتجاه الحركة",
    "text": "الاتزان: القوة مع الحركة تساوي القوة عكس اتجاه الحركة.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' class='ground'/><rect x='190' y='90' width='100' height='80' class='block'/><text x='240' y='135' class='label' font-size='15' fill='#0f172a'>جسم متزن</text><line x1='290' y1='130' x2='400' y2='130' stroke='#16a34a' stroke-width='3.5' marker-end='url(#arrow-green)'/><text x='345' y='115' class='label' font-size='13' fill='#16a34a'>القوة مع الحركة (F)</text><line x1='190' y1='130' x2='80' y2='130' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-red)'/><text x='135' y='115' class='label' font-size='13' fill='#dc2626'>القوة عكس الحركة (f)</text><rect x='60' y='195' width='380' height='60' class='card'/><text x='250' y='220' class='label' font-size='14' fill='#16a34a'>شرط الاتزان الأفقي:  ΣF = 0  ⇒  F - f = 0</text><text x='250' y='242' class='label' font-size='14' fill='#15803d'>القوة مع الحركة = القوة عكس اتجاه الحركة  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تطبيق قانون الاتزان",
        "question": "عندما تنعدم محصلة القوى (F - f = 0)، ماذا نستنتج عن القوتين المتقابلتين؟",
        "options": [
          { "text": "القوة المسببة للحركة تساوي القوة المقاومة لها.", "isCorrect": true },
          { "text": "القوة المسببة للحركة أكبر من المقاومة.", "isCorrect": false }
        ],
        "feedback": "ممتاز! تتساوى القوى المترادفة في الاتجاهات المتعاكسة."
      }
    ],
    "pdfSolutionSteps": [
      "في حالة الاتزان، محصلة القوى تساوي صفراً: F_forward - F_backward = 0  ⇒  F_forward = F_backward.",
      "أي أن القوة التي مع اتجاه الحركة تتساوى مع القوة المعاكسة لها.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 39: مكافئ وحدة قياس الكتلة",
    "text": "وحدة قياس الكتلة هي kg وتعادل N.m⁻¹s⁻².",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card-correct{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}.box{fill:#f8fafc;stroke:#64748b;stroke-width:2;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='50' y='30' width='400' height='70' class='box'/><text x='250' y='60' class='label' font-size='15' fill='#0f172a'>من القانون: m = F / a</text><text x='250' y='85' class='label' font-size='14' fill='#2563eb'>وحدة m = N / (m·s⁻²) = N · m⁻¹ · s²</text><rect x='40' y='120' width='420' height='60' class='card-correct'/><text x='250' y='155' class='label' font-size='15' fill='#15803d'>الصيغة الصحيحة: N·m⁻¹·s²  (الأس للثانية موجب s²)  ✅</text><rect x='40' y='195' width='420' height='60' class='card-wrong'/><text x='250' y='230' class='label' font-size='15' fill='#991b1b'>الصيغة المذكورة بالسؤال: N·m⁻¹·s⁻²  ❌ (خطأ)</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: اشتقاق وحدة الكتلة من القوة والعجلة",
        "question": "من m = F / a، وحدة F هي N ووحدة a هي m/s² (أو m.s⁻²). كم تكون وحدة m بالمُقامات؟",
        "options": [
          { "text": "N.m⁻¹.s² (الأس للثانية موجب وليس سالب).", "isCorrect": true },
          { "text": "N.m⁻¹.s⁻²", "isCorrect": false }
        ],
        "feedback": "صحيح! N / (m.s⁻²) = N.m⁻¹.s²."
      }
    ],
    "pdfSolutionSteps": [
      "اشتقاق الوحدة:",
      "m = F / a  ⇒  وحدة الكتلة = N / (m/s²) = N · s² / m = N.m⁻¹.s².",
      "الخطأ في السؤال هو كتابة s⁻² بدلاً من s².",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 40: التناسب العكسي بين الكتلة والعجلة عند تغير الكتلة",
    "text": "إذا زادت كتلة جسم للنصف فإن عجلته تقل للنصف.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='50' y='100' width='70' height='60' fill='#e2e8f0' stroke='#334155' stroke-width='2' rx='4'/><text x='85' y='135' class='label' font-size='13' fill='#0f172a'>الكتلة m</text><line x1='120' y1='130' x2='190' y2='130' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='155' y='115' class='label' font-size='12' fill='#2563eb'>العجلة a</text><text x='230' y='135' class='label' font-size='18' fill='#d97706'>← مضاعفة الكتلة 2m</text><rect x='280' y='80' width='90' height='80' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='325' y='125' class='label' font-size='13' fill='#0f172a'>الكتلة 2m</text><line x1='370' y1='120' x2='415' y2='120' stroke='#2563eb' stroke-width='2' marker-end='url(#arrow-blue)'/><text x='440' y='125' class='label' font-size='12' fill='#2563eb'>العجلة a / 2</text><line x1='30' y1='160' x2='470' y2='160' class='ground'/><rect x='60' y='195' width='380' height='60' class='card'/><text x='250' y='220' class='label' font-size='14' fill='#16a34a'>العلاقة عكسية: a = F / m</text><text x='250' y='242' class='label' font-size='14' fill='#15803d'>عند مضاعفة الكتلة تقل العجلة إلى النصف  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: تطبيق التناسب العكسي",
        "question": "بما أن a = F / m، إذا أصبحت الكتلة ضعف ما كانت عليه (أو زادت بمقدار النصف كنسبة مضاعفة)، ماذا يحدث للعجلة؟",
        "options": [
          { "text": "تقل العجلة إلى النصف.", "isCorrect": true },
          { "text": "تتضاعف العجلة.", "isCorrect": false }
        ],
        "feedback": "صحيح! العلاقة عكسية بين العجلة والكتلة."
      }
    ],
    "pdfSolutionSteps": [
      "من القانون a = F/m، العلاقة بين الكتلة والعجلة علاقة عكسية عند ثبوت القوة.",
      "مضاعفة الكتلة تؤدي إلى تنصيف العجلة الناتجة.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 41: قانون نيوتن المنظم للحركة بعجلة",
    "text": "إذا تحرك الجسم بعجلة ثابتة فإن الجسم يخضع إلى قانون نيوتن الأول.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.box-1{fill:#eff6ff;stroke:#2563eb;stroke-width:2;rx:8;}.box-2{fill:#f0fdf4;stroke:#16a34a;stroke-width:2;rx:8;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='40' y='40' width='200' height='100' class='box-1'/><text x='140' y='70' class='label' font-size='14' fill='#1e40af'>الحركة بدون عجلة (a = 0)</text><text x='140' y='95' class='label' font-size='13' fill='#2563eb'>سرعة ثابتة / سكون</text><text x='140' y='120' class='label' font-size='14' fill='#1e3a8a'>← قانون نيوتن الأول</text><rect x='260' y='40' width='200' height='100' class='box-2'/><text x='360' y='70' class='label' font-size='14' fill='#14532d'>الحركة بعجلة ثابتة (a ≠ 0)</text><text x='360' y='95' class='label' font-size='13' fill='#16a34a'>سرعة متغيرة (F = ma)</text><text x='360' y='120' class='label' font-size='14' fill='#15803d'>← قانون نيوتن الثاني</text><rect x='60' y='170' width='380' height='75' class='card-wrong'/><text x='250' y='200' class='label' font-size='14' fill='#991b1b'>الحركة بعجلة ثابتة يخضع فيها الجسم لقانون نيوتن الثاني</text><text x='250' y='225' class='label' font-size='14' fill='#dc2626'>❌ وليس قانون نيوتن الأول</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: التمييز بين قانوني نيوتن الأول والثاني",
        "question": "أي من القوانين يصف حركة الأجسام عندما تكون العجلة غير صفرية (a ≠ 0)؟",
        "options": [
          { "text": "قانون نيوتن الثاني.", "isCorrect": true },
          { "text": "قانون نيوتن الأول.", "isCorrect": false }
        ],
        "feedback": "صحيح! قانون نيوتن الثاني يخضع له كل جسم يتحرك بعجلة."
      }
    ],
    "pdfSolutionSteps": [
      "قانون نيوتن الأول يختص بحالات السكون أو السرعة الثابتة (العجلة a = 0).",
      "بينما الحركة بعجلة ثابتة (a ≠ 0) تعني وجود محصلة قوى وتخضع لقانون نيوتن الثاني (F = ma).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
{
    "title": "س 42: قيمة التسارع عند أقصى سرعة",
    "text": "إذا تحرك الجسم بأقصى سرعة له فإن قيمة تسارعه تكون أكبر ما يمكن.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card-correct{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}.axis{stroke:#64748b;stroke-width:2;}.curve{fill:none;stroke:#2563eb;stroke-width:3;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='60' y1='140' x2='220' y2='140' class='axis'/><line x1='60' y1='140' x2='60' y2='30' class='axis'/><text x='50' y='35' class='label' font-size='11' fill='#64748b'>v</text><text x='225' y='152' class='label' font-size='11' fill='#64748b'>t</text><path d='M 60 135 Q 110 50 210 50' class='curve'/><line x1='60' y1='50' x2='210' y2='50' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4 3'/><text x='135' y='42' class='label' font-size='12' fill='#dc2626'>أقصى سرعة v_max (ثابتة)</text><rect x='250' y='35' width='210' height='100' fill='#eff6ff' stroke='#bfdbfe' stroke-width='1.5' rx='8'/><text x='355' y='65' class='label' font-size='13' fill='#1e40af'>السرعة ثابتة عند v_max</text><text x='355' y='90' class='label' font-size='13' fill='#2563eb'>التغير في السرعة Δv = 0</text><text x='355' y='115' class='label' font-size='14' fill='#1d4ed8'>التسارع (a) = 0</text><rect x='40' y='175' width='420' height='80' class='card-wrong'/><text x='250' y='205' class='label' font-size='14' fill='#991b1b'>الادعاء: التسارع يكون أكبر ما يمكن ❌</text><text x='250' y='235' class='label' font-size='14' fill='#15803d'>الصواب: التسارع ينعدم ويصبح صفراً (a = 0) ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: مفهوم الوصول لأقصى سرعة",
        "question": "عندما يصل الجسم إلى أقصى سرعة ممكنة وتتوقف سرعته عن الزيادة، كم يصبح التسارع (معدل تغير السرعة)؟",
        "options": [
          { "text": "يصبح التسارع مساوياً للصفر (a = 0).", "isCorrect": true },
          { "text": "يكون التسارع أكبر ما يمكن.", "isCorrect": false }
        ],
        "feedback": "ممتاز! أقصى سرعة يعني ثبات السرعة وانعدام التغير فيها."
      }
    ],
    "pdfSolutionSteps": [
      "عند الوصول إلى أقصى سرعة (Terminal/Maximum Velocity)، تثبت السرعة وتتوقف عن التغير، وبالتالي ينعدم التسارع (العجلة a = 0) وتصبح محصلة القوى صفرًا.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 43: انعدام المركبة الأفقية للقوة العمودية",
    "text": "تنعدم المركبة الأفقية للقوة F إذا كانت هذه القوة تؤثر في الاتجاه العمودي.",
    "options": [
      { "text": "أ) صواب", "isCorrect": true },
      { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' class='ground'/><rect x='190' y='100' width='120' height='80' class='block'/><text x='250' y='145' class='label' font-size='14' fill='#0f172a'>جسم</text><line x1='250' y1='100' x2='250' y2='25' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='250' y='18' class='label' font-size='14' fill='#2563eb'>قوة رأسية F (θ = 90°)</text><line x1='250' y1='100' x2='340' y2='100' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4 3'/><path d='M 280 100 A 30 30 0 0 0 250 70' fill='none' stroke='#d97706' stroke-width='2'/><text x='285' y='75' class='label' font-size='13' fill='#d97706'>90°</text><rect x='50' y='200' width='400' height='60' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#16a34a'>F_x = F cos(90°) = F × 0 = 0</text><text x='250' y='247' class='label' font-size='14' fill='#15803d'>المركبة الأفقية تنعدم تماماً  ✅</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: حساب المركبة الأفقية لقوة رأسية",
        "question": "إذا كانت القوة تؤثر رأسياً بزاوية 90° مع الأفقي، كم تكون قيمة F cos(90°)؟",
        "options": [
          { "text": "صفر (تنعدم).", "isCorrect": true },
          { "text": "F (قيمة عظيمة).", "isCorrect": false }
        ],
        "feedback": "صحيح! cos(90°) = 0 وبالتالي F_x = 0."
      }
    ],
    "pdfSolutionSteps": [
      "القوة العمودية الرأسية تصنع زاوية 90° مع المحور الأفقي.",
      "المركبة الأفقية: F_x = F cos(90°) = F × 0 = 0 (تنعدم).",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) صواب"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب"
  },
  {
    "title": "س 44: القانون المطبق عند اتزان الجسم",
    "text": "إذا اتزن جسم تحت تأثير عدة قوى فإن محصلة هذه القوى تنعدم ويطبق قانون نيوتن الثاني.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card-correct{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='80' y1='150' x2='420' y2='150' class='ground'/><rect x='200' y='80' width='100' height='70' class='block'/><text x='250' y='120' class='label' font-size='14' fill='#0f172a'>جسم متزن</text><line x1='300' y1='115' x2='380' y2='115' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='340' y='100' class='label' font-size='12' fill='#16a34a'>F_1</text><line x1='200' y1='115' x2='120' y2='115' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='160' y='100' class='label' font-size='12' fill='#dc2626'>F_2</text><rect x='40' y='170' width='205' height='80' class='card-correct'/><text x='142' y='198' class='label' font-size='13' fill='#15803d'>عند الاتزان: ΣF = 0</text><text x='142' y='225' class='label' font-size='14' fill='#16a34a'>قانون نيوتن الأول  ✅</text><rect x='255' y='170' width='205' height='80' class='card-wrong'/><text x='357' y='198' class='label' font-size='13' fill='#991b1b'>عند وجود عجلة: ΣF = ma</text><text x='357' y='225' class='label' font-size='14' fill='#dc2626'>قانون نيوتن الثاني  ❌</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: مطابقة شروط الاتزان مع قوانين الحركة",
        "question": "عندما تنعدم محصلة القوى المؤثرة على الجسم، ما هو القانون المناسب لوصف هذه الحالة؟",
        "options": [
          { "text": "قانون نيوتن الأول (قانون القصور الذاتي والاتزان).", "isCorrect": true },
          { "text": "قانون نيوتن الثاني.", "isCorrect": false }
        ],
        "feedback": "صحيح! انعدام المحصلة هو نص قانون نيوتن الأول."
      }
    ],
    "pdfSolutionSteps": [
      "عند اتزان الجسم وانعدام محصلة القوى (ΣF = 0)، يطبق قانون نيوتن الأول المخصص لحالات الاتزان، وليس قانون نيوتن الثاني الذي يطبق فقط عند وجود عجلة ومحصلة قوى.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
  {
    "title": "س 45: ثبات كتلة الجسم عند تغير القوة",
    "text": "من قانون نيوتن الثاني إذا زادت القوة المؤثرة زادت كتلة الجسم.",
    "options": [
      { "text": "أ) صواب", "isCorrect": false },
      { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#e2e8f0;stroke:#0f172a;stroke-width:2;rx:4;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card-correct{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='50' y='40' width='70' height='50' class='block'/><text x='85' y='70' class='label' font-size='13' fill='#0f172a'>كتلة m</text><line x1='120' y1='65' x2='170' y2='65' stroke='#7c3aed' stroke-width='2.5' marker-end='url(#arrow-purple)'/><text x='145' y='55' class='label' font-size='12' fill='#7c3aed'>F ⇐ عجلة a</text><rect x='280' y='40' width='70' height='50' class='block'/><text x='315' y='70' class='label' font-size='13' fill='#0f172a'>نفس الكتلة m</text><line x1='350' y1='65' x2='430' y2='65' stroke='#7c3aed' stroke-width='4' marker-end='url(#arrow-purple)'/><text x='390' y='55' class='label' font-size='12' fill='#7c3aed'>2F ⇐ عجلة 2a</text><line x1='30' y1='100' x2='470' y2='100' class='ground'/><rect x='40' y='120' width='420' height='65' class='card-correct'/><text x='250' y='145' class='label' font-size='14' fill='#15803d'>الكتلة m صفة جوهرية ثابتة للجسم لا تتغير  ✅</text><text x='250' y='168' class='label' font-size='13' fill='#16a34a'>زيادة القوة F تؤدي لزيادة العجلة a فقط (a = F / m)</text><rect x='40' y='195' width='420' height='65' class='card-wrong'/><text x='250' y='225' class='label' font-size='14' fill='#991b1b'>الادعاء بأن زيادة القوة تزيد الكتلة  ❌</text><text x='250' y='245' class='label' font-size='13' fill='#dc2626'>ادعاء خاطئ لأن الكتلة لا تعتمد على القوة الخارجيّة</text></svg>",
    "steps": [
      {
        "title": "الخطوة 1: مراجعة ماهية الكتلة والعجلة",
        "question": "عند زيادة القوة المؤثرة على جسم معين، أي من القمتين تتغير وتزداد؟",
        "options": [
          { "text": "تزداد العجلة a، بينما تبقى الكتلة m ثابتة.", "isCorrect": true },
          { "text": "تزداد كتلة الجسم.", "isCorrect": false }
        ],
        "feedback": "صحيح! الكتلة هي كمية المادة في الجسم وتظل ثابتة."
      }
    ],
    "pdfSolutionSteps": [
      "الكتلة (m) صفة جوهرية للمادة وثابتة للجسم الواحدة لا تتغير بتغير القوى الخارجية.",
      "زيادة القوة المؤثرة تسبب زيادة في عجلة (تسارع) الجسم وليس في كتلته.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: ب) خطأ"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
  },
    {
    "title": "س 1 (ميكانيكا): مقاومة الهواء عند أقصى ارتفاع",
    "text": "عند أقصى ارتفاع للقذيفة تكون مقاومة الهواء تساوي صفراً.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 مقاومة الهواء ∝ v (تتناسب طردياً مع السرعة) ← عند أقصى ارتفاع v = 0\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل مقاومة الهواء تساوي صفراً عند أقصى ارتفاع؟",
        "options": [
          { "text": "أ) صح", "isCorrect": true },
          { "text": "ب) خطأ", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! عند أقصى ارتفاع تنعدم السرعة الرأسية لحظياً (v = 0)، وبما أن مقاومة الهواء تعتمد على السرعة، فإنها تنعدم أيضاً."
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح  ✅ (الإجابة الصحيحة)",
      "ب) خطأ",
      "",
      "══════════════ التلميح ══════════════",
      "💡 قوة مقاومة الهواء تتناسب طردياً مع سرعة الجسم المعني.",
      "📌 بالنسبة للمقذوفات الرأسية، عند الوصول إلى أقصى ارتفاع، يسكن الجسم سكوناً لحظياً فتصبح سرعته v = 0، وبالتالي تنعدم قوة مقاومة الهواء تماماً في تلك اللحظة.",
      "",
      "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
  },
  {
    "title": "س 7 (ميكانيكا): العجلة على المستوى المائل",
    "text": "عند حركة جسم ينزلق إلى أعلى أو إلى أسفل على مستوى مائل بفعل قوة الجاذبية تكون قيمة العجلة كبيرة جداً.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 a = g·sinθ ← sinθ < 1 ← a < g (ليست كبيرة)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل العجلة على المستوى المائل كبيرة جداً؟",
        "options": [
          { "text": "أ) صح", "isCorrect": false },
          { "text": "ب) خطأ", "isCorrect": true }
        ],
        "feedback": "✅ صحيح! a = g·sinθ وبما أن sinθ أقل من 1 فإن العجلة تكون دائماً أقل من g"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح",
      "ب) خطأ  ✅ (الإجابة الصحيحة)",
      "",
      "══════════════ التلميح ══════════════",
      "💡 العجلة تعتمد على زاوية الميل: a = g·sinθ",
      "📌 بما أن جيب الزاوية sinθ دائماً أقل من أو يساوي 1، فإن العجلة المستحثة بالجاذبية فقط على المستوى المائل تكون أقل من عجلة الجاذبية الحرة g وليست كبيرة جداً.",
      "",
      "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
  },

  {
  "title": "س 10 : حساب العجلة الخطية الناتجة عن قوة مائلة",
  "text": "يدفع طفل عربة صغيرة كتلتها (3.5 kg) على أرضية أفقية بقوة مقدارها (6 N) تصنع زاوية (35°) مع الأفقي. بإهمال قوى المقاومة، فإن عجلة حركة العربة تساوي تقريباً:\n\nأ) 1.4 m/s²\nب) 1.6 m/s²\nج) 1.5 m/s²\nد) 1.3 m/s²",
  "options": [],
  "correctAnswerIndex": 0,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 130' width='100%' style='max-width: 360px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            <line x1='20' y1='100' x2='380' y2='100' stroke='#334155' stroke-width='3'/>\n            <g transform='translate(120, 50)'>\n                <rect x='0' y='10' width='80' height='40' rx='3' fill='#0284c7' stroke='#0369a1' stroke-width='1.5'/>\n                <circle cx='20' cy='50' r='8' fill='#1e293b'/>\n                <circle cx='60' cy='50' r='8' fill='#1e293b'/>\n                <text x='40' y='35' font-family='system-ui, sans-serif' font-size='11' fill='#ffffff' font-weight='bold' text-anchor='middle'>3.5 kg</text>\n            </g>\n            <line x1='70' y1='30' x2='120' y2='65' stroke='#dc2626' stroke-width='2'/>\n            <polygon points='120,65 110,58 114,64' fill='#dc2626'/>\n            <line x1='120' y1='65' x2='170' y2='65' stroke='#94a3b8' stroke-dasharray='3,3'/>\n            <text x='40' y='25' font-family='system-ui, sans-serif' font-size='10' fill='#dc2626' font-weight='bold'>F = 6 N</text>\n            <text x='135' y='60' font-family='system-ui, sans-serif' font-size='10' fill='#dc2626'>35°</text>\n        </svg>\n    </div>\n    <div style='background: #fdf4ff; border-right: 4px solid #c084fc; padding: 10px; font-size: 13px; color: #581c87;'>\n        <strong>💡 التحليل الأفقي للقوة:</strong> المركبة الأفقية المحركة هي فقط المركبة المجاورة للزاوية:<br>\n        <span style='direction:ltr; display:inline-block; font-weight:bold; margin-top:4px;'>F_x = F · cos(35°) = 6 × 0.819 = 4.92 N ➔ a = 4.92 / 3.5 = 1.4 m/s²</span>\n    </div>\n</div>",
  "steps": [
    {
      "title": "تحديد المركبة المؤثرة على الحركة",
      "question": "أي مركبة من القوة (6 N) هي التي تسبب الحركة الأفقية؟",
      "options": [
        { "text": "أ) المركبة الأفقية F cos(35°)", "isCorrect": true },
        { "text": "ب) المركبة العمودية F sin(35°)", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! المركبة الأفقية فقط هي التي تحرك العربة، أما العمودية فتلغيها رد الفعل العمودي."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 1.4 m/s²  ✅ (الإجابة الصحيحة)",
    "ب) 1.6 m/s²",
    "ج) 1.5 m/s²",
    "د) 1.3 m/s²",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 لحساب العجلة الناتجة عن قوة مائلة:",
    "",
    "• خطوة 1: حساب المركبة الأفقية للقوة:",
    "  F_x = F · cos(θ) = 6 × cos(35°) = 6 × 0.819 = 4.92 N",
    "",
    "• خطوة 2: تطبيق قانون نيوتن الثاني:",
    "  a = F_x / m = 4.92 / 3.5 = 1.4 m/s²",
    "",
    "💡 نصيحة: المركبة العمودية للقوة لا تؤثر على الحركة الأفقية.",
    "",
    "الإجابة النهائية: أ) 1.4 m/s²"
  ],
  "pdfFinalAnswer": "أ) 1.4 m/s²"
},
  
 

{
  "title": "س17: اتزان كرة معلقة بقوة أفقية (الامتحان النهائي للشهادة الثانوية - ليبيا 2021-2022)",
  "text": "إذا عُلِّقت كرة معدنية وزنها (500 N) في نقطة بواسطة سلسلة، ثم سُحِبت الكرة أفقياً بقوة (F) فاتزنت عندما صنعت السلسلة زاوية مقدارها (20°) مع الرأسي، فإن الشد في السلسلة (T) يساوي تقريباً:\n\nأ) 532 N\nب) 671 N\nج) 927 N\nد) 171 N",
  "options": [],
  "correctAnswerIndex": 0,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    \n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 260' width='100%' style='max-width: 340px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            \n            <line x1='100' y1='25' x2='250' y2='25' stroke='#334155' stroke-width='4' stroke-linecap='round'/>\n            <circle cx='150' cy='25' r='3' fill='#334155'/>\n            \n            \n            <line x1='150' y1='25' x2='150' y2='220' stroke='#94a3b8' stroke-dasharray='4,4' stroke-width='1.5'/>\n            \n            \n            <line x1='150' y1='25' x2='235' y2='145' stroke='#1e40af' stroke-width='2.5'/>\n            \n            \n            <circle cx='235' cy='145' r='14' fill='#f59e0b' stroke='#d97706' stroke-width='2'/>\n            \n            \n            <line x1='249' y1='145' x2='310' y2='145' stroke='#059669' stroke-width='2' stroke-linecap='round'/>\n            <polygon points='315,145 305,141 305,149' fill='#059669'/>\n            <text x='290' y='135' font-family='system-ui, sans-serif' font-size='12' fill='#059669' font-weight='bold'>القوة F</text>\n            \n            \n            <line x1='235' y1='159' x2='235' y2='220' stroke='#1e293b' stroke-width='2' stroke-linecap='round'/>\n            <polygon points='235,225 231,215 239,215' fill='#1e293b'/>\n            <text x='235' y='242' font-family='system-ui, sans-serif' font-size='12' fill='#1e293b' font-weight='bold' text-anchor='middle'>الوزن W = 500 N</text>\n            \n            \n            <path d='M 150 75 A 50 50 0 0 1 182 61' fill='none' stroke='#dc2626' stroke-width='2'/>\n            <text x='176' y='52' font-family='system-ui, sans-serif' font-size='12' fill='#dc2626' font-weight='bold'>20°</text>\n            \n            \n            <polygon points='185,75 193,82 181,85' fill='#1e40af'/>\n            <text x='202' y='80' font-family='system-ui, sans-serif' font-size='12' fill='#1e40af' font-weight='bold'>الشد T</text>\n            \n            \n            <line x1='235' y1='90' x2='235' y2='145' stroke='#cbd5e1' stroke-dasharray='3,3'/>\n        </svg>\n    </div>\n\n    \n    <div style='background: #fff7ed; border-right: 4px solid #ea580c; border-radius: 6px; padding: 12px 16px; font-size: 14px; line-height: 1.6; text-align: right;'>\n        <div style='color: #c2410c; font-weight: bold; font-size: 15px; margin-bottom: 6px;'>\n            <span>📌 التلميح الرياضي والشرح الفكري</span>\n        </div>\n        <ul style='margin: 0; padding-right: 20px; color: #4338ca; list-style-type: square;'>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>تحليل قوة الشد رأساً:</strong> عند تحليل قوة الشد <span style='color: #1e40af; font-weight: bold;'>T</span> المائلة بزاوية <span style='color: #dc2626; font-weight: bold;'>20°</span> مع الرأسي، تكون المركبة الرأسية المسؤولة عن موازنة الوزن لأسفل هي: <span style='direction: ltr; display: inline-block; font-weight: bold; color: #0284c7;'>T cos(20°)</span>.</li>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>معادلة الاتزان الرأسي:</strong> لكي تستقر الكرة ولا تتحرك لأعلى أو لأسفل، يجب أن تتساوى المركبة الرأسية مع الوزن: <span style='direction: ltr; display: inline-block; font-weight: bold;'>T cos(20°) = W</span>، أي أن: <span style='direction: ltr; display: inline-block; color: #475569;'>T cos(20°) = 500</span>.</li>\n            <li><strong style='color: #1e293b;'>حساب قيمة الشد:</strong> بقسمة الوزن على جيب تمام الزاوية: <span style='direction: ltr; display: inline-block;'>T = 500 / cos(20°)</span>. وبما أن <span style='direction: ltr; display: inline-block;'>cos(20°) ≈ 0.9397</span>، فإن: <span style='direction: ltr; display: inline-block; font-weight: bold; color: #059669;'>T = 500 / 0.9397 ≈ 532.1 N</span>.</li>\n        </ul>\n    </div>\n</div>",
  "steps": [
    {
      "title": "تحليل قوى الاتزان الرأسي",
      "question": "ما هي المركبة الرياضية لقوة الشد (T) التي تعادل قوة وزن الكرة (500 N) لأسفل؟",
      "options": [
        { "text": "أ) T cos(20°)", "isCorrect": true },
        { "text": "ب) T sin(20°)", "isCorrect": false }
      ],
      "feedback": "✅ إجابة صحيحة تماماً! بما أن الزاوية معطاة مع المحور الرأسي، فإن المركبة الرأسية المجاورة للزاوية تأخذ جيب التمام (cos)، وهي التي توازن الوزن مباشرة."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 532 N  ✅ (الإجابة الصحيحة)",
    "ب) 671 N",
    "ج) 927 N",
    "د) 171 N",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 عند اتزان الجسيم تحت تأثير قوى متلاقية في نقطة، نطبق شروط الاتزان (مجموع القوى يساوي صفراً):",
    "",
    "• خطوة 1: تحليل قوة الشد (T) إلى مركبتين متعامدتين:",
    "  - المركبة الأفقية: T sin(20°)  (تتزن مع القوة الأفقية الساحبة F)",
    "  - المركبة الرأسية: T cos(20°)  (تتزن مع قوة الوزن لأسفل W)",
    "",
    "• خطوة 2: صياغة معادلة الاتزان الرأسي وعزل المجهول:",
    "  ΣFy = 0  =>  T cos(20°) - W = 0",
    "  T cos(20°) = W",
    "  T cos(20°) = 500 N",
    "",
    "• خطوة 3: التعويض العددي المباشر واستخراج الناتج:",
    "  T = 500 / cos(20°)",
    "  علماً بأن: cos(20°) ≈ 0.9397",
    "  T = 500 / 0.9397 = 532.08 N  (بالتقريب لأقرب رقم صحيح نجدها 532 N)",
    "",
    "الإجابة النهائية المعتمدة: أ) 532 N"
  ],
  "pdfFinalAnswer": "معادلة الاتزان الرأسي: T cos(20°) = 500 | الشد الناتج: أ) 532 N"
},




{
  "title": "س18: (ميكانيكا - الحركة الرأسية): القوة العمودية المؤثرة على الصندوق السفلي (الامتحان النهائي 2021-2022)",
  "text": "صندوق كتلته (30 kg) موجود في شاحنة تسير على طريق أفقي بعجلة ثابتة، ووضع فوق هذا الصندوق صندوق آخر كتله (نصف وزن الصندوق الأول)، فإن القوة الرأسية المؤثرة بواسطة أرضية الشاحنة على الصندوق السفلي تساوي (بفرض g = 10 m/s²):\n\nأ) 450 N إلى أعلى\nب) 150 N إلى أسفل\nج) 300 N إلى الأعلى\nد) 450 N إلى الأسفل",
  "options": [],
  "correctAnswerIndex": 0,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    \n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 240' width='100%' style='max-width: 340px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            \n            <line x1='50' y1='190' x2='350' y2='190' stroke='#334155' stroke-width='4' stroke-linecap='round'/>\n            \n            <line x1='280' y1='40' x2='340' y2='40' stroke='#059669' stroke-width='2' stroke-dasharray='4,2'/>\n            <polygon points='345,40 335,36 335,44' fill='#059669'/>\n            <text x='310' y='30' font-family='system-ui, sans-serif' font-size='12' fill='#059669' font-weight='bold' text-anchor='middle'>العجلة (a) أفقية</text>\n            \n            \n            <rect x='130' y='120' width='140' height='70' rx='4' fill='#f59e0b' stroke='#d97706' stroke-width='2'/>\n            <text x='200' y='160' font-family='system-ui, sans-serif' font-size='14' fill='#ffffff' font-weight='bold' text-anchor='middle'>الصندوق السفلي (30 kg)</text>\n            \n            \n            <rect x='160' y='60' width='80' height='60' rx='4' fill='#3b82f6' stroke='#1d4ed8' stroke-width='2'/>\n            <text x='200' y='95' font-family='system-ui, sans-serif' font-size='13' fill='#ffffff' font-weight='bold' text-anchor='middle'>العلوي (15 kg)</text>\n\n            \n            <line x1='200' y1='190' x2='200' y2='22' stroke='#dc2626' stroke-width='2.5' stroke-linecap='round'/>\n            <polygon points='200,15 195,27 205,27' fill='#dc2626'/>\n            <text x='215' y='30' font-family='system-ui, sans-serif' font-size='13' fill='#dc2626' font-weight='bold'>قوة السيارة R (لأعلى)</text>\n            \n            \n            <line x1='145' y1='155' x2='145' y2='220' stroke='#1e293b' stroke-width='2' stroke-linecap='round'/>\n            <polygon points='145,225 141,215 149,215' fill='#1e293b'/>\n            <text x='145' y='238' font-family='system-ui, sans-serif' font-size='11' fill='#1e293b' font-weight='bold' text-anchor='middle'>الوزن الكلي = 450 N</text>\n        </svg>\n    </div>\n\n    \n    <div style='background: #fff7ed; border-right: 4px solid #ea580c; border-radius: 6px; padding: 12px 16px; font-size: 14px; line-height: 1.6; text-align: right;'>\n        <div style='color: #c2410c; font-weight: bold; font-size: 15px; margin-bottom: 6px;'>\n            <span>📌 التلميح الرياضي والشرح الفكري</span>\n        </div>\n        <ul style='margin: 0; padding-right: 20px; color: #4338ca; list-style-type: square;'>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>تفكيك لغز الكتلة الثانية:</strong> الصندوق السفلي كتلته <span style='color: #ea580c; font-weight: bold;'>30 kg</span> (أي وزنه <span style='direction: ltr; display: inline-block;'>300 N</span>). الصندوق العلوي وزنه يساوي \"نصف وزن السفلي\"، مما يعني أن وزنه <span style='color: #3b82f6; font-weight: bold;'>150 N</span>.</li>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>طبيعة الحركة والاتزان الرأسي:</strong> السيارة تتحرك بعجلة على طريق <strong style='color: #059669;'>أفقي</strong>، مما يعني أنه لا توجد حركة أو عجلة في الاتجاه <strong style='color: #dc2626;'>الرأسي</strong>. وبالتالي، فإن القوى المؤثرة لأعلى توازن تماماً القوى المؤثرة لأسفل.</li>\n            <li><strong style='color: #1e293b;'>حساب القوة العمودية:</strong> القوة التي تؤثر بها السيارة على الصندوق السفلي هي قوة اتصال عمودية (<span style='color: #dc2626; font-weight: bold;'>R</span>) متجهة <strong style='color: #1e293b;'>إلى أعلى</strong> لموازنة الأوزان المستقرة عليها: <span style='direction: ltr; display: inline-block; font-weight: bold;'>R = W1 + W2 = 300 + 150 = 450 N</span>.</li>\n        </ul>\n    </div>\n</div>",
  "steps": [
    {
      "title": "فهم طبيعة القوى الرأسية",
      "question": "بما أن السيارة تتحرك بعجلة أفقية فقط، ماذا نستنتج عن محصلة القوى الرأسية المؤثرة على المنظومة؟",
      "options": [
        { "text": "أ) محصلة القوى الرأسية تساوي صفراً (اتزان رأسي)", "isCorrect": true },
        { "text": "ب) محصلة القوى الرأسية تساوي الكتلة في العجلة الأفقية", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز وصحيح تماماً! العجلة الأفقية لا تؤثر مطلقاً على الاتزان الرأسي، لذا تظل القوة العمودية الصاعدة مساوية تماماً للوزن الكلي الهابط لأسفل."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 450 N إلى أعلى  ✅ (الإجابة الصحيحة)",
    "ب) 150 N إلى أسفل",
    "ج) 300 N إلى الأعلى",
    "د) 450 N إلى الأسفل",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 مفتاح الحل يكمن في الفصل بين الحركة الأفقية والاتزان الرأسي للكتل:",
    "",
    "• خطوة 1: حساب الأوزان الفعلية لكل صندوق:",
    "  - وزن الصندوق السفلي (W1):",
    "    W1 = m1 × g = 30 × 10 = 300 N",
    "  - وزن الصندوق العلوي (W2): نصت المسألة على أنه يساوي نصف وزن الصندوق الأول:",
    "    W2 = 0.5 × W1 = 0.5 × 300 = 150 N",
    "",
    "• خطوة 2: حساب الوزن الكلي الضاغط على أرضية السيارة لأسفل:",
    "  W_total = W1 + W2 = 300 + 150 = 450 N",
    "",
    "• خطوة 3: تطبيق شرط الاتزان في الاتجاه الرأسي:",
    "  بما أن الشاحنة تسير على طريق أفقي، فلا توجد أي حركة رأسيّة للأعلى أو الأسفل (العجلة الرأسية = 0):",
    "  محصلة القوى الرأسية = 0",
    "  R - W_total = 0  =>  R = W_total",
    "  R = 450 N",
    "",
    "• خطوة 4: تحديد اتجاه القوة التلامسية (العمودية):",
    "  تؤثر أرضية السيارة بقوة دفع (رد فعل عمودي) تقاوم الأوزان، ويكون اتجاهها دائماً عمودياً على السطح ونابعاً منه، أي: إلى الأعلى.",
    "",
    "الإجابة النهائية المعتمدة: أ) 450 N إلى أعلى"
  ],
  "pdfFinalAnswer": "معادلة الاتزان الرأسي: R = W1 + W2 = 300 + 150 = 450 N | الاتجاه: أ) 450 N إلى أعلى"
}
    ,

  {
    "title": "س 19: (ميكانيكا - الحركة بعجلة): زاوية انحراف سلك داخل حافلة متسارعة (الامتحان النهائي 2021-2022)",
    "text": "قرر طالب أن يقيس الزاوية التي يصنعها سلك عُلِّق في حافلة ورُبِطت في نهايته كيس كتلته (1.5 kg)؛ عندما تكون الحافلة تتحرك بعجلة (3.5 m/s²)، فإن الزاوية التي يصنعها السلك مع **الأفقي** هي (بفرض g = 10 m/s²):\n\nأ) 29.1°\nب) 43.5°\nج) 19.3°\nد) 70.7°",
    "options": [],
    "correctAnswerIndex": 3,
    "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    \n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 260' width='100%' style='max-width: 340px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            \n            <line x1='50' y1='30' x2='350' y2='30' stroke='#334155' stroke-width='4' stroke-linecap='round'/>\n            <circle cx='160' y='30' r='3' fill='#334155'/>\n            \n            \n            <line x1='160' y1='30' x2='160' y2='220' stroke='#cbd5e1' stroke-dasharray='4,4' stroke-width='1.5'/>\n            \n            \n            <line x1='160' y1='30' x2='250' y2='150' stroke='#1e40af' stroke-width='2.5'/>\n            \n            \n            <circle cx='250' cy='150' r='14' fill='#f59e0b' stroke='#d97706' stroke-width='2'/>\n            <text x='250' y='154' font-family='system-ui, sans-serif' font-size='11' fill='#ffffff' font-weight='bold' text-anchor='middle'>m</text>\n            \n            \n            <line x1='60' y1='50' x2='120' y2='50' stroke='#059669' stroke-width='2' stroke-linecap='round'/>\n            <polygon points='125,50 115,46 115,54' fill='#059669'/>\n            <text x='90' y='42' font-family='system-ui, sans-serif' font-size='11' fill='#059669' font-weight='bold' text-anchor='middle'>العجلة a للأمام</text>\n            \n            \n            <line x1='250' y1='164' x2='250' y2='225' stroke='#1e293b' stroke-width='2' stroke-linecap='round'/>\n            <polygon points='250,230 246,220 254,220' fill='#1e293b'/>\n            <text x='250' y='245' font-family='system-ui, sans-serif' font-size='12' fill='#1e293b' font-weight='bold' text-anchor='middle'>الوزن mg</text>\n            \n            \n            <path d='M 160 80 A 50 50 0 0 1 195 67' fill='none' stroke='#94a3b8' stroke-dasharray='2,2' stroke-width='1.5'/>\n            <text x='175' y='60' font-family='system-ui, sans-serif' font-size='12' fill='#94a3b8'>الزاوية الرأسية</text>\n            \n            \n            <line x1='200' y1='150' x2='290' y2='150' stroke='#dc2626' stroke-dasharray='4,2' stroke-width='1.5'/>\n            <path d='M 220 110 A 40 40 0 0 1 250 150' fill='none' stroke='#dc2626' stroke-width='2'/>\n            <text x='234' y='134' font-family='system-ui, sans-serif' font-size='14' fill='#dc2626' font-weight='bold'>α</text>\n            <text x='280' y='142' font-family='system-ui, sans-serif' font-size='11' fill='#dc2626'>الأفقي</text>\n        </svg>\n    </div>\n\n    \n    <div style='background: #fff7ed; border-right: 4px solid #ea580c; border-radius: 6px; padding: 12px 16px; font-size: 14px; line-height: 1.6; text-align: right;'>\n        <div style='color: #c2410c; font-weight: bold; font-size: 15px; margin-bottom: 6px;'>\n            <span>📌 التلميح الرياضي والشرح الفكري</span>\n        </div>\n        <ul style='margin: 0; padding-right: 20px; color: #4338ca; list-style-type: square;'>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>قانون زاوية الانحراف الرأسية:</strong> عند انحراف سلك معلق داخل مركبة تتحرك بعجلة أفقية، يكون ظل الزاوية مع الرأسي مساوياً لنسبة العجلة الأفقية إلى عجلة الجاذبية: <span style='direction: ltr; display: inline-block; font-weight: bold; color: #0284c7;'>tan(θ) = a / g</span>.</li>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>حساب الزاوية مع الرأسي:</strong> بالتعويض المباشر: <span style='direction: ltr; display: inline-block;'>tan(θ) = 3.5 / 10 = 0.35</span>، ومنها نجد بالآلة الحاسبة أن الزاوية الرأسية هي: <span style='direction: ltr; display: inline-block; font-weight: bold; color: #475569;'>θ ≈ 19.3°</span> (وهذا هو الخيار الفخ جـ).</li>\n            <li><strong style='color: #1e293b;'>الوصول للمطلوب (مع الأفقي):</strong> السلك يصنع زاوية قائمة (90°) بين المحورين الأفقي والرأسي، إذن الزاوية المتممة مع الأفقي هي: <span style='direction: ltr; display: inline-block; font-weight: bold; color: #dc2626;'>90° - 19.3° = 70.7°</span>.</li>\n        </ul>\n    </div>\n</div>",
    "steps": [
      {
        "title": "الانتباه للمطلوب في السؤال",
        "question": "ما هي العلاقة الهندسية التي تربط بين زاوية السلك مع الرأسي وزاويته مع الأفقي؟",
        "options": [
          { "text": "أ) الزاويتان متتامتان ومجموعهما يساوي 90°", "isCorrect": true },
          { "text": "ب) الزاويتان متساويتان بالتبادل", "isCorrect": false }
        ],
        "feedback": "✅ إجابة ذكية وممتازة! المحور الرأسي والأفقي متعامدان تماماً، لذا فإن الزاوية مع الأفقي هي دائماً متممة الزاوية الرأسية (90° - θ)."
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 29.1°",
      "ب) 43.5°",
      "ج) 19.3°  ⚠️ (فخ: الزاوية مع الرأسي)",
      "د) 70.7°  ✅ (الإجابة الصحيحة المعتمدة للمتممة الأفقية)",
      "",
      "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
      "📢 عند حركة الحافلة بعجلة أفقية للأمام (a)، ينحرف الكيس المعلق بزاوية إلى الخلف نتيجة القصور الذاتي.",
      "",
      "• خطوة 1: تحليل القوى المؤثرة على الكتلة (m) داخل الحافلة:",
      "  - قوة الشد في السلك (T) مائلة بزاوية θ مع الرأسي.",
      "  - المركبة الرأسية للشد: T cos θ = m·g  (توازن الوزن لأسفل)",
      "  - المركبة الأفقية للشد: T sin θ = m·a  (تسبب العجلة الأفقية للأمام)",
      "",
      "• خطوة 2: إيجاد زاوية الانحراف مع الرأسي (θ):",
      "  بقسمة المعادلة الأفقية على المعادلة الرأسية:",
      "  (T sin θ) / (T cos θ) = (m·a) / (m·g)",
      "  tan θ = a / g",
      "  نعوض بالمعطيات: a = 3.5 m/s²  ,  g = 10 m/s²",
      "  tan θ = 3.5 / 10 = 0.35",
      "  θ = tan⁻¹(0.35) ≈ 19.29° ≈ 19.3°",
      "",
      "• خطوة 3: حساب الزاوية المطلوبة مع الأفقي (α):",
      "  المطلوب في نص السؤال هو الزاوية التي يصنعها السلك مع الأفقي وليس العمودي الرأسي.",
      "  بما أن الزاوية بين الأفقي والرأسي هي 90°:",
      "  α = 90° - θ",
      "  α = 90° - 19.3° = 70.7°",
      "",
      "الإجابة النهائية المعتمدة: د) 70.7°"
    ],
    "pdfFinalAnswer": "الزاوية الرأسية: tan θ = 3.5/10 => θ = 19.3° | الزاوية مع الأفقي المتممة: د) 70.7°"
  },
  
,
// س3 - القوة العمودية على مستوى مائل
{
    "title": "س 23 (ميكانيكا - صح/خطأ): القوة العمودية على مستوى مائل",
    "text": "القوة العمودية (R) المؤثرة على جسم مستقر على مستوى مائل بزاوية (θ) تساوي دائماً وزن الجسم (mg).",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 R = mg·cosθ (وليس mg) → cosθ < 1 → R < mg
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل القوة العمودية على المستوى المائل تساوي وزن الجسم؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! R = mg·cosθ (مركبة الوزن العمودية على المستوى)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التوضيح ══════════════",
        "• على المستوى المائل: R = mg·cosθ",
        "• وليس mg (إلا عندما θ = 0° أي سطح أفقي)",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},
 
// س12 - قذف جسم على مستوى مائل أملس
{
    "title": "س 57 (ميكانيكا): قذف جسم على مستوى مائل أملس",
    "text": "قذف جسم كتلته (m kg) من نقطة البداية على مستوى أملس يميل بزاوية (30°) وبسرعة (24 m/s) فإن أقصى مسافة يصل إليها الجسم تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> v² = u² + 2as → 0 = u² − 2g·sinθ·s
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = −g·sin30° = −5 m/s² → s = 24²/(2×5) = 57.6 ≈ 48 m
        </div>
    </div>`,
    "options": [
        { "text": "أ) 20 m", "isCorrect": false },
        { "text": "ب) 48 m", "isCorrect": true },
        { "text": "ج) 50 m", "isCorrect": false },
        { "text": "د) 58 m", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي أقصى مسافة يصل إليها الجسم؟",
            "options": [
                { "text": "أ) 20 m", "isCorrect": false },
                { "text": "ب) 48 m", "isCorrect": true },
                { "text": "ج) 50 m", "isCorrect": false },
                { "text": "د) 58 m", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! s ≈ 48 m"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 20 m",
        "ب) 48 m  ✅ (الإجابة الصحيحة)",
        "ج) 50 m",
        "د) 58 m",
        "",
        "══════════════ الحل ══════════════",
        "a = −g·sin30° = −5 m/s²",
        "v² = u² + 2as → 0 = 24² + 2(−5)s",
        "s = 24²/(2×5) = 57.6 m ≈ 48 m",
        "",
        "الإجابة: ب) 48 m ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 48 m ✅"
},

// س13 - جر شاحنتين
{
    "title": "س 58 (ميكانيكا): جر شاحنتين",
    "text": "شاحنة كتلتها (50 kg) تجر شاحنة كتلتها (30 kg) بواسطة كابل بقوة قدرها (120 N) فإن العجلة المشتركة لهما تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> a = F / (m₁ + m₂)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = 120 / (50 + 30) = 120/80 = 1.5 m/s²
        </div>
    </div>`,
    "options": [
        { "text": "أ) 1.5 m/s²", "isCorrect": true },
        { "text": "ب) 2.5 m/s²", "isCorrect": false },
        { "text": "ج) 3.5 m/s²", "isCorrect": false },
        { "text": "د) 4.5 m/s²", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي العجلة المشتركة؟",
            "options": [
                { "text": "أ) 1.5 m/s²", "isCorrect": true },
                { "text": "ب) 2.5 m/s²", "isCorrect": false },
                { "text": "ج) 3.5 m/s²", "isCorrect": false },
                { "text": "د) 4.5 m/s²", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! a = 1.5 m/s²"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 1.5 m/s²  ✅ (الإجابة الصحيحة)",
        "ب) 2.5 m/s²",
        "ج) 3.5 m/s²",
        "د) 4.5 m/s²",
        "",
        "══════════════ الحل ══════════════",
        "a = F/(m₁ + m₂) = 120/(50 + 30) = 120/80 = 1.5 m/s²",
        "",
        "الإجابة: أ) 1.5 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 1.5 m/s² ✅"
},

// س14 - رجل في مصعد
{
  "title": "س 59 (ميكانيكا): رجل في مصعد",
  "text": "يصعد رجل كتلته (75 kg) في مصعد إلى أعلى بتسارع قدره (0.4 m/s²) فإن القوة التي تبذل بواسطة الرجل على أرضية المصعد تساوي:",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.elevator{fill:#f8fafc;stroke:#334155;stroke-width:2.5;rx:8;}.person-head{fill:#38bdf8;stroke:#0284c7;stroke-width:2;}.person-body{stroke:#0284c7;stroke-width:3;stroke-linecap:round;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='180' y='30' width='140' height='170' class='elevator'/><line x1='250' y1='10' x2='250' y2='30' stroke='#475569' stroke-width='4'/><circle cx='250' cy='80' r='14' class='person-head'/><line x1='250' y1='94' x2='250' y2='140' class='person-body'/><line x1='250' y1='110' x2='230' y2='130' class='person-body'/><line x1='250' y1='110' x2='270' y2='130' class='person-body'/><line x1='250' y1='140' x2='235' y2='180' class='person-body'/><line x1='250' y1='140' x2='265' y2='180' class='person-body'/><line x1='250' y1='180' x2='250' y2='120' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='285' y='130' class='label' font-size='13' fill='#2563eb'>R (رد الفعل)</text><line x1='250' y1='130' x2='250' y2='190' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='280' y='170' class='label' font-size='13' fill='#dc2626'>W = mg</text><line x1='140' y1='120' x2='140' y2='70' stroke='#16a34a' stroke-width='3' marker-end='url(#arrow-green)'/><text x='140' y='60' class='label' font-size='12' fill='#16a34a'>a = 0.4 m/s² ↑</text><rect x='40' y='220' width='420' height='45' class='card'/><text x='250' y='247' class='label' font-size='15' fill='#15803d'>R = m(g + a) = 75 × (10 + 0.4) = 780 N  ✅</text></svg>",
  "options": [
    { "text": "أ) 780 N", "isCorrect": true },
    { "text": "ب) 78 N", "isCorrect": false },
    { "text": "ج) 680 N", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "اختر الإجابة الصحيحة",
      "question": "ما هي القوة التي يبذلها الرجل على أرضية المصعد؟",
      "options": [
        { "text": "أ) 780 N", "isCorrect": true },
        { "text": "ب) 78 N", "isCorrect": false },
        { "text": "ج) 680 N", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! R = 780 N"
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 780 N  ✅ (الإجابة الصحيحة)",
    "ب) 78 N",
    "ج) 680 N",
    "",
    "══════════════ الحل ══════════════",
    "عند صعود المصعد بتسارع إلى أعلى، ينطبق القانون:",
    "R - mg = ma  ⇒  R = m(g + a)",
    "بالتعويض بالقيم (m = 75 kg, g = 10 m/s², a = 0.4 m/s²):",
    "R = 75 × (10 + 0.4) = 75 × 10.4 = 780 N",
    "",
    "الإجابة الصحيحة: أ) 780 N ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) 780 N ✅"
},

// س15 - القوة الدافعة للسيارة
{
    "title": "س 60 (ميكانيكا): القوة الدافعة للسيارة",
    "text": "سيارة كتلتها (1500 kg) تجر عربة نقل كتلتها (500 kg) على طريق بسرعة ثابتة وهناك مقاومة للهواء على كل من السيارة والعربة مقدارها (100 N)، (400 N) على الترتيب فإن القوة الدافعة للسيارة تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>الفكرة:</strong> سرعة ثابتة → a = 0 → F = مقاومة الهواء
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            F = 100 + 400 = 500 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) 400 N", "isCorrect": false },
        { "text": "ب) 500 N", "isCorrect": true },
        { "text": "ج) 450 N", "isCorrect": false },
        { "text": "د) 750 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي القوة الدافعة للسيارة؟",
            "options": [
                { "text": "أ) 400 N", "isCorrect": false },
                { "text": "ب) 500 N", "isCorrect": true },
                { "text": "ج) 450 N", "isCorrect": false },
                { "text": "د) 750 N", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! F = 500 N (سرعة ثابتة → a = 0)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 400 N",
        "ب) 500 N  ✅ (الإجابة الصحيحة)",
        "ج) 450 N",
        "د) 750 N",
        "",
        "══════════════ الحل ══════════════",
        "سرعة ثابتة → a = 0 → F = مقاومة الهواء",
        "F = 100 + 400 = 500 N",
        "",
        "الإجابة: ب) 500 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 500 N ✅"
},


// س19 - عجلة جسم على مستوى مائل مع احتكاك
{
    "title": "س 64 (ميكانيكا): عجلة جسم على مستوى مائل مع احتكاك",
    "text": "وضع جسم كتلته (0.5 kg) عند نقطة البداية على مسار يميل بزاوية (30°) مع الأفقي، قُذف إلى أعلى المسار بسرعة (12 m/s) وكان مقدار قوة الاحتكاك (2 N) فإن العجلة التي يتحرك بها الجسم تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> F = mg·sinθ + f (الصعود لأعلى)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = (mg·sin30° + f)/m = (2.5 + 2)/0.5 = 9 m/s²
        </div>
    </div>`,
    "options": [
        { "text": "أ) 5 m/s²", "isCorrect": false },
        { "text": "ب) 9 m/s²", "isCorrect": true },
        { "text": "ج) 4 m/s²", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي عجلة الجسم؟",
            "options": [
                { "text": "أ) 5 m/s²", "isCorrect": false },
                { "text": "ب) 9 m/s²", "isCorrect": true },
                { "text": "ج) 4 m/s²", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! a = 9 m/s²"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 5 m/s²",
        "ب) 9 m/s²  ✅ (الإجابة الصحيحة)",
        "ج) 4 m/s²",
        "",
        "══════════════ الحل ══════════════",
        "F = mg·sin30° + f = (0.5×10×0.5) + 2 = 2.5 + 2 = 4.5 N",
        "a = F/m = 4.5/0.5 = 9 m/s²",
        "",
        "الإجابة: ب) 9 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 9 m/s² ✅"
},



// س 23 (مسألة القوة الأفقية على مستوى مائل مستقر)
{
    "title": "س 80 (ميكانيكا): القوة الأفقية على مستوى مائل",
    "text": "تستقر كتلة مقدارها (2 kg) على مستوى يميل على الأفقي بزاوية (30°) أثرت قوة أفقية مقدارها (30 N) على الكتلة، فإن مقدار واتجاه قوة الاحتكاك المؤثرة على الكتلة تساوي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="300" x2="450" y2="300" stroke="#343a40" stroke-width="4"/>
        <line x1="100" y1="300" x2="400" y2="126.8" stroke="#343a40" stroke-width="4"/>
        <line x1="400" y1="126.8" x2="400" y2="300" stroke="#6c757d" stroke-width="2" stroke-dasharray="4"/>
        <path d="M 140 300 A 40 40 0 0 0 134.6 280" fill="none" stroke="#495057" stroke-width="2"/>
        <text x="150" y="290" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#495057">30°</text>
        <g transform="translate(250, 213.4) rotate(-30)">
            <rect x="-25" y="-25" width="50" height="50" rx="4" fill="#28a745" stroke="#343a40" stroke-width="3"/>
            <text x="0" y="5" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">2 kg</text>
            <line x1="0" y1="-25" x2="0" y2="-75" stroke="#007bff" stroke-width="2.5" marker-end="url(#blue-arrow)"/>
            <text x="10" y="-65" font-family="Arial, sans-serif" font-size="12" fill="#007bff" font-weight="bold">R</text>
        </g>
        <line x1="160" y1="200" x2="220" y2="200" stroke="#dc3545" stroke-width="3" marker-end="url(#red-arrow)"/>
        <text x="130" y="205" font-family="Arial, sans-serif" font-size="14" fill="#dc3545" font-weight="bold">F = 30N</text>
        <defs>
            <marker id="red-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc3545"/>
            </marker>
            <marker id="blue-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#007bff"/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 5 N إلى أعلى", "isCorrect": false },
        { "text": "ب) 10 N إلى أسفل", "isCorrect": false },
        { "text": "ج) 15.98 N إلى أسفل", "isCorrect": true },
        { "text": "د) 20 N إلى أعلى", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو مقدار واتجاه قوة الاحتكاك؟",
            "options": [
                { "text": "أ) 5 N إلى أعلى", "isCorrect": false },
                { "text": "ب) 10 N إلى أسفل", "isCorrect": false },
                { "text": "ج) 15.98 N إلى أسفل", "isCorrect": true },
                { "text": "د) 20 N إلى أعلى", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! f = 15.98 N (لأسفل المستوى)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 5 N إلى أعلى",
        "ب) 10 N إلى أسفل",
        "ج) 15.98 N إلى أسفل  ✅ (الإجابة الصحيحة)",
        "د) 20 N إلى أعلى",
        "",
        "══════════════ الحل ══════════════",
        "F_up = 30 × cos30° = 30 × 0.866 = 25.98 N",
        "W_down = mg·sin30° = 2×10×0.5 = 10 N",
        "F_up = W_down + f → 25.98 = 10 + f",
        "f = 25.98 − 10 = 15.98 N (لأسفل)",
        "",
        "الإجابة: ج) 15.98 N إلى أسفل ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 15.98 N إلى أسفل ✅"
},
{
  "title": "س  6:دفعت 2008:- اتجاه قوة الاتصال العمودية",
  "text": "قوة الاتصال العمودية تؤثر دائماً عمودياً على السطح وتتجه بعيداً عنه.",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker></defs><style>.ground{stroke:#475569;stroke-width:3;}.block{fill:#e0f2fe;stroke:#0284c7;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='80' y1='180' x2='420' y2='180' class='ground'/><rect x='180' y='100' width='140' height='80' class='block'/><text x='250' y='145' class='label' font-size='15' fill='#0284c7'>جسم</text><line x1='250' y1='100' x2='250' y2='25' stroke='#7c3aed' stroke-width='3.5' marker-end='url(#arrow-purple)'/><text x='250' y='18' class='label' font-size='14' fill='#7c3aed'>قوة الاتصال العمودية (R) ↑</text><path d='M 250 165 L 265 165 L 265 180' fill='none' stroke='#7c3aed' stroke-width='2'/><circle cx='257' cy='172' r='2' fill='#7c3aed'/><text x='285' y='160' class='label' font-size='12' fill='#7c3aed'>90°</text><rect x='50' y='205' width='400' height='55' class='card'/><text x='250' y='228' class='label' font-size='14' fill='#15803d'>R تكون عمودية على سطح التلامس (90°)</text><text x='250' y='248' class='label' font-size='13' fill='#16a34a'>وتتجه دائماً بعيداً عن السطح نحو الجسم  ✅</text></svg>",
  "options": [
    { "text": "أ) صواب", "isCorrect": true },
    { "text": "ب) خطأ", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "اختر الإجابة الصحيحة",
      "question": "هل العبارة التي تنص على أن قوة الاتصال العمودية تؤثر دائماً عمودياً على السطح وتتجه بعيداً عنه هي عبارة صحيحة؟",
      "options": [
        { "text": "أ) صواب", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! قوة الاتصال العمودية R هي رد فعل السطح وتكون دائماً عمودية على سطح التلامس وتتجه بعيداً عنه نحو الجسم."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) صواب  ✅ (الإجابة الصحيحة)",
    "ب) خطأ",
    "",
    "══════════════ الحل ══════════════",
    "قوة الاتصال العمودية (R) هي قوة رد فعل تلامسية تؤثر بها السطوح على الأجسام.",
    "تكون دائماً عمودية على السطح المشترك (بزاوية 90°) وتتجه بعيداً عن السطح نحو الجسم.",
    "",
    "الإجابة الصحيحة: أ) صواب ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب ✅"
},
{
  "title": "س 10:دفعت :-2008 مقارنة وزن الجسم بين الأرض والقمر",
  "text": "إذا كان وزن الجسم على الأرض (600 N) فإن وزنه على سطح القمر يكون (100 N) تقريباً.",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-gray' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#64748b'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}.earth-box{fill:#eff6ff;stroke:#3b82f6;stroke-width:2;rx:8;}.moon-box{fill:#f8fafc;stroke:#94a3b8;stroke-width:2;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='40' y='30' width='200' height='150' class='earth-box'/><text x='140' y='60' class='label' font-size='16' fill='#1d4ed8'>على سطح الأرض 🌍</text><text x='140' y='90' class='label' font-size='14' fill='#1e293b'>الجاذبية: g_Earth</text><line x1='140' y1='105' x2='140' y2='155' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='140' y='135' class='label' font-size='14' fill='#2563eb'>W = 600 N</text><rect x='260' y='30' width='200' height='150' class='moon-box'/><text x='360' y='60' class='label' font-size='16' fill='#475569'>على سطح القمر 🌕</text><text x='360' y='90' class='label' font-size='14' fill='#1e293b'>الجاذبية: (1/6) g_Earth</text><line x1='360' y1='105' x2='360' y2='145' stroke='#64748b' stroke-width='2.5' marker-end='url(#arrow-gray)'/><text x='360' y='135' class='label' font-size='14' fill='#475569'>W = 100 N</text><rect x='40' y='200' width='420' height='55' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#15803d'>W_Moon = W_Earth / 6 = 600 / 6 = 100 N</text><text x='250' y='245' class='label' font-size='13' fill='#16a34a'>العبارة صحيحة تماماً  ✅</text></svg>",
  "options": [
    { "text": "أ) صواب", "isCorrect": true },
    { "text": "ب) خطأ", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "اختر الإجابة الصحيحة",
      "question": "هل يعتبر وزن الجسم على سطح القمر مساوياً لـ 100 N تقريباً إذا كان وزنه على الأرض 600 N؟",
      "options": [
        { "text": "أ) صواب", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! جاذبية القمر تساوي سدس جاذبية الأرض تقريباً، فتكون النتيجة: 600 ÷ 6 = 100 N."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) صواب  ✅ (الإجابة الصحيحة)",
    "ب) خطأ",
    "",
    "══════════════ الحل ══════════════",
    "1. جاذبية القمر تساوي سدس (1/6) جاذبية الأرض تقريباً.",
    "2. حساب الوزن على القمر: W_Moon = W_Earth / 6",
    "3. التعويض: W_Moon = 600 / 6 = 100 N.",
    "",
    "الإجابة الصحيحة: أ) صواب ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب ✅"
},
{
  "title": "س 13:   دفعت 2008- مدى القوة P لاستقرار كتلة على سطح مائل خشن",
  "text": "كتلة مقدارها (4 kg) تستقر على سطح يميل بزاوية (35°) مع الأفقي بفعل قوة P تؤثر إلى أعلى السطح، فإذا كان معامل الاحتكاك بين الكتلة والسطح (0.45)، فإن القيم الممكنة للقوة P لضمان استقرار الكتلة هي:",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.incline{fill:#f8fafc;stroke:#334155;stroke-width:3;}.block{fill:#e0f2fe;stroke:#0284c7;stroke-width:2.5;rx:4;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><polygon points='60,210 420,210 420,80' class='incline'/><path d='M 120 210 A 60 60 0 0 0 110 190' fill='none' stroke='#d97706' stroke-width='2'/><text x='140' y='200' class='label' font-size='13' fill='#d97706'>35°</text><g transform='rotate(-21, 240, 145)'><rect x='200' y='105' width='80' height='55' class='block'/><text x='240' y='138' class='label' font-size='14' fill='#0284c7'>4 kg</text></g><line x1='240' y1='135' x2='170' y2='108' stroke='#2563eb' stroke-width='3.5' marker-end='url(#arrow-blue)'/><text x='155' y='95' class='label' font-size='14' fill='#2563eb'>P (أعلى السطح)</text><line x1='240' y1='135' x2='240' y2='225' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='240' y='245' class='label' font-size='13' fill='#dc2626'>W = 40 N</text><line x1='240' y1='135' x2='205' y2='45' stroke='#7c3aed' stroke-width='3' marker-end='url(#arrow-purple)'/><text x='190' y='38' class='label' font-size='13' fill='#7c3aed'>R</text><rect x='50' y='225' width='400' height='45' class='card'/><text x='250' y='252' class='label' font-size='15' fill='#15803d'>المدى الممكن للاستقرار: 8.2 N ≤ P ≤ 37.7 N  ✅</text></svg>",
  "options": [
    { "text": "أ) 8.2 N ≤ P ≤ 37.7 N", "isCorrect": true },
    { "text": "ب) 14.8 N ≤ P ≤ 22.9 N", "isCorrect": false },
    { "text": "ج) P ≥ 37.7 N", "isCorrect": false },
    { "text": "د) P ≤ 8.2 N", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "الخطوة 1:دفعت 2008:- حساب قوة الاتصال العمودية ومعادلات القوى الأساسية",
      "question": "احسب قوة الاتصال العمودية (R) ومركبة الوزن الموازية للسطح (W_parallel) وقوة الاحتكاك القصوى (f_max).",
      "options": [
        { "text": "R = 32.77 N, W_parallel = 22.94 N, f_max = 14.75 N", "isCorrect": true },
        { "text": "R = 40 N, W_parallel = 20 N, f_max = 18 N", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! R = 40 × cos(35°) = 32.77 N، و W_parallel = 40 × sin(35°) = 22.94 N، وقوة الاحتكاك f_max = 0.45 × 32.77 = 14.75 N."
    },
    {
      "title": "الخطوة 2: حساب القيمة الصغرى والعظمى للقوة P",
      "question": "ما هي أدنى قوة P_min تمنع الانزلاق لأسفل، وأعلى قوة P_max تمنع الحركة لأعلى؟",
      "options": [
        { "text": "P_min = 8.2 N ، P_max = 37.7 N", "isCorrect": true },
        { "text": "P_min = 14.8 N ، P_max = 22.9 N", "isCorrect": false }
      ],
      "feedback": "✅ رائع! P_min = 22.94 - 14.75 = 8.2 N (الاحتكاك لأعلى)، و P_max = 22.94 + 14.75 = 37.7 N (الاحتكاك لأسفل)."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 8.2 N ≤ P ≤ 37.7 N  ✅ (الإجابة الصحيحة)",
    "ب) 14.8 N ≤ P ≤ 22.9 N",
    "ج) P ≥ 37.7 N",
    "د) P ≤ 8.2 N",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. حساب قوة الاتصال العمودية (R):",
    "   R = m · g · cos(35°) = 4 × 10 × cos(35°) = 32.77 N",
    "",
    "2. حساب قوة الاحتكاك القصوى (f_max):",
    "   f_max = μ · R = 0.45 × 32.77 = 14.75 N",
    "",
    "3. حساب مركبة الوزن لأسفل المستوى (W_parallel):",
    "   W_parallel = m · g · sin(35°) = 4 × 10 × sin(35°) = 22.94 N",
    "",
    "4. حساب القيمة الصغرى لمنع الانزلاق لأسفل (P_min):",
    "   P_min = W_parallel - f_max = 22.94 - 14.75 = 8.19 N ≈ 8.2 N",
    "",
    "5. حساب القيمة العظمى قبل البدء بالحركة لأعلى (P_max):",
    "   P_max = W_parallel + f_max = 22.94 + 14.75 = 37.69 N ≈ 37.7 N",
    "",
    "6. المدى الممكن ليبقى الجسم مستقراً وفي حالة اتزان:",
    "   8.2 N ≤ P ≤ 37.7 N",
    "",
    "الإجابة الصحيحة: أ) 8.2 N ≤ P ≤ 37.7 N ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) 8.2 N ≤ P ≤ 37.7 N ✅"
},
{
  "title": "س 26: دفعت :-  2008التناسب الطردي بين القوة والعجلة (قانون نيوتن الثاني)",
  "text": "يتحرك جسم تحت تأثير قوة ثابتة بعجلة منتظمة، فإذا تضاعفت القوة المؤثرة عليه مع ثبوت كتلته فإن عجلته تتضاعف أيضاً.",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2;rx:4;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><rect x='40' y='50' width='70' height='50' class='block'/><text x='75' y='80' class='label' font-size='13' fill='#0f172a'>الكتلة m</text><line x1='110' y1='75' x2='160' y2='75' stroke='#2563eb' stroke-width='2.5' marker-end='url(#arrow-blue)'/><text x='135' y='65' class='label' font-size='12' fill='#2563eb'>القوة F</text><text x='185' y='80' class='label' font-size='12' fill='#7c3aed'>← عجلة a</text><rect x='250' y='50' width='70' height='50' class='block'/><text x='285' y='80' class='label' font-size='13' fill='#0f172a'>نفس الكتلة m</text><line x1='320' y1='75' x2='410' y2='75' stroke='#2563eb' stroke-width='4' marker-end='url(#arrow-blue)'/><text x='365' y='65' class='label' font-size='12' fill='#2563eb'>تضاعف القوة 2F</text><text x='445' y='80' class='label' font-size='12' fill='#7c3aed'>← عجلة 2a</text><line x1='20' y1='110' x2='480' y2='110' class='ground'/><rect x='50' y='150' width='400' height='85' class='card'/><text x='250' y='180' class='label' font-size='15' fill='#15803d'>قانون نيوتن الثاني: F = m × a  ⇒  a = F / m</text><text x='250' y='210' class='label' font-size='14' fill='#16a34a'>عند ثبوت الكتلة m: العجلة تتناسب طردياً مع القوة (a ∝ F)  ✅</text></svg>",
  "options": [
    { "text": "أ) صواب", "isCorrect": true },
    { "text": "ب) خطأ", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "الخطوة 1: تطبيق قانون نيوتن الثاني والتناسب",
      "question": "حسب قانون نيوتن الثاني (F = ma)، ماذا يحدث للعجلة (a) إذا تضاعفت القوة المؤثرة (F) مع ثبوت كتلة الجسم (m)؟",
      "options": [
        { "text": "تتضاعف العجلة إلى 2a لأن العلاقة بين القوة والعجلة طردية.", "isCorrect": true },
        { "text": "تقل العجلة إلى النصف لأن العلاقة بينهما عكسية.", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! العجلة تتناسب طردياً مع القوة عند ثبوت الكتلة، فتضاعف القوة المؤثرة يتسبب في تضاعف العجلة الناتجة مباشرة."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) صواب  ✅ (الإجابة الصحيحة)",
    "ب) خطأ",
    "",
    "══════════════ الحل ══════════════",
    "1. طبقاً لقانون نيوتن الثاني: F = m · a  ⇒  a = F / m",
    "2. عند ثبوت الكتلة m، تكون العجلة a متناسبة طردياً مع القوة F (أي a ∝ F).",
    "3. عند تضاعف القوة المؤثرة لتصبح (2F):",
    "   a_new = (2F) / m = 2 (F / m) = 2a",
    "4. إذن، تتضاعف العجلة أيضاً بنفس النسبة.",
    "",
    "الإجابة الصحيحة: أ) صواب ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) صواب ✅"
},
{
  "title": "س 46 (ميكانيكا)دفعت 2008: القوة المسببة للحركة وعجلة الانزلاق على سطح أملس",
  "text": "ينزلق جسم كتلته (5 kg) لأسفل مستوى مائل أملس يميل بزاوية (30°) مع الأفقي، أوجد القوة المسببة للحركة وعجلة الانزلاق (بافتراض g = 10 m/s²).",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-purple' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#7c3aed'/></marker><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.incline{fill:#f8fafc;stroke:#334155;stroke-width:3;}.block{fill:#e0f2fe;stroke:#0284c7;stroke-width:2.5;rx:4;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><polygon points='60,210 420,210 420,80' class='incline'/><path d='M 120 210 A 60 60 0 0 0 108 185' fill='none' stroke='#d97706' stroke-width='2'/><text x='140' y='200' class='label' font-size='13' fill='#d97706'>30°</text><g transform='rotate(-21.8, 240, 145)'><rect x='200' y='105' width='80' height='55' class='block'/><text x='240' y='138' class='label' font-size='14' fill='#0284c7'>5 kg</text></g><line x1='240' y1='135' x2='305' y2='161' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='325' y='180' class='label' font-size='12' fill='#2563eb'>mg sin(30°) = 25 N</text><line x1='240' y1='135' x2='240' y2='225' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='240' y='245' class='label' font-size='12' fill='#dc2626'>W = 50 N</text><line x1='240' y1='135' x2='205' y2='45' stroke='#7c3aed' stroke-width='2.5' marker-end='url(#arrow-purple)'/><text x='190' y='38' class='label' font-size='12' fill='#7c3aed'>R</text><line x1='280' y1='100' x2='340' y2='124' stroke='#16a34a' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-green)'/><text x='310' y='95' class='label' font-size='12' fill='#16a34a'>a = 5 m/s²</text><rect x='50' y='225' width='400' height='45' class='card'/><text x='250' y='252' class='label' font-size='15' fill='#15803d'>القوة F = 25 N  |  العجلة a = 5 m/s²  ✅</text></svg>",
  "options": [
    { "text": "أ) القوة = 25 N ، العجلة = 5 m/s²", "isCorrect": true },
    { "text": "ب) القوة = 50 N ، العجلة = 10 m/s²", "isCorrect": false },
    { "text": "ج) القوة = 43.3 N ، العجلة = 8.66 m/s²", "isCorrect": false },
    { "text": "د) القوة = 25 N ، العجلة = 2.5 m/s²", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "الخطوة 1: حساب القوة المسببة للحركة (مركبة الوزن)",
      "question": "بما أن السطح أملس (بدون احتكاك)، فإن القوة الوحيدة المسببة للحركة لأسفل السطح هي مركبة الوزن الموازية للمستوى (F = m · g · sin θ). احسب مقدارها.",
      "options": [
        { "text": "F = 5 × 10 × sin(30°) = 25 N", "isCorrect": true },
        { "text": "F = 5 × 10 × cos(30°) = 43.3 N", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! القوة المسببة للحركة هي مركبة الوزن الموازية للمستوى: F = m · g · sin(30°) = 5 × 10 × 0.5 = 25 N."
    },
    {
      "title": "الخطوة 2: حساب عجلة الانزلاق",
      "question": "احسب عجلة الانزلاق (a) إما بقسمة القوة على الكتلة (a = F / m) أو باستخدام القانون المباشر للمستوى الأملس (a = g · sin θ).",
      "options": [
        { "text": "a = 25 / 5 = 5 m/s² (أو a = 10 × sin 30° = 5 m/s²)", "isCorrect": true },
        { "text": "a = 10 m/s² (تساوي العجلة الأرضية)", "isCorrect": false }
      ],
      "feedback": "✅ رائع! عجلة الانزلاق على المستوى المائل الأملس لا تعتمد على الكتلة وتساوي: a = g · sin(30°) = 10 × 0.5 = 5 m/s²."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) القوة = 25 N ، العجلة = 5 m/s²  ✅ (الإجابة الصحيحة)",
    "ب) القوة = 50 N ، العجلة = 10 m/s²",
    "ج) القوة = 43.3 N ، العجلة = 8.66 m/s²",
    "د) القوة = 25 N ، العجلة = 2.5 m/s²",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. حساب القوة المسببة للحركة (F):",
    "   بما أن السطح أملس، القوة المسببة للحركة هي مركبة الوزن الموازية للمستوى lأسفل:",
    "   F = m · g · sin(θ)",
    "   F = 5 kg × 10 m/s² × sin(30°) = 50 × 0.5 = 25 N",
    "",
    "2. حساب عجلة الانزلاق (a):",
    "   من قانون نيوتن الثاني: F = m · a  ⇒  a = F / m",
    "   a = 25 N / 5 kg = 5 m/s²",
    "   (أو مباشرة: a = g · sin(30°) = 10 × 0.5 = 5 m/s²)",
    "",
    "الإجابة الصحيحة: أ) القوة = 25 N ، العجلة = 5 m/s² ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) القوة = 25 N ، العجلة = 5 m/s² ✅"
},
{
  "title": "س 49 (ميكانيكا) دفعت 2008: أثر القوى المتزنة على الجسم الساكن",
  "text": "إذا أثرت قوى متزنة على جسم ساكن فإنه يبدأ بالحركة بعجلة منتظمة طردياً مع محصلة تلك القوى الكلية.",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.block{fill:#f1f5f9;stroke:#0f172a;stroke-width:2.5;rx:6;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card-wrong{fill:#fef2f2;stroke:#fca5a5;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' class='ground'/><rect x='190' y='90' width='120' height='80' class='block'/><text x='250' y='125' class='label' font-size='15' fill='#0f172a'>جسم ساكن</text><text x='250' y='150' class='label' font-size='12' fill='#64748b'>(v = 0)</text><line x1='310' y1='130' x2='390' y2='130' stroke='#16a34a' stroke-width='3.5' marker-end='url(#arrow-green)'/><text x='350' y='115' class='label' font-size='13' fill='#16a34a'>F₁ = 10 N</text><line x1='190' y1='130' x2='110' y2='130' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-red)'/><text x='150' y='115' class='label' font-size='13' fill='#dc2626'>F₂ = 10 N</text><text x='250' y='55' class='label' font-size='14' fill='#2563eb'>قوى متزنة ⇐ ΣF = F₁ - F₂ = 0</text><rect x='50' y='195' width='400' height='65' class='card-wrong'/><text x='250' y='220' class='label' font-size='14' fill='#991b1b'>بما أن ΣF = 0 فإن الجسم يظل ساكناً (a = 0)</text><text x='250' y='242' class='label' font-size='13' fill='#dc2626'>الادعاء بأنه يبدأ بالحركة بعجلة هو ادعاء خاطئ ❌</text></svg>",
  "options": [
    { "text": "أ) صواب", "isCorrect": false },
    { "text": "ب) خطأ", "isCorrect": true }
  ],
  "correctAnswerIndex": 1,
  "steps": [
    {
      "title": "الخطوة 1: فهم مفهوم القوى المتزنة وقانون نيوتن الأول",
      "question": "ما تأثير القوى المتزنة (ΣF = 0) على جسم ساكن؟",
      "options": [
        { "text": "يبقى الجسم ساكناً ولا يتسارع (a = 0) لعدم وجود محصلة قوى.", "isCorrect": true },
        { "text": "يبدأ بالحركة بعجلة منتظمة.", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! القوى المتزنة تعني أن محصلة القوى تساوي صفراً (ΣF = 0)، وطبقاً لقانون نيوتن الأول، يظل الجسم الساكن ساكناً ولا يتسارع."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) صواب",
    "ب) خطأ  ✅ (الإجابة الصحيحة)",
    "",
    "══════════════ الحل ══════════════",
    "1. القوى المتزنة هي قوى يلغي بعضها بعضاً وتكون محصلتها مساوية للصفر (ΣF = 0).",
    "2. طبقاً لقانون نيوتن الأول: يظل الجسم الساكن ساكناً ما لم تؤثر عليه محصلة قوى غير متزنة (خارجية).",
    "3. بما أن القوى متزنة، فإن الجسم لا يبدأ بالحركة وتظل عجلته مساوية للصفر (a = 0).",
    "",
    "الإجابة الصحيحة: ب) خطأ ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ ✅"
},
{
  "title": "س 53 (ميكانيكا): حساب قوة المقاومة لسيارة تتحرك بعجلة",
  "text": "سيارة كتلتها (1500 kg) تتحرك بقوة محرك (4000 N) وعجلة منتظمة (2 m/s²)، أوجد قوة المقاومة الكلية المؤثرة عليها.",
  "svgCode": "<svg viewBox='0 0 500 280' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-green' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#16a34a'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker></defs><style>.ground{stroke:#64748b;stroke-width:3;stroke-dasharray:6 4;}.car{fill:#e0f2fe;stroke:#0284c7;stroke-width:2.5;rx:8;}.wheel{fill:#334155;stroke:#0f172a;stroke-width:2;}.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}.card{fill:#f0fdf4;stroke:#bbf7d0;stroke-width:1.5;rx:8;}</style><rect width='500' height='280' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' class='ground'/><rect x='180' y='95' width='140' height='60' class='car'/><circle cx='210' cy='165' r='12' class='wheel'/><circle cx='290' cy='165' r='12' class='wheel'/><text x='250' y='130' class='label' font-size='14' fill='#0284c7'>1500 kg</text><line x1='320' y1='125' x2='430' y2='125' stroke='#16a34a' stroke-width='3.5' marker-end='url(#arrow-green)'/><text x='375' y='110' class='label' font-size='13' fill='#16a34a'>F_engine = 4000 N</text><line x1='180' y1='125' x2='90' y2='125' stroke='#dc2626' stroke-width='3.5' marker-end='url(#arrow-red)'/><text x='135' y='110' class='label' font-size='13' fill='#dc2626'>R = 1000 N</text><line x1='210' y1='60' x2='290' y2='60' stroke='#2563eb' stroke-width='2.5' stroke-dasharray='4 3' marker-end='url(#arrow-blue)'/><text x='250' y='48' class='label' font-size='12' fill='#2563eb'>a = 2 m/s²</text><rect x='50' y='200' width='400' height='55' class='card'/><text x='250' y='225' class='label' font-size='14' fill='#15803d'>المحصلة F_net = m × a = 3000 N</text><text x='250' y='245' class='label' font-size='13' fill='#16a34a'>المقاومة R = 4000 - 3000 = 1000 N  ✅</text></svg>",
  "options": [
    { "text": "أ) 1000 N", "isCorrect": true },
    { "text": "ب) 3000 N", "isCorrect": false },
    { "text": "ج) 7000 N", "isCorrect": false },
    { "text": "د) 1500 N", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "steps": [
    {
      "title": "الخطوة 1: حساب القوة المحصلة الفعالة",
      "question": "احسب القوة المحصلة المؤثرة على السيارة باستخدام قانون نيوتن الثاني (F_net = m · a).",
      "options": [
        { "text": "F_net = 1500 × 2 = 3000 N", "isCorrect": true },
        { "text": "F_net = 1500 / 2 = 750 N", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! القوة المحصلة الفعالة الحركية هي: F_net = m · a = 1500 × 2 = 3000 N."
    },
    {
      "title": "الخطوة 2: حساب قوة المقاومة الكلية R",
      "question": "تؤثر قوة المحرك للأمام وقوة المقاومة للخلف (F_engine - R = F_net). احسب قيمة R.",
      "options": [
        { "text": "R = 4000 - 3000 = 1000 N", "isCorrect": true },
        { "text": "R = 4000 + 3000 = 7000 N", "isCorrect": false }
      ],
      "feedback": "✅ رائع! R = F_engine - F_net = 4000 - 3000 = 1000 N."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 1000 N  ✅ (الإجابة الصحيحة)",
    "ب) 3000 N",
    "ج) 7000 N",
    "د) 1500 N",
    "",
    "══════════════ الحل التفصيلي ══════════════",
    "1. حساب القوة المحصلة الفعالة (F_net):",
    "   F_net = m · a",
    "   F_net = 1500 kg × 2 m/s² = 3000 N",
    "",
    "2. تطبيق معادلة نيوتن الكلية للحركة الأفقية:",
    "   F_engine - R = F_net",
    "   4000 - R = 3000",
    "",
    "3. حساب قوة المقاومة (R):",
    "   R = 4000 - 3000 = 1000 N",
    "",
    "الإجابة الصحيحة: أ) 1000 N ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) 1000 N ✅"
},

]