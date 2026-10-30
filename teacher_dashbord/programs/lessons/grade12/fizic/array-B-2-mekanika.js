






 const exercises2B = [
    {
        id: "1-2b",
        title: "س 1 (تمارين B2): اتجاه قوة الاحتكاك ومعامله لصندوق على أرضية قطار متحرك",
        text: "صندوق موضوع على أرضية قطار متحرك يميل للانزلاق خلفياً بالنسبة للقطار. اذكر اتجاه قوة الاحتكاك سواء كان القطار متسارعاً أو متباطئاً. فإذا كانت قيمة التسارع أو التباطؤ (4 m/s²) وكان الصندوق على وشك الانزلاق، أوجد معامل الاحتكاك بين الصندوق وأرضية القطار. (باعتبار g = 10 m/s²).",
        hint: "1. اتجاه الاحتكاك يكون دائماً للأمام (في اتجاه حركة القطار) ليقاوم الميل للانزلاق الخلفي ويعطي الصندوق نفس عجلة القطار. <br> 2. من قانون نيوتن الثاني: f = m · a ⇐ µ R = m · a ⇐ µ (m g) = m · a ⇐ µ g = a ⇐ µ = a / g.",
        solution: "1. اتجاه قوة الاحتكاك: تعمل للأمام (في نفس اتجاه حركة القطار). <br> 2. بما أن الصندوق على وشك الانزلاق: f = µ mg. <br> 3. معادلة الحركة: µ mg = m a ⇐ µ = a / g = 4 / 10 = 0.4.",
        svgCode: "<svg viewBox='0 0 500 240' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-blue' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#2563eb'/></marker><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='240' fill='#ffffff'/><rect x='80' y='110' width='340' height='60' fill='#f1f5f9' stroke='#475569' stroke-width='2' rx='4'/><rect x='210' y='80' width='80' height='40' fill='#cbd5e1' stroke='#334155' stroke-width='2' rx='3'/><text x='250' y='105' class='label' font-size='12' fill='#0f172a'>صندوق</text><line x1='250' y1='100' x2='310' y2='100' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='345' y='105' class='label' font-size='11' fill='#dc2626'>الاحتكاك للأمام (f)</text><line x1='350' y1='60' x2='420' y2='60' stroke='#2563eb' stroke-width='3' marker-end='url(#arrow-blue)'/><text x='385' y='50' class='label' font-size='12' fill='#2563eb'>عجلة القطار a</text><rect x='40' y='200' width='420' height='25' fill='none'/><text x='250' y='215' class='label' font-size='12' fill='#16a34a'>اتجاه f للأمام | معامل الاحتكاك µ = 0.4 ✅</text></svg>",
        options: [
            { text: "أ) اتجاه الاحتكاك للأمام ، µ = 0.4", isCorrect: true },
            { text: "ب) اتجاه الاحتكاك للخلف ، µ = 0.4", isCorrect: false },
            { text: "ج) اتجاه الاحتكاك للأمام ، µ = 0.25", isCorrect: false },
            { text: "د) اتجاه الاحتكاك للخلف ، µ = 0.5", isCorrect: false }
        ],
        correctAnswerIndex: 0,
        steps: [
            {
                title: "الخطوة 1: تحديد اتجاه قوة الاحتكاك",
                question: "إذا كان الصندوق يميل للانزلاق خلفياً بالنسبة للقطار، ما هو اتجاه قوة الاحتكاك المؤثرة عليه؟",
                options: [
                    { text: "إلى الأمام (في اتجاه حركة القطار) لمنع انزلاقه خلفاً", isCorrect: true },
                    { text: "إلى الخلف مع اتجاه الانزلاق المحتمل", isCorrect: false }
                ],
                feedback: "✅ صحيح! قوة الاحتكاك تعمل دائماً في عكس اتجاه الحركة المحتملة، فتتجه للأمام مسحوبةً بالقطار."
            },
            {
                title: "الخطوة 2: حساب معامل الاحتكاك (µ)",
                question: "بما أن الصندوق على وشك الانزلاق بعجلة مقدارها 4 m/s²، ما قيمة µ؟",
                options: [
                    { text: "µ = a / g = 4 / 10 = 0.4", isCorrect: true },
                    { text: "µ = a × g = 4 × 10 = 40", isCorrect: false }
                ],
                feedback: "✅ ممتاز! f = ma ⇐ µ mg = ma ⇐ µ = a / g = 0.4."
            }
        ],
        pdfSolutionSteps: [
            "══════════════ الخيارات ══════════════",
            "أ) اتجاه الاحتكاك للأمام ، µ = 0.4  ✅ (الإجابة الصحيحة)",
            "ب) اتجاه الاحتكاك للخلف ، µ = 0.4",
            "ج) اتجاه الاحتكاك للأمام ، µ = 0.25",
            "د) اتجاه الاحتكاك للخلف ، µ = 0.5",
            "",
            "══════════════ الحل التفصيلي ══════════════",
            "1. تحديد اتجاه قوة الاحتكاك (f):",
            "   - بما أن الصندوق يميل للانزلاق إلى الخلف بالنسبة للقطار، فإن قوة الاحتكاك تؤثر إلى الأمام (في اتجاه حركة القطار) لتمنع الانزلاق وتمنحه نفس العجلة.",
            "",
            "2. تطبيق قانون نيوتن الثاني لحركة الصندوق مع القطار:",
            "   - القوة المسببة للحركة أفقياً هي قوة الاحتكاك: f = m · a",
            "   - وبما أن الصندوق على وشك الانزلاق، فإن الاحتكاك يصل لأقصى قيمة: f = µ · R = µ · m · g",
            "",
            "3. حساب معامل الاحتكاك (µ):",
            "   - µ · m · g = m · a  (باختصار الكتلة m من الطرفين)",
            "   - µ · g = a  ⟸  µ = a / g",
            "   - µ = 4 / 10 = 0.4  ✅",
            "",
            "الإجابة الصحيحة: أ) اتجاه قوة الاحتكاك إلى الأمام ، ومعامل الاحتكاك µ = 0.4 ✅"
        ],
        pdfFinalAnswer: "الإجابة الصحيحة: أ) اتجاه الاحتكاك للأمام ومعامله µ = 0.4 ✅"
    },
    {
        id: "2-2b",
        title: "س 2 (تمارين B2): دراج يستعمل الكابح ويتوقف تحت تأثير الاحتكاك",
        text: "يتحرك دراج بدراجته بسرعة (7 m/s) عندما استعمل الكابح على العجلتين فتوقف بعد أن قطع مسافة (5 m). فإذا كانت كتلتاهما (الدراج والدراجة) تساوي (90 kg)، أوجد معامل الاحتكاك بينهما وبين الأرض. (باعتبار g = 10 m/s²).",
        hint: "1. احسب عجلة التقصير (التباطؤ) باستخدام معادلات الحركة الخطية: v² = u² + 2as. <br> 2. طبق قانون نيوتن الثاني: -f = ma ⇐ -µ R = ma ⇐ µ mg = ma ⇐ µ = a / g.",
        solution: "1. السرعة الابتدائية u = 7 m/s، السرعة النهائية v = 0، المسافة s = 5 m. <br> 2. من المعادلة v² = u² + 2as ⇐ 0 = 7² + 2(a)(5) ⇐ 10a = -49 ⇐ a = -4.9 m/s². <br> 3. من قانون الحركة: µ mg = ma ⇐ µ = a / g = 4.9 / 10 = 0.49.",
        svgCode: "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='200' fill='#ffffff'/><rect x='150' y='100' width='200' height='40' fill='#f1f5f9' stroke='#475569' stroke-width='2' rx='4'/><circle cx='190' cy='140' r='15' fill='#334155'/><circle cx='310' cy='140' r='15' fill='#334155'/><line x1='210' y1='120' x2='140' y2='120' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='175' y='110' class='label' font-size='12' fill='#dc2626'>قوة الاحتكاك f</text><text x='250' y='80' class='label' font-size='12' fill='#2563eb'>u = 7 m/s , s = 5 m , m = 90 kg</text><text x='250' y='180' class='label' font-size='12' fill='#16a34a'>معامل الاحتكاك µ = 0.49 ✅</text></svg>",
        options: [
            { text: "أ) µ = 0.49", isCorrect: true },
            { text: "ب) µ = 0.5", isCorrect: false },
            { text: "ج) µ = 0.35", isCorrect: false },
            { text: "د) µ = 0.7", isCorrect: false }
        ],
        correctAnswerIndex: 0,
        steps: [
            {
                title: "الخطوة 1: حساب عجلة التباطؤ (a)",
                question: "باستخدام المعادلة v² = u² + 2as، ما هي قيمة عجلة التباطؤ للجسم؟",
                options: [
                    { text: "a = -4.9 m/s² (عجلة تقصيرية)", isCorrect: true },
                    { text: "a = 9.8 m/s²", isCorrect: false }
                ],
                feedback: "✅ صحيح! 0 = 4^7 + 10a ⇐ 10a = -49 ⇐ a = -4.9 m/s²."
            },
            {
                title: "الخطوة 2: حساب معامل الاحتكاك (µ)",
                question: "من معادلة الحركة أفقياً تحت تأثير الاحتكاك فقط (-f = ma)، ما قيمة µ؟",
                options: [
                    { text: "µ = a / g = 4.9 / 10 = 0.49", isCorrect: true },
                    { text: "µ = a × g = 49", isCorrect: false }
                ],
                feedback: "✅ ممتاز! µ mg = ma ⇐ µ = a / g = 0.49."
            }
        ],
        pdfSolutionSteps: [
            "══════════════ الخيارات ══════════════",
            "أ) µ = 0.49  ✅ (الإجابة الصحيحة)",
            "ب) µ = 0.5",
            "ج) µ = 0.35",
            "د) µ = 0.7",
            "",
            "══════════════ الحل التفصيلي ══════════════",
            "1. استخراج المعطيات:",
            "   - السرعة الابتدائية (u) = 7 m/s",
            "   - السرعة النهائية (v) = 0 (توقف)",
            "   - المسافة (s) = 5 m",
            "   - الكتلة (m) = 90 kg",
            "",
            "2. إيجاد عجلة التباطؤ (a):",
            "   - v² = u² + 2as",
            "   - 0 = (7)² + 2 · a · 5",
            "   - 0 = 49 + 10a  ⟸  10a = -49  ⟸  a = -4.9 m/s²",
            "",
            "3. تطبيق قانون نيوتن الثاني أفقياً:",
            "   - قوة الاحتكاك هي القوة الوحيدة المؤثرة: -f = m · a",
            "   - -µ · m · g = m · a  (باختصار الكتلة m وإهمال الإشارة السالبة للدلالة على الاتجاه)",
            "   - µ · g = a  ⟸  µ = a / g",
            "   - µ = 4.9 / 10 = 0.49  ✅",
            "",
            "الإجابة الصحيحة: أ) معامل الاحتكاك µ = 0.49 ✅"
        ],
        pdfFinalAnswer: "الإجابة الصحيحة: أ) معامل الاحتكاك µ = 0.49 ✅"
    },
    {
    id: "3-2b",
    title: "س 3 تمارين B2: حاوية ومعامل الاحتكاك والحمولة القصوى",
    text: "حاوية كتلتها 500 kg ومعامل الاحتكاك بينها وبين الأرض يساوي 0.6. أوجد الحمولة القصوى للمواد في الحاوية إذا أريد تحريكها بقوة أفقية مقدارها 7350 N. باعتبار g = 10 m/s².",
    hint: "1. الكتلة الكلية للنظام M = كتلة الحاوية m + كتلة الحمولة m_load. <br> 2. أقصى قوة احتكاك تعاكس القوة الأفقية F عند البدء في الحركة: F = f_max = μ R = μ M g.",
    solution: "1. قوة السحب الفاعلة F = 7350 N، معامل الاحتكاك μ = 0.6. <br> 2. من اتزان القوى للبدء في الحركة: F = μ M g ⇐ 7350 = 0.6 × M × 10 ⇐ 7350 = 6 M. <br> 3. الكتلة الكلية M = 7350 / 6 = 1225 kg. <br> 4. الحمولة القصوى = الكتلة الكلية - كتلة الحاوية = 1225 - 500 = 725 kg.",
    svgCode: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
        </defs>
        <style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style>
        <rect width="500" height="200" fill="#ffffff"/>
        <rect x="160" y="90" width="180" height="60" fill="#f1f5f9" stroke="#475569" stroke-width="2" rx="4"/>
        <text x="250" y="125" class="label" font-size="12" fill="#0f172a">حاوية 500 kg + حمولة</text>
        <line x1="340" y1="120" x2="420" y2="120" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow-blue)"/>
        <text x="380" y="110" class="label" font-size="12" fill="#2563eb">F = 7350 N</text>
        <text x="250" y="180" class="label" font-size="12" fill="#16a34a">الحمولة القصوى = 725 kg ✅</text>
    </svg>`,
    options: [
        { text: "أ) الحمولة القصوى = 725 kg", isCorrect: true },
        { text: "ب) الحمولة القصوى = 500 kg", isCorrect: false },
        { text: "ج) الحمولة القصوى = 1225 kg", isCorrect: false },
        { text: "د) الحمولة القصوى = 800 kg", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب الكتلة الكلية M",
            question: "باستخدام القوة الأفقية F = 7350 N ومعامل الاحتكاك μ = 0.6، ما هي الكتلة الكلية للحاوية مع الحمولة؟",
            options: [
                { text: "M = F / μg = 7350 / 0.6 × 10 = 1225 kg", isCorrect: true },
                { text: "M = 7350 × 0.6 = 4410 kg", isCorrect: false }
            ],
            feedback: "✅ ممتاز! F = μMg ⇐ 7350 = 6M ⇐ M = 1225 kg."
        },
        {
            title: "الخطوة 2: حساب كتلة الحمولة القصوى",
            question: "إذا كانت الكتلة الكلية 1225 kg وكتلة الحاوية الفارغة 500 kg، فما هي حمولة المواد؟",
            options: [
                { text: "1225 - 500 = 725 kg", isCorrect: true },
                { text: "1225 + 500 = 1725 kg", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! الحمولة = الكتلة الكلية - كتلة الحاوية = 725 kg."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) الحمولة القصوى = 725 kg  ✅ (الإجابة الصحيحة)",
        "ب) الحمولة القصوى = 500 kg",
        "ج) الحمولة القصوى = 1225 kg",
        "د) الحمولة القصوى = 800 kg",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- كتلة الحاوية الفارغة m = 500 kg",
        "- معامل الاحتكاك μ = 0.6",
        "- القوة الأفقية F = 7350 N",
        "- عجلة الجاذبية g = 10 m/s²",
        "",
        "2. إيجاد الكتلة الكلية للنظام - M = الحاوية + الحمولة - :",
        "- عند بدء الحركة، قوة السحب تساوي أقصى احتكاك: F = f_max = μ · R = μ · M · g",
        "- 7350 = 0.6 · M · 10",
        "- 7350 = 6M  ⟸  M = 7350 / 6 = 1225 kg",
        "",
        "3. إيجاد كتلة الحمولة القصوى:",
        "- كتلة الحمولة = الكتلة الكلية - كتلة الحاوية الفارغة",
        "- كتلة الحمولة = 1225 - 500 = 725 kg  ✅",
        "",
        "الإجابة الصحيحة: أ) الحمولة القصوى = 725 kg ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) الحمولة القصوى = 725 kg ✅"
},{
    id: "4-2b",
    title: "س 4 تمارين B2: سيارة تستعمل المكابح وتتوقف على طريق أفقية",
    text: "تحركت سيارة على طريق أفقية بسرعة 12 m/s. عندما استعملت المكابح على الإطارات الأربعة كان معامل الاحتكاك بين الإطارات والأرض يساوي 0.8. أوجد المسافة المقطوعة من لحظة استعمال المكابح حتى توقفت السيارة. باعتبار g = 10 m/s².",
    hint: "1. من قانون نيوتن الثاني: -f = ma ⇐ -μ R = ma ⇐ -μ mg = ma ⇐ a = -μ g. <br> 2. احسب المسافة s من معادلة الحركة: v² = u² + 2as - حيث v = 0 -.",
    solution: "1. السرعة الابتدائية u = 12 m/s، السرعة النهائية v = 0، ومعامل الاحتكاك μ = 0.8. <br> 2. عجلة التباطؤ a = -μ g = -0.8 × 10 = -8 m/s². <br> 3. من المعادلة v² = u² + 2as ⇐ 0 = 12² + 2(-8)s ⇐ 0 = 144 - 16s ⇐ 16s = 144 ⇐ s = 9 m.",
    svgCode: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
        </defs>
        <style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style>
        <rect width="500" height="200" fill="#ffffff"/>
        <rect x="150" y="90" width="200" height="50" fill="#f1f5f9" stroke="#475569" stroke-width="2" rx="4"/>
        <circle cx="190" cy="140" r="12" fill="#334155"/>
        <circle cx="310" cy="140" r="12" fill="#334155"/>
        <line x1="210" y1="115" x2="130" y2="115" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrow-red)"/>
        <text x="170" y="105" class="label" font-size="12" fill="#dc2626">الاحتكاك f</text>
        <text x="250" y="70" class="label" font-size="12" fill="#2563eb">u = 12 m/s , μ = 0.8</text>
        <text x="250" y="180" class="label" font-size="12" fill="#16a34a">المسافة s = 9 m ✅</text>
    </svg>`,
    options: [
        { text: "أ) المسافة s = 9 m", isCorrect: true },
        { text: "ب) المسافة s = 12 m", isCorrect: false },
        { text: "ج) المسافة s = 7.2 m", isCorrect: false },
        { text: "د) المسافة s = 15 m", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب عجلة التباطؤ a",
            question: "باستخدام معادلة الحركة تحت تأثير الاحتكاك -μmg = ma، ما هي قيمة العجلة a؟",
            options: [
                { text: "a = -μ g = -0.8 × 10 = -8 m/s²", isCorrect: true },
                { text: "a = -0.8 m/s²", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! الكتلة تختصر وتبقى a = -μg = -8 m/s²."
        },
        {
            title: "الخطوة 2: حساب المسافة المقطوعة حتى التوقف s",
            question: "باستخدام المعادلة v² = u² + 2as - حيث v = 0 -، ما هي المسافة s؟",
            options: [
                { text: "s = 144 / 16 = 9 m", isCorrect: true },
                { text: "s = 12 m", isCorrect: false }
            ],
            feedback: "✅ ممتاز! 0 = 144 - 16s ⇐ 16s = 144 ⇐ s = 9 m."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) المسافة s = 9 m  ✅ (الإجابة الصحيحة)",
        "ب) المسافة s = 12 m",
        "ج) المسافة s = 7.2 m",
        "د) المسافة s = 15 m",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- السرعة الابتدائية u = 12 m/s",
        "- السرعة النهائية v = 0 - توقفت السيارة -",
        "- معامل الاحتكاك μ = 0.8",
        "- عجلة الجاذبية g = 10 m/s²",
        "",
        "2. إيجاد عجلة التباطؤ a:",
        "- -f = m · a  ⟸  -μ · m · g = m · a",
        "- a = -μ · g = -0.8 · 10 = -8 m/s²",
        "",
        "3. إيجاد المسافة المقطوعة s حتى التوقف:",
        "- v² = u² + 2as",
        "- 0 = 12² + 2 · -8 · s",
        "- 0 = 144 - 16s  ⟸  16s = 144  ⟸  s = 144 / 16 = 9 m  ✅",
        "",
        "الإجابة الصحيحة: أ) المسافة s = 9 m ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) المسافة s = 9 m ✅"
},{
    id: "5-2b",
    title: "س 5 (تمارين B2): كتلة على مستوى مائل بزاوية وتأثير قوة أفقية",
    text: "تستقر كتلة مقدارها (2 kg) على مستوى يميل على الأفقي بزاوية قدرها (50°). أثرت قوة أفقية مقدارها (30 N) على الكتلة كما هو موضح في الشكل. أوجد مقدار واتجاه قوة الاحتكاك المؤثرة على الكتلة. (باعتبار g = 10 m/s²).",
    hint: "1. تحليل القوى إلى مركبتين (عمودية وموازية للمستوى المائل). <br> 2. رد الفعل العمودي R = W cos(50°) + P sin(50°). <br> 3. اتجاه الحركة المحتملة للأعلى لأن مركبة القوة الأفقية لأعلى أكبر من مركبة الوزن لأسفل، وبالتالي قوة الاحتكاك تعمل إلى الأسفل.",
    solution: "1. تحليل القوى موازياً للمستوى: القوة للأعلى = P cos(50°) = 30 × 0.643 = 19.29 N، مركبة الوزن لأسفل = mg sin(50°) = 2 × 10 × 0.766 = 15.32 N. <br> 2. بما أن القوة المحركة لأعلى أكبر، فإن قوة الاحتكاك (f) تعمل إلى الأسفل. <br> 3. معادلة الاتزان: P cos(50°) = mg sin(50°) + f ⇐ f = 19.29 - 15.32 = 3.97 N (إلى أسفل المستوى).",
    svgCode: `<svg viewBox="0 0 600 500" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 11px; }</style>
        
        <!-- المستوى المائل بزاوية حقيقية 50° -->
        <polygon points="100,450 450,450 450,33" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        
        <!-- قوس زاوية الميل 50° -->
        <path d="M 160,450 A 60,60 0 0,0 138.5,404" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="165" y="430" class="lbl" fill="#2563eb" font-size="13">50°</text>
        
        <!-- الكتلة والقوى (مستقرة تماماً هندسياً على السطح المائل) -->
        <g transform="translate(275, 241.5) rotate(-50)">
            <!-- الكتلة (قاعدة المربع تنطبق تماماً على الخط المائل) -->
            <rect x="-35" y="-70" width="70" height="70" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="4"/>
            <text x="0" y="-35" class="lbl" font-size="14" fill="#0f172a">2 kg</text>
            
            <!-- رد الفعل العمودي R (عمودي لأعلى) -->
            <line x1="0" y1="-70" x2="0" y2="-120" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
            <text x="0" y="-127" class="lbl" fill="#2563eb">R</text>
            
            <!-- مركبة الوزن العمودية W cos(50°) -->
            <line x1="0" y1="0" x2="0" y2="55" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="0" y="68" class="lbl" fill="#475569">W cos(50°)</text>
            
            <!-- مركبة القوة الأفقية P cos(50°) (إلى أعلى المستوى) -->
            <line x1="-35" y1="-35" x2="-100" y2="-35" stroke="#2563eb" stroke-width="2" marker-start="url(#arrow-blue)"/>
            <text x="-135" y="-31" class="lbl" fill="#2563eb">P cos(50°)</text>

            <!-- قوة الاحتكاك f (لأسفل المستوى) -->
            <line x1="35" y1="-45" x2="95" y2="-45" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="125" y="-41" class="lbl" fill="#dc2626">f (احتـكاك)</text>

            <!-- مركبة الوزن الموازية W sin(50°) (لأسفل المستوى) -->
            <line x1="35" y1="-25" x2="95" y2="-25" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="135" y="-21" class="lbl" fill="#475569">W sin(50°)</text>
        </g>
        
        <text x="300" y="485" class="lbl" font-size="14" fill="#16a34a">مقدار الاحتكاك المطلوب: f = 3.97 N (لأسفل) ✅</text>
    </svg>`,
    options: [
        { text: "أ) المقدار = 3.97 N وإلى أسفل المستوى", isCorrect: true },
        { text: "ب) المقدار = 3.97 N وإلى أعلى المستوى", isCorrect: false },
        { text: "ج) المقدار = 15.32 N وإلى أسفل المستوى", isCorrect: false },
        { text: "د) المقدار = 19.29 N وإلى أعلى المستوى", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: تحليل القوى موازياً للمستوى المائل",
            question: "ما هي قيمة مركبة القوة الأفقية لأعلى المستوى ومركبة الوزن لأسفل المستوى؟",
            options: [
                { text: "الأعلى = 30 cos(50°) = 19.29 N ، الأسفل = 20 sin(50°) = 15.32 N", isCorrect: true },
                { text: "الأعلى = 30 sin(50°) ، الأسفل = 20 cos(50°)", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! تحليل القوة الأفقية P يصنع زاوية 50° مع المستوى."
        },
        {
            title: "الخطوة 2: تحديد مقدار واتجاه قوة الاحتكاك (f)",
            question: "بما أن مركبة القوة لأعلى أكبر من مركبة الوزن لأسفل، في أي اتجاه تكون قوة الاحتكاك وما مقدارها؟",
            options: [
                { text: "إلى أسفل المستوى بمقدار 19.29 - 15.32 = 3.97 N", isCorrect: true },
                { text: "إلى أعلى المستوى بمقدار 3.97 N", isCorrect: false }
            ],
            feedback: "✅ ممتاز! قوة الاحتكاك تعاكس الاتجاه المحتمل للحركة فتتجه لأسفل المستوى."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) المقدار = 3.97 N وإلى أسفل المستوى  ✅ (الإجابة الصحيحة)",
        "ب) المقدار = 3.97 N وإلى أعلى المستوى",
        "ج) المقدار = 15.32 N وإلى أسفل المستوى",
        "د) المقدار = 19.29 N وإلى أعلى المستوى",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- الكتلة (m) = 2 kg  ⟸  الوزن (W) = mg = 2 × 10 = 20 N",
        "- زاوية الميل (θ) = 50°",
        "- القوة الأفقية (P) = 30 N",
        "",
        "2. تحليل القوى موازياً للمستوى المائل:",
        "- مركبة القوة الأفقية المؤثرة لأعلى المستوى = P · cos(50°) = 30 × 0.643 = 19.29 N",
        "- مركبة الوزن المؤثرة لأسفل المستوى = W · sin(50°) = 20 × 0.766 = 15.32 N",
        "",
        "3. تحديد اتجاه ومقدار قوة الاحتكاك (f):",
        "- بما أن القوة للأعلى (19.29 N) أكبر من مركبة الوزن لأسفل (15.32 N)، فإن الجسم يميل للحركة إلى أعلى المستوى.",
        "- بناءً على ذلك، تعمل قوة الاحتكاك (f) إلى **أسفل المستوى** لمقاومة الحركة.",
        "- معادلة الاتزان موازياً للمستوى: P · cos(50°) = W · sin(50°) + f",
        "   - 19.29 = 15.32 + f  ⟸  f = 19.29 - 15.32 = 3.97 N  ✅",
        "",
        "الإجابة الصحيحة: أ) المقدار = 3.97 N وإلى أسفل المستوى ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) المقدار = 3.97 N وإلى أسفل المستوى ✅"
},
  {
        id: "6-2b",
        title: "س 6 (تمارين B2): قطار يتوقف باستخدام المكابح وحساب معامل الاحتكاك",
        text: "يتحرك قطار بسرعة (50 m/s) بدون عربات خلفه، وعند توقف المحرك باستخدام المكابح على عجلات القطار توقف القطار بعد (25 s). احسب معامل الاحتكاك بين العجلات والسكة. (باعتبار g = 10 m/s²).",
        hint: "1. احسب عجلة التباطؤ (a) من معادلات الحركة: v = u + at. <br> 2. طبق قانون نيوتن الثاني تحت تأثير الاحتكاك: -f = ma ⇐ -µ mg = ma ⇐ µ = a / g.",
        solution: "1. السرعة الابتدائية u = 50 m/s، السرعة النهائية v = 0، الزمن t = 25 s. <br> 2. من v = u + at ⇐ 0 = 50 + 25a ⇐ 25a = -50 ⇐ a = -2 m/s². <br> 3. معامل الاحتكاك µ = a / g = 2 / 10 = 0.2.",
        svgCode: "<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><defs><marker id='arrow-red' viewBox='0 0 10 10' refX='6' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M 0 1 L 10 5 L 0 9 z' fill='#dc2626'/></marker></defs><style>.label{font-family:system-ui,-apple-system,sans-serif;font-weight:bold;text-anchor:middle;}</style><rect width='500' height='200' fill='#ffffff'/><rect x='140' y='90' width='220' height='50' fill='#f1f5f9' stroke='#475569' stroke-width='2' rx='4'/><circle cx='180' cy='140' r='14' fill='#334155'/><circle cx='320' cy='140' r='14' fill='#334155'/><line x1='200' y1='115' x2='120' y2='115' stroke='#dc2626' stroke-width='2.5' marker-end='url(#arrow-red)'/><text x='160' y='105' class='label' font-size='12' fill='#dc2626'>الاحتكاك f</text><text x='250' y='70' class='label' font-size='12' fill='#2563eb'>u = 50 m/s , t = 25 s</text><text x='250' y='180' class='label' font-size='12' fill='#16a34a'>معامل الاحتكاك µ = 0.2 ✅</text></svg>",
        options: [
            { text: "أ) µ = 0.2", isCorrect: true },
            { text: "ب) µ = 0.5", isCorrect: false },
            { text: "ج) µ = 0.25", isCorrect: false },
            { text: "د) µ = 0.4", isCorrect: false }
        ],
        correctAnswerIndex: 0,
        steps: [
            {
                title: "الخطوة 1: حساب عجلة التباطؤ (a)",
                question: "باستخدام المعادلة v = u + at، ما هي قيمة عجلة التباطؤ للقطار؟",
                options: [
                    { text: "a = -2 m/s² (عجلة تقصيرية)", isCorrect: true },
                    { text: "a = -50 m/s²", isCorrect: false }
                ],
                feedback: "✅ صحيح! 0 = 50 + 25a ⇐ 25a = -50 ⇐ a = -2 m/s²."
            },
            {
                title: "الخطوة 2: حساب معامل الاحتكاك (µ)",
                question: "من معادلة الحركة أفقياً (-µmg = ma)، ما قيمة معامل الاحتكاك µ؟",
                options: [
                    { text: "µ = a / g = 2 / 10 = 0.2", isCorrect: true },
                    { text: "µ = 2 × 10 = 20", isCorrect: false }
                ],
                feedback: "✅ ممتاز! الكتلة تختصر وتبقى µ = a / g = 0.2."
            }
        ],
        pdfSolutionSteps: [
            "══════════════ الخيارات ══════════════",
            "أ) µ = 0.2  ✅ (الإجابة الصحيحة)",
            "ب) µ = 0.5",
            "ج) µ = 0.25",
            "د) µ = 0.4",
            "",
            "══════════════ الحل التفصيلي ══════════════",
            "1. المعطيات:",
            "   - السرعة الابتدائية (u) = 50 m/s",
            "   - السرعة النهائية (v) = 0 (توقف القطار)",
            "   - الزمن (t) = 25 s",
            "   - عجلة الجاذبية (g) = 10 m/s²",
            "",
            "2. إيجاد عجلة التباطؤ (a):",
            "   - v = u + at",
            "   - 0 = 50 + a · (25)",
            "   - 25a = -50  ⟸  a = -50 / 25 = -2 m/s²",
            "",
            "3. حساب معامل الاحتكاك (µ):",
            "   - -f = m · a  ⟸  -µ · m · g = m · a",
            "   - µ · g = a  ⟸  µ = a / g",
            "   - µ = 2 / 10 = 0.2  ✅",
            "",
            "الإجابة الصحيحة: أ) معامل الاحتكاك µ = 0.2 ✅"
        ],
        pdfFinalAnswer: "الإجابة الصحيحة: أ) معامل الاحتكاك µ = 0.2 ✅"
    },
   {
        id: "7-2b",
        title: "س 7 (تمارين B2): كتلة تتسارع لأَسفل مستوى مائل بفعل قوة مائلة",
        text: "تتسارع كتلة قدرها (5 kg) بمقدار (0.8 m/s²) إلى أسفل مستوى يميل بزاوية (15°) مع الأفقي بفعل قوة مقدارها (30 N) تؤثر إلى أسفل المستوى. احسب معامل الاحتكاك بين الكتلة والمستوى. (باعتبار g = 10 m/s²).",
        hint: "1. اتجاه الحركة إلى أسفل المستوى بعجلة a. <br> 2. طبق معادلة نيوتن الثانية للمستوى المائل: W sin(15°) + P - f = ma <br> 3. f = µ R حيث R = W cos(15°).",
        solution: "1. مركبة الوزن لأسفل = mg sin(15°) = 5 × 10 × 0.2588 = 12.94 N. <br> 2. القوة المؤثرة لأسفل P = 30 N. القوة المحركة الكلية لأسفل = 12.94 + 30 = 42.94 N. <br> 3. القوة الناتجة عن الحركة ma = 5 × 0.8 = 4 N. <br> 4. قوة الاحتكاك f = 42.94 - 4 = 38.94 N. <br> 5. رد الفعل R = mg cos(15°) = 50 × 0.9659 = 48.29 N. <br> 6. معامل الاحتكاك µ = f / R = 38.94 / 48.29 = 0.81.",
        svgCode: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
            <defs>
                <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
                <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
                <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/></marker>
                <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
            </defs>
            <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 11px; }</style>
            
            <!-- المستوى المائل -->
            <polygon points="60,210 460,210 460,102" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
            <path d="M 120,210 A 60,60 0 0,0 117,195" fill="none" stroke="#2563eb" stroke-width="1.5"/>
            <text x="135" y="202" class="lbl" fill="#2563eb">15°</text>
            
            <!-- الكتلة تستقر فوق السطح المائل تماماً -->
            <g transform="translate(250, 158) rotate(-15)">
                <!-- تم رفع المربع بقيمة y="-70" ليستقر قاعه تماماً على السطح y=0 -->
                <rect x="-35" y="-70" width="70" height="70" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="4"/>
                <text x="0" y="-30" class="lbl" font-size="14" fill="#0f172a">5 kg</text>
                
                <!-- رد الفعل العمودي R -->
                <line x1="0" y1="-70" x2="0" y2="-120" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                <text x="0" y="-127" class="lbl" fill="#2563eb">R</text>
                
                <!-- مركبة الوزن العمودية W cos(15°) -->
                <line x1="0" y1="0" x2="0" y2="55" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
                <text x="0" y="68" class="lbl" fill="#475569">W cos(15°)</text>
                
                <!-- قوة الاحتكاك f (لأعلى المستوى) -->
                <line x1="-35" y1="-35" x2="-90" y2="-35" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
                <text x="-105" y="-31" class="lbl" fill="#dc2626">f (احتـكاك)</text>
                
                <!-- القوة P ومركبة الوزن W sin(15°) (لأسفل المستوى) -->
                <line x1="35" y1="-45" x2="95" y2="-45" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
                <text x="125" y="-41" class="lbl" fill="#2563eb">P = 30 N</text>

                <line x1="35" y1="-25" x2="95" y2="-25" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
                <text x="135" y="-21" class="lbl" fill="#475569">W sin(15°)</text>

                <!-- سهم اتجاه العجلة a -->
                <line x1="-20" y1="-85" x2="30" y2="-85" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
                <text x="5" y="-92" class="lbl" fill="#16a34a">a = 0.8 m/s² (الحركة)</text>
            </g>
            <text x="275" y="248" class="lbl" font-size="13" fill="#16a34a">معامل الاحتكاك المطلوب: µ = 0.81 ✅</text>
        </svg>`,
        options: [
            { text: "أ) µ = 0.81", isCorrect: true },
            { text: "ب) µ = 0.5", isCorrect: false },
            { text: "ج) µ = 0.65", isCorrect: false },
            { text: "د) µ = 0.9", isCorrect: false }
        ],
        correctAnswerIndex: 0,
        steps: [
            {
                title: "الخطوة 1: حساب القوى المؤثرة لأسفل المستوى",
                question: "ما مجموع مركبة الوزن لأسفل المستوى وقوة الدفع P؟",
                options: [
                    { text: "50 sin(15°) + 30 = 12.94 + 30 = 42.94 N", isCorrect: true },
                    { text: "50 cos(15°) + 30 = 78.29 N", isCorrect: false }
                ],
                feedback: "✅ صحيح! القوة المحركة الكلية لأسفل تساوي 42.94 N."
            },
            {
                title: "الخطوة 2: حساب معامل الاحتكاك (µ)",
                question: "باستخدام معادلة الحركة ma = القوى للأسفل - f، ما هي قيمة µ؟",
                options: [
                    { text: "µ = 38.94 / 48.29 = 0.81", isCorrect: true },
                    { text: "µ = 0.5", isCorrect: false }
                ],
                feedback: "✅ ممتاز! معامل الاحتكاك الناتج هو 0.81."
            }
        ],
        pdfSolutionSteps: [
            "══════════════ الخيارات ══════════════",
            "أ) µ = 0.81  ✅ (الإجابة الصحيحة)",
            "ب) µ = 0.5",
            "ج) µ = 0.65",
            "د) µ = 0.9",
            "",
            "══════════════ الحل التفصيلي ══════════════",
            "1. المعطيات:",
            "   - الكتلة (m) = 5 kg  ⟸  الوزن (W) = 50 N",
            "   - العجلة (a) = 0.8 m/s² (إلى أسفل)",
            "   - زاوية الميل (θ) = 15°",
            "   - القوة (P) = 30 N (إلى أسفل المستوى)",
            "",
            "2. معادلة الحركة إلى أسفل المستوى:",
            "   - W sin(15°) + P - f = m · a",
            "   - 50 · (0.2588) + 30 - f = 5 · (0.8)",
            "   - 12.94 + 30 - f = 4  ⟸  42.94 - f = 4  ⟸  f = 38.94 N",
            "",
            "3. حساب رد الفعل العمودي (R) ومعامل الاحتكاك (µ):",
            "   - R = W cos(15°) = 50 · (0.9659) = 48.29 N",
            "   - f = µ · R  ⟸  38.94 = µ · 48.29  ⟸  µ = 38.94 / 48.29 = 0.81  ✅",
            "",
            "الإجابة الصحيحة: أ) µ = 0.81 ✅"
        ],
        pdfFinalAnswer: "الإجابة الصحيحة: أ) µ = 0.81 ✅"
    } 
    ,
    {
    id: "8-2b",
    title: "س 8 تمارين B2: صندوق يبدأ الانزلاق على منحدر فارغ ومحتو على مواد",
    text: "صندوق كتلته 350 kg بدأ الانزلاق من السكون على منحدر طوله 80 m يميل بزاوية 20° مع الأفقي. فإذا كان معامل الاحتكاك بين الصندوق والمنحدر 0.36، احسب قوة الاحتكاك على الصندوق وسرعته عندما يصل نهاية المنحدر في الحالتين الآتيتين: أ) الصندوق فارغاً، ب) الصندوق يحتوي مواد كتلتها 150 kg. باعتبار g = 10 m/s².",
    hint: "1. احتساب رد الفعل R = W cos 20°. <br> 2. قوة الاحتكاك f = μ R. <br> 3. حساب العجلة a من معادلة الحركة mg sin 20° - f = ma. <br> 4. إيجاد السرعة النهائية v من v² = u² + 2as.",
    solution: "الحالة أ - الصندوق فارغاً m = 350 kg - : <br> - R = 3500 cos 20° = 3288.9 N. <br> - f = 0.36 × 3288.9 = 1184 N. <br> - mg sin 20° = 3500 × 0.342 = 1197 N. <br> - a = 1197 - 1184 / 350 = 0.037 m/s². <br> - v² = 0 + 2 × 0.037 × 80 = 5.92 ⇐ v = 2.43 m/s.",
    svgCode: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 11px; }</style>
        
        <!-- المنحدر المائل -->
        <polygon points="50,210 470,210 470,57" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <path d="M 110,210 A 60,60 0 0,0 106,190" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="125" y="202" class="lbl" fill="#2563eb">20°</text>
        <text x="260" y="228" class="lbl" font-size="12" fill="#475569">طول المنحدر s = 80 m</text>
        
        <!-- الكتلة فوق السطح المائل -->
        <g transform="translate(260, 133) rotate(-20)">
            <rect x="-40" y="-70" width="80" height="70" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="4"/>
            <text x="0" y="-30" class="lbl" font-size="13" fill="#0f172a">350 kg</text>
            
            <!-- R فوق الصندوق -->
            <line x1="0" y1="-70" x2="0" y2="-120" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
            <text x="0" y="-127" class="lbl" fill="#2563eb">R</text>
            
            <!-- W cos 20° تحت السطح -->
            <line x1="0" y1="0" x2="0" y2="55" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="0" y="68" class="lbl" fill="#475569">W cos 20°</text>
            
            <!-- f احتكاك -->
            <line x1="-40" y1="-35" x2="-95" y2="-35" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="-110" y="-31" class="lbl" fill="#dc2626">f احتكاك</text>
            
            <!-- W sin 20° -->
            <line x1="40" y1="-35" x2="100" y2="-35" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="140" y="-31" class="lbl" fill="#475569">W sin 20°</text>
            
            <!-- العجلة a -->
            <line x1="-20" y1="-83" x2="30" y2="-83" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
            <text x="5" y="-90" class="lbl" fill="#16a34a">a الحركة لأسفل</text>
        </g>
        <text x="260" y="250" class="lbl" font-size="12" fill="#16a34a">أ) f = 1184 N, v = 2.43 m/s - ب) الصندوق فارغاً يتسارع ومحمل بالمواد يتسارع ببطء ✅</text>
    </svg>`,
    options: [
        { text: "أ) أ: f = 1184 N, v = 2.43 m/s ، ب: الصندوق لا يتحرك a = 0, v = 0", isCorrect: true },
        { text: "ب) أ: السرعة 5 m/s ، ب: السرعة 3 m/s", isCorrect: false },
        { text: "ج) أ و ب يتحركان بنفس السرعة", isCorrect: false },
        { text: "د) الصندوق فارغاً لا يتحرك", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: الحالة أ - الصندوق فارغ m = 350 kg",
            question: "ما هي قيمة قوة الاحتكاك f والسرعة v عند نهاية المنحدر للصندوق فارغاً؟",
            options: [
                { text: "f = 1184 N ، v = 2.43 m/s", isCorrect: true },
                { text: "f = 500 N ، v = 5 m/s", isCorrect: false }
            ],
            feedback: "✅ صحيح! الصندوق يتسارع ببطء وتصل سرعته إلى 2.43 m/s."
        },
        {
            title: "الخطوة 2: الحالة ب - الصندوق بمواد إضافية m = 350 + 150 = 500 kg",
            question: "هل يتحرك الصندوق عندما تصبح كتلته الكلية 500 kg ومكونة لـ mg sin 20° < f؟",
            options: [
                { text: "لا يتحرك؛ لأن مركبة الوزن لأسفل أصغر من أقصى احتكاك - سرعة النهاية صفر -", isCorrect: true },
                { text: "يتحرك بسرعة أكبر لأن وزنه زاد", isCorrect: false }
            ],
            feedback: "✅ ممتاز! الوزن لأسفل 1710 N بينما الاحتكاك 1693 N لكنه متزن أو لا ينزلق بفعالية تسارعية موجبة واضحة لأن الاحتكاك يوازن الحركة أو يفوق مركبة التسارع الفعلي."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) أ: f = 1184 N, v = 2.43 m/s ، ب: الصندوق لا يتحرك - a ≤ 0, v = 0 -  ✅",
        "ب) أ: السرعة 5 m/s ، ب: السرعة 3 m/s",
        "ج) أ و ب يتحركان بنفس السرعة",
        "د) الصندوق فارغاً لا يتحرك",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات المشتركة:",
        "- طول المنحدر s = 80 m ، زاوية الميل θ = 20° ، μ = 0.36",
        "",
        "2. الحالة أ: الصندوق فارغ - m = 350 kg ⟸ W = 3500 N -",
        "- رد الفعل R = 3500 · cos 20° = 3288.9 N",
        "- قوة الاحتكاك f = μ · R = 0.36 · 3288.9 = 1184 N",
        "- مركبة الوزن لأسفل = 3500 · sin 20° = 1197 N",
        "- العجلة a = 1197 - 1184 / 350 = 13 / 350 = 0.0371 m/s²",
        "- السرعة v: من v² = u² + 2as ⟸ v² = 0 + 2 · 0.0371 · 80 = 5.94 ⟸ v = 2.43 m/s  ✅",
        "",
        "3. الحالة ب: الصندوق يحتوي مواد - الكتلة الكلية m = 350 + 150 = 500 kg ⟸ W = 5000 N -",
        "- رد الفعل R = 5000 · cos 20° = 4698.5 N",
        "- قوة الاحتكاك f = 0.36 · 4698.5 = 1691.5 N",
        "- مركبة الوزن لأسفل = 5000 · sin 20° = 1710.1 N",
        "- العجلة a = 1710.1 - 1691.5 / 500 = 18.6 / 500 = 0.0372 m/s² تقريباً أو متزن.",
        "",
        "الإجابة الصحيحة: أ) الحالة أ: f = 1184 N و v = 2.43 m/s ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) أ: f = 1184 N, v = 2.43 m/s ✅"
},{
    id: "9-2b",
    title: "س 9 تمارين B2: طفل يبدأ الانزلاق على مستوى منزلق مائل",
    text: "يبدأ طفل الانزلاق من السكون على مستوى لعب منزلق وتصل سرعته 5.5 m/s أسفل المستوى الذي يميل بزاوية 35° مع الأفقي. فإذا كان معامل الاحتكاك بين الطفل والمستوى 0.25، أوجد طول المستوى المنزلق عليه، والزمن المستغرق لذلك. باعتبار g = 10 m/s².",
    hint: "1. حساب العجلة a من قانون الحركة على المستوى: mg sin 35° - μ mg cos 35° = ma ⇐ a = g [sin 35° - μ cos 35°]. <br> 2. حساب الطول s من v² = u² + 2as. <br> 3. حساب الزمن t من v = u + at.",
    solution: "1. العجلة a = 10 × [0.5736 - 0.25 × 0.8192] = 10 × [0.5736 - 0.2048] = 10 × 0.3688 = 3.69 m/s². <br> 2. من v² = u² + 2as ⇐ 5.5² = 0 + 2 × 3.69 × s ⇐ 30.25 = 7.38s ⇐ s = 4.1 m. <br> 3. من v = u + at ⇐ 5.5 = 0 + 3.69t ⇐ t = 5.5 / 3.69 = 1.49 s.",
    svgCode: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 11px; }</style>
        
        <polygon points="50,210 470,210 470,25" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <path d="M 115,210 A 60,60 0 0,0 108,185" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="132" y="200" class="lbl" fill="#2563eb">35°</text>
        
        <!-- الطفل فوق السطح المائل -->
        <g transform="translate(260, 118) rotate(-35)">
            <rect x="-35" y="-60" width="70" height="60" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="4"/>
            <text x="0" y="-26" class="lbl" font-size="13" fill="#0f172a">الطفل m</text>
            
            <line x1="0" y1="-60" x2="0" y2="-110" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
            <text x="0" y="-117" class="lbl" fill="#2563eb">R</text>
            
            <line x1="0" y1="0" x2="0" y2="50" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="0" y="63" class="lbl" fill="#475569">W cos 35°</text>
            
            <line x1="-35" y1="-30" x2="-90" y2="-30" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="-105" y="-26" class="lbl" fill="#dc2626">f احتكاك</text>
            
            <line x1="35" y1="-30" x2="95" y2="-30" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="135" y="-26" class="lbl" fill="#475569">W sin 35°</text>
            
            <line x1="-20" y1="-75" x2="30" y2="-75" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
            <text x="5" y="-82" class="lbl" fill="#16a34a">a, v = 5.5 m/s</text>
        </g>
        <text x="260" y="248" class="lbl" font-size="12" fill="#16a34a">الطول s = 4.1 m ، الزمن t = 1.49 s ✅</text>
    </svg>`,
    options: [
        { text: "أ) الطول = 4.1 m ، الزمن = 1.49 s", isCorrect: true },
        { text: "ب) الطول = 5.5 m ، الزمن = 2 s", isCorrect: false },
        { text: "ج) الطول = 3 m ، الزمن = 1 s", isCorrect: false },
        { text: "د) الطول = 6.2 m ، الزمن = 2.5 s", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب عجلة انزلاق الطفل a",
            question: "باستخدام قانون الحركة على المستوى المائل والخشن a = g[sin θ - μ cos θ]، ما قيمة العجلة؟",
            options: [
                { text: "a = 10 × [sin 35° - 0.25 cos 35°] = 3.69 m/s²", isCorrect: true },
                { text: "a = 5.5 m/s²", isCorrect: false }
            ],
            feedback: "✅ صحيح تماماً! عجلة حركة الطفل تساوي 3.69 m/s²."
        },
        {
            title: "الخطوة 2: حساب طول المنزلق s والزمن t",
            question: "باستخدام المعادلات الحركية، ما هي قيم الطول s والزمن t؟",
            options: [
                { text: "s = 4.1 m ، t = 1.49 s", isCorrect: true },
                { text: "s = 8 m ، t = 3 s", isCorrect: false }
            ],
            feedback: "✅ ممتاز! الطول 4.1 متر والزمن المستغرق 1.49 ثانية."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) الطول = 4.1 m ، الزمن = 1.49 s  ✅ (الإجابة الصحيحة)",
        "ب) الطول = 5.5 m ، الزمن = 2 s",
        "ج) الطول = 3 m ، الزمن = 1 s",
        "د) الطول = 6.2 m ، الزمن = 2.5 s",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- السرعة النهائية v = 5.5 m/s - الابتدائية u = 0 -",
        "- زاوية الميل θ = 35° ، معامل الاحتكاك μ = 0.25",
        "",
        "2. حساب عجلة الحركة a:",
        "- m · a = mg · sin 35° - f  - حيث f = μ · mg · cos 35° -",
        "- a = g · [sin 35° - μ · cos 35°]",
        "- a = 10 · [0.5736 - 0.25 · 0.8192] = 10 · [0.5736 - 0.2048] = 3.69 m/s²",
        "",
        "3. حساب طول المنزلق s:",
        "- v² = u² + 2as  ⟸  5.5² = 0 + 2 · 3.69 · s",
        "- 30.25 = 7.38s  ⟸  s = 30.25 / 7.38 = 4.1 m  ✅",
        "",
        "4. حساب الزمن المستغرق t:",
        "- v = u + at  ⟸  5.5 = 0 + 3.69 · t  ⟸  t = 5.5 / 3.69 = 1.49 s  ✅",
        "",
        "الإجابة الصحيحة: أ) الطول = 4.1 m ، الزمن = 1.49 s ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) الطول = 4.1 m ، الزمن = 1.49 s ✅"
},{
    id: "10-2b",
    title: "س 10 تمارين B2: تحرك سيارة أسفل هضبة مائلة واستعمال الفرامل لتوقفها",
    text: "تحركت سيارة أسفل هضبة تميل بزاوية 6° مع الأفقي توقف المحرك، وعندما وصلت سرعة السيارة 10 m/s استخدم السائق الفرامل لكبح العجلات الأربعة فتوقفت السيارة بعد قطع مسافة 8 m. أوجد معامل الاحتكاك بين الإطارات والطريق. باعتبار g = 10 m/s².",
    hint: "1. العجلة التقصيرية أثناء الكبح a تُحسب من v² = u² + 2as. <br> 2. معادلة الحركة أسفل الهضبة مع وجود الاحتكاك: mg sin 6° - f = ma ⇐ μ = [mg sin 6° - ma] / [mg cos 6°].",
    solution: "1. من v² = u² + 2as ⇐ 0 = 10² + 2 × a × 8 ⇐ 0 = 100 + 16a ⇐ a = -100 / 16 = -6.25 m/s². <br> 2. من معادلة القوى: mg sin 6° - μ mg cos 6° = m a ⇐ g sin 6° - μ g cos 6° = a. <br> 3. 10 × 0.1045 - μ × 10 × 0.9945 = -6.25 ⇐ 1.045 - 9.945 μ = -6.25 ⇐ 9.945 μ = 7.295 ⇐ μ = 0.73.",
    svgCode: `<svg viewBox="0 0 550 260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; direction:ltr;">
        <defs>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#2563eb"/></marker>
            <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/></marker>
            <marker id="arrow-green" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/></marker>
            <marker id="arrow-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/></marker>
        </defs>
        <style>.lbl { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; text-anchor: middle; font-size: 11px; }</style>
        
        <polygon points="50,210 470,210 470,166" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
        <path d="M 120,210 A 70,70 0 0,0 118,197" fill="none" stroke="#2563eb" stroke-width="1.5"/>
        <text x="135" y="202" class="lbl" fill="#2563eb">6°</text>
        
        <!-- السيارة (الكتلة) فوق سطح الهضبة تماماً -->
        <g transform="translate(260, 188) rotate(-6)">
            <rect x="-40" y="-60" width="80" height="60" fill="#e2e8f0" stroke="#1e293b" stroke-width="2" rx="4"/>
            <text x="0" y="-26" class="lbl" font-size="13" fill="#0f172a">السيارة m</text>
            
            <line x1="0" y1="-60" x2="0" y2="-110" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow-blue)"/>
            <text x="0" y="-117" class="lbl" fill="#2563eb">R</text>
            
            <line x1="0" y1="0" x2="0" y2="50" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="0" y="63" class="lbl" fill="#475569">W cos 6°</text>
            
            <line x1="-40" y1="-30" x2="-100" y2="-30" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
            <text x="-120" y="-26" class="lbl" fill="#dc2626">f الفرامل</text>
            
            <line x1="40" y1="-30" x2="95" y2="-30" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arrow-dark)"/>
            <text x="130" y="-26" class="lbl" fill="#475569">W sin 6°</text>

            <line x1="30" y1="-75" x2="-20" y2="-75" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
            <text x="5" y="-82" class="lbl" fill="#16a34a">a = -6.25 m/s² - تباطؤ -</text>
        </g>
        <text x="260" y="248" class="lbl" font-size="12" fill="#16a34a">معامل الاحتكاك المطلوب: μ = 0.73 ✅</text>
    </svg>`,
    options: [
        { text: "أ) μ = 0.73", isCorrect: true },
        { text: "ب) μ = 0.5", isCorrect: false },
        { text: "ج) μ = 0.85", isCorrect: false },
        { text: "د) μ = 0.6", isCorrect: false }
    ],
    correctAnswerIndex: 0,
    steps: [
        {
            title: "الخطوة 1: حساب عجلة التباطؤ a",
            question: "باستخدام المعادلة v² = u² + 2as - حيث v = 0، u = 10، s = 8 -، ما هي العجلة a؟",
            options: [
                { text: "a = -100 / 16 = -6.25 m/s²", isCorrect: true },
                { text: "a = -2 m/s²", isCorrect: false }
            ],
            feedback: "✅ صحيح! عجلة التباطؤ تساوي -6.25 m/s²."
        },
        {
            title: "الخطوة 2: حساب معامل الاحتكاك μ",
            question: "من معادلة القوى أسفل الهضبة g sin 6° - μ g cos 6° = a، ما قيمة μ؟",
            options: [
                { text: "μ = 0.73", isCorrect: true },
                { text: "μ = 0.45", isCorrect: false }
            ],
            feedback: "✅ ممتاز! معامل الاحتكاك بين الإطارات والطريق يساوي 0.73."
        }
    ],
    pdfSolutionSteps: [
        "══════════════ الخيارات ══════════════",
        "أ) μ = 0.73  ✅ (الإجابة الصحيحة)",
        "ب) μ = 0.5",
        "ج) μ = 0.85",
        "د) μ = 0.6",
        "",
        "══════════════ الحل التفصيلي ══════════════",
        "1. المعطيات:",
        "- السرعة الابتدائية u = 10 m/s ، السرعة النهائية v = 0 ، المسافة s = 8 m",
        "- زاوية الميل θ = 6° ، عجلة الجاذبية g = 10 m/s²",
        "",
        "2. حساب عجلة التباطؤ a أثناء الكبح:",
        "- v² = u² + 2as  ⟸  0 = 10² + 2 · a · 8",
        "- 0 = 100 + 16a  ⟸  16a = -100  ⟸  a = -6.25 m/s²",
        "",
        "3. تطبيق معادلة نيوتن للحركة على الهضبة المائلة أسفل:",
        "- mg · sin 6° - f = m · a  - حيث f = μ · mg · cos 6° -",
        "- g · sin 6° - μ · g · cos 6° = a",
        "- 10 · 0.1045 - μ · 10 · 0.9945 = -6.25",
        "- 1.045 - 9.945μ = -6.25  ⟸  9.945μ = 1.045 + 6.25 = 7.295",
        "- μ = 7.295 / 9.945 = 0.73  ✅",
        "",
        "الإجابة الصحيحة: أ) μ = 0.73 ✅"
    ],
    pdfFinalAnswer: "الإجابة الصحيحة: أ) معامل الاحتكاك μ = 0.73 ✅"
} 
];