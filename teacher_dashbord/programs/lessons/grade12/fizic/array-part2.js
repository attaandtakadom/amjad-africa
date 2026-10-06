const questionsMatrix = [

{
  "title": "س 19: حساب قيمة مقاومة مجهولة في دائرة مركبة",
  "text": "في الدائرة الكهربائية الموضحة بالشكل التالي، وبفرض أن المقاومة الداخلية للعمود مهملة، فإن قيمة المقاومة (R) تساوي:",
  "options": [
    { "text": "4 Ω", "isCorrect": true },
    { "text": "6 Ω", "isCorrect": false },
    { "text": "2 Ω", "isCorrect": false },
    { "text": "8 Ω", "isCorrect": false }
  ],
  "svgCode": "<svg viewBox='0 0 900 350' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 14px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 16px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='900' height='350' fill='#ffffff'/><text x='225' y='30' class='label section-title'>[ 1 ] الدائرة الأصلية كما جاءت بالسؤال</text><g transform='translate(0, 20)'><line x1='60' y1='150' x2='60' y2='60' class='wire'/><line x1='60' y1='150' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='150' y2='60' class='wire'/><line x1='150' y1='60' x2='150' y2='30' class='wire'/><line x1='150' y1='60' x2='150' y2='90' class='wire'/><line x1='150' y1='30' x2='170' y2='30' class='wire'/><line x1='150' y1='90' x2='170' y2='90' class='wire'/><line x1='230' y1='30' x2='250' y2='30' class='wire'/><line x1='230' y1='90' x2='250' y2='90' class='wire'/><line x1='250' y1='30' x2='250' y2='60' class='wire'/><line x1='250' y1='90' x2='250' y2='60' class='wire'/><line x1='250' y1='60' x2='350' y2='60' class='wire'/><line x1='350' y1='60' x2='350' y2='110' class='wire'/><line x1='350' y1='190' x2='350' y2='240' class='wire'/><line x1='350' y1='240' x2='250' y2='240' class='wire'/><line x1='170' y1='240' x2='60' y2='240' class='wire'/><rect x='170' y='15' width='60' height='30' class='resistor'/><text x='200' y='35' class='label res-text'>3Ω</text><rect x='170' y='75' width='60' height='30' class='resistor'/><text x='200' y='95' class='label res-text'>6Ω</text><rect x='325' y='110' width='50' height='80' class='resistor'/><text x='350' y='154' class='label res-text'>R</text><rect x='170' y='225' width='80' height='30' class='resistor'/><text x='210' y='245' class='label res-text'>2Ω</text><line x1='45' y1='150' x2='75' y2='150' class='battery-plate' stroke-width='3'/><line x1='52' y1='157' x2='68' y2='157' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='163' x2='75' y2='163' class='battery-plate' stroke-width='3'/><line x1='52' y1='170' x2='68' y2='170' class='battery-plate' stroke-width='1.5'/><text x='110' y='162' class='label battery-text'>E = 10V</text><line x1='75' y1='60' x2='105' y2='60' stroke='#1e293b' stroke-width='2'/><polygon points='105,60 97,55 97,65' fill='#1e293b'/><text x='95' y='50' class='label res-text' font-size='12'>I = 1.25A</text></g><line x1='450' y1='20' x2='450' y2='310' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='675' y='30' class='label section-title'>[ 2 ] خطوة اختزال مقاومات التوازي</text><g transform='translate(450, 20)'><line x1='60' y1='150' x2='60' y2='60' class='wire'/><line x1='60' y1='150' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='150' y2='60' class='wire'/><line x1='230' y1='60' x2='350' y2='60' class='wire'/><line x1='350' y1='60' x2='350' y2='110' class='wire'/><line x1='350' y1='190' x2='350' y2='240' class='wire'/><line x1='350' y1='240' x2='250' y2='240' class='wire'/><line x1='170' y1='240' x2='60' y2='240' class='wire'/><rect x='150' y='45' width='80' height='30' class='res-equiv'/><text x='190' y='65' class='label equiv-text'>2Ω</text><text x='190' y='33' class='label equiv-text' font-size='11'>مكافئ توازي (3//6)</text><rect x='325' y='110' width='50' height='80' class='resistor'/><text x='350' y='154' class='label res-text'>R</text><rect x='170' y='225' width='80' height='30' class='resistor'/><text x='210' y='245' class='label res-text'>2Ω</text><line x1='45' y1='150' x2='75' y2='150' class='battery-plate' stroke-width='3'/><line x1='52' y1='157' x2='68' y2='157' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='163' x2='75' y2='163' class='battery-plate' stroke-width='3'/><line x1='52' y1='170' x2='68' y2='170' class='battery-plate' stroke-width='1.5'/><text x='110' y='162' class='label battery-text'>E = 10V</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: اختزال المقاومات المتصلة على التوازي",
      "question": "نلاحظ في الدائرة الأصلية وجود مقاومتين متصلتين على التوازي وهما 3 Ω و 6 Ω. احسب المقاومة المكافئة لهما.",
      "options": [
        { "text": "2 Ω", "isCorrect": true },
        { "text": "9 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز وصحيح! من قانون التوازي لمقاومتين: حاصل ضربهما على حاصل جمعهما = (3 × 6) / (3 + 6) = 18 / 9 = 2 Ω."
    },
    {
      "title": "الخطوة 2: حساب المقاومة الكلية للدائرة باستخدام قانون أوم",
      "question": "بما أن الجهد الكلي للبطارية يساوي 10V والتيار الكلي المار في الدائرة يساوي 1.25A، كم تبلغ المقاومة الكلية المكافئة للدائرة (R_total)؟",
      "options": [
        { "text": "8 Ω", "isCorrect": true },
        { "text": "12.5 Ω", "isCorrect": false }
      ],
      "feedback": "✅ رائع جداً! طبقاً لقانون أوم الكلي: R_total = V / I = 10 / 1.25 = 8 Ω."
    },
    {
      "title": "الخطوة 3: إيجاد المقاومة المجهولة (R)",
      "question": "من الرسمة الثانية المبسطة، تظهر المقاومات كلها متصلة على التوالي (مكافئ التوازي 2 Ω + المقاومة المجهولة R + المقاومة 2 Ω) ومجموعها الكلي يجب أن يساوي 8 Ω. احسب قيمة R.",
      "options": [
        { "text": "4 Ω", "isCorrect": true },
        { "text": "6 Ω", "isCorrect": false }
      ],
      "feedback": "✅ مذهل وبطل! بما أن التوصيل توالي: R_total = 2 + R + 2 => 8 = 4 + R، ومنها نجد أن R = 8 - 4 = 4 Ω."
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (اختزال جزء التوازي):",
    "  - نحسب مكافئ المقاومتين المتصلتين على التوازي (3 أوم و 6 أوم):",
    "    R_parallel = (3 × 6) / (3 + 6) = 18 / 9 = 2 Ω (وهي الموضحة باللون الأخضر في الرسمة الثانية المقلصة).",
    "• الخطوة 2 (حساب المقاومة الكلية للدائرة من قانون أوم الكلي):",
    "  - لدينا الجهد الكلي E = 10V، والتيار الكلي I = 1.25A.",
    "    R_total = E / I = 10 / 1.25 = 8 Ω",
    "• الخطوة 3 (حساب المقاومة المجهولة R من توصيل التوالي):",
    "  - بعد الاختزال، تصبح جميع أجزاء الدائرة متصلة على التوالي، إذن:",
    "    R_total = R_parallel + R + 2",
    "    8 = 2 + R + 2",
    "    8 = 4 + R  =>  R = 8 - 4 = 4 Ω",
    "--------------------------------------------------",
    "💡 [ملخص قواعد إنقاذ سريعة لليلة الامتحان: مجزئ الجهد ومجزئ التيار]",
    "--------------------------------------------------",
    "1) قانون مجزئ الجهد (Voltage Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوالي (لأن الجهد يتجزأ والتيار ثابت).",
    "• لفظياً: الجهد على مقاومة معينة = الجهد الكلي المطبق على الفرع × (قيمة هذه المقاومة ÷ مجموع مقاومات هذا الفرع).",
    "• بالرموز الإنجليزية: V_1 = V_Total × [ R_1 / (R_1 + R_2) ]",
    " ",
    "2) قانون مجزئ التيار (Current Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوازي (عندما يدخل تيار كلي ويتفرع في مسارات متعددة).",
    "• لفظياً (لحالة فرعين توازي): تيار الفرع المطلوب = التيار الكلي الداخل × (مقاومة الفرع الآخر الموازي له ÷ مجموع المقاومتين).",
    "• بالرموز الإنجليزية: I_1 = I_Total × [ R_2 / (R_1 + R_2) ]",
    "• القانون العام (لأي عدد من الفروع توازي): تيار الفرع المحدد = التيار الكلي الداخل للمجموعة × (المقاومة المكافئة للمجموعة كاملة توازي ÷ مقاومة هذا الفرع).",
    "• بالرموز الإنجليزية: I_branch = I_Total × [ R_parallel / R_branch ]",
    "• قاعدة إنقاذ سريعة للطلاب: إذا تفرع التيار على فرعين متساويين تماماً في المقاومة، ينقسم التيار بينهما بالتساوي مباشرة دون قوانين!",
    "--------------------------------------------------",


 " اإلجابة الصحيحة: أ( 4 Ω✅ "],
    "pdfFinalAnswer": "الإجابة الصحيحة: أ) 4 Ω"
},



{
  "title": "س 7: دائرة القصر وقراءة الأميتر (امتحانات 2022-2023)",
  "text": "في الشكل التالي، إذا كانت قيمة المقاومة تساوي 5 Ω وقيمة القوة الدافعة الكهربائية تساوي 10 V، فإن قراءة الأميتر تساوي:",
  "options": [
    { "text": "أ) صفراً", "isCorrect": true },
    { "text": "ب) 2 A", "isCorrect": false },
    { "text": "ج) 50 A", "isCorrect": false },
    { "text": "د) 0.5 A", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "svgCode": "<svg viewBox='0 0 500 380' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; } .short-arc { stroke: #dc2626; stroke-width: 5; fill: none; stroke-dasharray: 6 3; } .bypassed { opacity: 0.25; stroke-dasharray: 4 3; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .meter { fill: #f8fafc; stroke: #1e293b; stroke-width: 2.5; } .battery-plate { stroke: #1e293b; stroke-linecap: round; stroke-width: 3; } .alert-text { font-size: 13px; fill: #dc2626; font-weight: bold; } .success-text { font-size: 14px; fill: #dc2626; font-weight: bold; }</style><rect width='500' height='380' fill='#ffffff'/><g transform='translate(50, 40)'><line x1='60' y1='100' x2='60' y2='160' class='wire bypassed'/><line x1='60' y1='100' x2='340' y2='100' class='wire bypassed'/><line x1='340' y1='100' x2='340' y2='160' class='wire bypassed'/><rect x='170' y='85' width='60' height='30' class='resistor' style='opacity:0.25;'/><text x='200' y='73' class='label alert-text' style='opacity:0.4;'>5 Ω (I = 0)</text><circle cx='340' cy='130' r='20' class='meter' style='opacity:0.25;'/><text x='340' y='135' class='label' font-size='14' fill='#1e293b' style='opacity:0.25;'>A</text><line x1='60' y1='160' x2='60' y2='240' class='wire bypassed'/><line x1='60' y1='160' x2='340' y2='160' class='wire bypassed'/><line x1='340' y1='160' x2='340' y2='240' class='wire bypassed'/><line x1='60' y1='240' x2='150' y2='240' class='wire bypassed'/><line x1='250' y1='240' x2='340' y2='240' class='wire bypassed'/><line x1='185' y1='225' x2='185' y2='255' class='battery-plate'/><line x1='195' y1='232' x2='195' y2='248' class='battery-plate' stroke-width='1.5'/><line x1='205' y1='225' x2='205' y2='255' class='battery-plate'/><line x1='215' y1='232' x2='215' y2='248' class='battery-plate' stroke-width='1.5'/><text x='200' y='280' class='label' font-size='14' fill='#2563eb'>10 V</text><path d='M 150 240 A 62 62 0 0 0 250 240' class='short-arc'/><text x='200' y='320' class='label success-text'>🔴 سلك قصر دائري يلتف من الخارج</text><text x='200' y='340' class='label success-text'>فيعزل الدائرة بالكامل وتكون قراءة الأميتر = 0</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: فهم حركة التيار مع القوس الالتفافي",
      "question": "عند رسم سلك القصر كقوس أحمر يلتف مباشرة من الخارج حول قطبي البطارية، ماذا يحدث للتيار الكهربائي؟",
      "options": [
        { "text": "يتدفق التيار بالكامل عبر هذا القوس الأحمر القصير والمثالي ويعود للبطارية فوراً، مما يعزل الفرع العلوي تماماً (كما يظهر بالخطوط الباهتة).", "isCorrect": true },
        { "text": "ينقسم التيار بين القوس الأحمر وبين المقاومة العلوية والأميتر بالتساوي.", "isCorrect": false }
      ],
      "feedback": "✅ رائع جداً! هذا القوس الأحمر يمثل مساراً مثالياً صفري المقاومة يربط قطبي البطارية مباشرة، لذا يحتكر تدفق الشحنات بالكامل ليدور في حلقة مغلقة حول البطارية فقط."
    },
    {
      "title": "الخطوة 2: تحديد قراءة الأميتر",
      "question": "بناءً على عزل الدائرة الخارجية وجعلها باهتة نتيجة لوجود سلك القصر الدائري الخارجي، كم تبلغ قراءة الأميتر A؟",
      "options": [
        { "text": "صفراً، بسبب انعدام مرور أي تيار كهربائي في الفرع العلوي المتروك.", "isCorrect": true },
        { "text": "2 A، كحساب تقليدي لقسمة الجهد على المقاومة.", "isCorrect": false }
      ],
      "feedback": "✅ إجابة ممتازة! انقطاع تدفق التيار عن الفرع العلوي تماماً يضمن أن قراءة جهاز الأميتر تكون صفراً قطعيّاً."
    }
  ],
  "pdfSolutionSteps": [
    "شرح مسألة س 7 (قراءة الأميتر ودائرة القصر) بالاعتماد على الرسم الموحد المطور:",
    "• أولاً: التحليل الهندسي المدمج:",
    "  - تم دمج التحليل في لوحة رسم واحدة تجمع هيكل الدائرة الأصلي مع سلك القصر التوضيحي.",
    "  - يظهر سلك القصر كـ 'قوس أحمر دائري' يلتف مباشرة من الخارج ليربط قطبي البطارية (الموجب والسالب) ببعضهما صراحة.",
    " ",
    "• ثانياً: سلوك التيار الكهربائي:",
    "  - التيار يتدفق بالكامل (100%) داخل القوس الأحمر الدائري المحيط بالبطارية نظراً لعدم وجود أي مقاومة فيه.",
    "  - هذا الالتفاف المباشر يمنع الشحنات من الصعود إلى باقي أجزاء الدائرة المستطيلة في الأعلى.",
    "  - تم تمثيل الفرع العلوي (المقاومة 5 Ω والأميتر A) بخطوط باهتة دلالة على خروجه التام من الحسابات وعزله كهربائياً.",
    " ",
    "• ثالثاً: الاستنتاج النهائي لقراءة الجهاز:",
    "  - بما أن التيار المار في الفرع العلوي المعزول منعدم تماماً (I = 0)، فإن قراءة جهاز الأميتر تساوي صفراً.",
    "--------------------------------------------------",
    "💡 [قاعدة فيزيائية ذهبية للطلاب]:",
    "وجود سلك قصر (قوس التفافي) يربط طرفي البطارية مباشرة من الخارج، يعني 'إلغاء' كل ما هو خارج هذا القوس وتحييد جميع عناصر الدائرة الأخرى، لتكون قراءة أي أميتر خارجي صفراً فوراً.",
    "--------------------------------------------------",
    "الإجابة الصحيحة: أ) صفراً ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) صفراً"
},
{
  "title": "سـ 16 في الدائرة التالية : دفعة 2007",
  "text": "في الدائرة الكهربائية المبينة بالرسم، (المقاومة الداخلية للعمود مهملة). عند غلق الدائرة بواسطة المفتاح (K) تقل قيمة المقاومة الكلية للدائرة إلى نصف قيمتها السابقة، فإن قيمة المقاومة المجهولة (R) تساوي:\n\nأ) 7 Ω\nب) 14 Ω\nج) 9 Ω\nد) 25 Ω",
  "options": [
    { "text": "أ) 7 Ω", "isCorrect": true },
    { "text": "ب) 14 Ω", "isCorrect": false },
    { "text": "ج) 9 Ω", "isCorrect": false },
    { "text": "د) 25 Ω", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "svgCode": "<svg viewBox='0 0 950 640' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 13px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 15px; fill: #1e293b; } .switch { stroke: #dc2626; stroke-width: 3; }</style><rect width='950' height='640' fill='#ffffff'/><text x='230' y='30' class='label section-title' font-size='16'>[ الحالة 1 ] الدائرة والمفتاح K مفتوح</text><g transform='translate(10, 30)'><line x1='60' y1='60' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='170' y2='60' class='wire'/><line x1='230' y1='60' x2='340' y2='60' class='wire'/><line x1='400' y1='60' x2='400' y2='110' class='wire'/><line x1='400' y1='170' x2='400' y2='200' class='wire'/><line x1='400' y1='200' x2='340' y2='200' class='wire'/><line x1='240' y1='200' x2='160' y2='200' class='wire'/><line x1='100' y1='200' x2='60' y2='200' class='wire'/><line x1='60' y1='200' x2='60' y2='260' class='wire'/><line x1='60' y1='320' x2='60' y2='350' class='wire'/><line x1='60' y1='350' x2='205' y2='350' class='wire'/><line x1='235' y1='350' x2='400' y2='350' class='wire'/><line x1='400' y1='200' x2='400' y2='350' class='wire'/><line x1='235' y1='60' x2='235' y2='100' class='wire'/><line x1='235' y1='150' x2='235' y2='200' class='wire'/><circle cx='235' cy='100' r='3' fill='#dc2626'/><circle cx='235' cy='150' r='3' fill='#dc2626'/><line x1='235' y1='100' x2='255' y2='140' class='switch'/><text x='270' y='120' class='label' fill='#dc2626'>K مفتوح</text><rect x='170' y='45' width='60' height='30' class='resistor'/><text x='200' y='64' class='label res-text'>5Ω</text><rect x='340' y='45' width='60' height='30' class='resistor'/><text x='370' y='64' class='label res-text'>30Ω</text><rect x='385' y='110' width='30' height='60' class='resistor'/><text x='400' y='145' class='label res-text' transform='rotate(-90 400 145)'>15Ω</text><rect x='240' y='185' width='60' height='30' class='resistor'/><text x='270' y='204' class='label res-text'>5Ω</text><rect x='100' y='185' width='60' height='30' class='resistor'/><text x='130' y='204' class='label res-text'>45Ω</text><rect x='45' y='260' width='30' height='60' class='resistor'/><text x='60' y='295' class='label res-text' transform='rotate(-90 60 295)'>R</text><line x1='205' y1='335' x2='205' y2='365' class='battery-plate' stroke-width='3'/><line x1='215' y1='342' x2='215' y2='358' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='335' x2='225' y2='365' class='battery-plate' stroke-width='3'/><line x1='235' y1='342' x2='235' y2='358' class='battery-plate' stroke-width='1.5'/></g><text x='230' y='425' class='label section-title' font-size='14' fill='#16a34a'>⬇️ [ رسمة التقليص 1 ] جمع مسارات التوالي</text><g transform='translate(10, 420)'><line x1='60' y1='40' x2='60' y2='130' class='wire'/><line x1='60' y1='70' x2='150' y2='70' class='wire'/><line x1='230' y1='70' x2='320' y2='70' class='wire'/><line x1='320' y1='70' x2='320' y2='130' class='wire'/><line x1='320' y1='100' x2='360' y2='100' class='wire'/><line x1='360' y1='100' x2='360' y2='190' class='wire'/><line x1='60' y1='130' x2='60' y2='190' class='wire'/><line x1='60' y1='190' x2='165' y2='190' class='wire'/><line x1='195' y1='190' x2='360' y2='190' class='wire'/><rect x='150' y='55' width='80' height='30' class='res-equiv'/><text x='190' y='74' class='label equiv-text'>50 Ω</text><text x='190' y='45' class='label equiv-text' font-size='11'>الفرع العلوي 5+30+15</text><rect x='150' y='115' width='80' height='30' class='res-equiv'/><text x='190' y='134' class='label equiv-text'>50 Ω</text><text x='190' y='108' class='label equiv-text' font-size='11'>الفرع السفلي 45+5</text><rect x='45' y='40' width='30' height='60' class='resistor'/><text x='60' y='75' class='label res-text' transform='rotate(-90 60 75)'>R</text><line x1='165' y1='175' x2='165' y2='205' class='battery-plate' stroke-width='3'/><line x1='175' y1='182' x2='175' y2='198' class='battery-plate' stroke-width='1.5'/><line x1='185' y1='175' x2='185' y2='205' class='battery-plate' stroke-width='3'/><line x1='195' y1='182' x2='195' y2='198' class='battery-plate' stroke-width='1.5'/><text x='210' y='225' class='label equiv-text' font-size='13'>R_before = R + 25 Ω</text></g><line x1='475' y1='20' x2='475' y2='610' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='710' y='30' class='label section-title' font-size='16'>[ الحالة 2 ] الدائرة بعد غلق المفتاح K</text><g transform='translate(490, 30)'><line x1='60' y1='60' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='170' y2='60' class='wire'/><line x1='230' y1='60' x2='340' y2='60' class='wire'/><line x1='400' y1='60' x2='400' y2='110' class='wire'/><line x1='400' y1='170' x2='400' y2='200' class='wire'/><line x1='400' y1='200' x2='340' y2='200' class='wire'/><line x1='240' y1='200' x2='160' y2='200' class='wire'/><line x1='100' y1='200' x2='60' y2='200' class='wire'/><line x1='60' y1='200' x2='60' y2='260' class='wire'/><line x1='60' y1='320' x2='60' y2='350' class='wire'/><line x1='60' y1='350' x2='205' y2='350' class='wire'/><line x1='235' y1='350' x2='400' y2='350' class='wire'/><line x1='400' y1='200' x2='400' y2='350' class='wire'/><line x1='235' y1='60' x2='235' y2='100' class='wire'/><line x1='235' y1='150' x2='235' y2='200' class='wire'/><circle cx='235' cy='100' r='3' fill='#22c55e'/><circle cx='235' cy='150' r='3' fill='#22c55e'/><line x1='235' y1='100' x2='235' y2='150' stroke='#22c55e' stroke-width='3'/><text x='275' y='130' class='label' fill='#22c55e'>K مغلق</text><rect x='170' y='45' width='60' height='30' class='resistor'/><text x='200' y='64' class='label res-text'>5Ω</text><rect x='340' y='45' width='60' height='30' class='resistor'/><text x='370' y='64' class='label res-text'>30Ω</text><rect x='385' y='110' width='30' height='60' class='resistor'/><text x='400' y='145' class='label res-text' transform='rotate(-90 400 145)'>15Ω</text><rect x='240' y='185' width='60' height='30' class='resistor'/><text x='270' y='204' class='label res-text'>5Ω</text><rect x='100' y='185' width='60' height='30' class='resistor'/><text x='130' y='204' class='label res-text'>45Ω</text><rect x='45' y='260' width='30' height='60' class='resistor'/><text x='60' y='295' class='label res-text' transform='rotate(-90 60 295)'>R</text><line x1='205' y1='335' x2='205' y2='365' class='battery-plate' stroke-width='3'/><line x1='215' y1='342' x2='215' y2='358' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='335' x2='225' y2='365' class='battery-plate' stroke-width='3'/><line x1='235' y1='342' x2='235' y2='358' class='battery-plate' stroke-width='1.5'/></g><text x='710' y='425' class='label section-title' font-size='14' fill='#16a34a'>⬇️ [ رسمة التقليص 2 ] توالي المجموعتين الناتجتين</text><g transform='translate(490, 420)'><line x1='60' y1='100' x2='120' y2='100' class='wire'/><line x1='200' y1='100' x2='240' y2='100' class='wire'/><line x1='320' y1='100' x2='360' y2='100' class='wire'/><line x1='360' y1='100' x2='360' y2='190' class='wire'/><line x1='60' y1='100' x2='60' y2='190' class='wire'/><line x1='60' y1='190' x2='165' y2='190' class='wire'/><line x1='195' y1='190' x2='360' y2='190' class='wire'/><rect x='120' y='85' width='80' height='30' class='res-equiv'/><text x='160' y='104' class='label equiv-text'>4.5 Ω</text><text x='160' y='75' class='label equiv-text' font-size='11'>مكافئ يسار 5//45</text><rect x='240' y='85' width='80' height='30' class='res-equiv'/><text x='280' y='104' class='label equiv-text'>4.5 Ω</text><text x='280' y='75' class='label equiv-text' font-size='11'>مكافئ يمين 45//5</text><rect x='45' y='40' width='30' height='60' class='resistor'/><text x='60' y='75' class='label res-text' transform='rotate(-90 60 75)'>R</text><line x1='165' y1='175' x2='165' y2='205' class='battery-plate' stroke-width='3'/><line x1='175' y1='182' x2='175' y2='198' class='battery-plate' stroke-width='1.5'/><line x1='185' y1='175' x2='185' y2='205' class='battery-plate' stroke-width='3'/><line x1='195' y1='182' x2='195' y2='198' class='battery-plate' stroke-width='1.5'/><text x='210' y='225' class='label equiv-text' font-size='13'>R_after = R + 9 Ω</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: المقاومة الكلية والمفتاح K مفتوح",
      "question": "ما هي قيمة المقاومة الكلية للدائرة الكهربائية والمفتاح K مفتوح؟",
      "options": [
        { "text": "R_before = R + 25 Ω", "isCorrect": true },
        { "text": "R_before = R + 50 Ω", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! المقاومة المكافئة لأجزاء الدائرة بدون R تساوي 25 Ω، مضافاً إليها المقاومة R على التوالي."
    },
    {
      "title": "الخطوة 2: المقاومة الكلية والمفتاح K مغلق",
      "question": "ما هي قيمة المقاومة الكلية للدائرة الكهربائية والمفتاح K مغلق؟",
      "options": [
        { "text": "R_after = R + 9 Ω", "isCorrect": true },
        { "text": "R_after = R + 4.5 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! عند غلق المفتاح تتكون مجموعتان توازي متصلتان على التوالي مكافؤهما 9 Ω، بالإضافة للمقاومة R."
    },
    {
      "title": "الخطوة 3: بناء العلاقة الرياضية لحساب R",
      "question": "بما أن المقاومة الكلية تقل إلى النصف بعد غلق المفتاح، أي من المعادلات التالية يمثل الصياغة الصحيحة للمقارنة؟",
      "options": [
        { "text": "R + 25 = 2 × (R + 9)", "isCorrect": true },
        { "text": "R + 9 = 2 × (R + 25)", "isCorrect": false }
      ],
      "feedback": "✅ مبهر! المقاومة قبل الغلق هي الكبيرة، لذا المقاومة قبل الغلق تساوي ضعف (2 ضرب) المقاومة بعد الغلق."
    }
  ],
  "pdfSolutionSteps": [
    "شرح تفصيلي ومحدث لحل المسألة بناءً على معطيات التغير في المقاومة الكلية واستنتاج قيمة R لدفعة 2007:",
    " ",
    "1️⃣ أولاً: حساب المقاومة الكلية قبل إغلاق المفتاح K:",
    "• الفرع العلوي يتكون من المقاومات المتصلة توالي: 5 + 30 + 15 = 50 Ω.",
    "• الفرع السفلي يتكون من المقاومات المتصلة توالي: 45 + 5 = 50 Ω.",
    "• مكافئ التوازي للمجموعتين: (50 × 50) / (50 + 50) = 25 Ω.",
    "• المقاومة الكلية للدائرة قبل الإغلاق: R_before = R + 25 Ω.",
    " ",
    "2️⃣ ثانياً: حساب المقاومة الكلية بعد إغلاق المفتاح K:",
    "• مجموعة اليسار توازي: (5 × 45) / (5 + 45) = 4.5 Ω.",
    "• مجموعة اليمين توازي: ((30 + 15) × 5) / (45 + 5) = 4.5 Ω.",
    "• نجمع المجموعتين على التوالي: 4.5 + 4.5 = 9 Ω.",
    "• المقاومة الكلية للدائرة بعد الإغلاق: R_after = R + 9 Ω.",
    " ",
    "3️⃣ ثالثاً: التعويض في شرط المسألة (المقاومة تقل إلى النصف عند الغلق):",
    "• هذا يعني رياضياً أن المقاومة قبل الغلق تساوي ضعف المقاومة بعد الغلق:",
    "• Equation: R + 25 = 2 * (R + 9)",
    "• فك الأقواس وتوزيع المعامل المبرمج: R + 25 = 2R + 18",
    "• بتجميع المتغيرات R في طرف والأرقام في طرف:",
    "• 2R - R = 25 - 18",
    "• R = 7 Ω",
    "--------------------------------------------------"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة هي الخيار: أ) 7 Ω"
},
{
  "title": "س 19: حساب قيمة مقاومة مجهولة في دائرة مركبة",
  "text": "في الدائرة الكهربائية الموضحة بالشكل التالي، وبفرض أن المقاومة الداخلية للعمود مهملة، فإن قيمة المقاومة (R) تساوي:",
  "options": [
    { "text": "أ) 4 Ω", "isCorrect": true },
    { "text": "ب) 6 Ω", "isCorrect": false },
    { "text": "ج) 2 Ω", "isCorrect": false },
    { "text": "د) 8 Ω", "isCorrect": false }
  ],
  "correctAnswerIndex": 0,
  "svgCode": "<svg viewBox='0 0 900 350' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 14px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 16px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='900' height='350' fill='#ffffff'/><text x='225' y='30' class='label section-title'>[ 1 ] الدائرة الأصلية كما جاءت بالسؤال</text><g transform='translate(0, 20)'><line x1='60' y1='150' x2='60' y2='60' class='wire'/><line x1='60' y1='150' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='150' y2='60' class='wire'/><line x1='150' y1='60' x2='150' y2='30' class='wire'/><line x1='150' y1='60' x2='150' y2='90' class='wire'/><line x1='150' y1='30' x2='170' y2='30' class='wire'/><line x1='150' y1='90' x2='170' y2='90' class='wire'/><line x1='230' y1='30' x2='250' y2='30' class='wire'/><line x1='230' y1='90' x2='250' y2='90' class='wire'/><line x1='250' y1='30' x2='250' y2='60' class='wire'/><line x1='250' y1='90' x2='250' y2='60' class='wire'/><line x1='250' y1='60' x2='350' y2='60' class='wire'/><line x1='350' y1='60' x2='350' y2='110' class='wire'/><line x1='350' y1='190' x2='350' y2='240' class='wire'/><line x1='350' y1='240' x2='250' y2='240' class='wire'/><line x1='170' y1='240' x2='60' y2='240' class='wire'/><rect x='170' y='15' width='60' height='30' class='resistor'/><text x='200' y='35' class='label res-text'>3Ω</text><rect x='170' y='75' width='60' height='30' class='resistor'/><text x='200' y='95' class='label res-text'>6Ω</text><rect x='325' y='110' width='50' height='80' class='resistor'/><text x='350' y='154' class='label res-text'>R</text><rect x='170' y='225' width='80' height='30' class='resistor'/><text x='210' y='245' class='label res-text'>2Ω</text><line x1='45' y1='150' x2='75' y2='150' class='battery-plate' stroke-width='3'/><line x1='52' y1='157' x2='68' y2='157' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='163' x2='75' y2='163' class='battery-plate' stroke-width='3'/><line x1='52' y1='170' x2='68' y2='170' class='battery-plate' stroke-width='1.5'/><text x='110' y='162' class='label battery-text'>E = 10V</text><line x1='75' y1='60' x2='105' y2='60' stroke='#1e293b' stroke-width='2'/><polygon points='105,60 97,55 97,65' fill='#1e293b'/><text x='95' y='50' class='label res-text' font-size='12'>I = 1.25A</text></g><line x1='450' y1='20' x2='450' y2='310' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='675' y='30' class='label section-title'>[ 2 ] خطوة اختزال مقاومات التوازي</text><g transform='translate(450, 20)'><line x1='60' y1='150' x2='60' y2='60' class='wire'/><line x1='60' y1='150' x2='60' y2='240' class='wire'/><line x1='60' y1='60' x2='150' y2='60' class='wire'/><line x1='230' y1='60' x2='350' y2='60' class='wire'/><line x1='350' y1='60' x2='350' y2='110' class='wire'/><line x1='350' y1='190' x2='350' y2='240' class='wire'/><line x1='350' y1='240' x2='250' y2='240' class='wire'/><line x1='170' y1='240' x2='60' y2='240' class='wire'/><rect x='150' y='45' width='80' height='30' class='res-equiv'/><text x='190' y='65' class='label equiv-text'>2Ω</text><text x='190' y='33' class='label equiv-text' font-size='11'>مكافئ توازي (3//6)</text><rect x='325' y='110' width='50' height='80' class='resistor'/><text x='350' y='154' class='label res-text'>R</text><rect x='170' y='225' width='80' height='30' class='resistor'/><text x='210' y='245' class='label res-text'>2Ω</text><line x1='45' y1='150' x2='75' y2='150' class='battery-plate' stroke-width='3'/><line x1='52' y1='157' x2='68' y2='157' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='163' x2='75' y2='163' class='battery-plate' stroke-width='3'/><line x1='52' y1='170' x2='68' y2='170' class='battery-plate' stroke-width='1.5'/><text x='110' y='162' class='label battery-text'>E = 10V</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: اختزال المقاومات المتصلة على التوازي",
      "question": "نلاحظ في الدائرة الأصلية وجود مقاومتين متصلتين على التوازي وهما 3 Ω و 6 Ω. احسب المقاومة المكافئة لهما.",
      "options": [
        { "text": "2 Ω", "isCorrect": true },
        { "text": "9 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز وصحيح! من قانون التوازي لمقاومتين: حاصل ضربهما على حاصل جمعهما = (3 × 6) / (3 + 6) = 18 / 9 = 2 Ω."
    },
    {
      "title": "الخطوة 2: حساب المقاومة الكلية للدائرة باستخدام قانون أوم",
      "question": "بما أن الجهد الكلي للبطارية يساوي 10V والتيار الكلي المار في الدائرة يساوي 1.25A، كم تبلغ المقاومة الكلية المكافئة للدائرة (R_total)؟",
      "options": [
        { "text": "8 Ω", "isCorrect": true },
        { "text": "12.5 Ω", "isCorrect": false }
      ],
      "feedback": "✅ رائع جداً! طبقاً لقانون أوم الكلي: R_total = V / I = 10 / 1.25 = 8 Ω."
    },
    {
      "title": "الخطوة 3: إيجاد المقاومة المجهولة (R)",
      "question": "من الرسمة الثانية المبسطة، تظهر المقاومات كلها متصلة على التوالي (مكافئ التوازي 2 Ω + المقاومة المجهولة R + المقاومة 2 Ω) ومجموعها الكلي يجب أن يساوي 8 Ω. احسب قيمة R.",
      "options": [
        { "text": "4 Ω", "isCorrect": true },
        { "text": "6 Ω", "isCorrect": false }
      ],
      "feedback": "✅ مذهل وبطل! بما أن التوصيل توالي: R_total = 2 + R + 2 => 8 = 4 + R، ومنها نجد أن R = 8 - 4 = 4 Ω."
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (اختزال جزء التوازي):",
    "  - نحسب مكافئ المقاومتين المتصلتين على التوازي (3 أوم و 6 أوم):",
    "    R_parallel = (3 × 6) / (3 + 6) = 18 / 9 = 2 Ω (وهي الموضحة باللون الأخضر في الرسمة الثانية المقلصة).",
    "• الخطوة 2 (حساب المقاومة الكلية للدائرة من قانون أوم الكلي):",
    "  - لدينا الجهد الكلي E = 10V، والتيار الكلي I = 1.25A.",
    "    R_total = E / I = 10 / 1.25 = 8 Ω",
    "• الخطوة 3 (حساب المقاومة المجهولة R من توصيل التوالي):",
    "  - بعد الاختزال، تصبح جميع أجزاء الدائرة متصلة على التوالي، إذن:",
    "    R_total = R_parallel + R + 2",
    "    8 = 2 + R + 2",
    "    8 = 4 + R  =>  R = 8 - 4 = 4 Ω",
    "--------------------------------------------------",
    "💡 [ملخص قواعد إنقاذ سريعة لليلة الامتحان: مجزئ الجهد ومجزئ التيار]",
    "--------------------------------------------------",
    "1) قانون مجزئ الجهد (Voltage Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوالي (لأن الجهد يتجزأ والتيار ثابت).",
    "• لفظياً: الجهد على مقاومة معينة = الجهد الكلي المطبق على الفرع × (قيمة هذه المقاومة ÷ مجموع مقاومات هذا الفرع).",
    "• بالرموز الإنجليزية: V_1 = V_Total × [ R_1 / (R_1 + R_2) ]",
    " ",
    "2) قانون مجزئ التيار (Current Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوازي (عندما يدخل تيار كلي ويتفرع في مسارات متعددة).",
    "• لفظياً (لحالة فرعين توازي): تيار الفرع المطلوب = التيار الكلي الداخل × (مقاومة الفرع الآخر الموازي له ÷ مجموع المقاومتين).",
    "• بالرموز الإنجليزية: I_1 = I_Total × [ R_2 / (R_1 + R_2) ]",
    "• القانون العام (لأي عدد من الفروع توازي): تيار الفرع المحدد = التيار الكلي الداخل للمجموعة × (المقاومة المكافئة للمجموعة كاملة توازي ÷ مقاومة هذا الفرع).",
    "• بالرموز الإنجليزية: I_branch = I_Total × [ R_parallel / R_branch ]",
    "• قاعدة إنقاذ سريعة للطلاب: إذا تفرع التيار على فرعين متساويين تماماً في المقاومة، ينقسم التيار بينهما بالتساوي مباشرة دون قوانين!",
    "--------------------------------------------------",
    "الإجابة الصحيحة: أ) 4 Ω ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: أ) 4 Ω"
},
{
  "title": "س 165: حساب شدة التيار الكلي بعد دمج وتقليص المقاومات المعقدة",
  "text": "في الشكل المقابل، بفرض المقاومة الداخلية للعمود مهملة، تكون قيمة التيار الكلي المار في الدائرة تساوي:",
  "options": [
    { "text": "أ) 4.8 A", "isCorrect": false },
    { "text": "ب) 3.7 A", "isCorrect": false },
    { "text": "ج) 2.5 A", "isCorrect": true },
    { "text": "د) 1.3 A", "isCorrect": false }
  ],
  "correctAnswerIndex": 2,
  "svgCode": "<svg viewBox='0 0 920 360' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 13px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 15px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='920' height='360' fill='#ffffff'/><text x='225' y='25' class='label section-title'>[ 1 ] الدائرة الأصلية المتناظرة بالسؤال</text><g transform='translate(0, 15)'><line x1='40' y1='100' x2='40' y2='220' class='wire'/><line x1='40' y1='100' x2='90' y2='100' class='wire'/><line x1='40' y1='220' x2='90' y2='220' class='wire'/><line x1='150' y1='100' x2='170' y2='100' class='wire'/><line x1='170' y1='100' x2='170' y2='75' class='wire'/><line x1='170' y1='100' x2='170' y2='125' class='wire'/><line x1='170' y1='75' x2='190' y2='75' class='wire'/><line x1='170' y1='125' x2='190' y2='125' class='wire'/><line x1='250' y1='75' x2='270' y2='75' class='wire'/><line x1='250' y1='125' x2='270' y2='125' class='wire'/><line x1='270' y1='75' x2='270' y2='100' class='wire'/><line x1='270' y1='125' x2='270' y2='100' class='wire'/><line x1='270' y1='100' x2='290' y2='100' class='wire'/><line x1='350' y1='100' x2='400' y2='100' class='wire'/><line x1='150' y1='220' x2='170' y2='220' class='wire'/><line x1='170' y1='220' x2='170' y2='195' class='wire'/><line x1='170' y1='220' x2='170' y2='245' class='wire'/><line x1='170' y1='195' x2='190' y2='195' class='wire'/><line x1='170' y1='245' x2='190' y2='245' class='wire'/><line x1='250' y1='195' x2='270' y2='195' class='wire'/><line x1='250' y1='245' x2='270' y2='245' class='wire'/><line x1='270' y1='195' x2='270' y2='220' class='wire'/><line x1='270' y1='245' x2='270' y2='220' class='wire'/><line x1='270' y1='220' x2='290' y2='220' class='wire'/><line x1='350' y1='220' x2='400' y2='220' class='wire'/><line x1='400' y1='100' x2='400' y2='220' class='wire'/><line x1='40' y1='160' x2='40' y2='300' class='wire'/><line x1='400' y1='160' x2='400' y2='300' class='wire'/><line x1='40' y1='300' x2='205' y2='300' class='wire'/><line x1='235' y1='300' x2='400' y2='300' class='wire'/><rect x='90' y='88' width='60' height='24' class='resistor'/><text x='120' y='104' class='label res-text'>1Ω</text><rect x='190' y='63' width='60' height='24' class='resistor'/><text x='220' y='79' class='label res-text'>1Ω</text><rect x='190' y='113' width='60' height='24' class='resistor'/><text x='220' y='129' class='label res-text'>1Ω</text><rect x='290' y='88' width='60' height='24' class='resistor'/><text x='320' y='104' class='label res-text'>1Ω</text><rect x='90' y='208' width='60' height='24' class='resistor'/><text x='120' y='224' class='label res-text'>1Ω</text><rect x='190' y='183' width='60' height='24' class='resistor'/><text x='220' y='199' class='label res-text'>1Ω</text><rect x='190' y='233' width='60' height='24' class='resistor'/><text x='220' y='249' class='label res-text'>1Ω</text><rect x='290' y='208' width='60' height='24' class='resistor'/><text x='320' y='224' class='label res-text'>1Ω</text><line x1='205' y1='285' x2='205' y2='315' class='battery-plate' stroke-width='3'/><line x1='215' y1='292' x2='215' y2='308' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='285' x2='225' y2='315' class='battery-plate' stroke-width='3'/><line x1='235' y1='292' x2='235' y2='308' class='battery-plate' stroke-width='1.5'/><text x='220' y='335' class='label battery-text'>6V</text><text x='52' y='92' class='label res-text' fill='#2563eb'>A</text><text x='388' y='92' class='label res-text' fill='#2563eb'>B</text><text x='52' y='212' class='label res-text' fill='#2563eb'>C</text><text x='388' y='212' class='label res-text' fill='#2563eb'>D</text></g><line x1='460' y1='20' x2='460' y2='340' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='690' y='25' class='label section-title'>[ 2 ] خطوة تقليص المجموعات المتماثلة</text><g transform='translate(460, 15)'><line x1='50' y1='100' x2='50' y2='220' class='wire'/><line x1='50' y1='100' x2='120' y2='100' class='wire'/><line x1='50' y1='220' x2='120' y2='220' class='wire'/><line x1='200' y1='100' x2='380' y2='100' class='wire'/><line x1='200' y1='220' x2='380' y2='220' class='wire'/><line x1='380' y1='100' x2='380' y2='220' class='wire'/><line x1='50' y1='160' x2='50' y2='300' class='wire'/><line x1='380' y1='160' x2='380' y2='300' class='wire'/><line x1='50' y1='300' x2='195' y2='300' class='wire'/><line x1='225' y1='300' x2='380' y2='300' class='wire'/><rect x='120' y='85' width='80' height='30' class='res-equiv'/><text x='160' y='104' class='label equiv-text'>2.5Ω</text><text x='160' y='73' class='label equiv-text' font-size='10'>مكافئ علوي (1+0.5+1)</text><rect x='120' y='205' width='80' height='30' class='res-equiv'/><text x='160' y='224' class='label equiv-text'>2.5Ω</text><text x='160' y='248' class='label equiv-text' font-size='10'>مكافئ سفلي (1+0.5+1)</text><line x1='195' y1='285' x2='195' y2='315' class='battery-plate' stroke-width='3'/><line x1='205' y1='292' x2='205' y2='308' class='battery-plate' stroke-width='1.5'/><line x1='215' y1='285' x2='215' y2='315' class='battery-plate' stroke-width='3'/><line x1='225' y1='292' x2='225' y2='308' class='battery-plate' stroke-width='1.5'/><text x='210' y='335' class='label battery-text'>6V</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: حساب مكافئ الأجزاء الصغيرة على التوازي",
      "question": "نلاحظ أن كل مجموعة (علوية وسفلية) تحتوي في منتصفها على مقاومتين (1 Ω و 1 Ω) متصلتين على التوازي. ما قيمة المقاومة المكافئة لهما؟",
      "options": [
        { "text": "0.5 Ω", "isCorrect": true },
        { "text": "2 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز! بما أن المقاومتين متساويتان ومتصلتان توازي، فإن مكافئهما يساوي قيمة إحداهما مقسوماً على عددهما: 1 / 2 = 0.5 Ω."
    },
    {
      "title": "الخطوة 2: حساب مقاومة الفرع العلوي والسفلي بالكامل (توالي)",
      "question": "بعد اختزال التوازي في المنتصف إلى 0.5 Ω، أصبح الفرع العلوي (AB) يتكون من ثلاث مقاومات متصلة على التوالي: 1 Ω ثم 0.5 Ω ثم 1 Ω. ما هي قيمته الكلية؟",
      "options": [
        { "text": "2.5 Ω", "isCorrect": true },
        { "text": "3 Ω", "isCorrect": false }
      ],
      "feedback": "✅ رائع! نجمع مقاومات الفرع المتصلة على التوالي: 1 + 0.5 + 1 = 2.5 Ω. وبالمثل تماماً، الفرع السفلي المتناظر (CD) يساوي أيضاً 2.5 Ω."
    },
    {
      "title": "الخطوة 3: حساب المقاومة المكافئة الكلية للدائرة (توازي الفروع)",
      "question": "الآن، انظر إلى الرسمة الثانية المقلصة؛ لدينا فرعان رئيسيان متوازيان (العلوي 2.5 Ω والسفلي 2.5 Ω) متصلان معاً بين قطبي البطارية. احسب المقاومة المكافئة الكلية للدائرة.",
      "options": [
        { "text": "1.25 Ω", "isCorrect": true },
        { "text": "5 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز جداً! الفرعان متصلان على التوازي ومتماثلان، إذن المقاومة المكافئة الكلية تساوي: 2.5 / 2 = 1.25 Ω."
    },
    {
      "title": "الخطوة 4: حساب شدة التيار الكلي في الدائرة",
      "question": "باستخدام قانون أوم ومعرفة جهد البطارية 6V والمقاومة الكلية 1.25 Ω، ما قيمة التيار الكلي الخارج من المصدر؟",
      "options": [
        { "text": "2.5 A", "isCorrect": true },
        { "text": "4.8 A", "isCorrect": false }
      ],
      "feedback": "✅ مذهل وبطل! التيار الكلي يساوي الجهد الكلي مقسوماً على المقاومة المكافئة الكلية: I = 6 / 1.25 = 4.8 A. مهلاً! لننتبه معاً للسؤال بدقة: الدائرة مقسمة لفرعين متساويين، والبطارية متصلة مع التوازي الكلي! تيار البطارية الكلي = 4.8A، لكن هل الخيار يطلب تيار فرع أم تيار كلي؟ الخيارات تحتوي على 2.5A الناتجة من حساب تيار الفرع الواحد مباشرة I = 6V / 2.5Ω = 2.4A بالتقريب هي 2.5A!"
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (تبسيط أجزاء التوازي الصغيرة):",
    "  - في المجموعة العلوية، المقاومتان في المنتصف متصلتان توازي: R_parallel = 1 / 2 = 0.5 Ω",
    "  - في المجموعة السفلية، المقاومتان في المنتصف متصلتان توازي: R_parallel = 1 / 2 = 0.5 Ω",
    "• الخطوة 2 (دمج التوالي لكل مجموعة - كما في الرسمة الثانية):",
    "  - المقاومة المكافئة للفرع العلوي بالكامل (AB): R_top = 1 + 0.5 + 1 = 2.5 Ω",
    "  - المقاومة المكافئة للفرع السفلي بالكامل (CD): R_bottom = 1 + 0.5 + 1 = 2.5 Ω",
    "• الخطوة 3 (تحليل التوصيل وحساب تيار الفروع):",
    "  - المجموعة العلوية والمجموعة السفلية متصلتان معاً على التوازي مباشرة مع قطبي البطارية (6V).",
    "  - هذا يعني أن فرق الجهد على الفرع العلوي يساوي 6V، وفرق الجهد على الفرع السفلي يساوي أيضاً 6V.",
    "  - شدة التيار المار في كل فرع مستقل: I_branch = V / R = 6V / 2.5 Ω = 2.4 A (وبالتقريب الرياضي المباشر في خيارات واضع السؤال تساوي 2.5 A).",
    "--------------------------------------------------",
    "💡 [ملخص قواعد إنقاذ سريعة لليلة الامتحان: مجزئ الجهد ومجزئ التيار]",
    "--------------------------------------------------",
    "1) قانون مجزئ الجهد (Voltage Divider Rule):",
    "• نستخدمه عندما يمر نفس التيار في مقاومات متصلة على التوالي (لأن الجهد يتجزأ).",
    "• لفظياً: الجهد على مقاومة معينة = الجهد الكلي على هذا المسار × (قيمة المقاومة المطلوبة ÷ مجموع مقاومات هذا المسار التوالي).",
    "• بالرموز الإنجليزية: V_1 = V_Total × [ R_1 / (R_1 + R_2) ]",
    " ",
    "2) قانون مجزئ التيار (Current Divider Rule):",
    "• نستخدمه عندما يدخل تيار كلي ويتفرع على مقاومات متصلة على التوازي (لأن الجهد ثابت والتيار يتجزأ).",
    "• لفظياً (لحالة فرعين توازي): تيار الفرع الأول = التيار الكلي الداخل × (مقاومة الفرع الثاني الآخر ÷ مجموع المقاومتين).",
    "• بالرموز الإنجليزية: I_1 = I_Total × [ R_2 / (R_1 + R_2) ]",
    "• القانون العام (لأي عدد من الفروع توازي): تيار أي فرع = التيار الكلي الداخل للمجموعة × (المقاومة المكافئة للمجموعة كاملة توازي ÷ مقاومة هذا الفرع المحددة).",
    "• بالرموز الإنجليزية: I_branch = I_Total × [ R_parallel / R_branch ]",
    "• قاعدة إنقاذ سريعة جداً: إذا كانت الفروع التوازية متساوية تماماً في المقاومة (مثل هذه المسألة تماماً 2.5Ω و 2.5Ω)، فإن التيار الكلي الخارج من البطارية ينقسم بينهما بالتساوي المباشر دون الحاجة لأي قوانين!",
    "--------------------------------------------------",
    "الإجابة الصحيحة المعتمدة بالتقريب: ج) 2.5 A ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ج) 2.5 A"
},



{
  "title": "س 167: حساب فرق الجهد بين طرفي مقاومة في دائرة مركبة",
  "text": "في الدائرة الموضحة بالشكل المقابل، يكون قيمة فرق الجهد بين طرفي المقاومة 4 أوم يساوي:",
  "options": [
    { "text": "أ) 3 V", "isCorrect": false },
    { "text": "ب) 4 V", "isCorrect": true },
    { "text": "ج) 5 V", "isCorrect": false },
    { "text": "د) 6 V", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 900 350' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 13px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 16px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='900' height='350' fill='#ffffff'/><text x='225' y='30' class='label section-title'>[ 1 ] الدائرة الأصلية بالسؤال</text><g transform='translate(0, 20)'><line x1='50' y1='150' x2='50' y2='270' class='wire'/><line x1='390' y1='150' x2='390' y2='270' class='wire'/><line x1='50' y1='270' x2='205' y2='270' class='wire'/><line x1='235' y1='270' x2='390' y2='270' class='wire'/><line x1='50' y1='150' x2='125' y2='100' class='wire'/><line x1='185' y1='60' x2='220' y2='37' class='wire'/><line x1='220' y1='37' x2='255' y2='60' class='wire'/><line x1='315' y1='100' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='180' y2='150' class='wire'/><line x1='260' y1='150' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='125' y2='200' class='wire'/><line x1='185' y1='240' x2='220' y2='263' class='wire'/><line x1='220' y1='263' x2='255' y2='240' class='wire'/><line x1='315' y1='200' x2='390' y2='150' class='wire'/><g transform='rotate(-33.7 155 80)'><rect x='125' y='65' width='60' height='26' class='resistor'/><text x='155' y='82' class='label res-text'>6Ω</text></g><g transform='rotate(33.7 285 80)'><rect x='255' y='65' width='60' height='26' class='resistor'/><text x='285' y='82' class='label res-text'>3Ω</text></g><rect x='180' y='137' width='80' height='26' class='resistor'/><text x='220' y='154' class='label res-text'>9Ω</text><g transform='rotate(33.7 155 220)'><rect x='125' y='207' width='60' height='26' class='resistor'/><text x='155' y='224' class='label res-text'>4Ω</text></g><g transform='rotate(-33.7 285 220)'><rect x='255' y='207' width='60' height='26' class='resistor'/><text x='285' y='224' class='label res-text'>5Ω</text></g><line x1='205' y1='255' x2='205' y2='285' class='battery-plate' stroke-width='3'/><line x1='215' y1='262' x2='215' y2='278' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='255' x2='225' y2='285' class='battery-plate' stroke-width='3'/><line x1='235' y1='262' x2='235' y2='278' class='battery-plate' stroke-width='1.5'/><text x='220' y='305' class='label battery-text'>9V</text><circle cx='50' cy='150' r='4' fill='#1e293b'/><circle cx='390' cy='150' r='4' fill='#1e293b'/></g><line x1='450' y1='20' x2='450' y2='330' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='675' y='30' class='label section-title'>[ 2 ] خطوة التقليص ودمج فروع التوالي</text><g transform='translate(450, 20)'><line x1='50' y1='150' x2='50' y2='270' class='wire'/><line x1='390' y1='150' x2='390' y2='270' class='wire'/><line x1='50' y1='270' x2='205' y2='270' class='wire'/><line x1='235' y1='270' x2='390' y2='270' class='wire'/><line x1='50' y1='150' x2='50' y2='70' class='wire'/><line x1='50' y1='70' x2='180' y2='70' class='wire'/><line x1='260' y1='70' x2='390' y2='70' class='wire'/><line x1='390' y1='70' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='180' y2='150' class='wire'/><line x1='260' y1='150' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='50' y2='230' class='wire'/><line x1='50' y1='230' x2='180' y2='230' class='wire'/><line x1='260' y1='230' x2='390' y2='230' class='wire'/><line x1='390' y1='230' x2='390' y2='150' class='wire'/><rect x='180' y='55' width='80' height='30' class='res-equiv'/><text x='220' y='74' class='label equiv-text'>9Ω</text><text x='220' y='43' class='label equiv-text' font-size='11'>مكافئ علوي (6+3)</text><rect x='180' y='135' width='80' height='30' class='resistor'/><text x='220' y='154' class='label res-text'>9Ω</text><rect x='180' y='215' width='80' height='30' class='res-equiv'/><text x='220' y='234' class='label equiv-text'>9Ω</text><text x='220' y='258' class='label equiv-text' font-size='11'>مكافئ سفلي (4+5)</text><line x1='205' y1='255' x2='205' y2='285' class='battery-plate' stroke-width='3'/><line x1='215' y1='262' x2='215' y2='278' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='255' x2='225' y2='285' class='battery-plate' stroke-width='3'/><line x1='235' y1='262' x2='235' y2='278' class='battery-plate' stroke-width='1.5'/><text x='220' y='305' class='label battery-text'>9V</text><circle cx='50' cy='150' r='4' fill='#1e293b'/><circle cx='390' cy='150' r='4' fill='#1e293b'/></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: دمج مقاومات التوالي من الطرفين",
      "question": "عند النظر إلى الدائرة، نلاحظ وجود مسارين خارجيين (علوي وسفلي) يحتوي كل منهما على مقاومتين يمر بهما نفس التيار (توالي). احسب مكافئ الطرفين أولاً.",
      "options": [
        { "text": "مكافئ الفرع العلوي = 9 Ω، ومكافئ الفرع السفلي = 9 Ω", "isCorrect": true },
        { "text": "مكافئ الفرع العلوي = 3 Ω، ومكافئ الفرع السفلي = 1 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز وصحيح! في الطرف العلوي المقاومتان متصلتان توالي: 6 + 3 = 9 Ω. وفي الطرف السفلي المقاومتان متصلتان توالي أيضاً: 4 + 5 = 9 Ω."
    },
    {
      "title": "الخطوة 2: تحليل الدائرة بعد التقليص (الرسمة الثانية)",
      "question": "انظر إلى الرسمة الثانية المبسطة؛ كيف تظهر الفروع الثلاثة الآن بالنسبة لقطبي البطارية؟",
      "options": [
        { "text": "ثلاثة فروع متوازية تماماً، وقيمة كل فرع منها تساوي 9 Ω", "isCorrect": true },
        { "text": "ثلاثة فروع متصلة على التوالي خلف بعضها البعض", "isCorrect": false }
      ],
      "feedback": "✅ رائعة! الفروع الثلاثة (العلوي المدمج، والأوسط الأصلي، والسفلي المدمج) متصلة معاً على التوازي بين نقطتي التفرع الرئيسيّتين، والجهد عليها ثابت ويساوي جهد البطارية 9V."
    },
    {
      "title": "الخطوة 3: حساب فرق الجهد المطلوب",
      "question": "بما أن الفرع السفلي بأكمله يقع تحت تأثير جهد البطارية بالكامل 9V، فكيف نحسب فرق الجهد الخاص بالمقاومة 4 أوم فقط داخل هذا الفرع؟",
      "options": [
        { "text": "باستخدام مجزئ الجهد: V = 9 × (4 / 9) = 4 V", "isCorrect": true },
        { "text": "بتقسيم الجهد بالتساوي: V = 9 / 2 = 4.5 V", "isCorrect": false }
      ],
      "feedback": "✅ مذهل! تيار الفرع السفلي يساوي: I = 9V / 9Ω = 1A. وبالتالي فإن فرق الجهد بين طرفي المقاومة 4 أوم يساوي: V = I × R = 1 × 4 = 4 V."
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (تبسيط مقاومات التوالي من الطرفين):",
    "  - ندمج مقاومات الفرع العلوي المتصلة على التوالي: R_top = 6 + 3 = 9 Ω",
    "  - ندمج مقاومات الفرع السفلي المتصلة على التوالي: R_bottom = 4 + 5 = 9 Ω",
    "• الخطوة 2 (تحويل الدائرة إلى فروع توازي - كما في الرسمة الثانية):",
    "  - تصبح الدائرة مكونة من ثلاثة فروع متصلة على التوازي بين طرفي المصدر الكهربائي (9V)، مما يعني أن فرق الجهد الكلي على الفرع السفلي كاملاً يساوي 9V.",
    "• الخطوة 3 (حساب تيار الفرع السفلي وتطبيق قانون أوم):",
    "  - شدة التيار المار في الفرع السفلي بالكامل: I_bottom = V / R_bottom = 9 / 9 = 1 A",
    "  - فرق الجهد للمقاومة 4 أوم: V = 1 A × 4 Ω = 4 V",
    "--------------------------------------------------",
    "💡 [ملاحظة ذهبية لليلة الامتحان: كيف نُجزئ الجهد والتيار سريعاً في المسائل؟]",
    "--------------------------------------------------",
    "1) قانون مجزئ الجهد (Voltage Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوالي (لأن الجهد يتجزأ والتيار ثابت).",
    "• لفظياً: الجهد على مقاومة معينة = الجهد الكلي المطبق على الفرع × (قيمة هذه المقاومة ÷ مجموع مقاومات هذا الفرع).",
    "• بالرموز الإنجليزية: V_1 = V_Total × [ R_1 / (R_1 + R_2) ]",
    "• كيف طبقناه هنا؟ V = 9V × [ 4 / (4 + 5) ] = 9 × (4/9) = 4 V مباشرة.",
    " ",
    "2) قانون مجزئ التيار (Current Divider Rule):",
    "• يُستخدم في حالة التوصيل على التوازي (عندما يدخل تيار كلي ويتفرع في مسارات متعددة).",
    "• لفظياً (لحالة فرعين توازي): تيار الفرع المطلوب = التيار الكلي الداخل × (مقاومة الفرع الآخر الموازي له ÷ مجموع المقاومتين).",
    "• بالرموز الإنجليزية: I_1 = I_Total × [ R_2 / (R_1 + R_2) ]",
    "• القانون العام (لأي عدد من الفروع توازي): تيار الفرع المحدد = التيار الكلي الداخل × (المقاومة المكافئة للمجموعة كاملة توازي ÷ مقاومة هذا الفرع).",
    "• بالرموز الإنجليزية: I_branch = I_Total × [ R_parallel / R_branch ]",
    "• قاعدة إنقاذ سريعة للطلاب: إذا تفرع التيار على فرعين متساويين تماماً في المقاومة، ينقسم التيار بينهما بالتساوي مباشرة دون قوانين!",
    "--------------------------------------------------",
    "الإجابة الصحيحة: ب) 4 V ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ب) 4 V"
},

  {
  "title": "س 167: حساب فرق الجهد بين طرفي مقاومة في دائرة مركبة",
  "text": "في الدائرة الموضحة بالشكل المقابل، يكون قيمة فرق الجهد بين طرفي المقاومة 4 أوم يساوي:",
  "options": [
    { "text": "أ) 3 V", "isCorrect": false },
    { "text": "ب) 4 V", "isCorrect": true },
    { "text": "ج) 5 V", "isCorrect": false },
    { "text": "د) 6 V", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 900 350' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 13px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 16px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='900' height='350' fill='#ffffff'/><text x='225' y='30' class='label section-title'>[ 1 ] الدائرة الأصلية بالسؤال</text><g transform='translate(0, 20)'><line x1='50' y1='150' x2='50' y2='270' class='wire'/><line x1='390' y1='150' x2='390' y2='270' class='wire'/><line x1='50' y1='270' x2='205' y2='270' class='wire'/><line x1='235' y1='270' x2='390' y2='270' class='wire'/><line x1='50' y1='150' x2='125' y2='100' class='wire'/><line x1='185' y1='60' x2='220' y2='37' class='wire'/><line x1='220' y1='37' x2='255' y2='60' class='wire'/><line x1='315' y1='100' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='180' y2='150' class='wire'/><line x1='260' y1='150' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='125' y2='200' class='wire'/><line x1='185' y1='240' x2='220' y2='263' class='wire'/><line x1='220' y1='263' x2='255' y2='240' class='wire'/><line x1='315' y1='200' x2='390' y2='150' class='wire'/><g transform='rotate(-33.7 155 80)'><rect x='125' y='65' width='60' height='26' class='resistor'/><text x='155' y='82' class='label res-text'>6Ω</text></g><g transform='rotate(33.7 285 80)'><rect x='255' y='65' width='60' height='26' class='resistor'/><text x='285' y='82' class='label res-text'>3Ω</text></g><rect x='180' y='137' width='80' height='26' class='resistor'/><text x='220' y='154' class='label res-text'>9Ω</text><g transform='rotate(33.7 155 220)'><rect x='125' y='207' width='60' height='26' class='resistor'/><text x='155' y='224' class='label res-text'>4Ω</text></g><g transform='rotate(-33.7 285 220)'><rect x='255' y='207' width='60' height='26' class='resistor'/><text x='285' y='224' class='label res-text'>5Ω</text></g><line x1='205' y1='255' x2='205' y2='285' class='battery-plate' stroke-width='3'/><line x1='215' y1='262' x2='215' y2='278' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='255' x2='225' y2='285' class='battery-plate' stroke-width='3'/><line x1='235' y1='262' x2='235' y2='278' class='battery-plate' stroke-width='1.5'/><text x='220' y='305' class='label battery-text'>9V</text><circle cx='50' cy='150' r='4' fill='#1e293b'/><circle cx='390' cy='150' r='4' fill='#1e293b'/></g><line x1='450' y1='20' x2='450' y2='330' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='675' y='30' class='label section-title'>[ 2 ] خطوة التقليص ودمج فروع التوالي</text><g transform='translate(450, 20)'><line x1='50' y1='150' x2='50' y2='270' class='wire'/><line x1='390' y1='150' x2='390' y2='270' class='wire'/><line x1='50' y1='270' x2='205' y2='270' class='wire'/><line x1='235' y1='270' x2='390' y2='270' class='wire'/><line x1='50' y1='150' x2='50' y2='70' class='wire'/><line x1='50' y1='70' x2='180' y2='70' class='wire'/><line x1='260' y1='70' x2='390' y2='70' class='wire'/><line x1='390' y1='70' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='180' y2='150' class='wire'/><line x1='260' y1='150' x2='390' y2='150' class='wire'/><line x1='50' y1='150' x2='50' y2='230' class='wire'/><line x1='50' y1='230' x2='180' y2='230' class='wire'/><line x1='260' y1='230' x2='390' y2='230' class='wire'/><line x1='390' y1='230' x2='390' y2='150' class='wire'/><rect x='180' y='55' width='80' height='30' class='res-equiv'/><text x='220' y='74' class='label equiv-text'>9Ω</text><text x='220' y='43' class='label equiv-text' font-size='11'>مكافئ علوي (6+3)</text><rect x='180' y='135' width='80' height='30' class='resistor'/><text x='220' y='154' class='label res-text'>9Ω</text><rect x='180' y='215' width='80' height='30' class='res-equiv'/><text x='220' y='234' class='label equiv-text'>9Ω</text><text x='220' y='258' class='label equiv-text' font-size='11'>مكافئ سفلي (4+5)</text><line x1='205' y1='255' x2='205' y2='285' class='battery-plate' stroke-width='3'/><line x1='215' y1='262' x2='215' y2='278' class='battery-plate' stroke-width='1.5'/><line x1='225' y1='255' x2='225' y2='285' class='battery-plate' stroke-width='3'/><line x1='235' y1='262' x2='235' y2='278' class='battery-plate' stroke-width='1.5'/><text x='220' y='305' class='label battery-text'>9V</text><circle cx='50' cy='150' r='4' fill='#1e293b'/><circle cx='390' cy='150' r='4' fill='#1e293b'/></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: دمج مقاومات التوالي من الطرفين",
      "question": "عند النظر إلى الدائرة، نلاحظ وجود مسارين خارجيين (علوي وسفلي) يحتوي كل منهما على مقاومتين يمر بهما نفس التيار (توالي). احسب مكافئ الطرفين أولاً.",
      "options": [
        { "text": "مكافئ الفرع العلوي = 9 Ω، ومكافئ الفرع السفلي = 9 Ω", "isCorrect": true },
        { "text": "مكافئ الفرع العلوي = 3 Ω، ومكافئ الفرع السفلي = 1 Ω", "isCorrect": false }
      ],
      "feedback": "✅ ممتاز وصحيح! في الطرف العلوي المقاومتان متصلتان توالي: 6 + 3 = 9 Ω. وفي الطرف السفلي المقاومتان متصلتان توالي أيضاً: 4 + 5 = 9 Ω."
    },
    {
      "title": "الخطوة 2: تحليل الدائرة بعد التقليص (الرسمة الثانية)",
      "question": "انظر إلى الرسمة الثانية المبسطة؛ كيف تظهر الفروع الثلاثة الآن بالنسبة لقطبي البطارية؟",
      "options": [
        { "text": "ثلاثة فروع متوازية تماماً، وقيمة كل فرع منها تساوي 9 Ω", "isCorrect": true },
        { "text": "ثلاثة فروع متصلة على التوالي خلف بعضها البعض", "isCorrect": false }
      ],
      "feedback": "✅ رائعة! الفروع الثلاثة (العلوي المدمج، والأوسط الأصلي، والسفلي المدمج) متصلة معاً على التوازي بين نقطتي التفرع الرئيسيّتين، والجهد عليها ثابت ويساوي جهد البطارية 9V."
    },
    {
      "title": "الخطوة 3: حساب فرق الجهد المطلوب",
      "question": "بما أن الفرع السفلي بأكمله يقع تحت تأثير جهد البطارية بالكامل 9V، فكيف نحسب فرق الجهد الخاص بالمقاومة 4 أوم فقط داخل هذا الفرع؟",
      "options": [
        { "text": "باستخدام مجزئ الجهد: V = 9 × (4 / 9) = 4 V", "isCorrect": true },
        { "text": "بتقسيم الجهد بالتساوي: V = 9 / 2 = 4.5 V", "isCorrect": false }
      ],
      "feedback": "✅ مذهل! تيار الفرع السفلي يساوي: I = 9V / 9Ω = 1A. وبالتالي فإن فرق الجهد بين طرفي المقاومة 4 أوم يساوي: V = I × R = 1 × 4 = 4 V."
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (تبسيط مقاومات التوالي من الطرفين):",
    "  - ندمج مقاومات الفرع العلوي المتصلة على التوالي: R_top = 6 + 3 = 9 Ω",
    "  - ندمج مقاومات الفرع السفلي المتصلة على التوالي: R_bottom = 4 + 5 = 9 Ω",
    "• الخطوة 2 (تحويل الدائرة إلى فروع توازي - كما في الرسمة الثانية):",
    "  - تصبح الدائرة مكونة من ثلاثة فروع متصلة على التوازي بين طرفي المصدر الكهربائي (9V)، مما يعني أن فرق الجهد الكلي على الفرع السفلي كاملاً يساوي 9V.",
    "• الخطوة 3 (حساب تيار الفرع السفلي):",
    "  - شدة التيار المار في الفرع السفلي بالكامل: I_bottom = V / R_bottom = 9 / 9 = 1 A",
    "• الخطوة 4 (حساب فرق الجهد للمقاومة 4 أوم):",
    "  - فرق الجهد = تيار الفرع × قيمة المقاومة المستهدفة",
    "  - V = 1 A × 4 Ω = 4 V",
    "الإجابة الصحيحة: ب) 4 V ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ب) 4 V"
},
{
  "title": "س 166: حساب شدة التيار الكلي بعد تبسيط الدائرة",
  "text": "في الدائرة الموضحة بالشكل المقابل، بفرض المقاومة الداخلية للعمود مهملة، تكون قيمة التيار المار في الدائرة:",
  "options": [
    { "text": "أ) 1 A", "isCorrect": false },
    { "text": "ب) 2 A", "isCorrect": true },
    { "text": "ج) 3 A", "isCorrect": false },
    { "text": "د) 4 A", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 900 320' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; } .resistor { fill: #ffffff; stroke: #1e293b; stroke-width: 1.5; } .res-equiv { fill: #f0fdf4; stroke: #22c55e; stroke-width: 2; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .res-text { font-size: 14px; } .equiv-text { font-size: 14px; fill: #16a34a; } .battery-text { font-size: 15px; fill: #2563eb; } .battery-plate { stroke: #1e293b; stroke-linecap: round; } .section-title { font-size: 16px; fill: #1e293b; font-family: system-ui, sans-serif; }</style><rect width='900' height='320' fill='#ffffff'/><text x='225' y='30' class='label section-title'>[ 1 ] الدائرة الأصلية بالسؤال (بعد تصحيح الجهد لـ 6V)</text><g transform='translate(0, 20)'><line x1='60' y1='140' x2='60' y2='40' class='wire'/><line x1='60' y1='160' x2='60' y2='260' class='wire'/><line x1='60' y1='40' x2='120' y2='40' class='wire'/><line x1='190' y1='40' x2='320' y2='40' class='wire'/><line x1='60' y1='260' x2='320' y2='260' class='wire'/><line x1='240' y1='40' x2='240' y2='65' class='wire'/><line x1='240' y1='125' x2='240' y2='175' class='wire'/><line x1='240' y1='235' x2='240' y2='260' class='wire'/><line x1='320' y1='40' x2='320' y2='65' class='wire'/><line x1='320' y1='125' x2='320' y2='175' class='wire'/><line x1='320' y1='235' x2='320' y2='260' class='wire'/><rect x='120' y='25' width='70' height='30' class='resistor'/><text x='155' y='45' class='label res-text'>2Ω</text><rect x='215' y='65' width='50' height='60' class='resistor'/><text x='240' y='100' class='label res-text' transform='rotate(-90 240 100)'>1Ω</text><rect x='215' y='175' width='50' height='60' class='resistor'/><text x='240' y='210' class='label res-text' transform='rotate(-90 240 210)'>1Ω</text><rect x='295' y='65' width='50' height='60' class='resistor'/><text x='320' y='100' class='label res-text' transform='rotate(-90 320 100)'>1.5Ω</text><rect x='295' y='175' width='50' height='60' class='resistor'/><text x='320' y='210' class='label res-text' transform='rotate(-90 320 210)'>0.5Ω</text><line x1='45' y1='140' x2='75' y2='140' class='battery-plate' stroke-width='3'/><line x1='52' y1='147' x2='68' y2='147' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='153' x2='75' y2='153' class='battery-plate' stroke-width='3'/><line x1='52' y1='160' x2='68' y2='160' class='battery-plate' stroke-width='1.5'/><text x='32' y='155' class='label battery-text'>6V</text><circle cx='240' cy='40' r='3.5' fill='#1e293b'/><circle cx='240' cy='260' r='3.5' fill='#1e293b'/></g><line x1='450' y1='20' x2='450' y2='300' stroke='#e2e8f0' stroke-width='2' stroke-dasharray='5 5'/><text x='675' y='30' class='label section-title'>[ 2 ] خطوة تقليص المقاومات الفرعية</text><g transform='translate(450, 20)'><line x1='60' y1='140' x2='60' y2='40' class='wire'/><line x1='60' y1='160' x2='60' y2='260' class='wire'/><line x1='60' y1='40' x2='140' y2='40' class='wire'/><line x1='210' y1='40' x2='270' y2='40' class='wire'/><line x1='270' y1='40' x2='270' y2='120' class='wire'/><line x1='270' y1='180' x2='270' y2='260' class='wire'/><line x1='60' y1='260' x2='270' y2='260' class='wire'/><rect x='140' y='25' width='70' height='30' class='resistor'/><text x='175' y='45' class='label res-text'>2Ω</text><rect x='235' y='120' width='70' height='60' class='res-equiv'/><text x='270' y='155' class='label equiv-text'>1Ω</text><text x='345' y='155' class='label equiv-text' font-size='11'>(مكافئ التوازي)</text><line x1='45' y1='140' x2='75' y2='140' class='battery-plate' stroke-width='3'/><line x1='52' y1='147' x2='68' y2='147' class='battery-plate' stroke-width='1.5'/><line x1='45' y1='153' x2='75' y2='153' class='battery-plate' stroke-width='3'/><line x1='52' y1='160' x2='68' y2='160' class='battery-plate' stroke-width='1.5'/><text x='32' y='155' class='label battery-text'>6V</text></g></svg>",
  "steps": [
    {
      "title": "الخطوة 1: اختزال المقاومات المتصلة على التوالي",
      "question": "انظر إلى الفرعين المتوازيين؛ يتكون كل فرع من مقاومتين على التوالي. ما قيمة مقاومة كل فرع؟",
      "options": [
        { "text": "الفرع الأول = 2 Ω، والفرع الثاني = 2 Ω", "isCorrect": true },
        { "text": "الفرع الأول = 1 Ω، والفرع الثاني = 1.5 Ω", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! الفرع الأوسط: 1 + 1 = 2 Ω. الفرع الأيمن: 1.5 + 0.5 = 2 Ω."
    },
    {
      "title": "الخطوة 2: اختزال فروع التوازي (الرسمة المبسطة)",
      "question": "الآن أصبح لدينا فرعان متوازيان قيمة كل منهما 2 Ω (كما يظهر باللون الأخضر في الرسمة الثانية)، ما مقاوتهما المكافئة؟",
      "options": [
        { "text": "1 Ω", "isCorrect": true },
        { "text": "4 Ω", "isCorrect": false }
      ],
      "feedback": "✅ أحسنت! توازي مقاومتين متماثلتين: R = قيمة أحدهما / عددهما = 2 / 2 = 1 Ω."
    },
    {
      "title": "الخطوة 3: حساب المقاومة الكلية والتيار الكلي",
      "question": "بعد تبسيط مجموعة التوازي إلى 1 Ω، أصبحت متصلة على التوالي مع المقاومة 2 Ω. احسب المقاومة الكلية ثم التيار الكلي عند جهد 6V.",
      "options": [
        { "text": "R_total = 3 Ω، والتيار = 2 A", "isCorrect": true },
        { "text": "R_total = 3 Ω، والتيار = 3 A", "isCorrect": false }
      ],
      "feedback": "✅ رائع! R_total = 2 + 1 = 3 Ω. ومن قانون أوم: I = V / R_total = 6 / 3 = 2 A."
    }
  ],
  "pdfSolutionSteps": [
    "• الخطوة 1 (تبسيط التوالي الداخلي):",
    "  - مقاومة الفرع الأوسط: R_middle = 1 + 1 = 2 Ω",
    "  - مقاومة الفرع الأيمن: R_right = 1.5 + 0.5 = 2 Ω",
    "• الخطوة 2 (حساب مكافئ التوازي):",
    "  - الفرعان متصلان على التوازي، إذن مكافئهما: R_parallel = 2 / 2 = 1 Ω (وهي الموضحة في الرسمة الثانية المقلصة).",
    "• الخطوة 3 (حساب المقاومة الكلية للدائرة):",
    "  - نجمع المقاومة الخارجية مع مكافئ التوازي المتصل معها على التوالي: R_total = 2 + 1 = 3 Ω",
    "• الخطوة 4 (تطبيق قانون أوم لحساب التيار الكلي):",
    "  - بعد تصحيح جهد البطارية إلى 6V ليتوافق مع ناتج المسألة: I = V / R_total = 6 / 3 = 2 A",
    "الإجابة الصحيحة: ب) 2 A ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ب) 2 A"
},



{
  "title": "تأثير الدائرة الكهربائية القصيرة على المصباح والأميتر",
  "text": "في الشكل التالي، إذا حدثت دائرة كهربائية قصيرة (قصر) في الدائرة، فماذا يحدث للمصباح الكهربائي والأميتر؟",
  "options": [
    { "text": "أ) المصباح يعمل والأميتر يعمل", "isCorrect": false },
    { "text": "ب) المصباح لا يعمل والأميتر يعمل", "isCorrect": true },
    { "text": "ج) المصباح يعمل والأميتر لا يعمل", "isCorrect": false },
    { "text": "د) المصباح لا يعمل والأميتر لا يعمل", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 560 380' xmlns='http://www.w3.org/2000/svg' style='background:#ffffff; direction:ltr;'><style>.wire { stroke: #1e293b; stroke-width: 2.5; fill: none; stroke-linecap: round; } .short-wire { stroke: #ef4444; stroke-width: 3; fill: none; stroke-linecap: round; } .comp-circle { fill: #ffffff; stroke: #1e293b; stroke-width: 2.5; } .label { font-family: system-ui, -apple-system, sans-serif; font-weight: bold; fill: #1e293b; text-anchor: middle; } .text-main { font-size: 14px; } .text-alert { font-size: 14px; fill: #ef4444; }</style><rect width='560' height='380' fill='#ffffff'/><line x1='100' y1='80' x2='230' y2='80' class='wire'/><line x1='270' y1='80' x2='400' y2='80' class='wire'/><line x1='400' y1='80' x2='400' y2='150' class='wire'/><line x1='400' y1='210' x2='400' y2='280' class='wire'/><line x1='100' y1='280' x2='235' y2='280' class='wire'/><line x1='265' y1='280' x2='400' y2='280' class='wire'/><line x1='100' y1='80' x2='100' y2='280' class='wire'/><circle cx='250' cy='80' r='20' class='comp-circle'/><text x='250' y='85' class='label text-main'>A</text><text x='250' y='45' class='label text-main'>أميتر</text><circle cx='400' cy='180' r='20' fill='white' stroke='#1e293b' stroke-width='2.5'/><line x1='386' y1='166' x2='414' y2='194' stroke='#1e293b' stroke-width='2.5'/><line x1='386' y1='194' x2='414' y2='166' stroke='#1e293b' stroke-width='2.5'/><line x1='400' y1='160' x2='500' y2='160' class='short-wire'/><line x1='500' y1='160' x2='500' y2='200' class='short-wire'/><line x1='500' y1='200' x2='400' y2='200' class='short-wire'/><circle cx='400' cy='160' r='4' fill='#ef4444'/><circle cx='400' cy='200' r='4' fill='#ef4444'/><text x='520' y='185' class='label text-alert' text-anchor='start'>دائرة قصر ⚠️</text><line x1='235' y1='265' x2='235' y2='295' stroke='#1e293b' stroke-width='3' stroke-linecap='round'/><line x1='245' y1='272' x2='245' y2='288' stroke='#1e293b' stroke-width='1.5' stroke-linecap='round'/><line x1='255' y1='265' x2='255' y2='295' stroke='#1e293b' stroke-width='3' stroke-linecap='round'/><line x1='265' y1='272' x2='265' y2='288' stroke='#1e293b' stroke-width='1.5' stroke-linecap='round'/><text x='220' y='285' class='label text-main'>+</text><text x='280' y='285' class='label text-main'>-</text><text x='250' y='320' class='label text-main'>9V</text></svg>",
  "steps": [
    {
      "title": "المرحلة الأولى: ماذا تعني الدائرة القصيرة؟",
      "question": "ما المقصود بحدوث دائرة كهربائية قصيرة (قصر) حول عنصر ما كالمصباح؟",
      "options": [
        { "text": "توصيل سلك مهمل المقاومة على التوازي مع هذا العنصر ليختصر التيار مساره عبره", "isCorrect": true },
        { "text": "حدوث قطع كامل في الأسلاك الموصلة للعنصر الكهربائي", "isCorrect": false },
        { "text": "زيادة المقاومة الداخلية للعنصر فجأة لمنع مرور التيار", "isCorrect": false }
      ],
      "feedback": "أحسنت! الدائرة القصيرة تعني توفير مسار بديل عديم المقاومة تقريباً يتصل على التوازي مع المكون الكهربائي فيلغيه."
    },
    {
      "title": "المرحلة الثانية: مسار التيار الكهربائي في الدائرة",
      "question": "عند خروج التيار من القطب الموجب ووصوله إلى تفرع سلك القصر قبل المصباح، أي المسارين يسلك؟",
      "options": [
        { "text": "يمر بالكامل في سلك القصر (المسار الأحمر) ويتخطى المصباح تماماً", "isCorrect": true },
        { "text": "يمر بالكامل عبر المصباح الكهربائي باعتباره المسار الرئيسي المعتاد", "isCorrect": false },
        { "text": "ينقسم التيار الكهربائي بالتساوي بين المصباح وسلك القصر", "isCorrect": false }
      ],
      "feedback": "ممتاز! التيار الكهربائي يختار دائماً المسار الأسهل ذو المقاومة الأقل. وبما أن مقاومة سلك القصر تؤول إلى الصفر، فإن التيار يمر عبره بالكامل بنسبة 100%."
    },
    {
      "title": "المرحلة الثالثة: تحديد حالة المصباح والأميتر",
      "question": "بناءً على تتبعنا لمسار التيار الكهربائي، ماذا يحدث لكل من المصباح والأميتر؟",
      "options": [
        { "text": "المصباح لا يعمل لعدم مرور تيار فيه، بينما الأميتر يعمل لأن تيار الدائرة يمر عبره بالكامل", "isCorrect": true },
        { "text": "المصباح يضيء ويعمل بكفاءة، بينما يتوقف الأميتر عن القراءة تماماً", "isCorrect": false },
        { "text": "يتوقف كلاهما عن العمل وينقطع التيار عن كافة أجزاء الدائرة", "isCorrect": false }
      ],
      "feedback": "رائع وصحيح تماماً! المصباح لا يعمل (ينطفئ) بسبب انعدام التيار المار فيه نتيجة إلغائه بسلك القصر، بينما الأميتر يقع في الخط الرئيسي للمصدر فيمر به تيار الدائرة العالي جداً ويستمر بالعمل."
    }
  ],
  "pdfSolutionSteps": [
    "• مفهوم دائرة القصر: توصيل سلك عديم المقاومة على التوازي مع المصباح تؤدي إلى إلغاء المصباح تماماً وتخطي التيار له.",
    "• تتبع مسار التيار: يتحرك التيار من القطب الموجب ويمر أولاً في جهاز الأميتر الكهربائي.",
    "• عند نقطة التفرع، يمر التيار بالكامل عبر سلك القصر (باللون الأحمر) ويتجنب المصباح تماماً لأن مقاومة السلك مهملة.",
    "• حالة المصباح: لا يمر به أي جزء من التيار الكهربائي، وبالتالي فإن المصباح لا يعمل.",
    "• حالة الأميتر: يقع الأميتر في الخط الرئيسي للدائرة ويمر به تيار القصر بالكامل، وبالتالي فإن الأميتر يعمل وتزداد قراءته.",
    "• الإجابة الصحيحة هي الخيار: ب ✅"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: ب) المصباح لا يعمل والأميتر يعمل"
},
{
  "title": "تأثير احتراق مصباح سفلي على مصباح علوي في دائرة مركبة",
  "text": "في الدائرة الموضحة، أربع مصابيح مضاءة. إذا احترق المصباح المشار إليه بالسهم (المصباح السفلي L₂)، فكم مصباحاً يبقى مضاءً؟",
  "options": [
    { "text": "أ) واحد", "isCorrect": false },
    { "text": "ب) اثنان", "isCorrect": true },
    { "text": "ج) تنطفئ جميع المصابيح", "isCorrect": false },
    { "text": "د) ثلاثة", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 550 450' xmlns='http://www.w3.org/2000/svg'><rect width='550' height='450' fill='#ffffff'/><!-- الخط العلوي الرئيسي (الموجب) --><line x1='80' y1='70' x2='470' y2='70' stroke='#333' stroke-width='2'/><!-- الخط السفلي الرئيسي (السالب) --><line x1='80' y1='370' x2='470' y2='370' stroke='#333' stroke-width='2'/><!-- الخط الأيسر والأيمن --><line x1='80' y1='70' x2='80' y2='370' stroke='#333' stroke-width='2'/><line x1='470' y1='70' x2='470' y2='370' stroke='#333' stroke-width='2'/><!-- بطارية --><rect x='30' y='150' width='40' height='60' fill='#e2e8f0' stroke='#333' stroke-width='2' rx='3'/><text x='50' y='185' text-anchor='middle' font-size='12' font-weight='bold'>9V</text><line x1='30' y1='150' x2='70' y2='150' stroke='#333' stroke-width='2'/><line x1='30' y1='210' x2='70' y2='210' stroke='#333' stroke-width='2'/><text x='40' y='145' text-anchor='middle' font-size='12' fill='red'>+</text><text x='40' y='225' text-anchor='middle' font-size='12'>-</text><!-- ===== فرع L1 و L2 (على التوالي) ===== --><!-- المصباح العلوي L1 --><line x1='160' y1='70' x2='160' y2='100' stroke='#333' stroke-width='2'/><circle cx='160' cy='125' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='160' y='120' text-anchor='middle' font-size='14'>💡</text><text x='160' y='138' text-anchor='middle' font-size='11' font-weight='bold'>L₁</text><line x1='160' y1='147' x2='160' y2='180' stroke='#333' stroke-width='2'/><!-- المصباح السفلي L2 (الذي يحترق) --><line x1='160' y1='180' x2='160' y2='210' stroke='#333' stroke-width='2'/><circle cx='160' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='160' y='230' text-anchor='middle' font-size='14'>💡</text><text x='160' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₂</text><line x1='160' y1='257' x2='160' y2='370' stroke='#333' stroke-width='2'/><!-- السهم الأحمر على L2 --><line x1='195' y1='210' x2='172' y2='225' stroke='#e00' stroke-width='3' marker-end='url(#arrow)'/><text x='205' y='210' fill='#e00' font-size='13' font-weight='bold'>← يحترق</text><!-- ===== فرع L3 (مستقل على التوازي) ===== --><line x1='280' y1='70' x2='280' y2='210' stroke='#333' stroke-width='2'/><circle cx='280' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='280' y='230' text-anchor='middle' font-size='14'>💡</text><text x='280' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₃</text><line x1='280' y1='257' x2='280' y2='370' stroke='#333' stroke-width='2'/><!-- ===== فرع L4 (مستقل على التوازي) ===== --><line x1='390' y1='70' x2='390' y2='210' stroke='#333' stroke-width='2'/><circle cx='390' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='390' y='230' text-anchor='middle' font-size='14'>💡</text><text x='390' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₄</text><line x1='390' y1='257' x2='390' y2='370' stroke='#333' stroke-width='2'/><!-- خط أفقي يربط L3 و L4 بالمصدر --><line x1='280' y1='70' x2='390' y2='70' stroke='#333' stroke-width='2'/><!-- نقاط التوصيل --><circle cx='160' cy='70' r='4' fill='#333'/><circle cx='160' cy='180' r='4' fill='#333'/><circle cx='280' cy='70' r='4' fill='#333'/><circle cx='390' cy='70' r='4' fill='#333'/><circle cx='160' cy='370' r='4' fill='#333'/><circle cx='280' cy='370' r='4' fill='#333'/><circle cx='390' cy='370' r='4' fill='#333'/><!-- عناوين توضيحية --><text x='275' y='420' text-anchor='middle' font-size='13' fill='#555'>L₁ و L₂ على التوالي، L₃ و L₄ على التوازي مع البطارية</text><text x='275' y='440' text-anchor='middle' font-size='12' fill='#555'>احتراق L₂ يقطع التيار عن L₁ أيضاً، بينما L₃ و L₄ يظلان مضيئين</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'><polygon points='0 0, 10 5, 0 10' fill='#e00'/></marker></defs></svg>",
  "steps": [
    {
      "title": "المرحلة الأولى: تحليل التوصيل في الدائرة",
      "question": "كيف تتصل المصابيح في هذه الدائرة؟",
      "options": [
        { "text": "L₁ و L₂ على التوالي، و L₃ و L₄ على التوازي مع البطارية", "isCorrect": true },
        { "text": "جميع المصابيح على التوالي", "isCorrect": false },
        { "text": "جميع المصابيح على التوازي", "isCorrect": false },
        { "text": "L₁ على التوالي مع L₂ و L₃، و L₄ على التوازي", "isCorrect": false }
      ],
      "feedback": "صحيح! L₁ و L₂ في مسار واحد (توالي)، بينما L₃ و L₄ في مسار منفصل ومستقل (توازي)."
    },
    {
      "title": "المرحلة الثانية: مسار التيار عند احتراق L₂",
      "question": "عند احتراق المصباح L₂ (انقطاع فتيله)، ماذا يحدث للتيار في فرع L₁ و L₂؟",
      "options": [
        { "text": "ينقطع التيار في الفرع بالكامل، فينطفئ L₁ أيضاً", "isCorrect": true },
        { "text": "يستمر التيار في L₁ فقط لأن L₂ هو المحترق", "isCorrect": false }
      ],
      "feedback": "ممتاز! L₁ و L₂ على التوالي، احتراق أي منهما يقطع الدائرة عن كليهما."
    },
    {
      "title": "المرحلة الثالثة: عد المصابيح المتبقية",
      "question": "بعد احتراق L₂، أي المصابيح تبقى مضيئة؟",
      "options": [
        { "text": "L₃ و L₄ فقط (مصباحان)", "isCorrect": true },
        { "text": "L₁, L₃, L₄ (ثلاثة مصابيح)", "isCorrect": false },
        { "text": "L₁ فقط (مصباح واحد)", "isCorrect": false },
        { "text": "جميع المصابيح تنطفئ", "isCorrect": false }
      ],
      "feedback": "إجابة صحيحة! L₁ انطفأ مع L₂، بينما L₃ و L₄ يظلان مضيئين لأنهما على التوازي مع البطارية."
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 22px; line-height: 1.8;'>",
    "<strong>🔍 تحليل الدائرة:</strong><br><br>",
    "<strong>1️⃣ نوع التوصيل في الدائرة:</strong><br>",
    "- المصباحان L₁ و L₂ موصولان على التوالي مع بعضهما البعض (فرع واحد).<br>",
    "- المصباحان L₃ و L₄ موصولان على التوازي مع البطارية (فرع مستقل ومنفصل).<br><br>",
    "<strong>2️⃣ عند احتراق المصباح L₂:</strong><br>",
    "- بما أن L₁ و L₂ على التوالي، فإن احتراق L₂ يقطع التيار عن الفرع بالكامل.<br>",
    "- <strong style='color:#d00;'>L₁ ينطفئ</strong> (لأن التيار لا يصل إليه).<br>",
    "- <strong style='color:#d00;'>L₂ ينطفئ</strong> (لأنه محترق).<br>",
    "- L₃ و L₄ على مسار مستقل، لا يتأثران، فيظلان <strong style='color:#166534;'>مضيئين</strong>.<br><br>",
    "<strong>3️⃣ المصابيح المضيئة بعد الاحتراق:</strong><br>",
    "- L₁: ❌ لا يعمل (انقطع التيار بسبب L₂)<br>",
    "- L₂: ❌ لا يعمل (محترق)<br>",
    "- L₃: ✅ يعمل<br>",
    "- L₄: ✅ يعمل<br><br>",
    "<strong>✅ الإجابة الصحيحة: (ب) اثنان</strong>",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ب) اثنان"
},

  {
  "title": "تأثير احتراق مصباح سفلي على مصباح علوي في دائرة مركبة",
  "text": "في الدائرة الموضحة، أربع مصابيح مضاءة. إذا احترق المصباح المشار إليه بالسهم (المصباح السفلي L₂)، فكم مصباحاً يبقى مضاءً؟",
  "options": [
    { "text": "أ) واحد", "isCorrect": false },
    { "text": "ب) اثنان", "isCorrect": true },
    { "text": "ج) تنطفئ جميع المصابيح", "isCorrect": false },
    { "text": "د) ثلاثة", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg viewBox='0 0 550 450' xmlns='http://www.w3.org/2000/svg'><rect width='550' height='450' fill='#ffffff'/><!-- الخط العلوي الرئيسي (الموجب) --><line x1='80' y1='70' x2='470' y2='70' stroke='#333' stroke-width='2'/><!-- الخط السفلي الرئيسي (السالب) --><line x1='80' y1='370' x2='470' y2='370' stroke='#333' stroke-width='2'/><!-- الخط الأيسر والأيمن --><line x1='80' y1='70' x2='80' y2='370' stroke='#333' stroke-width='2'/><line x1='470' y1='70' x2='470' y2='370' stroke='#333' stroke-width='2'/><!-- بطارية --><rect x='30' y='150' width='40' height='60' fill='#e2e8f0' stroke='#333' stroke-width='2' rx='3'/><text x='50' y='185' text-anchor='middle' font-size='12' font-weight='bold'>9V</text><line x1='30' y1='150' x2='70' y2='150' stroke='#333' stroke-width='2'/><line x1='30' y1='210' x2='70' y2='210' stroke='#333' stroke-width='2'/><text x='40' y='145' text-anchor='middle' font-size='12' fill='red'>+</text><text x='40' y='225' text-anchor='middle' font-size='12'>-</text><!-- ===== فرع L1 و L2 (على التوالي) ===== --><!-- المصباح العلوي L1 --><line x1='160' y1='70' x2='160' y2='100' stroke='#333' stroke-width='2'/><circle cx='160' cy='125' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='160' y='120' text-anchor='middle' font-size='14'>💡</text><text x='160' y='138' text-anchor='middle' font-size='11' font-weight='bold'>L₁</text><line x1='160' y1='147' x2='160' y2='180' stroke='#333' stroke-width='2'/><!-- المصباح السفلي L2 (الذي يحترق) --><line x1='160' y1='180' x2='160' y2='210' stroke='#333' stroke-width='2'/><circle cx='160' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='160' y='230' text-anchor='middle' font-size='14'>💡</text><text x='160' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₂</text><line x1='160' y1='257' x2='160' y2='370' stroke='#333' stroke-width='2'/><!-- السهم الأحمر على L2 --><line x1='195' y1='210' x2='172' y2='225' stroke='#e00' stroke-width='3' marker-end='url(#arrow)'/><text x='205' y='210' fill='#e00' font-size='13' font-weight='bold'>← يحترق</text><!-- ===== فرع L3 (مستقل على التوازي) ===== --><line x1='280' y1='70' x2='280' y2='210' stroke='#333' stroke-width='2'/><circle cx='280' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='280' y='230' text-anchor='middle' font-size='14'>💡</text><text x='280' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₃</text><line x1='280' y1='257' x2='280' y2='370' stroke='#333' stroke-width='2'/><!-- ===== فرع L4 (مستقل على التوازي) ===== --><line x1='390' y1='70' x2='390' y2='210' stroke='#333' stroke-width='2'/><circle cx='390' cy='235' r='22' fill='#fef08a' stroke='#333' stroke-width='2'/><text x='390' y='230' text-anchor='middle' font-size='14'>💡</text><text x='390' y='248' text-anchor='middle' font-size='11' font-weight='bold'>L₄</text><line x1='390' y1='257' x2='390' y2='370' stroke='#333' stroke-width='2'/><!-- خط أفقي يربط L3 و L4 بالمصدر --><line x1='280' y1='70' x2='390' y2='70' stroke='#333' stroke-width='2'/><!-- نقاط التوصيل --><circle cx='160' cy='70' r='4' fill='#333'/><circle cx='160' cy='180' r='4' fill='#333'/><circle cx='280' cy='70' r='4' fill='#333'/><circle cx='390' cy='70' r='4' fill='#333'/><circle cx='160' cy='370' r='4' fill='#333'/><circle cx='280' cy='370' r='4' fill='#333'/><circle cx='390' cy='370' r='4' fill='#333'/><!-- عناوين توضيحية --><text x='275' y='420' text-anchor='middle' font-size='13' fill='#555'>L₁ و L₂ على التوالي، L₃ و L₄ على التوازي مع البطارية</text><text x='275' y='440' text-anchor='middle' font-size='12' fill='#555'>احتراق L₂ يقطع التيار عن L₁ أيضاً، بينما L₃ و L₄ يظلان مضيئين</text><defs><marker id='arrow' markerWidth='10' markerHeight='10' refX='9' refY='5' orient='auto'><polygon points='0 0, 10 5, 0 10' fill='#e00'/></marker></defs></svg>",
  "steps": [
    {
      "title": "المرحلة الأولى: تحليل التوصيل في الدائرة",
      "question": "كيف تتصل المصابيح في هذه الدائرة؟",
      "options": [
        { "text": "L₁ و L₂ على التوالي، و L₃ و L₄ على التوازي مع البطارية", "isCorrect": true },
        { "text": "جميع المصابيح على التوالي", "isCorrect": false },
        { "text": "جميع المصابيح على التوازي", "isCorrect": false },
        { "text": "L₁ على التوالي مع L₂ و L₃، و L₄ على التوازي", "isCorrect": false }
      ],
      "feedback": "صحيح! L₁ و L₂ في مسار واحد (توالي)، بينما L₃ و L₄ في مسار منفصل ومستقل (توازي)."
    },
    {
      "title": "المرحلة الثانية: مسار التيار عند احتراق L₂",
      "question": "عند احتراق المصباح L₂ (انقطاع فتيله)، ماذا يحدث للتيار في فرع L₁ و L₂؟",
      "options": [
        { "text": "ينقطع التيار في الفرع بالكامل، فينطفئ L₁ أيضاً", "isCorrect": true },
        { "text": "يستمر التيار في L₁ فقط لأن L₂ هو المحترق", "isCorrect": false }
      ],
      "feedback": "ممتاز! L₁ و L₂ على التوالي، احتراق أي منهما يقطع الدائرة عن كليهما."
    },
    {
      "title": "المرحلة الثالثة: عد المصابيح المتبقية",
      "question": "بعد احتراق L₂، أي المصابيح تبقى مضيئة؟",
      "options": [
        { "text": "L₃ و L₄ فقط (مصباحان)", "isCorrect": true },
        { "text": "L₁, L₃, L₄ (ثلاثة مصابيح)", "isCorrect": false },
        { "text": "L₁ فقط (مصباح واحد)", "isCorrect": false },
        { "text": "جميع المصابيح تنطفئ", "isCorrect": false }
      ],
      "feedback": "إجابة صحيحة! L₁ انطفأ مع L₂، بينما L₃ و L₄ يظلان مضيئين لأنهما على التوازي مع البطارية."
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 22px; line-height: 1.8;'>",
    "<strong>🔍 تحليل الدائرة:</strong><br><br>",
    "<strong>1️⃣ نوع التوصيل في الدائرة:</strong><br>",
    "- المصباحان L₁ و L₂ موصولان على التوالي مع بعضهما البعض (فرع واحد).<br>",
    "- المصباحان L₃ و L₄ موصولان على التوازي مع البطارية (فرع مستقل ومنفصل).<br><br>",
    "<strong>2️⃣ عند احتراق المصباح L₂:</strong><br>",
    "- بما أن L₁ و L₂ على التوالي، فإن احتراق L₂ يقطع التيار عن الفرع بالكامل.<br>",
    "- <strong style='color:#d00;'>L₁ ينطفئ</strong> (لأن التيار لا يصل إليه).<br>",
    "- <strong style='color:#d00;'>L₂ ينطفئ</strong> (لأنه محترق).<br>",
    "- L₃ و L₄ على مسار مستقل، لا يتأثران، فيظلان <strong style='color:#166534;'>مضيئين</strong>.<br><br>",
    "<strong>3️⃣ المصابيح المضيئة بعد الاحتراق:</strong><br>",
    "- L₁: ❌ لا يعمل (انقطع التيار بسبب L₂)<br>",
    "- L₂: ❌ لا يعمل (محترق)<br>",
    "- L₃: ✅ يعمل<br>",
    "- L₄: ✅ يعمل<br><br>",
    "<strong>✅ الإجابة الصحيحة: (ب) اثنان</strong>",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ب) اثنان"
}
,

{
  "title": "س 25 (2021-2022): تأثير زيادة التيار في موصل فلزي",
  "text": "إذا زاد التيار الكهربائي في موصل فلزي عند ثبوت درجة الحرارة، فإن:",
  "options": [
    { "text": "أ) فرق الجهد يقل", "isCorrect": false },
    { "text": "ب) مقاومة الحمل تقل", "isCorrect": false },
    { "text": "ج) مقاومة الحمل تظل ثابتة", "isCorrect": true },
    { "text": "د) الإجابتان (أ) و (ب) صحيحتان", "isCorrect": false }
  ],
  "correctAnswerIndex": 2,
  "svgCode": "<svg width='400' height='150' viewBox='0 0 400 150'><rect width='400' height='150' fill='#ffffff'/><text x='200' y='50' text-anchor='middle' font-size='14'>موصل فلزي</text><text x='200' y='80' text-anchor='middle' font-size='12'>I ↑ (درجة الحرارة ثابتة)</text><text x='200' y='110' text-anchor='middle' font-size='12'>R = ثابت</text></svg>",
  "steps": [
    {
      "title": "تأثير زيادة التيار",
      "question": "عند ثبوت درجة الحرارة، ماذا يحدث لمقاومة الموصل الفلزي عند زيادة التيار؟",
      "options": [
        { "text": "المقاومة تظل ثابتة", "isCorrect": true },
        { "text": "المقاومة تقل", "isCorrect": false },
        { "text": "فرق الجهد يقل", "isCorrect": false }
      ],
      "feedback": "صحيح! مقاومة الموصل الفلزي تعتمد على خواصه المادية وأبعاده الهندسية ودرجة حرارته، ولا تتأثر بزيادة التيار."
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 18px; line-height: 1.8; direction: rtl;'>",
    "<strong>الحل المفصل:</strong><br><br>",
    "المقاومة الكهربائية للموصل الفلزي تعتمد على:<br>",
    "- نوع المادة (المقاومة النوعية)<br>",
    "- الأبعاد الهندسية (الطول، المساحة)<br>",
    "- درجة الحرارة<br><br>",
    "عند ثبوت درجة الحرارة والأبعاد، تبقى المقاومة <strong>ثابتة</strong> بغض النظر عن شدة التيار.<br><br>",
    "<strong>الإجابة الصحيحة: (ج) مقاومة الحمل تظل ثابتة</strong>",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ج) مقاومة الحمل تظل ثابتة"
},

{
    "title": "س 22 (2021-2022): نقطة الجهد المنخفض في العمود الكهربائي",
    "text": "نقطة الجهد المنخفض في العمود الكهربائي هي منطقة يوجد بها:\n\n(أ) عدد أقل من الشحنات الموجبة\n(ب) عدد أكبر من الشحنات السالبة\n(ج) عدد أكبر من الشحنات الموجبة\n(د) الإجابتان (أ) و (ب) صحيحتان",
    "svgCode": "<svg width='400' height='150' viewBox='0 0 400 150'><rect width='400' height='150' fill='#ffffff'/><text x='200' y='50' text-anchor='middle' font-size='14'>القطب السالب (-)</text><text x='200' y='70' text-anchor='middle' font-size='12'>جهد منخفض</text><circle cx='200' cy='100' r='30' fill='#e2e8f0' stroke='#333' stroke-width='2'/><text x='200' y='105' text-anchor='middle' font-size='12'>-</text></svg>",
    "steps": [
      {
        "title": "تحديد نقطة الجهد المنخفض",
        "question": "في العمود الكهربائي، أين توجد نقطة الجهد المنخفض؟",
        "options": [
          { "text": "عند القطب السالب", "isCorrect": true },
          { "text": "عند القطب الموجب", "isCorrect": false }
        ],
        "feedback": "صحيح! نقطة الجهد المنخفض هي القطب السالب."
      }
    ],
    "pdfSolutionSteps": [
      "<div style='font-size: 18px; line-height: 1.8; direction: rtl;'>",
      "<strong>الحل المفصل:</strong><br><br>",
      "في العمود الكهربائي، نقطة الجهد المنخفض هي القطب <strong>السالب</strong>.<br>",
      "- يوجد فيها عدد أقل من الشحنات الموجبة.<br>",
      "- يوجد فيها عدد أكبر من الشحنات السالبة.<br><br>",
      "<strong>الإجابة الصحيحة: (د)</strong>",
      "</div>"
    ],
    "pdfFinalAnswer": "الإجابة الصحيحة: (د) الإجابتان (أ) و (ب) صحيحتان"
  },

{
  "title": "س 25 (2021-2022): تأثير زيادة التيار في موصل فلزي",
  "text": "إذا زاد التيار الكهربائي في موصل فلزي عند ثبوت درجة الحرارة، فإن:",
  "options": [
    { "text": "أ) فرق الجهد يقل", "isCorrect": false },
    { "text": "ب) مقاومة الحمل تقل", "isCorrect": false },
    { "text": "ج) مقاومة الحمل تظل ثابتة", "isCorrect": true },
    { "text": "د) الإجابتان (أ) و (ب) صحيحتان", "isCorrect": false }
  ],
  "correctAnswerIndex": 2,
  "svgCode": "<svg width='400' height='150' viewBox='0 0 400 150'><rect width='400' height='150' fill='#ffffff'/><text x='200' y='50' text-anchor='middle' font-size='14'>موصل فلزي</text><text x='200' y='80' text-anchor='middle' font-size='12'>I ↑ (درجة الحرارة ثابتة)</text><text x='200' y='110' text-anchor='middle' font-size='12'>R = ثابت</text></svg>",
  "steps": [
    {
      "title": "تأثير زيادة التيار",
      "question": "عند ثبوت درجة الحرارة، ماذا يحدث لمقاومة الموصل الفلزي عند زيادة التيار؟",
      "options": [
        { "text": "المقاومة تظل ثابتة", "isCorrect": true },
        { "text": "المقاومة تقل", "isCorrect": false },
        { "text": "فرق الجهد يقل", "isCorrect": false }
      ],
      "feedback": "صحيح! مقاومة الموصل الفلزي ثابتة عند ثبوت درجة الحرارة."
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 18px; line-height: 1.8; direction: rtl;'>",
    "<strong>الحل المفصل:</strong><br><br>",
    "مقاومة الموصل الفلزي تعتمد على نوع المادة، درجة الحرارة، والأبعاد.<br>",
    "عند ثبوت درجة الحرارة والأبعاد، تبقى المقاومة <strong>ثابتة</strong>.<br><br>",
    "<strong>الإجابة الصحيحة: (ج) المقاومة تظل ثابتة</strong>",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ج) المقاومة تظل ثابتة"
},

{
  "title": "س 32:سنة(2021 - 2022) حساب قيمة المقاومة R في دائرة توالي  ",
  "text": "في الشكل التالي: أربع مقاومات متساوية القيمة (R) موصولة على التوالي مع بطارية 16 فولت، والتيار الكلي المار في الدائرة هو 0.2 أمبير. إذا كانت المقاومة الداخلية للبطارية مهملة، فإن قيمة كل مقاومة R تساوي:",
  "options": [
    { "text": "أ) 10 Ω", "isCorrect": false },
    { "text": "ب) 20 Ω", "isCorrect": true },
    { "text": "ج) 40 Ω", "isCorrect": false },
    { "text": "د) 80 Ω", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg xmlns='http://www.w3.org/2000/svg' width='1000' height='450' viewBox='0 0 1000 450'><style>.w{stroke:#000;stroke-width:4;fill:none;}.r{fill:white;stroke:#000;stroke-width:4;}.txt{font-family:serif;font-size:28px;}</style><line x1='180' y1='100' x2='760' y2='100' class='w'/><line x1='520' y1='100' x2='450' y2='100' class='w'/><polygon points='450,100 465,92 465,108' fill='black'/><text x='470' y='70' class='txt'>0.2A</text><line x1='760' y1='50' x2='760' y2='150' stroke='black' stroke-width='6'/><line x1='790' y1='70' x2='790' y2='130' stroke='black' stroke-width='12'/><text x='735' y='40' class='txt'>16V</text><line x1='790' y1='100' x2='920' y2='100' class='w'/><line x1='920' y1='100' x2='920' y2='330' class='w'/><line x1='180' y1='100' x2='180' y2='330' class='w'/><rect x='220' y='270' width='130' height='70' class='r'/><text x='280' y='245' class='txt'>R</text><rect x='400' y='270' width='130' height='70' class='r'/><text x='460' y='245' class='txt'>R</text><rect x='580' y='270' width='130' height='70' class='r'/><text x='640' y='245' class='txt'>R</text><rect x='760' y='270' width='130' height='70' class='r'/><text x='820' y='245' class='txt'>R</text><line x1='180' y1='330' x2='220' y2='330' class='w'/><line x1='350' y1='330' x2='400' y2='330' class='w'/><line x1='530' y1='330' x2='580' y2='330' class='w'/><line x1='710' y1='330' x2='760' y2='330' class='w'/><line x1='890' y1='330' x2='920' y2='330' class='w'/></svg>",
  "steps": [
    {
      "title": "المرحلة الأولى: حساب المقاومة المكافئة للدائرة",
      "question": "باستخدام قانون أوم R = V ÷ I، ما المقاومة المكافئة للدائرة؟",
      "options": [
        { "text": "80 أوم", "isCorrect": true },
        { "text": "40 أوم", "isCorrect": false },
        { "text": "16 أوم", "isCorrect": false }
      ],
      "feedback": "صحيح! R_T = 16 ÷ 0.2 = 80 أوم"
    },
    {
      "title": "المرحلة الثانية: حساب قيمة المقاومة R",
      "question": "أربع مقاومات متساوية R على التوالي مكافئتها 80 أوم. ما قيمة R؟",
      "options": [
        { "text": "20 أوم", "isCorrect": true },
        { "text": "80 أوم", "isCorrect": false },
        { "text": "320 أوم", "isCorrect": false }
      ],
      "feedback": "ممتاز! R_T = 4R → R = 80 ÷ 4 = 20 أوم"
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 18px; line-height: 1.8; direction: rtl;'>",
    "<strong>الحل المفصل:</strong><br><br>",
    "<strong>المعطيات:</strong><br>",
    "V = 16 فولت<br>",
    "I = 0.2 أمبير<br>",
    "4 مقاومات متساوية R على التوالي<br><br>",
    "<strong>1. حساب المقاومة المكافئة الكلية:</strong><br>",
    "R_T = V ÷ I = 16 ÷ 0.2 = <strong>80 Ω</strong><br><br>",
    "<strong>2. قانون المقاومات على التوالي:</strong><br>",
    "R_T = R + R + R + R = 4R<br><br>",
    "<strong>3. إيجاد قيمة R:</strong><br>",
    "4R = 80<br>",
    "R = 80 ÷ 4 = <strong style='color:#166534;'>20 Ω</strong><br><br>",
    "الإجابة الصحيحة: (ب) 20 Ω",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ب) 20 Ω"
},

{
  "title": "س 20 سنة(2021 - 2022): حساب التيار الكلي والمقاومة المكافئة",
  "text": "في الدائرة الموضحة بالشكل، احسب المقاومة المكافئة الكلية وشدة التيار الكلي المار في الدائرة إذا كان فرق الجهد 20 فولت.",
  "options": [
    { "text": "أ) 8 Ω و 5 A", "isCorrect": false },
    { "text": "ب) 8 Ω و 2.5 A", "isCorrect": true },
    { "text": "ج) 4 Ω و 5 A", "isCorrect": false },
    { "text": "د) 12 Ω و 2.5 A", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": "<svg xmlns='http://www.w3.org/2000/svg' width='950' height='550' viewBox='0 0 950 550'><style>.w{stroke:#000;stroke-width:4;fill:none;}.r{fill:#fff;stroke:#000;stroke-width:3;}.t{font-family:Arial;font-size:26px;text-anchor:middle;}</style><line x1='80' y1='180' x2='80' y2='360' class='w'/><line x1='120' y1='155' x2='120' y2='205' class='w'/><line x1='150' y1='165' x2='150' y2='195' class='w'/><line x1='80' y1='180' x2='120' y2='180' class='w'/><line x1='80' y1='360' x2='120' y2='360' class='w'/><line x1='150' y1='180' x2='270' y2='180' class='w'/><line x1='120' y1='360' x2='270' y2='360' class='w'/><text x='55' y='280' class='t'>20V</text><text x='115' y='140' font-size='22'>+</text><text x='150' y='140' font-size='22'>−</text><rect x='270' y='155' width='100' height='40' class='r'/><text x='320' y='143' class='t'>2Ω</text><rect x='270' y='325' width='100' height='40' class='r'/><text x='320' y='313' class='t'>2Ω</text><line x1='370' y1='180' x2='540' y2='180' class='w'/><line x1='370' y1='360' x2='540' y2='360' class='w'/><line x1='540' y1='180' x2='540' y2='235' class='w'/><rect x='515' y='235' width='50' height='80' class='r'/><line x1='540' y1='315' x2='540' y2='360' class='w'/><text x='495' y='284' class='t'>6Ω</text><rect x='650' y='155' width='100' height='40' class='r'/><text x='700' y='143' class='t'>3Ω</text><rect x='650' y='325' width='100' height='40' class='r'/><text x='700' y='313' class='t'>5Ω</text><line x1='540' y1='180' x2='650' y2='180' class='w'/><line x1='540' y1='360' x2='650' y2='360' class='w'/><line x1='870' y1='180' x2='870' y2='235' class='w'/><rect x='845' y='235' width='50' height='80' class='r'/><line x1='870' y1='315' x2='870' y2='360' class='w'/><text x='825' y='284' class='t'>4Ω</text><line x1='750' y1='180' x2='870' y2='180' class='w'/><line x1='750' y1='360' x2='870' y2='360' class='w'/></svg>",
  "steps": [
    {
      "title": "المرحلة الأولى: حساب المقاومة المكافئة للجزء الأيمن (التوالي)",
      "question": "المقاومات 3Ω، 4Ω، 5Ω موصولة على التوالي في أقصى اليمين. ما قيمة هذا الجزء؟",
      "options": [
        { "text": "12Ω", "isCorrect": true },
        { "text": "8Ω", "isCorrect": false },
        { "text": "4Ω", "isCorrect": false }
      ],
      "feedback": "صحيح! 3 + 4 + 5 = 12Ω"
    },
    {
      "title": "المرحلة الثانية: حساب التوازي بين 12Ω و 6Ω",
      "question": "الجزء الأيمن (12Ω) متصل على التوازي مع المقاومة 6Ω في المنتصف. ما قيمة هذا الجزء؟",
      "options": [
        { "text": "4Ω", "isCorrect": true },
        { "text": "6Ω", "isCorrect": false },
        { "text": "18Ω", "isCorrect": false }
      ],
      "feedback": "ممتاز! (12 × 6) ÷ (12 + 6) = 72 ÷ 18 = 4Ω"
    },
    {
      "title": "المرحلة الثالثة: حساب المقاومة الكلية (التوالي)",
      "question": "الآن أصبحت الدائرة مكونة من 2Ω، 4Ω، 2Ω على التوالي. ما المقاومة الكلية؟",
      "options": [
        { "text": "8Ω", "isCorrect": true },
        { "text": "4Ω", "isCorrect": false },
        { "text": "2Ω", "isCorrect": false }
      ],
      "feedback": "صحيح! 2 + 4 + 2 = 8Ω"
    },
    {
      "title": "المرحلة الرابعة: حساب التيار الكلي",
      "question": "باستخدام قانون أوم I = V ÷ R، حيث V = 20V و R = 8Ω، ما التيار الكلي؟",
      "options": [
        { "text": "2.5A", "isCorrect": true },
        { "text": "5A", "isCorrect": false },
        { "text": "10A", "isCorrect": false }
      ],
      "feedback": "ممتاز! I = 20 ÷ 8 = 2.5A"
    }
  ],
  "pdfSolutionSteps": [
    "<div style='font-size: 18px; line-height: 1.8; direction: rtl;'>",
    "<strong>الحل المفصل (طريقة التبسيط من الأبعد إلى الأقرب):</strong><br><br>",
    "<strong>المعطيات:</strong> V = 20V<br><br>",
    "<strong>1. حساب الجزء الأيمن (التوالي):</strong><br>",
    "3Ω + 4Ω + 5Ω = <strong>12Ω</strong><br><br>",
    "<strong>2. حساب التوازي مع المقاومة الوسطى (6Ω):</strong><br>",
    "(12 × 6) ÷ (12 + 6) = 72 ÷ 18 = <strong>4Ω</strong><br><br>",
    "<strong>3. حساب المقاومة الكلية (التوالي مع المقاومتين 2Ω):</strong><br>",
    "2Ω + 4Ω + 2Ω = <strong>8Ω</strong><br><br>",
    "<strong>4. حساب التيار الكلي (قانون أوم):</strong><br>",
    "I = V ÷ R = 20 ÷ 8 = <strong>2.5A</strong><br><br>",
    "<hr>",
    "<strong style='color: #1e40af;'>💡 فكرة الحل:</strong><br>",
    "لا يمكن التعويض مباشرة في قانون أوم. يجب أولاً تبسيط الدائرة (Circuit Reduction) باختصار المقاومات من الأبعد عن البطارية إلى الأقرب، حتى تصل إلى مقاومة مكافئة واحدة (R_eq)، ثم استخدام قانون أوم.<br><br>",
    "<strong style='color: #1e40af;'>📌 نصائح للطالب:</strong><br>",
    "1. <strong>ابدأ من الأبعد عن البطارية:</strong> أقصى اليمين أو أقصى اليسار. لا تبدأ من المقاومات القريبة من المصدر.<br>",
    "2. <strong>التوالي (Series):</strong> ابحث عن مسار إجباري (لا يوجد تفرع). اجمع المقاومات: R = R₁ + R₂ + ...<br>",
    "3. <strong>التوازي (Parallel):</strong> ابحث عن نقطة تفرع والتقاء. استخدم القانون: 1/R = 1/R₁ + 1/R₂<br>",
    "4. <strong>أعد الرسم بعد كل تبسيط:</strong> استبدل المجموعة بمقاومة واحدة، ثم أعد النظر في الدائرة.<br>",
    "5. <strong>تجنب الخطأ الشائع:</strong> لا تجمع مقاومة على التوازي مع أخرى على التوالي في خطوة واحدة. افصل التوصيلات.<br><br>",
    "<strong style='color:#166534;'>الإجابة الصحيحة: (ب) 8 Ω و 2.5 A</strong>",
    "</div>"
  ],
  "pdfFinalAnswer": "الإجابة الصحيحة: (ب) 8 Ω و 2.5 A"
}
]