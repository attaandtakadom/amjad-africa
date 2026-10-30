const questionsMatrix=[

{
    "title": "س 20 (ميكانيكا - استنتاج رياضي): سرعة كرة البندول عند موضع الاتزان",
    "text": "كرة صغيرة كتلتها (m) معلقة بواسطة خيط طوله (L). أزيحت الكرة جانباً حتى صنع الخيط مع العمودي زاوية مقدارها (60°)، ثم أُطلِقت من السكون. تكون سرعة الكرة (v) عندما يكون الخيط عمودياً (عند أسفل نقطة) مساوية للعلاقة التالية:\n\nأ) v = √[2gL]\nب) v = √[gL]\nج) v = gL\nد) v = 0.5gL",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #ffffff; border-radius: 12px; padding: 15px; text-align: center; border: 2px solid #f97316; direction: rtl;\">\n        <svg viewBox=\"0 0 400 280\" width=\"100%\" style=\"max-width: 350px; background: #fafafa; border-radius: 8px; margin-bottom: 10px;\">\n            <line x1=\"100\" y1=\"20\" x2=\"300\" y2=\"20\" stroke=\"#334155\" stroke-width=\"4\"/>\n            <line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"250\" stroke=\"#cbd5e1\" stroke-dasharray=\"5,5\" stroke-width=\"2\"/>\n            \n            <line x1=\"200\" y1=\"20\" x2=\"290\" y2=\"150\" stroke=\"#1e3a8a\" stroke-width=\"3\"/>\n            <circle cx=\"290\" cy=\"150\" r=\"14\" fill=\"#f59e0b\" stroke=\"#d97706\" stroke-width=\"2\"/>\n            \n            <line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"230\" stroke=\"#64748b\" stroke-width=\"2\"/>\n            <circle cx=\"200\" cy=\"230\" r=\"14\" fill=\"#ef4444\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n            \n            <path d=\"M 290 150 A 170 170 0 0 1 200 230\" fill=\"none\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"2\"/>\n            \n            <path d=\"M 200 70 A 50 50 0 0 1 225 57\" fill=\"none\" stroke=\"#059669\" stroke-width=\"2\"/>\n            <text x=\"215\" y=\"50\" font-family=\"Cairo\" font-size=\"14\" fill=\"#059669\" font-weight=\"bold\">θ = 60°</text>\n            \n            <line x1=\"200\" y1=\"150\" x2=\"320\" y2=\"150\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/>\n            <line x1=\"200\" y1=\"230\" x2=\"320\" y2=\"230\" stroke=\"#94a3b8\" stroke-dasharray=\"2,2\"/>\n            <line x1=\"310\" y1=\"150\" x2=\"310\" y2=\"230\" stroke=\"#dc2626\" stroke-width=\"2\"/>\n            <polygon points=\"310,150 306,157 314,157\" fill=\"none\"/>\n            <polygon points=\"310,230 306,223 314,223\" fill=\"none\"/>\n            <text x=\"320\" y=\"195\" font-family=\"Cairo\" font-size=\"16\" fill=\"#dc2626\" font-weight=\"bold\">h</text>\n            \n            <text x=\"255\" y=\"85\" font-family=\"Cairo\" font-size=\"14\" fill=\"#1e3a8a\" font-weight=\"bold\">L</text>\n            <text x=\"160\" y=\"140\" font-family=\"Cairo\" font-size=\"13\" fill=\"#475569\">L cos θ</text>\n        </svg>\n\n        <div style=\"margin-top: 10px; border-top: 2px dashed #f97316; padding-top: 10px; font-size: 15px; text-align: right; line-height: 1.6;\">\n            <strong style=\"color: #ea580c; font-size: 17px;\">📌 التلميح الرياضي والشرح الفكري:</strong><br>\n            • <b>القانون العام والأساسي (لكل الحالات):</b> السرعة دائماً تُحسب من العلاقة العريضة: <span style=\"direction: ltr; display: inline-block; font-weight: bold; color: #dc2626;\">v = √[2gh]</span><br>\n            • <b>كيف نحسب الارتفاع (h)؟</b> من المثلث الموضح بالرسم: <span style=\"direction: ltr; display: inline-block;\">h = L - L cos θ = L(1 - cos θ)</span><br>\n            • <b>في حالة زاوية 60°:</b> بما أن <span style=\"direction: ltr; display: inline-block;\">cos 60° = 0.5</span>، إذن الارتفاع <span style=\"direction: ltr; display: inline-block; color: #059669; font-weight: bold;\">h = 0.5 L</span> (نصف طول الخيط)، وعند التعويض به في القانون العام يختصر مباشرة إلى: <span style=\"direction: ltr; display: inline-block; font-weight: bold; color: #1e3a8a;\">v = √[gL]</span>.\n        </div>\n    </div>",
    "steps": [
      {
        "title": "قانون حفظ الطاقة الميكانيكية",
        "question": "ما هي العلاقة الرياضية النهائية لسرعة كرة البندول عند مرورها بالمركز؟",
        "options": [
          { "text": "أ) v = √[2gL]", "isCorrect": false },
          { "text": "ب) v = √[gL]", "isCorrect": true }
        ],
        "feedback": "✅ إجابة صحيحة وممتازة! نظراً لأن زاوية الإزاحة 60° فإن الارتفاع h يساوي نصف طول الخيط، مما يختصر الصيغة العامة v = √[2gh] إلى v = √[gL]."
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) v = √[2gL]",
      "ب) v = √[gL]  ✅ (الإجابة الصحيحة)",
      "ج) v = gL",
      "د) v = 0.5gL",
      "",
      "══════════════ 📝 الشرح والقوانين العامة لـ PDF ══════════════",
      "📢 القاعدة الثابتة لسرعة البندول الميكانيكي في جـمـيـع الـحـالات والـزوايـا هي:",
      "   👉   v = √[2gh]   👈  (قانون حفظ الطاقة العام)",
      "",
      "حيث (h) يمثل الارتفاع العمودي الذي تحركته الكرة لأعلى.",
      "",
      "══════════════ 📐 الاستنتاج الهندسي الرياضي (θ = 60°) ══════════════",
      "• خطوة 1: حساب الارتفاع الرأسي (h) بدلالة هندسة الشكل وطول الخيط (L):",
      "  القانون الهندسي للارتفاع: h = L(1 - cos θ)",
      "  نعوض بالزاوية الخاصة المعطاة θ = 60° (علماً بأن cos 60° = 0.5):",
      "  h = L(1 - 0.5)  =>  h = 0.5 L  (الارتفاع الفعلي يساوي نصف طول الخيط تماماً)",
      "",
      "• خطوة 2: التعويض في القانون العام المكتوب أعلاه لتعميم النتيجة:",
      "  نعوض بقيمة h المستنتجة (0.5L) داخل الجذر الأساسي للسرعة:",
      "  v = √[2 * g * (0.5L)]",
      "  بضرب الرقم 2 في نصف (0.5) يختزلان معاً ويتبقى 1، فتصبح الصيغة المخصصة لهذه الحالة:",
      "  v = √[gL]",
      "",
      "الإجابة النهائية المعتمدة: ب) v = √[gL]"
    ],
    "pdfFinalAnswer": "القانون العام الشامل: v = √[2gh] | الإجابة لهذه الحالة: ب) v = √[gL]"
  }
,
// س3 - التغير في طاقة الحركة
{
    "title": "س 32 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "جسم كتلته 4 kg يتحرك بسرعة 5 m/s، فإذا تضاعفت سرعته لتصبح 10 m/s، فإن الزيادة (التغير) في طاقة حركته تساوي:\n\nأ) 50 J\nب) 150 J\nج) 200 J\nد) 10 J",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> ΔEk = ½m(v₂² − v₁²)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            ΔEk = ½×4×(10²−5²) = 2×(100−25) = 150 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هو التغير في طاقة الحركة؟",
        "options": [
          { "text": "أ) 50 J", "isCorrect": false },
          { "text": "ب) 150 J", "isCorrect": true },
          { "text": "ج) 200 J", "isCorrect": false },
          { "text": "د) 10 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! ΔEk = 150 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 50 J",
      "ب) 150 J  ✅ (الإجابة الصحيحة)",
      "ج) 200 J",
      "د) 10 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 4 kg, v₁ = 5 m/s, v₂ = 10 m/s",
      "ΔEk = ½m(v₂² − v₁²)",
      "ΔEk = ½×4×(100 − 25) = 2×75 = 150 J",
      "",
      "الإجابة: ب) 150 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 150 J ✅"
  },


  {
    "title": "مسألة 37 (شغل وطاقة): طاقة الوضع عند أقصى ارتفاع",
    "text": "قُذف جسم كتلته 0.5 kg رأسياً إلى أعلى بسرعة ابتدائية 20 m/s، احسب طاقة وضعه عند أقصى ارتفاع يصل إليه (بإهمال مقاومة الهواء، واعتبار g = 10 m/s²).\n\nأ) 50 J\nب) 100 J\nج) 150 J\nد) 200 J",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            Ek = ½×0.5×20² = 100 J → Ep = 100 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي طاقة الوضع عند أقصى ارتفاع؟",
        "options": [
          { "text": "أ) 50 J", "isCorrect": false },
          { "text": "ب) 100 J", "isCorrect": true },
          { "text": "ج) 150 J", "isCorrect": false },
          { "text": "د) 200 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! Ep = 100 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 50 J",
      "ب) 100 J  ✅ (الإجابة الصحيحة)",
      "ج) 150 J",
      "د) 200 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 0.5 kg, u = 20 m/s, g = 10 m/s²",
      "بإهمال مقاومة الهواء: Ep = Ek (حفظ الطاقة)",
      "Ek = ½mu² = ½×0.5×20² = 0.25×400 = 100 J",
      "",
      "الإجابة: ب) 100 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 100 J ✅"
  },
{
    "title": "س 39 (شغل وطاقة - صح/خطأ): الشغل الناتج من القوة العمودية",
    "text": "الشغل الناتج من القوة العمودية على اتجاه الحركة يساوي دائماً صفراً.\n\nأ) صح\nب) خطأ",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 W = F·s·cosθ → θ = 90° → cos90° = 0 → W = 0\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "هل الشغل الناتج من القوة العمودية يساوي صفراً؟",
        "options": [
          { "text": "أ) صح", "isCorrect": true },
          { "text": "ب) خطأ", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! W = F·s·cos90° = 0"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) صح  ✅ (الإجابة الصحيحة)",
      "ب) خطأ",
      "",
      "══════════════ التوضيح ══════════════",
      "W = F·s·cosθ",
      "عندما تكون القوة عمودية: θ = 90°",
      "cos90° = 0 → W = 0",
      "",
      "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
  },
  
 
// س7 - حفظ الطاقة (طاقة الوضع عند أقصى  أقصى ارتفاع)
{
    "title": "س 45 (شغل وطاقة): طاقة الوضع عند أقصى ارتفاع",
    "text": "قُذف حجر كتلته (0.4 kg) رأسياً إلى أعلى من سطح الأرض بسرعة ابتدائية (15 m/s)، بإهمال مقاومة الهواء، فإن طاقة وضع الثقل للحجر عند أقصى ارتفاع يصل إليه تساوي:\n\nأ) 45 J\nب) 90 J\nج) 22.5 J\nد) 60 J",
    "options": [],
    "correctAnswerIndex": 0,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;\">\n        <div style=\"font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;\">💡 تلميح الحل</div>\n        <div style=\"font-size: 13px; color: #475569; line-height: 1.6;\">\n            <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)\n        </div>\n        <div style=\"font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;\">\n            Ek = ½×0.4×15² = 45 J → Ep = 45 J\n        </div>\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي طاقة الوضع عند أقصى ارتفاع؟",
        "options": [
          { "text": "أ) 45 J", "isCorrect": true },
          { "text": "ب) 90 J", "isCorrect": false },
          { "text": "ج) 22.5 J", "isCorrect": false },
          { "text": "د) 60 J", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! Ep = 45 J"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) 45 J  ✅ (الإجابة الصحيحة)",
      "ب) 90 J",
      "ج) 22.5 J",
      "د) 60 J",
      "",
      "══════════════ الحل ══════════════",
      "المعطيات: m = 0.4 kg, u = 15 m/s, g = 10 m/s²",
      "بإهمال مقاومة الهواء: Ep = Ek (حفظ الطاقة)",
      "Ek = ½mu² = ½×0.4×15² = 0.2×225 = 45 J",
      "",
      "الإجابة: أ) 45 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 45 J ✅"
  },
 
{
    "title": "س 47 (شغل وطاقة - مزاوجة): طاقة الوضع",
    "text": "الطاقة التي يمتلكها الجسم بسبب موضعه أو حالته تُسمى:\n\nأ) طاقة الحركة\nب) طاقة الوضع\nج) الطاقة الميكانيكية\nد) الطاقة الحرارية",
    "options": [],
    "correctAnswerIndex": 1,
    "svgCode": "<div style=\"background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;\">\n        💡 الطاقة بسبب الموقع = طاقة الوضع (Ep)\n    </div>",
    "steps": [
      {
        "title": "اختر الإجابة الصحيحة",
        "question": "ما هي الطاقة التي يمتلكها الجسم بسبب موضعه؟",
        "options": [
          { "text": "أ) طاقة الحركة", "isCorrect": false },
          { "text": "ب) طاقة الوضع", "isCorrect": true },
          { "text": "ج) الطاقة الميكانيكية", "isCorrect": false },
          { "text": "د) الطاقة الحرارية", "isCorrect": false }
        ],
        "feedback": "✅ صحيح! طاقة الوضع = الطاقة بسبب الموقع"
      }
    ],
    "pdfSolutionSteps": [
      "══════════════ الخيارات ══════════════",
      "أ) طاقة الحركة",
      "ب) طاقة الوضع  ✅ (الإجابة الصحيحة)",
      "ج) الطاقة الميكانيكية",
      "د) الطاقة الحرارية",
      "",
      "══════════════ التوضيح ══════════════",
      "طاقة الوضع = الطاقة المخزنة بسبب الموقع أو الحالة",
      "",
      "الإجابة: ب) طاقة الوضع ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) طاقة الوضع ✅"
  },

// س19 - تحولات الطاقة في القذف الرأسي
{
    "title": "س 70 (شغل وطاقة - صح/خطأ): تحولات الطاقة في القذف الرأسي",
    "text": "إذا قُذف حجر رأسياً إلى أعلى فإن طاقة الوضع تتحول إلى طاقة حركة عند أقصى ارتفاع",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 عند الصعود: Ek → Ep , عند الهبوط: Ep → Ek
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل تتحول طاقة الوضع إلى طاقة حركة عند أقصى ارتفاع؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! العكس هو الصحيح"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 عند الصعود: Ek → Ep",
        "📌 عند أقصى ارتفاع v = 0 → Ek = 0 (كلها Ep)",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س20 - طاقة الوضع والجاذبية
{
    "title": "س 71 (شغل وطاقة - صح/خطأ): طاقة الوضع والجاذبية",
    "text": "لا تعتمد طاقة الوضع على تأثير الجاذبية الأرضية على الجسم",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 Ep = mgh (تعتمد على g, m, h) ← إذا كانت g = 0 → Ep = 0
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل تعتمد طاقة الوضع على الجاذبية الأرضية؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! Ep = mgh → تعتمد على g"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 Ep = mgh (تعتمد على g)",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

]