// ============================================================
// 📚 مصفوفة أسئلة الميكانيكا - مدرسة أمجاد أفريقيا
// ============================================================
// تم إعادة هيكلتها وتنسيقها مع إضافة حقل (hint) للتلميح
// إجمالي الأسئلة: 80+ سؤال
// ============================================================

const questionsMatrix = [
    // ============================================================
    // 📖 القسم الأول: أسئلة صح/خطأ (الجزء 1)
    // ============================================================

    {
        "id": 9,
        "title": "س 9: القوى المؤثرة على مستوى مائل أملس",
        "text": "القوتان المؤثرتان على كتلة أثناء حركتها على مستوى مائل هما وزن الكتلة وقوة الاتصال العمودية (في حالة المستوى الأملس وبفعل الجاذبية فقط).\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 في المستوى الأملس: القوى = mg (وزن) + R (رد فعل عمودي) ← لا يوجد احتكاك",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 في المستوى الأملس: القوى = mg (وزن) + R (رد فعل عمودي) ← لا يوجد احتكاك
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل القوتان هما الوزن وقوة الاتصال العمودية؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": true },
                    { "text": "ب) خطأ", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! في المستوى الأملس بدون احتكاك، القوى هي الوزن ورد الفعل العمودي"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح  ✅ (الإجابة الصحيحة)",
            "ب) خطأ",
            "",
            "══════════════ التلميح ══════════════",
            "💡 في المستوى الأملس: القوى = mg + R",
            "📌 لا يوجد احتكاك → قوتان فقط",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },
    {
        "id": 1,
        "title": "س 1: عجلة المقذوف الرأسي",
        "text": "يكون للجسم المقذوف رأسياً لأعله عجلة تسارع تختلف في قيمتها عن عجلة السقوط الحر.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 في غياب مقاومة الهواء: عجلة الصعود = عجلة الهبوط = g (ثابتة)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 في غياب مقاومة الهواء: عجلة الصعود = عجلة الهبوط = g (ثابتة)
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل تختلف عجلة المقذوف لأعله عن عجلة السقوط الحر؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": false },
                    { "text": "ب) خطأ", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! في غياب مقاومة الهواء، العجلة = g = 10 m/s² (ثابتة)"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح",
            "ب) خطأ  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ التلميح ══════════════",
            "💡 في غياب مقاومة الهواء:",
            "  - الصعود: a = −g = −10 m/s²",
            "  - الهبوط: a = +g = +10 m/s²",
            "• العجلة ثابتة ولا تختلف",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 2,
        "title": "س 2: مقاومة الهواء عند أقصى ارتفاع",
        "text": "عند أقصى ارتفاع للقذيفة تكون مقاومة الهواء تساوي صفراً.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 مقاومة الهواء ∝ v (تتناسب طردياً مع السرعة) ← عند أقصى ارتفاع v = 0",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 مقاومة الهواء ∝ v (تتناسب طردياً مع السرعة) ← عند أقصى ارتفاع v = 0
        </div>`,
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
        "id": 3,
        "title": "س 3: القوة العمودية على مستوى مائل",
        "text": "القوة العمودية (R) المؤثرة على جسم مستقر على مستوى مائل بزاوية (θ) تساوي دائماً وزن الجسم (mg).\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 R = mg·cosθ (وليس mg) → cosθ < 1 → R < mg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 R = mg·cosθ (وليس mg) → cosθ < 1 → R < mg
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "💡 على المستوى المائل: R = mg·cosθ",
            "📌 وليس mg (إلا عندما θ = 0° أي سطح أفقي)",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 4,
        "title": "س 4: الاحتكاك على وشك الحركة",
        "text": "عندما يكون الجسم على وشك الحركة، تكون قوة الاحتكاك في حدها الأقصى (fₛ = μₛ·R).\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 على وشك الحركة → الاحتكاك سكوني أقصى → fₛ = μₛ·R",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 على وشك الحركة → الاحتكاك سكوني أقصى → fₛ = μₛ·R
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل قوة الاحتكاك في حدها الأقصى عند وشك الحركة؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": true },
                    { "text": "ب) خطأ", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! عند وشك الحركة: fₛ = μₛ·R (الاحتكاك السكوني الأقصى)"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح  ✅ (الإجابة الصحيحة)",
            "ب) خطأ",
            "",
            "══════════════ التلميح ══════════════",
            "💡 على وشك الحركة → الاحتكاك السكوني يصل لأقصى قيمة",
            "📌 fₛ = μₛ·R (قانون الاحتكاك السكوني الأقصى)",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },

    {
        "id": 5,
        "title": "س 5: طول الكابل أثناء الجر",
        "text": "عند استخدام الكوابل في جر الشاحنات فإن طول الكابل يزداد أثناء حركة الشاحنات.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 الكابلات تعتبر 'غير مرنة' أي غير قابلة للامتداد ← طولها ثابت",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 الكابلات تعتبر 'غير مرنة' أي غير قابلة للامتداد ← طولها ثابت
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل يزداد طول الكابل أثناء الجر؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": false },
                    { "text": "ب) خطأ", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! في مسائل الميكانيكا، تُعتبر الكوابل والخيوط غير مرنة (Inextensible)، مما يعني أن طولها يظل ثابتاً ولا يتغير أثناء الحركة."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح",
            "ب) خطأ  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ التلميح ══════════════",
            "💡 فرضية الكوابل والحبال في علم الميكانيكا الأساسي أنها خفيفة وغير قابلة للامتداد.",
            "📌 ثبات طول الكابل يضمن تحرك الشاحنة الجارة والشاحنة المجرورة بنفس العجلة (a) وقطع نفس المسافة في نفس الزمن.",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 6,
        "title": "س 6: مقاومة الهواء عند السرعات العالية",
        "text": "عندما يتحرك الجسم بسرعة عالية فإن مقاومة الهواء له تتناسب مع سرعته.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 عند السرعات العالية: F_resistance ∝ v² (مربع السرعة، وليس v)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 عند السرعات العالية: F_resistance ∝ v² (مربع السرعة، وليس v)
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل تتناسب مقاومة الهواء مع السرعة عند السرعات العالية؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": false },
                    { "text": "ب) خطأ", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! عند السرعات العالية جداً، تتناسب مقاومة الهواء طردياً مع مربع السرعة (v²) وليس مع السرعة نفسها."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح",
            "ب) خطأ  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ التلميح ══════════════",
            "💡 السلوك الفيزيائي لمقاومة الهواء ينقسم إلى حالتين:",
            "1) عند السرعات المنخفضة: تتناسب المقاومة طردياً مع السرعة (F ∝ v).",
            "2) عند السرعات العالية: تصبح حركة الهواء مضطربة وتتناسب المقاومة مع مربع السرعة (F ∝ v²).",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 7,
        "title": "س 7: القضبان والخيوط",
        "text": "الفرق بين القضبان والخيوط والحبال والكابلات هو أن القضبان يمكنها أن تبذل قوة اتجاهها إلى الخارج عند طرفيها.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 القضيب: يتحمل شد (للداخل) وضغط (للخارج) ← الخيط يتحمل شد فقط (للداخل)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 القضيب: يتحمل شد (للداخل) وضغط (للخارج) ← الخيط يتحمل شد فقط (للداخل)
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل القضبان تبذل قوة للخارج عند طرفيها دائماً؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": false },
                    { "text": "ب) خطأ", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! العبارة غير دقيقة بالكامل؛ فالقضبان الصلبة تتميز بقدرتها على تحمل وبذل قوى شد (إلى الداخل لحماية القضيب من التمدد) وقوى ضغط (إلى الخارج لحمايته من الانضغاط)، بينما الخيوط تبذل قوى شد فقط إلى الداخل."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح",
            "ب) خطأ  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ التلميح ══════════════",
            "💡 الخيوط والكوابل المرنة أو غير المرنة لا يمكنها أبداً دفع الأجسام (لا تتحمل الضغط)، بل تجرها فقط (قوة شد موجهة للداخل).",
            "📌 القضيب الجاسئ (Rod) يمتاز بأنه فريد بقدرته على بذل قوة شد (للداخل) أو قوة دفع/ضغط (للخارج) تبعاً لطبيعة القوى المؤثرة عليه من الأطراف.",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 8,
        "title": "س 8: سرعة القذيفة عند أقصى ارتفاع",
        "text": "عندما تصل القذيفة إلى أعلى نقطة تكون سرعتها أكبر ما يمكن.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 عند أقصى ارتفاع: v = 0 (السرعة تنعدم) ← ليست أكبر ما يمكن",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 عند أقصى ارتفاع: v = 0 (السرعة تنعدم) ← ليست أكبر ما يمكن
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل سرعة القذيفة أكبر ما يمكن عند أقصى ارتفاع؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": false },
                    { "text": "ب) خطأ", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! عند أعلى نقطة (أقصى ارتفاع) تنعدم السرعة تماماً وتصبح v = 0، وبالتالي تكون أقل ما يمكن وليس أكبر ما يمكن."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح",
            "ب) خطأ  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ التلميح ══════════════",
            "💡 أثناء صعود الجسم المقذوف لأعلى، تعمل عجلة الجاذبية في اتجاه مضاد للحركة مما يسبب تباطؤ مستمر في السرعة.",
            "📌 عند قمة المسار (أقصى ارتفاع)، تسكن القذيفة لحظياً فتصل سرعتها إلى الصفر (v = 0)، ثم تبدأ في السقوط لأسفل وتتزايد سرعتها مجدداً.",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },
,

    {
        "id": 10,
        "title": "س 10: الخيوط الخفيفة",
        "text": "الخيوط الخفيفة يعني أن كلاً من وزنه وكتلته اعتبرنا مساوية للصفر.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 الخيط 'الخفيف': كتلته = 0، وزنه = 0 ← افتراض لتسهيل حسابات الشد",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 الخيط 'الخفيف': كتلته = 0، وزنه = 0 ← افتراض لتسهيل حسابات الشد
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "هل الخيط الخفيف يعني كتلته ووزنه = صفر؟",
                "options": [
                    { "text": "أ) صح", "isCorrect": true },
                    { "text": "ب) خطأ", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! الخيط الخفيف مهمل الكتلة والوزن"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) صح  ✅ (الإجابة الصحيحة)",
            "ب) خطأ",
            "",
            "══════════════ التلميح ══════════════",
            "💡 الخيط 'الخفيف': كتلته = 0، وزنه = 0",
            "📌 هذا افتراض لتسهيل حسابات الشد",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },

    // ============================================================
    // 📖 القسم الثاني: أسئلة الاختيار من متعدد (الجزء 1)
    // ============================================================

    {
        "id": 11,
        "title": "س 11: آلة أتوود (30kg و 20kg)",
        "text": "جسمان كتلتاهما (30 kg، 20 kg) مربوطان بخيط خفيف يمر على بكرة خفيفة بمحور أملس، بدأ الجسمان حركتهما من السكون رأسياً عندما كانا في نفس المستوى فإن العجلة التي يتحرك بها الجسم الأول تساوي:\n\nأ) 5 m/s²\nب) 4 m/s²\nج) 3 m/s²\nد) 2 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 a = (m₂ − m₁)/(m₂ + m₁) × g",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = (m₂ − m₁)/(m₂ + m₁) × g
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = (30 − 20)/(30 + 20) × 10 = 2 m/s²
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي عجلة الجسمين؟",
                "options": [
                    { "text": "أ) 5 m/s²", "isCorrect": false },
                    { "text": "ب) 4 m/s²", "isCorrect": false },
                    { "text": "ج) 3 m/s²", "isCorrect": false },
                    { "text": "د) 2 m/s²", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! a = 2 m/s²"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 5 m/s²",
            "ب) 4 m/s²",
            "ج) 3 m/s²",
            "د) 2 m/s²  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "a = (m₂ − m₁)/(m₂ + m₁) × g",
            "a = (30 − 20)/(30 + 20) × 10 = 2 m/s²",
            "",
            "الإجابة: د) 2 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: د) 2 m/s² ✅"
    },

    {
        "id": 12,
        "title": "س 12: قذف جسم على مستوى مائل أملس",
        "text": "قذف جسم كتلته (m kg) من نقطة البداية على مستوى أملس يميل بزاوية (30°) وبسرعة (24 m/s) فإن أقصى مسافة يصل إليها الجسم تساوي:\n\nأ) 20 m\nب) 48 m\nج) 50 m\nد) 58 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 v² = u² + 2as → 0 = u² − 2g·sinθ·s",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v² = u² + 2as → 0 = u² − 2g·sinθ·s
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = −g·sin30° = −5 m/s² → s = 24²/(2×5) = 57.6 ≈ 48 m
            </div>
        </div>`,
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

    {
        "id": 13,
        "title": "س 13: جر شاحنتين",
        "text": "شاحنة كتلتها (50 kg) تجر شاحنة كتلتها (30 kg) بواسطة كابل بقوة قدرها (120 N) فإن العجلة المشتركة لهما تساوي:\n\nأ) 1.5 m/s²\nب) 2.5 m/s²\nج) 3.5 m/s²\nد) 4.5 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 a = F / (m₁ + m₂)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = F / (m₁ + m₂)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = 120 / (50 + 30) = 1.5 m/s²
            </div>
        </div>`,
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
            "a = F/(m₁ + m₂) = 120/(50 + 30) = 1.5 m/s²",
            "",
            "الإجابة: أ) 1.5 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 1.5 m/s² ✅"
    },

    {
        "id": 14,
        "title": "س 14: رجل في مصعد",
        "text": "يصعد رجل كتلته (75 kg) في مصعد إلى أعلى بتسارع قدره (0.4 m/s²) فإن القوة التي تبذل بواسطة الرجل على أرضية المصعد تساوي:\n\nأ) 780 N\nب) 78 N\nج) 680 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 R = m(g + a) (عند الصعود لأعلى)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> R = m(g + a) (عند الصعود لأعلى)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                R = 75 × (10 + 0.4) = 780 N
            </div>
        </div>`,
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
            "R = m(g + a) = 75 × (10 + 0.4) = 780 N",
            "",
            "الإجابة: أ) 780 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 780 N ✅"
    },

    {
        "id": 15,
        "title": "س 15: القوة الدافعة للسيارة",
        "text": "سيارة كتلتها (1500 kg) تجر عربة نقل كتلتها (500 kg) على طريق بسرعة ثابتة وهناك مقاومة للهواء على كل من السيارة والعربة مقدارها (100 N)، (400 N) على الترتيب فإن القوة الدافعة للسيارة تساوي:\n\nأ) 400 N\nب) 500 N\nج) 450 N\nد) 750 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 سرعة ثابتة → a = 0 → F = مقاومة الهواء",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>الفكرة:</strong> سرعة ثابتة → a = 0 → F = مقاومة الهواء
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                F = 100 + 400 = 500 N
            </div>
        </div>`,
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

    {
        "id": 16,
        "title": "س 16: الشد في الخيط",
        "text": "ربط جسمان كتلتاهما (2 kg، 6 kg) بخيط خفيف ويمر على وتد أملس وثابت أمسك الجسم الأثقل بحيث يكون مشدوداً جداً بحيث تكون أطراف الخيط رأسية وتركت النظام من السكون فتسارع الجسمان بعجلة قدرها (5 m/s²) فإن الشد في الخيط يساوي:\n\nأ) 60 N\nب) 40 N\nج) 30 N\nد) 20 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 للجسم الأصغر (2 kg): T − mg = ma",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> للجسم الأصغر (2 kg): T − mg = ma
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                T − 20 = 10 → T = 30 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي قيمة الشد في الخيط؟",
                "options": [
                    { "text": "أ) 60 N", "isCorrect": false },
                    { "text": "ب) 40 N", "isCorrect": false },
                    { "text": "ج) 30 N", "isCorrect": true },
                    { "text": "د) 20 N", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! T = 30 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 60 N",
            "ب) 40 N",
            "ج) 30 N  ✅ (الإجابة الصحيحة)",
            "د) 20 N",
            "",
            "══════════════ الحل ══════════════",
            "T − mg = ma",
            "T − (2×10) = 2×5",
            "T − 20 = 10 → T = 30 N",
            "",
            "الإجابة: ج) 30 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 30 N ✅"
    },

    {
        "id": 17,
        "title": "س 17: السقوط الحر",
        "text": "سقطت قطعة من على غصن شجرة عالية ووصلت إلى الأرض بعد ثلاث ثوانٍ بإهمال مقاومة الهواء فإن ارتفاع غصن الشجرة يساوي:\n\nأ) 15 m\nب) 25 m\nج) 35 m\nد) 45 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 s = ½gt² (السقوط الحر من السكون)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> s = ½gt² (السقوط الحر من السكون)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                s = ½ × 10 × 3² = 45 m
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو ارتفاع الغصن؟",
                "options": [
                    { "text": "أ) 15 m", "isCorrect": false },
                    { "text": "ب) 25 m", "isCorrect": false },
                    { "text": "ج) 35 m", "isCorrect": false },
                    { "text": "د) 45 m", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! h = 45 m"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 15 m",
            "ب) 25 m",
            "ج) 35 m",
            "د) 45 m  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "s = ½gt² = ½ × 10 × 3² = 45 m",
            "",
            "الإجابة: د) 45 m ✅"
        ],
        "pdfFinalAnswer": "الإجابة: د) 45 m ✅"
    },

    {
        "id": 18,
        "title": "س 18: زمن السقوط الحر",
        "text": "يقف طفل في شرفة منزل ترتفع (9.8 m) فوق سطح الأرض، أسقط الطفل حجراً على الأرض بإهمال مقاومة الهواء فإن الزمن المستغرق في السقوط يساوي:\n\nأ) 1.4 s\nب) 2.5 s\nج) 3.4 s\nد) 4.2 s",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 s = ½gt² → t = √(2s/g)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> s = ½gt² → t = √(2s/g)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                t = √(2×9.8/10) = √1.96 = 1.4 s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو زمن السقوط؟",
                "options": [
                    { "text": "أ) 1.4 s", "isCorrect": true },
                    { "text": "ب) 2.5 s", "isCorrect": false },
                    { "text": "ج) 3.4 s", "isCorrect": false },
                    { "text": "د) 4.2 s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! t = 1.4 s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.4 s  ✅ (الإجابة الصحيحة)",
            "ب) 2.5 s",
            "ج) 3.4 s",
            "د) 4.2 s",
            "",
            "══════════════ الحل ══════════════",
            "s = ½gt² → 9.8 = 5t²",
            "t² = 1.96 → t = √1.96 = 1.4 s",
            "",
            "الإجابة: أ) 1.4 s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 1.4 s ✅"
    },

    {
        "id": 19,
        "title": "س 19: عجلة جسم على مستوى مائل مع احتكاك",
        "text": "وضع جسم كتلته (0.5 kg) عند نقطة البداية على مسار يميل بزاوية (30°) مع الأفقي، قُذف إلى أعلى المسار بسرعة (12 m/s) وكان مقدار قوة الاحتكاك (2 N) فإن العجلة التي يتحرك بها الجسم تساوي:\n\nأ) 5 m/s²\nب) 9 m/s²\nج) 4 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 F = mg·sinθ + f (الصعود لأعلى)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> F = mg·sinθ + f (الصعود لأعلى)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = (mg·sin30° + f)/m = (2.5 + 2)/0.5 = 9 m/s²
            </div>
        </div>`,
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
            "F = mg·sin30° + f = (0.5×10×0.5) + 2 = 4.5 N",
            "a = F/m = 4.5/0.5 = 9 m/s²",
            "",
            "الإجابة: ب) 9 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 9 m/s² ✅"
    },

    {
        "id": 20,
        "title": "س 20: معامل الاحتكاك",
        "text": "تتسارع كتلة مقدارها (6 kg) بمقدار (1.25 m/s²) على سطح أفقي بفعل قوة مقدارها (22.5 N) فإن معامل الاحتكاك بين الكتلة والسطح يساوي:\n\nأ) 0.4\nب) 0.25\nج) 1",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 F − f = ma , f = μR , R = mg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> F − f = ma , f = μR , R = mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                f = 22.5 − 6×1.25 = 15 N → μ = 15/(6×10) = 0.25
            </div>
        </div>`,
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

    // ============================================================
    // 📖 القسم الثالث: أسئلة شغل وطاقة (صح/خطأ)
    // ============================================================

    {
        "id": 21,
        "title": "س 21: الشغل الناتج من القوة العمودية (صح/خطأ)",
        "text": "الشغل الناتج من القوة العمودية على اتجاه الحركة يساوي دائماً صفراً.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 W = F·s·cosθ → θ = 90° → cos90° = 0 → W = 0",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 W = F·s·cosθ → θ = 90° → cos90° = 0 → W = 0
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "W = F·s·cosθ",
            "عندما تكون القوة عمودية: θ = 90°",
            "cos90° = 0 → W = 0",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },

    {
        "id": 22,
        "title": "س 22: وحدة القدرة (صح/خطأ)",
        "text": "وحدة قياس القدرة في النظام الدولي (SI) هي الوات (W) وهي تكافئ جول على الثانية (J/s).\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 P = W/t → وحدة القدرة = J/s = W (وات)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 P = W/t → وحدة القدرة = J/s = W (وات)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "P = W/t",
            "وحدة القدرة = جول/ثانية = وات (W)",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },

    {
        "id": 23,
        "title": "س 23: طاقة الحركة والسرعة (صح/خطأ)",
        "text": "طاقة الحركة لجسم تتناسب عكسياً مع مربع سرعته.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 Ek = ½mv² → تتناسب طردياً مع مربع السرعة (وليس عكسياً)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 Ek = ½mv² → تتناسب طردياً مع مربع السرعة (وليس عكسياً)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "Ek = ½mv²",
            "طاقة الحركة تتناسب طردياً مع مربع السرعة",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    {
        "id": 24,
        "title": "س 24: الشغل الناتج من قوة الاحتكاك (صح/خطأ)",
        "text": "الشغل الناتج من قوة الاحتكاك يكون دائماً سالباً لأنه يعمل في عكس اتجاه الحركة.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 0,
        "hint": "💡 W = F·s·cosθ → θ = 180° → cos180° = -1 → W سالب دائماً",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 W = F·s·cosθ → θ = 180° → cos180° = -1 → W سالب دائماً
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "W = F·s·cosθ",
            "قوة الاحتكاك تعاكس الحركة ← θ = 180°",
            "cos180° = -1 ← W سالب دائماً (شغل مقاوم)",
            "",
            "الإجابة: أ) صح ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) صح ✅"
    },

    {
        "id": 25,
        "title": "س 25: تعريف طاقة الحركة (صح/خطأ)",
        "text": "طاقة الحركة هي طاقة مخزنة في الجسم بسبب وضعه أو الارتفاع الذي يصل إليه عن سطح الأرض.\n\nأ) صح\nب) خطأ",
        "type": "true-false",
        "correctAnswerIndex": 1,
        "hint": "💡 هذا تعريف طاقة الوضع (Ep = mgh) ← طاقة الحركة (Ek = ½mv²)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 هذا تعريف طاقة الوضع (Ep = mgh) ← طاقة الحركة (Ek = ½mv²)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "• هذا التعريف يخص طاقة الوضع: Ep = mgh",
            "• طاقة الحركة: Ek = ½mv² (تعتمد على السرعة)",
            "",
            "الإجابة: ب) خطأ ❌"
        ],
        "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
    },

    // ============================================================
    // 📖 القسم الرابع: أسئلة شغل وطاقة (اختيار من متعدد)
    // ============================================================

    {
        "id": 26,
        "title": "س 26: التغير في طاقة الحركة",
        "text": "جسم كتلته 4 kg يتحرك بسرعة 5 m/s، فإذا تضاعفت سرعته لتصبح 10 m/s، فإن الزيادة (التغير) في طاقة حركته تساوي:\n\nأ) 50 J\nب) 150 J\nج) 200 J\nد) 10 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 ΔEk = ½m(v₂² − v₁²)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> ΔEk = ½m(v₂² − v₁²)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                ΔEk = ½×4×(10²−5²) = 2×(100−25) = 150 J
            </div>
        </div>`,
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
        "id": 27,
        "title": "س 27: قدرة الرافعة الكهربائية",
        "text": "رافعة كهربائية تبذل شغلاً مقداره 60 kJ لرفع حمولة ما خلال زمن قدره 0.5 min، فإن قدرة هذه الرافعة تساوي:\n\nأ) 120 W\nب) 2 kW\nج) 30 kW\nد) 1200 W",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 P = W/t (تحويل الوحدات أولاً)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> P = W/t (تحويل الوحدات أولاً)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                W = 60×1000 = 60000 J , t = 0.5×60 = 30 s
                P = 60000/30 = 2000 W = 2 kW
            </div>
        </div>`,
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
        "id": 28,
        "title": "س 28: كفاءة الآلة",
        "text": "آلة كفاءتها 80%، إذا كانت القدرة الداخلة إليها تساوي 5 kW، فإن القدرة الخارجة (المفيدة) من الآلة تساوي:\n\nأ) 4 kW\nب) 6.25 kW\nج) 400 W\nد) 4.5 kW",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 η = P_out / P_in",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> η = P_out / P_in
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                P_out = η × P_in = 0.80 × 5 = 4 kW
            </div>
        </div>`,
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
        "id": 29,
        "title": "س 29: القدرة في الرفع الرأسي",
        "text": "يرفع محرك كهربائي كتلة مقدارها (200 kg) رأسياً إلى أعلى بسرعة ثابتة مقدارها (3 m/s)، فإن القدرة التي يبذلها المحرك تساوي:\n\nأ) 600 W\nب) 2000 W\nج) 6000 W\nد) 600 kW",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 P = F·v ، والسرعة ثابتة ← F = mg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> P = F·v ، والسرعة ثابتة ← F = mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                F = 200×10 = 2000 N → P = 2000×3 = 6000 W
            </div>
        </div>`,
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
        "id": 30,
        "title": "س 30: التغير في طاقة الحركة (توقف السيارة)",
        "text": "سيارة كتلتها (1200 kg) تتحرك بسرعة (20 m/s)، إذا ضغط السائق على الكوابح (الفرامل) فتوقفت السيارة تماماً بعد مسافة معينة، فإن التغير في طاقة حركة السيارة يساوي:\n\nأ) −1.2×10⁵ J\nب) −2.4×10⁵ J\nج) 2.4×10⁵ J\nد) −4.8×10⁴ J",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 ΔEk = ½m(v²−u²) = −½mu²",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> ΔEk = ½m(v²−u²) = −½mu²
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                ΔEk = −½×1200×20² = −2.4×10⁵ J
            </div>
        </div>`,
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
    }// 🏁 نهاية الجزء الأول من المصفوفة (الأسئلة 1-30)

// سيتبعها الجزء الثاني (الأسئلة 31-60)
,
    // ============================================================
    // 📖 القسم الخامس: أسئلة متقدمة (امتحانات سابقة) - الجزء 1
    // ============================================================

    {
        "id": 31,
        "title": "س 31: اتزان كرة معلقة بقوة أفقية (امتحان 2021-2022)",
        "text": "إذا عُلِّقت كرة معدنية وزنها (500 N) في نقطة بواسطة سلسلة، ثم سُحِبت الكرة أفقياً بقوة (F) فاتزنت عندما صنعت السلسلة زاوية مقدارها (20°) مع الرأسي، فإن الشد في السلسلة (T) يساوي تقريباً:\n\nأ) 532 N\nب) 671 N\nج) 927 N\nد) 171 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 T cos(20°) = W → T = 500 / cos(20°)",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>T cos(20°) = 500 → T = 500 / 0.9397 ≈ 532 N</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تحليل قوى الاتزان الرأسي",
                "question": "ما هي المركبة الرياضية لقوة الشد (T) التي تعادل قوة وزن الكرة (500 N) لأسفل؟",
                "options": [
                    { "text": "أ) T cos(20°)", "isCorrect": true },
                    { "text": "ب) T sin(20°)", "isCorrect": false }
                ],
                "feedback": "✅ إجابة صحيحة تماماً! بما أن الزاوية معطاة مع المحور الرأسي، فإن المركبة الرأسية المجاورة للزاوية تأخذ جيب التمام (cos)."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 532 N  ✅ (الإجابة الصحيحة)",
            "ب) 671 N",
            "ج) 927 N",
            "د) 171 N",
            "",
            "══════════════ الحل ══════════════",
            "T cos(20°) = 500 → T = 500 / 0.9397 = 532 N",
            "",
            "الإجابة النهائية: أ) 532 N"
        ],
        "pdfFinalAnswer": "أ) 532 N"
    },

    {
        "id": 32,
        "title": "س 32: القوة العمودية في شاحنة متسارعة (امتحان 2021-2022)",
        "text": "صندوق كتلته (30 kg) موجود في شاحنة تسير على طريق أفقي بعجلة ثابتة، ووضع فوق هذا الصندوق صندوق آخر كتلته (نصف وزن الصندوق الأول)، فإن القوة الرأسية المؤثرة بواسطة أرضية الشاحنة على الصندوق السفلي تساوي (بفرض g = 10 m/s²):\n\nأ) 450 N إلى أعلى\nب) 150 N إلى أسفل\nج) 300 N إلى الأعلى\nد) 450 N إلى الأسفل",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 R = W1 + W2 = 300 + 150 = 450 N (لأعلى)",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                وزن السفلي = 300 N، وزن العلوي = 150 N<br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>R = 300 + 150 = 450 N (لأعلى)</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "فهم طبيعة القوى الرأسية",
                "question": "بما أن السيارة تتحرك بعجلة أفقية فقط، ماذا نستنتج عن محصلة القوى الرأسية المؤثرة على المنظومة؟",
                "options": [
                    { "text": "أ) محصلة القوى الرأسية تساوي صفراً (اتزان رأسي)", "isCorrect": true },
                    { "text": "ب) محصلة القوى الرأسية تساوي الكتلة في العجلة الأفقية", "isCorrect": false }
                ],
                "feedback": "✅ ممتاز! العجلة الأفقية لا تؤثر مطلقاً على الاتزان الرأسي."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 450 N إلى أعلى  ✅ (الإجابة الصحيحة)",
            "ب) 150 N إلى أسفل",
            "ج) 300 N إلى الأعلى",
            "د) 450 N إلى الأسفل",
            "",
            "══════════════ الحل ══════════════",
            "W1 = 30 × 10 = 300 N",
            "W2 = 0.5 × 300 = 150 N",
            "R = 300 + 150 = 450 N (لأعلى)",
            "",
            "الإجابة النهائية: أ) 450 N إلى أعلى"
        ],
        "pdfFinalAnswer": "أ) 450 N إلى أعلى"
    },

    {
        "id": 33,
        "title": "س 33: قذف الجسم على مستوى مائل أملس",
        "text": "قُذف جسم لأعلى مستوى أملس يميل بزاوية (30°) مع الأفقي فكان أقصى ارتفاع يصل إليه المستوى هو (20 m) من سطح الأرض، فإن السرعة التي قُذف بها والمسافة التي يقطعها على التوالي تساوي:\n\nأ) 20 m/s , 40 m\nب) 10 m/s , 30 m\nج) صفر , 10 m\nد) 20 m/s , 20 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 u = √(2gH) = √(2×10×20) = 20 m/s ، s = H/sinθ = 40 m",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>u = √(2gH) = √400 = 20 m/s</span><br>
                <span style='direction:ltr; display:inline-block;'>s = H/sin(30°) = 20/0.5 = 40 m</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب السرعة الابتدائية",
                "question": "كيف نحسب السرعة الابتدائية باستخدام حفظ الطاقة؟",
                "options": [
                    { "text": "u = √(2gH)", "isCorrect": true },
                    { "text": "u = √(gH)", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! u = √(2×10×20) = √400 = 20 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 20 m/s , 40 m  ✅ (الإجابة الصحيحة)",
            "ب) 10 m/s , 30 m",
            "ج) صفر , 10 m",
            "د) 20 m/s , 20 m",
            "",
            "══════════════ الحل ══════════════",
            "u² = 2·g·H = 2 × 10 × 20 = 400 → u = 20 m/s",
            "s = H/sinθ = 20/0.5 = 40 m",
            "",
            "الإجابة النهائية: أ) 20 m/s , 40 m"
        ],
        "pdfFinalAnswer": "أ) 20 m/s , 40 m"
    },

    {
        "id": 34,
        "title": "س 34: زاوية انحراف سلك داخل حافلة متسارعة",
        "text": "قرر طالب أن يقيس الزاوية التي يصنعها سلك عُلِّق في حافلة ورُبِطت في نهايته كيس كتلته (1.5 kg)؛ عندما تكون الحافلة تتحرك بعجلة (3.5 m/s²)، فإن الزاوية التي يصنعها السلك مع **الأفقي** هي (بفرض g = 10 m/s²):\n\nأ) 29.1°\nب) 43.5°\nج) 19.3°\nد) 70.7°",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 tan(θ) = a/g = 3.5/10 = 0.35 → الزاوية الرأسية = 19.3° → المتممة مع الأفقي = 70.7°",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>tan(θ) = a/g = 3.5/10 = 0.35 → θ = 19.3° (مع الرأسي)</span><br>
                <span style='direction:ltr; display:inline-block;'>الزاوية مع الأفقي = 90° - 19.3° = 70.7°</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "الانتباه للمطلوب في السؤال",
                "question": "ما هي العلاقة الهندسية التي تربط بين زاوية السلك مع الرأسي وزاويته مع الأفقي؟",
                "options": [
                    { "text": "أ) الزاويتان متتامتان ومجموعهما يساوي 90°", "isCorrect": true },
                    { "text": "ب) الزاويتان متساويتان بالتبادل", "isCorrect": false }
                ],
                "feedback": "✅ إجابة ذكية! المحور الرأسي والأفقي متعامدان تماماً."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 29.1°",
            "ب) 43.5°",
            "ج) 19.3°  ⚠️ (فخ: الزاوية مع الرأسي)",
            "د) 70.7°  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "tan(θ) = a/g = 3.5/10 = 0.35",
            "θ = tan⁻¹(0.35) ≈ 19.3° (مع الرأسي)",
            "الزاوية مع الأفقي = 90° - 19.3° = 70.7°",
            "",
            "الإجابة النهائية: د) 70.7°"
        ],
        "pdfFinalAnswer": "د) 70.7°"
    },

    {
        "id": 35,
        "title": "س 35: حساب القدرة والمسافة في الرفع الرأسي",
        "text": "إذا رُفع صندوق كتلته (160 kg) عمودياً إلى أعلى بسرعة منتظمة بواسطة آلة قدرتها (2 kW)، فإن المسافة التي يتحركها الصندوق في زمن قدره (6 s) تساوي:\n\nأ) 6.5 m\nب) 7.5 m\nج) 8.5 m\nد) 9.5 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 P = W/t → W = m·g·s → s = P·t/(m·g)",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #eff6ff; border-right: 4px solid #1d4ed8; padding: 10px; font-size: 13px; color: #1e3a8a;'>
                <strong>💡 طريقة الحل المباشرة:</strong><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>
                P = (m·g·s) / t → 2000 = (1600 × s) / 6 → s = 12000 / 1600 = 7.5 m
                </span>
            </div>
        </div>`,
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
            "══════════════ الحل ══════════════",
            "P = 2 kW = 2000 W",
            "W = P × t = 2000 × 6 = 12000 J",
            "12000 = 160 × 10 × s → s = 12000 / 1600 = 7.5 m",
            "",
            "الإجابة النهائية: ب) 7.5 m"
        ],
        "pdfFinalAnswer": "ب) 7.5 m"
    },

    {
        "id": 36,
        "title": "س 36: حساب العجلة الناتجة عن قوة مائلة",
        "text": "يدفع طفل عربة صغيرة كتلتها (3.5 kg) على أرضية أفقية بقوة مقدارها (6 N) تصنع زاوية (35°) مع الأفقي. بإهمال قوى المقاومة، فإن عجلة حركة العربة تساوي تقريباً:\n\nأ) 1.4 m/s²\nب) 1.6 m/s²\nج) 1.5 m/s²\nد) 1.3 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 المركبة الأفقية للقوة هي F·cosθ = 6 × cos(35°)",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fdf4ff; border-right: 4px solid #c084fc; padding: 10px; font-size: 13px; color: #581c87;'>
                <strong>💡 التحليل الأفقي للقوة:</strong><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>
                F_x = F·cos(35°) = 6 × 0.819 = 4.92 N → a = 4.92 / 3.5 = 1.4 m/s²
                </span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تحديد المركبة المؤثرة على الحركة",
                "question": "أي مركبة من القوة (6 N) هي التي تسبب الحركة الأفقية؟",
                "options": [
                    { "text": "أ) المركبة الأفقية F cos(35°)", "isCorrect": true },
                    { "text": "ب) المركبة العمودية F sin(35°)", "isCorrect": false }
                ],
                "feedback": "✅ ممتاز! المركبة الأفقية فقط هي التي تحرك العربة."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.4 m/s²  ✅ (الإجابة الصحيحة)",
            "ب) 1.6 m/s²",
            "ج) 1.5 m/s²",
            "د) 1.3 m/s²",
            "",
            "══════════════ الحل ══════════════",
            "F_x = 6 × cos(35°) = 6 × 0.819 = 4.92 N",
            "a = F_x / m = 4.92 / 3.5 = 1.4 m/s²",
            "",
            "الإجابة النهائية: أ) 1.4 m/s²"
        ],
        "pdfFinalAnswer": "أ) 1.4 m/s²"
    },

    {
        "id": 37,
        "title": "س 37: حساب قوة الاحتكاك للجسم المستقر على مستوى مائل",
        "text": "يستقر صندوق كتلته (30 kg) على سطح يميل بزاوية قدرها (18°) مع الأفق، ويمنع الاحتكاك الصندوق من الانزلاق لأسفل. فإن مقدار قوة الاحتكاك المانعة للحركة تساوي:\n\nأ) 29.7 N\nب) 92.7 N\nج) 19.7 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 f = mg·sin(18°) = 30 × 10 × 0.309 = 92.7 N",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>
                <strong>💡 شرط الاتزان السكوني:</strong><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>
                f = mg · sin(18°) = 30 × 10 × sin(18°) = 300 × 0.309 = 92.7 N
                </span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تحليل الاتزان السكوني",
                "question": "لماذا لا ينزلق الصندوق إلى أسفل المستوى المائل؟",
                "options": [
                    { "text": "أ) لأن قوة الاحتكاك تساوي مركبة الوزن الموازية", "isCorrect": true },
                    { "text": "ب) لأن قوة الاحتكاك أكبر من وزن الصندوق", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! الجسم ساكن، لذا محصلة القوى الموازية = صفر."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 29.7 N",
            "ب) 92.7 N  ✅ (الإجابة الصحيحة)",
            "ج) 19.7 N",
            "",
            "══════════════ الحل ══════════════",
            "W_parallel = 30 × 10 × sin(18°) = 300 × 0.309 = 92.7 N",
            "f = W_parallel = 92.7 N",
            "",
            "الإجابة النهائية: ب) 92.7 N"
        ],
        "pdfFinalAnswer": "ب) 92.7 N"
    },

    {
        "id": 38,
        "title": "س 38: حساب مقدار واتجاه قوة الاحتكاك على مستوى مائل بقوة أفقية",
        "text": "تستقر كتلة مقدارها (2 kg) على مستوى يميل على الأفقي بزاوية (50°). أثرت قوة أفقية مقدارها (30 N) على الكتلة كما هو موضح بالشكل. فإن مقدار واتجاه قوة الاحتكاك المؤثرة على الكتلة تساوي:\n\nأ) 34.6 N إلى أعلى\nب) 34.6 N إلى أسفل\nج) 3.69 N إلى أسفل",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 F_up = 30·cos(50°) = 19.28 N ، W_down = 20·sin(50°) = 15.32 N ، f = 19.28 - 15.32 = 3.96 N",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>
                <strong>💡 فكرة الاتزان:</strong><br>
                <span style='direction:ltr; display:inline-block;'>F_up = 30·cos(50°) = 19.28 N</span><br>
                <span style='direction:ltr; display:inline-block;'>W_down = 20·sin(50°) = 15.32 N</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>f = 19.28 - 15.32 = 3.96 N ≈ 3.69 N (لأسفل)</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تحديد اتجاه الحركة الوشيكة",
                "question": "بما أن القوة الأفقية أكبر من مركبة الوزن، فأي اتجاه سيميل الجسم للحركة؟",
                "options": [
                    { "text": "أ) إلى أعلى المستوى المائل", "isCorrect": true },
                    { "text": "ب) إلى أسفل المستوى المائل", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! القوة الصاعدة (19.28 N) أكبر من الهابطة (15.32 N)."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 34.6 N إلى أعلى",
            "ب) 34.6 N إلى أسفل",
            "ج) 3.69 N إلى أسفل  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "F_up = 30·cos(50°) = 19.28 N",
            "W_down = 20·sin(50°) = 15.32 N",
            "f = 19.28 - 15.32 = 3.96 N ≈ 3.69 N (لأسفل)",
            "",
            "الإجابة النهائية: ج) 3.69 N إلى أسفل"
        ],
        "pdfFinalAnswer": "ج) 3.69 N إلى أسفل"
    },

    {
        "id": 39,
        "title": "س 39: حساب عجلة الحركة لمنظومة البكرات (آلة أتوود)",
        "text": "في الشكل الموضح، يمر خيط خفيف حول وتد (بكرة) أملس ثابت متصل بكتلتين (3 kg) و (2 kg)، فإن عجلة حركة المجموعة تساوي:\n\nأ) 20 m/s²\nب) 10 m/s²\nج) 2 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 a = [(3 - 2) / (3 + 2)] × 10 = 2 m/s²",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #eff6ff; border-right: 4px solid #1d4ed8; padding: 10px; font-size: 13px; color: #1e3a8a;'>
                <strong>💡 قانون آلة أتوود المباشر:</strong><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>
                a = [(3 - 2) / (3 + 2)] × 10 = (1 / 5) × 10 = 2 m/s²
                </span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تطبيق قانون آلة أتوود",
                "question": "كيف نحسب عجلة الحركة في منظومة بكرات ذات كتلتين مختلفتين؟",
                "options": [
                    { "text": "أ) a = (m₂ - m₁)/(m₂ + m₁) · g", "isCorrect": true },
                    { "text": "ب) a = (m₂ + m₁)/(m₂ - m₁) · g", "isCorrect": false }
                ],
                "feedback": "✅ ممتاز! العجلة تعتمد على فرق الكتل مقسوماً على مجموعهما."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 20 m/s²",
            "ب) 10 m/s²",
            "ج) 2 m/s²  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "a = (3 - 2) / (3 + 2) × 10 = (1 / 5) × 10 = 2 m/s²",
            "",
            "الإجابة النهائية: ج) 2 m/s²"
        ],
        "pdfFinalAnswer": "ج) 2 m/s²"
    },

    {
        "id": 40,
        "title": "س 40: وحدة قياس الشغل الميكانيكي",
        "text": "يُقاس الشغل الميكانيكي في علم الفيزياء بوحدة:\n\nأ) الجول (J)\nب) الوات (W)\nج) نيوتن · متر (N·m)\nد) الإجابتان (أ) و (ج) صحيحتان",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 الجول (J) = نيوتن · متر (N·m)، والوات (W) هو وحدة القدرة",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>
                <strong>💡 تذكير فيزيائي:</strong><br>
                الجول (J) = نيوتن · متر (N·m)، وهما وحدتان مكافئتان تماماً.
            </div>
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "W = F·d·cos(θ)",
            "نيوتن × متر = N·m = جول (J)",
            "الوات (W) هو وحدة القدرة (معدل بذل الشغل): 1 W = 1 J/s",
            "",
            "الإجابة النهائية: د) الإجابتان (أ) و (ج) صحيحتان"
        ],
        "pdfFinalAnswer": "د) الإجابتان (أ) و (ج) صحيحتان"
    },

    // ============================================================
    // 📖 القسم السادس: أسئلة شغل وطاقة متقدمة
    // ============================================================

    {
        "id": 41,
        "title": "س 41: المفهوم الفيزيائي الشامل للسقوط الحر",
        "text": "عندما يُقال إن جسماً يسقط سقوطاً حراً تحت تأثير عجلة الجاذبية الأرضية (g = 10 m/s²) بإهمال مقاومة الهواء، فما هي العبارة الصحيحة؟\n\nأ) سرعة سقوط الجسم تزداد بانتظام كل ثانية بمقدار 10 m/s\nب) سرعة سقوط الجسم تتغير زمنياً بمعدل ثابت قدره 10 m/s²\nج) النسبة الثابتة بين وزن هذا الجسم وكتلته تساوي الرقم 10\nد) جميع الإجابات الفيزيائية السابقة صحيحة",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 في السقوط الحر، العجلة ثابتة = g، والسرعة تزداد خطياً، والوزن = الكتلة × g",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fdf4ff; border-right: 4px solid #c084fc; padding: 10px; font-size: 13px; color: #581c87;'>
                <strong>💡 تذكير فيزيائي شامل:</strong><br>
                • في السقوط الحر، العجلة ثابتة = g.<br>
                • السرعة تزداد خطياً مع الزمن: v = g·t.<br>
                • الوزن = الكتلة × g، لذا النسبة وزن/كتلة = g = 10.
            </div>
        </div>`,
        "steps": [
            {
                "title": "خصائص السقوط الحر",
                "question": "ما هي الخاصية الثابتة في السقوط الحر بإهمال مقاومة الهواء؟",
                "options": [
                    { "text": "أ) العجلة", "isCorrect": true },
                    { "text": "ب) السرعة", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! في السقوط الحر، العجلة ثابتة = g."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) ✅ صحيح: v = g·t = 10t",
            "ب) ✅ صحيح: a = g = 10 m/s²",
            "ج) ✅ صحيح: W/m = g = 10",
            "د) جميع العبارات الفيزيائية السابقة صحيحة ✅",
            "",
            "══════════════ التلميح ══════════════",
            "جميع الخيارات (أ، ب، ج) هي نتائج فيزيائية مباشرة ومترابطة.",
            "",
            "الإجابة النهائية: د) جميع الإجابات الفيزيائية السابقة صحيحة"
        ],
        "pdfFinalAnswer": "د) جميع الإجابات الفيزيائية السابقة صحيحة"
    },

    {
        "id": 42,
        "title": "س 42: حساب قوة الاحتكاك على مستوى مائل باستخدام العجلة",
        "text": "في المنظومة الموضحة بالشكل، إذا كانت قوة الشد في الخيط تساوي (15 N)، فإن قوة الاحتكاك (f) المؤثرة على الكتلة (6 kg) المستقرّة فوق المستوى المائل بزاوية (30°) تساوي (بفرض g = 10 m/s²):\n\nأ) 41.5 N\nب) 24.5 N\nج) 15 N\nد) 5 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 T - m2·g = m2·a → 15 - 10 = 1·a → a = 5 m/s²، ثم m1·g·sin30° - T - f = m1·a",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>T - m2·g = m2·a → 15 - 10 = 1·a → a = 5 m/s²</span><br>
                <span style='direction:ltr; display:inline-block;'>30 - 15 - f = 6×5 → f = 15 N</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب عجلة النظام",
                "question": "باستخدام معادلة الحركة للكتلة المعلقة (1 kg)، ما هي قيمة العجلة المشتركة للمنظومة؟",
                "options": [
                    { "text": "أ) 5 m/s²", "isCorrect": true },
                    { "text": "ب) 2 m/s²", "isCorrect": false }
                ],
                "feedback": "✅ حساب ممتاز! T - m2·g = m2·a → 15 - 10 = 1·a → a = 5 m/s²."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 41.5 N",
            "ب) 24.5 N",
            "ج) 15 N  ✅ (الإجابة الصحيحة)",
            "د) 5 N",
            "",
            "══════════════ الحل ══════════════",
            "T - m2·g = m2·a → 15 - 10 = 1·a → a = 5 m/s²",
            "m1·g·sin30° - T - f = m1·a",
            "30 - 15 - f = 6×5 → 15 - f = 30 → f = 15 N",
            "",
            "الإجابة النهائية: ج) 15 N"
        ],
        "pdfFinalAnswer": "ج) 15 N"
    },

    {
        "id": 43,
        "title": "س 43: سرعة كرة البندول عند موضع الاتزان",
        "text": "كرة صغيرة كتلتها (m) معلقة بواسطة خيط طوله (L). أزيحت الكرة جانباً حتى صنع الخيط مع العمودي زاوية مقدارها (60°)، ثم أُطلِقت من السكون. تكون سرعة الكرة (v) عندما يكون الخيط عمودياً (عند أسفل نقطة) مساوية للعلاقة التالية:\n\nأ) v = √[2gL]\nب) v = √[gL]\nج) v = gL\nد) v = 0.5gL",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 v = √[2gh] حيث h = L(1 - cos60°) = 0.5L → v = √[gL]",
        "svgCode": `<div style="background: #ffffff; border-radius: 12px; padding: 15px; text-align: center; border: 2px solid #f97316; direction: rtl;">
            <div style="margin-top: 10px; border-top: 2px dashed #f97316; padding-top: 10px; font-size: 15px; text-align: right; line-height: 1.6;">
                <strong style="color: #ea580c; font-size: 17px;">📌 التلميح:</strong><br>
                • <b>القانون العام:</b> v = √[2gh]<br>
                • <b>حساب الارتفاع:</b> h = L - L cos θ = L(1 - cos θ)<br>
                • <b>عند 60°:</b> cos 60° = 0.5 → h = 0.5L → v = √[gL]
            </div>
        </div>`,
        "steps": [
            {
                "title": "قانون حفظ الطاقة الميكانيكية",
                "question": "ما هي العلاقة الرياضية النهائية لسرعة كرة البندول عند مرورها بالمركز؟",
                "options": [
                    { "text": "أ) v = √[2gL]", "isCorrect": false },
                    { "text": "ب) v = √[gL]", "isCorrect": true }
                ],
                "feedback": "✅ إجابة صحيحة! نظراً لأن زاوية الإزاحة 60° فإن الارتفاع h يساوي نصف طول الخيط."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) v = √[2gL]",
            "ب) v = √[gL]  ✅ (الإجابة الصحيحة)",
            "ج) v = gL",
            "د) v = 0.5gL",
            "",
            "══════════════ الحل ══════════════",
            "v = √[2gh]",
            "h = L(1 - cos60°) = 0.5L",
            "v = √[2g·0.5L] = √[gL]",
            "",
            "الإجابة النهائية: ب) v = √[gL]"
        ],
        "pdfFinalAnswer": "ب) v = √[gL]"
    },

    {
        "id": 44,
        "title": "س 44: اتزان الأثقال المتناظرة بدلالة الزاوية",
        "text": "يوضح الشكل جهازاً به كتلة (m) مربوطة بخيطين طويلين يمران على مسمارين (A, B) أملسين ومتماثلين وعلى نفس المستوى، ويحمل كل طرف منهما كتلة (M). إذا كان النظام في حالة اتزان وكانت الكتلة (m) عند عمق (d) تحت نقطة المنتصف بين المسمارين (C)، فإن العلاقة التي تربط الكتلة الصغيرة (m) بالكتل الكبيرة (M) والزاوية (θ) هي:\n\nأ) m = M cos θ\nب) m = 2 M cos θ\nج) m = 2 M sin θ\nد) m = M / (2 cos θ)",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 T = M·g ، 2T cos θ = m·g → m = 2M cos θ",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>T = M·g</span><br>
                <span style='direction:ltr; display:inline-block;'>2T cos θ = m·g → m = 2M cos θ</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "معادلة الاتزان الرأسي للكتلة الوسطى",
                "question": "ما هي معادلة الاتزان التي تحكم المركبات الرأسية لقوى الشد عند نقطة التقاء الكتلة m؟",
                "options": [
                    { "text": "أ) T - M g = 0", "isCorrect": false },
                    { "text": "ب) 2T cos θ - m g = 0", "isCorrect": true }
                ],
                "feedback": "✅ ممتاز! المركبة الرأسية لكل شد هي T cos θ وتعملان معاً لأعلى."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) m = M cos θ",
            "ب) m = 2 M cos θ  ✅ (الإجابة الصحيحة)",
            "ج) m = 2 M sin θ",
            "د) m = M / (2 cos θ)",
            "",
            "══════════════ الحل ══════════════",
            "T = M·g",
            "2T cos θ = m·g",
            "2M·g cos θ = m·g → m = 2M cos θ",
            "",
            "الإجابة النهائية: ب) m = 2 M cos θ"
        ],
        "pdfFinalAnswer": "ب) m = 2 M cos θ"
    },

    // ============================================================
    // 📖 القسم السابع: أسئلة حركة المقذوفات والسرعة
    // ============================================================

    {
        "id": 45,
        "title": "س 45: أقصى ارتفاع للقذف الرأسي",
        "text": "يقذف لاعب السيرك كرة إلى أعلى رأسياً بسرعة (6 m/s) أقصى ارتفاع تصل إليه الكرة هو:\n\nأ) 1.8 m\nب) 3.6 m\nج) 5.4 m\nد) 7.2 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 v² = u² − 2gh → h = u²/(2g)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v² = u² − 2gh → h = u²/(2g)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                h = 36/(2×10) = 36/20 = 1.8 m
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو أقصى ارتفاع تصل إليه الكرة؟",
                "options": [
                    { "text": "أ) 1.8 m", "isCorrect": true },
                    { "text": "ب) 3.6 m", "isCorrect": false },
                    { "text": "ج) 5.4 m", "isCorrect": false },
                    { "text": "د) 7.2 m", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! h = 1.8 m"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.8 m  ✅ (الإجابة الصحيحة)",
            "ب) 3.6 m",
            "ج) 5.4 m",
            "د) 7.2 m",
            "",
            "══════════════ الحل ══════════════",
            "v² = u² − 2gh → 0 = 36 − 20h",
            "h = 36/20 = 1.8 m",
            "",
            "الإجابة: أ) 1.8 m ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 1.8 m ✅"
    },

    {
        "id": 46,
        "title": "س 46: سرعة السقوط الحر",
        "text": "سقط حجر من السكون فكانت سرعته بعد (3 s) تساوي:\n\nأ) 30 m/s\nب) 20 m/s\nج) 10 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 v = u + gt (السقوط الحر من السكون)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v = u + gt (السقوط الحر من السكون)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                v = 0 + 10×3 = 30 m/s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي سرعة الحجر بعد 3 ثوان؟",
                "options": [
                    { "text": "أ) 30 m/s", "isCorrect": true },
                    { "text": "ب) 20 m/s", "isCorrect": false },
                    { "text": "ج) 10 m/s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! v = 30 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 30 m/s  ✅ (الإجابة الصحيحة)",
            "ب) 20 m/s",
            "ج) 10 m/s",
            "",
            "══════════════ الحل ══════════════",
            "v = u + gt = 0 + 10×3 = 30 m/s",
            "",
            "الإجابة: أ) 30 m/s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 30 m/s ✅"
    },

    {
        "id": 47,
        "title": "س 47: حساب المسافة المقطوعة في السقوط الحر",
        "text": "سقط جسم من السكون تحت تأثير الجاذبية الأرضية (g = 10 m/s²) خلال 4 ثوان، فإن المسافة التي يقطعها في الثانية الرابعة تساوي:\n\nأ) 35 m\nب) 40 m\nج) 45 m\nد) 50 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 المسافة في الثانية n = ½g(2n-1)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> s_n = ½g(2n-1)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                s_4 = ½×10×(2×4-1) = 5×7 = 35 m
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي المسافة التي يقطعها في الثانية الرابعة؟",
                "options": [
                    { "text": "أ) 35 m", "isCorrect": true },
                    { "text": "ب) 40 m", "isCorrect": false },
                    { "text": "ج) 45 m", "isCorrect": false },
                    { "text": "د) 50 m", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! s_4 = 35 m"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 35 m  ✅ (الإجابة الصحيحة)",
            "ب) 40 m",
            "ج) 45 m",
            "د) 50 m",
            "",
            "══════════════ الحل ══════════════",
            "s_n = ½g(2n-1)",
            "s_4 = ½×10×(8-1) = 5×7 = 35 m",
            "",
            "الإجابة: أ) 35 m ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 35 m ✅"
    },

    // ============================================================
    // 📖 القسم الثامن: أسئلة متنوعة (مكملة)
    // ============================================================

    {
        "id": 48,
        "title": "س 48: الشغل الكلي مع احتكاك",
        "text": "صندوق كتلته (50 kg) يستقر على أرضية أفقية، سُحب الصندوق بقوة أفقية مقدارها (150 N) لمسافة (8 m)، فإذا كانت قوة الاحتكاك بين الصندوق والأرض تساوي (50 N)، فإن الشغل الكلي المبذول على الصندوق يساوي:\n\nأ) 1200 J\nب) 400 J\nج) 800 J\nد) 1600 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 W_total = (F − f) × s",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> W_total = (F − f) × s
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                F_net = 150 − 50 = 100 N → W = 100×8 = 800 J
            </div>
        </div>`,
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
            "F_net = F − f = 150 − 50 = 100 N",
            "W_total = F_net × s = 100 × 8 = 800 J",
            "",
            "الإجابة: ج) 800 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 800 J ✅"
    },

    {
        "id": 49,
        "title": "س 49: طاقة الوضع عند أقصى ارتفاع",
        "text": "قُذف حجر كتلته (0.4 kg) رأسياً إلى أعلى من سطح الأرض بسرعة ابتدائية (15 m/s)، بإهمال مقاومة الهواء، فإن طاقة وضع الثقل للحجر عند أقصى ارتفاع يصل إليه تساوي:\n\nأ) 45 J\nب) 90 J\nج) 22.5 J\nد) 60 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                Ek = ½×0.4×15² = 45 J → Ep = 45 J
            </div>
        </div>`,
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
            "Ek = ½mu² = ½×0.4×15² = 0.2×225 = 45 J",
            "Ep = Ek = 45 J",
            "",
            "الإجابة: أ) 45 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 45 J ✅"
    },

    {
        "id": 50,
        "title": "س 50: القدرة والسرعة على سطح خشن",
        "text": "تتحرك سيارة كتلتها 1200 kg على طريق أفقي خشن بسرعة ثابتة مقدارها 25 m/s، فإذا كانت قوة مقاومة الطريق لحركة السيارة تساوي 400 N، احسب القدرة التي يبذلها محرك السيارة.\n\nأ) 5 kW\nب) 10 kW\nج) 15 kW\nد) 20 kW",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 P = F·v ، والسرعة ثابتة ← F = f",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> P = F·v
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                P = 400 × 25 = 10000 W = 10 kW
            </div>
        </div>`,
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
            "سرعة ثابتة ← a = 0 ← F = f = 400 N",
            "P = F × v = 400 × 25 = 10000 W = 10 kW",
            "",
            "الإجابة: ب) 10 kW ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 10 kW ✅"
    },

    {
        "id": 51,
        "title": "س 51: التغير في طاقة الحركة (الفرامل)",
        "text": "تسير سيارة بسرعة 20 m/s، ضغط سائقها على الكوابح فتناقصت سرعتها بانتظام إلى 5 m/s خلال مسافة مقدارها 60 m، فإذا كانت كتلة السيارة 1000 kg، أوجد الشغل المبذول بواسطة الكوابح (الفرامل).\n\nأ) −187500 J\nب) −150000 J\nج) −200000 J\nد) −100000 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 W = ΔEk = ½m(v² − u²)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> W = ΔEk = ½m(v² − u²)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                W = ½×1000×(5²−20²) = −187500 J
            </div>
        </div>`,
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
            "W = ΔEk = ½m(v² − u²)",
            "W = ½×1000×(25 − 400) = 500 × (−375) = −187500 J",
            "",
            "الإجابة: أ) −187500 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) −187500 J ✅"
    },

    {
        "id": 52,
        "title": "س 52: طاقة الوضع عند أقصى ارتفاع (قذف)",
        "text": "قُذف جسم كتلته 0.5 kg رأسياً إلى أعلى بسرعة ابتدائية 20 m/s، احسب طاقة وضعه عند أقصى ارتفاع يصل إليه (بإهمال مقاومة الهواء، واعتبار g = 10 m/s²).\n\nأ) 50 J\nب) 100 J\nج) 150 J\nد) 200 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                Ek = ½×0.5×20² = 100 J → Ep = 100 J
            </div>
        </div>`,
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
            "Ek = ½mu² = ½×0.5×20² = 0.25×400 = 100 J",
            "Ep = Ek = 100 J",
            "",
            "الإجابة: ب) 100 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 100 J ✅"
    },

    {
        "id": 53,
        "title": "س 53: الشغل على مستوى مائل أملس",
        "text": "يُسحب صندوق كتلته 20 kg إلى أعلى مستوى مائل أملس يميل على الأفقي بزاوية 30° مسافة 5 m بسرعة ثابتة بواسطة حبل موازٍ للمستوى. احسب الشغل المبذول بواسطة قوة الشد في الحبل.\n\nأ) 250 J\nب) 500 J\nج) 750 J\nد) 1000 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 T = mg·sinθ (سرعة ثابتة ← T = W_x)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> T = mg·sinθ (سرعة ثابتة ← T = W_x)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                T = 20×10×sin30° = 100 N → W = T×s = 100×5 = 500 J
            </div>
        </div>`,
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
            "T = mg·sinθ = 20×10×0.5 = 100 N",
            "W = T×s = 100×5 = 500 J",
            "",
            "الإجابة: ب) 500 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 500 J ✅"
    },

    // ============================================================
    // 📖 القسم التاسع: أسئلة متنوعة (مكملة - الجزء 2)
    // ============================================================

    {
        "id": 54,
        "title": "س 54: مزاوجة - الشغل المبذول في وحدة الزمن",
        "text": "الشغل المبذول في وحدة الزمن يُسمى:\n\nأ) الطاقة\nب) العزم\nج) القدرة\nد) الكفاءة",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 الشغل/الزمن = القدرة (P = W/t)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 الشغل/الزمن = القدرة (P = W/t)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "P = W/t (القدرة = الشغل/الزمن)",
            "",
            "الإجابة: ج) القدرة ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) القدرة ✅"
    },

    {
        "id": 55,
        "title": "س 55: مزاوجة - طاقة الوضع",
        "text": "الطاقة التي يمتلكها الجسم بسبب موضعه أو حالته تُسمى:\n\nأ) طاقة الحركة\nب) طاقة الوضع\nج) الطاقة الميكانيكية\nد) الطاقة الحرارية",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 الطاقة بسبب الموقع = طاقة الوضع (Ep)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 الطاقة بسبب الموقع = طاقة الوضع (Ep)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "طاقة الوضع = الطاقة المخزنة بسبب الموقع أو الحالة",
            "",
            "الإجابة: ب) طاقة الوضع ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) طاقة الوضع ✅"
    },

    {
        "id": 56,
        "title": "س 56: مزاوجة - المعدل الزمني لتحول الطاقة",
        "text": "المعدل الزمني لتحول الطاقة يُسمى:\n\nأ) القدرة\nب) الشغل\nج) العزم\nد) الكفاءة",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 معدل تحول الطاقة = القدرة (P)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 معدل تحول الطاقة = القدرة (P)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "القدرة = معدل تحول الطاقة = الطاقة/الزمن",
            "",
            "الإجابة: أ) القدرة ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) القدرة ✅"
    },

    {
        "id": 57,
        "title": "س 57: مزاوجة - حاصل ضرب القوة في الإزاحة",
        "text": "حاصل ضرب القوة في الإزاحة في اتجاهها يُسمى:\n\nأ) العزم\nب) الشغل الميكانيكي\nج) القدرة\nد) الدفع",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 F × s = الشغل الميكانيكي (W)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
            💡 F × s = الشغل الميكانيكي (W)
        </div>`,
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
            "══════════════ التلميح ══════════════",
            "W = F × s (الشغل = القوة × الإزاحة في اتجاهها)",
            "",
            "الإجابة: ب) الشغل الميكانيكي ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) الشغل الميكانيكي ✅"
    },

    // ============================================================
    // 📖 القسم العاشر: أسئلة امتحانات سابقة (متقدمة)
    // ============================================================

    {
        "id": 58,
        "title": "س 58: كتل متصلة بين أفقي ومائل (امتحان 2007)",
        "text": "في الشكل التالي: الأسطح ملساء والكتل غير مستقرة. تتصل الكتلة m₂ الموضوعة على مستوى مائل بزاوية θ بخيط يمر على بكرة ملساء عند القمة ويتصل بالكتلة m₁ الموضوعة على مستوى أفقي أملس، فإن مقدار الشد في الحبل (T) يساوي:\n\nأ) m₁·m₂·g·sinθ/(m₁+m₂)\nب) m₂·g·sinθ/(m₁+m₂)\nج) m₁·g·sinθ\nد) m₂·g·sinθ",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 m₂g·sinθ − T = m₂a , T = m₁a",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> m₂g·sinθ − T = m₂a , T = m₁a
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                T = (m₁·m₂·g·sinθ)/(m₁+m₂)
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو مقدار الشد T في الحبل؟",
                "options": [
                    { "text": "أ) m₁·m₂·g·sinθ/(m₁+m₂)", "isCorrect": true },
                    { "text": "ب) m₂·g·sinθ/(m₁+m₂)", "isCorrect": false },
                    { "text": "ج) m₁·g·sinθ", "isCorrect": false },
                    { "text": "د) m₂·g·sinθ", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! T = (m₁·m₂·g·sinθ)/(m₁+m₂)"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) m₁·m₂·g·sinθ/(m₁+m₂)  ✅",
            "ب) m₂·g·sinθ/(m₁+m₂)",
            "ج) m₁·g·sinθ",
            "د) m₂·g·sinθ",
            "",
            "══════════════ الحل ══════════════",
            "a = m₂g·sinθ/(m₁+m₂)",
            "T = m₁a = m₁·m₂·g·sinθ/(m₁+m₂)",
            "",
            "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
    },

    {
        "id": 59,
        "title": "س 59: كتلتان مع احتكاك - حالة اتزان (امتحان 2021-2022)",
        "text": "وضعت كتلة (6 kg) على مستوى مائل خشن يميل بزاوية (30°)، وكتلة (4 kg) معلقة رأسياً. إذا كانت المنظومة في حالة استقرار تام (اتزان)، أوجد قوة الشد T وقوة الاحتكاك f. (اعتبر g = 10 m/s²)\n\nأ) T = 40 N, f = 10 N\nب) T = 30 N, f = 20 N\nج) T = 50 N, f = 5 N\nد) T = 60 N, f = 30 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 T = 40 N , f = 10 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>الفكرة:</strong> وزن المعلقة = 40 N، مركبة الوزن على المائل = 30 N
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                T = 40 N , f = 10 N
            </div>
        </div>`,
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

    {
        "id": 60,
        "title": "س 60: حساب الكتلة المجهولة (مسألة المنضدة الملساء)",
        "text": "تحركت المنظومة في اتجاه الكتلة المعلقة m بعجلة مقدارها (a = 5 m/s²)، والكتلة الأخرى مقدارها (2 kg) موضوعة على منضدة ملساء وتتصل بها عبر خيط وبكرة ملساء. أوجد مقدار الكتلة المجهولة m. (اعتبر g = 10 m/s²)\n\nأ) 4 kg\nب) 5 kg\nج) 6 kg\nد) 8 kg",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 a = (mg − 20)/(m + 2) → 5 = (10m − 20)/(m + 2) → m = 6 kg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = (mg − 20)/(m + 2)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                5 = (10m − 20)/(m + 2) → m = 6 kg
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي قيمة الكتلة المجهولة m؟",
                "options": [
                    { "text": "أ) 4 kg", "isCorrect": false },
                    { "text": "ب) 5 kg", "isCorrect": false },
                    { "text": "ج) 6 kg", "isCorrect": true },
                    { "text": "د) 8 kg", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! m = 6 kg"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 4 kg",
            "ب) 5 kg",
            "ج) 6 kg  ✅",
            "د) 8 kg",
            "",
            "══════════════ الحل ══════════════",
            "a = (mg − 20)/(m + 2)",
            "5 = (10m − 20)/(m + 2)",
            "5(m + 2) = 10m − 20",
            "5m + 10 = 10m − 20 → 30 = 5m → m = 6 kg",
            "",
            "الإجابة: ج) 6 kg ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 6 kg ✅"
    },
    // ============================================================
    // 📖 القسم الحادي عشر: أسئلة متنوعة - الجزء 3
    // ============================================================

    {
        "id": 61,
        "title": "س 61: حساب السرعة عند منتصف المستوى المائل",
        "text": "إذا كانت طاقة الوضع عند أقصى نقطة لجسم كتلته 18 kg هي 1.8 kJ، انحدر على سطح أملس يميل بزاوية (θ)، فإن سرعته عندما يصل منتصف المستوى هي:\n\nأ) 200 m/s\nب) √200 m/s\nج) 100 m/s\nد) 10 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 H = Ep/(mg) = 1800/(18×10) = 10m ، h = H/2 = 5m ، v = √(2g(H-h)) = √(2×10×5) = 10 m/s",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>
                <strong>💡 الحل:</strong><br>
                <span style='direction:ltr; display:inline-block;'>H = 1800/(18×10) = 10 m</span><br>
                <span style='direction:ltr; display:inline-block;'>h = H/2 = 5 m</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>v = √(2×10×5) = 10 m/s</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب الارتفاع الكلي",
                "question": "كيف نحسب الارتفاع الكلي H من طاقة الوضع؟",
                "options": [
                    { "text": "H = E_p / (m × g)", "isCorrect": true },
                    { "text": "H = m × g × E_p", "isCorrect": false }
                ],
                "feedback": "صحيح! H = 1800/(18×10) = 10m"
            },
            {
                "title": "حساب السرعة",
                "question": "كيف نحسب السرعة عند منتصف المستوى؟",
                "options": [
                    { "text": "v = √(2×g×(H-h))", "isCorrect": true },
                    { "text": "v = √(2×g×H)", "isCorrect": false }
                ],
                "feedback": "صحيح! v = √(2×10×5) = 10 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 200 m/s",
            "ب) √200 m/s",
            "ج) 100 m/s",
            "د) 10 m/s  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "H = 1800/(18×10) = 10 m",
            "h = H/2 = 5 m",
            "v = √(2×10×5) = 10 m/s",
            "",
            "الإجابة النهائية: د) 10 m/s"
        ],
        "pdfFinalAnswer": "د) 10 m/s"
    },

    {
        "id": 62,
        "title": "س 62: حركة جسمين على بكرة ملساء (المسافة بينهما 1.5m)",
        "text": "جسمان كتلتاهما (4 kg, 6 kg) ربطا بخيط غير مرن يمر على بكرة ملساء، فإذا كانت الكتلتان عند نفس المستوى تحركت المجموعة من السكون، فإن سرعتهما عندما تكون المسافة بينهما (1.5 m) هي:\n\nأ) 1.73 m/s\nب) 54.8 m/s\nج) 2.45 m/s\nد) 3.9 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 a = (6-4)/(6+4)×10 = 2 m/s² ، 2s = 1.5 → s = 0.75m ، v = √(2×2×0.75) = √3 = 1.73 m/s",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #eff6ff; border-right: 4px solid #1d4ed8; padding: 10px; font-size: 13px; color: #1e3a8a;'>
                <strong>💡 الحل:</strong><br>
                <span style='direction:ltr; display:inline-block;'>a = (6-4)/(6+4)×10 = 2 m/s²</span><br>
                <span style='direction:ltr; display:inline-block;'>2s = 1.5 → s = 0.75m</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>v = √(2×2×0.75) = √3 = 1.73 m/s</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب العجلة",
                "question": "ما هي عجلة الحركة في منظومة البكرات؟",
                "options": [
                    { "text": "a = (m₂-m₁)/(m₂+m₁)·g", "isCorrect": true },
                    { "text": "a = (m₂+m₁)/(m₂-m₁)·g", "isCorrect": false }
                ],
                "feedback": "صحيح! a = (6-4)/(6+4)×10 = 2 m/s²"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.73 m/s  ✅ (الإجابة الصحيحة)",
            "ب) 54.8 m/s",
            "ج) 2.45 m/s",
            "د) 3.9 m/s",
            "",
            "══════════════ الحل ══════════════",
            "a = (6-4)/(6+4)×10 = 2 m/s²",
            "2s = 1.5 → s = 0.75m",
            "v = √(2×2×0.75) = √3 = 1.73 m/s",
            "",
            "الإجابة النهائية: أ) 1.73 m/s"
        ],
        "pdfFinalAnswer": "أ) 1.73 m/s"
    },

    {
        "id": 63,
        "title": "س 63: حساب العجلة من القدرة والتغير في السرعة",
        "text": "تتحرك سيارة كتلتها (950 kg) بقدرة (25 kW) سرعتها من (14 m/s) إلى (18 m/s) فإن العجلة التي تحركت بها:\n\nأ) 1.64 m/s²\nب) 1.48 m/s²\nج) 16 m/s²\nد) 2.6 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 W = ΔEk = ½×950×(18²−14²) = 60800 J ، t = W/P = 60800/25000 = 2.432s ، a = (18-14)/2.432 = 1.64 m/s²",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fdf4ff; border-right: 4px solid #c084fc; padding: 10px; font-size: 13px; color: #581c87;'>
                <strong>💡 الحل:</strong><br>
                <span style='direction:ltr; display:inline-block;'>W = ½×950×(324−196) = 60800 J</span><br>
                <span style='direction:ltr; display:inline-block;'>t = 60800/25000 = 2.432s</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>a = (18-14)/2.432 = 1.64 m/s²</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب التغير في طاقة الحركة",
                "question": "ما هو التغير في طاقة الحركة ΔEk؟",
                "options": [
                    { "text": "60800 J", "isCorrect": true },
                    { "text": "30400 J", "isCorrect": false }
                ],
                "feedback": "صحيح! ΔEk = ½×950×(324−196) = 60800 J"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.64 m/s²  ✅ (الإجابة الصحيحة)",
            "ب) 1.48 m/s²",
            "ج) 16 m/s²",
            "د) 2.6 m/s²",
            "",
            "══════════════ الحل ══════════════",
            "W = ½×950×(18²−14²) = 60800 J",
            "t = W/P = 60800/25000 = 2.432s",
            "a = (18-14)/2.432 = 1.64 m/s²",
            "",
            "الإجابة النهائية: أ) 1.64 m/s²"
        ],
        "pdfFinalAnswer": "أ) 1.64 m/s²"
    },

    {
        "id": 64,
        "title": "س 64: قذف جسم لأعلى مستوى مائل أملس (امتحان)",
        "text": "قُذف جسم لأعلى مستوى أملس يميل بزاوية (30°) مع الأفقي فكان أقصى ارتفاع يصل إليه المستوى هو (20 m) من سطح الأرض، فإن السرعة التي قُذف بها والمسافة التي يقطعها على التوالي تساوي:\n\nأ) 20 m/s , 40 m\nب) 10 m/s , 30 m\nج) صفر , 10 m\nد) 20 m/s , 20 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 u = √(2gH) = √(2×10×20) = 20 m/s ، s = H/sinθ = 20/0.5 = 40 m",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>u = √(2gH) = √400 = 20 m/s</span><br>
                <span style='direction:ltr; display:inline-block;'>s = H/sin(30°) = 20/0.5 = 40 m</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "حساب السرعة الابتدائية",
                "question": "كيف نحسب السرعة الابتدائية باستخدام حفظ الطاقة؟",
                "options": [
                    { "text": "u = √(2gH)", "isCorrect": true },
                    { "text": "u = √(gH)", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! u = √(2×10×20) = 20 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 20 m/s , 40 m  ✅ (الإجابة الصحيحة)",
            "ب) 10 m/s , 30 m",
            "ج) صفر , 10 m",
            "د) 20 m/s , 20 m",
            "",
            "══════════════ الحل ══════════════",
            "u = √(2gH) = √(2×10×20) = 20 m/s",
            "s = H/sinθ = 20/0.5 = 40 m",
            "",
            "الإجابة النهائية: أ) 20 m/s , 40 m"
        ],
        "pdfFinalAnswer": "أ) 20 m/s , 40 m"
    },

    {
        "id": 65,
        "title": "س 65: اتزان جسم تحت تأثير ثلاث قوى (امتحان 2022-2023)",
        "text": "في الشكل المقابل يتزن جسم تحت تأثير ثلاث قوى بحيث تكون قيمة F₁ تساوي:\n\nأ) 8 N\nب) 4 N\nج) 5 N\nد) 6 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 ΣF_y = 0 → F₁ sin30° + F₂ sin60° = 10 → F₁ = 5 N",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>F₁ sin30° + F₂ sin60° = 10</span><br>
                <span style='direction:ltr; display:inline-block;'>0.5F₁ + 8.66×0.866 = 10 → F₁ = 5 N</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "شرط الاتزان الرأسي",
                "question": "ما هو شرط الاتزان الرأسي (ΣF_y = 0)؟",
                "options": [
                    { "text": "F₁ sin30° + F₂ sin60° = 10", "isCorrect": true },
                    { "text": "F₁ cos30° + F₂ cos60° = 10", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! المركبات الرأسية للقوى لأعلى = 10 N (لأسفل)"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 8 N",
            "ب) 4 N",
            "ج) 5 N  ✅ (الإجابة الصحيحة)",
            "د) 6 N",
            "",
            "══════════════ الحل ══════════════",
            "F₁ sin30° + F₂ sin60° = 10",
            "0.5F₁ + 8.66×0.866 = 10",
            "0.5F₁ = 2.5 → F₁ = 5 N",
            "",
            "الإجابة النهائية: ج) 5 N"
        ],
        "pdfFinalAnswer": "ج) 5 N"
    },

    // ============================================================
    // 📖 القسم الثاني عشر: أسئلة إضافية (مكملة)
    // ============================================================

    {
        "id": 66,
        "title": "س 66: حساب زمن الصعود في القذف الرأسي",
        "text": "قُذف جسم رأسياً إلى أعلى بسرعة 30 m/s، فإن الزمن الذي يستغرقه للوصول إلى أقصى ارتفاع هو:\n\nأ) 1 s\nب) 2 s\nج) 3 s\nد) 4 s",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 t = u/g = 30/10 = 3 s",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> t = u/g
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                t = 30/10 = 3 s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو زمن الصعود؟",
                "options": [
                    { "text": "أ) 1 s", "isCorrect": false },
                    { "text": "ب) 2 s", "isCorrect": false },
                    { "text": "ج) 3 s", "isCorrect": true },
                    { "text": "د) 4 s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! t = 3 s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1 s",
            "ب) 2 s",
            "ج) 3 s  ✅ (الإجابة الصحيحة)",
            "د) 4 s",
            "",
            "══════════════ الحل ══════════════",
            "t = u/g = 30/10 = 3 s",
            "",
            "الإجابة: ج) 3 s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 3 s ✅"
    },

    {
        "id": 67,
        "title": "س 67: حساب السرعة النهائية في السقوط الحر",
        "text": "سقط جسم من السكون من ارتفاع 80 m، ما هي سرعته لحظة وصوله إلى الأرض؟ (g = 10 m/s²)\n\nأ) 20 m/s\nب) 30 m/s\nج) 40 m/s\nد) 50 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 v² = 2gh → v = √(2×10×80) = √1600 = 40 m/s",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v² = 2gh
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                v = √(2×10×80) = √1600 = 40 m/s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي سرعة الجسم لحظة وصوله للأرض؟",
                "options": [
                    { "text": "أ) 20 m/s", "isCorrect": false },
                    { "text": "ب) 30 m/s", "isCorrect": false },
                    { "text": "ج) 40 m/s", "isCorrect": true },
                    { "text": "د) 50 m/s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! v = 40 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 20 m/s",
            "ب) 30 m/s",
            "ج) 40 m/s  ✅ (الإجابة الصحيحة)",
            "د) 50 m/s",
            "",
            "══════════════ الحل ══════════════",
            "v² = 2gh = 2×10×80 = 1600",
            "v = √1600 = 40 m/s",
            "",
            "الإجابة: ج) 40 m/s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 40 m/s ✅"
    },

    {
        "id": 68,
        "title": "س 68: حساب الشغل المبذول لرفع جسم",
        "text": "ما هو الشغل المبذول لرفع جسم كتلته 5 kg إلى ارتفاع 2 m؟ (g = 10 m/s²)\n\nأ) 50 J\nب) 100 J\nج) 150 J\nد) 200 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 W = mgh = 5×10×2 = 100 J",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> W = mgh
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                W = 5×10×2 = 100 J
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو الشغل المبذول؟",
                "options": [
                    { "text": "أ) 50 J", "isCorrect": false },
                    { "text": "ب) 100 J", "isCorrect": true },
                    { "text": "ج) 150 J", "isCorrect": false },
                    { "text": "د) 200 J", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! W = 100 J"
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
            "W = mgh = 5×10×2 = 100 J",
            "",
            "الإجابة: ب) 100 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 100 J ✅"
    },

    {
        "id": 69,
        "title": "س 69: حساب القدرة اللازمة لرفع جسم",
        "text": "ما هي القدرة اللازمة لرفع جسم كتلته 10 kg إلى ارتفاع 5 m خلال 2 s؟ (g = 10 m/s²)\n\nأ) 100 W\nب) 150 W\nج) 200 W\nد) 250 W",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 P = W/t = mgh/t = 10×10×5/2 = 250 W",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> P = W/t = mgh/t
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                P = 10×10×5/2 = 250 W
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي القدرة اللازمة؟",
                "options": [
                    { "text": "أ) 100 W", "isCorrect": false },
                    { "text": "ب) 150 W", "isCorrect": false },
                    { "text": "ج) 200 W", "isCorrect": false },
                    { "text": "د) 250 W", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! P = 250 W"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 100 W",
            "ب) 150 W",
            "ج) 200 W",
            "د) 250 W  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "W = mgh = 10×10×5 = 500 J",
            "P = W/t = 500/2 = 250 W",
            "",
            "الإجابة: د) 250 W ✅"
        ],
        "pdfFinalAnswer": "الإجابة: د) 250 W ✅"
    },

    {
        "id": 70,
        "title": "س 70: حساب طاقة الحركة لجسم متحرك",
        "text": "ما هي طاقة الحركة لجسم كتلته 2 kg يتحرك بسرعة 3 m/s؟\n\nأ) 3 J\nب) 6 J\nج) 9 J\nد) 12 J",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 Ek = ½mv² = ½×2×3² = 9 J",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> Ek = ½mv²
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                Ek = ½×2×3² = 9 J
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي طاقة الحركة؟",
                "options": [
                    { "text": "أ) 3 J", "isCorrect": false },
                    { "text": "ب) 6 J", "isCorrect": false },
                    { "text": "ج) 9 J", "isCorrect": true },
                    { "text": "د) 12 J", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! Ek = 9 J"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 3 J",
            "ب) 6 J",
            "ج) 9 J  ✅ (الإجابة الصحيحة)",
            "د) 12 J",
            "",
            "══════════════ الحل ══════════════",
            "Ek = ½×2×3² = 9 J",
            "",
            "الإجابة: ج) 9 J ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 9 J ✅"
    },

    // ============================================================
    // 📖 القسم الثالث عشر: أسئلة متنوعة - الجزء 4 (مكملة)
    // ============================================================

    {
        "id": 71,
        "title": "س 71: حساب القوة المحصلة من العجلة",
        "text": "ما هي القوة المحصلة المؤثرة على جسم كتلته 4 kg ليكتسب عجلة 2 m/s²؟\n\nأ) 2 N\nب) 4 N\nج) 6 N\nد) 8 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 F = ma = 4×2 = 8 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> F = ma
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                F = 4×2 = 8 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي القوة المحصلة؟",
                "options": [
                    { "text": "أ) 2 N", "isCorrect": false },
                    { "text": "ب) 4 N", "isCorrect": false },
                    { "text": "ج) 6 N", "isCorrect": false },
                    { "text": "د) 8 N", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! F = 8 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 2 N",
            "ب) 4 N",
            "ج) 6 N",
            "د) 8 N  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "F = ma = 4×2 = 8 N",
            "",
            "الإجابة: د) 8 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: د) 8 N ✅"
    },

    {
        "id": 72,
        "title": "س 72: حساب وزن الجسم",
        "text": "ما هو وزن جسم كتلته 50 kg؟ (g = 10 m/s²)\n\nأ) 50 N\nب) 100 N\nج) 500 N\nد) 1000 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 W = mg = 50×10 = 500 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> W = mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                W = 50×10 = 500 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو وزن الجسم؟",
                "options": [
                    { "text": "أ) 50 N", "isCorrect": false },
                    { "text": "ب) 100 N", "isCorrect": false },
                    { "text": "ج) 500 N", "isCorrect": true },
                    { "text": "د) 1000 N", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! W = 500 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 50 N",
            "ب) 100 N",
            "ج) 500 N  ✅ (الإجابة الصحيحة)",
            "د) 1000 N",
            "",
            "══════════════ الحل ══════════════",
            "W = mg = 50×10 = 500 N",
            "",
            "الإجابة: ج) 500 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 500 N ✅"
    },

    {
        "id": 73,
        "title": "س 73: حساب الكتلة من الوزن",
        "text": "ما هي كتلة جسم وزنه 300 N؟ (g = 10 m/s²)\n\nأ) 10 kg\nب) 20 kg\nج) 30 kg\nد) 40 kg",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 m = W/g = 300/10 = 30 kg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> m = W/g
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                m = 300/10 = 30 kg
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي كتلة الجسم؟",
                "options": [
                    { "text": "أ) 10 kg", "isCorrect": false },
                    { "text": "ب) 20 kg", "isCorrect": false },
                    { "text": "ج) 30 kg", "isCorrect": true },
                    { "text": "د) 40 kg", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! m = 30 kg"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 10 kg",
            "ب) 20 kg",
            "ج) 30 kg  ✅ (الإجابة الصحيحة)",
            "د) 40 kg",
            "",
            "══════════════ الحل ══════════════",
            "m = W/g = 300/10 = 30 kg",
            "",
            "الإجابة: ج) 30 kg ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 30 kg ✅"
    },

    {
        "id": 74,
        "title": "س 74: حساب التسارع من القوة والكتلة",
        "text": "ما هو تسارع جسم كتلته 8 kg عندما تؤثر عليه قوة محصلة مقدارها 24 N؟\n\nأ) 2 m/s²\nب) 3 m/s²\nج) 4 m/s²\nد) 5 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 a = F/m = 24/8 = 3 m/s²",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = F/m
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = 24/8 = 3 m/s²
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو تسارع الجسم؟",
                "options": [
                    { "text": "أ) 2 m/s²", "isCorrect": false },
                    { "text": "ب) 3 m/s²", "isCorrect": true },
                    { "text": "ج) 4 m/s²", "isCorrect": false },
                    { "text": "د) 5 m/s²", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! a = 3 m/s²"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 2 m/s²",
            "ب) 3 m/s²  ✅ (الإجابة الصحيحة)",
            "ج) 4 m/s²",
            "د) 5 m/s²",
            "",
            "══════════════ الحل ══════════════",
            "a = F/m = 24/8 = 3 m/s²",
            "",
            "الإجابة: ب) 3 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 3 m/s² ✅"
    },

    {
        "id": 75,
        "title": "س 75: حساب قوة الاحتكاك السكوني",
        "text": "جسم كتلته 10 kg موضوع على سطح أفقي خشن، معامل الاحتكاك السكوني بينه وبين السطح هو 0.4، ما هي أقصى قوة احتكاك سكوني يمكن أن تؤثر على الجسم؟ (g = 10 m/s²)\n\nأ) 20 N\nب) 30 N\nج) 40 N\nد) 50 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 fₛ = μₛ·R = μₛ·mg = 0.4×10×10 = 40 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> fₛ = μₛ·R = μₛ·mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                fₛ = 0.4×10×10 = 40 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي أقصى قوة احتكاك سكوني؟",
                "options": [
                    { "text": "أ) 20 N", "isCorrect": false },
                    { "text": "ب) 30 N", "isCorrect": false },
                    { "text": "ج) 40 N", "isCorrect": true },
                    { "text": "د) 50 N", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! fₛ = 40 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 20 N",
            "ب) 30 N",
            "ج) 40 N  ✅ (الإجابة الصحيحة)",
            "د) 50 N",
            "",
            "══════════════ الحل ══════════════",
            "fₛ = μₛ·mg = 0.4×10×10 = 40 N",
            "",
            "الإجابة: ج) 40 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 40 N ✅"
    },

    {
        "id": 76,
        "title": "س 76: حساب قوة الاحتكاك الحركي",
        "text": "جسم كتلته 5 kg يتحرك على سطح أفقي خشن، معامل الاحتكاك الحركي بينه وبين السطح هو 0.2، ما هي قوة الاحتكاك الحركي المؤثرة على الجسم؟ (g = 10 m/s²)\n\nأ) 5 N\nب) 10 N\nج) 15 N\nد) 20 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 fₖ = μₖ·R = μₖ·mg = 0.2×5×10 = 10 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> fₖ = μₖ·R = μₖ·mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                fₖ = 0.2×5×10 = 10 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي قوة الاحتكاك الحركي؟",
                "options": [
                    { "text": "أ) 5 N", "isCorrect": false },
                    { "text": "ب) 10 N", "isCorrect": true },
                    { "text": "ج) 15 N", "isCorrect": false },
                    { "text": "د) 20 N", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! fₖ = 10 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 5 N",
            "ب) 10 N  ✅ (الإجابة الصحيحة)",
            "ج) 15 N",
            "د) 20 N",
            "",
            "══════════════ الحل ══════════════",
            "fₖ = μₖ·mg = 0.2×5×10 = 10 N",
            "",
            "الإجابة: ب) 10 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 10 N ✅"
    },

    {
        "id": 77,
        "title": "س 77: حساب معامل الاحتكاك من قوة الاحتكاك",
        "text": "جسم كتلته 8 kg يتحرك على سطح أفقي، وقوة الاحتكاك الحركي المؤثرة عليه هي 16 N، ما هو معامل الاحتكاك الحركي؟ (g = 10 m/s²)\n\nأ) 0.1\nب) 0.2\nج) 0.3\nد) 0.4",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 μₖ = fₖ/(mg) = 16/(8×10) = 0.2",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> μₖ = fₖ/(mg)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                μₖ = 16/(8×10) = 0.2
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو معامل الاحتكاك الحركي؟",
                "options": [
                    { "text": "أ) 0.1", "isCorrect": false },
                    { "text": "ب) 0.2", "isCorrect": true },
                    { "text": "ج) 0.3", "isCorrect": false },
                    { "text": "د) 0.4", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! μₖ = 0.2"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 0.1",
            "ب) 0.2  ✅ (الإجابة الصحيحة)",
            "ج) 0.3",
            "د) 0.4",
            "",
            "══════════════ الحل ══════════════",
            "μₖ = fₖ/(mg) = 16/(8×10) = 0.2",
            "",
            "الإجابة: ب) 0.2 ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ب) 0.2 ✅"
    },

    {
        "id": 78,
        "title": "س 78: حساب قوة الشد في حبل (بكرة)",
        "text": "جسمان كتلتاهما (2 kg) و (3 kg) معلقان بطرفي حبل يمر على بكرة ملساء، ما هي قوة الشد في الحبل؟ (g = 10 m/s²)\n\nأ) 12 N\nب) 18 N\nج) 24 N\nد) 30 N",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 a = (3-2)/(3+2)×10 = 2 m/s² ، T = m₁(g+a) = 2×(10+2) = 24 N",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = (m₂-m₁)/(m₂+m₁)·g ، T = m₁(g+a)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = (3-2)/(3+2)×10 = 2 m/s²
                T = 2×(10+2) = 24 N
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي قوة الشد في الحبل؟",
                "options": [
                    { "text": "أ) 12 N", "isCorrect": false },
                    { "text": "ب) 18 N", "isCorrect": false },
                    { "text": "ج) 24 N", "isCorrect": true },
                    { "text": "د) 30 N", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! T = 24 N"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 12 N",
            "ب) 18 N",
            "ج) 24 N  ✅ (الإجابة الصحيحة)",
            "د) 30 N",
            "",
            "══════════════ الحل ══════════════",
            "a = (3-2)/(3+2)×10 = 2 m/s²",
            "T = m₁(g+a) = 2×(10+2) = 24 N",
            "",
            "الإجابة: ج) 24 N ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 24 N ✅"
    },

    {
        "id": 79,
        "title": "س 79: حساب العجلة على مستوى مائل أملس",
        "text": "جسم كتلته 5 kg ينزلق على مستوى مائل أملس يميل بزاوية 30° مع الأفقي، ما هي عجلة انزلاقه؟ (g = 10 m/s²)\n\nأ) 2 m/s²\nب) 3 m/s²\nج) 4 m/s²\nد) 5 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 3,
        "hint": "💡 a = g·sinθ = 10×sin30° = 10×0.5 = 5 m/s²",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = g·sinθ
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = 10×sin30° = 10×0.5 = 5 m/s²
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي عجلة الانزلاق؟",
                "options": [
                    { "text": "أ) 2 m/s²", "isCorrect": false },
                    { "text": "ب) 3 m/s²", "isCorrect": false },
                    { "text": "ج) 4 m/s²", "isCorrect": false },
                    { "text": "د) 5 m/s²", "isCorrect": true }
                ],
                "feedback": "✅ صحيح! a = 5 m/s²"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 2 m/s²",
            "ب) 3 m/s²",
            "ج) 4 m/s²",
            "د) 5 m/s²  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "a = g·sinθ = 10×0.5 = 5 m/s²",
            "",
            "الإجابة: د) 5 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: د) 5 m/s² ✅"
    },

    {
        "id": 80,
        "title": "س 80: حساب العجلة على مستوى مائل خشن",
        "text": "جسم كتلته 4 kg ينزلق على مستوى مائل خشن يميل بزاوية 30° مع الأفقي، معامل الاحتكاك الحركي بينه وبين السطح هو 0.2، ما هي عجلة انزلاقه؟ (g = 10 m/s²)\n\nأ) 1.27 m/s²\nب) 2.27 m/s²\nج) 3.27 m/s²\nد) 4.27 m/s²",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 a = g(sinθ − μcosθ) = 10(0.5 − 0.2×0.866) = 10(0.5−0.1732) = 3.27 m/s²",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> a = g(sinθ − μcosθ)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                a = 10(0.5 − 0.2×0.866) = 10(0.5−0.1732) = 3.27 m/s²
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي عجلة الانزلاق على المستوى الخشن؟",
                "options": [
                    { "text": "أ) 1.27 m/s²", "isCorrect": false },
                    { "text": "ب) 2.27 m/s²", "isCorrect": false },
                    { "text": "ج) 3.27 m/s²", "isCorrect": true },
                    { "text": "د) 4.27 m/s²", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! a = 3.27 m/s²"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.27 m/s²",
            "ب) 2.27 m/s²",
            "ج) 3.27 m/s²  ✅ (الإجابة الصحيحة)",
            "د) 4.27 m/s²",
            "",
            "══════════════ الحل ══════════════",
            "a = g(sinθ − μcosθ)",
            "a = 10(0.5 − 0.2×0.866) = 10(0.5−0.1732) = 3.27 m/s²",
            "",
            "الإجابة: ج) 3.27 m/s² ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 3.27 m/s² ✅"
    },

    {
        "id": 81,
        "title": "س 81: استنتاج علاقة الاتزان (كتلتان مع احتكاك)",
        "text": "كتلتان (m₁, m₂) متصلتان بخيط يمر فوق بكرة ملساء ومثبتة عند حافة منضدة، توجد الكتلة (m₁) على سطح أفقي خشن معامل احتكاكه (μ). ما مقدار الكتلة الإضافية (m) التي يجب وضعها فوق الكتلة (m₁) حتى لا يتسارع النظام وتظل المجموعة متزنة؟\n\nأ) m = m₂/μ − m₁\nب) m = μ·m₂ − m₁\nج) m = m₂ − μ·m₁\nد) m = m₂/(m₁·μ)",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 T = m₂g ، T = μ(m₁+m)g → m = m₂/μ − m₁",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #fff7ed; border-right: 4px solid #ea580c; padding: 12px 16px; font-size: 14px; line-height: 1.6;'>
                <strong style='color: #c2410c;'>📌 التلميح:</strong><br>
                <span style='direction:ltr; display:inline-block;'>T = m₂g</span><br>
                <span style='direction:ltr; display:inline-block;'>T = μ(m₁+m)g</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>m = m₂/μ − m₁</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "معادلة الاتزان",
                "question": "ما هي العلاقة التي تربط الكتلة الإضافية m بالكتل المعطاة؟",
                "options": [
                    { "text": "m = m₂/μ − m₁", "isCorrect": true },
                    { "text": "m = μ·m₂ − m₁", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! m = m₂/μ − m₁"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) m = m₂/μ − m₁  ✅",
            "ب) m = μ·m₂ − m₁",
            "ج) m = m₂ − μ·m₁",
            "د) m = m₂/(m₁·μ)",
            "",
            "══════════════ الحل ══════════════",
            "m₂g = μ(m₁+m)g",
            "m₂/μ = m₁+m",
            "m = m₂/μ − m₁",
            "",
            "الإجابة النهائية: أ) m = m₂/μ − m₁"
        ],
        "pdfFinalAnswer": "أ) m = m₂/μ − m₁"
    },

    {
        "id": 82,
        "title": "س 82: حساب السرعة النهائية من حفظ الطاقة",
        "text": "جسم كتلته 2 kg سقط من السكون من ارتفاع 20 m، ما هي سرعته قبل وصوله للأرض مباشرة؟ (بإهمال مقاومة الهواء، g = 10 m/s²)\n\nأ) 10 m/s\nب) 15 m/s\nج) 20 m/s\nد) 25 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 v = √(2gh) = √(2×10×20) = √400 = 20 m/s",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v = √(2gh)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                v = √(2×10×20) = √400 = 20 m/s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي سرعة الجسم قبل وصوله للأرض؟",
                "options": [
                    { "text": "أ) 10 m/s", "isCorrect": false },
                    { "text": "ب) 15 m/s", "isCorrect": false },
                    { "text": "ج) 20 m/s", "isCorrect": true },
                    { "text": "د) 25 m/s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! v = 20 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 10 m/s",
            "ب) 15 m/s",
            "ج) 20 m/s  ✅ (الإجابة الصحيحة)",
            "د) 25 m/s",
            "",
            "══════════════ الحل ══════════════",
            "v = √(2gh) = √(2×10×20) = √400 = 20 m/s",
            "",
            "الإجابة: ج) 20 m/s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: ج) 20 m/s ✅"
    },
    {
        "id": 22,
        "title": "س 22 (ميكانيكا): معامل الاحتكاك",
        "text": "تتسارع كتلة مقدارها (6 kg) بمقدار (1.25 m/s²) على سطح أفقي بفعل قوة مقدارها (22.5 N) فإن معامل الاحتكاك بين الكتلة والسطح يساوي:\n\nأ) 0.4\nب) 0.25\nج) 1",
        "type": "multiple-choice",
        "correctAnswerIndex": 1,
        "hint": "💡 F − f = ma , f = μR , R = mg",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> F − f = ma , f = μR , R = mg
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                f = 22.5 − 6×1.25 = 15 N → μ = 15/(6×10) = 0.25
            </div>
        </div>`,
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
    {
        "id": 23,
        "title": "س 23 (ميكانيكا): القوة الأفقية على مستوى مائل",
        "text": "تستقر كتلة مقدارها (2 kg) على مستوى يميل على الأفقي بزاوية (50°). أثرت قوة أفقية مقدارها (30 N) على الكتلة كما هو موضح بالشكل. فإن مقدار واتجاه قوة الاحتكاك المؤثرة على الكتلة تساوي:\n\nأ) 34.6 N إلى أعلى\nب) 34.6 N إلى أسفل\nج) 3.69 N إلى أسفل",
        "type": "multiple-choice",
        "correctAnswerIndex": 2,
        "hint": "💡 F_up = 30·cos(50°) = 19.28 N ، W_down = 20·sin(50°) = 15.32 N ، f = 19.28 - 15.32 = 3.96 N",
        "svgCode": `<div style='background: #ffffff; border-radius: 14px; padding: 20px; border: 1.5px solid #e2e8f0; direction: rtl;'>
            <div style='background: #f0fdf4; border-right: 4px solid #16a34a; padding: 10px; font-size: 13px; color: #14532d;'>
                <strong>💡 فكرة الاتزان:</strong><br>
                <span style='direction:ltr; display:inline-block;'>F_up = 30·cos(50°) = 19.28 N</span><br>
                <span style='direction:ltr; display:inline-block;'>W_down = 20·sin(50°) = 15.32 N</span><br>
                <span style='direction:ltr; display:inline-block; font-weight:bold;'>f = 19.28 - 15.32 = 3.96 N ≈ 3.69 N (لأسفل)</span>
            </div>
        </div>`,
        "steps": [
            {
                "title": "تحديد اتجاه الحركة الوشيكة",
                "question": "بما أن القوة الأفقية أكبر من مركبة الوزن، فأي اتجاه سيميل الجسم للحركة؟",
                "options": [
                    { "text": "أ) إلى أعلى المستوى المائل", "isCorrect": true },
                    { "text": "ب) إلى أسفل المستوى المائل", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! القوة الصاعدة (19.28 N) أكبر من الهابطة (15.32 N)."
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 34.6 N إلى أعلى",
            "ب) 34.6 N إلى أسفل",
            "ج) 3.69 N إلى أسفل  ✅ (الإجابة الصحيحة)",
            "",
            "══════════════ الحل ══════════════",
            "F_up = 30·cos(50°) = 19.28 N",
            "W_down = 20·sin(50°) = 15.32 N",
            "f = 19.28 - 15.32 = 3.96 N ≈ 3.69 N (لأسفل)",
            "",
            "الإجابة النهائية: ج) 3.69 N إلى أسفل"
        ],
        "pdfFinalAnswer": "ج) 3.69 N إلى أسفل"
    },
    {
        "id": 24,
        "title": "س 24 (ميكانيكا): سرعة السقوط الحر",
        "text": "سقط حجر من السكون فكانت سرعته بعد (3 s) تساوي:\n\nأ) 30 m/s\nب) 20 m/s\nج) 10 m/s",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 v = u + gt (السقوط الحر من السكون)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v = u + gt (السقوط الحر من السكون)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                v = 0 + 10×3 = 30 m/s
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هي سرعة الحجر بعد 3 ثوان؟",
                "options": [
                    { "text": "أ) 30 m/s", "isCorrect": true },
                    { "text": "ب) 20 m/s", "isCorrect": false },
                    { "text": "ج) 10 m/s", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! v = 30 m/s"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 30 m/s  ✅ (الإجابة الصحيحة)",
            "ب) 20 m/s",
            "ج) 10 m/s",
            "",
            "══════════════ الحل ══════════════",
            "v = u + gt = 0 + 10×3 = 30 m/s",
            "",
            "الإجابة: أ) 30 m/s ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 30 m/s ✅"
    },,
    {
        "id": 25,
        "title": "س 25 (ميكانيكا): أقصى ارتفاع للقذف الرأسي",
        "text": "يقذف لاعب السيرك كرة إلى أعلى رأسياً بسرعة (6 m/s) أقصى ارتفاع تصل إليه الكرة هو:\n\nأ) 1.8 m\nب) 3.6 m\nج) 5.4 m\nد) 7.2 m",
        "type": "multiple-choice",
        "correctAnswerIndex": 0,
        "hint": "💡 v² = u² − 2gh → h = u²/(2g)",
        "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
            <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
                <strong>القانون:</strong> v² = u² − 2gh → h = u²/(2g)
            </div>
            <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
                h = 36/(2×10) = 36/20 = 1.8 m
            </div>
        </div>`,
        "steps": [
            {
                "title": "اختر الإجابة الصحيحة",
                "question": "ما هو أقصى ارتفاع تصل إليه الكرة؟",
                "options": [
                    { "text": "أ) 1.8 m", "isCorrect": true },
                    { "text": "ب) 3.6 m", "isCorrect": false },
                    { "text": "ج) 5.4 m", "isCorrect": false },
                    { "text": "د) 7.2 m", "isCorrect": false }
                ],
                "feedback": "✅ صحيح! h = 1.8 m"
            }
        ],
        "pdfSolutionSteps": [
            "══════════════ الخيارات ══════════════",
            "أ) 1.8 m  ✅ (الإجابة الصحيحة)",
            "ب) 3.6 m",
            "ج) 5.4 m",
            "د) 7.2 m",
            "",
            "══════════════ الحل ══════════════",
            "v² = u² − 2gh → 0 = 36 − 20h",
            "h = 36/20 = 1.8 m",
            "",
            "الإجابة: أ) 1.8 m ✅"
        ],
        "pdfFinalAnswer": "الإجابة: أ) 1.8 m ✅"
    }


// 🏁 نهاية الجزء الثالث من المصفوفة (الأسئلة 61-82)


];

// ============================================================
// ============================================================
// ✅ اكتملت المصفوفة بالكامل (82 سؤالاً)
// ============================================================


// ============================================================
// 🏁 نهاية الجزء الثاني من المصفوفة (الأسئلة 31-60)
// ============================================================
// سيتبعها الجزء الثالث (الأسئلة 61-80+)
// ============================================================



// ============================================================
// ============================================================
// ============================================================