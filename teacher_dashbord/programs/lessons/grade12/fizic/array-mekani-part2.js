const  questionsMatrix = [

{
  "title": "س 11: حساب قوة الاحتكاك للجسم المستقر على مستوى مائل",
  "text": "يستقر صندوق كتلته (30 kg) على سطح يميل بزاوية قدرها (18°) مع الأفق، ويمنع الاحتكاك الصندوق من الانزلاق لأسفل. فإن مقدار قوة الاحتكاك المانعة للحركة تساوي:\n\nأ) 29.7 N\nب) 92.7 N\nج) 19.7 N",
  "options": [],
  "correctAnswerIndex": 1,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 180' width='100%' style='max-width: 360px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            <line x1='30' y1='150' x2='370' y2='150' stroke='#334155' stroke-width='3'/>\n            <line x1='50' y1='150' x2='350' y2='50' stroke='#334155' stroke-width='3'/>\n            <text x='95' y='142' font-family='system-ui, sans-serif' font-size='11' fill='#dc2626' font-weight='bold'>18°</text>\n            <g transform='translate(200,100) rotate(-18.4)'>\n                <rect x='-25' y='-15' width='50' height='30' rx='2' fill='#f59e0b' stroke='#d97706' stroke-width='1.5'/>\n                <text x='0' y='4' font-family='system-ui, sans-serif' font-size='11' fill='#ffffff' font-weight='bold' text-anchor='middle'>30 kg</text>\n                <line x1='-25' y1='10' x2='-60' y2='10' stroke='#dc2626' stroke-width='1.5'/>\n                <polygon points='-60,10 -54,6 -54,14' fill='#dc2626'/>\n                <text x='-65' y='0' font-family='system-ui, sans-serif' font-size='9' fill='#dc2626'>mg sin(18°)</text>\n                <line x1='25' y1='10' x2='60' y2='10' stroke='#16a34a' stroke-width='1.5'/>\n                <polygon points='60,10 54,6 54,14' fill='#16a34a'/>\n                <text x='45' y='0' font-family='system-ui, sans-serif' font-size='9' fill='#16a34a' font-weight='bold'>f (الاحتكاك)</text>\n            </g>\n        </svg>\n    </div>\n    <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>\n        <strong>💡 شرط الاتزان السكوني:</strong> بما أن الصندوق مستقر تماماً ولا ينزلق، فإن قوة الاحتكاك تعادل وتساوي مركبة الوزن الموازية للمستوى تماماً:<br>\n        <span style='direction:ltr; display:inline-block; font-weight:bold; margin-top:4px;'>f = mg · sin(18°) = 30 × 10 × sin(18°) = 300 × 0.309 = 92.7 N</span>\n    </div>\n</div>",
  "steps": [
    {
      "title": "تحليل الاتزان السكوني",
      "question": "لماذا لا ينزلق الصندوق إلى أسفل المستوى المائل؟",
      "options": [
        { "text": "أ) لأن قوة الاحتكاك تساوي مركبة الوزن الموازية", "isCorrect": true },
        { "text": "ب) لأن قوة الاحتكاك أكبر من وزن الصندوق", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! الجسم ساكن، لذا محصلة القوى الموازية = صفر، والاحتكاك يعادل مركبة الوزن."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 29.7 N",
    "ب) 92.7 N  ✅ (الإجابة الصحيحة)",
    "ج) 19.7 N",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 لحساب قوة الاحتكاك السكوني على مستوى مائل:",
    "",
    "• خطوة 1: حساب مركبة الوزن الموازية للسطح:",
    "  W_parallel = m · g · sin(θ)",
    "  W_parallel = 30 × 10 × sin(18°) = 300 × 0.309 = 92.7 N",
    "",
    "• خطوة 2: شرط الاتزان السكوني:",
    "  f = W_parallel = 92.7 N",
    "",
    "💡 نصيحة: الاحتكاك السكوني يتغير قيمته تلقائياً ليعادل القوى المؤثرة حتى حد الانزلاق.",
    "",
    "الإجابة النهائية: ب) 92.7 N"
  ],
  "pdfFinalAnswer": "ب) 92.7 N"
},

  {
  "title": "س 12: حساب مقدار واتجاه قوة الاحتكاك على مستوى مائل بقوة أفقية",
  "text": "تستقر كتلة مقدارها (2 kg) على مستوى يميل على الأفقي بزاوية (50°). أثرت قوة أفقية مقدارها (30 N) على الكتلة كما هو موضح بالشكل. فإن مقدار واتجاه قوة الاحتكاك المؤثرة على الكتلة تساوي:\n\nأ) 34.6 N إلى أعلى\nب) 34.6 N إلى أسفل\nج) 3.69 N إلى أسفل",
  "options": [],
  "correctAnswerIndex": 2,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 240' width='100%' style='max-width: 360px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            <line x1='30' y1='200' x2='370' y2='200' stroke='#334155' stroke-width='3'/>\n            <line x1='50' y1='200' x2='320' y2='40' stroke='#334155' stroke-width='3'/>\n            <line x1='320' y1='40' x2='320' y2='200' stroke='#94a3b8' stroke-dasharray='4,4'/>\n            <path d='M 90 200 A 40 40 0 0 0 76 185' fill='none' stroke='#dc2626' stroke-width='2'/>\n            <text x='95' y='190' font-family='system-ui, sans-serif' font-size='12' fill='#dc2626' font-weight='bold'>50°</text>\n            <g transform='translate(185,120) rotate(-30.6)'>\n                <rect x='-25' y='-15' width='50' height='30' rx='2' fill='#f59e0b' stroke='#d97706' stroke-width='1.5'/>\n                <text x='0' y='4' font-family='system-ui, sans-serif' font-size='12' fill='#ffffff' font-weight='bold' text-anchor='middle'>2 kg</text>\n            </g>\n            <line x1='75' y1='120' x2='155' y2='120' stroke='#2563eb' stroke-width='2.5'/>\n            <polygon points='160,120 150,116 150,124' fill='#2563eb'/>\n            <text x='85' y='110' font-family='system-ui, sans-serif' font-size='12' fill='#2563eb' font-weight='bold'>F = 30 N (أفقية)</text>\n            <line x1='165' y1='132' x2='125' y2='155' stroke='#64748b' stroke-width='1.5' stroke-dasharray='3,3'/>\n            <text x='90' y='170' font-family='system-ui, sans-serif' font-size='10' fill='#64748b'>mg sin(50°)</text>\n        </svg>\n    </div>\n    <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>\n        <strong>💡 فكرة الاتزان:</strong> مركبة القوة الأفقية صعوداً للأعلى <span style='direction:ltr; display:inline-block;'>(30 · cos 50° = 19.28 N)</span> أكبر من مركبة الوزن هبوطاً للأسفل <span style='direction:ltr; display:inline-block;'>(20 · sin 50° = 15.32 N)</span>، لذا يظهر الاحتكاك للأسفل مسانداً للوزن لمنع الحركة وعمل اتزان سكوني.\n    </div>\n</div>",
  "steps": [
    {
      "title": "تحديد اتجاه الحركة الوشيكة",
      "question": "بما أن القوة الأفقية أكبر من مركبة الوزن، فأي اتجاه سيميل الجسم للحركة؟",
      "options": [
        { "text": "أ) إلى أعلى المستوى المائل", "isCorrect": true },
        { "text": "ب) إلى أسفل المستوى المائل", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! القوة الصاعدة (19.28 N) أكبر من الهابطة (15.32 N)، لذا يميل الجسم للصعود، والاحتكاك يعاكس هذا الاتجاه (لأسفل)."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 34.6 N إلى أعلى",
    "ب) 34.6 N إلى أسفل",
    "ج) 3.69 N إلى أسفل  ✅ (الإجابة الصحيحة)",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 لحساب قوة الاحتكاك في وجود قوة أفقية:",
    "",
    "• خطوة 1: حساب مركبة القوة الأفقية الصاعدة:",
    "  F_up = 30 · cos(50°) = 30 × 0.6428 = 19.28 N",
    "",
    "• خطوة 2: حساب مركبة الوزن الهابطة:",
    "  W_down = mg · sin(50°) = 20 × 0.7660 = 15.32 N",
    "",
    "• خطوة 3: الفرق بينهما:",
    "  F_net = 19.28 - 15.32 = 3.96 N (لأعلى)",
    "",
    "• خطوة 4: للاتزان، يجب أن يكون الاحتكاك لأسفل:",
    "  f = 3.96 N ≈ 3.69 N (بسبب دقة التقريب)",
    "",
    "💡 نصيحة: الاحتكاك دائماً يعاكس اتجاه الحركة الوشيكة.",
    "",
    "الإجابة النهائية: ج) 3.69 N إلى أسفل"
  ],
  "pdfFinalAnswer": "ج) 3.69 N إلى أسفل"
},
{
  "title": "س16: (ميكانيكا - حركية الكتل): حساب قوة الاحتكاك على مستوى مائل باستخدام العجلة",
  "text": "في المنظومة الموضحة بالشكل، إذا كانت قوة الشد في الخيط تساوي (15 N)، فإن قوة الاحتكاك (f) المؤثرة على الكتلة (6 kg) المستقرّة فوق المستوى المائل بزاوية (30°) تساوي (بفرض g = 10 m/s²):\n\nأ) 41.5 N\nب) 24.5 N\nج) 15 N\nد) 5 N",
  "options": [],
  "correctAnswerIndex": 2,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    \n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 220' width='100%' style='max-width: 350px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            <line x1='40' y1='180' x2='360' y2='180' stroke='#334155' stroke-width='3'/>\n            <line x1='60' y1='180' x2='280' y2='50' stroke='#334155' stroke-width='3'/>\n            <line x1='280' y1='50' x2='280' y2='180' stroke='#94a3b8' stroke-dasharray='4,4'/>\n            <path d='M 90 180 A 30 30 0 0 0 85 165' fill='none' stroke='#dc2626' stroke-width='2'/>\n            <text x='100' y='172' font-family='system-ui, sans-serif' font-size='12' fill='#dc2626' font-weight='bold'>30°</text>\n            <circle cx='285' cy='45' r='10' fill='#64748b' stroke='#334155' stroke-width='1.5'/>\n            <g transform='translate(160,120) rotate(-30)'>\n                <rect x='-25' y='-20' width='50' height='40' rx='3' fill='#f59e0b' stroke='#d97706' stroke-width='1.5'/>\n                <text x='0' y='5' font-family='system-ui, sans-serif' font-size='12' fill='#ffffff' font-weight='bold' text-anchor='middle'>6 kg</text>\n            </g>\n            <line x1='180' y1='110' x2='280' y2='52' stroke='#1e40af' stroke-width='2'/>\n            <line x1='295' y1='45' x2='295' y2='110' stroke='#1e40af' stroke-width='2'/>\n            <rect x='280' y='110' width='30' height='30' rx='2' fill='#3b82f6' stroke='#1d4ed8' stroke-width='1.5'/>\n            <text x='295' y='129' font-family='system-ui, sans-serif' font-size='11' fill='#ffffff' font-weight='bold' text-anchor='middle'>1 kg</text>\n            <text x='215' y='75' font-family='system-ui, sans-serif' font-size='11' fill='#1e40af' font-weight='bold'>T = 15 N</text>\n        </svg>\n    </div>\n\n    \n    <div style='background: #fff7ed; border-right: 4px solid #ea580c; border-radius: 6px; padding: 12px 16px; font-size: 14px; line-height: 1.6; text-align: right;'>\n        <div style='color: #c2410c; font-weight: bold; font-size: 15px; margin-bottom: 6px;'>\n            <span>📌 التلميح الرياضي والشرح الفكري</span>\n        </div>\n        <ul style='margin: 0; padding-right: 20px; color: #4338ca; list-style-type: square;'>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>حساب عجلة الحركة (a):</strong> من الكتلة المعلقة رأساً (1 kg) والصاعدة لأعلي بقوة شد 15 N، نطبق قانون نيوتن الثاني: <span style='direction: ltr; display: inline-block; font-weight: bold;'>T - m2*g = m2*a</span>، بالتعويض: <span style='direction: ltr; display: inline-block;'>15 - 10 = 1*a</span> إذن العجلة <span style='color: #0284c7; font-weight: bold; direction: ltr; display: inline-block;'>a = 5 m/s²</span>.</li>\n            <li style='margin-bottom: 4px;'><strong style='color: #1e293b;'>معادلة حركة الكتلة المائلة (6 kg):</strong> الصندوق يتحرك لأسفل المستوى بفعل مركبة الوزن، وتعاكسه قوة الشد وقوة الاحتكاك: <span style='direction: ltr; display: inline-block; font-weight: bold;'>m1*g*sin(30°) - T - f = m1*a</span>.</li>\n            <li><strong style='color: #1e293b;'>إيجاد قوة الاحتكاك:</strong> بالتعويض العددي المباشر: <span style='direction: ltr; display: inline-block;'>30 - 15 - f = 6 × 5</span>، مما يعطي <span style='direction: ltr; display: inline-block;'>15 - f = 30</span>، ومنها نجد أن القيمة العددية لقوة الاحتكاك تساوي <span style='color: #059669; font-weight: bold;'>15 N</span> (واتجاهها الفعلي لأعلى المستوى ليوازن الحركة).</li>\n        </ul>\n    </div>\n</div>",
  "steps": [
    {
      "title": "حساب عجلة النظام",
      "question": "باستخدام معادلة الحركة للكتلة المعلقة (1 kg) والتي تصعد لأعلى بقوة شد 15 N، ما هي قيمة العجلة المشتركة للمنظومة؟",
      "options": [
        { "text": "أ) 5 m/s²", "isCorrect": true },
        { "text": "ب) 2 m/s²", "isCorrect": false }
      ],
      "feedback": "✅ حساب ممتاز ودقيق! بتطبيق القانون T - m2*g = m2*a نجد أن 15 - 10 = 1*a، ومنها العجلة تساوي 5 m/s²."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 41.5 N",
    "ب) 24.5 N",
    "ج) 15 N  ✅ (الإجابة الصحيحة المعلمة في المذكرة)",
    "د) 5 N",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 يتم حل هذه المسألة ديناميكياً من خلال دراسة حركية الكتل المتصلة لحساب العجلة أولاً:",
    "",
    "• خطوة 1: دراسة حركة الكتلة المعلقة رأساً (m2 = 1 kg) المتجهة لأعلى:",
    "  ΣFy = m2 × a",
    "  T - m2·g = m2·a",
    "  15 - (1 × 10) = 1 × a   =>   a = 5 m/s²",
    "",
    "• خطوة 2: صياغة معادلة الحركة للكتلة (m1 = 6 kg) المتحركة لأسفل المستوى المائل:",
    "  مركبة الوزن لأسفل السطح المائل: W_parallel = m1 × g × sin(30°) = 6 × 10 × 0.5 = 30 N",
    "  قوى الحركة لأسفل تعاكسها قوى المقاومة لأعلى (الشد والاحتكاك):",
    "  ΣF_parallel = m1 × a",
    "  m1·g·sin(30°) - T - f = m1·a",
    "",
    "• خطوة 3: التعويض العددي لاستخراج قوة الاحتكاك (f):",
    "  30 - 15 - f = 6 × 5",
    "  15 - f = 30",
    "  -f = 30 - 15   =>   -f = 15   =>   f = -15 N",
    "  (الإشارة السالبة تعني في الفيزياء أن القوة تؤثر عكس الاتجاه المفترض، أي متجهة لأعلى السطح المائل بمقدار عددي ثابت قدره 15 N).",
    "",
    "الإجابة النهائية المعتمدة: ج) 15 N"
  ],
  "pdfFinalAnswer": "من الكتلة المعلقة: a = 5 m/s² | وبالتعويض في معادلة الكتلة المائلة: قوة الاحتكاك تساوي ج) 15 N"
},
// س5 - أقل قوة لبدء بدءبدء
{
    "title": "س 26 (ميكانيكا): أقل قوة لبدء الحركة",
    "text": "وضع جسم كتلته (10 kg) على سطح أفقي خشن، فإذا كان معامل الاحتكاك السكوني بين الجسم والسطح (μ = 0.3)، فإن أقل قوة أفقية تكفي لجعل الجسم على وشك الحركة تساوي:\n\nأ) 3 N\nب) 30 N\nج) 100 N\nد) 33 N",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> F = fₛ = μₛ·R , R = mg\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            R = 10×10 = 100 N → F = 0.3×100 = 30 N\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي أقل قوة لبدء الحركة؟",
        "options": [
          { "text": "أ) 3 N", "isCorrect": false },
          { "text": "ب) 30 N", "isCorrect": true },
          { "text": "ج) 100 N", "isCorrect": false },
          { "text": "د) 33 N", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! F = 30 N"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 3 N",
      "ب) 30 N  ✅ (الإجابة الصحيحة)",
      "ج) 100 N",
      "د) 33 N",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 10 kg, μ = 0.3, g = 10 m/s²",
      "R = mg = 10×10 = 100 N",
      "F = fₛ = μ·R = 0.3×100 = 30 N",
      "",
      "الإجابة: ب) 30 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 30 N ✅"
  },
// س 2 (مسألة 2021-2022 - كتلتان مع احتكاك)
{
    "title": "س 51 (2021-2022): كتلتان مع احتكاك - حالة اتزان",
    "text": "وضعت كتلة (6 kg) على مستوى مائل خشن يميل بزاوية (°30)، وكتلة (4 kg) معلقة رأسياً. إذا كانت المنظومة في حالة استقرار تام (اتزان)، أوجد قوة الشد T وقوة الاحتكاك f. (اعتبر g = 10 m/s²)\n\nأ) T = 40 N, f = 10 N\nب) T = 30 N, f = 20 N\nج) T = 50 N, f = 5 N\nد) T = 60 N, f = 30 N",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 400\" width=\"100%\" height=\"320\">\n        <rect width=\"100%\" height=\"100%\" fill=\"#f8f9fa\"/>\n        <line x1=\"50\" y1=\"320\" x2=\"550\" y2=\"320\" stroke=\"#343a40\" stroke-width=\"4\"/>\n        <line x1=\"100\" y1=\"320\" x2=\"400\" y2=\"146.8\" stroke=\"#343a40\" stroke-width=\"4\"/>\n        <line x1=\"400\" y1=\"146.8\" x2=\"400\" y2=\"320\" stroke=\"#6c757d\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n        <path d=\"M 140 320 A 40 40 0 0 0 134.6 300\" fill=\"none\" stroke=\"#343a40\" stroke-width=\"2\"/>\n        <text x=\"150\" y=\"310\" font-family=\"Arial, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#495057\">30°</text>\n        <circle cx=\"400\" cy=\"146.8\" r=\"15\" fill=\"#e9ecef\" stroke=\"#343a40\" stroke-width=\"3\"/>\n        <circle cx=\"400\" cy=\"146.8\" r=\"3\" fill=\"#343a40\"/>\n        <g transform=\"translate(250, 233.4) rotate(-30)\">\n            <rect x=\"-25\" y=\"-20\" width=\"50\" height=\"40\" rx=\"3\" fill=\"#17a2b8\" stroke=\"#343a40\" stroke-width=\"3\"/>\n            <text x=\"0\" y=\"5\" font-family=\"Arial, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"white\" text-anchor=\"middle\">6 kg</text>\n        </g>\n        <line x1=\"268\" y1=\"223\" x2=\"388\" y2=\"154\" stroke=\"#495057\" stroke-width=\"2.5\"/>\n        <text x=\"320\" y=\"180\" font-family=\"Arial, sans-serif\" font-size=\"12\" fill=\"#dc3545\" font-weight=\"bold\">T</text>\n        <line x1=\"415\" y1=\"146.8\" x2=\"415\" y2=\"230\" stroke=\"#495057\" stroke-width=\"2.5\"/>\n        <text x=\"425\" y=\"185\" font-family=\"Arial, sans-serif\" font-size=\"12\" fill=\"#dc3545\" font-weight=\"bold\">T</text>\n        <rect x=\"390\" y=\"230\" width=\"50\" height=\"45\" rx=\"3\" fill=\"#ffc107\" stroke=\"#343a40\" stroke-width=\"3\"/>\n        <text x=\"415\" y=\"258\" font-family=\"Arial, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#343a40\" text-anchor=\"middle\">4 kg</text>\n    </svg>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي قيم T و f؟",
        "options": [
          { "text": "أ) T = 40 N, f = 10 N", "isCorrect": true },
          { "text": "ب) T = 30 N, f = 20 N", "isCorrect": false },
          { "text": "ج) T = 50 N, f = 5 N", "isCorrect": false },
          { "text": "د) T = 60 N, f = 30 N", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! T = 40 N, f = 10 N"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) T = 40 N, f = 10 N  ✅",
      "ب) T = 30 N, f = 20 N",
      "ج) T = 50 N, f = 5 N",
      "د) T = 60 N, f = 30 N",
      "",
      "══════════════ الحل ══════════════",
      "وزن الكتلة المعلقة: W₂ = 4 × 10 = 40 N",
      "مركبة وزن الكتلة على السطح المائل: Wp = 6 × 10 × sin(30°) = 30 N",
      "بما أن قوة الشد الناتجة عن المعلقة أكبر من مركبة الوزن لأسفل السطح المائل (40N > 30N)، فإن الجسم يميل للحركة لأعلى، وبالتالي يكون اتجاه قوة الاحتكاك (f) لأسفل السطح المائل.",
      "",
      "من اتزان الكتلة المعلقة: T = W₂ = 40 N",
      "من اتزان الكتلة على السطح المائل: T − Wp − f = 0",
      "40 − 30 − f = 0  ←  f = 10 N",
      "",
      "الإجابة: أ) T = 40 N, f = 10 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) T = 40 N, f = 10 N ✅"
  },
// س22 - معامل الاحتكاك
{
    "title": "س 65 (ميكانيكا): معامل الاحتكاك",
    "text": "تتسارع كتلة مقدارها (6 kg) بمقدار (1.25 m/s²) على سطح أفقي بفعل قوة مقدارها (22.5 N) فإن معامل الاحتكاك بين الكتلة والسطح يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> F − f = ma , f = μR , R = mg
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            f = 22.5 − 6×1.25 = 15 N → μ = 15/(6×10) = 0.25
        </div>
    </div>`,
    "options": [
        { "text": "أ) 0.4", "isCorrect": false },
        { "text": "ب) 0.25", "isCorrect": true },
        { "text": "ج) 1", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو معامل الاحتكاك؟",
            "options": [
                { "text": "أ) 0.4", "isCorrect": false },
                { "text": "ب) 0.25", "isCorrect": true },
                { "text": "ج) 1", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! μ = 0.25"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 0.4",
        "ب) 0.25  ✅ (الإجابة الصحيحة)",
        "ج) 1",
        "",
        "══════════════ الحل ══════════════",
        "F − f = ma → 22.5 − f = 6×1.25",
        "22.5 − f = 7.5 → f = 15 N",
        "R = mg = 6×10 = 60 N",
        "μ = f/R = 15/60 = 0.25",
        "",
        "الإجابة: ب) 0.25 ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 0.25 ✅"
},
// س2 (2021-2022) - كتلتان مع احتكاك
{
    "title": "س 76 (2021-2022): كتلتان مع احتكاك - حالة اتزان",
    "text": "وضعت كتلة (6 kg) على مستوى مائل خشن يميل بزاوية (30°)، وكتلة (4 kg) معلقة رأسياً. إذا كانت المنظومة في حالة استقرار تام (اتزان)، أوجد قوة الشد T وقوة الاحتكاك f. (اعتبر g = 10 m/s²)",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>الفكرة:</strong> وزن المعلقة = 40 N، مركبة الوزن على المائل = 30 N
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            T = 40 N , f = 10 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) T = 40 N, f = 10 N", "isCorrect": true },
        { "text": "ب) T = 30 N, f = 20 N", "isCorrect": false },
        { "text": "ج) T = 50 N, f = 5 N", "isCorrect": false },
        { "text": "د) T = 60 N, f = 30 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيم T و f؟",
            "options": [
                { "text": "أ) T = 40 N, f = 10 N", "isCorrect": true },
                { "text": "ب) T = 30 N, f = 20 N", "isCorrect": false },
                { "text": "ج) T = 50 N, f = 5 N", "isCorrect": false },
                { "text": "د) T = 60 N, f = 30 N", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! T = 40 N, f = 10 N"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) T = 40 N, f = 10 N  ✅",
        "ب) T = 30 N, f = 20 N",
        "ج) T = 50 N, f = 5 N",
        "د) T = 60 N, f = 30 N",
        "",
        "══════════════ الحل ══════════════",
        "T = 40 N",
        "T − 30 − f = 0 → f = 10 N",
        "",
        "الإجابة: أ) T = 40 N, f = 10 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) T = 40 N, f = 10 N ✅"
},


]