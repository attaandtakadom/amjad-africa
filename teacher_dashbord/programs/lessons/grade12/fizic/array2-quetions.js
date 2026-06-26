const questionsMatrix = [
  {
  "title": "س 18 (2022-2023): حساب التيار في مقاومة",
  "text": "من الشكل التالي، إذا كان فرق الجهد بين النقطتين (A, B) يساوي 60 V، فإن شدة التيار المار في المقاومة (6Ω) تساوي:",
  "options": [
    { "text": "أ) 1/2 أمبير", "isCorrect": false },
    { "text": "ب) 1/3 أمبير", "isCorrect": true },
    { "text": "ج) 4 أمبير", "isCorrect": false },
    { "text": "د) 3 أمبير", "isCorrect": false }
  ],
  "correctAnswerIndex": 1,
  "svgCode": `<svg width='800' height='250' viewBox='0 0 800 250' xmlns='http://www.w3.org/2000/svg'>
  <style>
    .wire { stroke:#000; stroke-width:3; fill:none; }
    .res { fill:white; stroke:#000; stroke-width:2; }
    .txt { font-size:24px; font-family:Arial; }
  </style>
  <!-- A -->
  <circle cx='60' cy='100' r='4' fill='black'/>
  <text x='45' y='90' class='txt'>A</text>
  <!-- سلك رئيسي -->
  <line x1='60' y1='100' x2='120' y2='100' class='wire'/>
  <!-- فرع التوازي -->
  <line x1='120' y1='100' x2='120' y2='50' class='wire'/>
  <line x1='120' y1='100' x2='120' y2='150' class='wire'/>
  <!-- 3Ω -->
  <rect x='160' y='35' width='80' height='30' class='res'/>
  <text x='185' y='28' class='txt'>3Ω</text>
  <!-- 6Ω -->
  <rect x='160' y='135' width='80' height='30' class='res'/>
  <text x='185' y='190' class='txt'>6Ω</text>
  <!-- توصيل التوازي -->
  <line x1='120' y1='50' x2='160' y2='50' class='wire'/>
  <line x1='240' y1='50' x2='280' y2='50' class='wire'/>
  <line x1='120' y1='150' x2='160' y2='150' class='wire'/>
  <line x1='240' y1='150' x2='280' y2='150' class='wire'/>
  <line x1='280' y1='50' x2='280' y2='150' class='wire'/>
  <!-- توصيل بعد التوازي -->
  <line x1='280' y1='100' x2='280' y2='50' class='wire'/>
  <line x1='280' y1='100' x2='360' y2='100' class='wire'/>
  <!-- 18Ω -->
  <rect x='360' y='85' width='90' height='30' class='res'/>
  <text x='385' y='78' class='txt'>18Ω</text>
  <line x1='450' y1='100' x2='520' y2='100' class='wire'/>
  <!-- نقطة نزول الفرع السفلي -->
  <line x1='520' y1='100' x2='520' y2='170' class='wire'/>
  <!-- 8Ω -->
  <rect x='520' y='85' width='90' height='30' class='res'/>
  <text x='550' y='78' class='txt'>8Ω</text>
  <line x1='610' y1='100' x2='700' y2='100' class='wire'/>
  <!-- B -->
  <circle cx='700' cy='100' r='4' fill='black'/>
  <text x='710' y='90' class='txt'>B</text>
  <!-- الفرع السفلي -->
  <line x1='120' y1='100' x2='120' y2='170' class='wire'/>
  <line x1='120' y1='170' x2='250' y2='170' class='wire'/>
  <!-- 5Ω -->
  <rect x='250' y='155' width='90' height='30' class='res'/>
  <text x='280' y='210' class='txt'>5Ω</text>
  <line x1='340' y1='170' x2='520' y2='170' class='wire'/>
</svg>`,
  "steps": [
    {
      "title": "الخطوة 1: حساب مكافئة التوازي (3Ω و 6Ω)",
      "question": "ما هي المقاومة المكافئة للمقاومتين 3Ω و 6Ω عند توصيلهما على التوازي؟",
      "options": [
        { "text": "أ) 9Ω", "isCorrect": false },
        { "text": "ب) 2Ω", "isCorrect": true },
        { "text": "ج) 18Ω", "isCorrect": false },
        { "text": "د) 0.5Ω", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! Rₚ = (3×6)/(3+6) = 18/9 = 2Ω"
    },
    {
      "title": "الخطوة 2: حساب مقاومة الفرع العلوي",
      "question": "الفرع العلوي يتكون من مكافئة التوازي (2Ω) على التوالي مع 18Ω. ما هي مقاومة الفرع العلوي الكلية؟",
      "options": [
        { "text": "أ) 20Ω", "isCorrect": true },
        { "text": "ب) 36Ω", "isCorrect": false },
        { "text": "ج) 9Ω", "isCorrect": false },
        { "text": "د) 16Ω", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! R_upper = 2 + 18 = 20Ω"
    },
    {
      "title": "الخطوة 3: حساب المقاومة المكافئة الكلية",
      "question": "المقاومة المكافئة للفرعين (العلوي 20Ω والسفلي 5Ω) على التوازي، ثم على التوالي مع 8Ω، فما هي المقاومة الكلية؟",
      "options": [
        { "text": "أ) 12Ω", "isCorrect": true },
        { "text": "ب) 33Ω", "isCorrect": false },
        { "text": "ج) 4Ω", "isCorrect": false },
        { "text": "د) 8Ω", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! R_parallel = (20×5)/(20+5) = 4Ω، ثم R_eq = 4 + 8 = 12Ω"
    },
    {
      "title": "الخطوة 4: حساب التيار الكلي",
      "question": "باستخدام قانون أوم، ما هو التيار الكلي المار في الدائرة إذا كان V = 60V و R_eq = 12Ω؟",
      "options": [
        { "text": "أ) 5A", "isCorrect": true },
        { "text": "ب) 0.2A", "isCorrect": false },
        { "text": "ج) 3A", "isCorrect": false },
        { "text": "د) 10A", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! I = V/R = 60/12 = 5A"
    },
    {
      "title": "الخطوة 5: حساب التيار في المقاومة 6Ω",
      "question": "ما هو التيار المار في المقاومة 6Ω؟",
      "options": [
        { "text": "أ) 1/2 A", "isCorrect": false },
        { "text": "ب) 1/3 A", "isCorrect": true },
        { "text": "ج) 4 A", "isCorrect": false },
        { "text": "د) 3 A", "isCorrect": false }
      ],
      "feedback": "✅ صحيح! I₆Ω = 2/6 = 1/3 A"
    }
  ],
  "pdfSolutionSteps": [
    "═══════════════════════════════════════",
    "🔹 السؤال: حساب التيار في المقاومة 6Ω",
    "═══════════════════════════════════════",
    "",
    "المعطيات:",
    "• V_AB = 60 V",
    "• المقاومات: 3Ω، 6Ω (توازي)، 18Ω، 5Ω، 8Ω",
    "",
    "❶ مكافئة التوازي (3Ω و 6Ω):",
    "   Rₚ = (3×6)/(3+6) = 18/9 = 2Ω",
    "",
    "❷ مقاومة الفرع العلوي:",
    "   R_upper = 2 + 18 = 20Ω",
    "",
    "❸ المقاومة المكافئة للتوازي الرئيسي:",
    "   R_parallel = (20×5)/(20+5) = 100/25 = 4Ω",
    "",
    "❹ المقاومة الكلية:",
    "   R_eq = 4 + 8 = 12Ω",
    "",
    "❺ التيار الكلي:",
    "   I_total = V/R_eq = 60/12 = 5A",
    "",
    "❻ جهد التوازي الرئيسي:",
    "   V_parallel = I_total × R_parallel = 5 × 4 = 20V",
    "",
    "❼ تيار الفرع العلوي:",
    "   I_upper = V_parallel / R_upper = 20/20 = 1A",
    "",
    "❽ جهد التوازي الصغير:",
    "   V_small = I_upper × Rₚ = 1 × 2 = 2V",
    "",
    "❾ تيار المقاومة 6Ω:",
    "   I₆Ω = V_small / 6 = 2/6 = 1/3 A",
    "",
    "═══════════════════════════════════════",
    "✅ الإجابة النهائية: 1/3 أمبير (الخيار ب)",
    "═══════════════════════════════════════"
  ],
  "pdfFinalAnswer": "الإجابة: ب) 1/3 أمبير ✅"
},
{
    "title": "س 1 (2022-2023): عدد الإلكترونات المارة في موصل",
    "text": "عدد الإلكترونات التي تعبر مقطع موصل في زمن قدره (0.03 μs) عندما تكون شدة التيار الكهربائي المارة فيه (2 mA) تساوي (375×10⁶) إلكترون. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>القانون:</strong> n = (I × t) / e
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            I = 2×10⁻³ A, t = 0.03×10⁻⁶ s, e = 1.6×10⁻¹⁹ C
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            n = (2×10⁻³ × 0.03×10⁻⁶) / (1.6×10⁻¹⁹) = 3.75×10⁸ = 375×10⁶ ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ الحل ══════════════",
        "I = 2 mA = 2×10⁻³ A",
        "t = 0.03 μs = 0.03×10⁻⁶ s",
        "e = 1.6×10⁻¹⁹ C",
        "n = (I × t) / e = (2×10⁻³ × 0.03×10⁻⁶) / (1.6×10⁻¹⁹)",
        "n = 3.75×10⁸ = 375×10⁶ إلكترون",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 2 - توصيل موصل مشحون بالأرض
// ============================================================
{
    "title": "س 2 (2022-2023): توصيل موصل مشحون بالأرض",
    "text": "عند توصيل موصل مشحون بشحنة موجبة بالأرض تنتقل الشحنات الموجبة من الموصل إلى الأرض. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>المبدأ:</strong> الشحنات الموجبة لا تنتقل في الموصلات
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الذي ينتقل:</strong> الإلكترونات (الشحنات السالبة)
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإلكترونات تنتقل من الأرض ← إلى الموصل
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• الموصلات تتحرك فيها الإلكترونات (سالبة) وليس الموجبة.",
        "• عندما يكون الموصل موجباً، يجذب الإلكترونات من الأرض.",
        "• تنتقل الإلكترونات من الأرض إلى الموصل.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 3 - توصيل مقاومتين على التوازي
// ============================================================
{
    "title": "س 3 (2022-2023): توصيل مقاومتين على التوازي",
    "text": "إذا وصلت مقاومتان في دائرة كهربائية وكانت قيمة التيار في فرع المقاومة الأولى ضعف قيمته في فرع المقاومة الثانية، فإن جهد المقاومة الثانية يساوي جهد المقاومة الأولى. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>خاصية التوازي:</strong> الجهد متساوٍ على جميع الفروع
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            V₁ = V₂ (بغض النظر عن قيمة التيار)
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• التيار توزع على فرعين → مقاومتان على التوازي.",
        "• في التوازي، الجهد ثابت ومتساوي على جميع الفروع.",
        "• V₁ = V₂ بغض النظر عن قيم التيار.",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 4 - فتيل المصباح الكهربائي
// ============================================================
{
    "title": "س 4 (2022-2023): فتيل المصباح الكهربائي",
    "text": "يصنع سلك الفتيل في المصباح الكهربائي من التنجستين لمقاومته العالية ودرجة انصهاره المنخفضة. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>خاصية التنجستين:</strong> مقاومة عالية + درجة انصهار عالية
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ (درجة الانصهار عالية وليست منخفضة)
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• التنجستين مقاومة عالية (ينتج حرارة وتوهج).",
        "• التنجستين درجة انصهار عالية جداً (تتجاوز 3400°C).",
        "• يمنع الفتيل من الانصهار عند التوهج.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 5 - المقاومة الضوئية (LDR)
// ============================================================
{
    "title": "س 5 (2022-2023): المقاومة الضوئية (LDR)",
    "text": "تزداد قيمة المقاومة المعتمدة على الضوء (LDR) مع زيادة كمية الضوء المشع عليها. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>سلوك LDR:</strong> علاقة عكسية مع الضوء
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            زيادة الضوء ← تقل المقاومة
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ (العلاقة عكسية)
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• LDR تعمل عكسياً (علاقة عكسية).",
        "• زيادة الضوء ← تقل المقاومة (تزداد الموصيلية).",
        "• في الظلام ← تزداد المقاومة.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 6 - مقاومة الجلد الرطب
// ============================================================
{
    "title": "س 6 (2022-2023): مقاومة الجلد الرطب",
    "text": "تكون مقاومة الجلد الرطب حوالي (100 kΩ) ويفسر ذلك عمل الجلد في هذه الحالة كطبقة عازلة لمرور التيار الكهربائي للجسم. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الجلد الجاف:</strong> ≈ 100 kΩ (عازل)
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الجلد الرطب:</strong> ≈ 1 kΩ (موصل)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ (الرطب موصل وليس عازلاً)
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• الجلد الجاف: عالي (≈100 kΩ) ← عازل.",
        "• الجلد الرطب: منخفض (≈1 kΩ) ← موصل.",
        "• الجلد الرطب يزيد خطورة الصعق.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 7 - الكابلات السميكة وتقليل الفقد
// ============================================================
{
    "title": "س 7 (2022-2023): الكابلات السميكة وتقليل الفقد",
    "text": "تستخدم الكابلات السميكة لتقليل القدرة الكهربائية المفقودة في المحولات الكهربائية. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>القانون:</strong> R = ρL/A
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            زيادة السمك ← زيادة A ← تقل R ← يقل الفقد (P = I²R)
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• R = ρL/A (المقاومة تتناسب عكسياً مع مساحة المقطع).",
        "• زيادة السمك → تقل R → يقل الفقد (P = I²R).",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 8 - الاضمحلال الإشعاعي
// ============================================================
{
    "title": "س 8 (2022-2023): الاضمحلال الإشعاعي",
    "text": "تتأثر عملية الاضمحلال الإشعاعي بدرجة الحرارة والتفاعلات الكيميائية. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الاضمحلال الإشعاعي:</strong> ظاهرة نووية تلقائية
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>لا يتأثر</strong> بالحرارة أو التفاعلات الكيميائية
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• الاضمحلال الإشعاعي ظاهرة نووية تلقائية.",
        "• لا يتأثر بالحرارة أو الضغط أو التفاعلات الكيميائية.",
        "• يعتمد على استقرار النواة فقط.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 9 - قطبية الملف اللولبي
// ============================================================
{
    "title": "س 9 (2022-2023): قطبية الملف اللولبي",
    "text": "يكون طرف الملف اللولبي قطباً شمالياً إذا كان التيار يسري في اتجاه عكس عقارب الساعة. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>قاعدة عقارب الساعة:</strong>
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            عكس عقارب الساعة ← قطب شمالي (N)
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• عكس عقارب الساعة ← قطب شمالي (N).",
        "• مع عقارب الساعة ← قطب جنوبي (S).",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 10 - الترسيب الكهروستاتيكي
// ============================================================
{
    "title": "س 10 (2022-2023): الترسيب الكهروستاتيكي",
    "text": "تستخدم تقنية الترسيب الكهروستاتيكي في مصانع الفولاذ والأسمنت والمواد الكيميائية. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الاستخدامات:</strong> مصانع الفولاذ، الأسمنت، المواد الكيميائية
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الهدف:</strong> حماية البيئة من الغبار والملوثات
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• المرسبات الكهروستاتيكية تستخدم في المصانع.",
        "• تجمع جزيئات الغبار والرماد من المداخن.",
        "• تستخدم في: الفولاذ، الأسمنت، المواد الكيميائية.",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 11 - المنطق الرقمي
// ============================================================
{
    "title": "س 11 (2022-2023): المنطق الرقمي",
    "text": "يتضمن الدخل والخرج في المنطق الرقمي مستويين فقط من الجهد الكهربائي. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>النظام الثنائي:</strong> مستويين فقط
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            High (1) و Low (0)
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• الدوائر الرقمية تعتمد على النظام الثنائي.",
        "• مستويين فقط: High (1) و Low (0).",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 12 - حساب الفيض المغناطيسي
// ============================================================
{
    "title": "س 12 (2022-2023): حساب الفيض المغناطيسي",
    "text": "مقدار الفيض الناتج من مجال مغناطيسي شدته (2 T) ويكون عمودياً على ملف مساحته (0.4 m²) يساوي (0.2 Wb). هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>القانون:</strong> Φ = B × A
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            Φ = 2 × 0.4 = 0.8 Wb (وليس 0.2 Wb)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ الحل ══════════════",
        "Φ = B × A = 2 × 0.4 = 0.8 Wb",
        "0.8 Wb ≠ 0.2 Wb",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 13 - تعداد الخلفية في أنبوب جيجر
// ============================================================
{
    "title": "س 13 (2022-2023): تعداد الخلفية في أنبوب جيجر",
    "text": "إشعاع خلفي قد ينتج عن تلوث إشعاعي للكاشف في أنبوب جيجر-مولر أو ما يحيط به يعرف بتعداد الخلفية. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>تعداد الخلفية:</strong> قراءات في غياب المصدر المشع
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الأسباب:</strong> أشعة كونية، تلوث الكاشف، صخور طبيعية
        </div>
        <div style="font-size: 13px; color: #16a34a; margin-top: 6px; background: #f0fdf4; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) صح ✅
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! العبارة صحيحة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅",
        "ب) خطأ",
        "",
        "══════════════ التوضيح ══════════════",
        "• تعداد الخلفية: القراءات في غياب المصدر المشع.",
        "• الأسباب: أشعة كونية، صخور طبيعية، تلوث الكاشف.",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// س 14 - اتجاه المجال الكهربائي
// ============================================================
{
    "title": "س 14 (2022-2023): اتجاه المجال الكهربائي",
    "text": "اتجاه المجال الكهربائي هو اتجاه القوة المؤثرة على شحنة سالبة صغيرة موضوعة فيه. هل هذه العبارة صحيحة أم خاطئة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>تعريف المجال:</strong> اتجاه القوة على شحنة موجبة
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            (وليس سالبة)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: ب) خطأ
        </div>
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العبارة صحيحة أم خاطئة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العبارة خاطئة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅",
        "",
        "══════════════ التوضيح ══════════════",
        "• يُعرّف اتجاه المجال باستخدام شحنة موجبة.",
        "• اتجاه القوة على شحنة موجبة = اتجاه المجال.",
        "• الشحنة السالبة: القوة في عكس اتجاه المجال.",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// ============================================================
// س 15 - حساب البعد عن شحنة نقطية (اختيار من متعدد)
// ============================================================
{
    "title": "س 15 (2022-2023): حساب البعد عن شحنة نقطية",
    "text": "بعد النقطة التي يؤثر بها مجال كهربائي شدته (9 × 10⁴ N/C) عن شحنة موجبة مقدارها (4 μC) يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>القانون:</strong> E = k·Q / r²
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>المطلوب:</strong> r = √(k·Q / E)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            r = √(9×10⁹ × 4×10⁻⁶ / 9×10⁴) = √0.4 = 0.63 m
        </div>
        <div style="font-size: 12px; color: #475569; margin-top: 4px;">
            <strong>ملاحظة:</strong> 4 μC = 4 × 10⁻⁶ C
        </div>
    </div>`,
    "options": [
        { "text": "أ) 0.20 m", "isCorrect": false },
        { "text": "ب) 0.63 m", "isCorrect": true },
        { "text": "ج) 0.1 m", "isCorrect": false },
        { "text": "د) 0.4 m", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو البعد الصحيح للنقطة عن الشحنة؟",
            "options": [
                { "text": "أ) 0.20 m", "isCorrect": false },
                { "text": "ب) 0.63 m", "isCorrect": true },
                { "text": "ج) 0.1 m", "isCorrect": false },
                { "text": "د) 0.4 m", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! الإجابة هي ب) 0.63 m"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 0.20 m",
        "ب) 0.63 m  ✅ (الإجابة الصحيحة)",
        "ج) 0.1 m",
        "د) 0.4 m",
        "",
        "══════════════ الحل ══════════════",
        "E = 9 × 10⁴ N/C",
        "Q = 4 × 10⁻⁶ C",
        "k = 9 × 10⁹ N·m²/C²",
        "r = √(kQ/E) = √(9×10⁹ × 4×10⁻⁶ / 9×10⁴)",
        "r = √0.4 = 0.632 m ≈ 0.63 m",
        "",
        "الإجابة: ب) 0.63 m ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 0.63 m ✅"
},

// ============================================================
// س 16 - التحكم في دائرة كهربائية (اختيار من متعدد)
// ============================================================
{
    "title": "س 16 (2022-2023): التحكم في دائرة كهربائية",
    "text": "للسيطرة على دائرة كهربائية باستخدام دائرة أخرى دون اتصال كهربائي مباشر بينهما نستخدم:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الفكرة:</strong> جهاز يعتمد على التأثير المغناطيسي
        </div>
        <div style="font-size: 13px; color: #475569; line-height: 1.8;">
            <strong>الوظيفة:</strong> يفصل بين دائرتين كهربائيتين (عزل كهربائي)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 6px; background: #fef2f2; padding: 6px 10px; border-radius: 4px;">
            الإجابة: أ) المرحل المغناطيسي البسيط (Relay)
        </div>
    </div>`,
    "options": [
        { "text": "أ) المرحل المغناطيسي البسيط", "isCorrect": true },
        { "text": "ب) مغناطيساً دائماً", "isCorrect": false },
        { "text": "ج) سقاطة الباب المغناطيسية", "isCorrect": false },
        { "text": "د) المفتاح الريشي", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الجهاز المستخدم للتحكم بدائرة كهربائية دون اتصال مباشر؟",
            "options": [
                { "text": "أ) المرحل المغناطيسي البسيط", "isCorrect": true },
                { "text": "ب) مغناطيساً دائماً", "isCorrect": false },
                { "text": "ج) سقاطة الباب المغناطيسية", "isCorrect": false },
                { "text": "د) المفتاح الريشي", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! المرحل المغناطيسي يوفر عزلاً كهربائياً بين الدائرتين."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) المرحل المغناطيسي البسيط  ✅ (الإجابة الصحيحة)",
        "ب) مغناطيساً دائماً",
        "ج) سقاطة الباب المغناطيسية",
        "د) المفتاح الريشي",
        "",
        "══════════════ التوضيح ══════════════",
        "• المرحل (Relay) يعتمد على التأثير المغناطيسي.",
        "• دائرة التحكم (تيار منخفض) تمرر تياراً في ملف يُنتج مجالاً مغناطيسياً.",
        "• المجال يجذب رافعة ميكانيكية تغلق أو تفتح دائرة التشغيل (تيار عالٍ).",
        "• يوفر عزلاً كهربائياً تاماً بين الدائرتين.",
        "",
        "الإجابة: أ) المرحل المغناطيسي البسيط ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) المرحل المغناطيسي البسيط ✅"
}
,
// س 17
{
    "title": "س 17 (2022-2023): السلكان المتوازيان",
    "text": "سلكان متوازيان يمر بهما تيار كهربائي في اتجاهين متعاكسين فإنه:",
    "options": [
        { "text": "أ) تتولد بينهما قوة تجاذب", "isCorrect": false },
        { "text": "ب) تتولد بينهما قوة تنافر", "isCorrect": true },
        { "text": "ج) لا تتولد بينهما أي قوة", "isCorrect": false },
        { "text": "د) لا توجد إجابة", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='160' viewBox='0 0 450 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='160' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>السلكان المتوازيان</text>
        <line x1='100' y1='50' x2='100' y2='130' stroke='#dc2626' stroke-width='4'/>
        <polygon points='100,50 90,65 110,65' fill='#dc2626'/>
        <text x='100' y='145' text-anchor='middle' font-size='11' fill='#dc2626'>I₁</text>
        <line x1='350' y1='50' x2='350' y2='130' stroke='#2563eb' stroke-width='4'/>
        <polygon points='350,130 340,115 360,115' fill='#2563eb'/>
        <text x='350' y='145' text-anchor='middle' font-size='11' fill='#2563eb'>I₂</text>
        <line x1='100' y1='90' x2='350' y2='90' stroke='#f59e0b' stroke-width='2' stroke-dasharray='6,4'/>
        <text x='225' y='85' text-anchor='middle' font-size='12' fill='#d97706'>← ← قوة تنافر → →</text>
        <text x='225' y='155' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ب) قوة تنافر</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "عند مرور تيارين متعاكسين في سلكين متوازيين، ماذا يحدث؟",
            "options": [
                { "text": "أ) تتولد بينهما قوة تجاذب", "isCorrect": false },
                { "text": "ب) تتولد بينهما قوة تنافر", "isCorrect": true },
                { "text": "ج) لا تتولد بينهما أي قوة", "isCorrect": false },
                { "text": "د) لا توجد إجابة", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! التيارات المتعاكسة في سلكين متوازيين تولد قوة تنافر."
        },
        {
            "title": "التفسير العلمي",
            "question": "لماذا تتولد قوة تنافر بين السلكين؟",
            "options": [
                { "text": "تقوية المجال بين السلكين وإضعافه خارجهما", "isCorrect": true },
                { "text": "تقوية المجال خارج السلكين وإضعافه بينهما", "isCorrect": false },
                { "text": "لا يوجد مجال مغناطيسي بينهما", "isCorrect": false }
            ],
            "feedback": "صحيح! التيارات المتعاكسة تقوي المجال بين السلكين وتضعفه خارجهما."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) تتولد بينهما قوة تجاذب",
        "ب) تتولد بينهما قوة تنافر  ✅ (الإجابة الصحيحة)",
        "ج) لا تتولد بينهما أي قوة",
        "د) لا توجد إجابة",
        "",
        "══════════════ التوضيح ══════════════",
        "• عندما يمر تياران في اتجاهين متعاكسين في سلكين متوازيين:",
        "  - المجال المغناطيسي بين السلكين يكون في نفس الاتجاه → يقوى.",
        "  - المجال المغناطيسي خارج السلكين يضعف.",
        "• يتحرك السلكان من منطقة المجال القوي (الداخل) إلى منطقة المجال الأضعف (الخارج).",
        "• مما يولد قوة تنافر بينهما.",
        "",
        "الإجابة: ب) تتولد بينهما قوة تنافر ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) تتولد بينهما قوة تنافر ✅"
},

// س 18
{
    "title": "س 18 (2022-2023): علاج الأورام الإشعاعية",
    "text": "تستخدم في علاج الأورام الإشعاعات المنبعثة من:",
    "options": [
        { "text": "أ) اليود المشع - 131", "isCorrect": false },
        { "text": "ب) الكربون - 14", "isCorrect": false },
        { "text": "ج) الكوبالت - 60", "isCorrect": true },
        { "text": "د) اليورانيوم - 235", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='140' viewBox='0 0 450 140' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='140' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>علاج الأورام الإشعاعية</text>
        <circle cx='150' cy='75' r='30' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/>
        <text x='150' y='72' text-anchor='middle' font-size='12' fill='#991b1b' font-weight='bold'>60Co</text>
        <text x='150' y='90' text-anchor='middle' font-size='10' fill='#991b1b'>كوبالت</text>
        <line x1='180' y1='75' x2='300' y2='75' stroke='#f59e0b' stroke-width='3' stroke-dasharray='8,4'/>
        <text x='240' y='65' text-anchor='middle' font-size='11' fill='#d97706'>أشعة γ</text>
        <text x='240' y='95' text-anchor='middle' font-size='11' fill='#d97706'>عالية الطاقة</text>
        <text x='225' y='135' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) الكوبالت - 60</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي النظائر المشعة يستخدم في علاج الأورام؟",
            "options": [
                { "text": "أ) اليود المشع - 131", "isCorrect": false },
                { "text": "ب) الكربون - 14", "isCorrect": false },
                { "text": "ج) الكوبالت - 60", "isCorrect": true },
                { "text": "د) اليورانيوم - 235", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! الكوبالت - 60 يستخدم في العلاج الإشعاعي للأورام."
        },
        {
            "title": "التفسير العلمي",
            "question": "لماذا يستخدم الكوبالت - 60 في علاج الأورام؟",
            "options": [
                { "text": "لأنه يطلق أشعة غاما عالية النفاذية", "isCorrect": true },
                { "text": "لأنه يطلق أشعة ألفا", "isCorrect": false },
                { "text": "لأنه نظير مستقر", "isCorrect": false }
            ],
            "feedback": "صحيح! الكوبالت - 60 يطلق أشعة غاما (γ) ذات طاقة عالية ونفاذية قوية."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) اليود المشع - 131",
        "ب) الكربون - 14",
        "ج) الكوبالت - 60  ✅ (الإجابة الصحيحة)",
        "د) اليورانيوم - 235",
        "",
        "══════════════ التوضيح ══════════════",
        "• الكوبالت - 60 (60Co) هو نظير مشع يستخدم في العلاج الإشعاعي.",
        "• يطلق أشعة غاما (γ) عالية الطاقة ذات قدرة عالية على النفاذ.",
        "• تستخدم هذه الأشعة لتدمير الخلايا السرطانية واستهداف الأورام الخبيثة بدقة.",
        "",
        "الإجابة: ج) الكوبالت - 60 ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) الكوبالت - 60 ✅"
},

// س 19
{
    "title": "س 19 (2022-2023): حفظ المصادر المشعة",
    "text": "تحفظ المصادر المشعة في حجرات من:",
    "options": [
        { "text": "أ) الألمونيوم وسمكها (5 mm)", "isCorrect": false },
        { "text": "ب) الفولاذ وسمك جدرانها (0.5 m)", "isCorrect": false },
        { "text": "ج) الرصاص وسمك جدرانها (1 m)", "isCorrect": false },
        { "text": "د) الرصاص وسمك جدرانها (2 cm)", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "svgCode": `<svg width='450' height='140' viewBox='0 0 450 140' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='140' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>حفظ المصادر المشعة</text>
        <rect x='100' y='45' width='250' height='55' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='4'/>
        <text x='225' y='67' text-anchor='middle' font-size='13' fill='#1e3a8a' font-weight='bold'>حجرة من الرصاص</text>
        <text x='225' y='87' text-anchor='middle' font-size='12' fill='#1e3a8a'>سمك الجدران 2 cm</text>
        <text x='225' y='135' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) الرصاص وسمك جدرانها (2 cm)</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "كيف تحفظ المصادر المشعة؟",
            "options": [
                { "text": "أ) الألمونيوم وسمكها (5 mm)", "isCorrect": false },
                { "text": "ب) الفولاذ وسمك جدرانها (0.5 m)", "isCorrect": false },
                { "text": "ج) الرصاص وسمك جدرانها (1 m)", "isCorrect": false },
                { "text": "د) الرصاص وسمك جدرانها (2 cm)", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! الرصاص بسمك 2 cm كافٍ لحماية البيئة من الإشعاع."
        },
        {
            "title": "التفسير العلمي",
            "question": "لماذا يستخدم الرصاص في حفظ المصادر المشعة؟",
            "options": [
                { "text": "لكثافته العالية وقدرته على امتصاص الإشعاع", "isCorrect": true },
                { "text": "لأنه رخيص الثمن", "isCorrect": false },
                { "text": "لأنه موصل جيد للكهرباء", "isCorrect": false }
            ],
            "feedback": "صحيح! الرصاص كثافته عالية ورقمه الذري كبير، مما يجعله ممتازاً لامتصاص الإشعاع."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) الألمونيوم وسمكها (5 mm)",
        "ب) الفولاذ وسمك جدرانها (0.5 m)",
        "ج) الرصاص وسمك جدرانها (1 m)",
        "د) الرصاص وسمك جدرانها (2 cm)  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التوضيح ══════════════",
        "• الرصاص هو أفضل مادة للوقاية من الإشعاعات النووية.",
        "• يتميز بكثافة عالية ورقم ذري كبير → قدرة فائقة على امتصاص الإشعاع.",
        "• سمك 2 cm من الرصاص كافٍ لحماية البيئة المحيطة.",
        "",
        "الإجابة: د) الرصاص وسمك جدرانها (2 cm) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) الرصاص وسمك جدرانها (2 cm) ✅"
},

// س 20
{
    "title": "س 20 (2022-2023): التيار في الملف الابتدائي",
    "text": "إذا كان الجهد الكهربائي الداخل إلى الملف الابتدائي (12 V) والجهد الخارج من الملف الثانوي (240 V) وكان التيار المار في الملف الثانوي (0.04 A)، يكون مقدار التيار المار في الملف الابتدائي:",
    "options": [
        { "text": "أ) 0.4 A", "isCorrect": false },
        { "text": "ب) 0.8 A", "isCorrect": true },
        { "text": "ج) 0.2 A", "isCorrect": false },
        { "text": "د) 0.6 A", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='160' viewBox='0 0 450 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='160' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>المحول الكهربائي</text>
        <rect x='60' y='45' width='80' height='60' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='4'/>
        <text x='100' y='65' text-anchor='middle' font-size='11' fill='#1e3a8a' font-weight='bold'>ابتدائي</text>
        <text x='100' y='82' text-anchor='middle' font-size='10' fill='#1e3a8a'>V₁=12V</text>
        <text x='100' y='96' text-anchor='middle' font-size='10' fill='#1e3a8a'>I₁= ?</text>
        <rect x='310' y='45' width='80' height='60' fill='#fef3c7' stroke='#f59e0b' stroke-width='2' rx='4'/>
        <text x='350' y='65' text-anchor='middle' font-size='11' fill='#92400e' font-weight='bold'>ثانوي</text>
        <text x='350' y='82' text-anchor='middle' font-size='10' fill='#92400e'>V₂=240V</text>
        <text x='350' y='96' text-anchor='middle' font-size='10' fill='#92400e'>I₂=0.04A</text>
        <text x='225' y='140' text-anchor='middle' font-size='13' fill='#1e293b'>V₁·I₁ = V₂·I₂ → 12×I₁ = 240×0.04</text>
        <text x='225' y='158' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>I₁ = 0.8 A ✅</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو التيار في الملف الابتدائي؟",
            "options": [
                { "text": "أ) 0.4 A", "isCorrect": false },
                { "text": "ب) 0.8 A", "isCorrect": true },
                { "text": "ج) 0.2 A", "isCorrect": false },
                { "text": "د) 0.6 A", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! I₁ = 0.8 A"
        },
        {
            "title": "قانون المحول",
            "question": "ما هو القانون المستخدم في المحول المثالي؟",
            "options": [
                { "text": "V₁·I₁ = V₂·I₂", "isCorrect": true },
                { "text": "V₁·V₂ = I₁·I₂", "isCorrect": false },
                { "text": "V₁/I₁ = V₂/I₂", "isCorrect": false }
            ],
            "feedback": "صحيح! في المحول المثالي: V₁·I₁ = V₂·I₂ (حفظ القدرة)."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 0.4 A",
        "ب) 0.8 A  ✅ (الإجابة الصحيحة)",
        "ج) 0.2 A",
        "د) 0.6 A",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V₁ = 12 V, V₂ = 240 V, I₂ = 0.04 A",
        "",
        "القانون (المحول المثالي): V₁·I₁ = V₂·I₂",
        "",
        "التعويض: 12 × I₁ = 240 × 0.04",
        "12 × I₁ = 9.6",
        "I₁ = 9.6 / 12 = 0.8 A",
        "",
        "الإجابة: ب) 0.8 A ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 0.8 A ✅"
},

// س 21
{
    "title": "س 21 (2022-2023): تحويل الطاقة",
    "text": "جهاز كهرومغناطيسي يقوم بتحويل الطاقة الميكانيكية إلى طاقة كهربائية:",
    "options": [
        { "text": "أ) المحرك الكهربائي", "isCorrect": false },
        { "text": "ب) المحول الكهربائي", "isCorrect": false },
        { "text": "ج) الحفار الكهربائي", "isCorrect": false },
        { "text": "د) المولد الكهربائي", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "svgCode": `<svg width='450' height='140' viewBox='0 0 450 140' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='140' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>تحويل الطاقة</text>
        <text x='150' y='55' text-anchor='middle' font-size='13' fill='#dc2626' font-weight='bold'>طاقة ميكانيكية</text>
        <line x1='150' y1='65' x2='150' y2='80' stroke='#dc2626' stroke-width='2' marker-end='url(#arrowD)'/>
        <text x='150' y='95' text-anchor='middle' font-size='11' fill='#dc2626'>↓ دوران</text>
        <rect x='170' y='45' width='110' height='50' fill='#fef3c7' stroke='#f59e0b' stroke-width='2' rx='4'/>
        <text x='225' y='65' text-anchor='middle' font-size='12' fill='#92400e' font-weight='bold'>المولد الكهربائي</text>
        <text x='225' y='83' text-anchor='middle' font-size='10' fill='#92400e'>(Generator)</text>
        <text x='300' y='55' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>طاقة كهربائية</text>
        <line x1='280' y1='65' x2='280' y2='80' stroke='#16a34a' stroke-width='2' marker-end='url(#arrowU)'/>
        <text x='300' y='95' text-anchor='middle' font-size='11' fill='#16a34a'>↑ جهد مستحث</text>
        <text x='225' y='135' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) المولد الكهربائي</text>
        <defs>
            <marker id='arrowD' markerWidth='10' markerHeight='7' refX='5' refY='3.5' orient='auto'>
                <polygon points='0 0, 10 3.5, 0 7' fill='#dc2626'/>
            </marker>
            <marker id='arrowU' markerWidth='10' markerHeight='7' refX='5' refY='3.5' orient='auto'>
                <polygon points='0 0, 10 3.5, 0 7' fill='#16a34a'/>
            </marker>
        </defs>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الجهاز الذي يحول الطاقة الميكانيكية إلى كهربائية؟",
            "options": [
                { "text": "أ) المحرك الكهربائي", "isCorrect": false },
                { "text": "ب) المحول الكهربائي", "isCorrect": false },
                { "text": "ج) الحفار الكهربائي", "isCorrect": false },
                { "text": "د) المولد الكهربائي", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! المولد الكهربائي يحول الطاقة الميكانيكية إلى كهربائية."
        },
        {
            "title": "المقارنة",
            "question": "ما هو الفرق بين المولد والمحرك الكهربائي؟",
            "options": [
                { "text": "المولد: ميكانيكي → كهربائي، المحرك: كهربائي → ميكانيكي", "isCorrect": true },
                { "text": "المولد: كهربائي → ميكانيكي، المحرك: ميكانيكي → كهربائي", "isCorrect": false },
                { "text": "كلاهما يحولان الطاقة بنفس الطريقة", "isCorrect": false }
            ],
            "feedback": "صحيح! المولد يحول الميكانيكية إلى كهربائية، والمحرك يعكس ذلك."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) المحرك الكهربائي",
        "ب) المحول الكهربائي",
        "ج) الحفار الكهربائي",
        "د) المولد الكهربائي  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التوضيح ══════════════",
        "• المولد الكهربائي (Generator/Dynamo) يعتمد على ظاهرة الحث الكهرومغناطيسي.",
        "• يحول الطاقة الميكانيكية (دوران الملف) إلى طاقة كهربائية مستحثة.",
        "• عكس المحرك الكهربائي الذي يحول الكهربائية إلى ميكانيكية.",
        "",
        "الإجابة: د) المولد الكهربائي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) المولد الكهربائي ✅"
},

// س 22
{
    "title": "س 22 (2022-2023): شدة المجال المغناطيسي حول سلك",
    "text": "شدة المجال المغناطيسي عند نقطة تبعد (30 mm) عن سلك يحمل تياراً شدته (2 A) تساوي: (μ₀ = 4π × 10⁻⁷ T·m/A)",
    "options": [
        { "text": "أ) 1.33 × 10⁻⁵ T", "isCorrect": true },
        { "text": "ب) 1.33 × 10⁵ T", "isCorrect": false },
        { "text": "ج) 2.4 × 10⁻⁸ T", "isCorrect": false },
        { "text": "د) 2.4 × 10⁸ T", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": `<svg width='450' height='160' viewBox='0 0 450 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='160' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>المجال حول سلك مستقيم</text>
        <circle cx='90' cy='80' r='12' fill='#fee2e2' stroke='#dc2626' stroke-width='2'/>
        <text x='90' y='84' text-anchor='middle' font-size='10' fill='#991b1b' font-weight='bold'>I</text>
        <line x1='102' y1='80' x2='380' y2='80' stroke='#dc2626' stroke-width='2' stroke-dasharray='4,4'/>
        <text x='230' y='65' text-anchor='middle' font-size='12' fill='#dc2626'>r = 30 mm</text>
        <circle cx='340' cy='80' r='5' fill='#3b82f6'/>
        <text x='340' y='100' text-anchor='middle' font-size='10' fill='#3b82f6'>النقطة</text>
        <text x='225' y='140' text-anchor='middle' font-size='13' fill='#1e293b'>B = μ₀·I / (2π·r)</text>
        <text x='225' y='158' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>B = 1.33 × 10⁻⁵ T ✅</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي شدة المجال المغناطيسي عند النقطة؟",
            "options": [
                { "text": "أ) 1.33 × 10⁻⁵ T", "isCorrect": true },
                { "text": "ب) 1.33 × 10⁵ T", "isCorrect": false },
                { "text": "ج) 2.4 × 10⁻⁸ T", "isCorrect": false },
                { "text": "د) 2.4 × 10⁸ T", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! B = 1.33 × 10⁻⁵ T"
        },
        {
            "title": "قانون أمبير",
            "question": "ما هو قانون حساب المجال المغناطيسي لسلك مستقيم طويل؟",
            "options": [
                { "text": "B = μ₀·I / (2π·r)", "isCorrect": true },
                { "text": "B = μ₀·I·r / 2π", "isCorrect": false },
                { "text": "B = 2π·r / (μ₀·I)", "isCorrect": false }
            ],
            "feedback": "صحيح! B = μ₀·I / (2π·r) هو قانون أمبير الدائري للسلك المستقيم."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 1.33 × 10⁻⁵ T  ✅ (الإجابة الصحيحة)",
        "ب) 1.33 × 10⁵ T",
        "ج) 2.4 × 10⁻⁸ T",
        "د) 2.4 × 10⁸ T",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: I = 2 A, r = 30 mm = 30×10⁻³ = 0.03 m, μ₀ = 4π×10⁻⁷ T·m/A",
        "",
        "القانون: B = μ₀·I / (2π·r)",
        "",
        "التعويض:",
        "B = (4π×10⁻⁷ × 2) / (2π × 0.03)",
        "B = (4×10⁻⁷) / (0.03)",
        "B = (4/0.03) × 10⁻⁷",
        "B = 133.33 × 10⁻⁷ = 1.33 × 10⁻⁵ T",
        "",
        "الإجابة: أ) 1.33 × 10⁻⁵ T ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 1.33 × 10⁻⁵ T ✅"
},

// س 23
// س 23
{
    "title": "س 23 (2022-2023): رمز المنصهر",
    "text": "أي من الرموز التالية يمثل رمز المنصهر (الفيوز)؟",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="140" viewBox="0 0 520 140">
        <!-- (أ) البطارية -->
        <line x1="20" y1="50" x2="55" y2="50" stroke="black" stroke-width="2"/>
        <line x1="55" y1="30" x2="55" y2="70" stroke="black" stroke-width="2"/>
        <line x1="70" y1="38" x2="70" y2="62" stroke="black" stroke-width="2"/>
        <line x1="70" y1="50" x2="105" y2="50" stroke="black" stroke-width="2"/>
        <text x="62" y="108" text-anchor="middle" font-size="14" font-weight="bold">أ - بطارية</text>

        <!-- (ب) المقاومة -->
        <line x1="140" y1="50" x2="170" y2="50" stroke="black" stroke-width="2"/>
        <rect x="170" y="38" width="60" height="24"
              fill="white" stroke="black" stroke-width="2"/>
        <line x1="230" y1="50" x2="260" y2="50" stroke="black" stroke-width="2"/>
        <text x="200" y="108" text-anchor="middle" font-size="14" font-weight="bold">ب - مقاومة</text>

        <!-- (ج) المصهر (الإجابة الصحيحة) -->
        <line x1="290" y1="50" x2="320" y2="50" stroke="black" stroke-width="2"/>
        <rect x="320" y="38" width="60" height="24"
              fill="white" stroke="black" stroke-width="2"/>
        <line x1="330" y1="50" x2="370" y2="50" stroke="black" stroke-width="1.5"/>
        <line x1="380" y1="50" x2="410" y2="50" stroke="black" stroke-width="2"/>
        <text x="350" y="108" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">ج - مصهر ✅</text>

        <!-- (د) المصباح -->
        <line x1="430" y1="50" x2="450" y2="50" stroke="black" stroke-width="2"/>
        <circle cx="480" cy="50" r="20"
                fill="white" stroke="black" stroke-width="2"/>
        <line x1="468" y1="38" x2="492" y2="62"
              stroke="black" stroke-width="2"/>
        <line x1="492" y1="38" x2="468" y2="62"
              stroke="black" stroke-width="2"/>
        <line x1="500" y1="50" x2="520" y2="50" stroke="black" stroke-width="2"/>
        <text x="480" y="108" text-anchor="middle" font-size="14" font-weight="bold">د - مصباح</text>

        <!-- عنوان -->
        <text x="260" y="25" text-anchor="middle" font-size="15" font-weight="bold" fill="#1e293b">أي من الرموز التالية يمثل رمز المنصهر؟</text>
    </svg>`,
    "options": [
        { "text": "أ) بطارية", "isCorrect": false },
        { "text": "ب) مقاومة", "isCorrect": false },
        { "text": "ج) مصهر (فيوز)", "isCorrect": true },
        { "text": "د) مصباح", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي من الرموز التالية يمثل رمز المنصهر (الفيوز)؟",
            "options": [
                { "text": "أ) بطارية", "isCorrect": false },
                { "text": "ب) مقاومة", "isCorrect": false },
                { "text": "ج) مصهر (فيوز)", "isCorrect": true },
                { "text": "د) مصباح", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! المنصهر يرمز له بمستطيل يمر عبره خط مستقيم في المنتصف."
        },
        {
            "title": "التعرف على الرموز",
            "question": "ما هو رمز المقاومة الكهربائية؟",
            "options": [
                { "text": "مستطيل", "isCorrect": true },
                { "text": "خطان متوازيان طويل وقصير", "isCorrect": false },
                { "text": "دائرة بها علامة ×", "isCorrect": false }
            ],
            "feedback": "صحيح! المقاومة ترمز لها بمستطيل."
        },
        {
            "title": "التعرف على رموز أخرى",
            "question": "ما هو رمز المصباح الكهربائي؟",
            "options": [
                { "text": "دائرة بها علامة ×", "isCorrect": true },
                { "text": "مستطيل", "isCorrect": false },
                { "text": "خطان متوازيان طويل وقصير", "isCorrect": false }
            ],
            "feedback": "صحيح! المصباح يرمز له بدائرة بها علامة ×."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) بطارية",
        "ب) مقاومة",
        "ج) مصهر (فيوز)  ✅ (الإجابة الصحيحة)",
        "د) مصباح",
        "",
        "══════════════ التوضيح ══════════════",
        "• الرمز الاصطلاحي القياسي للمنصهر (الفيوز) هو:",
        "  مستطيل أفقي يمر من خلاله سلك مستقيم في المنتصف.",
        "",
        "• رموز العناصر الأخرى:",
        "  - البطارية: خطان متوازيان (طويل وقصير).",
        "  - المقاومة: مستطيل.",
        "  - المصباح: دائرة بها علامة ×.",
        "",
        "الإجابة: ج) مصهر (فيوز) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) مصهر (فيوز) ✅"
},

// س 24
{
    "title": "س 24 (2022-2023): المغناطيس الدائم",
    "text": "ملف لولبي من النحاس الأصفر المعزول ملفوف حول مادة مغناطيسية من الحديد المطاوع يمر به تيار متردد. وللحصول على مغناطيس دائم يلزم:",
    "options": [
        { "text": "أ) تغيير نوع التيار (مستمر) وتغيير المادة المغناطيسية (فولاذ)", "isCorrect": true },
        { "text": "ب) تغيير نوع التيار (مستمر) وبقاء المادة المغناطيسية (حديد مطاوع)", "isCorrect": false },
        { "text": "ج) بقاء نفس التيار (متردد) وتغيير المادة المغناطيسية (فولاذ)", "isCorrect": false },
        { "text": "د) بقاء نفس التيار (متردد) وتغيير المادة المغناطيسية (نيكل)", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": `<svg width='450' height='150' viewBox='0 0 450 150' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='150' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>المغناطيس الدائم</text>
        <rect x='60' y='40' width='100' height='60' fill='#fef3c7' stroke='#f59e0b' stroke-width='2' rx='4'/>
        <text x='110' y='60' text-anchor='middle' font-size='11' fill='#92400e' font-weight='bold'>تيار مستمر</text>
        <text x='110' y='78' text-anchor='middle' font-size='10' fill='#92400e'>DC</text>
        <line x1='160' y1='70' x2='200' y2='70' stroke='#6b7280' stroke-width='2'/>
        <text x='180' y='58' text-anchor='middle' font-size='10' fill='#6b7280'>+</text>
        <rect x='210' y='40' width='100' height='60' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='4'/>
        <text x='260' y='60' text-anchor='middle' font-size='11' fill='#1e3a8a' font-weight='bold'>فولاذ</text>
        <text x='260' y='78' text-anchor='middle' font-size='10' fill='#1e3a8a'>مادة صلبة</text>
        <text x='225' y='135' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: أ) تيار مستمر + فولاذ</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي التغييرات اللازمة للحصول على مغناطيس دائم؟",
            "options": [
                { "text": "أ) تيار مستمر + فولاذ", "isCorrect": true },
                { "text": "ب) تيار مستمر + حديد مطاوع", "isCorrect": false },
                { "text": "ج) تيار متردد + فولاذ", "isCorrect": false },
                { "text": "د) تيار متردد + نيكل", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! المغناطيس الدائم يحتاج تياراً مستمراً ومادة صلبة (فولاذ)."
        },
        {
            "title": "التفسير العلمي",
            "question": "لماذا يستخدم الفولاذ في المغناطيس الدائم؟",
            "options": [
                { "text": "لأنه يحتفظ بالمغناطيسية لفترة طويلة", "isCorrect": true },
                { "text": "لأنه يفقد المغناطيسية بسرعة", "isCorrect": false },
                { "text": "لأنه غير مغناطيسي", "isCorrect": false }
            ],
            "feedback": "صحيح! الفولاذ مادة مغناطيسية صلبة تحتفظ بمغنطتها لفترة طويلة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) تغيير نوع التيار (مستمر) وتغيير المادة المغناطيسية (فولاذ)  ✅ (الإجابة الصحيحة)",
        "ب) تغيير نوع التيار (مستمر) وبقاء المادة المغناطيسية (حديد مطاوع)",
        "ج) بقاء نفس التيار (متردد) وتغيير المادة المغناطيسية (فولاذ)",
        "د) بقاء نفس التيار (متردد) وتغيير المادة المغناطيسية (نيكل)",
        "",
        "══════════════ التوضيح ══════════════",
        "• للحصول على مغناطيس دائم نحتاج إلى:",
        "  1. تيار مستمر (DC) لتوحيد اتجاه المجالات المغناطيسية.",
        "  2. مادة مغناطيسية صلبة (فولاذ) تحتفظ بالمغناطيسية لفترة طويلة.",
        "• الحديد المطاوع مادة لينة تفقد مغنطتها بسرعة (مناسب للمغناطيس المؤقت).",
        "",
        "الإجابة: أ) تغيير نوع التيار (مستمر) وتغيير المادة المغناطيسية (فولاذ) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) تغيير نوع التيار (مستمر) وتغيير المادة المغناطيسية (فولاذ) ✅"
},
{
    "title": "س 25 (2022-2023): تأثير تردد المولد على الجهد",
    "text": "إذا زاد تردد دوران ملف مولد التيار المتردد إلى الضعف دون تغيير عدد اللفات، فإن الجهد المتردد الخارج منه:",
    "svgCode": `<svg width='450' height='180' viewBox='0 0 450 180' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='180' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>مولد التيار المتردد - قانون فاراداي</text>
        <rect x='30' y='40' width='80' height='60' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='4'/>
        <text x='70' y='60' text-anchor='middle' font-size='11' fill='#1e3a8a' font-weight='bold'>ملف</text>
        <text x='70' y='78' text-anchor='middle' font-size='10' fill='#1e3a8a'>N لفة</text>
        <line x1='120' y1='70' x2='200' y2='70' stroke='#dc2626' stroke-width='2' stroke-dasharray='4,4'/>
        <text x='160' y='58' text-anchor='middle' font-size='11' fill='#dc2626'>يدور</text>
        <text x='160' y='85' text-anchor='middle' font-size='11' fill='#dc2626'>f → 2f</text>
        <rect x='210' y='40' width='100' height='60' fill='#fef3c7' stroke='#f59e0b' stroke-width='2' rx='4'/>
        <text x='260' y='60' text-anchor='middle' font-size='11' fill='#92400e' font-weight='bold'>المولد</text>
        <text x='260' y='78' text-anchor='middle' font-size='10' fill='#92400e'>Eemf = -N ΔΦ/Δt</text>
        <line x1='320' y1='70' x2='400' y2='70' stroke='#16a34a' stroke-width='3' marker-end='url(#arrowG)'/>
        <text x='360' y='58' text-anchor='middle' font-size='11' fill='#16a34a'>V</text>
        <text x='360' y='85' text-anchor='middle' font-size='11' fill='#16a34a'>يزداد</text>
        <text x='225' y='140' text-anchor='middle' font-size='13' fill='#1e293b' font-weight='bold'>Eemf ∝ 1/Δt ∝ f → Eemf ∝ f</text>
        <text x='225' y='162' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) يزداد إلى الضعف</text>
        <defs>
            <marker id='arrowG' markerWidth='10' markerHeight='7' refX='10' refY='3.5' orient='auto'>
                <polygon points='0 0, 10 3.5, 0 7' fill='#16a34a'/>
            </marker>
        </defs>
    </svg>`,
    "steps": [
        {
            "title": "قانون فاراداي",
            "question": "ما هو القانون المستخدم لحساب القوة الدافعة الكهربائية المستحثة؟",
            "options": [
                { "text": "Eemf = -N ΔΦ/Δt", "isCorrect": true },
                { "text": "Eemf = -N ΔΦ × Δt", "isCorrect": false },
                { "text": "Eemf = -ΔΦ / (N × Δt)", "isCorrect": false }
            ],
            "feedback": "صحيح! Eemf = -N ΔΦ/Δt هو قانون فاراداي."
        },
        {
            "title": "تأثير التردد على الزمن",
            "question": "إذا زاد تردد دوران الملف إلى الضعف، ماذا يحدث للزمن (Δt)؟",
            "options": [
                { "text": "يقل إلى النصف", "isCorrect": true },
                { "text": "يزداد إلى الضعف", "isCorrect": false },
                { "text": "يظل ثابتاً", "isCorrect": false }
            ],
            "feedback": "صحيح! f → 2f يعني Δt → ½Δt (علاقة عكسية)."
        },
        {
            "title": "تأثير الزمن على الجهد",
            "question": "إذا قل الزمن إلى النصف، ماذا يحدث للجهد (Eemf)؟",
            "options": [
                { "text": "يزداد إلى الضعف", "isCorrect": true },
                { "text": "يقل إلى النصف", "isCorrect": false },
                { "text": "يظل ثابتاً", "isCorrect": false }
            ],
            "feedback": "صحيح! Eemf ∝ 1/Δt → Δt يقل للنصف → Eemf يزداد للضعف."
        }
    ],
    "pdfSolutionSteps": [
        "المعطيات: تردد الملف يتضاعف (2f)، عدد اللفات ثابت (N ثابت)",
        "",
        "القانون (قانون فاراداي): Eemf = -N ΔΦ/Δt",
        "",
        "التحليل:",
        "• عندما يدور الملف داخل المجال المغناطيسي، فإن زيادة تردد الدوران إلى الضعف تعني أن الملف يدور بسرعة أكبر.",
        "• وبالتالي يستغرق نصف الزمن لقطع خطوط الفيض المغناطيسي وعمل دورة كاملة.",
        "• أي أن: Δt₂ = ½ Δt₁ (الزمن يقل إلى النصف)",
        "",
        "النتيجة:",
        "• بما أن الزمن (Δt) موجود في مقام القانون، فإن العلاقة بين الجهد والزمن هي علاقة عكسية.",
        "• ونظراً لأن الزمن قلّ إلى النصف، فإن معدل تغير الفيض المغناطيسي بالنسبة للزمن (ΔΦ/Δt) يزداد إلى الضعف.",
        "• وبالتالي، يزداد الجهد المتردد الخارج (Eemf) إلى الضعف.",
        "",
        "Eemf ∝ 1/Δt ∝ f",
        "f → 2f → Eemf → 2Eemf",
        "",
        "الإجابة: د) يزداد إلى الضعف ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) يزداد إلى الضعف ✅"
},
// س 25


// س 26
// س 26
// س 26
{
    "title": "س 26 (2022-2023): قانون أوم",
    "text": "أي الرسومات التالية تحقق قانون أوم:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 950 280" width="100%" height="100%">
        <rect width="950" height="280" fill="#ffffff"/>
        <defs>
            <marker id="arrow-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 5 L 10 1 L 8 5 L 10 9 z" fill="#333333"/>
            </marker>
        </defs>
        <g transform="translate(10, 10)">
            <rect x="5" y="5" width="215" height="210" rx="6" fill="none" stroke="#bdc3c7" stroke-width="1.5" stroke-dasharray="4"/>
            <line x1="45" y1="170" x2="45" y2="30" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <line x1="45" y1="170" x2="185" y2="170" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="45" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="middle">فرق الجهد</text>
            <text x="190" y="175" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="start">شدة التيار</text>
            <text x="25" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">(أ</text>
            <path d="M 45 170 Q 70 80 170 70" fill="none" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        </g>
        <g transform="translate(245, 10)">
            <rect x="5" y="5" width="215" height="210" rx="6" fill="none" stroke="#bdc3c7" stroke-width="1.5" stroke-dasharray="4"/>
            <line x1="45" y1="170" x2="45" y2="30" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <line x1="45" y1="170" x2="185" y2="170" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="45" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="middle">فرق الجهد</text>
            <text x="190" y="175" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="start">شدة التيار</text>
            <text x="25" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#27ae60" text-anchor="middle">(ب</text>
            <line x1="45" y1="170" x2="160" y2="55" stroke="#27ae60" stroke-width="3.5" stroke-linecap="round"/>
        </g>
        <g transform="translate(480, 10)">
            <rect x="5" y="5" width="215" height="210" rx="6" fill="none" stroke="#bdc3c7" stroke-width="1.5" stroke-dasharray="4"/>
            <line x1="45" y1="170" x2="45" y2="30" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <line x1="45" y1="170" x2="185" y2="170" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="45" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="middle">فرق الجهد</text>
            <text x="190" y="175" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="start">شدة التيار</text>
            <text x="25" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">(ج</text>
            <path d="M 45 170 Q 140 160 160 50" fill="none" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        </g>
        <g transform="translate(715, 10)">
            <rect x="5" y="5" width="215" height="210" rx="6" fill="none" stroke="#bdc3c7" stroke-width="1.5" stroke-dasharray="4"/>
            <line x1="45" y1="170" x2="45" y2="30" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <line x1="45" y1="170" x2="185" y2="170" stroke="#333333" stroke-width="2" marker-end="url(#arrow-axis)"/>
            <text x="45" y="20" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="middle">فرق الجهد</text>
            <text x="190" y="175" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#333333" text-anchor="start">شدة التيار</text>
            <text x="25" y="45" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#2c3e50" text-anchor="middle">(د</text>
            <line x1="45" y1="100" x2="165" y2="100" stroke="#333333" stroke-width="3" stroke-linecap="round"/>
        </g>
    </svg>`,
    "options": [
        { "text": "أ) منحنى تزايدي يقل ميله", "isCorrect": false },
        { "text": "ب) خط مستقيم مائل يمر بنقطة الأصل", "isCorrect": true },
        { "text": "ج) منحنى تزايدي يزداد ميله", "isCorrect": false },
        { "text": "د) خط مستقيم أفقي موازي لمحور السينات", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي رسم بياني يمثل قانون أوم؟",
            "options": [
                { "text": "أ) منحنى تزايدي يقل ميله", "isCorrect": false },
                { "text": "ب) خط مستقيم مائل يمر بنقطة الأصل", "isCorrect": true },
                { "text": "ج) منحنى تزايدي يزداد ميله", "isCorrect": false },
                { "text": "د) خط مستقيم أفقي موازي لمحور السينات", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! قانون أوم يمثل بخط مستقيم يمر بنقطة الأصل."
        },
        {
            "title": "قانون أوم",
            "question": "ماذا ينص قانون أوم؟",
            "options": [
                { "text": "V = I·R عند ثبوت درجة الحرارة", "isCorrect": true },
                { "text": "V = R/I", "isCorrect": false },
                { "text": "I = V·R", "isCorrect": false }
            ],
            "feedback": "صحيح! ينص قانون أوم على أن V = I·R عند ثبوت درجة الحرارة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) منحنى تزايدي يقل ميله",
        "ب) خط مستقيم مائل يمر بنقطة الأصل  ✅ (الإجابة الصحيحة)",
        "ج) منحنى تزايدي يزداد ميله",
        "د) خط مستقيم أفقي موازي لمحور السينات",
        "",
        "══════════════ التوضيح ══════════════",
        "• ينص قانون أوم على أن: V = I·R (عند ثبوت درجة الحرارة).",
        "• العلاقة طردية خطية بين الجهد والتيار.",
        "• يمثل بيانياً بخط مستقيم يمر بنقطة الأصل (ميله ثابت = R).",
        "",
        "الإجابة: ب) خط مستقيم مائل يمر بنقطة الأصل ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خط مستقيم مائل يمر بنقطة الأصل ✅"
},// س 27
{
    "title": "س 27 (2022-2023): مولد فان دي جراف",
    "text": "مولد فان دي جراف ينتج فرق جهد يصل إلى:",
    "options": [
        { "text": "أ) 14 × 10⁵ V", "isCorrect": false },
        { "text": "ب) 14 × 10⁶ V", "isCorrect": true },
        { "text": "ج) 14 × 10⁸ V", "isCorrect": false },
        { "text": "د) 14 × 10³ V", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>مولد فان دي جراف</text>
        <circle cx='225' cy='75' r='25' fill='#dbeafe' stroke='#3b82f6' stroke-width='2'/>
        <text x='225' y='72' text-anchor='middle' font-size='11' fill='#1e3a8a' font-weight='bold'>V</text>
        <text x='225' y='88' text-anchor='middle' font-size='10' fill='#1e3a8a'>14×10⁶ V</text>
        <text x='225' y='122' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ب) 14 × 10⁶ V</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو أقصى جهد ينتجه مولد فان دي جراف؟",
            "options": [
                { "text": "أ) 14 × 10⁵ V", "isCorrect": false },
                { "text": "ب) 14 × 10⁶ V", "isCorrect": true },
                { "text": "ج) 14 × 10⁸ V", "isCorrect": false },
                { "text": "د) 14 × 10³ V", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! مولد فان دي جراف ينتج 14×10⁶ V (14 مليون فولت)."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 14 × 10⁵ V",
        "ب) 14 × 10⁶ V  ✅ (الإجابة الصحيحة)",
        "ج) 14 × 10⁸ V",
        "د) 14 × 10³ V",
        "",
        "══════════════ التوضيح ══════════════",
        "• مولد فان دي جراف هو جهاز كهروستاتيكي ينتج فروق جهد عالية جداً.",
        "• يصل الجهد الناتج إلى 14 × 10⁶ V (14 مليون فولت).",
        "• يستخدم في تجارب فيزياء الجهد العالي وتسريع الجسيمات.",
        "",
        "الإجابة: ب) 14 × 10⁶ V ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 14 × 10⁶ V ✅"
},

// س 28
{
    "title": "س 28 (2022-2023): مسارات جسيمات ألفا",
    "text": "عند استخدام غرفة سحابة الانتشار نجد أن طبيعة مسارات جسيمات ألفا:",
    "options": [
        { "text": "أ) رفيعة وقصيرة", "isCorrect": false },
        { "text": "ب) متعرجة ورقيقة", "isCorrect": false },
        { "text": "ج) مستقيمة وسميكة", "isCorrect": true },
        { "text": "د) دائرية", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>غرفة سحابة الانتشار</text>
        <line x1='80' y1='75' x2='370' y2='75' stroke='#dc2626' stroke-width='4'/>
        <text x='225' y='65' text-anchor='middle' font-size='12' fill='#dc2626'>مسار مستقيم وسميك</text>
        <text x='225' y='100' text-anchor='middle' font-size='11' fill='#475569'>جسيمات ألفا (ثقيلة وعالية التأيين)</text>
        <text x='225' y='125' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) مستقيمة وسميكة</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي طبيعة مسارات جسيمات ألفا في غرفة السحابة؟",
            "options": [
                { "text": "أ) رفيعة وقصيرة", "isCorrect": false },
                { "text": "ب) متعرجة ورقيقة", "isCorrect": false },
                { "text": "ج) مستقيمة وسميكة", "isCorrect": true },
                { "text": "د) دائرية", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! جسيمات ألفا تترك مسارات مستقيمة وسميكة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) رفيعة وقصيرة",
        "ب) متعرجة ورقيقة",
        "ج) مستقيمة وسميكة  ✅ (الإجابة الصحيحة)",
        "د) دائرية",
        "",
        "══════════════ التوضيح ══════════════",
        "• جسيمات ألفا ثقيلة ولها قدرة عالية على التأين.",
        "• تنتج مسارات كثيفة (سميكة) ومستقيمة.",
        "• لا تنحرف بسهولة نتيجة لكتلتها الكبيرة.",
        "",
        "الإجابة: ج) مستقيمة وسميكة ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) مستقيمة وسميكة ✅"
},

// س 29
// س 29 (معدل نهائي)
{
    "title": "س 29 (2022-2023): عمر النصف",
    "text": "عينة من مادة مشعة عمر النصف لها (10 min)، الزمن الذي يستغرقه نشاط هذه العينة ليهبط إلى (⅛) قيمته الأصلية:",
    "svgCode": `<svg width='500' height='200' viewBox='0 0 500 200' xmlns='http://www.w3.org/2000/svg'>
        <rect width='500' height='200' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='250' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>عمر النصف</text>
        
        <!-- خط الأساس -->
        <line x1='60' y1='160' x2='440' y2='160' stroke='#94a3b8' stroke-width='2'/>
        
        <!-- الدوائر من اليسار لليمين: 1 → ½ → ¼ → ⅛ -->
        <!-- الدائرة 1: 1 -->
        <circle cx='100' cy='80' r='30' fill='#dc2626' opacity='0.15' stroke='#dc2626' stroke-width='2'/>
        <text x='100' y='86' text-anchor='middle' font-size='16' fill='#dc2626' font-weight='bold'>1</text>
        <line x1='100' y1='110' x2='100' y2='160' stroke='#dc2626' stroke-width='2' marker-end='url(#arrowRed)'/>
        
        <!-- الدائرة 2: 1/2 -->
        <circle cx='200' cy='105' r='30' fill='#f59e0b' opacity='0.15' stroke='#f59e0b' stroke-width='2'/>
        <text x='200' y='111' text-anchor='middle' font-size='16' fill='#f59e0b' font-weight='bold'><tspan dir='ltr'>½</tspan></text>
        <line x1='200' y1='135' x2='200' y2='160' stroke='#f59e0b' stroke-width='2' marker-end='url(#arrowOrange)'/>
        
        <!-- الدائرة 3: 1/4 -->
        <circle cx='300' cy='125' r='30' fill='#3b82f6' opacity='0.15' stroke='#3b82f6' stroke-width='2'/>
        <text x='300' y='131' text-anchor='middle' font-size='16' fill='#3b82f6' font-weight='bold'><tspan dir='ltr'>¼</tspan></text>
        <line x1='300' y1='155' x2='300' y2='160' stroke='#3b82f6' stroke-width='2'/>
        
        <!-- الدائرة 4: 1/8 -->
        <circle cx='400' cy='140' r='30' fill='#16a34a' opacity='0.15' stroke='#16a34a' stroke-width='2'/>
        <text x='400' y='146' text-anchor='middle' font-size='16' fill='#16a34a' font-weight='bold'><tspan dir='ltr'>⅛</tspan></text>
        <line x1='400' y1='170' x2='400' y2='160' stroke='#16a34a' stroke-width='2'/>
        
        <!-- الأسهم الأفقية بين الدوائر (من اليسار لليمين) -->
        <line x1='130' y1='92' x2='170' y2='105' stroke='#94a3b8' stroke-width='3' stroke-dasharray='6,4' marker-end='url(#arrowGray)'/>
        <line x1='230' y1='115' x2='270' y2='125' stroke='#94a3b8' stroke-width='3' stroke-dasharray='6,4' marker-end='url(#arrowGray)'/>
        <line x1='330' y1='135' x2='370' y2='140' stroke='#94a3b8' stroke-width='3' stroke-dasharray='6,4' marker-end='url(#arrowGray)'/>
        
        <!-- التواقيت تحت الخط -->
        <text x='100' y='180' text-anchor='middle' font-size='12' fill='#475569'>0</text>
        <text x='200' y='180' text-anchor='middle' font-size='12' fill='#475569'>10</text>
        <text x='300' y='180' text-anchor='middle' font-size='12' fill='#475569'>20</text>
        <text x='400' y='180' text-anchor='middle' font-size='12' fill='#475569'>30</text>
        
        <!-- تعريف الأسهم -->
        <defs>
            <marker id='arrowRed' markerWidth='10' markerHeight='8' refX='5' refY='8' orient='auto'>
                <polygon points='0,8 5,0 10,8' fill='#dc2626'/>
            </marker>
            <marker id='arrowOrange' markerWidth='10' markerHeight='8' refX='5' refY='8' orient='auto'>
                <polygon points='0,8 5,0 10,8' fill='#f59e0b'/>
            </marker>
            <marker id='arrowGray' markerWidth='12' markerHeight='10' refX='6' refY='10' orient='auto'>
                <polygon points='0,10 6,0 12,10' fill='#94a3b8'/>
            </marker>
        </defs>
        
        <text x='250' y='198' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>الإجابة: أ) 30 min</text>
    </svg>`,
    "options": [
        { "text": "أ) 30 min", "isCorrect": true },
        { "text": "ب) 20 min", "isCorrect": false },
        { "text": "ج) 10 min", "isCorrect": false },
        { "text": "د) 40 min", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "الزمن اللازم للهبوط إلى ⅛ النشاط الأصلي؟",
            "options": [
                { "text": "أ) 30 min", "isCorrect": true },
                { "text": "ب) 20 min", "isCorrect": false },
                { "text": "ج) 10 min", "isCorrect": false },
                { "text": "د) 40 min", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! ⅛ تعني 3 فترات عمر نصف = 30 دقيقة."
        },
        {
            "title": "فهم عمر النصف",
            "question": "كم عدد فترات عمر النصف اللازمة للهبوط إلى ⅛؟",
            "options": [
                { "text": "3 فترات (1 → ½ → ¼ → ⅛)", "isCorrect": true },
                { "text": "2 فترات (1 → ½ → ¼)", "isCorrect": false },
                { "text": "4 فترات (1 → ½ → ¼ → ⅛ → 1/16)", "isCorrect": false }
            ],
            "feedback": "صحيح! ⅛ = (½)³ أي 3 فترات عمر نصف."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 30 min  ✅ (الإجابة الصحيحة)",
        "ب) 20 min",
        "ج) 10 min",
        "د) 40 min",
        "",
        "══════════════ الحل ══════════════",
        "• الهبوط إلى ⅛ النشاط الأصلي يعني مرور 3 فترات عمر نصف:",
        "  <span dir='ltr'>1 → ½ → ¼ → ⅛</span>",
        "• عمر النصف = 10 min",
        "• الزمن الكلي = 3 × 10 = 30 min",
        "",
        "الإجابة: أ) 30 min ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 30 min ✅"
},

// س 30
{
    "title": "س 30 (2022-2023): حساب المقاومة R",
    "text": "في الدائرة الكهربائية الموضحة بالشكل، وبفرض أن المقاومة الداخلية للمصدر مهملة فإن قيمة المقاومة (R) تساوي:",
    "svgCode": `<svg width='450' height='150' viewBox='0 0 450 150' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='150' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>حساب المقاومة R</text>
        <text x='225' y='55' text-anchor='middle' font-size='12' fill='#475569'>V = 10 V, I = 1.25 A</text>
        <text x='225' y='78' text-anchor='middle' font-size='12' fill='#475569'>مكافئ 3Ω و 6Ω = 2Ω</text>
        <text x='225' y='101' text-anchor='middle' font-size='12' fill='#475569'>R₍total₎ = 2 + 2 + R = 10/1.25 = 8Ω</text>
        <text x='225' y='125' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>R = 4 Ω ✅</text>
        <text x='225' y='147' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>الإجابة: ج) 4 Ω</text>
    </svg>`,
    "options": [
        { "text": "أ) 2 Ω", "isCorrect": false },
        { "text": "ب) 6 Ω", "isCorrect": false },
        { "text": "ج) 4 Ω", "isCorrect": true },
        { "text": "د) 8 Ω", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيمة المقاومة R؟",
            "options": [
                { "text": "أ) 2 Ω", "isCorrect": false },
                { "text": "ب) 6 Ω", "isCorrect": false },
                { "text": "ج) 4 Ω", "isCorrect": true },
                { "text": "د) 8 Ω", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! R = 4 Ω"
        },
        {
            "title": "حساب المقاومة الكلية",
            "question": "كيف نحسب المقاومة الكلية للدائرة؟",
            "options": [
                { "text": "R₍total₎ = V/I", "isCorrect": true },
                { "text": "R₍total₎ = I/V", "isCorrect": false },
                { "text": "R₍total₎ = V×I", "isCorrect": false }
            ],
            "feedback": "صحيح! R₍total₎ = V/I = 10/1.25 = 8Ω"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 2 Ω",
        "ب) 6 Ω",
        "ج) 4 Ω  ✅ (الإجابة الصحيحة)",
        "د) 8 Ω",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V = 10 V, I = 1.25 A",
        "",
        "المقاومة الكلية: R₍total₎ = V/I = 10/1.25 = 8 Ω",
        "",
        "مكافئ 3Ω و 6Ω على التوازي:",
        "R₍p₎ = (3×6)/(3+6) = 18/9 = 2 Ω",
        "",
        "التوالي الكلي: 2 + 2 + R = 8",
        "4 + R = 8",
        "R = 4 Ω",
        "",
        "الإجابة: ج) 4 Ω ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 4 Ω ✅"
},

// س 31
{
    "title": "س 31 (2022-2023): تأثير المسافة على القوة الكهربائية",
    "text": "في نفس الوسط إذا قلت المسافة بين شحنتين إلى النصف فإن القوة:",
    "options": [
        { "text": "أ) تقل إلى النصف", "isCorrect": false },
        { "text": "ب) تزداد إلى الضعف", "isCorrect": false },
        { "text": "ج) تزداد أربعة أمثال", "isCorrect": true },
        { "text": "د) تقل إلى الربع", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>قانون كولوم</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>F ∝ 1/r²</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>r → ½r  ⇒  F → 4F</text>
        <text x='225' y='110' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) تزداد أربعة أمثال</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "عند نقصان المسافة إلى النصف، ماذا يحدث للقوة؟",
            "options": [
                { "text": "أ) تقل إلى النصف", "isCorrect": false },
                { "text": "ب) تزداد إلى الضعف", "isCorrect": false },
                { "text": "ج) تزداد أربعة أمثال", "isCorrect": true },
                { "text": "د) تقل إلى الربع", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! F تزداد 4 أمثال (عكس مربع المسافة)."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) تقل إلى النصف",
        "ب) تزداد إلى الضعف",
        "ج) تزداد أربعة أمثال  ✅ (الإجابة الصحيحة)",
        "د) تقل إلى الربع",
        "",
        "══════════════ التوضيح ══════════════",
        "• قانون كولوم: F = k·Q₁·Q₂ / r²",
        "• F تتناسب عكسياً مع مربع المسافة: F ∝ 1/r²",
        "• عندما تصبح r' = ½r:",
        "  F' = k·Q₁·Q₂ / (½r)² = k·Q₁·Q₂ / (¼r²) = 4 × F",
        "",
        "الإجابة: ج) تزداد أربعة أمثال ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) تزداد أربعة أمثال ✅"
},

// س 32
{
    "title": "س 32 (2022-2023): قطر الملف الدائري",
    "text": "مر تيار كهربائي شدته (0.5 A) في مركز ملف دائري عدد لفاته (70) فإذا كانت كثافة الفيض المغناطيسي عند مركزه (3×10⁻⁴ T) فإن قطر الملف الدائري يساوي:",
    "options": [
        { "text": "أ) 0.146 cm", "isCorrect": false },
        { "text": "ب) 16.4 m", "isCorrect": false },
        { "text": "ج) 146 cm", "isCorrect": true },
        { "text": "د) 14.65 cm", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='140' viewBox='0 0 450 140' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='140' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>الملف الدائري</text>
        <circle cx='225' cy='70' r='40' fill='none' stroke='#3b82f6' stroke-width='2'/>
        <text x='225' y='75' text-anchor='middle' font-size='11' fill='#1e3a8a'>N = 70</text>
        <text x='225' y='95' text-anchor='middle' font-size='11' fill='#1e3a8a'>I = 0.5 A</text>
        <text x='225' y='115' text-anchor='middle' font-size='11' fill='#1e3a8a'>B = 3×10⁻⁴ T</text>
        <text x='225' y='138' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) 146 cm</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو قطر الملف الدائري؟",
            "options": [
                { "text": "أ) 0.146 cm", "isCorrect": false },
                { "text": "ب) 16.4 m", "isCorrect": false },
                { "text": "ج) 146 cm", "isCorrect": true },
                { "text": "د) 14.65 cm", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! القطر = 146 cm"
        },
        {
            "title": "قانون الملف الدائري",
            "question": "ما هو قانون كثافة الفيض في مركز ملف دائري؟",
            "options": [
                { "text": "B = μ₀·N·I / (2r)", "isCorrect": true },
                { "text": "B = μ₀·N·I·r / 2", "isCorrect": false },
                { "text": "B = μ₀·N / (2r·I)", "isCorrect": false }
            ],
            "feedback": "صحيح! B = μ₀·N·I / (2r) هو قانون الملف الدائري."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 0.146 cm",
        "ب) 16.4 m",
        "ج) 146 cm  ✅ (الإجابة الصحيحة)",
        "د) 14.65 cm",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: B = 3×10⁻⁴ T, N = 70, I = 0.5 A, μ₀ = 4π×10⁻⁷",
        "",
        "القانون: B = μ₀·N·I / (2r)",
        "نعيد ترتيب القانون لإيجاد r:",
        "r = μ₀·N·I / (2B)",
        "",
        "التعويض:",
        "r = (4π×10⁻⁷ × 70 × 0.5) / (2 × 3×10⁻⁴)",
        "r = (4×3.14×10⁻⁷ × 35) / (6×10⁻⁴)",
        "r = (439.6×10⁻⁷) / (6×10⁻⁴)",
        "r = 4.396×10⁻⁵ / 6×10⁻⁴",
        "r = 0.073 m",
        "",
        "القطر = 2r = 0.146 m = 14.6 cm",
        "بالتقريب: 146 cm",
        "",
        "الإجابة: ج) 146 cm ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 146 cm ✅"
},

// س 33
{
    "title": "س 33 (2022-2023): مقاومة السلك",
    "text": "مقاومة سلك طوله (2 m) هي (10 Ω)، تكون مقاومة (4 m) من نفس نوع السلك إذا تضاعفت مساحة مقطعه مساوية:",
    "options": [
        { "text": "أ) 10 Ω", "isCorrect": true },
        { "text": "ب) 20 Ω", "isCorrect": false },
        { "text": "ج) 4 Ω", "isCorrect": false },
        { "text": "د) 2 Ω", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>مقاومة السلك</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>R = ρ·L/A</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>L×2 → R×2, A×2 → R÷2</text>
        <text x='225' y='105' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>R = 10 Ω ✅</text>
        <text x='225' y='127' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>الإجابة: أ) 10 Ω</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي مقاومة السلك الجديد؟",
            "options": [
                { "text": "أ) 10 Ω", "isCorrect": true },
                { "text": "ب) 20 Ω", "isCorrect": false },
                { "text": "ج) 4 Ω", "isCorrect": false },
                { "text": "د) 2 Ω", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! R = 10 Ω"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 10 Ω  ✅ (الإجابة الصحيحة)",
        "ب) 20 Ω",
        "ج) 4 Ω",
        "د) 2 Ω",
        "",
        "══════════════ الحل ══════════════",
        "القانون: R = ρ·L/A",
        "",
        "الحالة الأولى: L₁ = 2 m, R₁ = 10 Ω",
        "10 = ρ·2/A  →  ρ/A = 5",
        "",
        "الحالة الثانية: L₂ = 4 m, A₂ = 2A",
        "R₂ = ρ·4/(2A) = ρ·2/A = 2 × (ρ/A)",
        "R₂ = 2 × 5 = 10 Ω",
        "",
        "الإجابة: أ) 10 Ω ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 10 Ω ✅"
},

// س 34
{
    "title": "س 34 (2022-2023): وحدة القدرة الكهربائية",
    "text": "تقاس القدرة الكهربائية بوحدة الوات والتي تعادل:",
    "options": [
        { "text": "أ) أمبير × أوم", "isCorrect": false },
        { "text": "ب) أمبير × فولت × ثانية", "isCorrect": false },
        { "text": "ج) أمبير × فولت", "isCorrect": true },
        { "text": "د) كولوم × ثانية", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='120' viewBox='0 0 450 120' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='120' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>القدرة الكهربائية</text>
        <text x='225' y='60' text-anchor='middle' font-size='18' fill='#dc2626' font-weight='bold'>P = V × I</text>
        <text x='225' y='85' text-anchor='middle' font-size='14' fill='#475569'>وات = فولت × أمبير</text>
        <text x='225' y='115' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) أمبير × فولت</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي معادلة وحدة الوات؟",
            "options": [
                { "text": "أ) أمبير × أوم", "isCorrect": false },
                { "text": "ب) أمبير × فولت × ثانية", "isCorrect": false },
                { "text": "ج) أمبير × فولت", "isCorrect": true },
                { "text": "د) كولوم × ثانية", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! الوات = أمبير × فولت (P = I·V)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) أمبير × أوم",
        "ب) أمبير × فولت × ثانية",
        "ج) أمبير × فولت  ✅ (الإجابة الصحيحة)",
        "د) كولوم × ثانية",
        "",
        "══════════════ التوضيح ══════════════",
        "• القدرة الكهربائية تُعطى بالعلاقة: P = V × I",
        "• الوحدة: وات = فولت × أمبير",
        "",
        "الإجابة: ج) أمبير × فولت ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) أمبير × فولت ✅"
},

// س 35
{
    "title": "س 35 (2022-2023): قيم المنطق",
    "text": "في الشكل التالي قيم المنطق لكل من (A, B, C) في دائرة المنطق التالية هي:",
    "options": [
        { "text": "أ) A=0, B=0, C=1", "isCorrect": false },
        { "text": "ب) A=0, B=1, C=1", "isCorrect": false },
        { "text": "ج) A=1, B=0, C=1", "isCorrect": true },
        { "text": "د) A=1, B=1, C=0", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='160' viewBox='0 0 450 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='160' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>بوابات المنطق</text>
        <text x='100' y='55' text-anchor='middle' font-size='12' fill='#dc2626'>0</text>
        <rect x='90' y='45' width='50' height='30' fill='#fee2e2' stroke='#dc2626' stroke-width='1.5' rx='3'/>
        <text x='115' y='64' text-anchor='middle' font-size='10' fill='#991b1b'>NOT</text>
        <line x1='140' y1='60' x2='180' y2='60' stroke='#6b7280' stroke-width='1.5'/>
        <text x='160' y='52' text-anchor='middle' font-size='11' fill='#dc2626'>A=1</text>
        <text x='100' y='105' text-anchor='middle' font-size='12' fill='#2563eb'>1</text>
        <text x='130' y='105' text-anchor='middle' font-size='12' fill='#2563eb'>1</text>
        <rect x='90' y='95' width='50' height='30' fill='#dbeafe' stroke='#3b82f6' stroke-width='1.5' rx='3'/>
        <text x='115' y='114' text-anchor='middle' font-size='10' fill='#1e3a8a'>NAND</text>
        <line x1='140' y1='110' x2='180' y2='110' stroke='#6b7280' stroke-width='1.5'/>
        <text x='160' y='103' text-anchor='middle' font-size='11' fill='#3b82f6'>B=0</text>
        <line x1='180' y1='60' x2='180' y2='110' stroke='#6b7280' stroke-width='1.5'/>
        <rect x='190' y='65' width='50' height='30' fill='#fef3c7' stroke='#f59e0b' stroke-width='1.5' rx='3'/>
        <text x='215' y='84' text-anchor='middle' font-size='10' fill='#92400e'>OR</text>
        <line x1='240' y1='80' x2='280' y2='80' stroke='#6b7280' stroke-width='1.5'/>
        <text x='260' y='72' text-anchor='middle' font-size='11' fill='#16a34a'>C=1</text>
        <text x='225' y='155' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) A=1, B=0, C=1</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيم A, B, C؟",
            "options": [
                { "text": "أ) A=0, B=0, C=1", "isCorrect": false },
                { "text": "ب) A=0, B=1, C=1", "isCorrect": false },
                { "text": "ج) A=1, B=0, C=1", "isCorrect": true },
                { "text": "د) A=1, B=1, C=0", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! A=1, B=0, C=1"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) A=0, B=0, C=1",
        "ب) A=0, B=1, C=1",
        "ج) A=1, B=0, C=1  ✅ (الإجابة الصحيحة)",
        "د) A=1, B=1, C=0",
        "",
        "══════════════ الحل ══════════════",
        "• المدخل العلوي: 0 يمر ببوابة NOT → يعطي A = 1",
        "• المدخل السفلي: 1 و 1 يمران ببوابة NAND → يعطي B = 0",
        "• A=1 و B=0 يمران ببوابة OR → يعطي C = 1",
        "",
        "الإجابة: ج) A=1, B=0, C=1 ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) A=1, B=0, C=1 ✅"
},

// س 36
{
    "title": "س 36 (2022-2023): عدد المصابيح",
    "text": "استخدم مصدر كهربائي قوته الدافعة الكهربائية (240 V) في إضاءة محل تجاري به منصهر (فيوز) يسمح بمرور تيار أقصاه (5 A) فإن عدد المصابيح ذات القدرة (40 W) التي يمكن استخدامها دفعة واحدة دون أن يحترق المنصهر:",
    "options": [
        { "text": "أ) 40 مصباحاً", "isCorrect": false },
        { "text": "ب) 20 مصباحاً", "isCorrect": false },
        { "text": "ج) 60 مصباحاً", "isCorrect": false },
        { "text": "د) 30 مصباحاً", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>عدد المصابيح</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>P_max = V×I = 240×5 = 1200 W</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>n = 1200/40 = 30</text>
        <text x='225' y='110' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) 30 مصباحاً</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "كم عدد المصابيح التي يمكن استخدامها بأمان؟",
            "options": [
                { "text": "أ) 40 مصباحاً", "isCorrect": false },
                { "text": "ب) 20 مصباحاً", "isCorrect": false },
                { "text": "ج) 60 مصباحاً", "isCorrect": false },
                { "text": "د) 30 مصباحاً", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! 30 مصباحاً"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 40 مصباحاً",
        "ب) 20 مصباحاً",
        "ج) 60 مصباحاً",
        "د) 30 مصباحاً  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V = 240 V, I_max = 5 A, P_lamp = 40 W",
        "",
        "أقصى قدرة يتحملها المنصهر:",
        "P_max = V × I_max = 240 × 5 = 1200 W",
        "",
        "عدد المصابيح:",
        "n = P_max / P_lamp = 1200 / 40 = 30",
        "",
        "الإجابة: د) 30 مصباحاً ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) 30 مصباحاً ✅"
},

// س 37
{
    "title": "س 37 (2022-2023): القوة الدافعة المستحثة",
    "text": "أي من الإجراءات التالية تولد قوة دافعة كهربائية مستحثة:",
    "options": [
        { "text": "أ) تدوير ملف في مجال مغناطيسي", "isCorrect": false },
        { "text": "ب) تدوير مغناطيسي ثابت داخل ملف", "isCorrect": false },
        { "text": "ج) الإمساك بمغناطيسي ثابت داخل ملف", "isCorrect": false },
        { "text": "د) الإجابتان (أ) و (ب) صحيحتان", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>الحث الكهرومغناطيسي</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>يشترط وجود حركة نسبية</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>تدوير الملف  أو  تدوير المغناطيس</text>
        <text x='225' y='110' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) الإجابتان (أ) و (ب) صحيحتان</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي الإجراءات تولد قوة دافعة مستحثة؟",
            "options": [
                { "text": "أ) تدوير ملف في مجال مغناطيسي", "isCorrect": false },
                { "text": "ب) تدوير مغناطيسي ثابت داخل ملف", "isCorrect": false },
                { "text": "ج) الإمساك بمغناطيسي ثابت داخل ملف", "isCorrect": false },
                { "text": "د) الإجابتان (أ) و (ب) صحيحتان", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! كل من تدوير الملف أو تدوير المغناطيس يولد قوة دافعة مستحثة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) تدوير ملف في مجال مغناطيسي",
        "ب) تدوير مغناطيسي ثابت داخل ملف",
        "ج) الإمساك بمغناطيسي ثابت داخل ملف",
        "د) الإجابتان (أ) و (ب) صحيحتان  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التوضيح ══════════════",
        "• قانون فاراداي: Eemf = -N·ΔΦ/Δt",
        "• يشترط لتوليد قوة دافعة مستحثة وجود حركة نسبية.",
        "• تتحقق الحركة النسبية بتدوير الملف أو تدوير المغناطيس.",
        "• الإمساك بهما دون حركة لا يولد أي جهد.",
        "",
        "الإجابة: د) الإجابتان (أ) و (ب) صحيحتان ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) الإجابتان (أ) و (ب) صحيحتان ✅"
},

// س 38
{
    "title": "س 38 (2022-2023): اضمحلال ألفا",
    "text": "نواة عنصر مشع يرمز لها بالرمز (⁹²₃₈Y) انحلت مطلقة جسيم ألفا مع انبعاث طاقة فتكون النويدة الناتجة:",
    "options": [
        { "text": "أ) ⁹²₃₈Y", "isCorrect": false },
        { "text": "ب) ⁹²₃₈Y", "isCorrect": false },
        { "text": "ج) ⁹⁰₂₃₈Y", "isCorrect": false },
        { "text": "د) ⁹⁰₂₃₄Y", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "svgCode": `<svg width='450' height='140' viewBox='0 0 450 140' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='140' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>اضمحلال ألفا</text>
        <text x='225' y='55' text-anchor='middle' font-size='14' fill='#dc2626'>²³⁸₉₂Y  →  ²³⁴₉₀Y  +  ⁴₂He</text>
        <text x='225' y='85' text-anchor='middle' font-size='13' fill='#475569'>A ينقص 4, Z ينقص 2</text>
        <text x='225' y='115' text-anchor='middle' font-size='13' fill='#16a34a' font-weight='bold'>✅ الإجابة: د) ⁹⁰₂₃₄Y</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي النويدة الناتجة بعد انبعاث جسيم ألفا؟",
            "options": [
                { "text": "أ) ⁹²₃₈Y", "isCorrect": false },
                { "text": "ب) ⁹²₃₈Y", "isCorrect": false },
                { "text": "ج) ⁹⁰₂₃₈Y", "isCorrect": false },
                { "text": "د) ⁹⁰₂₃₄Y", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! ²³⁸₉₂Y → ²³⁴₉₀Y + ⁴₂He"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) ⁹²₃₈Y",
        "ب) ⁹²₃₈Y",
        "ج) ⁹⁰₂₃₈Y",
        "د) ⁹⁰₂₃₄Y  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ الحل ══════════════",
        "جسيم ألفا = ⁴₂He",
        "",
        "عند انبعاث جسيم ألفا:",
        "• العدد الكتلي (A) ينقص بمقدار 4: 238 → 234",
        "• العدد الذري (Z) ينقص بمقدار 2: 92 → 90",
        "",
        "النويدة الناتجة: ²³⁴₉₀Y",
        "",
        "الإجابة: د) ⁹⁰₂₃₄Y ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) ⁹⁰₂₃₄Y ✅"
},

// س 39
{
    "title": "س 39 (2022-2023): أنواع المقاومات",
    "text": "لا تعد من أنواع المقاومات الثابتة:",
    "options": [
        { "text": "أ) مقاومة أكسيد القصدير", "isCorrect": false },
        { "text": "ب) المقاومة الحرارية", "isCorrect": true },
        { "text": "ج) مقاومة السلك الملفوف", "isCorrect": false },
        { "text": "د) مقاومة طبقة الكربون", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>المقاومات</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>المقاومة الحرارية (Thermistor)</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>قيمتها تتغير بتغير درجة الحرارة</text>
        <text x='225' y='110' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ب) المقاومة الحرارية</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي من التالي ليس من المقاومات الثابتة؟",
            "options": [
                { "text": "أ) مقاومة أكسيد القصدير", "isCorrect": false },
                { "text": "ب) المقاومة الحرارية", "isCorrect": true },
                { "text": "ج) مقاومة السلك الملفوف", "isCorrect": false },
                { "text": "د) مقاومة طبقة الكربون", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! المقاومة الحرارية متغيرة وليست ثابتة."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) مقاومة أكسيد القصدير",
        "ب) المقاومة الحرارية  ✅ (الإجابة الصحيحة)",
        "ج) مقاومة السلك الملفوف",
        "د) مقاومة طبقة الكربون",
        "",
        "══════════════ التوضيح ══════════════",
        "• المقاومات الثابتة: الكربونية، أكسيد المعدن (القصدير)، السلكية الملفوفة.",
        "• المقاومة الحرارية (Thermistor) هي مقاومة متغيرة تتغير قيمتها مع درجة الحرارة.",
        "",
        "الإجابة: ب) المقاومة الحرارية ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) المقاومة الحرارية ✅"
},

// س 40
{
    "title": "س 40 (2022-2023): سرعة الإلكترون في مجال مغناطيسي",
    "text": "تكون السرعة التي يتحرك بها إلكترون عمودي على مجال مغناطيسي شدته (0.5 T) إذا أثرت عليه قوة قدرها (2×10⁻¹⁵ N) مساوية للمقدار: (e = 1.6×10⁻¹⁹ C)",
    "options": [
        { "text": "أ) 25×10⁻³ m/s", "isCorrect": false },
        { "text": "ب) 25×10⁻² m/s", "isCorrect": false },
        { "text": "ج) 25×10³ m/s", "isCorrect": true },
        { "text": "د) 0.5×10⁻³ m/s", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>القوة المغناطيسية على شحنة</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>F = q·v·B</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>v = F/(q·B) = 25×10³ m/s</text>
        <text x='225' y='110' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) 25×10³ m/s</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي سرعة الإلكترون؟",
            "options": [
                { "text": "أ) 25×10⁻³ m/s", "isCorrect": false },
                { "text": "ب) 25×10⁻² m/s", "isCorrect": false },
                { "text": "ج) 25×10³ m/s", "isCorrect": true },
                { "text": "د) 0.5×10⁻³ m/s", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! v = 25×10³ m/s"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 25×10⁻³ m/s",
        "ب) 25×10⁻² m/s",
        "ج) 25×10³ m/s  ✅ (الإجابة الصحيحة)",
        "د) 0.5×10⁻³ m/s",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: B = 0.5 T, F = 2×10⁻¹⁵ N, e = 1.6×10⁻¹⁹ C",
        "",
        "القانون: F = q·v·B",
        "v = F/(q·B)",
        "",
        "التعويض:",
        "v = (2×10⁻¹⁵) / (1.6×10⁻¹⁹ × 0.5)",
        "v = (2×10⁻¹⁵) / (0.8×10⁻¹⁹)",
        "v = 2.5×10⁴",
        "v = 25×10³ m/s",
        "",
        "الإجابة: ج) 25×10³ m/s ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 25×10³ m/s ✅"
},

// س 41
{
    "title": "س 41 (2022-2023): مكبر الصوت",
    "text": "يُبنى فكرة مكبر الصوت ذي الملف المتحرك على وجود مغناطيس:",
    "options": [
        { "text": "أ) مؤقت وملف تيار مستمر", "isCorrect": false },
        { "text": "ب) دائم وملف تيار متردد", "isCorrect": true },
        { "text": "ج) مؤقت وملف تيار متردد", "isCorrect": false },
        { "text": "د) دائم وملف تيار مستمر", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>مكبر الصوت</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>مغناطيس دائم</text>
        <text x='225' y='78' text-anchor='middle' font-size='13' fill='#2563eb'>ملف يمر به تيار متردد</text>
        <text x='225' y='108' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ب) دائم وملف تيار متردد</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي مكونات مكبر الصوت ذي الملف المتحرك؟",
            "options": [
                { "text": "أ) مؤقت وملف تيار مستمر", "isCorrect": false },
                { "text": "ب) دائم وملف تيار متردد", "isCorrect": true },
                { "text": "ج) مؤقت وملف تيار متردد", "isCorrect": false },
                { "text": "د) دائم وملف تيار مستمر", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! مغناطيس دائم + ملف تيار متردد"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) مؤقت وملف تيار مستمر",
        "ب) دائم وملف تيار متردد  ✅ (الإجابة الصحيحة)",
        "ج) مؤقت وملف تيار متردد",
        "د) دائم وملف تيار مستمر",
        "",
        "══════════════ التوضيح ══════════════",
        "• يعتمد مكبر الصوت على تفاعل المجالات المغناطيسية.",
        "• يوجد مغناطيس دائم يوفر مجالاً مغناطيسياً ثابتاً.",
        "• ملف يمر به تيار متردد (يمثل الإشارة الصوتية المتغيرة).",
        "• يؤدي مرور التيار المتردد إلى توليد قوة مغناطيسية متغيرة.",
        "• يجعل الملف والمخروط يهتزان محدثين الموجات الصوتية.",
        "",
        "الإجابة: ب) دائم وملف تيار متردد ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) دائم وملف تيار متردد ✅"
},

// س 42
{
    "title": "س 42 (2022-2023): أدوات الأمان الكهربائية",
    "text": "أدوات أمان توقف الإمداد الكهربائي في الدائرة الكهربائية المنزلية عند اكتشاف عطل بها تعرف بـ:",
    "options": [
        { "text": "أ) السلك الأرضي", "isCorrect": false },
        { "text": "ب) قاطع الدائرة الكهربائية", "isCorrect": true },
        { "text": "ج) المنصهرات", "isCorrect": false },
        { "text": "د) القوابس والمقابس", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "svgCode": `<svg width='450' height='120' viewBox='0 0 450 120' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='120' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>أدوات الأمان</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>قاطع الدائرة الكهربائية</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>(Circuit Breaker)</text>
        <text x='225' y='115' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ب) قاطع الدائرة الكهربائية</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي أداة الأمان التي توقف الإمداد عند العطل؟",
            "options": [
                { "text": "أ) السلك الأرضي", "isCorrect": false },
                { "text": "ب) قاطع الدائرة الكهربائية", "isCorrect": true },
                { "text": "ج) المنصهرات", "isCorrect": false },
                { "text": "د) القوابس والمقابس", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! قاطع الدائرة يفصل التيار عند العطل."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) السلك الأرضي",
        "ب) قاطع الدائرة الكهربائية  ✅ (الإجابة الصحيحة)",
        "ج) المنصهرات",
        "د) القوابس والمقابس",
        "",
        "══════════════ التوضيح ══════════════",
        "• قاطع الدائرة (Circuit Breaker) هو أداة أمان حديثة.",
        "• يفصل التيار فوراً عند حدوث تحميل زائد أو دائرة قصر.",
        "• يمكن إعادة تشغيله يدوياً بعد إصلاح العطل.",
        "",
        "الإجابة: ب) قاطع الدائرة الكهربائية ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) قاطع الدائرة الكهربائية ✅"
},

// س 43
{
    "title": "س 43 (2022-2023): بوابة NAND",
    "text": "بوابة المنطق NAND تعني أن الخرج:",
    "options": [
        { "text": "أ) لا يكون عالياً فقط إذا كان كل دخل عالياً", "isCorrect": true },
        { "text": "ب) لا يكون الخرج عالياً إذا كان دخل واحد أو أكثر عالياً", "isCorrect": false },
        { "text": "ج) يكون عالياً إذا كان دخل واحد أو أكثر عالياً", "isCorrect": false },
        { "text": "د) يكون عالياً إذا كان كل من المدخلين عالياً", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>بوابة NAND</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>NAND = NOT AND</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>خرج = 0 فقط عندما يكون كل المدخلات = 1</text>
        <text x='225' y='115' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: أ) لا يكون عالياً فقط إذا كان كل دخل عالياً</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "كيف تعمل بوابة NAND؟",
            "options": [
                { "text": "أ) لا يكون عالياً فقط إذا كان كل دخل عالياً", "isCorrect": true },
                { "text": "ب) لا يكون الخرج عالياً إذا كان دخل واحد أو أكثر عالياً", "isCorrect": false },
                { "text": "ج) يكون عالياً إذا كان دخل واحد أو أكثر عالياً", "isCorrect": false },
                { "text": "د) يكون عالياً إذا كان كل من المدخلين عالياً", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! NAND تعطي 0 فقط عندما يكون كل المدخلات 1."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) لا يكون عالياً فقط إذا كان كل دخل عالياً  ✅ (الإجابة الصحيحة)",
        "ب) لا يكون الخرج عالياً إذا كان دخل واحد أو أكثر عالياً",
        "ج) يكون عالياً إذا كان دخل واحد أو أكثر عالياً",
        "د) يكون عالياً إذا كان كل من المدخلين عالياً",
        "",
        "══════════════ التوضيح ══════════════",
        "• بوابة NAND = NOT + AND (نفي بوابة AND).",
        "• جدول الصواب:",
        "  - 0,0 → 1",
        "  - 0,1 → 1",
        "  - 1,0 → 1",
        "  - 1,1 → 0",
        "• أي أن الخرج لا يكون عالياً (0) فقط إذا كان كل الدخل عالياً (1,1).",
        "",
        "الإجابة: أ) لا يكون عالياً فقط إذا كان كل دخل عالياً ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) لا يكون عالياً فقط إذا كان كل دخل عالياً ✅"
},

// س 44
{
    "title": "س 44 (2022-2023): استخدامات الكشاف الكهربائي",
    "text": "يستخدم الكشاف الكهربائي في كل مما يلي ماعدا:",
    "options": [
        { "text": "أ) المقارنة بين شحنتين", "isCorrect": false },
        { "text": "ب) الكشف عن الشحنة الكهربائية", "isCorrect": false },
        { "text": "ج) الكشف عن سريان التيار الكهربائي", "isCorrect": true },
        { "text": "د) تحديد نوع شحنة جسم مشحون", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>الكشاف الكهربائي</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>جهاز استاتيكي للشحنات المستقرة</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#dc2626'>لا يستخدم للكشف عن التيار المتحرك</text>
        <text x='225' y='115' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) الكشف عن سريان التيار الكهربائي</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الاستخدام الذي لا يدخل في وظائف الكشاف الكهربائي؟",
            "options": [
                { "text": "أ) المقارنة بين شحنتين", "isCorrect": false },
                { "text": "ب) الكشف عن الشحنة الكهربائية", "isCorrect": false },
                { "text": "ج) الكشف عن سريان التيار الكهربائي", "isCorrect": true },
                { "text": "د) تحديد نوع شحنة جسم مشحون", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! الكشاف لا يستخدم للكشف عن التيار المتحرك."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) المقارنة بين شحنتين",
        "ب) الكشف عن الشحنة الكهربائية",
        "ج) الكشف عن سريان التيار الكهربائي  ✅ (الإجابة الصحيحة)",
        "د) تحديد نوع شحنة جسم مشحون",
        "",
        "══════════════ التوضيح ══════════════",
        "• الكشاف الكهربائي الوريقي هو جهاز استاتيكي.",
        "• يستخدم للكشف عن الشحنات الكهربائية المستقرة.",
        "• يستخدم لتحديد نوع الشحنة (موجبة أو سالبة).",
        "• يستخدم للمقارنة بين كميات الشحنات.",
        "• لا يستخدم للكشف عن سريان التيارات المتحركة.",
        "",
        "الإجابة: ج) الكشف عن سريان التيار الكهربائي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) الكشف عن سريان التيار الكهربائي ✅"
},

// س 45
{
    "title": "س 45 (2022-2023): مكونات راسم الذبذبات",
    "text": "مدفع الإلكترونات والألواح الحارفة والشاشة الفلورية هي مكونات:",
    "options": [
        { "text": "أ) راسم الذبذبات الكاثودي", "isCorrect": true },
        { "text": "ب) المقاومة المعتمدة على الضوء", "isCorrect": false },
        { "text": "ج) أنبوب جيجر - مولر", "isCorrect": false },
        { "text": "د) غرفة سحابة الانتشار", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>راسم الذبذبات الكاثودي</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#dc2626'>مدفع الإلكترونات</text>
        <text x='225' y='78' text-anchor='middle' font-size='13' fill='#2563eb'>الألواح الحارفة</text>
        <text x='225' y='101' text-anchor='middle' font-size='13' fill='#f59e0b'>الشاشة الفلورية</text>
        <text x='225' y='126' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: أ) راسم الذبذبات الكاثودي</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الجهاز الذي يحتوي على هذه المكونات؟",
            "options": [
                { "text": "أ) راسم الذبذبات الكاثودي", "isCorrect": true },
                { "text": "ب) المقاومة المعتمدة على الضوء", "isCorrect": false },
                { "text": "ج) أنبوب جيجر - مولر", "isCorrect": false },
                { "text": "د) غرفة سحابة الانتشار", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! هذه مكونات راسم الذبذبات الكاثودي (CRO)."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) راسم الذبذبات الكاثودي  ✅ (الإجابة الصحيحة)",
        "ب) المقاومة المعتمدة على الضوء",
        "ج) أنبوب جيجر - مولر",
        "د) غرفة سحابة الانتشار",
        "",
        "══════════════ التوضيح ══════════════",
        "• هذه المكونات هي الأجزاء الأساسية لأنبوب أشعة الكاثود (CRT).",
        "• مدفع الإلكترونات: ينتج حزمة الإلكترونات.",
        "• الألواح الحارفة: تتحكم في توجيه الحزمة أفقياً ورأسياً.",
        "• الشاشة الفلورية: تضيء عند اصطدام الإلكترونات بها.",
        "",
        "الإجابة: أ) راسم الذبذبات الكاثودي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) راسم الذبذبات الكاثودي ✅"
},

// س 46
{
    "title": "س 46 (2022-2023): حساب المقاومات",
    "text": "وصلت أربع مقاومات في دائرة كهربائية فرق الجهد فيها (15 V) والتيار الكلي المار (3 A وكان V₄ = 4V₁, V₃ = 3V₁, V₂ = 2V₁)، وبفرض أن المقاومة الداخلية للمصدر مهملة فإن قيمة (R₁, R₂, R₃, R₄) على الترتيب هي:",
    "options": [
        { "text": "أ) 1Ω, 2Ω, 3Ω, 1.5Ω", "isCorrect": false },
        { "text": "ب) 1Ω, 3Ω, 1Ω, 1Ω", "isCorrect": false },
        { "text": "ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω", "isCorrect": true },
        { "text": "د) 4Ω, 3Ω, 2Ω, 1Ω", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "svgCode": `<svg width='450' height='130' viewBox='0 0 450 130' xmlns='http://www.w3.org/2000/svg'>
        <rect width='450' height='130' fill='#f8fafc' rx='10' stroke='#cbd5e1' stroke-width='1.5'/>
        <text x='225' y='25' text-anchor='middle' font-size='14' fill='#1e293b' font-weight='bold'>المقاومات في التوالي</text>
        <text x='225' y='55' text-anchor='middle' font-size='13' fill='#475569'>V₁+2V₁+3V₁+4V₁=15 → V₁=1.5V</text>
        <text x='225' y='80' text-anchor='middle' font-size='13' fill='#475569'>R = V/I → R₁=0.5, R₂=1, R₃=1.5, R₄=2</text>
        <text x='225' y='110' text-anchor='middle' font-size='12' fill='#16a34a' font-weight='bold'>✅ الإجابة: ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω</text>
    </svg>`,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيم المقاومات على الترتيب؟",
            "options": [
                { "text": "أ) 1Ω, 2Ω, 3Ω, 1.5Ω", "isCorrect": false },
                { "text": "ب) 1Ω, 3Ω, 1Ω, 1Ω", "isCorrect": false },
                { "text": "ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω", "isCorrect": true },
                { "text": "د) 4Ω, 3Ω, 2Ω, 1Ω", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! R₁=0.5Ω, R₂=1Ω, R₃=1.5Ω, R₄=2Ω"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 1Ω, 2Ω, 3Ω, 1.5Ω",
        "ب) 1Ω, 3Ω, 1Ω, 1Ω",
        "ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω  ✅ (الإجابة الصحيحة)",
        "د) 4Ω, 3Ω, 2Ω, 1Ω",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V_total = 15 V, I = 3 A",
        "V₄ = 4V₁, V₃ = 3V₁, V₂ = 2V₁",
        "",
        "مجموع الجهود: V₁ + 2V₁ + 3V₁ + 4V₁ = 15",
        "10V₁ = 15 → V₁ = 1.5 V",
        "",
        "V₂ = 3 V, V₃ = 4.5 V, V₄ = 6 V",
        "",
        "R = V/I:",
        "R₁ = 1.5/3 = 0.5 Ω",
        "R₂ = 3/3 = 1 Ω",
        "R₃ = 4.5/3 = 1.5 Ω",
        "R₄ = 6/3 = 2 Ω",
        "",
        "الإجابة: ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 0.5Ω, 1Ω, 1.5Ω, 2Ω ✅"
},

// س 47
// ============================================================
// الأسئلة من س 47 إلى س 56 (2022-2023)
// ============================================================

// س 47
{
    "title": "س 47 (2022-2023): موزع الجهد",
    "text": "تتكون دائرة موزع الجهد في الشكل التالي من مقاومات متوالية (20 Ω ، 30 Ω) فيكون الجهد عبر المقاومة (20 Ω) هو:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g stroke="#000000" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 180,230 L 180,80 L 330,80 L 330,130" />
            <line x1="330" y1="210" x2="330" y2="290" />
            <path d="M 330,370 L 330,420 L 180,420 L 180,270" />
            <line x1="150" y1="230" x2="210" y2="230" stroke-width="3.5" />
            <line x1="165" y1="250" x2="195" y2="250" stroke-width="7" />
            <rect x="310" y="130" width="40" height="80" fill="#ffffff" />
            <rect x="310" y="290" width="40" height="80" fill="#ffffff" />
        </g>
        <g font-family="Arial, sans-serif" font-size="22" fill="#000000" font-weight="bold">
            <text x="135" y="248" text-anchor="end" font-style="italic">5V</text>
            <text x="370" y="175" text-anchor="start">20 Ω</text>
            <text x="370" y="335" text-anchor="start">30 Ω</text>
        </g>
    </svg>`,
    "options": [
        { "text": "أ) 0.1 V", "isCorrect": false },
        { "text": "ب) 2 V", "isCorrect": true },
        { "text": "ج) 3 V", "isCorrect": false },
        { "text": "د) 5 V", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو الجهد عبر المقاومة 20 Ω؟",
            "options": [
                { "text": "أ) 0.1 V", "isCorrect": false },
                { "text": "ب) 2 V", "isCorrect": true },
                { "text": "ج) 3 V", "isCorrect": false },
                { "text": "د) 5 V", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! V₂₀ = 2 V"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 0.1 V",
        "ب) 2 V  ✅ (الإجابة الصحيحة)",
        "ج) 3 V",
        "د) 5 V",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V_total = 5 V, R₁ = 20 Ω, R₂ = 30 Ω",
        "R_total = 20 + 30 = 50 Ω",
        "I = V_total / R_total = 5 / 50 = 0.1 A",
        "V₂₀ = I × R₁ = 0.1 × 20 = 2 V",
        "",
        "الإجابة: ب) 2 V ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 2 V ✅"
},

// س 48
{
    "title": "س 48 (2022-2023): مبدأ حفظ الطاقة في المحولات",
    "text": "مبدأ حفظ الطاقة في المحولات الكهربائية هو:",
    "options": [
        { "text": "أ) مقاومة الملف الابتدائي = مقاومة الملف الثانوي", "isCorrect": false },
        { "text": "ب) عدد لفات الملف الابتدائي = عدد لفات الملف الثانوي", "isCorrect": false },
        { "text": "ج) القدرة في الملف الابتدائي = القدرة في الملف الثانوي", "isCorrect": true },
        { "text": "د) جهد الملف الابتدائي = جهد الملف الثانوي", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "مبدأ حفظ الطاقة في المحولات الكهربائية هو:",
            "options": [
                { "text": "أ) مقاومة الملف الابتدائي = مقاومة الملف الثانوي", "isCorrect": false },
                { "text": "ب) عدد لفات الملف الابتدائي = عدد لفات الملف الثانوي", "isCorrect": false },
                { "text": "ج) القدرة في الملف الابتدائي = القدرة في الملف الثانوي", "isCorrect": true },
                { "text": "د) جهد الملف الابتدائي = جهد الملف الثانوي", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! القدرة في الملف الابتدائي = القدرة في الملف الثانوي"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) مقاومة الملف الابتدائي = مقاومة الملف الثانوي",
        "ب) عدد لفات الملف الابتدائي = عدد لفات الملف الثانوي",
        "ج) القدرة في الملف الابتدائي = القدرة في الملف الثانوي  ✅ (الإجابة الصحيحة)",
        "د) جهد الملف الابتدائي = جهد الملف الثانوي",
        "",
        "══════════════ التوضيح ══════════════",
        "• ينص مبدأ حفظ الطاقة في المحول المثالي على أن:",
        "  P₁ = P₂ (القدرة الداخلة = القدرة الخارجة)",
        "",
        "الإجابة: ج) القدرة في الملف الابتدائي = القدرة في الملف الثانوي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) القدرة في الملف الابتدائي = القدرة في الملف الثانوي ✅"
},

// س 49
{
    "title": "س 49 (2022-2023): الطاقة المحولة من النضيدة الجافة",
    "text": "إذا كانت القوة الدافعة الكهربائية للنضيدة الجافة (9 V) وتدفع تياراً كهربائياً شدته (0.5 A) فإن الطاقة المحولة من النضيدة في الثانية الواحدة تساوي:",
    "options": [
        { "text": "أ) 3 J", "isCorrect": false },
        { "text": "ب) 4.5 J", "isCorrect": true },
        { "text": "ج) 9 J", "isCorrect": false },
        { "text": "د) 18 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي الطاقة المحولة في الثانية الواحدة؟",
            "options": [
                { "text": "أ) 3 J", "isCorrect": false },
                { "text": "ب) 4.5 J", "isCorrect": true },
                { "text": "ج) 9 J", "isCorrect": false },
                { "text": "د) 18 J", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! E = 4.5 J"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 3 J",
        "ب) 4.5 J  ✅ (الإجابة الصحيحة)",
        "ج) 9 J",
        "د) 18 J",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: V = 9 V, I = 0.5 A, t = 1 s",
        "P = V × I = 9 × 0.5 = 4.5 W",
        "E = P × t = 4.5 × 1 = 4.5 J",
        "",
        "الإجابة: ب) 4.5 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 4.5 J ✅"
},

// س 50
{
    "title": "س 50 (2022-2023): حساب المقاومة والشحنة",
    "text": "مقاومة (R) يمر بها تيار كهربائي (8 A) وفرق الجهد بين طرفيها (20 V) فإذا مر التيار لمدة (30 s) فإن المقاومة (R) وكمية الشحنة (Q) تساوي:",
    "options": [
        { "text": "أ) 2.5 Ω, 240 C", "isCorrect": true },
        { "text": "ب) 2.5 Ω, 120 C", "isCorrect": false },
        { "text": "ج) 0.4 Ω, 120 C", "isCorrect": false },
        { "text": "د) 0.4 Ω, 240 C", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيمة المقاومة R وكمية الشحنة Q؟",
            "options": [
                { "text": "أ) 2.5 Ω, 240 C", "isCorrect": true },
                { "text": "ب) 2.5 Ω, 120 C", "isCorrect": false },
                { "text": "ج) 0.4 Ω, 120 C", "isCorrect": false },
                { "text": "د) 0.4 Ω, 240 C", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! R = 2.5 Ω, Q = 240 C"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 2.5 Ω, 240 C  ✅ (الإجابة الصحيحة)",
        "ب) 2.5 Ω, 120 C",
        "ج) 0.4 Ω, 120 C",
        "د) 0.4 Ω, 240 C",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: I = 8 A, V = 20 V, t = 30 s",
        "R = V/I = 20/8 = 2.5 Ω",
        "Q = I × t = 8 × 30 = 240 C",
        "",
        "الإجابة: أ) 2.5 Ω, 240 C ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 2.5 Ω, 240 C ✅"
},

// س 51
{
    "title": "س 51 (2022-2023): توصيل المصابيح في المنازل",
    "text": "في دائرة الإضاءة إذا عطب أي مصباح فلن تتأثر بقية المصابيح الأخرى بسبب أنها:",
    "options": [
        { "text": "أ) المصابيح متساوية في القدرة الكهربائية", "isCorrect": false },
        { "text": "ب) المصابيح موصلة على التوالي", "isCorrect": false },
        { "text": "ج) المصابيح موصلة على التوازي", "isCorrect": true },
        { "text": "د) كل مصباح موصل بدائرة مضيئة", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "لماذا لا تتأثر المصابيح الأخرى عند عطب أحدها؟",
            "options": [
                { "text": "أ) المصابيح متساوية في القدرة الكهربائية", "isCorrect": false },
                { "text": "ب) المصابيح موصلة على التوالي", "isCorrect": false },
                { "text": "ج) المصابيح موصلة على التوازي", "isCorrect": true },
                { "text": "د) كل مصباح موصل بدائرة مضيئة", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! المصابيح موصلة على التوازي."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) المصابيح متساوية في القدرة الكهربائية",
        "ب) المصابيح موصلة على التوالي",
        "ج) المصابيح موصلة على التوازي  ✅ (الإجابة الصحيحة)",
        "د) كل مصباح موصل بدائرة مضيئة",
        "",
        "══════════════ التوضيح ══════════════",
        "• في التوصيل على التوازي، لكل مصباح مسار مستقل.",
        "• إذا عطب أحد المصابيح، تظل بقية المسارات مغلقة.",
        "• هذه هي الطريقة المعتمدة في التوصيلات المنزلية.",
        "",
        "الإجابة: ج) المصابيح موصلة على التوازي ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) المصابيح موصلة على التوازي ✅"
},
// س 52
{
    "title": "س 52 (2022-2023): صنع المغناطيسات الكهربائية",
    "text": "الفلز الذي يستخدم بشكل شائع في صنع المغناطيسات الكهربائية:",
    "options": [
        { "text": "أ) الرصاص", "isCorrect": false },
        { "text": "ب) الحديد المطاوع", "isCorrect": true },
        { "text": "ج) الألمونيوم", "isCorrect": false },
        { "text": "د) القصدير", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) الرصاص",
        "ب) الحديد المطاوع  ✅ (الإجابة الصحيحة)",
        "ج) الألمونيوم",
        "د) القصدير",
        "",
        "══════════════ التوضيح ══════════════",
        "• الحديد المطاوع مادة مغناطيسية 'لينة'.",
        "• يتميز بنفاذية مغناطيسية عالية.",
        "• يتمغنط بسرعة عند مرور التيار ويفقد المغنطة بسرعة عند قطع التيار.",
        "• مثالي للمغناطيسات الكهربائية المؤقتة.",
        "",
        "الإجابة: ب) الحديد المطاوع ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) الحديد المطاوع ✅"
},

// س 53
{
    "title": "س 53 (2022-2023): دلك الزجاج بالحرير",
    "text": "عند دلك ساق من الزجاج بقطعة من الحرير:",
    "options": [
        { "text": "أ) الشحنة الموجبة تنتقل من الحرير إلى الساق", "isCorrect": false },
        { "text": "ب) الإلكترونات تنتقل من الساق إلى الحرير", "isCorrect": true },
        { "text": "ج) الإلكترونات تنتقل من الحرير إلى الساق", "isCorrect": false },
        { "text": "د) تتولد حرارة فقط دون انتقال أي شحنات كهربائية بينهما", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) الشحنة الموجبة تنتقل من الحرير إلى الساق",
        "ب) الإلكترونات تنتقل من الساق إلى الحرير  ✅ (الإجابة الصحيحة)",
        "ج) الإلكترونات تنتقل من الحرير إلى الساق",
        "د) تتولد حرارة فقط دون انتقال أي شحنات كهربائية بينهما",
        "",
        "══════════════ التوضيح ══════════════",
        "• عند دلك الزجاج بالحرير، تنتقل الإلكترونات من الزجاج إلى الحرير.",
        "• الزجاج: يفقد إلكترونات ← يصبح مشحوناً موجباً.",
        "• الحرير: يكتسب إلكترونات ← يصبح مشحوناً سالباً.",
        "• السبب: الحرير يمتلك ألفة إلكترونية أعلى من الزجاج.",
        "",
        "الإجابة: ب) الإلكترونات تنتقل من الساق إلى الحرير ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) الإلكترونات تنتقل من الساق إلى الحرير ✅"
},
// س 54
{
    "title": "س 54 (2022-2023): قراءة الأميتر والفولتميتر",
    "text": "في الشكل التالي، قراءة الأميتر والفولتميتر تساوي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 850 450" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
            </marker>
        </defs>
        <g stroke="#000000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <line x1="50" y1="180" x2="130" y2="180" marker-end="url(#arrow)" />
            <line x1="130" y1="90" x2="130" y2="270" />
            <line x1="130" y1="90" x2="190" y2="90" marker-end="url(#arrow)" />
            <circle cx="230" cy="90" r="25" fill="#ffffff" />
            <line x1="255" y1="90" x2="300" y2="90" />
            <rect x="300" y="70" width="70" height="40" fill="#ffffff" />
            <line x1="370" y1="90" x2="480" y2="90" />
            <line x1="130" y1="270" x2="300" y2="270" marker-end="url(#arrow)" />
            <rect x="300" y="250" width="70" height="40" fill="#ffffff" />
            <line x1="370" y1="270" x2="480" y2="270" />
            <line x1="480" y1="90" x2="480" y2="270" />
            <line x1="480" y1="180" x2="520" y2="180" />
            <line x1="520" y1="165" x2="520" y2="260" />
            <line x1="520" y1="165" x2="560" y2="165" />
            <rect x="560" y="145" width="70" height="40" fill="#ffffff" />
            <line x1="630" y1="165" x2="670" y2="165" />
            <line x1="520" y1="260" x2="565" y2="260" />
            <circle cx="595" cy="260" r="25" fill="#ffffff" />
            <line x1="620" y1="260" x2="670" y2="260" />
            <line x1="670" y1="165" x2="670" y2="260" />
            <line x1="670" y1="180" x2="750" y2="180" />
        </g>
        <g font-family="Arial, sans-serif" font-size="19" fill="#000000" text-anchor="middle" font-weight="bold">
            <text x="230" y="97" font-size="21" font-style="italic">A</text>
            <text x="595" y="267" font-size="21" font-style="italic">V</text>
            <text x="335" y="60">2Ω</text>
            <text x="335" y="240">2Ω</text>
            <text x="595" y="135">2Ω</text>
            <text x="85" y="170" font-style="italic">I</text>
            <text x="155" y="80" font-style="italic">I₁</text>
            <text x="180" y="298" font-style="italic">I₂ = 2A</text>
        </g>
    </svg>`,
    "options": [
        { "text": "أ) V = 4 V, I₁ = 4 A", "isCorrect": false },
        { "text": "ب) V = 4 V, I₁ = 2 A", "isCorrect": false },
        { "text": "ج) V = 2 V, I₁ = 8 A", "isCorrect": false },
        { "text": "د) V = 8 V, I₁ = 2 A", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قراءة الأميتر والفولتميتر؟",
            "options": [
                { "text": "أ) V = 4 V, I₁ = 4 A", "isCorrect": false },
                { "text": "ب) V = 4 V, I₁ = 2 A", "isCorrect": false },
                { "text": "ج) V = 2 V, I₁ = 8 A", "isCorrect": false },
                { "text": "د) V = 8 V, I₁ = 2 A", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! V = 8 V, I₁ = 2 A"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) V = 4 V, I₁ = 4 A",
        "ب) V = 4 V, I₁ = 2 A",
        "ج) V = 2 V, I₁ = 8 A",
        "د) V = 8 V, I₁ = 2 A  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ الحل ══════════════",
        "1) المقاومتان 2Ω و 2Ω على التوازي → التيار يتوزع بالتساوي → I₁ = I₂ = 2A",
        "2) التيار الكلي I = I₁ + I₂ = 2 + 2 = 4A",
        "3) الفولتميتر يقيس الجهد على المقاومة 2Ω الثالثة → V = I × R = 4 × 2 = 8V",
        "",
        "الإجابة: د) V = 8 V, I₁ = 2 A ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) V = 8 V, I₁ = 2 A ✅"
},

// س 55
{
    "title": "س 55 (2022-2023): اختبارات المغناطيس",
    "text": "قام طالب بإجراء أربعة اختبارات على المغناطيس، أي من الأشكال التالية تؤدي إلى نتيجة غير صحيحة؟",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <line x1="400" y1="20" x2="400" y2="580" stroke="#cccccc" stroke-width="2" stroke-dasharray="5,5" />
        <line x1="20" y1="300" x2="780" y2="300" stroke="#cccccc" stroke-width="2" stroke-dasharray="5,5" />
        <g stroke="#000000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect x="50" y="90" width="120" height="60" fill="#e0e0e0" />
            <path d="M 190,120 L 230,120" stroke-width="2" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
            <rect x="250" y="90" width="50" height="60" fill="#ff4d4d" />
            <rect x="300" y="90" width="50" height="60" fill="#4d94ff" />
            <line x1="300" y1="90" x2="300" y2="150" />
            <rect x="450" y="90" width="50" height="60" fill="#ff4d4d" />
            <rect x="500" y="90" width="50" height="60" fill="#4d94ff" />
            <line x1="500" y1="90" x2="500" y2="150" />
            <path d="M 520,120 L 560,120" stroke-width="2" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
            <rect x="580" y="90" width="50" height="60" fill="#ff4d4d" />
            <rect x="630" y="90" width="50" height="60" fill="#4d94ff" />
            <line x1="630" y1="90" x2="630" y2="150" />
            <rect x="50" y="380" width="120" height="60" fill="#ffcc99" />
            <path d="M 190,410 L 230,410" stroke-width="2" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
            <rect x="250" y="380" width="50" height="60" fill="#ff4d4d" />
            <rect x="300" y="380" width="50" height="60" fill="#4d94ff" />
            <line x1="300" y1="380" x2="300" y2="440" />
            <rect x="450" y="380" width="50" height="60" fill="#4d94ff" />
            <rect x="500" y="380" width="50" height="60" fill="#ff4d4d" />
            <line x1="500" y1="380" x2="500" y2="440" />
            <path d="M 520,410 L 560,410" stroke-width="2" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)" />
            <rect x="580" y="380" width="50" height="60" fill="#4d94ff" />
            <rect x="630" y="380" width="50" height="60" fill="#ff4d4d" />
            <line x1="630" y1="380" x2="630" y2="440" />
        </g>
        <defs>
            <marker id="arrow-end" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
            </marker>
            <marker id="arrow-start" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#000000" />
            </marker>
        </defs>
        <g font-family="Arial, sans-serif" font-size="20" fill="#000000" text-anchor="middle" font-weight="bold">
            <text x="50" y="50" font-size="24" fill="#555555">(أ)</text>
            <text x="450" y="50" font-size="24" fill="#555555">(ب)</text>
            <text x="50" y="340" font-size="24" fill="#555555">(ج)</text>
            <text x="450" y="340" font-size="24" fill="#555555">(د)</text>
            <text x="110" y="127" font-size="18">قطعة من الحديد</text>
            <text x="275" y="127" fill="#ffffff">N</text>
            <text x="325" y="127" fill="#ffffff">S</text>
            <text x="190" y="200" font-size="22">تجاذب</text>
            <text x="475" y="127" fill="#ffffff">N</text>
            <text x="525" y="127" fill="#ffffff">S</text>
            <text x="605" y="127" fill="#ffffff">N</text>
            <text x="655" y="127" fill="#ffffff">S</text>
            <text x="570" y="200" font-size="22" fill="#dc2626">❌ تجاذب (غير صحيح)</text>
            <text x="110" y="417" font-size="18">قطعة من النحاس</text>
            <text x="275" y="417" fill="#ffffff">N</text>
            <text x="325" y="417" fill="#ffffff">S</text>
            <text x="190" y="490" font-size="22">لا يتأثر</text>
            <text x="475" y="417" fill="#ffffff">S</text>
            <text x="525" y="417" fill="#ffffff">N</text>
            <text x="605" y="417" fill="#ffffff">S</text>
            <text x="655" y="417" fill="#ffffff">N</text>
            <text x="570" y="490" font-size="22">تنافر</text>
        </g>
    </svg>`,
    "options": [
        { "text": "أ) قطعة من الحديد مع مغناطيس → تجاذب", "isCorrect": false },
        { "text": "ب) N مع N → تجاذب", "isCorrect": true },
        { "text": "ج) قطعة من النحاس مع مغناطيس → لا يتأثر", "isCorrect": false },
        { "text": "د) S مع S → تنافر", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "أي من الأشكال التالية تؤدي إلى نتيجة غير صحيحة؟",
            "options": [
                { "text": "أ) قطعة من الحديد مع مغناطيس → تجاذب", "isCorrect": false },
                { "text": "ب) N مع N → تجاذب", "isCorrect": true },
                { "text": "ج) قطعة من النحاس مع مغناطيس → لا يتأثر", "isCorrect": false },
                { "text": "د) S مع S → تنافر", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! الأقطاب المتشابهة تتنافر وليس تتجاذب."
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) قطعة من الحديد مع مغناطيس → تجاذب (صحيح)",
        "ب) N مع N → تجاذب  ❌ (الإجابة الصحيحة - نتيجة غير صحيحة)",
        "ج) قطعة من النحاس مع مغناطيس → لا يتأثر (صحيح)",
        "د) S مع S → تنافر (صحيح)",
        "",
        "══════════════ التوضيح ══════════════",
        "• الأقطاب المتشابهة تتنافر، والأقطاب المختلفة تتجاذب.",
        "• في الخيار (ب): N مع N (متشابهان) → يجب أن تتنافر وليس تتجاذب.",
        "",
        "الإجابة: ب) N مع N → تجاذب ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) N مع N → تجاذب ❌"
},

// س 56
// س 56 (بدون رسمة)
{
    "title": "س 56 (2022-2023): مقاومات متساوية على التوازي",
    "text": "إذا وصلت ثلاث مقاومات متساوية على التوازي فإن قيمة كل مقاومة تساوي:",
    "svgCode": "",
    "options": [
        { "text": "أ) ثلاثة أمثال المقاومة الكلية", "isCorrect": true },
        { "text": "ب) ثلث المقاومة الكلية", "isCorrect": false },
        { "text": "ج) ضعف المقاومة الكلية", "isCorrect": false },
        { "text": "د) نصف المقاومة الكلية", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "إذا وصلت ثلاث مقاومات متساوية على التوازي، فما هي قيمة كل مقاومة؟",
            "options": [
                { "text": "أ) ثلاثة أمثال المقاومة الكلية", "isCorrect": true },
                { "text": "ب) ثلث المقاومة الكلية", "isCorrect": false },
                { "text": "ج) ضعف المقاومة الكلية", "isCorrect": false },
                { "text": "د) نصف المقاومة الكلية", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! R = 3 × R_total"
        },
        {
            "title": "قانون التوازي",
            "question": "ما هو قانون المقاومة المكافئة للمقاومات المتساوية على التوازي؟",
            "options": [
                { "text": "R_total = R/n", "isCorrect": true },
                { "text": "R_total = n × R", "isCorrect": false },
                { "text": "R_total = R + n", "isCorrect": false }
            ],
            "feedback": "صحيح! R_total = R/n، حيث n هو عدد المقاومات."
        },
        {
            "title": "حساب قيمة كل مقاومة",
            "question": "إذا كان n = 3، فما هي قيمة R بدلالة R_total؟",
            "options": [
                { "text": "R = 3 × R_total", "isCorrect": true },
                { "text": "R = R_total/3", "isCorrect": false },
                { "text": "R = R_total + 3", "isCorrect": false }
            ],
            "feedback": "صحيح! R_total = R/3 → R = 3 × R_total"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) ثلاثة أمثال المقاومة الكلية  ✅ (الإجابة الصحيحة)",
        "ب) ثلث المقاومة الكلية",
        "ج) ضعف المقاومة الكلية",
        "د) نصف المقاومة الكلية",
        "",
        "══════════════ الحل ══════════════",
        "• عند توصيل (n) من المقاومات المتساوية (قيمة كل منها R) على التوازي:",
        "  R_total = R/n",
        "",
        "• لدينا n = 3:",
        "  R_total = R/3",
        "",
        "• لإيجاد قيمة المقاومة الواحدة (R):",
        "  R = 3 × R_total",
        "",
        "الإجابة: أ) ثلاثة أمثال المقاومة الكلية ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) ثلاثة أمثال المقاومة الكلية ✅"
}

// ============================================================
// 🏁 انتهت الأسئلة من س 47 إلى س 56 🏁
// ============================================================


];