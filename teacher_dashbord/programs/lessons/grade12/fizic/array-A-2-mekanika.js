const  questionsMatrix = [
{
    id: "1-(A-2)",
    title: "س 1 (تمارين الكتاب 2-A): قوة الاحتكاك بين قوتين أفقيتين متضادتين",
    text: "يوضح الشكل المقابل قوى أفقية مقدارها (P N) و (Q N) تؤثر في اتجاهين معاكسين على كتلة مقدارها (5 kg) تستقر على سطح أفقي. أوجد مقدار قوة الاحتكاك المؤثرة على الكتلة بدلالة P و Q عندما تكون: أ) P > Q ، ب) Q > P.",
    hint: "بما أن الكتلة مستقرة (ساكنة)، فإن قوة الاحتكاك f تكون في اتجاه يعاكس القوة الأكبر وتساوي الفرق بين القوتين للتحقيق حالة الاتزان (ΣF = 0).",
    solution: "حالة أ) عندما P > Q ⇐ تكون الحركة المحتملة لليمين، فيكون الاحتكاك لليسار: f = P - Q. <br> حالة ب) عندما Q > P ⇐ تكون الحركة المحتملة لليسار، فيكون الاحتكاك لليمين: f = Q - P.",
    svgCode: "<svg viewBox='0 0 500 240' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='240' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' stroke='#64748b' stroke-width='3'/><rect x='200' y='110' width='100' height='60' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='145' class='label' font-size='14' fill='#0f172a'>5 kg</text><line x1='300' y1='140' x2='390' y2='140' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='405' y='145' class='label' font-size='14' fill='#2563eb'>P</text><line x1='200' y1='140' x2='110' y2='140' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='95' y='145' class='label' font-size='14' fill='#dc2626'>Q</text><rect x='40' y='200' width='420' height='25' fill='none'/><text x='250' y='215' class='label' font-size='13' fill='#16a34a'>عند P > Q يكون f = P - Q ، وعند Q > P يكون f = Q - P ✅</text></svg>",
    options: [
        { text: "أ) أ: P - Q ، ب: Q - P", isCorrect: true },
        { text: "ب) أ: P + Q ، ب: P + Q", isCorrect: false },
        { text: "ج) أ: Q - P ، ب: P - Q", isCorrect: false },
        { text: "د) أ: P - Q ، ب: P - Q", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: دراسة الحالة (أ) عندما P > Q",
            question: "بما أن القوة P أكبر من القوة Q وتؤثران في اتجاهين متضادين والكتلة مستقرة، ما مقدار قوة الاحتكاك؟",
            options: [
                { text: "f = P - Q", isCorrect: true },
                { text: "f = Q - P", isCorrect: false }
            ],
            feedback: "✅ صحيح! القوة Net الناتجة هي (P - Q) لليمين، فتظهر قوة احتكاك f لليسار مقدارها (P - Q) لتحقيق الاتزان."
        },
        {
            title: "الخطوة 2: دراسة الحالة (ب) عندما Q > P",
            question: "إذا كانت القوة Q هي الأكبر، ما مقدار قوة الاحتكاك المؤثرة على الكتلة؟",
            options: [
                { text: "f = Q - P", isCorrect: true },
                { text: "f = P - Q", isCorrect: false }
            ],
            feedback: "✅ ممتاز! القوة الأكبر موجهة لليسار، بالتالي تكون قوة الاحتكاك موجهة لليمين ومقدارها (Q - P)."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) أ: P - Q ، ب: Q - P  ✅ (الإجابة الصحيحة)",
        "ب) أ: P + Q ، ب: P + Q",
        "ج) أ: Q - P ، ب: P - Q",
        "د) أ: P - Q ، ب: P - Q",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. في الحالة أ - عندما P > Q:",
        "   - اتجاه الحركة المحتملة يكون لليمين (باتجاه القوة الأكبر P).",
        "   - تكون قوة الاحتكاك f لليسار، وبشرط الاتزان ΣF_x = 0:",
        "   P - Q - f = 0  ⟸  f = P - Q  ✅",
        "",
        "2. في الحالة ب - عندما Q > P:",
        "   - اتجاه الحركة المحتملة يكون لليسار (باتجاه القوة الأكبر Q).",
        "   - تكون قوة الاحتكاك f لليمين، وبشرط الاتزان ΣF_x = 0:",
        "   Q - P - f = 0  ⟸  f = Q - P  ✅",
        "",
        "الإجابة الصحيحة: أ) أ: P - Q ، ب: Q - P ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) عند P > Q تكون f = P - Q ، وعند Q > P تكون f = Q - P ✅"
},

{
    id: "2-(A-2)",
    title: "س 2 (تمارين الكتاب 2-A): مدى القيم المحتملة للقوة P على سطح أفقي خشن",
    text: "يوضح الشكل المقابل قوى أفقية مقدارها (P N) و (100 N) تؤثران في اتجاهين معاكسين على كتلة وزنها (50 N) تستقر على سطح أفقي. إذا علمت أن معامل الاحتكاك بين الكتلة والسطح يساوي (0.4)، أوجد مدى القيم المحتملة للقوة (P).",
    hint: "لكي تظل الكتلة مستقرة (متزنة)، يجب ألا يتجاوز الفرق بين القوتين المقدار الأقصى لقوة الاحتكاك (f_max = µR). احسب R من الاتزان الرأسي (R = W = 50 N)، ثم احسب f_max = 0.4 × 50 = 20 N، وتكون القوة P محصورة بين (100 - f_max) و (100 + f_max).",
    solution: "1. قوة الاتصال العمودية: R = W = 50 N. <br> 2. أقصى قوة احتكاك: f_max = µR = 0.4 × 50 = 20 N. <br> 3. أقال قيمة لـ P (عندما تكون الكتلة على وشك الحركة لليمين): P_min = 100 - 20 = 80 N. <br> 4. أقصى قيمة لـ P (عندما تكون الكتلة على وشك الحركة لليسار): P_max = 100 + 20 = 120 N. <br> 5. مدى القيم المحتملة: 80 N ≤ P ≤ 120 N.",
    svgCode: "<svg viewBox='0 0 500 240' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='240' fill='#ffffff'/><line x1='50' y1='170' x2='450' y2='170' stroke='#64748b' stroke-width='3'/><rect x='200' y='110' width='100' height='60' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='145' class='label' font-size='14' fill='#0f172a'>W = 50 N</text><line x1='300' y1='140' x2='390' y2='140' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='415' y='145' class='label' font-size='14' fill='#2563eb'>100 N</text><line x1='200' y1='140' x2='110' y2='140' stroke='#dc2626' stroke-width='3' marker-end='url(#arrow-red)'/><text x='95' y='145' class='label' font-size='14' fill='#dc2626'>P</text><rect x='40' y='200' width='420' height='25' fill='none'/><text x='250' y='215' class='label' font-size='13' fill='#16a34a'>مدى القوة P الاستقرار: 80 N ≤ P ≤ 120 N ✅</text></svg>",
    options: [
        { text: "أ) 80 N ≤ P ≤ 120 N", isCorrect: true },
        { text: "ب) 80 N ≤ P ≤ 100 N", isCorrect: false },
        { text: "ج) 60 N ≤ P ≤ 140 N", isCorrect: false },
        { text: "د) P ≤ 120 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب أقصى قوة احتكاك (f_max)",
            question: "من الاتزان الرأسي R = W = 50 N ومعامل الاحتكاك µ = 0.4، ما هي أقصى قيمة لقوة الاحتكاك؟",
            options: [
                { text: "f_max = 0.4 × 50 = 20 N", isCorrect: true },
                { text: "f_max = 0.4 × 100 = 40 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! f_max = µR = 0.4 × 50 = 20 N."
        },
        {
            title: "الخطوة 2: تحديد مدى القيم المحتملة للقوة P",
            question: "لكي يستقر الجسم، يجب أن تتراوح P بين أدنى قيمة وأعلى قيمة تتحملها قوة الاحتكاك. ما هو مدى P؟",
            options: [
                { text: "80 N ≤ P ≤ 120 N", isCorrect: true },
                { text: "100 N ≤ P ≤ 120 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! أقل قيمة P_min = 100 - 20 = 80 N ، وأعلى قيمة P_max = 100 + 20 = 120 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) 80 N ≤ P ≤ 120 N  ✅ (الإجابة الصحيحة)",
        "ب) 80 N ≤ P ≤ 100 N",
        "ج) 60 N ≤ P ≤ 140 N",
        "د) P ≤ 120 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب قوة الاتصال العمودية R من الاتزان الرأسي:",
        "   ΣF_y = 0",
        "   R - W = 0  ⟸  R = 50 N",
        "",
        "2. حساب حد الاحتكاك الأقصى f_max:",
        "   f_max = µR = 0.4 × 50 = 20 N",
        "",
        "3. تحديد أدنى وأقصى قيمة للقوة P لضمان استقرار الكتلة:",
        "   - أدنى قيمة لـ P (عندما تكون على وشك الحركة لليمين):",
        "     P_min = 100 - f_max = 100 - 20 = 80 N",
        "   - أقصى قيمة لـ P (عندما تكون على وشك الحركة لليسار):",
        "     P_max = 100 + f_max = 100 + 20 = 120 N",
        "",
        "   مدى القيم المحتملة للقوة P هو: 80 N ≤ P ≤ 120 N  ✅",
        "",
        "الإجابة الصحيحة: أ) 80 N ≤ P ≤ 120 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) مدى القيم المحتملة للقوة P هو 80 N ≤ P ≤ 120 N ✅"
},

{
    id: "3-(A-2)",
    title: "س 3 (تمارين الكتاب 2-A): حساب قوة الاحتكاك لكتلة مستقرة تحت تأثير قوة مائلة لأسفل",
    text: "يوضح الشكل المقابل قوة مقدارها (8 N) تؤثر إلى أسفل وتصنع زاوية قدرها (30°) مع الأفقي على كتلة مقدارها (3 kg) التي تستقر على سطح أفقي. احسب قوة الاحتكاك على الكتلة.",
    hint: "بما أن الكتلة تستقر (في حالة اتزان أفقي)، فإن قوة الاحتكاك f تتوازن تماماً مع المركبة الأفقية للقوة المؤثرة (8 N). بالتالي: f = 8 cos 30°.",
    solution: "من معادلة الاتزان الأفقية (ΣF_x = 0): <br> 8 cos(30°) - f = 0 <br> f = 8 × cos(30°) = 8 × 0.866025 ≈ 6.93 N.",
    svgCode: "<svg viewBox='0 0 500 250' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='250' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' stroke='#64748b' stroke-width='3'/><rect x='200' y='120' width='100' height='60' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='155' class='label' font-size='14' fill='#0f172a'>3 kg</text><line x1='120' y1='74' x2='200' y2='120' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><line x1='120' y1='120' x2='200' y2='120' stroke='#94a3b8' stroke-width='1.5' stroke-dasharray='4'/><path d='M 150 120 A 30 30 0 0 0 142 103' fill='none' stroke='#dc2626' stroke-width='2'/><text x='165' y='110' class='label' font-size='12' fill='#dc2626'>30°</text><text x='110' y='70' class='label' font-size='14' fill='#2563eb'>8 N</text><line x1='200' y1='160' x2='120' y2='160' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='105' y='165' class='label' font-size='13' fill='#dc2626'>f</text><rect x='40' y='210' width='420' height='25' fill='none'/><text x='250' y='225' class='label' font-size='13' fill='#16a34a'>قوة الاحتكاك: f = 8 cos 30° ≈ 6.93 N ✅</text></svg>",
    options: [
        { text: "أ) f ≈ 6.93 N", isCorrect: true },
        { text: "ب) f = 4.00 N", isCorrect: false },
        { text: "ج) f ≈ 8.00 N", isCorrect: false },
        { text: "د) f ≈ 30.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحليل القوة المائلة أفقياً",
            question: "القوة (8 N) تصنع زاوية (30°) مع الأفقي موجهة لأسفل وإلى الأمام، ما المركبة الأفقية المسؤولة عن دفع الكتلة؟",
            options: [
                { text: "F_x = 8 cos 30°", isCorrect: true },
                { text: "F_x = 8 sin 30°", isCorrect: false }
            ],
            feedback: "✅ صحيح! المركبة الأفقية المجاورة للزاوية هي F_x = 8 cos 30°."
        },
        {
            title: "الخطوة 2: حساب قوة الاحتكاك (f) من معادلة الاتزان الأفقي",
            question: "بما أن الكتلة تستقر على السطح (a = 0)، ما قيمة قوة الاحتكاك التي توازن المركبة الأفقية؟",
            options: [
                { text: "f = 8 cos 30° = 8 × 0.866025 ≈ 6.93 N", isCorrect: true },
                { text: "f = 8 sin 30° = 8 × 0.5 = 4 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! من شرط الاتزان الأفقي ΣF_x = 0 تكون f = 8 cos 30° ≈ 6.93 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) f ≈ 6.93 N  ✅ (الإجابة الصحيحة)",
        "ب) f = 4.00 N",
        "ج) f ≈ 8.00 N",
        "د) f ≈ 30.00 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. تحليل القوة المؤثرة (8 N) أفقياً ورأسياً:",
        "   - المركبة الأفقية القاطعة لليمين: F_x = 8 cos 30°",
        "",
        "2. تطبيق شرط الاتزان الأفقي للكتلة المستقرة (ΣF_x = 0):",
        "   8 cos 30° - f = 0",
        "   f = 8 cos 30°",
        "   f = 8 × 0.866025 ≈ 6.93 N  ✅",
        "",
        "الإجابة الصحيحة: أ) f ≈ 6.93 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) قوة الاحتكاك على الكتلة f ≈ 6.93 N ✅"
},
{
    id: "4-(A-2)",
    title: "س 4 (تمارين الكتاب 2-A): معامل الاحتكاك والقوة اللازمة لتحريك حقيبة بعجلة",
    text: "يدفع راكب طائرة بقدمه حقيبة كتلتها (15 kg) على الأرض بقوة مقدارها (60 N) لتكون الحقيبة على وشك الحركة. أوجد معامل الاحتكاك بين الحقيبة والأرض. وما مقدار القوة اللازمة لتحريك الحقيبة بعجلة قدرها (0.2 m/s²)؟ (باعتبار g = 10 m/s²).",
    hint: "1. عندما تكون الحقيبة على وشك الحركة، تكون قوة الدفع مساوية للحد الأقصى للاحتكاك (F = f_max = µR)، حيث R = mg = 150 N. من ذلك احسب µ. <br> 2. عند التحرك بعجلة (a = 0.2 m/s²)، نطبق قانون نيوتن الثاني: F' - f = m · a.",
    solution: "1. قوة الاتصال العمودية: R = mg = 15 × 10 = 150 N. <br> 2. معامل الاحتكاك: µ = F / R = 60 / 150 = 0.4. <br> 3. القوة اللازمة للتحريك بعجلة: F' - f = m · a ⇐ F' - 60 = 15 × 0.2 ⇐ F' = 60 + 3 = 63 N.",
    svgCode: "<svg viewBox='0 0 500 250' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='250' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' stroke='#64748b' stroke-width='3'/><rect x='200' y='110' width='100' height='70' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='150' class='label' font-size='14' fill='#0f172a'>15 kg</text><line x1='200' y1='145' x2='110' y2='145' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='95' y='150' class='label' font-size='14' fill='#2563eb'>F</text><line x1='300' y1='145' x2='390' y2='145' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='405' y='150' class='label' font-size='13' fill='#dc2626'>f = 60 N</text><rect x='40' y='210' width='420' height='25' fill='none'/><text x='250' y='225' class='label' font-size='13' fill='#16a34a'>معامل الاحتكاك µ = 0.4 ، القوة F' = 63 N ✅</text></svg>",
    options: [
        { text: "أ) µ = 0.4 ، القوة = 63 N", isCorrect: true },
        { text: "ب) µ = 0.25 ، القوة = 63 N", isCorrect: false },
        { text: "ج) µ = 0.4 ، القوة = 60 N", isCorrect: false },
        { text: "د) µ = 0.4 ، القوة = 65 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب معامل الاحتكاك (µ) عند وشك الحركة",
            question: "عند دفع الحقيبة (15 kg) بقوة 60 N لتكون على وشك الحركة، ما قيمة معامل الاحتكاك علمًا بأن R = 150 N؟",
            options: [
                { text: "µ = 60 / 150 = 0.4", isCorrect: true },
                { text: "µ = 150 / 60 = 2.5", isCorrect: false }
            ],
            feedback: "✅ صحيح! من قانون حد الاحتكاك F = µR تكون µ = F / R = 60 / 150 = 0.4."
        },
        {
            title: "الخطوة 2: حساب القوة اللازمة للتحريك بعجلة a = 0.2 m/s²",
            question: "تطبيق قانون نيوتن الثاني F' - f = m · a حيث f = 60 N و m = 15 kg، ما قيمة F'؟",
            options: [
                { text: "F' = 60 + (15 × 0.2) = 63 N", isCorrect: true },
                { text: "F' = 60 - (15 × 0.2) = 57 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! F' - 60 = 3 ⇐ F' = 63 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) µ = 0.4 ، القوة = 63 N  ✅ (الإجابة الصحيحة)",
        "ب) µ = 0.25 ، القوة = 63 N",
        "ج) µ = 0.4 ، القوة = 60 N",
        "د) µ = 0.4 ، القوة = 65 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب قوة الاتصال العمودية R ومعامل الاحتكاك µ:",
        "   - الاتزان الرأسي: R = mg = 15 × 10 = 150 N",
        "   - الحقيبة على وشك الحركة: F = f_max = 60 N",
        "   - µ = f_max / R = 60 / 150 = 0.4  ✅",
        "",
        "2. حساب القوة اللازمة لتحريك الحقيبة بعجلة a = 0.2 m/s²:",
        "   - تطبيق قانون نيوتن الثاني: F' - f = m · a",
        "   - F' - 60 = 15 × 0.2",
        "   - F' - 60 = 3",
        "   - F' = 60 + 3 = 63 N  ✅",
        "",
        "الإجابة الصحيحة: أ) µ = 0.4 ، القوة = 63 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) معامل الاحتكاك µ = 0.4 ، والقوة اللازمة لتحريك الحقيبة بعجلة F' = 63 N ✅"
},

{
    id: "5-(A-2)",
    title: "س 5 (تمارين الكتاب 2-A): معامل الاحتكاك لكتلة تتحرك بعجلة على سطح أفقي بفعل قوة",
    text: "تُشارع كتلة مقدارها (6 kg) بمقدار (1.25 m/s²) على سطح أفقي بفعل قوة قدرها (22.5 N). احسب معامل الاحتكاك بين الكتلة والسطح. (باعتبار g = 10 m/s²).",
    hint: "1. طبق قانون نيوتن الثاني للحركة: F - f = m · a لإيجاد قوة الاحتكاك f. <br> 2. من قيمة الاحتكاك ومعامل الاتصال العمودي R = mg = 60 N، احسب معامل الاحتكاك من العلاقة: f = µR ⇐ µ = f / R.",
    solution: "1. من قانون نيوتن الثاني: 22.5 - f = 6 × 1.25 ⇐ 22.5 - f = 7.5 ⇐ f = 22.5 - 7.5 = 15 N. <br> 2. قوة الاتصال العمودية: R = mg = 6 × 10 = 60 N. <br> 3. معامل الاحتكاك: µ = f / R = 15 / 60 = 0.25.",
    svgCode: "<svg viewBox='0 0 500 250' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='250' fill='#ffffff'/><line x1='50' y1='180' x2='450' y2='180' stroke='#64748b' stroke-width='3'/><rect x='200' y='110' width='100' height='70' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='4'/><text x='250' y='150' class='label' font-size='14' fill='#0f172a'>6 kg</text><line x1='200' y1='145' x2='110' y2='145' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='90' y='150' class='label' font-size='14' fill='#2563eb'>22.5 N</text><line x1='300' y1='145' x2='390' y2='145' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='405' y='150' class='label' font-size='13' fill='#dc2626'>f</text><rect x='40' y='210' width='420' height='25' fill='none'/><text x='250' y='225' class='label' font-size='13' fill='#16a34a'>معامل الاحتكاك µ = 0.25 ✅</text></svg>",
    options: [
        { text: "أ) µ = 0.25", isCorrect: true },
        { text: "ب) µ = 0.40", isCorrect: false },
        { text: "ج) µ = 0.20", isCorrect: false },
        { text: "د) µ = 0.50", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب قوة الاحتكاك (f) باستخدام قانون نيوتن الثاني",
            question: "إذا كانت القوة المؤثرة 22.5 N والكتلة 6 kg تتحرك بعجلة 1.25 m/s²، ما هي قوة الاحتكاك f؟",
            options: [
                { text: "f = 22.5 - (6 × 1.25) = 15 N", isCorrect: true },
                { text: "f = 22.5 + (6 × 1.25) = 30 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! F - f = ma ⇐ 22.5 - f = 7.5 ⇐ f = 15 N."
        },
        {
            title: "الخطوة 2: حساب معامل الاحتكاك (µ)",
            question: "بما أن قوة الاحتكاك f = 15 N و رد الفعل العمودي R = mg = 60 N، ما قيمة µ؟",
            options: [
                { text: "µ = 15 / 60 = 0.25", isCorrect: true },
                { text: "µ = 60 / 15 = 4.00", isCorrect: false }
            ],
            feedback: "✅ ممتاز! معامل الاحتكاك µ = f / R = 15 / 60 = 0.25."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) µ = 0.25  ✅ (الإجابة الصحيحة)",
        "ب) µ = 0.40",
        "ج) µ = 0.20",
        "د) µ = 0.50",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. تطبيق قانون نيوتن الثاني لحركة الكتلة على السطح الأفقي:",
        "   - المحصلة: F - f = m · a",
        "   - 22.5 - f = 6 × 1.25",
        "   - 22.5 - f = 7.5",
        "   - f = 22.5 - 7.5 = 15 N",
        "",
        "2. حساب قوة الاتصال العمودية (R):",
        "   - R = mg = 6 × 10 = 60 N",
        "",
        "3. حساب معامل الاحتكاك (µ):",
        "   - f = µR  ⟸  µ = f / R = 15 / 60 = 0.25  ✅",
        "",
        "الإجابة الصحيحة: أ) µ = 0.25 ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) معامل الاحتكاك بين الكتلة والسطح µ = 0.25 ✅"
},
{
    id: "6-(A-2)",
    title: "س 6 (تمارين الكتاب 2-A): قوة الاحتكاك لكتلة شاحنة تسحب بحبل أفقي بقيم شد مختلفة",
    text: "يصل حبل أفقي من رافعة بشاحنة كتلته (800 kg) يستقر على أرض أفقية. فاذا كان معامل الاحتكاك يساوي (3/4)، ويتبين الشد في الحبل بمقدار (100 N) في كل مرة، أوجد قوة الاحتكاك عندما تكون قيم الشد الآتية: أ) (5900 N) ، ب) (6000 N) ، ج) (6100 N). (باعتبار g = 10 m/s²).",
    hint: "1. احسب أقصى قوة احتكاك (f_max = µR) حيث R = mg = 800 × 10 = 8000 N، وتكون f_max = (3/4) × 8000 = 6000 N. <br> 2. لكل حالة شد (F): إذا كانت F < f_max فالجسم ساكن وقوة الاحتكاك تساوي الشد (f = F). وإذا وصلت F إلى 6000 N يصبح الجسم على وشك الحركة أو في حالة حركة ويبقى الاحتكاك عند أقصى قيمة ثابتة (6000 N).",
    solution: "1. أقصى قوة احتكاك: f_max = (3/4) × (800 × 10) = 6000 N. <br> 2. عند F = 5900 N: الجسم ساكن (f = 5900 N). <br> 3. عند F = 6000 N: الجسم على وشك الحركة (f = 6000 N). <br> 4. عند F = 6100 N: الجسم يتحرك واحتكاكه حركي أقصى (f = 6000 N).",
svgCode: `<svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
    <defs>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
        <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
        <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
    </defs>
    <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 12px; }</style>
    
    <!-- المستوى المائل بزاوية حقيقية 35° -->
    <polygon points="80,400 480,400 480,120" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
    
    <!-- قوس زاوية الميل 35° -->
    <path d="M 150,400 A 70,70 0 0,0 137,360" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="160" y="385" class="lbl" fill="#2563eb" font-size="13">35°</text>
    
    <!-- الكتلة والقوى (مستقرة تماماً بدقة على السطح المائل) -->
    <g transform="translate(280, 260) rotate(-35)">
        <!-- الكتلة (قاعدة المربع مستقرة تماماً على الخط المائل عند y=0) -->
        <rect x="-35" y="-70" width="70" height="70" fill="#cbd5e1" stroke="#334155" stroke-width="2" rx="4"/>
        <text x="0" y="-35" class="lbl" font-size="14" fill="#0f172a">4 kg</text>
        
        <!-- القوة المؤثرة P لأعلى المستوى -->
        <line x1="-35" y1="-35" x2="-105" y2="-35" stroke="#2563eb" stroke-width="2.5" marker-start="url(#arrow-blue)"/>
        <text x="-120" y="-31" class="lbl" font-size="13" fill="#2563eb">P</text>
    </g>
    
    <!-- نص النتيجة النهائية أسفل الشكل -->
    <text x="300" y="445" class="lbl" font-size="13" fill="#16a34a">مدى القوة P الممكنة للاتزان ✅</text>
</svg>`,    options: [
        { text: "أ) 5900 N ، 6000 N ، 6000 N", isCorrect: true },
        { text: "ب) 5900 N ، 6000 N ، 6100 N", isCorrect: false },
        { text: "ج) 6000 N ، 6000 N ، 6000 N", isCorrect: false },
        { text: "د) 5900 N ، 5900 N ، 6000 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب أقصى قوة احتكاك (f_max)",
            question: "إذا كانت كتلة الشاحنة 800 kg ومعامل الاحتكاك 3/4، ما هو حد الاحتكاك الأقصى f_max؟",
            options: [
                { text: "f_max = (3/4) × (800 × 10) = 6000 N", isCorrect: true },
                { text: "f_max = (3/4) × 800 = 600 N", isCorrect: false }
            ],
            feedback: "✅ صحيح! R = 8000 N و f_max = (3/4) × 8000 = 6000 N."
        },
        {
            title: "الخطوة 2: تحديد قوة الاحتكاك لكل حالة شد (F)",
            question: "عندما يكون الشد F مقداره 5900 ثم 6000 ثم 6100 N، ما قيم الاحتكاك المقابلة؟",
            options: [
                { text: "5900 N (ساكن)، ثم 6000 N (على وشك الحركة)، ثم 6000 N (حركة أقصى احتكاك ثابثة)", isCorrect: true },
                { text: "جميعها تساوي 6000 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! طالما الشد أقل من 6000 فالتوازن محقق (f = F)، وحين يساوي أو يتجاوز 6000 يستقر الاحتكاك عند أقصى قيمة 6000 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) 5900 N ، 6000 N ، 6000 N  ✅ (الإجابة الصحيحة)",
        "ب) 5900 N ، 6000 N ، 6100 N",
        "ج) 6000 N ، 6000 N ، 6000 N",
        "د) 5900 N ، 5900 N ، 6000 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. حساب أقصى قوة احتكاك (f_max):",
        "   - الاتزان الرأسي: R = mg = 800 × 10 = 8000 N",
        "   - f_max = µ · R = (3/4) × 8000 = 6000 N",
        "",
        "2. دراسة الحالات الثلاث لقوة الشد (F):",
        "   - الحالة (أ) F = 5900 N: بما أن (5900 < 6000)، فالشاحنة ساكنة وقوة الاحتكاك تساوي قوة الشد ⟸ f = 5900 N.",
        "   - الحالة (ب) F = 6000 N: الشاحنة تصبح على وشك الحركة ⟸ f = 6000 N.",
        "   - الحالة (ج) F = 6100 N: الشاحنة تتحرك وتثبت قوة الاحتكاك عند أقصى قيمة حركية ⟸ f = 6000 N.",
        "",
        "الإجابة الصحيحة: أ) 5900 N ، 6000 N ، 6000 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) قوة الاحتكاك للحالات الثلاث هي: 5900 N ، 6000 N ، 6000 N ✅"
},
{
    id: "7-(A-2)",
    title: "س 7 تمارين الكتاب 2-A: القيم الممكنة لقوة الشد P لكتلة تستقر على مستوى مائل",
    text: "يوضح الشكل المقابل كتلة مقدارها 4 kg تستقر على سطح يميل بزاوية 35° مع الأفقي بفعل قوة مقدارها P N تؤثر إلى أعلى السطح. فإذا كان معامل الاحتكاك بين الكتلة والسطح يساوي 0.45، أوجد القيم الممكنة للقوة P ليبقى الجسم في حالة اتزان. باعتبار g = 10 m/s².",
    hint: "1. احسب مركبة الوزن لأسفل المستوى: W_x = mg sin 35° = 4 × 10 × sin 35° = 22.94 N. <br> 2. احسب رد الفعل العمودي: R = mg cos 35° = 4 × 10 × cos 35° = 32.77 N. <br> 3. احسب أقصى قوة احتكاك نهائية: f_max = μ R = 0.45 × 32.77 = 14.75 N. <br> 4. أوجد مدى القوة P الممكنة للاتزان: W_x - f_max ≤ P ≤ W_x + f_max.",
    solution: "1. مركبة الوزن لأسفل = 40 sin 35° = 22.94 N. <br> 2. أقصى قوة احتكاك f_max = 0.45 × 40 cos 35° = 14.75 N. <br> 3. أقل قيمة للقوة P - على وشك الحركة لأسفل - = 22.94 - 14.75 = 8.19 N. <br> 4. أعلى قيمة للقوة P - على وشك الحركة لأعلى - = 22.94 + 14.75 = 37.69 N. <br> 5. مدى القوة: 8.19 N ≤ P ≤ 37.69 N.",
    svgCode: `<svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 12px; }</style>
        
        <!-- المستوى المائل بزاوية حقيقية 35° -->
        <polygon points="80,400 480,400 480,120" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        
        <!-- قوس زاوية الميل 35° -->
        <path d="M 150,400 A 70,70 0 0,0 137,360" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="160" y="385" class="lbl" fill="#2563eb" font-size="13">35°</text>
        
        <!-- الكتلة والقوى (مستقرة تماماً بدقة على السطح المائل) -->
        <g transform="translate(280, 260) rotate(-35)">
            <!-- الكتلة (قاعدة المربع مستقرة تماماً على الخط المائل عند y=0) -->
            <rect x="-35" y="-70" width="70" height="70" fill="#cbd5e1" stroke="#334155" stroke-width="2" rx="4"/>
            <text x="0" y="-35" class="lbl" font-size="14" fill="#0f172a">4 kg</text>
            
            <!-- القوة المؤثرة P لأعلى المستوى -->
            <line x1="-35" y1="-35" x2="-105" y2="-35" stroke="#2563eb" stroke-width="2.5" marker-start="url(#arrow-blue)"/>
            <text x="-120" y="-31" class="lbl" font-size="13" fill="#2563eb">P</text>
        </g>
        
        <!-- نص النتيجة النهائية أسفل الشكل -->
        <text x="300" y="445" class="lbl" font-size="13" fill="#16a34a">8.19 N ≤ P ≤ 37.69 N - مدى القوة P للاتزان ✅</text>
    </svg>`,
    options: [
        { text: "أ) 8.19 N ≤ P ≤ 37.69 N", isCorrect: true },
        { text: "ب) 5.00 N ≤ P ≤ 20.00 N", isCorrect: false },
        { text: "ج) 15.00 N ≤ P ≤ 40.00 N", isCorrect: false },
        { text: "د) 10.00 N ≤ P ≤ 25.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب مركبات الوزن ورد الفعل أفقياً ورأسياً",
            question: "ما هي قيمة مركبة الوزن الموازية للمستوى W_x ورد الفعل العمودي R لكتلة 4 kg بزاوية 35°؟",
            options: [
                { text: "W_x = 40 sin 35° = 22.94 N ، R = 40 cos 35° = 32.77 N", isCorrect: true },
                { text: "W_x = 40 cos 35° = 32.77 N ، R = 40 sin 35° = 22.94 N", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! المركبة الموازية للمستوى هي 40 sin 35° = 22.94 N والمركبة العمودية هي 40 cos 35° = 32.77 N."
        },
        {
            title: "الخطوة 2: حساب أقصى احتكاك f_max وإيجاد مدى P الممكنة",
            question: "ما قيمة أقصى قوة احتكاك نهائية f_max وما هي الفترة الممكنة للقوة P ليظل الجسم متزناً؟",
            options: [
                { text: "f_max = 14.75 N ، ومدى القوة هو 8.19 N ≤ P ≤ 37.69 N", isCorrect: true },
                { text: "f_max = 10.00 N ، ومدى القوة هو 5.00 N ≤ P ≤ 20.00 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! f_max = 0.45 × 32.77 = 14.75 N. وبالتالي أقل قوة لمنع الانزلاق P_min = 22.94 - 14.75 = 8.19 N، وأكبر قوة لمنع الحركة لأعلى P_max = 22.94 + 14.75 = 37.69 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) 8.19 N ≤ P ≤ 37.69 N  ✅ (الإجابة الصحيحة)",
        "ب) 5.00 N ≤ P ≤ 20.00 N",
        "ج) 15.00 N ≤ P ≤ 40.00 N",
        "د) 10.00 N ≤ P ≤ 25.00 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- الكتلة m = 4 kg  ⟸  الوزن W = mg = 4 × 10 = 40 N",
        "- زاوية ميل السطح θ = 35°",
        "- معامل الاحتكاك μ = 0.45",
        "",
        "2. تحليل القوى موازياً وعمودياً على المستوى المائل:",
        "- مركبة الوزن الموازية لأسفل المستوى: W_x = W · sin 35° = 40 × 0.5736 = 22.94 N",
        "- رد الفعل العمودي: R = W · cos 35° = 40 × 0.8192 = 32.77 N",
        "- أقصى قوة احتكاك نهائية: f_max = μ · R = 0.45 × 32.77 = 14.75 N",
        "",
        "3. إيجاد مدى قيم القوة P للاتزان:",
        "- أقل قيمة للقوة P عندما تكون الكتلة على وشك الانزلاق لأسفل: P_min = W_x - f_max = 22.94 - 14.75 = 8.19 N",
        "- أكبر قيمة للقوة P عندما تكون الكتلة على وشك الحركة لأعلى: P_max = W_x + f_max = 22.94 + 14.75 = 37.69 N",
        "",
        "الإجابة الصحيحة: أ) 8.19 N ≤ P ≤ 37.69 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) القيم الممكنة للقوة P هي: 8.19 N ≤ P ≤ 37.69 N ✅"
},
{
    id: "8-(A-2)",
    title: "س 8 تمارين الكتاب 2-A: القيم الممكنة للقوة P لكتلة على مستوى مائل بزاوية 35°",
    text: "يوضح الشكل المقابل كتلة مقدارها 4 kg تستقر على سطح يميل بزاوية 35° مع الأفقي بفعل قوة مقدارها P N تؤثر إلى أعلى السطح. فإذا كان معامل الاحتكاك بين الكتلة والسطح يساوي 0.45، أوجد القيم الممكنة للقوة P ليبقى الجسم في حالة اتزان. باعتبار g = 10 m/s².",
    hint: "1. احسب مركبة الوزن لأسفل المستوى: W_x = mg sin 35° = 4 × 10 × sin 35° = 22.94 N. <br> 2. احسب رد الفعل العمودي: R = mg cos 35° = 4 × 10 × cos 35° = 32.77 N. <br> 3. احسب أقصى قوة احتكاك نهائية: f_max = μ R = 0.45 × 32.77 = 14.75 N. <br> 4. أوجد مدى القوة P الممكنة للاتزان: W_x - f_max ≤ P ≤ W_x + f_max.",
    solution: "1. مركبة الوزن لأسفل = 40 sin 35° = 22.94 N. <br> 2. أقصى قوة احتكاك f_max = 0.45 × 40 cos 35° = 14.75 N. <br> 3. أقل قيمة للقوة P = 22.94 - 14.75 = 8.19 N. <br> 4. أعلى قيمة للقوة P = 22.94 + 14.75 = 37.69 N. <br> 5. مدى القوة P الممكنة للاتزان: 8.19 N ≤ P ≤ 37.69 N.",
    svgCode: `<svg viewBox="0 0 600 480" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 12px; }</style>
        
        <!-- المستوى المائل بزاوية حقيقية 35° -->
        <polygon points="80,400 480,400 480,120" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        
        <!-- قوس زاوية الميل 35° -->
        <path d="M 150,400 A 70,70 0 0,0 137,360" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="160" y="385" class="lbl" fill="#2563eb" font-size="13">35°</text>
        
        <!-- الكتلة والقوى (مستقرة تماماً بدقة على السطح المائل) -->
        <g transform="translate(280, 260) rotate(-35)">
            <!-- الكتلة (قاعدة المربع مستقرة تماماً على الخط المائل عند y=0) -->
            <rect x="-35" y="-70" width="70" height="70" fill="#cbd5e1" stroke="#334155" stroke-width="2" rx="4"/>
            <text x="0" y="-35" class="lbl" font-size="14" fill="#0f172a">4 kg</text>
            
            <!-- القوة المؤثرة P لأعلى المستوى -->
            <line x1="-35" y1="-35" x2="-105" y2="-35" stroke="#2563eb" stroke-width="2.5" marker-start="url(#arrow-blue)"/>
            <text x="-120" y="-31" class="lbl" font-size="13" fill="#2563eb">P</text>
        </g>
        
        <!-- نص النتيجة النهائية أسفل الشكل -->
        <text x="300" y="445" class="lbl" font-size="13" fill="#16a34a">8.19 N ≤ P ≤ 37.69 N - مدى القوة P للاتزان ✅</text>
    </svg>`,
    options: [
        { text: "أ) 8.19 N ≤ P ≤ 37.69 N", isCorrect: true },
        { text: "ب) 5.00 N ≤ P ≤ 20.00 N", isCorrect: false },
        { text: "ج) 15.00 N ≤ P ≤ 40.00 N", isCorrect: false },
        { text: "د) 10.00 N ≤ P ≤ 25.00 N", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب مركبة الوزن ورد الفعل العمودي",
            question: "ما قيمة مركبة الوزن الموازية للمستوى W_x ورد الفعل R لكتلة 4 kg بزاوية 35°؟",
            options: [
                { text: "W_x = 40 sin 35° = 22.94 N ، R = 40 cos 35° = 32.77 N", isCorrect: true },
                { text: "W_x = 40 cos 35° = 32.77 N ، R = 40 sin 35° = 22.94 N", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! المركبة الموازية للمستوى هي 40 sin 35° = 22.94 N والمركبة العمودية هي 40 cos 35° = 32.77 N."
        },
        {
            title: "الخطوة 2: حساب أقصى احتكاك f_max وإيجاد مدى P الممكنة",
            question: "ما قيمة أقصى قوة احتكاك f_max وما هي الفترة الممكنة للقوة P للاتزان؟",
            options: [
                { text: "f_max = 14.75 N ، ومدى القوة هو 8.19 N ≤ P ≤ 37.69 N", isCorrect: true },
                { text: "f_max = 10.00 N ، ومدى القوة هو 5.00 N ≤ P ≤ 20.00 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! f_max = 0.45 × 32.77 = 14.75 N. وبذلك تكون القوة P بين 22.94 - 14.75 = 8.19 N و 22.94 + 14.75 = 37.69 N."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) 8.19 N ≤ P ≤ 37.69 N  ✅ (الإجابة الصحيحة)",
        "ب) 5.00 N ≤ P ≤ 20.00 N",
        "ج) 15.00 N ≤ P ≤ 40.00 N",
        "د) 10.00 N ≤ P ≤ 25.00 N",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- الكتلة m = 4 kg  ⟸  الوزن W = 4 × 10 = 40 N",
        "- زاوية ميل السطح θ = 35°",
        "- معامل الاحتكاك μ = 0.45",
        "",
        "2. تحليل القوى موازياً وعمودياً على المستوى المائل:",
        "- مركبة الوزن الموازية لأسفل المستوى: W_x = 40 sin 35° = 22.94 N",
        "- رد الفعل العمودي: R = 40 cos 35° = 32.77 N",
        "- أقصى قوة احتكاك نهائية: f_max = μ · R = 0.45 × 32.77 = 14.75 N",
        "",
        "3. إيجاد مدى قيم القوة P للاتزان:",
        "- أقل قيمة للقوة P عندما تكون الكتلة على وشك الانزلاق لأسفل: P_min = W_x - f_max = 22.94 - 14.75 = 8.19 N",
        "- أكبر قيمة للقوة P عندما تكون الكتلة على وشك الحركة لأعلى: P_max = W_x + f_max = 22.94 + 14.75 = 37.69 N",
        "",
        "الإجابة الصحيحة: أ) 8.19 N ≤ P ≤ 37.69 N ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) القيم الممكنة للقوة P هي 8.19 N ≤ P ≤ 37.69 N ✅"
},
{
    id: "9-(A-2)",
    title: "س 9 (تمارين الكتاب 2-A): المسافة التي تقطعها عملة معدنية تنزلق على لوحة خشبية أفقية",
    text: "ضربت عملة معدنية كتلتها 5 g وانزلقت على لوحة خشبية أفقية. فإذا كان معامل الاحتكاك يساوي 0.4، وتتحرك العملة بسرعة 1.5 m/s، إلى أي بعد تتحرك العملة قبل أن تقف؟ (باعتبار g = 10 m/s²).",
    hint: "1. احسب العجلة التقصيرية الناتجة عن قوة الاحتكاك: a = -μ × g = -0.4 × 10 = -4 m/s². <br> 2. استخدم معادلة الحركة للوصول للسكون v = 0: v² = u² + 2as. <br> 3. عوض بالقيم: 0 = (1.5)² + 2(-4)s لإيجاد المسافة s.",
    solution: "1. العجلة a = -μg = -0.4 × 10 = -4 m/s². <br> 2. السرعة الابتدائية u = 1.5 m/s، والسرعة النهائية v = 0 m/s. <br> 3. معادلة الحركة: v² = u² + 2as ⇐ 0 = 2.25 - 8s ⇐ s = 0.28125 m ≈ 0.28 m (أي 28.1 cm).",
    svgCode: `<svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 12px; }</style>
        
        <!-- السطح الخشبي الأفقي -->
        <line x1="50" y1="200" x2="550" y2="200" stroke="#475569" stroke-width="3"/>
        
        <!-- العملة المعدنية في الموضع الابتدائي -->
        <circle cx="150" cy="185" r="15" fill="#cbd5e1" stroke="#1e293b" stroke-width="2"/>
        <text x="150" y="189" class="lbl" font-size="10" fill="#0f172a">5 g</text>
        
        <!-- سهم السرعة الابتدائية (إلى اليمين) -->
        <line x1="170" y1="185" x2="230" y2="185" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
        <text x="200" y="173" class="lbl" fill="#2563eb">u = 1.5 m/s</text>
        
        <!-- سهم قوة الاحتكاك المعاكسة (إلى اليسار) -->
        <line x1="130" y1="185" x2="80" y2="185" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
        <text x="105" y="173" class="lbl" fill="#dc2626">f = μR</text>
        
        <!-- العملة عند التوقف (v = 0) -->
        <circle cx="430" cy="185" r="15" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
        <text x="430" y="189" class="lbl" font-size="10" fill="#64748b">v = 0</text>
        
        <!-- المسافة المقطوعة s -->
        <line x1="150" y1="225" x2="430" y2="225" stroke="#16a34a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)"/>
        <text x="290" y="245" class="lbl" font-size="13" fill="#16a34a">المسافة s = 0.28 m ✅</text>
    </svg>`,
    options: [
        { text: "أ) s = 0.28 m - أو 28.1 cm", isCorrect: true },
        { text: "ب) s = 0.56 m", isCorrect: false },
        { text: "ج) s = 0.14 m", isCorrect: false },
        { text: "د) s = 0.42 m", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب العجلة التقصيرية a",
            question: "ما قيمة العجلة التقصيرية للعملة إذا كان معامل الاحتكاك 0.4 و g = 10 m/s²؟",
            options: [
                { text: "a = -μg = -0.4 × 10 = -4 m/s²", isCorrect: true },
                { text: "a = -μ/g = -0.04 m/s²", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! العجلة بفعل الاحتكاك فقط على السطح الأفقي هي a = -μg = -4 m/s²."
        },
        {
            title: "الخطوة 2: حساب المسافة s المقطوعة حتى التوقف",
            question: "باستخدام v² = u² + 2as مع u = 1.5 m/s و v = 0، كم تبلغ المسافة s؟",
            options: [
                { text: "s = 2.25 / 8 = 0.28125 m ≈ 0.28 m", isCorrect: true },
                { text: "s = 1.5 / 4 = 0.375 m", isCorrect: false }
            ],
            feedback: "✅ ممتاز! تتوقف العملة بعد قطع مسافة 0.28 متر تقريباً (أو 28.1 سم)."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) s = 0.28 m - أو 28.1 cm  ✅ (الإجابة الصحيحة)",
        "ب) s = 0.56 m",
        "ج) s = 0.14 m",
        "د) s = 0.42 m",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- كتلة العملة m = 5 g = 0.005 kg",
        "- معامل الاحتكاك μ = 0.4",
        "- السرعة الابتدائية u = 1.5 m/s",
        "- السرعة النهائية عند التوقف v = 0 m/s",
        "- عجلة الجاذبية g = 10 m/s²",
        "",
        "2. حساب العجلة a:",
        "- R = mg ، f = μR = μmg",
        "- F = ma ⟸ -μmg = ma ⟸ a = -μg = -0.4 × 10 = -4 m/s²",
        "",
        "3. حساب المسافة المقطوعة s:",
        "- v² = u² + 2as ⟸ 0 = (1.5)² + 2(-4)s",
        "- 8s = 2.25 ⟸ s = 0.28125 m ≈ 0.28 m ✅",
        "",
        "الإجابة الصحيحة: أ) s = 0.28 m - أو 28.1 cm ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) s = 0.28 m - أو 28.1 cm ✅"
}]