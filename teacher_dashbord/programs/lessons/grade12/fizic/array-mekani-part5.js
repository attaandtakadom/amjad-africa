const  questionsMatrix = [

 {
  "title": "س 9 : حساب المسافة الرأسية بمعلومية القدرة والزمن",
  "text": "إذا رُفع صندوق كتلته (160 kg) عمودياً إلى أعلى بسرعة منتظمة بواسطة آلة قدرتها (2 kW)، فإن المسافة التي يتحركها الصندوق في زمن قدره (6 s) تساوي:\n\nأ) 6.5 m\nب) 7.5 m\nج) 8.5 m\nد) 9.5 m",
  "options": [],
  "correctAnswerIndex": 1,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    <div style='text-align: center; margin-bottom: 15px;'>\n        <svg viewBox='0 0 400 200' width='100%' style='max-width: 320px; background: #f8fafc; border-radius: 10px; border: 1px solid #f1f5f9;'>\n            <circle cx='200' cy='30' r='15' fill='#475569'/>\n            <text x='230' y='35' font-family='system-ui, sans-serif' font-size='11' fill='#475569' font-weight='bold'>الآلة: P = 2 kW</text>\n            <line x1='200' y1='45' x2='200' y2='120' stroke='#3b82f6' stroke-width='2'/>\n            <rect x='175' y='120' width='50' height='40' rx='4' fill='#ea580c' stroke='#c2410c' stroke-width='1.5'/>\n            <text x='200' y='144' font-family='system-ui, sans-serif' font-size='11' fill='#ffffff' font-weight='bold' text-anchor='middle'>160 kg</text>\n            <line x1='150' y1='140' x2='150' y2='100' stroke='#16a34a' stroke-width='2'/>\n            <polygon points='150,95 146,105 154,105' fill='#16a34a'/>\n            <text x='135' y='120' font-family='system-ui, sans-serif' font-size='10' fill='#16a34a' font-weight='bold'>v منتظمة</text>\n            <line x1='90' y1='30' x2='90' y2='160' stroke='#94a3b8' stroke-width='1' stroke-dasharray='4,4'/>\n            <text x='80' y='100' font-family='system-ui, sans-serif' font-size='11' fill='#64748b'>الزمن: t = 6 s</text>\n        </svg>\n    </div>\n    <div style='background: #eff6ff; border-right: 4px solid #1d4ed8; padding: 10px; font-size: 13px; color: #1e3a8a;'>\n        <strong>💡 طريقة الحل المباشرة:</strong> القدرة الميكانيكية = الشغل/الزمن، وبالتالي:<br>\n        <span style='direction:ltr; display:inline-block; font-weight:bold; margin-top:4px;'>P = (m · g · s) / t ➔ 2000 = (1600 × s) / 6 ➔ s = 12000 / 1600 = 7.5 m</span>\n    </div>\n</div>",
  "steps": [
    {
      "title": "تحليل معادلة القدرة",
      "question": "ما هي العلاقة التي تربط القدرة بالشغل والزمن؟",
      "options": [
        { "text": "أ) P = W / t", "isCorrect": true },
        { "text": "ب) P = W × t", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! القدرة هي معدل بذل الشغل: P = W/t."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) 6.5 m",
    "ب) 7.5 m  ✅ (الإجابة الصحيحة)",
    "ج) 8.5 m",
    "د) 9.5 m",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 لحساب المسافة المقطوعة باستخدام القدرة:",
    "",
    "• خطوة 1: تحويل القدرة إلى واط:",
    "  P = 2 kW = 2000 W",
    "",
    "• خطوة 2: حساب الشغل المبذول:",
    "  W = P × t = 2000 × 6 = 12000 J",
    "",
    "• خطوة 3: الشغل في الرفع العمودي = m · g · s:",
    "  12000 = 160 × 10 × s  =>  s = 12000 / 1600 = 7.5 m",
    "",
    "الإجابة النهائية: ب) 7.5 m"
  ],
  "pdfFinalAnswer": "ب) 7.5 m"
},
 {
  "title": "س 14: وحدة قياس الشغل الميكانيكي",
  "text": "يُقاس الشغل الميكانيكي في علم الفيزياء بوحدة:\n\nأ) الجول (J)\nب) الوات (W)\nج) نيوتن · متر (N·m)\nد) الإجابتان (أ) و (ج) صحيحتان",
  "options": [],
  "correctAnswerIndex": 3,
  "svgCode": "<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); direction: rtl;'>\n    <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>\n        <strong>💡 تذكير فيزيائي:</strong> الجول (J) = نيوتن · متر (N·m)، وهما وحدتان مكافئتان تماماً. الوات (W) هو وحدة القدرة وليس الشغل.\n    </div>\n</div>",
  "steps": [
    {
      "title": "تعريف وحدة الشغل",
      "question": "ما هي الوحدة المكافئة للجول (J) في النظام الدولي؟",
      "options": [
        { "text": "أ) نيوتن · متر (N·m)", "isCorrect": true },
        { "text": "ب) كيلوغرام · متر / ثانية²", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! الجول يكافئ نيوتن·متر، حيث 1 J = 1 N·m."
    }
  ],
  "pdfSolutionSteps": [
    "══════════════ الخيارات ══════════════",
    "أ) الجول (J)",
    "ب) الوات (W)",
    "ج) نيوتن · متر (N·m)",
    "د) الإجابتان (أ) و (ج) صحيحتان  ✅ (الإجابة الصحيحة)",
    "",
    "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
    "📢 الشغل الميكانيكي يُعرَّف بـ: W = F · d · cos(θ)",
    "",
    "• وحدات الشغل:",
    "  نيوتن × متر = N·m = جول (J)",
    "",
    "• ملاحظة: الوات (W) هو وحدة القدرة (معدل بذل الشغل):",
    "  1 W = 1 J/s",
    "",
    "الإجابة النهائية: د) الإجابتان (أ) و (ج) صحيحتان"
  ],
  "pdfFinalAnswer": "د) الإجابتان (أ) و (ج) صحيحتان"
},
// ============================================================
{
    "title": "س 30 (شغل وطاقة - صح/خطأ): الشغل الناتج من قوة الاحتكاك",
    "text": "الشغل الناتج من قوة الاحتكاك يكون دائماً سالباً لأنه يعمل في عكس اتجاه الحركة.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 W = F·s·cosθ → θ = 180° → cos180° = -1 → W سالب دائماً\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل الشغل الناتج من قوة الاحتكاك سالب دائماً؟",
        "options": [
          { "text": "أ) صح", "isCorrect": true },
          { "text": "ب) خطأ", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! θ = 180° → cos180° = -1 → W سالب"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح  ✅ (الإجابة الصحيحة)",
      "ب) خطأ",
      "",
      "══════════════ التوضيح ══════════════",
      "W = F·s·cosθ",
      "قوة الاحتكاك تعاكس الحركة ← θ = 180°",
      "cos180° = -1 ← W سالب دائماً (شغل مقاوم)",
      "",
      "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
  },
// س2 - تعريف طاقة الحركة
{
    "title": "س 31 (شغل وطاقة - صح/خطأ): تعريف طاقة الحركة",
    "text": "طاقة الحركة هي طاقة مخزنة في الجسم بسبب وضعه أو الارتفاع الذي يصل إليه عن سطح الأرض.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 هذا تعريف طاقة الوضع (Ep = mgh) ← طاقة الحركة (Ek = ½mv²)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل هذا التعريف صحيح لطاقة الحركة؟",
        "options": [
          { "text": "أ) صح", "isCorrect": false },
          { "text": "ب) خطأ", "isCorrect": true }
        ],
        "feedback": "✅ صحيح! هذا تعريف طاقة الوضع، أما طاقة الحركة فتعتمد على السرعة (Ek = ½mv²)"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح",
      "ب) خطأ  ✅ (الإجابة الصحيحة)",
      "",
      "══════════════ التوضيح ══════════════",
      "• هذا التعريف يخص طاقة الوضع: Ep = mgh",
      "• طاقة الحركة: Ek = ½mv² (تعتمد على السرعة)",
      "",
      "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
  },
// س4 - قدرة الرافعة الكهربائية
{
    "title": "س 33 (شغل وطاقة): قدرة الرافعة الكهربائية",
    "text": "رافعة كهربائية تبذل شغلاً مقداره 60 kJ لرفع حمولة ما خلال زمن قدره 0.5 min، فإن قدرة هذه الرافعة تساوي:\n\nأ) 120 W\nب) 2 kW\nج) 30 kW\nد) 1200 W",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> P = W/t (تحويل الوحدات أولاً)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            W = 60×1000 = 60000 J , t = 0.5×60 = 30 s\n            P = 60000/30 = 2000 W = 2 kW\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي قدرة الرافعة؟",
        "options": [
          { "text": "أ) 120 W", "isCorrect": false },
          { "text": "ب) 2 kW", "isCorrect": true },
          { "text": "ج) 30 kW", "isCorrect": false },
          { "text": "د) 1200 W", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! P = 2 kW"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 120 W",
      "ب) 2 kW  ✅ (الإجابة الصحيحة)",
      "ج) 30 kW",
      "د) 1200 W",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: W = 60 kJ = 60000 J, t = 0.5 min = 30 s",
      "P = W/t = 60000/30 = 2000 W = 2 kW",
      "",
      "الإجابة: ب) 2 kW ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 2 kW ✅"
  },

{
    "title": "س 34 (شغل وطاقة): كفاءة الآلة",
    "text": "آلة كفاءتها 80%، إذا كانت القدرة الداخلة إليها تساوي 5 kW، فإن القدرة الخارجة (المفيدة) من الآلة تساوي:\n\nأ) 4 kW\nب) 6.25 kW\nج) 400 W\nد) 4.5 kW",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> η = P_out / P_in\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            P_out = η × P_in = 0.80 × 5 = 4 kW\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي القدرة الخارجة من الآلة؟",
        "options": [
          { "text": "أ) 4 kW", "isCorrect": true },
          { "text": "ب) 6.25 kW", "isCorrect": false },
          { "text": "ج) 400 W", "isCorrect": false },
          { "text": "د) 4.5 kW", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! P_out = 4 kW"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 4 kW  ✅ (الإجابة الصحيحة)",
      "ب) 6.25 kW",
      "ج) 400 W",
      "د) 4.5 kW",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: η = 80% = 0.80, P_in = 5 kW",
      "η = P_out / P_in",
      "P_out = η × P_in = 0.80 × 5 = 4 kW",
      "",
      "الإجابة: أ) 4 kW ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 4 kW ✅"
  },
  {
    "title": "مسألة 35 (شغل وطاقة): القدرة والسرعة على سطح خشن",
    "text": "تتحرك سيارة كتلتها 1200 kg على طريق أفقي خشن بسرعة ثابتة مقدارها 25 m/s، فإذا كانت قوة مقاومة الطريق لحركة السيارة تساوي 400 N، احسب القدرة التي يبذلها محرك السيارة.\n\nأ) 5 kW\nب) 10 kW\nج) 15 kW\nد) 20 kW",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> P = F·v ، والسرعة ثابتة ← F = f (قوة الاحتكاك)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            P = 400 × 25 = 10000 W = 10 kW\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي القدرة التي يبذلها المحرك؟",
        "options": [
          { "text": "أ) 5 kW", "isCorrect": false },
          { "text": "ب) 10 kW", "isCorrect": true },
          { "text": "ج) 15 kW", "isCorrect": false },
          { "text": "د) 20 kW", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! P = 10 kW"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 5 kW",
      "ب) 10 kW  ✅ (الإجابة الصحيحة)",
      "ج) 15 kW",
      "د) 20 kW",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: v = 25 m/s, f = 400 N",
      "سرعة ثابتة ← a = 0 ← F = f = 400 N",
      "P = F × v = 400 × 25 = 10000 W",
      "P = 10000/1000 = 10 kW",
      "",
      "الإجابة: ب) 10 kW ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 10 kW ✅"
  },
  {
    "title": "مسألة 36 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "تسير سيارة بسرعة 20 m/s، ضغط سائقها على الكوابح فتناقصت سرعتها بانتظام إلى 5 m/s خلال مسافة مقدارها 60 m، فإذا كانت كتلة السيارة 1000 kg، أوجد الشغل المبذول بواسطة الكوابح (الفرامل).\n\nأ) −187500 J\nب) −150000 J\nج) −200000 J\nد) −100000 J",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> W = ΔEk = ½m(v² − u²)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            W = ½×1000×(5²−20²) = −187500 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو الشغل المبذول بواسطة الكوابح؟",
        "options": [
          { "text": "أ) −187500 J", "isCorrect": true },
          { "text": "ب) −150000 J", "isCorrect": false },
          { "text": "ج) −200000 J", "isCorrect": false },
          { "text": "د) −100000 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! W = −187500 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) −187500 J  ✅ (الإجابة الصحيحة)",
      "ب) −150000 J",
      "ج) −200000 J",
      "د) −100000 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 1000 kg, u = 20 m/s, v = 5 m/s",
      "W = ΔEk = ½m(v² − u²)",
      "W = ½×1000×(25 − 400)",
      "W = 500 × (−375) = −187500 J",
      "",
      "الإجابة: أ) −187500 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) −187500 J ✅"
  },
{
    "title": "مسألة 38 (شغل وطاقة): الشغل على مستوى مائل أملس",
    "text": "يُسحب صندوق كتلته 20 kg إلى أعلى مستوى مائل أملس يميل على الأفقي بزاوية 30° مسافة 5 m بسرعة ثابتة بواسطة حبل موازٍ للمستوى. احسب الشغل المبذول بواسطة قوة الشد في الحبل.\n\nأ) 250 J\nب) 500 J\nج) 750 J\nد) 1000 J",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> T = mg·sinθ (سرعة ثابتة ← T = W_x)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            T = 20×10×sin30° = 100 N → W = T×s = 100×5 = 500 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو الشغل المبذول بواسطة قوة الشد؟",
        "options": [
          { "text": "أ) 250 J", "isCorrect": false },
          { "text": "ب) 500 J", "isCorrect": true },
          { "text": "ج) 750 J", "isCorrect": false },
          { "text": "د) 1000 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! W = 500 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 250 J",
      "ب) 500 J  ✅ (الإجابة الصحيحة)",
      "ج) 750 J",
      "د) 1000 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 20 kg, θ = 30°, s = 5 m, g = 10 m/s²",
      "سرعة ثابتة ← T = mg·sinθ",
      "T = 20×10×0.5 = 100 N",
      "W = T×s = 100×5 = 500 J",
      "",
      "الإجابة: ب) 500 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 500 J ✅"
  },
    {
    "title": "س 40 (شغل وطاقة - صح/خطأ): وحدة القدرة",
    "text": "وحدة قياس القدرة في النظام الدولي (SI) هي الوات (W) وهي تكافئ جول على الثانية (J/s).\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 P = W/t → وحدة القدرة = J/s = W (وات)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل الوات = جول/ثانية؟",
        "options": [
          { "text": "أ) صح", "isCorrect": true },
          { "text": "ب) خطأ", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! 1 W = 1 J/s"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح  ✅ (الإجابة الصحيحة)",
      "ب) خطأ",
      "",
      "══════════════ التوضيح ══════════════",
      "P = W/t",
      "وحدة القدرة = جول/ثانية = وات (W)",
      "",
      "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
  },

// س3 - طاقة الحركة والسرعة
{
    "title": "س 41 (شغل وطاقة - صح/خطأ): طاقة الحركة والسرعة",
    "text": "طاقة الحركة لجسم تتناسب عكسياً مع مربع سرعته.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 Ek = ½mv² → تتناسب طردياً مع مربع السرعة (وليس عكسياً)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل تتناسب طاقة الحركة عكسياً مع مربع السرعة؟",
        "options": [
          { "text": "أ) صح", "isCorrect": false },
          { "text": "ب) خطأ", "isCorrect": true }
        ],
        "feedback": "✅ صحيح! Ek = ½mv² → تتناسب طردياً مع v²"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح",
      "ب) خطأ  ✅ (الإجابة الصحيحة)",
      "",
      "══════════════ التوضيح ══════════════",
      "Ek = ½mv²",
      "طاقة الحركة تتناسب طردياً مع مربع السرعة",
      "",
      "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
  },
  {
    "title": "س 42 (شغل وطاقة): القدرة في الرفع الرأسي",
    "text": "يرفع محرك كهربائي كتلة مقدارها (200 kg) رأسياً إلى أعلى بسرعة ثابتة مقدارها (3 m/s)، فإن القدرة التي يبذلها المحرك تساوي:\n\nأ) 600 W\nب) 2000 W\nج) 6000 W\nد) 600 kW",
    "options": [],
    "correctAnswerIndex": 2,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> P = F·v ، والسرعة ثابتة ← F = mg\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            F = 200×10 = 2000 N → P = 2000×3 = 6000 W\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي القدرة التي يبذلها المحرك؟",
        "options": [
          { "text": "أ) 600 W", "isCorrect": false },
          { "text": "ب) 2000 W", "isCorrect": false },
          { "text": "ج) 6000 W", "isCorrect": true },
          { "text": "د) 600 kW", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! P = 6000 W"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 600 W",
      "ب) 2000 W",
      "ج) 6000 W  ✅ (الإجابة الصحيحة)",
      "د) 600 kW",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 200 kg, v = 3 m/s, g = 10 m/s²",
      "السرعة ثابتة ← F = mg = 200×10 = 2000 N",
      "P = F×v = 2000×3 = 6000 W",
      "",
      "الإجابة: ج) 6000 W ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 6000 W ✅"
  },


  {
    "title": "س 43 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "سيارة كتلتها (1200 kg) تتحرك بسرعة (20 m/s)، إذا ضغط السائق على الكوابح (الفرامل) فتوقفت السيارة تماماً بعد مسافة معينة، فإن التغير في طاقة حركة السيارة يساوي:\n\nأ) −1.2×10⁵ J\nب) −2.4×10⁵ J\nج) 2.4×10⁵ J\nد) −4.8×10⁴ J",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> ΔEk = ½m(v²−u²) = −½mu²\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            ΔEk = −½×1200×20² = −2.4×10⁵ J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو التغير في طاقة الحركة؟",
        "options": [
          { "text": "أ) −1.2×10⁵ J", "isCorrect": false },
          { "text": "ب) −2.4×10⁵ J", "isCorrect": true },
          { "text": "ج) 2.4×10⁵ J", "isCorrect": false },
          { "text": "د) −4.8×10⁴ J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! ΔEk = −2.4×10⁵ J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) −1.2×10⁵ J",
      "ب) −2.4×10⁵ J  ✅ (الإجابة الصحيحة)",
      "ج) 2.4×10⁵ J",
      "د) −4.8×10⁴ J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 1200 kg, u = 20 m/s, v = 0",
      "ΔEk = ½m(v²−u²) = −½mu²",
      "ΔEk = −½×1200×20² = −600×400 = −240,000 J",
      "ΔEk = −2.4×10⁵ J",
      "",
      "الإجابة: ب) −2.4×10⁵ J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) −2.4×10⁵ J ✅"
  },
{
    "title": "س 44 (شغل وطاقة): الشغل الكلي مع احتكاك",
    "text": "صندوق كتلته (50 kg) يستقر على أرضية أفقية، سُحب الصندوق بقوة أفقية مقدارها (150 N) لمسافة (8 m)، فإذا كانت قوة الاحتكاك بين الصندوق والأرض تساوي (50 N)، فإن الشغل الكلي المبذول على الصندوق يساوي:\n\nأ) 1200 J\nب) 400 J\nج) 800 J\nد) 1600 J",
    "options": [],
    "correctAnswerIndex": 2,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> W_total = (F − f) × s\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            F_net = 150 − 50 = 100 N → W = 100×8 = 800 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو الشغل الكلي المبذول؟",
        "options": [
          { "text": "أ) 1200 J", "isCorrect": false },
          { "text": "ب) 400 J", "isCorrect": false },
          { "text": "ج) 800 J", "isCorrect": true },
          { "text": "د) 1600 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! W_total = 800 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 1200 J",
      "ب) 400 J",
      "ج) 800 J  ✅ (الإجابة الصحيحة)",
      "د) 1600 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: F = 150 N, f = 50 N, s = 8 m",
      "F_net = F − f = 150 − 50 = 100 N",
      "W_total = F_net × s = 100 × 8 = 800 J",
      "",
      "الإجابة: ج) 800 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 800 J ✅"
  },
// ============================================================
  {
    "title": "س 46 (شغل وطاقة - مزاوجة): الشغل المبذول في وحدة الزمن",
    "text": "الشغل المبذول في وحدة الزمن يُسمى:\n\nأ) الطاقة\nب) العزم\nج) القدرة\nد) الكفاءة",
    "options": [],
    "correctAnswerIndex": 2,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 الشغل/الزمن = القدرة (P = W/t)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو الشغل المبذول في وحدة الزمن؟",
        "options": [
          { "text": "أ) الطاقة", "isCorrect": false },
          { "text": "ب) العزم", "isCorrect": false },
          { "text": "ج) القدرة", "isCorrect": true },
          { "text": "د) الكفاءة", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! القدرة = الشغل/الزمن"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) الطاقة",
      "ب) العزم",
      "ج) القدرة  ✅ (الإجابة الصحيحة)",
      "د) الكفاءة",
      "",
      "══════════════ التوضيح ══════════════",
      "P = W/t (القدرة = الشغل/الزمن)",
      "",
      "الإجابة: ج) القدرة ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) القدرة ✅"
  },
// س10 - المعدل الزمني لتحول الطاقة
{
    "title": "س 48 (شغل وطاقة - مزاوجة): المعدل الزمني لتحول الطاقة",
    "text": "المعدل الزمني لتحول الطاقة يُسمى:\n\nأ) القدرة\nب) الشغل\nج) العزم\nد) الكفاءة",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 معدل تحول الطاقة = القدرة (P)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو المعدل الزمني لتحول الطاقة؟",
        "options": [
          { "text": "أ) القدرة", "isCorrect": true },
          { "text": "ب) الشغل", "isCorrect": false },
          { "text": "ج) العزم", "isCorrect": false },
          { "text": "د) الكفاءة", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! القدرة = معدل تحول الطاقة"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) القدرة  ✅ (الإجابة الصحيحة)",
      "ب) الشغل",
      "ج) العزم",
      "د) الكفاءة",
      "",
      "══════════════ التوضيح ══════════════",
      "القدرة = معدل تحول الطاقة = الطاقة/الزمن",
      "",
      "الإجابة: أ) القدرة ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) القدرة ✅"
  },
// س11 - حاصل ضرب القوة في الإزاحة
{
    "title": "س 49 (شغل وطاقة - مزاوجة): الشغل الميكانيكي",
    "text": "حاصل ضرب القوة في الإزاحة في اتجاهها يُسمى:\n\nأ) العزم\nب) الشغل الميكانيكي\nج) القدرة\nد) الدفع",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 F × s = الشغل الميكانيكي (W)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو حاصل ضرب القوة في الإزاحة في اتجاهها؟",
        "options": [
          { "text": "أ) العزم", "isCorrect": false },
          { "text": "ب) الشغل الميكانيكي", "isCorrect": true },
          { "text": "ج) القدرة", "isCorrect": false },
          { "text": "د) الدفع", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! W = F × s = الشغل الميكانيكي"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) العزم",
      "ب) الشغل الميكانيكي  ✅ (الإجابة الصحيحة)",
      "ج) القدرة",
      "د) الدفع",
      "",
      "══════════════ التوضيح ══════════════",
      "W = F × s (الشغل = القوة × الإزاحة في اتجاهها)",
      "",
      "الإجابة: ب) الشغل الميكانيكي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) الشغل الميكانيكي ✅"
  },
// س18 - القدرة والقوة
{
    "title": "س 69 (شغل وطاقة - صح/خطأ): القدرة والقوة",
    "text": "إذا كان الجسم يتحرك بسرعة (v) تحت تأثير القوة (F) فإن القدرة تكون (Fv)",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 P = W/t = (F×s)/t = F×v
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل القدرة P = Fv؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! P = W/t = (F×s)/t = F×v"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅ (الإجابة الصحيحة)",
        "ب) خطأ",
        "",
        "══════════════ التلميح ══════════════",
        "💡 P = F×v (القدرة = القوة × السرعة)",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},
// س28 - وحدة الشغل
{
    "title": "س 72 (شغل وطاقة): وحدة الشغل",
    "text": "يقاس الشغل بوحدة:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 W = F × s → وحدة الشغل = N·m = J (جول)
    </div>`,
    "options": [
        { "text": "أ) الجول", "isCorrect": false },
        { "text": "ب) وات", "isCorrect": false },
        { "text": "ج) نيوتن.متر", "isCorrect": false },
        { "text": "د) الإجابتان أ، ج صحيحتان", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي وحدة الشغل؟",
            "options": [
                { "text": "أ) الجول", "isCorrect": false },
                { "text": "ب) وات", "isCorrect": false },
                { "text": "ج) نيوتن.متر", "isCorrect": false },
                { "text": "د) الإجابتان أ، ج صحيحتان", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! الجول = نيوتن.متر"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) الجول",
        "ب) وات",
        "ج) نيوتن.متر",
        "د) الإجابتان أ، ج صحيحتان  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 W = F × s → N·m = J",
        "",
        "الإجابة: د) الإجابتان أ، ج صحيحتان ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) الإجابتان أ، ج صحيحتان ✅"
},
// س29 - القيم التي لا تساوي صفر
{
    "title": "س 73 (شغل وطاقة): القيم التي لا تساوي صفر",
    "text": "أحد القيم التالية لا تساوي صفر:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 الخيارات أ، ب: W = 0 (لأن θ = 90°)
        💡 الخيار ج: v = 0 (عند أقصى ارتفاع)
        📌 الخيار د: v ≠ 0 (تصل لأقصى قيمة)
    </div>`,
    "options": [
        { "text": "أ) الشغل المبذول بواسطة قوة عمودية على اتجاه الحركة", "isCorrect": false },
        { "text": "ب) الشغل المبذول بواسطة قوة الجاذبية على قمر صناعي يدور في مدار دائري", "isCorrect": false },
        { "text": "ج) سرعة جسم مقذوف إلى أعلى عند أقصى ارتفاع", "isCorrect": false },
        { "text": "د) سرعة جسم عند وصوله للأرض إذا سقط سقوطاً حراً", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي من القيم التالية لا تساوي صفر؟",
            "options": [
                { "text": "أ) الشغل المبذول بواسطة قوة عمودية على اتجاه الحركة", "isCorrect": false },
                { "text": "ب) الشغل المبذول بواسطة قوة الجاذبية على قمر صناعي يدور في مدار دائري", "isCorrect": false },
                { "text": "ج) سرعة جسم مقذوف إلى أعلى عند أقصى ارتفاع", "isCorrect": false },
                { "text": "د) سرعة جسم عند وصوله للأرض إذا سقط سقوطاً حراً", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! سرعة الجسم لحظة وصوله للأرض هي أقصى قيمة (≠ 0)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) W = F·s·cos90° = 0",
        "ب) القوة عمودية على الإزاحة → W = 0",
        "ج) عند أقصى ارتفاع v = 0",
        "د) سرعة عند وصوله للأرض  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "📌 الخيار د: v ≠ 0 (تصل لأقصى قيمة)",
        "",
        "الإجابة: د) سرعة جسم عند وصوله للأرض ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) سرعة جسم عند وصوله للأرض ✅"
},

// مسألة الشغل على سطح خشن
{
    "title": "مسألة إضافية (شغل وطاقة): دفع صندوق على سطح خشن 74-",
    "text": "يدفع عامل صندوقاً كتلته (40 kg) مسافة (10 m) على سطح أفقي خشن بمعامل احتكاك (μ = 0.25) بسرعة ثابتة. احسب الشغل المبذول بواسطة العامل.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> W = F × s ، والسرعة ثابتة → F = f
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            f = μmg = 0.25×40×10 = 100 N → W = 100×10 = 1000 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 500 J", "isCorrect": false },
        { "text": "ب) 1000 J", "isCorrect": true },
        { "text": "ج) 1500 J", "isCorrect": false },
        { "text": "د) 2000 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الشغل المبذول بواسطة العامل؟",
            "options": [
                { "text": "أ) 500 J", "isCorrect": false },
                { "text": "ب) 1000 J", "isCorrect": true },
                { "text": "ج) 1500 J", "isCorrect": false },
                { "text": "د) 2000 J", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! W = 1000 J = 1 kJ"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 500 J",
        "ب) 1000 J  ✅ (الإجابة الصحيحة)",
        "ج) 1500 J",
        "د) 2000 J",
        "",
        "══════════════ الحل ══════════════",
        "سرعة ثابتة → F = f",
        "f = μmg = 0.25×40×10 = 100 N",
        "W = F×s = 100×10 = 1000 J",
        "",
        "الإجابة: ب) 1000 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 1000 J ✅"
},


]