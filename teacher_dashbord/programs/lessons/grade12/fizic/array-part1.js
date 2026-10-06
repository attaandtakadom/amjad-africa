const questionsMatrix = [
      {
    "title": "س 30 (2021-2022): شدة المجال الكهربائي حول بروتون",
    "text": "شدة المجال الكهربائي عند نقطة تبعد 200 cm من بروتون هي:",
    "options": [
        { "text": "1.2 × 10⁻¹⁰ N/C", "isCorrect": false },
        { "text": "7.2 × 10⁻¹⁰ N/C", "isCorrect": false },
        { "text": "3.6 × 10⁻¹⁰ N/C", "isCorrect": true },
        { "text": "6.1 × 10¹⁰ N/C", "isCorrect": false }
    ],
    "svgCode": "<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'><rect width='400' height='150' fill='#ffffff'/><circle cx='120' cy='75' r='18' fill='#ef4444' stroke='#333' stroke-width='2'/><text x='120' y='80' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>+</text><text x='120' y='110' text-anchor='middle' font-size='12'>بروتون</text><line x1='138' y1='75' x2='280' y2='75' stroke='#333' stroke-width='2'/><text x='210' y='65' text-anchor='middle' font-size='14' font-weight='bold'>r = 200 cm</text><circle cx='280' cy='75' r='5' fill='#d00'/><text x='290' y='70' font-size='12' font-weight='bold'>P</text></svg>",
    "steps": [
        {
            "title": "المرحلة الأولى: قانون المجال الكهربائي",
            "question": "ما هو قانون المجال الكهربائي الناتج عن شحنة نقطية؟",
            "options": [
                { "text": "E = k × Q / r²", "isCorrect": true },
                { "text": "E = k × Q × r²", "isCorrect": false }
            ],
            "feedback": "صحيح! قانون المجال الكهربائي الناتج عن شحنة نقطية هو E = k × Q / r²"
        },
        {
            "title": "المرحلة الثانية: المعطيات والتحويل",
            "question": "ما شحنة البروتون والمسافة بوحدة المتر (m)؟",
            "options": [
                { "text": "Q = 1.6 × 10⁻¹⁹ C, r = 2 m", "isCorrect": true },
                { "text": "Q = 1.6 × 10⁻¹⁹ C, r = 200 m", "isCorrect": false }
            ],
            "feedback": "ممتاز! Q = 1.6 × 10⁻¹⁹ C والمسافة r = 200 cm = 2 m."
        },
        {
            "title": "المرحلة الثالثة: حساب شدة المجال",
            "question": "بالتعويض في القانون، ما قيمة شدة المجال الكهربائي E؟",
            "options": [
                { "text": "3.6 × 10⁻¹⁰ N/C", "isCorrect": true },
                { "text": "7.2 × 10⁻¹⁰ N/C", "isCorrect": false },
                { "text": "1.2 × 10⁻¹⁰ N/C", "isCorrect": false }
            ],
            "feedback": "إجابة صحيحة! E = (9×10⁹) × (1.6×10⁻¹⁹) / (2)² = 3.6 × 10⁻¹⁰ N/C"
        }
    ],
    "pdfSolutionSteps": [
        "<div><strong>🔍 الحل المفصل:</strong></div>",
        "<div>شحنة البروتون Q = 1.6 × 10⁻¹⁹ C</div>",
        "<div>المسافة r = 200 cm = 2 m | ثابت كولوم k = 9 × 10⁹ N·m²/C²</div>",
        "<div>قانون المجال الكهربائي: E = k × Q / r²</div>",
        "<div>E = (9 × 10⁹) × (1.6 × 10⁻¹⁹) / (2)² = 3.6 × 10⁻¹⁰ N/C</div>"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: (ج) 3.6 × 10⁻¹⁰ N/C"
},

  {
    "title": "س: اتزان كرة مشحونة داخل مجال كهربائي منتظم",
    "text": "صفيحتان معدنيتان مشحونتان مقدار المجال الكهربائي بينهما (200 N/C) علقت كرة كتلتها (2 g) وشحنتها موجبة فاتزنت عندما أصبحت قوة الشد في الخيط تساوي (28 × 10⁻³ N)، فإن مقدار الشحنة الكهربائية التي تحملها الكرة تساوي:",
    "options": [
      { "text": "أ) 40 μC", "isCorrect": true },
      { "text": "ب) 4 μC", "isCorrect": false },
      { "text": "ج) 2.4 μC", "isCorrect": false },
      { "text": "د) 10 μC", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": "<svg viewBox='0 0 500 380' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.plate-pos { fill: #fee2e2; stroke: #ef4444; stroke-width: 2; } .plate-neg { fill: #e0f2fe; stroke: #0ea5e9; stroke-width: 2; } .wire-string { stroke: #475569; stroke-width: 2; } .vector-arrow { stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; } .arrow-t { stroke: #10b981; fill: #10b981; } .arrow-w { stroke: #1e293b; fill: #1e293b; } .arrow-fe { stroke: #dc2626; fill: #dc2626; } .sphere { fill: #f59e0b; stroke: #d97706; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .text-green { fill: #10b981; font-size: 13px; } .text-red { fill: #dc2626; font-size: 13px; } .text-black { fill: #1e293b; font-size: 13px; }</style><rect width='500' height='380' fill='#ffffff'/><g transform='translate(50, 20)'><rect x='40' y='40' width='320' height='20' rx='4' class='plate-neg'/><text x='200' y='55' class='label' font-size='12' fill='#0369a1'>صفيحة سالبة (-)</text><rect x='40' y='260' width='320' height='20' rx='4' class='plate-pos'/><text x='200' y='275' class='label' font-size='12' fill='#b91c1c'>صفيحة موجبة (+)</text><line x1='200' y1='60' x2='200' y2='150' class='wire-string'/><circle cx='200' cy='150' r='16' class='sphere'/><text x='200' y='154' class='label' font-size='12' fill='#ffffff'>+q</text><line x1='180' y1='130' x2='180' y2='75' class='vector-arrow arrow-t'/><polygon points='180,70 175,82 185,82' class='arrow-t'/><text x='130' y='105' class='label text-green'>الشد T لأعلى</text><text x='130' y='122' class='label text-green'>28 × 10⁻³ N</text><line x1='200' y1='166' x2='200' y2='220' class='vector-arrow arrow-w'/><polygon points='200,225 195,213 205,213' class='arrow-w'/><text x='270' y='195' class='label text-black'>الوزن W لأسفل</text><text x='270' y='212' class='label text-black'>20 × 10⁻³ N</text><line x1='220' y1='150' x2='220' y2='205' class='vector-arrow arrow-fe'/><polygon points='220,210 215,198 225,198' class='arrow-fe'/><text x='290' y='145' class='label text-red'>القوة الكهربائية Fe لأسفل</text><text x='290' y='162' class='label text-red'>8 × 10⁻³ N</text><text x='200' y='320' class='label' font-size='14' fill='#1e293b'>المجال الكهربائي E = 200 N/C (لأسفل)</text><text x='200' y='345' class='label' font-size='14' fill='#2563eb'>عند الاتزان: T = W + Fe ومنها q = 40 μC</text></g></svg>",
    "steps": [
      {
        "title": "الخطوة 1: حساب قوة الوزن وتحليل كفتي القوى",
        "question": "عند حساب الوزن W = m × g وجدنا أنه يساوي 20 × 10⁻³ N، بينما قوة الشد لأعلى المعطاة هي 28 × 10⁻³ N. لكي تتزن الكرة ميكانيكياً، في أي اتجاه يجب أن تؤثر القوة الكهربائية (Fe)؟",
        "options": [
          { "text": "إلى أسفل (مع اتجاه الوزن) لتساعده في موازنة قوة الشد الكبيرة التي تسحب لأعلى.", "isCorrect": true },
          { "text": "إلى أعلى (مع اتجاه الشد) لأن الشحنة موجبة والمجال لأسفل.", "isCorrect": false }
        ],
        "feedback": "✅ ممتاز جداً! بما أن قوة الشد لأعلى (28) أكبر من الوزن لأسفل (20)، فإن الكرة بحاجة لقوة إضافية تشدها لأسفل بمقدار 8 × 10⁻³ N لتتعادل الكفتان ويحدث الاتزان الكامل."
      },
      {
        "title": "الخطوة 2: حساب مقدار الشحنة وتحويلها",
        "question": "بناءً على أن القوة الكهربائية Fe = 8 × 10⁻³ N وشدة المجال E = 200 N/C، كم يبلغ مقدار الشحنة الكهربائية بوحدة الميكروكولوم (μC)؟",
        "options": [
          { "text": "40 μC، بعد قسمة القوة على المجال ثم الضرب في 10⁶ للتحويل من كولوم إلى ميكروكولوم.", "isCorrect": true },
          { "text": "4 μC، نتيجة القسمة المباشرة دون مراعاة تحويل ميكرو.", "isCorrect": false }
        ],
        "feedback": "✅ إجابة رائعة وصحيحة! ناتج القسمة يعطي 4 × 10⁻⁵ C، وعند ضربها في 10⁶ تتحول إلى 40 μC تماماً."
      }
    ],
    "pdfSolutionSteps": [
      "شرح مسألة اتزان الكرة المشحونة داخل المجال الكهربائي بالتفصيل المطور:",
      "• أولاً: تحويل الوحدات وحساب الوزن (W):",
      "  - يتم تحويل الكتلة من جرام إلى كيلوجرام: m = 2 g = 2 × 10⁻³ kg.",
      "  - نحسب الوزن لأسفل: W = m × g = (2 × 10⁻³ kg) × 10 = 20 × 10⁻³ N.",
      " ",
      "• ثانياً: تحليل الاتزان وتحديد اتجاه القوة الكهربائية (Fe):",
      "  - الكرة متزنة تحت تأثير ثلاث قوى: الشد لأعلى (T)، والوزن لأسفل (W)، والقوة الكهربائية (Fe).",
      "  - نلاحظ أن الشد لأعلى (28 × 10⁻³ N) أكبر من الوزن لأسفل (20 × 10⁻³ N).",
      "  - لكي يحدث اتزان، يجب أن تؤثر القوة الكهربائية لأسفل مضافةً إلى الوزن لتساوي قوة الشد.",
      "  - معادلة الاتزان: T = W + Fe  =>  28 × 10⁻³ = 20 × 10⁻³ + Fe.",
      "  - ومنها: Fe = 8 × 10⁻³ N (واتجاهها لأسفل).",
      " ",
      "• ثالثاً: حساب مقدار الشحنة (q):",
      "  - من القانون: Fe = q × E  =>  q = Fe / E.",
      "  - q = (8 × 10⁻³ N) / 200 N/C = 4 × 10⁻⁵ C.",
      "  - للتحويل إلى ميكروكولوم (μC): q = 4 × 10⁻⁵ × 10⁶ = 40 μC.",
      "--------------------------------------------------",
      "💡 [قاعدة فيزيائية ذهبية للطلاب]:",
      "في مسائل الاتزان الخيطي، قارن دائماً القوى الأساسية المعلومة (الشد والوزن)، فالقوة المجهولة (الكهربائية) ستكون دائماً في صف الطرف الأضعف لتصنع التعادل والاتزان.",
      "--------------------------------------------------",
      "الإجابة الصحيحة: أ) 40 μC ✅"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) 40 μC"
  },




  {
    "title": "(سؤال دفعة 2007) قوة التنافر بين جسيمات ألفا",
    "text": "قوة التنافر بين جسمين من جسيمات ألفا (He) عندما تكون المسافة بينهما في الفراغ (5 cm) تساوي:",
    "options": [
        { "text": "1.44 × 10¹³ N", "isCorrect": false },
        { "text": "3.69 × 10⁻²⁹ N", "isCorrect": false },
        { "text": "1.47 × 10⁻²⁴ N", "isCorrect": false },
        { "text": "3.69 × 10⁻²⁵ N", "isCorrect": true }
    ],
    "svgCode": "<svg viewBox='0 0 300 150' xmlns='http://www.w3.org/2000/svg'><rect width='300' height='150' fill='#ffffff'/><circle cx='80' cy='75' r='22' fill='#ef4444' stroke='#333' stroke-width='2'/><text x='80' y='72' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>α</text><text x='80' y='88' text-anchor='middle' fill='white' font-size='10'>He</text><circle cx='220' cy='75' r='22' fill='#ef4444' stroke='#333' stroke-width='2'/><text x='220' y='72' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>α</text><text x='220' y='88' text-anchor='middle' fill='white' font-size='10'>He</text><line x1='102' y1='75' x2='198' y2='75' stroke='#333' stroke-width='2'/><line x1='110' y1='70' x2='110' y2='80' stroke='#333' stroke-width='1.5'/><line x1='190' y1='70' x2='190' y2='80' stroke='#333' stroke-width='1.5'/><text x='150' y='65' text-anchor='middle' font-size='14' font-weight='bold'>r = 5 cm</text><text x='150' y='130' text-anchor='middle' font-size='12' fill='#555'>قوة التنافر بين جسيمات ألفا</text></svg>",
    "steps": [
        {
            "title": "المرحلة الأولى: قانون كولوم",
            "question": "ما هو قانون كولوم المستخدم لحساب القوة الكهربائية بين شحنتين؟",
            "options": [
                { "text": "F = k × q₁ × q₂ / r²", "isCorrect": true },
                { "text": "F = k × q₁ × q₂ / r", "isCorrect": false }
            ],
            "feedback": "صحيح! ثابت كولوم k = 9 × 10⁹ N·m²/C²"
        },
        {
            "title": "المرحلة الثانية: شحنة جسيم ألفا",
            "question": "ما شحنة جسيم ألفا (نواة الهيليوم)؟",
            "options": [
                { "text": "+2e = 3.2 × 10⁻¹⁹ C", "isCorrect": true },
                { "text": "+e = 1.6 × 10⁻¹⁹ C", "isCorrect": false }
            ],
            "feedback": "ممتاز! جسيم ألفا يحتوي على بروتونين، لذا شحنته = +2e."
        },
        {
            "title": "المرحلة الثالثة: حساب القوة",
            "question": "بالتعويض في قانون كولوم، ما قيمة قوة التنافر؟",
            "options": [
                { "text": "3.69 × 10⁻²⁵ N", "isCorrect": true },
                { "text": "3.69 × 10⁻²⁹ N", "isCorrect": false },
                { "text": "1.44 × 10¹³ N", "isCorrect": false }
            ],
            "feedback": "إجابة صحيحة! F = (9×10⁹) × (3.2×10⁻¹⁹)² / (0.05)² = 3.69×10⁻²⁵ N"
        }
    ],
    "pdfSolutionSteps": [
        "<div><strong>🔍 الحل المفصل:</strong></div>",
        "<div>شحنة جسيم ألفا = +2e = 2 × 1.6×10⁻¹⁹ = 3.2×10⁻¹⁹ C</div>",
        "<div>قانون كولوم: F = k × q₁ × q₂ / r²</div>",
        "<div>k = 9×10⁹ N·m²/C² | r = 5 cm = 0.05 m</div>",
        "<div>F = (9×10⁹) × (3.2×10⁻¹⁹)² / (0.05)² = 3.69×10⁻²⁵ N</div>"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: (د) 3.69 × 10⁻²⁵ N"
},
{
"id": 1,
        "title": "س 2 (2007): البرق كتفريغ كهربائي",
        "text": "البرق هو التفريغ الكهربائي الذي يحدث عندما تفرغ السحب شحنتها المتراكمة.",
        // الخيارات الرئيسية للطباعة والعرض المباشر
        "options": [
            { "text": "صحيح", "isCorrect": true },
            { "text": "خطأ", "isCorrect": false }
        ],
        "svgCode": `<svg width='400' height='150' viewBox='0 0 400 150'>
            <rect width='400' height='150' fill='#ffffff'/>
            <path d='M180,20 L150,80 L190,80 L160,140 L220,60 L180,60 L210,20 Z' fill='#fbbf24' stroke='#333'/>
            <text x='200' y='130' text-anchor='middle' font-size='12' font-family='Cairo'>تفريغ كهربائي بين السحب والأرض</text>
        </svg>`,
        // الخطوات التفاعلية
        "steps": [
            {
                "title": "تحديد صحة العبارة",
                "question": "هل البرق عبارة عن تفريغ كهربائي يحدث عندما تفرغ السحب شحنتها المتراكمة؟",
                "options": [
                    { "text": "صحيح", "isCorrect": true },
                    { "text": "خطأ", "isCorrect": false }
                ],
                "feedback": "صحيح! البرق هو تفريغ كهربائي هائل يحدث بين السحب أو بين السحب والأرض."
            }
        ],
        "pdfSolutionSteps": [
            "<div>- البرق هو تفريغ كهربائي يحدث عند تراكم الشحنات في السحب.</div>",
            "<div>- يحدث التفريغ بين السحب نفسها أو بين السحب والأرض.</div>"
        ],
        "pdfFinalAnswer": "الإجابة:أ) صحيح"
    },
    {
        "id": 2,
        "title": "س 4 (2007): القوة الكهربائية كمية متجهة",
        "text": "القوة الكهربائية كمية متجهة وتعمل على الخط الواصل بين الشحنتين، ويكون اتجاهها للخارج في حالة الشحنات المختلفة (موجبة وسالبة).",
        "options": [
            { "text": "صحيح", "isCorrect": false },
            { "text": "خطأ", "isCorrect": true }
        ],
        "svgCode": `<svg width='400' height='150' viewBox='0 0 400 150'>
            <rect width='400' height='150' fill='#ffffff'/>
            <circle cx='120' cy='75' r='15' fill='#ef4444'/>
            <text x='120' y='80' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>+</text>
            <circle cx='280' cy='75' r='15' fill='#2563eb'/>
            <text x='280' y='80' text-anchor='middle' fill='white' font-size='14' font-weight='bold'>-</text>
            <line x1='135' y1='75' x2='265' y2='75' stroke='#333' stroke-width='2' marker-end='url(#arrow)'/>
            <defs>
                <marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'>
                    <polygon points='0 0, 10 5, 0 10' fill='#333'/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "تحديد صحة العبارة",
                "question": "هل اتجاه القوة الكهربائية بين شحنتين مختلفتين (+ و -) يكون للخارج؟",
                "options": [
                    { "text": "خطأ (الاتجاه للداخل بسبب التجاذب)", "isCorrect": true },
                    { "text": "صحيح", "isCorrect": false }
                ],
                "feedback": "خطأ! الشحنات المختلفة تتجاذب، فاتجاه القوة يكون للداخل وليس للخارج."
            }
        ],
        "pdfSolutionSteps": [
            "<div>- الشحنات <strong>المختلفة</strong> (+ و -): تتجاذب ← اتجاه القوة للداخل.</div>",
            "<div>- الشحنات <strong>المتشابهة</strong> (+ و + أو - و -): تتنافر ← اتجاه القوة للخارج.</div>"
        ],
        "pdfFinalAnswer": "الإجابة: ب)خطأ"
    },
    {
        "id": 3,
        "title": "س 30 (2021-2022): شدة المجال الكهربائي حول بروتون",
        "text": "شدة المجال الكهربائي عند نقطة تبعد 200 cm من بروتون هي:",
        "options": [
            { "text": "1.2 × 10⁻¹⁰ N/C", "isCorrect": false },
            { "text": "7.2 × 10⁻¹⁰ N/C", "isCorrect": false },
            { "text": "3.6 × 10⁻¹⁰ N/C", "isCorrect": true },
            { "text": "6.1 × 10⁻¹⁰ N/C", "isCorrect": false }
        ],
        "svgCode": `<svg width='400' height='150' viewBox='0 0 400 150'>
            <rect width='400' height='150' fill='#ffffff'/>
            <circle cx='120' cy='75' r='15' fill='#ef4444'/>
            <text x='120' y='80' text-anchor='middle' fill='white' font-size='12' font-weight='bold'>+</text>
            <text x='120' y='105' text-anchor='middle' font-size='12' font-family='Cairo'>بروتون</text>
            <line x1='135' y1='75' x2='280' y2='75' stroke='#333' stroke-width='2'/>
            <text x='210' y='65' text-anchor='middle' font-size='12' font-family='Cairo'>r = 200 cm = 2 m</text>
            <circle cx='280' cy='75' r='5' fill='#d00'/>
            <text x='290' y='70' font-size='12' font-weight='bold'>P</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: قانون المجال الكهربائي",
                "question": "ما قانون المجال الكهربائي الناتج عن شحنة نقطية؟",
                "options": [
                    { "text": "E = k × Q / r²", "isCorrect": true },
                    { "text": "E = k × Q × r²", "isCorrect": false }
                ],
                "feedback": "صحيح! E = k × Q / r²"
            },
            {
                "title": "المرحلة الثانية: حساب E",
                "question": "باستخدام Q = 1.6×10⁻¹⁹ C و r = 2 m، ما قيمة E؟",
                "options": [
                    { "text": "3.6 × 10⁻¹⁰ N/C", "isCorrect": true },
                    { "text": "7.2 × 10⁻¹⁰ N/C", "isCorrect": false },
                    { "text": "1.2 × 10⁻¹⁰ N/C", "isCorrect": false }
                ],
                "feedback": "ممتاز! E = (9×10⁹ × 1.6×10⁻¹⁹) / (2)² = 3.6×10⁻¹⁰ N/C"
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>المعطيات:</strong></div>",
            "<div>• شحنة البروتون Q = 1.6×10⁻¹⁹ C</div>",
            "<div>• المسافة r = 200 cm = 2 m</div>",
            "<div>• ثابت كولوم k = 9×10⁹ N·m²/C²</div>",
            "<div><strong>الحل:</strong> E = k × Q / r²</div>",
            "<div>E = (9×10⁹ × 1.6×10⁻¹⁹) / (2)² = 14.4×10⁻¹⁰ / 4 = 3.6 × 10⁻¹⁰ N/C</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (ج) 3.6 × 10⁻¹⁰ N/C"
    },
    {
        "id": 4,
        "title": "س (دفعة 2007): قوة التنافر بين جسيمات ألفا",
        "text": "قوة التنافر بين جسمين من جسيمات ألفا (He) عندما تكون المسافة بينهما في الفراغ (5 cm) تساوي:",
        "options": [
            { "text": "1.44 × 10¹³ N", "isCorrect": false },
            { "text": "3.69 × 10⁻²⁹ N", "isCorrect": false },
            { "text": "1.47 × 10⁻²⁴ N", "isCorrect": false },
            { "text": "3.69 × 10⁻²⁵ N", "isCorrect": true }
        ],
        "svgCode": `<svg width='500' height='200' viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='500' height='200' fill='#ffffff'/>
            <circle cx='120' cy='100' r='25' fill='#ef4444' stroke='#333' stroke-width='2'/>
            <text x='120' y='95' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>α</text>
            <text x='120' y='112' text-anchor='middle' fill='white' font-size='10'>He</text>
            <circle cx='380' cy='100' r='25' fill='#ef4444' stroke='#333' stroke-width='2'/>
            <text x='380' y='95' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>α</text>
            <text x='380' y='112' text-anchor='middle' fill='white' font-size='10'>He</text>
            <line x1='145' y1='100' x2='355' y2='100' stroke='#333' stroke-width='2'/>
            <text x='250' y='85' text-anchor='middle' font-size='14' font-family='Cairo'>r = 5 cm = 0.05 m</text>
            <text x='250' y='140' text-anchor='middle' font-size='14' fill='#d00' font-family='Cairo'>قوة تنافر (F)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: شحنة جسيم ألفا",
                "question": "ما شحنة جسيم ألفا (نواة الهيليوم)؟",
                "options": [
                    { "text": "+2e = 3.2×10⁻¹⁹ C", "isCorrect": true },
                    { "text": "+e = 1.6×10⁻¹⁹ C", "isCorrect": false }
                ],
                "feedback": "صحيح! جسيم ألفا يحتوي بروتونين ← شحنته +2e"
            },
            {
                "title": "المرحلة الثانية: حساب القوة",
                "question": "باستخدام قانون كولوم، ما قيمة قوة التنافر؟",
                "options": [
                    { "text": "3.69 × 10⁻²⁵ N", "isCorrect": true },
                    { "text": "3.69 × 10⁻²⁹ N", "isCorrect": false },
                    { "text": "1.44 × 10¹³ N", "isCorrect": false }
                ],
                "feedback": "صحيح! F = (9×10⁹)(3.2×10⁻¹⁹)² / (0.05)² = 3.69×10⁻²⁵ N"
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>المعطيات:</strong></div>",
            "<div>• q₁ = q₂ = +2e = 2 × 1.6×10⁻¹⁹ = 3.2×10⁻¹⁹ C</div>",
            "<div>• r = 5 cm = 0.05 m</div>",
            "<div>• k = 9×10⁹ N·m²/C²</div>",
            "<div><strong>القانون:</strong> F = k × q₁ × q₂ / r²</div>",
            "<div><strong>التعويض:</strong> F = 9×10⁹ × (3.2×10⁻¹⁹)² / (0.05)² = 3.69 × 10⁻²⁵ N</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (د) 3.69 × 10⁻²⁵ N"
    },
    
    
    
 {   

"id": 5,
        "title": "س 46 (دفعة 2007): نقطة التعادل الكهربائي لشحنتين متساويتين مختلفين",
        "text": "نقطة التعادل الكهربائي لشحنتين متساويتين في المقدار ومختلفين في النوع تكون:",
        "options": [
            { "text": "بينهما وقريبة من الشحنة الكبرى", "isCorrect": false },
            { "text": "بينهما وفي منتصف المسافة", "isCorrect": false },
            { "text": "خارجهما وقريبة من الشحنة الصغرى", "isCorrect": false },
            { "text": "لا توجد نقطة تعادل كهربائي", "isCorrect": true }
        ],
        "svgCode": `<svg width='500' height='220' viewBox='0 0 500 220' xmlns='http://www.w3.org/2000/svg'>
            <rect width='500' height='220' fill='#ffffff'/>
            <circle cx='120' cy='100' r='25' fill='#ef4444'/>
            <text x='120' y='105' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>+q</text>
            <circle cx='380' cy='100' r='25' fill='#2563eb'/>
            <text x='380' y='105' text-anchor='middle' fill='white' font-size='16' font-weight='bold'>-q</text>
            <line x1='145' y1='100' x2='355' y2='100' stroke='#333' stroke-width='2'/>
            <text x='250' y='140' text-anchor='middle' font-size='14' fill='#d00' font-family='Cairo' font-weight='bold'>لا توجد نقطة تعادل</text>
            <text x='250' y='165' text-anchor='middle' font-size='12' font-family='Cairo'>لأن المجالين في نفس الاتجاه بين الشحنتين</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: تحليل المجال بين شحنتين مختلفين",
                "question": "شحنتان (+q) و (-q) متساويتان في المقدار. في المنطقة بينهما، ما اتجاه المجالين؟",
                "options": [
                    { "text": "في نفس الاتجاه (من +q إلى -q)", "isCorrect": true },
                    { "text": "متعاكسان", "isCorrect": false }
                ],
                "feedback": "صحيح! المجال من الشحنة الموجبة يتجه للتردد خارجاً، والمجال للسالبة يتجه إليها داحلاً، فبينهما المجالين في نفس الاتجاه."
            },
            {
                "title": "المرحلة الثانية: إمكانية وجود نقطة تعادل",
                "question": "بما أن المجالين في نفس الاتجاه بين الشحنتين، هل يمكن أن ينعدم المجال بينهما؟",
                "options": [
                    { "text": "لا، لأنه لا يمكن أن يكون المحصلة صفراً", "isCorrect": true },
                    { "text": "نعم، في منتصف المسافة", "isCorrect": false }
                ],
                "feedback": "ممتاز! عندما يكون المجالين في نفس الاتجاه، يجمعات ولا يلغيان بعضهما."
            },
            {
                "title": "المرحلة الثالثة: خارج الشحنتين",
                "question": "هل يمكن أن تتساوى المجالات خارج الشحنتين عند تساوي مقدارهما؟",
                "options": [
                    { "text": "لا، لأن المسافة إلى إحدى الشحنتين تكون دائماً أصغر", "isCorrect": true },
                    { "text": "نعم، على الأطراف", "isCorrect": false }
                ],
                "feedback": "صحيح! بما أن الشحنتين متساويتان بالمقدار، فالأقرب هي دائماً صاحبة المجال الأقوى، فلا تتساوى الشدتان مطلقاً."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div><strong>• المعطيات:</strong> شحنتان متساويتان في المقدار ومختلفان في النوع (+q و -q).</div>",
            "<div><strong>• بين الشحنتين:</strong> المجالان في <strong>نفس الاتجاه</strong> (من الموجب إلى السالب)، فلا ينعدم المجال.</div>",
            "<div><strong>• خارج الشحنتين:</strong> المجالان متعاكسان، لكن الشحنتين متساويتان، فالنقطة القريبة من أحدهما تكون تحت تأثير مجالها الأقوى دائماً.</div>",
            "<div><strong>• الاستنتاج:</strong> لا توجد نقطة تعادل كهربائي.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (د) لا توجد نقطة تعادل كهربائي"
    },
    {
        "id": 6,
        "title": "س 51 (دفعة 2007): عدد الإلكترونات على سطح كرة مشحونة",
        "text": "كرة مشحونة تنتج مجالاً كهربائياً شدته 72 kN/C عند نقطة تبعد 40 cm عن مركزها. عدد الإلكترونات على سطح الكرة هو:",
        "options": [
            { "text": "1.28 × 10⁻⁴ إلكترون", "isCorrect": false },
            { "text": "8 × 10¹² إلكترون", "isCorrect": true },
            { "text": "1.28 × 10⁻⁶ إلكترون", "isCorrect": false },
            { "text": "8 × 10¹⁰ إلكترون", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='400' height='200' fill='#ffffff'/>
            <circle cx='130' cy='100' r='35' fill='#fbbf24' stroke='#333' stroke-width='2'/>
            <text x='130' y='105' text-anchor='middle' font-size='12' font-weight='bold' font-family='Cairo'>كرة</text>
            <line x1='165' y1='100' x2='270' y2='100' stroke='#333' stroke-width='1.5'/>
            <text x='215' y='90' text-anchor='middle' font-size='11' font-family='Cairo'>r = 40 cm = 0.4 m</text>
            <circle cx='270' cy='100' r='4' fill='#2563eb'/>
            <text x='280' y='95' font-size='12' font-weight='bold'>P</text>
            <text x='200' y='160' text-anchor='middle' font-size='12' fill='#d00' font-family='Cairo'>E = 72 kN/C = 72 × 10³ N/C</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: حساب الشحنة الكلية",
                "question": "باستخدام قانون المجال E = k × Q / r²، ما قيمة الشحنة Q؟",
                "options": [
                    { "text": "1.28 × 10⁻⁶ C", "isCorrect": true },
                    { "text": "1.28 × 10⁻⁴ C", "isCorrect": false }
                ],
                "feedback": "صحيح! Q = (72×10³ × 0.4²) / (9×10⁹) = 1.28×10⁻⁶ C"
            },
            {
                "title": "المرحلة الثانية: حساب عدد الإلكترونات",
                "question": "باستخدام العلاقة n = Q / e، ما عدد الإلكترونات؟",
                "options": [
                    { "text": "8 × 10¹² إلكترون", "isCorrect": true },
                    { "text": "1.28 × 10⁻⁴ إلكترون", "isCorrect": false }
                ],
                "feedback": "ممتاز! n = (1.28×10⁻⁶) / (1.6×10⁻¹⁹) = 8 × 10¹² إلكترون"
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>المعطيات:</strong></div>",
            "<div>• E = 72 kN/C = 72 × 10³ N/C</div>",
            "<div>• r = 40 cm = 0.4 m</div>",
            "<div>• k = 9 × 10⁹ N·m²/C² | e = 1.6 × 10⁻¹⁹ C</div>",
            "<div><strong>1. حساب الشحنة (Q):</strong> Q = (E × r²) / k = (72×10³ × 0.16) / (9×10⁹) = 1.28 × 10⁻⁶ C</div>",
            "<div><strong>2. حساب عدد الإلكترونات (n):</strong> n = Q / e = (1.28 × 10⁻⁶) / (1.6 × 10⁻¹⁹) = 8 × 10¹² إلكترون</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: 8ب) × 10¹² إلكترون"
    },
    {
        "id": 7,
        "title": "سؤال وزارة: دلك الزجاج بالحرير",
        "text": "عند دلك ساق من الزجاج بقطعة حرير، فإن:",
        "options": [
            { "text": "الإلكترونات تنتقل من ساق الزجاج إلى قطعة الحرير", "isCorrect": true },
            { "text": "الإلكترونات تنتقل من قطعة الحرير إلى ساق الزجاج", "isCorrect": false },
            { "text": "البروتونات تنتقل من ساق الزجاج إلى قطعة الحرير", "isCorrect": false },
            { "text": "البروتونات تنتقل من قطعة الحرير إلى ساق الزجاج", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox='0 0 400 150' xmlns='http://www.w3.org/2000/svg'>
            <rect width='400' height='150' fill='#ffffff'/>
            <rect x='60' y='50' width='90' height='40' fill='#a0c4ff' stroke='#333' rx='4'/>
            <text x='105' y='75' text-anchor='middle' font-size='12' font-family='Cairo'>ساق زجاج</text>
            <rect x='250' y='50' width='90' height='40' fill='#e11d48' stroke='#333' rx='4'/>
            <text x='295' y='75' text-anchor='middle' fill='white' font-size='12' font-family='Cairo'>قطعة حرير</text>
            <line x1='150' y1='70' x2='250' y2='70' stroke='#d00' stroke-width='2' marker-end='url(#arrow)'/>
            <text x='200' y='60' text-anchor='middle' font-size='12' font-family='Cairo'>دلك</text>
            <text x='200' y='115' text-anchor='middle' font-size='12' font-family='Cairo' fill='#d00'>انتقال الإلكترونات ←</text>
            <defs>
                <marker id='arrow' markerWidth='8' markerHeight='8' refX='7' refY='4' orient='auto'>
                    <polygon points='0 0, 8 4, 0 8' fill='#d00'/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "تحديد اتجاه انتقال الإلكترونات",
                "question": "عند دلك الزجاج بالحرير، ماذا يحدث للشحنات؟",
                "options": [
                    { "text": "تنتقل الإلكترونات من الزجاج إلى الحرير", "isCorrect": true },
                    { "text": "تنتقل الإلكترونات من الحرير إلى الزجاج", "isCorrect": false }
                ],
                "feedback": "صحيح! الزجاج يفقد إلكترونات فيصبح موجب الشحنة، والحرير يكتسبها فيصبح سالب الشحنة."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الشرح والتعليل:</strong></div>",
            "<div>• عند الدلك، تنتقل <strong>الإلكترونات</strong> فقط (البروتونات مقيدة داخل النواة).</div>",
            "<div>• الزجاج يفقد إلكترونات ← يصبح موجب الشحنة.</div>",
            "<div>• الحرير يكتسب إلكترونات ← يصبح سالب الشحنة.</div>",
            "<div>• <strong>النتيجة:</strong> تنتقل الإلكترونات من ساق الزجاج إلى قطعة الحرير.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة:أ) الإلكترونات تنتقل من ساق الزجاج إلى قطعة الحرير"
    },
    {
        "id": 8,
        "title": "سؤال وزارة: كرتان متلامستان وحث كهربائي",
        "text": "كرتان معدنيتان متلامستان وغير مشحونتين (L و M). قربت ساق مشحونة بشحنة سالبة من الكرة L دون أن تلامسها، ثم أبعدت الكرتان قليلاً عن بعضهما، ثم أبعدت الساق المشحونة. نتيجة لذلك، فإن شحنة كل من L و M تصبح:",
        "options": [
            { "text": "L موجبة و M سالبة", "isCorrect": true },
            { "text": "L سالبة و M موجبة", "isCorrect": false },
            { "text": "كلاهما موجبة", "isCorrect": false },
            { "text": "كلاهما سالبة", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='500' height='200' fill='#ffffff'/>
            <rect x='40' y='75' width='25' height='50' fill='#d00' rx='3'/>
            <text x='52' y='70' text-anchor='middle' fill='#d00' font-size='12'>- - -</text>
            <text x='52' y='140' text-anchor='middle' font-size='10' font-family='Cairo'>ساق سالبة</text>
            <circle cx='170' cy='100' r='28' fill='#fbbf24' stroke='#333' stroke-width='2'/>
            <text x='170' y='105' text-anchor='middle' font-size='16' font-weight='bold'>L</text>
            <circle cx='270' cy='100' r='28' fill='#fbbf24' stroke='#333' stroke-width='2'/>
            <text x='270' y='105' text-anchor='middle' font-size='16' font-weight='bold'>M</text>
            <text x='170' y='65' text-anchor='middle' font-size='18' fill='#166534' font-weight='bold'>+</text>
            <text x='270' y='65' text-anchor='middle' font-size='18' fill='#d00' font-weight='bold'>-</text>
            <text x='170' y='155' text-anchor='middle' font-size='12' fill='#166534' font-family='Cairo'>تصبح (+)</text>
            <text x='270' y='155' text-anchor='middle' font-size='12' fill='#d00' font-family='Cairo'>تصبح (-)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: حث الشحنات أثناء تقريب الساق",
                "question": "عند تقريب الساق السالبة من L والكرتان متلامستان، أين تتجمع الشحنات؟",
                "options": [
                    { "text": "شحنات موجبة في L، وشحنات سالبة في M", "isCorrect": true },
                    { "text": "شحنات سالبة في L، وشحنات موجبة في M", "isCorrect": false }
                ],
                "feedback": "صحيح! الساق السالبة تتنافر مع الإلكترونات فتندفع إلى M، وتتجمع الشحنات الموجبة المقيدة في L."
            },
            {
                "title": "المرحلة الثانية: نتيجة فصل الكرتين ثم إبعاد الساق",
                "question": "بعد فصل الكرتين أولاً ثم إبعاد الساق السالبة، ما شحنة كل كرة؟",
                "options": [
                    { "text": "L موجبة و M سالبة", "isCorrect": true },
                    { "text": "L سالبة و M موجبة", "isCorrect": false }
                ],
                "feedback": "ممتاز! بسبب فصل الكرتين أولاً، تحتفظ كل كرة بالشحنة المستحثة المتجمعة عليها."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>مراحل شحن الكرتين بالحث:</strong></div>",
            "<div>1. تقريب ساق سالبة من L ← تتنافر الإلكترونات وتنتقل إلى M، وتستحث شحنة موجبة على L.</div>",
            "<div>2. فصل الكرتين عن بعضهما أثناء وجود الساق ← حبس الشحنات على الكرتين.</div>",
            "<div>3. إبعاد الساق السالبة ← تبقى الكرة <strong>L موجبة (+)</strong> والكرة <strong>M سالبة (-)</strong>.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة:أ) L موجبة و M سالبة"
    }
    
    
    
    
    
    ,{
"id": 9,
        "title": "سؤال وزارة: تحديد نوع الشحنة من اتجاه المجال الكهربائي",
        "text": "معتمدًا على بيانات الشكل، حيث المجال الكهربائي E واتجاه السهم من A إلى B، فإن نوع كل من الشحنتين A و B هو:",
        "options": [
            { "text": "A سالبة، B موجبة", "isCorrect": false },
            { "text": "A موجبة، B سالبة", "isCorrect": true },
            { "text": "A و B موجبتان", "isCorrect": false },
            { "text": "A و B سالبتان", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>
            <rect width='400' height='200' fill='#ffffff'/>
            <circle cx='100' cy='100' r='25' fill='#fbbf24' stroke='#333' stroke-width='2'/>
            <text x='100' y='105' text-anchor='middle' font-size='16' font-weight='bold' font-family='Cairo'>A</text>
            <circle cx='300' cy='100' r='25' fill='#fbbf24' stroke='#333' stroke-width='2'/>
            <text x='300' y='105' text-anchor='middle' font-size='16' font-weight='bold' font-family='Cairo'>B</text>
            <line x1='125' y1='100' x2='275' y2='100' stroke='#d00' stroke-width='3' marker-end='url(#arrow)'/>
            <text x='200' y='75' text-anchor='middle' font-size='16' font-weight='bold' font-family='Cairo'>E</text>
            <text x='100' y='150' text-anchor='middle' font-size='14' fill='#166534' font-family='Cairo' font-weight='bold'>(+)</text>
            <text x='300' y='150' text-anchor='middle' font-size='14' fill='#d00' font-family='Cairo' font-weight='bold'>(-)</text>
            <defs>
                <marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'>
                    <polygon points='0 0, 10 5, 0 10' fill='#d00'/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: قاعدة اتجاه المجال الكهربائي",
                "question": "في أي اتجاه يتجه المجال الكهربائي بالنسبة للشحنات؟",
                "options": [
                    { "text": "يخرج من الشحنة الموجبة ويدخل إلى الشحنة السالبة", "isCorrect": true },
                    { "text": "يخرج من الشحنة السالبة ويدخل إلى الشحنة الموجبة", "isCorrect": false }
                ],
                "feedback": "صحيح! خطوط المجال الكهربائي تخرج من الشحنات الموجبة وتدخل إلى الشحنات السالبة."
            },
            {
                "title": "المرحلة الثانية: تطبيق القاعدة على الشكل",
                "question": "بما أن اتجاه المجال الكهربائي E ينطلق من A وينتهي عند B، فما نوع كل منهما؟",
                "options": [
                    { "text": "A موجبة، B سالبة", "isCorrect": true },
                    { "text": "A سالبة، B موجبة", "isCorrect": false }
                ],
                "feedback": "ممتاز! لأن المجال يخرج من A (فهي موجبة) ويدخل إلى B (فهي سالبة)."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>القاعدة الفيزيائية:</strong></div>",
            "<div>المجال الكهربائي E ينطلق من الشحنة <strong>الموجبة</strong> ويدخل إلى الشحنة <strong>السالبة</strong>.</div>",
            "<div><strong>تطبيق القاعدة:</strong></div>",
            "<div>• في الشكل، خط المجال E ينطلق من A ويتجه نحو B.</div>",
            "<div>• إذن الشحنة <strong>A موجبة (+)</strong> لأن المجال ينبعث منها.</div>",
            "<div>• والشحنة <strong>B سالبة (-)</strong> لأن المجال يدخل إليها.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (ب) A موجبة، B سالبة"
    },
    {
        "id": 10,
        "title": "سؤال وزارة: قانون كولوم والقوة العظمى",
        "text": "شحنتان كهربائيتان في الهواء والمسافة بينهما (1m)، أي من أزواج الشحنات التالية يعطي أكبر قوة تجاذب ممكّنة بينهما؟",
        "options": [
            { "text": "1C , 4C", "isCorrect": false },
            { "text": "-6C , -3C", "isCorrect": false },
            { "text": "9C , 2C", "isCorrect": false },
            { "text": "5C , -2C", "isCorrect": true }
        ],
        "svgCode": `<svg viewBox="0 0 200 80" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="80" fill="#ffffff"/>
            <circle cx="40" cy="40" r="12" fill="#dc3545"/>
            <text x="40" y="44" text-anchor="middle" fill="white" font-size="10" font-weight="bold">+5C</text>
            <circle cx="160" cy="40" r="12" fill="#198754"/>
            <text x="160" y="44" text-anchor="middle" fill="white" font-size="10" font-weight="bold">-2C</text>
            <line x1="52" y1="40" x2="148" y2="40" stroke="#333" stroke-width="1.5" stroke-dasharray="3,3"/>
            <text x="100" y="30" text-anchor="middle" font-size="11" font-family="Cairo">r = 1m</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: شرط التجاذب",
                "question": "لكي تكون القوة بين شحنتين قوة تجاذب، ما الشرط الواجب توفره في إشارتي الشحنتين؟",
                "options": [
                    { "text": "أن تكون الشحنتان مختلفين في الإشارة (+ و -)", "isCorrect": true },
                    { "text": "أن تكون الشحنتان من نفس الإشارة", "isCorrect": false }
                ],
                "feedback": "صحيح! الشحنات المختلفة تتجاذب والشحنات المتشابهة تتنافر."
            },
            {
                "title": "المرحلة الثانية: تحديد القوة الأكبر",
                "question": "بما أن F تتناسب مع حاصل ضرب القيمة المطلقة للشحنتين |q₁ × q₂|، أي الزوجين التاليين يعطي تجاذباً أكبر؟",
                "options": [
                    { "text": "5C و -2C (حاصل الضرب = 10)", "isCorrect": true },
                    { "text": "1C و 4C (شحنات متشابهة - تنافر)", "isCorrect": false }
                ],
                "feedback": "ممتاز! الزوج (5C , -2C) هو الوحيد الذي يقدم قوة تجاذب بقيمة مطلقة تساوي 10."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>المبدأ الفيزيائي:</strong> قانون كولوم: F = k · |q₁ · q₂| / r²</div>",
            "<div>1. <strong>شرط التجاذب:</strong> التجاذب يحدث فقط بين الشحنات المختلفة في الإشارة (+ و -).</div>",
            "<div>2. <strong>فحص الخيارات:</strong></div>",
            "<div>• (1C , 4C) ← تنافر (شحنات موجبة)</div>",
            "<div>• (-6C , -3C) ← تنافر (شحنات سالبة)</div>",
            "<div>• (9C , 2C) ← تنافر (شحنات موجبة)</div>",
            "<div>• (5C , -2C) ← تجاذب بحاصل ضرب |5 × -2| = 10</div>",
            "<div><strong>الاستنتاج:</strong> الزوج (5C , -2C) يعطي قوة تجاذب وهي الأكبر بين الخيارات.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة:د) 5C , -2C"
    },
    {
        "id": 11,
        "title": "سؤال وزارة: المجال الكهربائي داخل موصل",
        "text": "كرة موصلة نصف قطرها 10 cm وشحنتها 5 C، ما هو مقدار المجال الكهربائي عند نقطة تبعد 5 cm من مركزها؟",
        "options": [
            { "text": "0 N/C", "isCorrect": true },
            { "text": "5 N/C", "isCorrect": false },
            { "text": "8 N/C", "isCorrect": false },
            { "text": "9 × 10⁹ N/C", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 200 120" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="120" fill="#ffffff"/>
            <circle cx="100" cy="60" r="45" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="100" y1="60" x2="145" y2="60" stroke="#333" stroke-width="1.5"/>
            <text x="122" y="52" font-size="10" font-family="Cairo">R = 10 cm</text>
            <circle cx="100" cy="60" r="22" fill="none" stroke="#e11d48" stroke-dasharray="3,3"/>
            <circle cx="122" cy="60" r="3" fill="#e11d48"/>
            <text x="105" y="80" font-size="10" fill="#e11d48" font-family="Cairo">r = 5 cm (E = 0)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: موقع النقطة بالنسبة للموصل",
                "question": "بما أن نصف قطر الكرة الموصلة هو 10 cm والنقطة تقع على بعد 5 cm من المركز، أين تقع هذه النقطة؟",
                "options": [
                    { "text": "داخل الكرة الموصلة", "isCorrect": true },
                    { "text": "خارج الكرة الموصلة", "isCorrect": false }
                ],
                "feedback": "صحيح! لأن المسافة 5 cm أقل من نصف القطر 10 cm."
            },
            {
                "title": "المرحلة الثانية: خاصية الموصلات المشحونة",
                "question": "كم يبلغ مقدار المجال الكهربائي داخل موصل مشحون في حالة اتزان إلكتروستاتيكي؟",
                "options": [
                    { "text": "يساوي صفراً (E = 0 N/C)", "isCorrect": true },
                    { "text": "يعتمد على قيمة الشحنة والمسافة", "isCorrect": false }
                ],
                "feedback": "ممتاز! في الموصلات، تتوزع جميع الشحنات على السطح الخارجي فقط، فيكون المجال داخل الموصل صفراً دائماً."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>المعطيات:</strong></div>",
            "<div>• نصف قطر الكرة الموصلة: R = 10 cm</div>",
            "<div>• مسافة النقطة عن المركز: r = 5 cm</div>",
            "<div><strong>التحليل الفيزيائي:</strong></div>",
            "<div>1. بما أن r < R (أي 5 cm < 10 cm)، فإن النقطة تقع <strong>داخل الموصل</strong>.</div>",
            "<div>2. من خصائص الموصلات المشحونة في حالة الاتزان الإلكتروستاتيكي أن الشحنات تستقر على السطح الخارجي فقط.</div>",
            "<div>3. بالتالي، ينعدم المجال الكهربائي في جميع النقاط الداخلية للموصل: <strong>E = 0 N/C</strong>.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة:أ)    0 N/C"
    },
    {
        "id": 12,
        "title": "سؤال وزارة: حركة شحنة في مجال كهربائي",
        "text": "إذا وُضعت شحنة سالبة صغيرة في مجال كهربائي منتظم، فإنها تتحرك في اتجاه:",
        "options": [
            { "text": "عكس اتجاه المجال", "isCorrect": true },
            { "text": "في اتجاه المجال", "isCorrect": false },
            { "text": "تبقى ثابتة", "isCorrect": false },
            { "text": "في مسار دائري", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 200 100" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" fill="#ffffff"/>
            <line x1="20" y1="30" x2="180" y2="30" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowE)"/>
            <line x1="20" y1="70" x2="180" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arrowE)"/>
            <text x="185" y="55" font-size="12" font-weight="bold" fill="#2563eb" font-family="Cairo">E →</text>
            <circle cx="110" cy="50" r="10" fill="#dc2626"/>
            <text x="110" y="54" text-anchor="middle" font-size="12" fill="white" font-weight="bold">-q</text>
            <line x1="95" y1="50" x2="50" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#arrowF)"/>
            <text x="65" y="42" font-size="10" font-weight="bold" fill="#dc2626" font-family="Cairo">F</text>
            <defs>
                <marker id="arrowE" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#2563eb"/>
                </marker>
                <marker id="arrowF" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#dc2626"/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: القوة الكهربائية والشحنة السالبة",
                "question": "العلاقة التي تحدد القوة الكهربائية هي F = q · E. عندما تكون q سالبة، كيف يكون اتجاه القوة بالنسبة للمجال؟",
                "options": [
                    { "text": "في اتجاه معاكس لاتجاه المجال", "isCorrect": true },
                    { "text": "في نفس اتجاه المجال", "isCorrect": false }
                ],
                "feedback": "صحيح! الإشارة السالبة للشحنة تجعل اتجاه القوة F معاكساً لاتجاه خطوط المجال E."
            },
            {
                "title": "المرحلة الثانية: حركة الشحنة",
                "question": "بما أن القوة المؤثرة تكون عكس اتجاه المجال، في أي اتجاه ستتحرك الشحنة السالبة؟",
                "options": [
                    { "text": "عكس اتجاه المجال", "isCorrect": true },
                    { "text": "في اتجاه المجال", "isCorrect": false }
                ],
                "feedback": "ممتاز! تكتسب الشحنة السالبة تسارعاً وتحركاً باتجاه معاكس لخطوط المجال الكهربائي."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>التحليل الفيزيائي:</strong></div>",
            "<div>1. تؤثر القوة الكهربائية على الشحنة وفق العلاقة: <strong>F = q · E</strong></div>",
            "<div>2. الشحنة الموجبة (+q) تتأثر بقوة في <strong>نفس اتجاه</strong> المجال.</div>",
            "<div>3. الشحنة السالبة (-q) تتأثر بقوة في <strong>عكس اتجاه</strong> المجال بسبب إشارتها السالبة.</div>",
            "<div>4. وبما أن الحركة تتم باتجاه القوة المحصلة، فإن الشحنة السالبة تتحرك <strong>عكس اتجاه المجال الكهربائي</strong>.</div>"
        ],
        "pdfFinalAnswer": "  الإجابة الصحيحة:  أ)  عكس اتجاه المجال"
    }
    
    
    
    
    ,
{
        "id": 13,
        "title": "سؤال وزارة: الشحنة وعدد الإلكترونات",
        "text": "واحد كولوم (1C) يعادل كم من الإلكترونات؟",
        "options": [
            { "text": "6.25 × 10¹⁸ إلكترون", "isCorrect": true },
            { "text": "6.25 × 10¹⁷ إلكترون", "isCorrect": false },
            { "text": "6.25 × 10¹⁵ إلكترون", "isCorrect": false },
            { "text": "1.6 × 10⁻¹⁹ إلكترون", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 90" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="90" fill="#ffffff" rx="8"/>
            <rect x="20" y="15" width="260" height="60" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
            <text x="150" y="52" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e293b" font-family="Cairo">Q = n × e</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: القانون الأساسي",
                "question": "لحساب عدد الإلكترونات (n) في شحنة معينة (Q)، نستخدم العلاقة Q = n × e. حيث e هي شحنة الإلكترون (1.6 × 10⁻¹⁹ C). هل المعادلة الصحيحة هي n = Q / e؟",
                "options": [
                    { "text": "نعم، صحيحة", "isCorrect": true },
                    { "text": "لا، خاطئة", "isCorrect": false }
                ],
                "feedback": "صحيح! لكي نجد العدد (n) نقسم الشحنة الكلية (Q) على شحنة الإلكترون الواحد (e)."
            },
            {
                "title": "المرحلة الثانية: الحساب الرياضي",
                "question": "عند قسمة 1 كولوم على 1.6 × 10⁻¹⁹ C، ما هو الناتج الصحيح؟",
                "options": [
                    { "text": "6.25 × 10¹⁸ إلكترون", "isCorrect": true },
                    { "text": "6.25 × 10¹⁷ إلكترون", "isCorrect": false }
                ],
                "feedback": "ممتاز! عملية القسمة البسيطة هذه تعطينا هذا الرقم الشهير في الفيزياء: 1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. القانون الأساسي لتكمية الشحنة: Q = n × e</div>",
            "<div>2. المطلوب حساب عدد الإلكترونات (n): n = Q / e</div>",
            "<div>3. التعويض بالأرقام: n = 1 / (1.6 × 10⁻¹⁹)</div>",
            "<div>4. الناتج النهائي: n = 6.25 × 10¹⁸ إلكترون</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (أ) 6.25 × 10¹⁸ إلكترون"
    },
    {
        "id": 14,
        "title": "سؤال وزارة: شحن موصل بالحث الكهربائي بشحنة موجبة",
        "text": "يمكن شحن موصل بالحث الكهربائي بشحنة موجبة بـ:",
        "options": [
            { "text": "تقريب شحنة موجبة منه وملامسته باليد ثم إبعاد اليد عنه", "isCorrect": false },
            { "text": "تقريب شحنة سالبة منه وملامسته باليد ثم إبعاد اليد عنه", "isCorrect": true },
            { "text": "ملامسته بشحنة سالبة وملامسته باليد ثم إبعاد اليد عنه", "isCorrect": false },
            { "text": "تقريب شحنة سالبة منه دون أن تلامسه ودون تأريض", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="130" fill="#ffffff"/>
            <rect x="30" y="45" width="60" height="22" rx="5" fill="#ef4444"/>
            <text x="60" y="60" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">- - -</text>
            <text x="60" y="35" text-anchor="middle" fill="#dc2626" font-size="11" font-family="Cairo" font-weight="bold">مؤثر سالب</text>
            <circle cx="160" cy="56" r="28" fill="#3b82f6" opacity="0.85"/>
            <text x="146" y="61" fill="#ffffff" font-size="14" font-weight="bold">+</text>
            <text x="172" y="61" fill="#ffffff" font-size="14" font-weight="bold">-</text>
            <text x="160" y="102" text-anchor="middle" fill="#1e293b" font-size="12" font-family="Cairo" font-weight="bold">موصل</text>
            <line x1="180" y1="75" x2="225" y2="100" stroke="#16a34a" stroke-width="2" stroke-dasharray="3,3"/>
            <text x="240" y="108" font-size="11" fill="#16a34a" font-family="Cairo" font-weight="bold">تأريض (اليد)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: مبدأ الشحن بالحث",
                "question": "كيف تشحن موصلاً بالحث الكهربائي بشحنة دائمة؟",
                "options": [
                    { "text": "تقريب شحنة مؤثّرة دون ملامسة، ثم تأريض الموصل وإزالة التأريض قبل إبعاد المؤثّر", "isCorrect": true },
                    { "text": "ملامسة الشحنة المؤثرة للموصل مباشرة", "isCorrect": false }
                ],
                "feedback": "صحيح! الشحن بالحث يتطلب تقريب الشحنة المؤثرة دون ملامستها، ثم تأريض الطرف البعيد لتسريب الشحنات الطليقة."
            },
            {
                "title": "المرحلة الثانية: تحديد الشحنة المراد الحصول عليها",
                "question": "للحصول على شحنة موجبة بالحث، ما نوع الشحنة المؤثرة التي يجب تقريبها؟",
                "options": [
                    { "text": "شحنة سالبة (لأن الشحنة المكتسبة بالحث تكون مخالفة للشحنة المؤثرة)", "isCorrect": true },
                    { "text": "شحنة موجبة", "isCorrect": false }
                ],
                "feedback": "ممتاز! الشحنة السالبة تجذب الشحنات الموجبة للطرف القريب وتدفع السالبة للطرف البعيد ليتم تسريبها عبر اليد إلى الأرض."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. تقريب شحنة سالبة من الموصل ← تتجمع الشحنات الموجبة في الطرف القريب، والسالبة في الطرف البعيد.</div>",
            "<div>2. تأريض الطرف البعيد (ملامسته باليد) ← تخرج الإلكترونات (الشحنات السالبة) إلى الأرض.</div>",
            "<div>3. إبعاد اليد أولاً ثم إبعاد الشحنة السالبة ← يبقى الموصل مشحوناً بشحنة موجبة.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (ب) تقريب شحنة سالبة منه وملامسته باليد ثم إبعاد اليد عنه"
    },
    {
        "id": 15,
        "title": "سؤال وزارة: القوة الكهربائية على إلكترون في مجال منتظم",
        "text": "وُضع إلكترون في مجال كهربائي منتظم شدته 30 kN/C، فإن مقدار القوة الكهربائية المؤثرة عليه تساوي:",
        "options": [
            { "text": "4.8 × 10⁻¹⁶ N", "isCorrect": true },
            { "text": "4.8 × 10⁻¹⁴ N", "isCorrect": false },
            { "text": "1.875 × 10²³ N", "isCorrect": false },
            { "text": "1.875 × 10²⁰ N", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 100" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="100" fill="#ffffff"/>
            <line x1="30" y1="30" x2="270" y2="30" stroke="#2563eb" stroke-width="2" marker-end="url(#arr1)"/>
            <line x1="30" y1="70" x2="270" y2="70" stroke="#2563eb" stroke-width="2" marker-end="url(#arr1)"/>
            <text x="150" y="20" text-anchor="middle" font-size="12" fill="#2563eb" font-family="Cairo" font-weight="bold">E = 30 × 10³ N/C</text>
            <circle cx="150" cy="50" r="12" fill="#dc2626"/>
            <text x="150" y="54" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">-e</text>
            <defs>
                <marker id="arr1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#2563eb"/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: قانون القوة الكهربائية",
                "question": "ما العلاقة التي تحسب القوة الكهربائية F المؤثرة على شحنة q في مجال كهربائي E؟",
                "options": [
                    { "text": "F = q × E", "isCorrect": true },
                    { "text": "F = E / q", "isCorrect": false }
                ],
                "feedback": "صحيح! القوة الكهربائية تساوي حاصل ضرب الشحنة في شدة المجال: F = q × E."
            },
            {
                "title": "المرحلة الثانية: شحنة الإلكترون",
                "question": "ما قيمة شحنة الإلكترون (e) بالكولوم؟",
                "options": [
                    { "text": "1.6 × 10⁻¹⁹ C", "isCorrect": true },
                    { "text": "1.6 × 10⁻¹⁸ C", "isCorrect": false }
                ],
                "feedback": "ممتاز! شحنة الإلكترون الأساسية هي e = 1.6 × 10⁻¹⁹ C."
            },
            {
                "title": "المرحلة الثالثة: حساب القوة",
                "question": "بالتعويض: E = 30 kN/C = 30 × 10³ N/C، و q = 1.6 × 10⁻¹⁹ C، ما قيمة F؟",
                "options": [
                    { "text": "4.8 × 10⁻¹⁶ N", "isCorrect": true },
                    { "text": "4.8 × 10⁻¹⁴ N", "isCorrect": false }
                ],
                "feedback": "إجابة صحيحة! F = (1.6 × 10⁻¹⁹) × (30 × 10³) = 4.8 × 10⁻¹⁶ N."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. تحويل وحدة المجال: E = 30 kN/C = 30 × 10³ N/C</div>",
            "<div>2. شحنة الإلكترون: q = e = 1.6 × 10⁻¹⁹ C</div>",
            "<div>3. قانون القوة الكهربائية: F = q × E</div>",
            "<div>4. التعويض: F = (1.6 × 10⁻¹⁹) × (30 × 10³) = 4.8 × 10⁻¹⁶ N</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (أ) 4.8 × 10⁻¹⁶ N"
    },
    {
        "id": 16,
        "title": "سؤال وزارة: التأكد من نوع شحنة قضيب زجاجي",
        "text": "إذا كان لدينا قضيب من الزجاج مشحون بشحنة موجبة ويراد التأكد من نوع الشحنة التي يحملها، يتم تقريبه من:",
        "options": [
            { "text": "كشاف كهربائي غير مشحون", "isCorrect": false },
            { "text": "موصل معزول وغير مشحون", "isCorrect": false },
            { "text": "كشاف كهربائي سالب الشحنة", "isCorrect": true },
            { "text": "كشاف كهربائي موجب الشحنة", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 140" width="100%" height="140" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="140" fill="#ffffff"/>
            <circle cx="150" cy="40" r="15" fill="#fbbf24" stroke="#333" stroke-width="2"/>
            <line x1="150" y1="55" x2="150" y2="95" stroke="#333" stroke-width="2"/>
            <line x1="150" y1="95" x2="130" y2="120" stroke="#d97706" stroke-width="3"/>
            <line x1="150" y1="95" x2="170" y2="120" stroke="#d97706" stroke-width="3"/>
            <text x="150" y="44" text-anchor="middle" font-size="10" font-weight="bold" font-family="Cairo">قرص الكشاف</text>
            <text x="150" y="135" text-anchor="middle" font-size="11" font-weight="bold" font-family="Cairo" fill="#d97706">ورقتان مشحونتان</text>
            <rect x="210" y="25" width="70" height="15" fill="#93c5fd" stroke="#2563eb" rx="4"/>
            <text x="245" y="37" text-anchor="middle" font-size="10" font-weight="bold" font-family="Cairo" fill="#1e3a8a">+ قضيب زجاجي</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: مبدأ عمل الكشاف الكهربائي",
                "question": "كيف يمكن معرفة نوع شحنة جسم باستخدام كشاف كهربائي؟",
                "options": [
                    { "text": "تقريبه من كشاف مشحون بشحنة معلومة وملاحظة الانفراج", "isCorrect": true },
                    { "text": "تقريبه من كشاف غير مشحون", "isCorrect": false }
                ],
                "feedback": "صحيح! لتحديد نوع الشحنة، نقرب الجسم من كشاف مشحون بشحنة معلومة ونلاحظ ازدياد أو نقصان انفراج الورقتين."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>لتحديد نوع شحنة جسم باستخدام كشاف كهربائي:</div>",
            "<div>1. نشحن الكشاف بشحنة معلومة (سالبة مثلاً).</div>",
            "<div>2. نقرب الجسم المراد فحصه من قرص الكشاف.</div>",
            "<div>3. إذا تناقص انفراج الورقتين ← الشحنة معاكسة لشحنة الكشاف (موجبة).</div>",
            "<div>4. إذا ازداد انفراج الورقتين ← الشحنة مماثلة لشحنة الكشاف.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (ج) كشاف كهربائي سالب الشحنة"
    },
    {
        "id": 17,
        "title": "سؤال وزارة: حركة إلكترون في مجال كهربائي منتظم",
        "text": "إذا وُضعت شحنة كهربائية صغيرة (إلكترون) في منطقة فيها مجال كهربائي منتظم، فإنها:",
        "options": [
            { "text": "تتحرك باتجاه المجال الكهربائي", "isCorrect": false },
            { "text": "تتحرك في عكس اتجاه المجال الكهربائي", "isCorrect": true },
            { "text": "تتحرك في مسار دائري", "isCorrect": false },
            { "text": "تبقى ساكنة في موضعها", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff"/>
            <line x1="30" y1="35" x2="270" y2="35" stroke="#2563eb" stroke-width="2" marker-end="url(#arrE2)"/>
            <line x1="30" y1="75" x2="270" y2="75" stroke="#2563eb" stroke-width="2" marker-end="url(#arrE2)"/>
            <text x="280" y="58" font-size="14" font-weight="bold" fill="#2563eb" font-family="Cairo">E →</text>
            <circle cx="160" cy="55" r="12" fill="#ef4444"/>
            <text x="160" y="59" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">-e</text>
            <line x1="140" y1="55" x2="80" y2="55" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrF2)"/>
            <text x="110" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626" font-family="Cairo">F (القوة)</text>
            <defs>
                <marker id="arrE2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#2563eb"/>
                </marker>
                <marker id="arrF2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#dc2626"/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: القوة المؤثرة على الإلكترون",
                "question": "ما اتجاه القوة المؤثرة على شحنة سالبة في مجال كهربائي؟",
                "options": [
                    { "text": "عكس اتجاه المجال الكهربائي", "isCorrect": true },
                    { "text": "نفس اتجاه المجال الكهربائي", "isCorrect": false }
                ],
                "feedback": "صحيح! F = q · E، ولأن q سالبة، فإن القوة F تكون في عكس اتجاه المجال E."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. القوة الكهربائية: F = q · E</div>",
            "<div>2. شحنة الإلكترون سالبة (q = -e)</div>",
            "<div>3. الإشارة السالبة تعني أن اتجاه القوة يكون <strong>عكس اتجاه المجال</strong>.</div>",
            "<div>4. بالتالي يتحرك الإلكترون في عكس اتجاه المجال الكهربائي.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: (ب) تتحرك في عكس اتجاه المجال الكهربائي"
    }
    
    
    
    ,{
"id": 18,
        "title": "س 1 (2022-2023): عدد الإلكترونات المارة في موصل",
        "text": "عدد الإلكترونات التي تعبر مقطع موصل في زمن قدره (0.03 μs) عندما تكون شدة التيار الكهربائي المارة فيه (2 mA) تساوي (375 × 10⁶) إلكترون. هل هذه العبارة صحيحة أم خاطئة؟",
        "options": [
            { "text": "أ) صح", "isCorrect": true },
            { "text": "ب) خطأ", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 100" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="100" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="70" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
            <text x="150" y="42" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e293b" font-family="Cairo">n = (I × t) / e</text>
            <text x="150" y="68" text-anchor="middle" font-size="12" fill="#16a34a" font-family="Cairo" font-weight="bold">n = 3.75 × 10⁸ = 375 × 10⁶ إلكترون</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: حساب كمية الشحنة الكهربائية",
                "question": "ما هي كمية الشحنة (Q) المارة في الموصل خلال زمن t = 0.03 μs وتيار I = 2 mA؟",
                "options": [
                    { "text": "Q = I × t = 2×10⁻³ × 0.03×10⁻⁶ = 6 × 10⁻¹¹ C", "isCorrect": true },
                    { "text": "Q = I / t = 6.67 × 10⁴ C", "isCorrect": false }
                ],
                "feedback": "صحيح! كمية الشحنة تساوي شدة التيار ضرب الزمن بالثواني."
            },
            {
                "title": "المرحلة الثانية: حساب عدد الإلكترونات",
                "question": "عند قسمة الشحنة Q = 6 × 10⁻¹¹ C على شحنة الإلكترون e = 1.6 × 10⁻¹⁹ C، هل الناتج يساوي 375 × 10⁶ إلكترون؟",
                "options": [
                    { "text": "نعم، الناتج 3.75 × 10⁸ أي 375 × 10⁶", "isCorrect": true },
                    { "text": "لا، الناتج مختلف", "isCorrect": false }
                ],
                "feedback": "ممتاز! 6×10⁻¹¹ / (1.6×10⁻¹⁹) = 3.75 × 10⁸ = 375 × 10⁶ إلكترون، العبارة صحيحة."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. تحويل المعطيات: I = 2 mA = 2 × 10⁻³ A</div>",
            "<div>2. t = 0.03 μs = 0.03 × 10⁻⁶ s = 3 × 10⁻⁸ s</div>",
            "<div>3. حساب كمية الشحنة: Q = I × t = 2 × 10⁻³ × 3 × 10⁻⁸ = 6 × 10⁻¹¹ C</div>",
            "<div>4. حساب عدد الإلكترونات: n = Q / e = (6 × 10⁻¹¹) / (1.6 × 10⁻¹⁹) = 3.75 × 10⁸ = 375 × 10⁶ إلكترون</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: أ) صح"
    },
    {
        "id": 19,
        "title": "س 2 (2022-2023): توصيل موصل مشحون بالأرض",
        "text": "عند توصيل موصل مشحون بشحنة موجبة بالأرض تنتقل الشحنات الموجبة من الموصل إلى الأرض. هل هذه العبارة صحيحة أم خاطئة؟",
        "options": [
            { "text": "أ) صح", "isCorrect": false },
            { "text": "ب) خطأ", "isCorrect": true }
        ],
        "svgCode": `<svg viewBox="0 0 300 120" width="100%" height="120" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="120" fill="#ffffff" rx="8"/>
            <circle cx="150" cy="45" r="25" fill="#ef4444" opacity="0.85"/>
            <text x="150" y="51" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">+</text>
            <line x1="150" y1="70" x2="150" y2="100" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="4,3"/>
            <text x="210" y="90" text-anchor="middle" fill="#16a34a" font-size="11" font-family="Cairo" font-weight="bold">تدفق الإلكترونات من الأرض ←</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: حركة الشحنات في الموصلات",
                "question": "هل الشحنات الموجبة (البروتونات) هي التي تتحرك عبر الموصلات والتأريض؟",
                "options": [
                    { "text": "لا، الإلكترونات (الشحنات السالبة) فقط هي المتحركة", "isCorrect": true },
                    { "text": "نعم، تتحرك الشحنات الموجبة والسالبة بنفس الحرية", "isCorrect": false }
                ],
                "feedback": "صحيح! النوى والبروتونات مقيدة في مواقعها، الشحنات السالبة (الإلكترونات) هي الوحيدة التي تنتقل."
            },
            {
                "title": "المرحلة الثانية: اتجاه حركة الإلكترونات عند التأريض",
                "question": "عند تأريض جسم موجب الشحنة، ما اتجاه حركة الإلكترونات لمعادلته؟",
                "options": [
                    { "text": "تنتقل الإلكترونات من الأرض إلى الموصل الموجب", "isCorrect": true },
                    { "text": "تنتقل الإلكترونات من الموصل إلى الأرض", "isCorrect": false }
                ],
                "feedback": "ممتاز! جذب الموصل الموجب للإلكترونات يجعلها تصعد من الأرض إليه لتعادله."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. الشحنات الموجبة (البروتونات) ثابتة داخل أنوية الذرات ولا تنتقل في الموصلات الصلبة.</div>",
            "<div>2. عند توصيل موصل موجب الشحنة بالأرض، تجذب شحنته الموجبة الإلكترونات السالبة من الأرض.</div>",
            "<div>3. تنتقل الإلكترونات من الأرض إلى الموصل لتعادل الشحنة الموجبة.</div>",
            "<div>4. العبارة خاطئة لأن الشحنات الموجبة لا تنتقل.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
    },
    {
        "id": 20,
        "title": "س 10 (2022-2023): الترسيب الكهروستاتيكي",
        "text": "تستخدم تقنية الترسيب الكهروستاتيكي في مصانع الفولاذ والأسمنت والمواد الكيميائية. هل هذه العبارة صحيحة أم خاطئة؟",
        "options": [
            { "text": "أ) صح", "isCorrect": true },
            { "text": "ب) خطأ", "isCorrect": false }
        ],
        "svgCode": `<svg viewBox="0 0 300 100" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="100" fill="#ffffff" rx="8"/>
            <rect x="20" y="20" width="260" height="60" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" rx="6"/>
            <text x="150" y="45" text-anchor="middle" font-size="13" font-weight="bold" fill="#15803d" font-family="Cairo">المرسبات الكهروستاتيكية</text>
            <text x="150" y="65" text-anchor="middle" font-size="11" fill="#166534" font-family="Cairo">تزيل الغبار والملوثات من المداخن الصناعية</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: تطبيقات الترسيب الكهروستاتيكي",
                "question": "ما هو الغرض الأساسي من استخدام المرسبات الكهروستاتيكية في المصانع الكبرى؟",
                "options": [
                    { "text": "تجميع الدخان والدقائق العالقة والرماد قبل خروجها للبيئة", "isCorrect": true },
                    { "text": "توليد الطاقة الكهربائية للمصنع", "isCorrect": false }
                ],
                "feedback": "صحيح! تعمل على شحن جزيئات الغبار وجذبها لألواح تجميع للحد من التلوث في مصانع الأسمنت والفولاذ وغيرها."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. الترسيب الكهروستاتيكي تطبيق عملي هام للكهربية الساكنة.</div>",
            "<div>2. تُستخدم المرسبات الكهروستاتيكية في مداخن المصانع الكبرى (مثل الفولاذ، الأسمنت، والمواد الكيميائية).</div>",
            "<div>3. تهدف التقنية لتنقية الغازات والحد من التلوث البيئي عن طريق شحن وجذب جزيئات الدخان.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: أ) صح"
    },
    {
        "id": 21,
        "title": "س 14 (2022-2023): اتجاه المجال الكهربائي",
        "text": "اتجاه المجال الكهربائي هو اتجاه القوة المؤثرة على شحنة سالبة صغيرة موضوعة فيه. هل هذه العبارة صحيحة أم خاطئة؟",
        "options": [
            { "text": "أ) صح", "isCorrect": false },
            { "text": "ب) خطأ", "isCorrect": true }
        ],
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <line x1="30" y1="40" x2="270" y2="40" stroke="#2563eb" stroke-width="2" marker-end="url(#arrE3)"/>
            <text x="150" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb" font-family="Cairo">اتجاه المجال E (يُحدد بشحنة اختبار موجبة +q)</text>
            <circle cx="150" cy="70" r="12" fill="#16a34a"/>
            <text x="150" y="74" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">+q</text>
            <defs>
                <marker id="arrE3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <polygon points="0 0, 8 4, 0 8" fill="#2563eb"/>
                </marker>
            </defs>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: تعريف اتجاه المجال الكهربائي",
                "question": "كيف يُعرّف اتجاه المجال الكهربائي عند نقطة ما اصطلاحاً؟",
                "options": [
                    { "text": "اتجاه القوة الكهربائية التي تؤثر على شحنة اختبار موجبة", "isCorrect": true },
                    { "text": "اتجاه القوة الكهربائية التي تؤثر على شحنة اختبار سالبة", "isCorrect": false }
                ],
                "feedback": "صحيح! اصطلاحاً، يتحدد اتجاه المجال بفرَض وجود شحنة اختبار موجبة صغيرة (+q)."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. يحدد اتجاه المجال الكهربائي باختبار اتجاه القوة المؤثرة على <strong>شحنة اختبار موجبة</strong> موضوعة عند تلك النقطة.</div>",
            "<div>2. الشحنة السالبة تتأثر بقوة في <strong>عكس</strong> اتجاه المجال.</div>",
            "<div>3. بالتالي فإن القول بـ 'شحنة سالبة' يجعل العبارة خاطئة.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ب) خطأ"
    }
    
    
    ,

{
        "id": 22,
        "title": "س 15 (2022-2023): حساب البعد عن شحنة نقطية",
        "text": "بعد النقطة التي يؤثر بها مجال كهربائي شدته (9 × 10⁴ N/C) عن شحنة موجبة مقدارها (4 μC) يساوي:",
        "options": [
            { "text": "أ) 0.20 m", "isCorrect": false },
            { "text": "ب) 0.63 m", "isCorrect": true },
            { "text": "ج) 0.1 m", "isCorrect": false },
            { "text": "د) 0.4 m", "isCorrect": false }
        ],
        "correctAnswerIndex": 1,
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="80" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
            <text x="150" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b" font-family="Cairo">r = √(k · Q / E)</text>
            <text x="150" y="62" text-anchor="middle" font-size="12" fill="#475569" font-family="Cairo">r = √((9×10⁹ × 4×10⁻⁶) / (9×10⁴)) = √0.4</text>
            <text x="150" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a" font-family="Cairo">r ≈ 0.63 m</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: تطبيق قانون المجال الكهربائي",
                "question": "ما العلاقة المستخدمة لحساب البعد r بدلالة شدة المجال E والشحنة Q؟",
                "options": [
                    { "text": "r = √(k · Q / E)", "isCorrect": true },
                    { "text": "r = k · Q / E", "isCorrect": false }
                ],
                "feedback": "صحيح! لأن E = k·Q / r²، وبترتيب المعادلة نحصل على r = √(k·Q / E)."
            },
            {
                "title": "المرحلة الثانية: التعويض والحساب",
                "question": "عند التعويض بالقيم Q = 4×10⁻⁶ C و E = 9×10⁴ N/C و k = 9×10⁹ N·m²/C²، ما الناتج النهائي؟",
                "options": [
                    { "text": "r = √0.4 ≈ 0.63 m", "isCorrect": true },
                    { "text": "r = √0.16 = 0.4 m", "isCorrect": false }
                ],
                "feedback": "ممتاز! (9×10⁹ × 4×10⁻⁶) / (9×10⁴) = 0.4، وجذر 0.4 يساوي 0.63 m تقريباً."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. المعطيات: E = 9 × 10⁴ N/C ، Q = 4 μC = 4 × 10⁻⁶ C ، k = 9 × 10⁹ N·m²/C²</div>",
            "<div>2. قانون شدة المجال الكهربائي: E = k · Q / r²</div>",
            "<div>3. إعادة ترتيب المعادلة لإيجاد المسافة: r = √(k · Q / E)</div>",
            "<div>4. التعويض: r = √((9 × 10⁹ × 4 × 10⁻⁶) / (9 × 10⁴)) = √0.4 ≈ 0.63 m</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ب) 0.63 m"
    },
    {
        "id": 23,
        "title": "س 31 (2022-2023): تأثير المسافة على القوة الكهربائية",
        "text": "في نفس الوسط إذا قلت المسافة بين شحنتين إلى النصف فإن القوة الكهربائية بينهما:",
        "options": [
            { "text": "أ) تقل إلى النصف", "isCorrect": false },
            { "text": "ب) تزداد إلى ضعف", "isCorrect": false },
            { "text": "ج) تزداد أربعة أمثال", "isCorrect": true },
            { "text": "د) تقل إلى الربع", "isCorrect": false }
        ],
        "correctAnswerIndex": 2,
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="80" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
            <text x="150" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b" font-family="Cairo">قانون كولوم: F ∝ 1 / r²</text>
            <text x="150" y="62" text-anchor="middle" font-size="12" fill="#475569" font-family="Cairo">عندما r' = ½ r  ⇐  F' = 1 / (½)² = 4 F</text>
            <text x="150" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a" font-family="Cairo">تزداد القوة الكهربائية إلى 4 أمثال</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: العلاقة بين القوة والمسافة",
                "question": "كيف تتناسب القوة الكهربائية المتبادلة بين شحنتين مع المسافة بينهما وفق قانون كولوم؟",
                "options": [
                    { "text": "تتناسب عكسياً مع مربع المسافة (F ∝ 1/r²)", "isCorrect": true },
                    { "text": "تتناسب عكسياً مع المسافة خطياً (F ∝ 1/r)", "isCorrect": false }
                ],
                "feedback": "صحيح! تناسب القوة هو تناسب عكسي مع مربع المسافة."
            },
            {
                "title": "المرحلة الثانية: حساب التغير في القوة",
                "question": "عند التعويض بـ (r' = ½ r) في قانون التربيع العكسي، ماذا يصبح مقدار القوة الجديدة F'؟",
                "options": [
                    { "text": "F' = 4 F (تزداد 4 أمثال)", "isCorrect": true },
                    { "text": "F' = 2 F (تزداد للضعف)", "isCorrect": false }
                ],
                "feedback": "ممتاز! قسمة 1 على (1/2)² تعطي 4، بالتالي تزداد القوة أربعة أمثال."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. صيغة قانون كولوم: F = k · Q₁ · Q₂ / r²</div>",
            "<div>2. العلاقة بين القوة والمسافة هي علاقة تناسب عكسي مع مربع المسافة (F ∝ 1/r²).</div>",
            "<div>3. بفرض المسافة الجديدة r' = ½ r:</div>",
            "<div>4. F' = k · Q₁ · Q₂ / (½ r)² = k · Q₁ · Q₂ / (¼ r²) = 4 × F</div>",
            "<div>5. بالتالي تزداد القوة أربعة أمثال قيمتها الأصلية.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ج) تزداد أربعة أمثال"
    },
    {
        "id": 24,
        "title": "س 44 (2022-2023): استخدامات الكشاف الكهربائي",
        "text": "يستخدم الكشاف الكهربائي في كل مما يلي ماعدا:",
        "options": [
            { "text": "أ) المقارنة بين شحنتين", "isCorrect": false },
            { "text": "ب) الكشف عن الشحنة الكهربائية", "isCorrect": false },
            { "text": "ج) الكشف عن سريان التيار الكهربائي", "isCorrect": true },
            { "text": "د) تحديد نوع شحنة جسم مشحون", "isCorrect": false }
        ],
        "correctAnswerIndex": 2,
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="80" fill="#fef2f2" stroke="#fca5a5" stroke-width="1.5" rx="6"/>
            <text x="150" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#991b1b" font-family="Cairo">الكشاف الكهربائي (Electroscope)</text>
            <text x="150" y="62" text-anchor="middle" font-size="11" fill="#7f1d1d" font-family="Cairo">جهاز استاتيكي للتعامل مع الشحنات الساكنة فقط</text>
            <text x="150" y="84" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626" font-family="Cairo">❌ لا يُستخدم لقياس أو الكشف عن التيار المتحرك</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: وظيفة الكشاف الكهربائي",
                "question": "أي من الخيارات التالية يعد من التطبيقات الرئيسية للكهربية الساكنة بواسطة الكشاف الكهربائي؟",
                "options": [
                    { "text": "الكشف عن وجود الشحنة وتحديد نوعها والمقارنة بين كميتها", "isCorrect": true },
                    { "text": "قياس شدة التيار الكهربائي المستمر والمتردد", "isCorrect": false }
                ],
                "feedback": "صحيح! الكشاف الكهربائي جهاز استاتيكي يُعنى بالكهربية الساكنة فقط وليس بالتيار الكهربائي المتحرك."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. الكشاف الكهربائي الورقي هو جهاز يُستخدم في تطبيقات الكهربية الساكنة (الاستاتيكية).</div>",
            "<div>2. الوظائف الرئيسية للكشاف الكهربائي:</div>",
            "<div>   - الكشف عن وجود الشحنات الكهربائية الساكنة.</div>",
            "<div>   - تحديد نوع الشحنة (موجبة أم سالبة).</div>",
            "<div>   - المقارنة بين كميات الشحنات المختلفة.</div>",
            "<div>3. لا يُستخدم الكشاف الكهربائي للكشف عن سريان التيار الكهربائي (الشحنات المتحركة)، حيث يُستخدم لهذا الغرض الجلفانومتر أو الأميتر.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ج) الكشف عن سريان التيار الكهربائي"
    }
    
    ,{
"id": 25,
        "title": "س 53 (2022-2023): دلك الزجاج بالحرير",
        "text": "عند دلك ساق من الزجاج بقطعة من الحرير:",
        "options": [
            { "text": "أ) الشحنة الموجبة تنتقل من الحرير إلى الساق", "isCorrect": false },
            { "text": "ب) الإلكترونات تنتقل من الساق إلى الحرير", "isCorrect": true },
            { "text": "ج) الإلكترونات تنتقل من الحرير إلى الساق", "isCorrect": false },
            { "text": "د) تتولد حرارة فقط دون انتقال أي شحنات كهربائية بينهما", "isCorrect": false }
        ],
        "correctAnswerIndex": 1,
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="80" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" rx="6"/>
            <text x="150" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b" font-family="Cairo">الشحن بالدلك (الزجاج والحرير)</text>
            <text x="150" y="62" text-anchor="middle" font-size="11" fill="#475569" font-family="Cairo">ساق الزجاج (يفقد) ← إلكترونات ← قطعة الحرير (تكسب)</text>
            <text x="150" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a" font-family="Cairo">الزجاج موجب (+) | الحرير سالب (-)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: آلية الشحن بالدلك",
                "question": "ما الشحنات التي تنتقل عند دلك الزجاج بالحرير، وما اتجاه انتقالها؟",
                "options": [
                    { "text": "تنتقل الإلكترونات من ساق الزجاج إلى قطعة الحرير", "isCorrect": true },
                    { "text": "تنتقل الشحنات الموجبة من الحرير إلى ساق الزجاج", "isCorrect": false }
                ],
                "feedback": "صحيح! الإلكترونات هي الشحنات الوحيدة القابلة للانتقال، وتنتقل من الزجاج إلى الحرير."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. عند دلك الزجاج بالحرير، تنتقل الإلكترونات (الشحنات السالبة) من الزجاج إلى الحرير.</div>",
            "<div>2. الزجاج: يفقد إلكترونات فيصبح مشحوناً بشحنة موجبة (+).</div>",
            "<div>3. الحرير: يكتسب إلكترونات فيصبح مشحوناً بشحنة سالبة (-).</div>",
            "<div>4. السبب: قطعة الحرير تمتلك ألفة إلكترونية أعلى لجذب الإلكترونات من الزجاج.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ب) الإلكترونات تنتقل من الساق إلى الحرير"
    },
    {
        "id": 26,
        "title": "س 27 (2022-2023): مولد فان دي جراف",
        "text": "مولد فان دي جراف ينتج فرق جهد يصل إلى:",
        "options": [
            { "text": "أ) 14 × 10⁵ V", "isCorrect": false },
            { "text": "ب) 14 × 10⁶ V", "isCorrect": true },
            { "text": "ج) 14 × 10⁸ V", "isCorrect": false },
            { "text": "د) 14 × 10³ V", "isCorrect": false }
        ],
        "correctAnswerIndex": 1,
        "svgCode": `<svg viewBox="0 0 300 110" width="100%" height="110" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="110" fill="#ffffff" rx="8"/>
            <rect x="15" y="15" width="270" height="80" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" rx="6"/>
            <text x="150" y="40" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a" font-family="Cairo">مولد فان دي جراف (Van de Graaff)</text>
            <text x="150" y="62" text-anchor="middle" font-size="11" fill="#1e40af" font-family="Cairo">جهاز ينتج فروق جهد عالية جداً تصل إلى:</text>
            <text x="150" y="84" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a" font-family="Cairo">14 × 10⁶ V (14 مليون فولت)</text>
        </svg>`,
        "steps": [
            {
                "title": "المرحلة الأولى: جهد مولد فان دي جراف",
                "question": "ما قيمة أقصى فرق جهد يمكن أن ينتجه مولد فان دي جراف؟",
                "options": [
                    { "text": "14 × 10⁶ V (14 مليون فولت)", "isCorrect": true },
                    { "text": "14 × 10³ V (14 ألف فولت)", "isCorrect": false }
                ],
                "feedback": "صحيح! مولد فان دي جراف ينتج فروق جهد كهربائي عالية جداً تصل إلى 14 × 10⁶ V."
            }
        ],
        "pdfSolutionSteps": [
            "<div><strong>الحل المفصل:</strong></div>",
            "<div>1. مولد فان دي جراف هو جهاز كهروستاتيكي ينشئ فروق جهد كهربائية عالية جداً.</div>",
            "<div>2. يصل فرق الجهد الناتج عن المولد إلى 14 × 10⁶ V (أي ما يعادل 14 مليون فولت).</div>",
            "<div>3. تُستخدم هذه الفروق العالية في الجهد لتسريع الجسيمات المشحونة في تجارب الفيزياء الحديثة والنووية.</div>"
        ],
        "pdfFinalAnswer": "الإجابة الصحيحة: ب) 14 × 10⁶ V"
    }
];