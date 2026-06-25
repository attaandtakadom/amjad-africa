const questionsMatrix = [


// ============================================================
// أسئلة الباب الثاني والثالث والرابع (قوانين نيوتن والاحتكاك والبكرات)
// ============================================================

// ============================================================
// أولاً: أسئلة الصواب والخطأ (س1، س3، س4)
// ============================================================

// س1 - عجلة المقذوف الرأسي
{
    "title": "س 1 (ميكانيكا - صح/خطأ): عجلة المقذوف الرأسي",
    "text": "يكون للجسم المقذوف رأسياً لأعلى عجلة تسارع تختلف في قيمتها عن عجلة السقوط الحر.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 في غياب مقاومة الهواء: عجلة الصعود = عجلة الهبوط = g (ثابتة)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل تختلف عجلة المقذوف لأعلى عن عجلة السقوط الحر؟",
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
        "══════════════ التوضيح ══════════════",
        "• في غياب مقاومة الهواء:",
        "  - الصعود: a = −g = −10 m/s²",
        "  - الهبوط: a = +g = +10 m/s²",
        "• العجلة ثابتة ولا تختلف",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س3 - القوة العمودية على مستوى مائل
{
    "title": "س 3 (ميكانيكا - صح/خطأ): القوة العمودية على مستوى مائل",
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

// س4 - الاحتكاك على وشك الحركة
{
    "title": "س 4 (ميكانيكا - صح/خطأ): الاحتكاك على وشك الحركة",
    "text": "عندما يكون الجسم على وشك الحركة، تكون قوة الاحتكاك في حدها الأقصى (fₛ = μₛ·R).",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 على وشك الحركة → الاحتكاك سكوني أقصى → fₛ = μₛ·R
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
        "══════════════ التوضيح ══════════════",
        "• على وشك الحركة → الاحتكاك السكوني يصل لأقصى قيمة",
        "• fₛ = μₛ·R (قانون الاحتكاك السكوني الأقصى)",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// ============================================================
// ثانياً: أسئلة الاختيار من متعدد (س2، س5، س6، س7، س8)
// ============================================================

// س2 - زمن الوصول لأقصى ارتفاع
{
    "title": "س 2 (ميكانيكا): زمن الوصول لأقصى ارتفاع",
    "text": "قُذف جسم رأسياً إلى أعلى بسرعة ابتدائية (20 m/s)، فإن الزمن اللازم حتى يصل الجسم إلى أقصى ارتفاع يساوي (باعتبار g = 10 m/s²):",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> v = u − gt ، وعند أقصى ارتفاع v = 0
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            0 = 20 − 10t → t = 2 s
        </div>
    </div>`,
    "options": [
        { "text": "أ) 1 s", "isCorrect": false },
        { "text": "ب) 2 s", "isCorrect": true },
        { "text": "ج) 4 s", "isCorrect": false },
        { "text": "د) 0.5 s", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو زمن الوصول لأقصى ارتفاع؟",
            "options": [
                { "text": "أ) 1 s", "isCorrect": false },
                { "text": "ب) 2 s", "isCorrect": true },
                { "text": "ج) 4 s", "isCorrect": false },
                { "text": "د) 0.5 s", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! t = 2 s"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 1 s",
        "ب) 2 s  ✅ (الإجابة الصحيحة)",
        "ج) 4 s",
        "د) 0.5 s",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: u = 20 m/s, g = 10 m/s²",
        "عند أقصى ارتفاع: v = 0",
        "v = u − gt → 0 = 20 − 10t",
        "10t = 20 → t = 2 s",
        "",
        "الإجابة: ب) 2 s ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 2 s ✅"
},

// س5 - أقل قوة لبدء الحركة
{
    "title": "س 5 (ميكانيكا): أقل قوة لبدء الحركة",
    "text": "وضع جسم كتلته (10 kg) على سطح أفقي خشن، فإذا كان معامل الاحتكاك السكوني بين الجسم والسطح (μ = 0.3)، فإن أقل قوة أفقية تكفي لجعل الجسم على وشك الحركة تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> F = fₛ = μₛ·R , R = mg
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            R = 10×10 = 100 N → F = 0.3×100 = 30 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) 3 N", "isCorrect": false },
        { "text": "ب) 30 N", "isCorrect": true },
        { "text": "ج) 100 N", "isCorrect": false },
        { "text": "د) 33 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س6 - قوة مقاومة الحركة
{
    "title": "س 6 (ميكانيكا): قوة مقاومة الحركة",
    "text": "قوة مقدارها (50 N) أثرت على جسم كتلته (5 kg) فإذا تحرك الجسم بعجلة مقدارها (6 m/s²)، فإن قوة مقاومة الحركة (الاحتكاك) تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> F − f = ma
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            50 − f = 5×6 = 30 → f = 20 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) 10 N", "isCorrect": false },
        { "text": "ب) 20 N", "isCorrect": true },
        { "text": "ج) 30 N", "isCorrect": false },
        { "text": "د) 50 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قوة مقاومة الحركة؟",
            "options": [
                { "text": "أ) 10 N", "isCorrect": false },
                { "text": "ب) 20 N", "isCorrect": true },
                { "text": "ج) 30 N", "isCorrect": false },
                { "text": "د) 50 N", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! f = 20 N"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 10 N",
        "ب) 20 N  ✅ (الإجابة الصحيحة)",
        "ج) 30 N",
        "د) 50 N",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: F = 50 N, m = 5 kg, a = 6 m/s²",
        "F − f = ma",
        "50 − f = 5×6 = 30",
        "f = 50 − 30 = 20 N",
        "",
        "الإجابة: ب) 20 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 20 N ✅"
},

// س7 - عجلة البكرة المتدلية (3kg و 2kg)
{
    "title": "س 7 (ميكانيكا): عجلة البكرة المتدلية",
    "text": "كتلتان (3 kg) و (2 kg) متصلتان بطرفي خيط يمر فوق بكرة ملساء وتتدليان رأسياً، عند تركهما للحركة من السكون، فإن عجلة المجموعة (a) تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> a = (m₁−m₂)/(m₁+m₂) × g
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = (3−2)/(3+2) × 10 = 1/5 × 10 = 2 m/s²
        </div>
    </div>`,
    "options": [
        { "text": "أ) 2 m/s²", "isCorrect": true },
        { "text": "ب) 5 m/s²", "isCorrect": false },
        { "text": "ج) 10 m/s²", "isCorrect": false },
        { "text": "د) 1 m/s²", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي عجلة المجموعة؟",
            "options": [
                { "text": "أ) 2 m/s²", "isCorrect": true },
                { "text": "ب) 5 m/s²", "isCorrect": false },
                { "text": "ج) 10 m/s²", "isCorrect": false },
                { "text": "د) 1 m/s²", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! a = 2 m/s²"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 2 m/s²  ✅ (الإجابة الصحيحة)",
        "ب) 5 m/s²",
        "ج) 10 m/s²",
        "د) 1 m/s²",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: m₁ = 3 kg, m₂ = 2 kg, g = 10 m/s²",
        "a = (m₁−m₂)/(m₁+m₂) × g",
        "a = (3−2)/(3+2) × 10 = 1/5 × 10 = 2 m/s²",
        "",
        "الإجابة: أ) 2 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 2 m/s² ✅"
},

// س8 - الشد في الخيط (البكرة المتدلية)
{
    "title": "س 8 (ميكانيكا): الشد في الخيط",
    "text": "في المسألة السابقة (س7)، مقدار قوة الشد (T) في الخيط أثناء الحركة يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> للكتلة الصاعدة (2 kg): T − m₂g = m₂a
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            T − 20 = 2×2 = 4 → T = 24 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) 20 N", "isCorrect": false },
        { "text": "ب) 24 N", "isCorrect": true },
        { "text": "ج) 30 N", "isCorrect": false },
        { "text": "د) 12 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هو مقدار الشد في الخيط؟",
            "options": [
                { "text": "أ) 20 N", "isCorrect": false },
                { "text": "ب) 24 N", "isCorrect": true },
                { "text": "ج) 30 N", "isCorrect": false },
                { "text": "د) 12 N", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! T = 24 N"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 20 N",
        "ب) 24 N  ✅ (الإجابة الصحيحة)",
        "ج) 30 N",
        "د) 12 N",
        "",
        "══════════════ الحل ══════════════",
        "المعطيات: m₂ = 2 kg, a = 2 m/s², g = 10 m/s²",
        "للكتلة الصاعدة (2 kg): T − m₂g = m₂a",
        "T − 2×10 = 2×2",
        "T − 20 = 4 → T = 24 N",
        "",
        "الإجابة: ب) 24 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 24 N ✅"
},

// ============================================================
// 🏁 انتهت الأسئلة 🏁
// ============================================================
{
    "title": "س 1 (شغل وطاقة - صح/خطأ): الشغل الناتج من قوة الاحتكاك",
    "text": "الشغل الناتج من قوة الاحتكاك يكون دائماً سالباً لأنه يعمل في عكس اتجاه الحركة.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 W = F·s·cosθ → θ = 180° → cos180° = -1 → W سالب دائماً
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
        "قوة الاحتكاك تعاكس الحركة → θ = 180°",
        "cos180° = -1 → W سالب دائماً (شغل مقاوم)",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// س2 - تعريف طاقة الحركة
{
    "title": "س 2 (شغل وطاقة - صح/خطأ): تعريف طاقة الحركة",
    "text": "طاقة الحركة هي طاقة مخزنة في الجسم بسبب وضعه أو الارتفاع الذي يصل إليه عن سطح الأرض.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 هذا تعريف طاقة الوضع (Ep = mgh) ← طاقة الحركة (Ek = ½mv²)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
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

// ============================================================
// ثانياً: أسئلة الاختيار من متعدد (س3 - س5)
// ============================================================

// س3 - التغير في طاقة الحركة
{
    "title": "س 3 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "جسم كتلته 4 kg يتحرك بسرعة 5 m/s، فإذا تضاعفت سرعته لتصبح 10 m/s، فإن الزيادة (التغير) في طاقة حركته تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> ΔEk = ½m(v₂² − v₁²)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            ΔEk = ½×4×(10²−5²) = 2×(100−25) = 150 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 50 J", "isCorrect": false },
        { "text": "ب) 150 J", "isCorrect": true },
        { "text": "ج) 200 J", "isCorrect": false },
        { "text": "د) 10 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س4 - قدرة الرافعة الكهربائية
{
    "title": "س 4 (شغل وطاقة): قدرة الرافعة الكهربائية",
    "text": "رافعة كهربائية تبذل شغلاً مقداره 60 kJ لرفع حمولة ما خلال زمن قدره 0.5 min، فإن قدرة هذه الرافعة تساوي:",
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
    "options": [
        { "text": "أ) 120 W", "isCorrect": false },
        { "text": "ب) 2 kW", "isCorrect": true },
        { "text": "ج) 30 kW", "isCorrect": false },
        { "text": "د) 1200 W", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س5 - كفاءة الآلة
{
    "title": "س 5 (شغل وطاقة): كفاءة الآلة",
    "text": "آلة كفاءتها 80%، إذا كانت القدرة الداخلة إليها تساوي 5 kW، فإن القدرة الخارجة (المفيدة) من الآلة تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> η = P_out / P_in
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            P_out = η × P_in = 0.80 × 5 = 4 kW
        </div>
    </div>`,
    "options": [
        { "text": "أ) 4 kW", "isCorrect": true },
        { "text": "ب) 6.25 kW", "isCorrect": false },
        { "text": "ج) 400 W", "isCorrect": false },
        { "text": "د) 4.5 kW", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// ============================================================
// 🏁 انتهت أسئلة الباب الخامس (الشغل والطاقة والقدرة) 🏁
// ============================================================
{
    "title": "مسألة 1 (شغل وطاقة): القدرة والسرعة على سطح خشن",
    "text": "تتحرك سيارة كتلتها 1200 kg على طريق أفقي خشن بسرعة ثابتة مقدارها 25 m/s، فإذا كانت قوة مقاومة الطريق لحركة السيارة تساوي 400 N، احسب القدرة التي يبذلها محرك السيارة.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> P = F·v ، والسرعة ثابتة → F = f (قوة الاحتكاك)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            P = 400 × 25 = 10000 W = 10 kW
        </div>
    </div>`,
    "options": [
        { "text": "أ) 5 kW", "isCorrect": false },
        { "text": "ب) 10 kW", "isCorrect": true },
        { "text": "ج) 15 kW", "isCorrect": false },
        { "text": "د) 20 kW", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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
        "سرعة ثابتة → a = 0 → F = f = 400 N",
        "P = F × v = 400 × 25 = 10000 W",
        "P = 10000/1000 = 10 kW",
        "",
        "الإجابة: ب) 10 kW ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 10 kW ✅"
},

// س2 - التغير في طاقة الحركة (شغل الكوابح)
{
    "title": "مسألة 2 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "تسير سيارة بسرعة 20 m/s، ضغط سائقها على الكوابح فتناقصت سرعتها بانتظام إلى 5 m/s خلال مسافة مقدرها 60 m، فإذا كانت كتلة السيارة 1000 kg، أوجد الشغل المبذول بواسطة الكوابح (الفرامل).",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> W = ΔEk = ½m(v² − u²)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            W = ½×1000×(5²−20²) = −187500 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) −187500 J", "isCorrect": true },
        { "text": "ب) −150000 J", "isCorrect": false },
        { "text": "ج) −200000 J", "isCorrect": false },
        { "text": "د) −100000 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س3 - طاقة الوضع عند أقصى ارتفاع
{
    "title": "مسألة 3 (شغل وطاقة): طاقة الوضع عند أقصى ارتفاع",
    "text": "قُذف جسم كتلته 0.5 kg رأسياً إلى أعلى بسرعة ابتدائية 20 m/s، احسب طاقة وضعه عند أقصى ارتفاع يصل إليه (بإهمال مقاومة الهواء، واعتبار g = 10 m/s²).",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            Ek = ½×0.5×20² = 100 J → Ep = 100 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 50 J", "isCorrect": false },
        { "text": "ب) 100 J", "isCorrect": true },
        { "text": "ج) 150 J", "isCorrect": false },
        { "text": "د) 200 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س4 - الشغل المبذول على مستوى مائل أملس
{
    "title": "مسألة 4 (شغل وطاقة): الشغل على مستوى مائل أملس",
    "text": "يُسحب صندوق كتلته 20 kg إلى أعلى مستوى مائل أملس يميل على الأفقي بزاوية 30° مسافة 5 m بسرعة ثابتة بواسطة حبل موازٍ للمستوى. احسب الشغل المبذول بواسطة قوة الشد في الحبل.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 12px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> T = mg·sinθ (سرعة ثابتة → T = W_x)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            T = 20×10×sin30° = 100 N → W = T×s = 100×5 = 500 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 250 J", "isCorrect": false },
        { "text": "ب) 500 J", "isCorrect": true },
        { "text": "ج) 750 J", "isCorrect": false },
        { "text": "د) 1000 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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
        "سرعة ثابتة → T = mg·sinθ",
        "T = 20×10×0.5 = 100 N",
        "W = T×s = 100×5 = 500 J",
        "",
        "الإجابة: ب) 500 J ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ب) 500 J ✅"
}
,
{
    "title": "س 1 (شغل وطاقة - صح/خطأ): الشغل الناتج من القوة العمودية",
    "text": "الشغل الناتج من القوة العمودية على اتجاه الحركة يساوي دائماً صفراً.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 W = F·s·cosθ → θ = 90° → cos90° = 0 → W = 0
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س2 - وحدة القدرة
{
    "title": "س 2 (شغل وطاقة - صح/خطأ): وحدة القدرة",
    "text": "وحدة قياس القدرة في النظام الدولي (SI) هي الوات (W) وهي تكافئ جول على الثانية (J/s).",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 P = W/t → وحدة القدرة = J/s = W (وات)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
    "title": "س 3 (شغل وطاقة - صح/خطأ): طاقة الحركة والسرعة",
    "text": "طاقة الحركة لجسم تتناسب عكسياً مع مربع سرعته.",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 Ek = ½mv² → تتناسب طردياً مع مربع السرعة (وليس عكسياً)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
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

// ============================================================
// ثانياً: أسئلة الاختيار من متعدد (س4 - س7)
// ============================================================

// س4 - القدرة والسرعة الثابتة
{
    "title": "س 4 (شغل وطاقة): القدرة في الرفع الرأسي",
    "text": "يرفع محرك كهربائي كتلة مقدارها (200 kg) رأسياً إلى أعلى بسرعة ثابتة مقدارها (3 m/s)، فإن القدرة التي يبذلها المحرك تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> P = F·v ، والسرعة ثابتة → F = mg
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            F = 200×10 = 2000 N → P = 2000×3 = 6000 W
        </div>
    </div>`,
    "options": [
        { "text": "أ) 600 W", "isCorrect": false },
        { "text": "ب) 2000 W", "isCorrect": false },
        { "text": "ج) 6000 W", "isCorrect": true },
        { "text": "د) 600 kW", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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
        "السرعة ثابتة → F = mg = 200×10 = 2000 N",
        "P = F×v = 2000×3 = 6000 W",
        "",
        "الإجابة: ج) 6000 W ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 6000 W ✅"
},

// س5 - التغير في طاقة الحركة (الكوابح)
{
    "title": "س 5 (شغل وطاقة): التغير في طاقة الحركة",
    "text": "سيارة كتلتها (1200 kg) تتحرك بسرعة (20 m/s)، إذا ضغط السائق على الكوابح (الفرامل) فتوقفت السيارة تماماً بعد مسافة معينة، فإن التغير في طاقة حركة السيارة يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> ΔEk = ½m(v²−u²) = −½mu²
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            ΔEk = −½×1200×20² = −2.4×10⁵ J
        </div>
    </div>`,
    "options": [
        { "text": "أ) −1.2×10⁵ J", "isCorrect": false },
        { "text": "ب) −2.4×10⁵ J", "isCorrect": true },
        { "text": "ج) 2.4×10⁵ J", "isCorrect": false },
        { "text": "د) −4.8×10⁴ J", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س6 - الشغل الكلي (قوة واحتكاك)
{
    "title": "س 6 (شغل وطاقة): الشغل الكلي مع احتكاك",
    "text": "صندوق كتلته (50 kg) يستقر على أرضية أفقية، سُحب الصندوق بقوة أفقية مقدارها (150 N) لمسافة (8 m)، فإذا كانت قوة الاحتكاك بين الصندوق والأرض تساوي (50 N)، فإن الشغل الكلي المبذول على الصندوق يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> W_total = (F − f) × s
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            F_net = 150 − 50 = 100 N → W = 100×8 = 800 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 1200 J", "isCorrect": false },
        { "text": "ب) 400 J", "isCorrect": false },
        { "text": "ج) 800 J", "isCorrect": true },
        { "text": "د) 1600 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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

// س7 - حفظ الطاقة (طاقة الوضع عند أقصى ارتفاع)
{
    "title": "س 7 (شغل وطاقة): طاقة الوضع عند أقصى ارتفاع",
    "text": "قُذف حجر كتلته (0.4 kg) رأسياً إلى أعلى من سطح الأرض بسرعة ابتدائية (15 m/s)، بإهمال مقاومة الهواء، فإن طاقة وضع الثقل للحجر عند أقصى ارتفاع يصل إليه تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> عند أقصى ارتفاع: Ep = Ek (حفظ الطاقة)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            Ek = ½×0.4×15² = 45 J → Ep = 45 J
        </div>
    </div>`,
    "options": [
        { "text": "أ) 45 J", "isCorrect": true },
        { "text": "ب) 90 J", "isCorrect": false },
        { "text": "ج) 22.5 J", "isCorrect": false },
        { "text": "د) 60 J", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// ============================================================
// ثالثاً: أسئلة المزاوجة (س8 - س11)
// ============================================================

// س8 - الشغل في وحدة الزمن
{
    "title": "س 8 (شغل وطاقة - مزاوجة): الشغل المبذول في وحدة الزمن",
    "text": "الشغل المبذول في وحدة الزمن يُسمى:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 الشغل/الزمن = القدرة (P = W/t)
    </div>`,
    "options": [
        { "text": "أ) الطاقة", "isCorrect": false },
        { "text": "ب) العزم", "isCorrect": false },
        { "text": "ج) القدرة", "isCorrect": true },
        { "text": "د) الكفاءة", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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

// س9 - الطاقة التي يمتلكها الجسم بسبب موضعه
{
    "title": "س 9 (شغل وطاقة - مزاوجة): طاقة الوضع",
    "text": "الطاقة التي يمتلكها الجسم بسبب موضعه أو حالته تُسمى:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 الطاقة بسبب الموقع = طاقة الوضع (Ep)
    </div>`,
    "options": [
        { "text": "أ) طاقة الحركة", "isCorrect": false },
        { "text": "ب) طاقة الوضع", "isCorrect": true },
        { "text": "ج) الطاقة الميكانيكية", "isCorrect": false },
        { "text": "د) الطاقة الحرارية", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// س10 - المعدل الزمني لتحول الطاقة
{
    "title": "س 10 (شغل وطاقة - مزاوجة): المعدل الزمني لتحول الطاقة",
    "text": "المعدل الزمني لتحول الطاقة يُسمى:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 معدل تحول الطاقة = القدرة (P)
    </div>`,
    "options": [
        { "text": "أ) القدرة", "isCorrect": true },
        { "text": "ب) الشغل", "isCorrect": false },
        { "text": "ج) العزم", "isCorrect": false },
        { "text": "د) الكفاءة", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
    "title": "س 11 (شغل وطاقة - مزاوجة): الشغل الميكانيكي",
    "text": "حاصل ضرب القوة في الإزاحة في اتجاهها يُسمى:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 F × s = الشغل الميكانيكي (W)
    </div>`,
    "options": [
        { "text": "أ) العزم", "isCorrect": false },
        { "text": "ب) الشغل الميكانيكي", "isCorrect": true },
        { "text": "ج) القدرة", "isCorrect": false },
        { "text": "د) الدفع", "isCorrect": false }
    ],
    "correctAnswerIndex": 1,
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

// ============================================================
// 🏁 انتهت أسئلة الباب الخامس (الشغل والطاقة والقدرة) 🏁
// ============================================================
// س 1 (مسألة 2007 - كتلتان على سطح أملس)
{
    "title": "س 1 (2007): كتل متصلة بين أفقي ومائل",
    "text": "في الشكل التالي: الأسطح ملساء والكتل غير مستقرة. تتصل الكتلة m₂ الموضوعة على مستوى مائل بزاوية θ بخيط يمر على بكرة ملساء عند القمة ويتصل بالكتلة m₁ الموضوعة على مستوى أفقي أملس، فإن مقدار الشد في الحبل (T) يساوي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="280" x2="550" y2="280" stroke="#343a40" stroke-width="4"/>
        <line x1="50" y1="150" x2="300" y2="150" stroke="#343a40" stroke-width="4"/>
        <line x1="300" y1="150" x2="500" y2="280" stroke="#343a40" stroke-width="4"/>
        <circle cx="300" cy="150" r="15" fill="#e9ecef" stroke="#343a40" stroke-width="3"/>
        <circle cx="300" cy="150" r="3" fill="#343a40"/>
        <rect x="140" y="110" width="50" height="40" rx="3" fill="#6f42c1" stroke="#343a40" stroke-width="3"/>
        <text x="165" y="135" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₁</text>
        <line x1="190" y1="140" x2="290" y2="140" stroke="#495057" stroke-width="2.5"/>
        <text x="235" y="130" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <g transform="translate(400, 215) rotate(-33)">
            <rect x="-25" y="-20" width="50" height="40" rx="3" fill="#fd7e14" stroke="#343a40" stroke-width="3"/>
            <text x="0" y="5" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₂</text>
        </g>
        <line x1="312" y1="158" x2="380" y2="203" stroke="#495057" stroke-width="2.5"/>
        <text x="355" y="175" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <path d="M 460 280 A 40 40 0 0 0 475 260" fill="none" stroke="#343a40" stroke-width="2"/>
        <text x="445" y="270" font-family="Arial, sans-serif" font-size="16" font-style="italic" fill="#343a40">θ</text>
    </svg>`,
    "options": [
        { "text": "أ) m₁·m₂·g·sinθ/(m₁+m₂)", "isCorrect": true },
        { "text": "ب) m₂·g·sinθ/(m₁+m₂)", "isCorrect": false },
        { "text": "ج) m₁·g·sinθ", "isCorrect": false },
        { "text": "د) m₂·g·sinθ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
        "1) m₂g·sinθ − T = m₂a",
        "2) T = m₁a",
        "3) بالتعويض: m₂g·sinθ − m₁a = m₂a",
        "   a = m₂g·sinθ/(m₁+m₂)",
        "4) T = m₁a = m₁·m₂·g·sinθ/(m₁+m₂)",
        "",
        "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
},
// س 2 (مسألة 2021-2022 - كتلتان مع احتكاك)
{
    "title": "س 2 (2021-2022): كتلتان مع احتكاك - حالة اتزان",
    "text": "وضعت كتلة (6 kg) على مستوى مائل خشن يميل بزاوية (30°)، وكتلة (4 kg) معلقة رأسياً. إذا كانت المنظومة في حالة استقرار تام (اتزان)، أوجد قوة الشد T وقوة الاحتكاك f. (اعتبر g = 10 m/s²)",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="320">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="320" x2="550" y2="320" stroke="#343a40" stroke-width="4"/>
        <line x1="100" y1="320" x2="400" y2="146.8" stroke="#343a40" stroke-width="4"/>
        <line x1="400" y1="146.8" x2="400" y2="320" stroke="#6c757d" stroke-width="2" stroke-dasharray="4"/>
        <path d="M 140 320 A 40 40 0 0 0 134.6 300" fill="none" stroke="#343a40" stroke-width="2"/>
        <text x="150" y="310" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#495057">30°</text>
        <circle cx="400" cy="146.8" r="15" fill="#e9ecef" stroke="#343a40" stroke-width="3"/>
        <circle cx="400" cy="146.8" r="3" fill="#343a40"/>
        <g transform="translate(250, 233.4) rotate(-30)">
            <rect x="-25" y="-20" width="50" height="40" rx="3" fill="#17a2b8" stroke="#343a40" stroke-width="3"/>
            <text x="0" y="5" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">6 kg</text>
        </g>
        <line x1="268" y1="223" x2="388" y2="154" stroke="#495057" stroke-width="2.5"/>
        <text x="320" y="180" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <line x1="415" y1="146.8" x2="415" y2="230" stroke="#495057" stroke-width="2.5"/>
        <text x="425" y="185" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <rect x="390" y="230" width="50" height="45" rx="3" fill="#ffc107" stroke="#343a40" stroke-width="3"/>
        <text x="415" y="258" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#343a40" text-anchor="middle">4 kg</text>
    </svg>`,
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
        "وزن الكتلة المعلقة = 4×10 = 40 N",
        "مركبة الوزن على المائل = 6×10×sin30° = 30 N",
        "بما أن 40 > 30 → الحركة لأعلى المائل → f لأسفل",
        "",
        "من اتزان الكتلة المعلقة: T = 40 N",
        "من اتزان الكتلة على المائل: T − Wp − f = 0",
        "40 − 30 − f = 0 → f = 10 N",
        "",
        "الإجابة: أ) T = 40 N, f = 10 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) T = 40 N, f = 10 N ✅"
},// س 3 (حساب الكتلة المجهولة)
{
    "title": "س 3 (مسألة الكتلة المجهولة)",
    "text": "تحركت المنظومة في اتجاه الكتلة المعلقة m بعجلة مقدارها (a = 5 m/s²)، والكتلة الأخرى مقدارها (2 kg) موضوعة على منضدة ملساء وتتصل بها عبر خيط وبكرة ملساء. أوجد مقدار الكتلة المجهولة m. (اعتبر g = 10 m/s²)",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="100%" height="240">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="40" y1="150" x2="280" y2="150" stroke="#343a40" stroke-width="3.5"/>
        <line x1="80" y1="150" x2="80" y2="240" stroke="#6c757d" stroke-width="3"/>
        <line x1="260" y1="150" x2="260" y2="240" stroke="#6c757d" stroke-width="3"/>
        <circle cx="280" cy="150" r="12" fill="#e9ecef" stroke="#343a40" stroke-width="2.5"/>
        <circle cx="280" cy="150" r="3" fill="#343a40"/>
        <rect x="145" y="115" width="45" height="35" rx="3" fill="#28a745" stroke="#343a40" stroke-width="2.5"/>
        <text x="167.5" y="138" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="white" text-anchor="middle">2 kg</text>
        <line x1="190" y1="140" x2="278" y2="140" stroke="#495057" stroke-width="2"/>
        <text x="230" y="132" font-family="Arial, sans-serif" font-size="11" fill="#dc3545" font-weight="bold">T</text>
        <line x1="292" y1="155" x2="292" y2="200" stroke="#495057" stroke-width="2"/>
        <text x="300" y="178" font-family="Arial, sans-serif" font-size="11" fill="#dc3545" font-weight="bold">T</text>
        <rect x="270" y="200" width="40" height="40" rx="3" fill="#e83e8c" stroke="#343a40" stroke-width="2.5"/>
        <text x="290" y="225" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m</text>
        <path d="M 335 170 L 335 200" stroke="#28a745" stroke-width="2.5" fill="none" marker-end="url(#arrow-cap)"/>
        <text x="345" y="190" font-family="Arial, sans-serif" font-size="11" fill="#28a745" font-weight="bold">a=5</text>
        <defs>
            <marker id="arrow-cap" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#28a745"/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 4 kg", "isCorrect": false },
        { "text": "ب) 5 kg", "isCorrect": false },
        { "text": "ج) 6 kg", "isCorrect": true },
        { "text": "د) 8 kg", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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
        "القانون العام: a = (mg − 20)/(m + 2)",
        "5 = (10m − 20)/(m + 2)",
        "5(m + 2) = 10m − 20",
        "5m + 10 = 10m − 20",
        "30 = 5m → m = 6 kg",
        "",
        "الإجابة: ج) 6 kg ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 6 kg ✅"
},// س 4 (استنتاج علاقة الاتزان)
{
    "title": "س 4 (استنتاج علاقة الاتزان)",
    "text": "كتلتان (m₁, m₂) متصلتان بخيط يمر فوق بكرة ملساء ومثبتة عند حافة منضدة، توجد الكتلة (m₁) على سطح أفقي خشن معامل احتكاكه (μ). ما مقدار الكتلة الإضافية (m) التي يجب وضعها فوق الكتلة (m₁) حتى لا يتسارع النظام وتظل المجموعة متزنة؟",
    "svgCode": `<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>
        <rect width='400' height='200' fill='#f8fafc' rx='8' stroke='#cbd5e1' stroke-width='1'/>
        <text x='200' y='22' text-anchor='middle' font-size='12' fill='#1e293b' font-weight='bold'>استنتاج علاقة الاتزان</text>
        <line x1='30' y1='170' x2='200' y2='170' stroke='#94a3b8' stroke-width='2'/>
        <text x='375' y='170' text-anchor='start' font-size='10' fill='#475569'>سطح خشن (μ)</text>
        <rect x='100' y='155' width='40' height='30' fill='#dc2626' rx='3'/>
        <text x='120' y='175' text-anchor='middle' font-size='10' fill='#fff' font-weight='bold'>m₁+m</text>
        <rect x='120' y='200' width='40' height='30' fill='#2563eb' rx='3'/>
        <text x='140' y='220' text-anchor='middle' font-size='11' fill='#fff' font-weight='bold'>m₂</text>
        <line x1='140' y1='155' x2='140' y2='200' stroke='#16a34a' stroke-width='2'/>
        <text x='155' y='178' text-anchor='start' font-size='10' fill='#16a34a'>T</text>
    </svg>`,
    "options": [
        { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
        { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
        { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
        { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي الكتلة الإضافية m؟",
            "options": [
                { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
                { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
                { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
                { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
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
        "عند الاتزان: a = 0",
        "معادلة الجسم المتدلي: T = m₂g",
        "معادلة الكتلة على السطح الخشن: T = μ(m₁+m)g",
        "بمساواة المعادلتين:",
        "m₂g = μ(m₁+m)g",
        "m₂/μ = m₁ + m",
        "m = m₂/μ − m₁",
        "",
        "الإجابة: أ) m = m₂/μ − m₁ ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m = m₂/μ − m₁ ✅"
},


// ============================================================
// 🏁 انتهت أسئلة الميكانيكا المتقدمة 🏁
// ============================================================
// س1 - الشد في الخيط حول وتد أملس
{
    "title": "س 4 (استنتاج علاقة الاتزان)",
    "text": "كتلتان (m₁, m₂) متصلتان بخيط يمر فوق بكرة ملساء ومثبتة عند حافة منضدة، توجد الكتلة (m₁) على سطح أفقي خشن معامل احتكاكه (μ). ما مقدار الكتلة الإضافية (m) التي يجب وضعها فوق الكتلة (m₁) حتى لا يتسارع النظام وتظل المجموعة متزنة؟",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="200" x2="350" y2="200" stroke="#343a40" stroke-width="4"/>
        <line x1="90" y1="200" x2="90" y2="310" stroke="#6c757d" stroke-width="4"/>
        <line x1="310" y1="200" x2="310" y2="310" stroke="#6c757d" stroke-width="4"/>
        <circle cx="350" cy="200" r="15" fill="#e9ecef" stroke="#343a40" stroke-width="3"/>
        <circle cx="350" cy="200" r="3" fill="#343a40"/>
        <rect x="150" y="160" width="70" height="40" rx="2" fill="#6f42c1" stroke="#343a40" stroke-width="3"/>
        <text x="185" y="185" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₁</text>
        <rect x="160" y="125" width="50" height="35" rx="2" fill="#007bff" stroke="#343a40" stroke-width="2.5"/>
        <text x="185" y="148" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m</text>
        <line x1="220" y1="190" x2="348" y2="190" stroke="#495057" stroke-width="2.5"/>
        <text x="275" y="180" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <line x1="365" y1="205" x2="365" y2="265" stroke="#495057" stroke-width="2.5"/>
        <text x="375" y="235" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <rect x="340" y="265" width="50" height="45" rx="2" fill="#fd7e14" stroke="#343a40" stroke-width="3"/>
        <text x="365" y="292" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₂</text>
        <text x="185" y="80" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#6c757d" text-anchor="middle">حالة اتزان (a = 0)</text>
    </svg>`,
    "options": [
        { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
        { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
        { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
        { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي الكتلة الإضافية m؟",
            "options": [
                { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
                { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
                { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
                { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
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
        "عند الاتزان: a = 0",
        "معادلة الجسم المتدلي: T = m₂g",
        "معادلة الكتلة على السطح الخشن: T = μ(m₁+m)g",
        "بمساواة المعادلتين:",
        "m₂g = μ(m₁+m)g",
        "m₂/μ = m₁ + m",
        "m = m₂/μ − m₁",
        "",
        "الإجابة: أ) m = m₂/μ − m₁ ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m = m₂/μ − m₁ ✅"
},
// س2 - العجلة على المستوى المائل
{
    "title": "س 2 (ميكانيكا): العجلة على المستوى المائل",
    "text": "عند حركة جسم ينزلق إلى أعلى أو إلى أسفل على مستوى مائل بفعل قوة الجاذبية تكون قيمة العجلة كبيرة جداً",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 a = g·sinθ → sinθ < 1 → a < g (ليست كبيرة)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل العجلة على المستوى المائل كبيرة جداً؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! a = g·sinθ → sinθ < 1 → العجلة أقل من g"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 a = g·sinθ",
        "📌 sinθ دائماً أقل من 1 → a < g (ليست كبيرة)",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س3 - مقاومة الهواء
{
    "title": "س 3 (ميكانيكا): مقاومة الهواء",
    "text": "تعتمد مقاومة الهواء على شكل الجسم ومساحته السطحية ونوع المادة المصنوع منها",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 عوامل مقاومة الهواء: شكل الجسم + مساحة المقطع + معامل السحب
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل تعتمد مقاومة الهواء على شكل الجسم ومساحته ونوع المادة؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! مقاومة الهواء تعتمد على شكل الجسم ومساحته ومعامل السحب"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅ (الإجابة الصحيحة)",
        "ب) خطأ",
        "",
        "══════════════ التلميح ══════════════",
        "💡 تعتمد على: شكل الجسم + مساحة المقطع + معامل السحب",
        "📌 الأجسام الانسيابية تقلل من مقاومة الهواء",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// س4 - مقاومة الهواء عند أقصى ارتفاع
{
    "title": "س 4 (ميكانيكا): مقاومة الهواء عند أقصى ارتفاع",
    "text": "عند أقصى ارتفاع للقذيفة تكون مقاومة الهواء تساوي صفراً",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 مقاومة الهواء ∝ v (تتناسب طردياً مع السرعة) → عند أقصى ارتفاع v = 0
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل مقاومة الهواء تساوي صفراً عند أقصى ارتفاع؟",
            "options": [
                { "text": "أ) صح", "isCorrect": true },
                { "text": "ب) خطأ", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! عند أقصى ارتفاع v = 0 → مقاومة الهواء = 0"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح  ✅ (الإجابة الصحيحة)",
        "ب) خطأ",
        "",
        "══════════════ التلميح ══════════════",
        "💡 مقاومة الهواء ∝ v",
        "📌 عند أقصى ارتفاع v = 0 → مقاومة الهواء = 0",
        "",
        "الإجابة: أ) صح ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) صح ✅"
},

// س5 - طول الكابل أثناء الجر
{
    "title": "س 5 (ميكانيكا): طول الكابل أثناء الجر",
    "text": "عند استخدام الكوابل في جر الشاحنات فإن طول الكابل يزداد أثناء حركة الشاحنات",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 الكابلات تعتبر 'غير مرنة' أي غير قابلة للامتداد → طولها ثابت
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل يزداد طول الكابل أثناء الجر؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! الكابلات غير قابلة للامتداد → طولها ثابت"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 الكابلات 'غير مرنة' (غير قابلة للامتداد)",
        "📌 الطول ثابت → الكتلتين تتحركان بنفس العجلة",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س6 - مقاومة الهواء عند السرعات العالية
{
    "title": "س 6 (ميكانيكا): مقاومة الهواء عند السرعات العالية",
    "text": "عندما يتحرك الجسم بسرعة عالية فإن مقاومة الهواء له تتناسب مع سرعته",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 عند السرعات العالية: F_resistance ∝ v² (مربع السرعة، وليس v)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل تتناسب مقاومة الهواء مع السرعة عند السرعات العالية؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! عند السرعات العالية F ∝ v² (مربع السرعة)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 عند السرعات العالية: F ∝ v² (وليس v)",
        "📌 مقاومة الهواء تتناسب مع مربع السرعة",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س7 - القضبان والخيوط
{
    "title": "س 7 (ميكانيكا): القضبان والخيوط",
    "text": "الفرق بين القضبان والخيوط والحبال والكابلات هو أن القضبان يمكنها أن تبذل قوة اتجاهها إلى الخارج عند طرفيها",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 القضيب: يتحمل شد (للداخل) وضغط (للخارج) ← الخيط يتحمل شد فقط (للداخل)
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل القضبان تبذل قوة للخارج عند طرفيها؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! القضيب يتحمل شد وضغط، بينما الخيط يتحمل شد فقط"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 القضيب: شد (للداخل) + ضغط (للخارج)",
        "📌 الخيط: شد فقط (للداخل)",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س8 - سرعة القذيفة عند أقصى ارتفاع
{
    "title": "س 8 (ميكانيكا): سرعة القذيفة عند أقصى ارتفاع",
    "text": "عندما تصل القذيفة إلى أعلى نقطة تكون سرعتها أكبر ما يمكن",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 عند أقصى ارتفاع: v = 0 (السرعة تنعدم) ← ليست أكبر ما يمكن
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": false },
        { "text": "ب) خطأ", "isCorrect": true }
    ],
    "correctAnswerIndex": 1,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "هل سرعة القذيفة أكبر ما يمكن عند أقصى ارتفاع؟",
            "options": [
                { "text": "أ) صح", "isCorrect": false },
                { "text": "ب) خطأ", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! عند أقصى ارتفاع v = 0 (أقل ما يمكن)"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) صح",
        "ب) خطأ  ✅ (الإجابة الصحيحة)",
        "",
        "══════════════ التلميح ══════════════",
        "💡 عند أقصى ارتفاع: v = 0 (السرعة تنعدم)",
        "📌 السرعة أقل ما يمكن وليس أكبر ما يمكن",
        "",
        "الإجابة: ب) خطأ ❌"
    ],
    "pdfFinalAnswer": "الإجابة: ب) خطأ ❌"
},

// س9 - القوى المؤثرة على مستوى مائل
{
    "title": "س 9 (ميكانيكا): القوى المؤثرة على مستوى مائل",
    "text": "القوتان المؤثرتان على كتلة أثناء حركتها على مستوى مائل هما وزن الكتلة وقوة الاتصال العمودية (في حالة المستوى الأملس وبفعل الجاذبية فقط)",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 في المستوى الأملس: القوى = mg (وزن) + R (رد فعل عمودي) ← لا يوجد احتكاك
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س10 - الخيوط الخفيفة
{
    "title": "س 10 (ميكانيكا): الخيوط الخفيفة",
    "text": "الخيوط الخفيفة يعني أن كلاً من وزنه وكتلته اعتبرنا مساوية للصفر",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 10px; text-align: center; border: 2px solid #3b82f6; font-size: 13px;">
        💡 الخيط 'الخفيف': كتلته = 0، وزنه = 0 ← افتراض لتسهيل حسابات الشد
    </div>`,
    "options": [
        { "text": "أ) صح", "isCorrect": true },
        { "text": "ب) خطأ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// ══════════════════════════════════════════════════════════════
//                    📚 أسئلة الاختيار من متعدد (س11 - س27)
// ══════════════════════════════════════════════════════════════

// س11 - آلة أتوود (30kg و 20kg)
{
    "title": "س 11 (ميكانيكا): آلة أتوود (30kg و 20kg)",
    "text": "جسمان كتلتاهما (30 kg، 20 kg) مربوطان بخيط خفيف يمر على بكرة خفيفة بمحور أملس، بدأ الجسمان حركتهما من السكون رأسياً عندما كانا في نفس المستوى فإن العجلة التي يتحرك بها الجسم الأول تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> a = (m₂ − m₁)/(m₂ + m₁) × g
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = (30 − 20)/(30 + 20) × 10 = 2 m/s²
        </div>
    </div>`,
    "options": [
        { "text": "أ) 5 m/s²", "isCorrect": false },
        { "text": "ب) 4 m/s²", "isCorrect": false },
        { "text": "ج) 3 m/s²", "isCorrect": false },
        { "text": "د) 2 m/s²", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
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
        "a = (30 − 20)/(30 + 20) × 10 = 10/50 × 10 = 2 m/s²",
        "",
        "الإجابة: د) 2 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) 2 m/s² ✅"
},

// س12 - قذف جسم على مستوى مائل أملس
{
    "title": "س 12 (ميكانيكا): قذف جسم على مستوى مائل أملس",
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
    "title": "س 13 (ميكانيكا): جر شاحنتين",
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
    "title": "س 14 (ميكانيكا): رجل في مصعد",
    "text": "يصعد رجل كتلته (75 kg) في مصعد إلى أعلى بتسارع قدره (0.4 m/s²) فإن القوة التي تبذل بواسطة الرجل على أرضية المصعد تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> R = m(g + a) (عند الصعود لأعلى)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            R = 75 × (10 + 0.4) = 75 × 10.4 = 780 N
        </div>
    </div>`,
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
        "R = m(g + a) = 75 × (10 + 0.4) = 75 × 10.4 = 780 N",
        "",
        "الإجابة: أ) 780 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 780 N ✅"
},

// س15 - القوة الدافعة للسيارة
{
    "title": "س 15 (ميكانيكا): القوة الدافعة للسيارة",
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

// س16 - الشد في الخيط
{
    "title": "س 16 (ميكانيكا): الشد في الخيط",
    "text": "ربط جسمان كتلتهما (2 kg، 6 kg) بخيط خفيف ويمر على وتد أملس وثابت أمسك الجسم الأثقل بحيث يكون مشدوداً جداً بحيث تكون أطراف الخيط رأسية وتركت النظام من السكون فتسارع الجسمان بعجلة قدرها (5 m/s²) فإن الشد في الخيط يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> للجسم الأصغر (2 kg): T − mg = ma
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            T − 20 = 10 → T = 30 N
        </div>
    </div>`,
    "options": [
        { "text": "أ) 60 N", "isCorrect": false },
        { "text": "ب) 40 N", "isCorrect": false },
        { "text": "ج) 30 N", "isCorrect": true },
        { "text": "د) 20 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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

// س17 - السقوط الحر
{
    "title": "س 17 (ميكانيكا): السقوط الحر",
    "text": "سقطت قطعة من على غصن شجرة عالية ووصلت إلى الأرض بعد ثلاث ثوانٍ بإهمال مقاومة الهواء فإن ارتفاع غصن الشجرة يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> s = ½gt² (السقوط الحر من السكون)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            s = ½ × 10 × 3² = 5 × 9 = 45 m
        </div>
    </div>`,
    "options": [
        { "text": "أ) 15 m", "isCorrect": false },
        { "text": "ب) 25 m", "isCorrect": false },
        { "text": "ج) 35 m", "isCorrect": false },
        { "text": "د) 45 m", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
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
        "s = ½gt² = ½ × 10 × 3² = 5 × 9 = 45 m",
        "",
        "الإجابة: د) 45 m ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) 45 m ✅"
},

// س18 - زمن السقوط الحر
{
    "title": "س 18 (ميكانيكا): زمن السقوط الحر",
    "text": "يقف طفل في شرفة منزل ترتفع (9.8 m) فوق سطح الأرض، أسقط الطفل حجراً على الأرض بإهمال مقاومة الهواء فإن الزمن المستغرق في السقوط يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> s = ½gt² → t = √(2s/g)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            t = √(2×9.8/10) = √1.96 = 1.4 s
        </div>
    </div>`,
    "options": [
        { "text": "أ) 1.4 s", "isCorrect": true },
        { "text": "ب) 2.5 s", "isCorrect": false },
        { "text": "ج) 3.4 s", "isCorrect": false },
        { "text": "د) 4.2 s", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س19 - عجلة جسم على مستوى مائل مع احتكاك
{
    "title": "س 19 (ميكانيكا): عجلة جسم على مستوى مائل مع احتكاك",
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

// س22 - معامل الاحتكاك
{
    "title": "س 22 (ميكانيكا): معامل الاحتكاك",
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

// س24 - سرعة السقوط الحر
{
    "title": "س 24 (ميكانيكا): سرعة السقوط الحر",
    "text": "سقط حجر من السكون فكانت سرعته بعد (3 s) تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> v = u + gt (السقوط الحر من السكون)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            v = 0 + 10×3 = 30 m/s
        </div>
    </div>`,
    "options": [
        { "text": "أ) 30 m/s", "isCorrect": true },
        { "text": "ب) 20 m/s", "isCorrect": false },
        { "text": "ج) 10 m/s", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س25 - أقصى ارتفاع للقذف الرأسي
{
    "title": "س 25 (ميكانيكا): أقصى ارتفاع للقذف الرأسي",
    "text": "يقذف لاعب السيرك كرة إلى أعلى رأسياً بسرعة (6 m/s) أقصى ارتفاع تصل إليه الكرة هو:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> v² = u² − 2gh → h = u²/(2g)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            h = 36/(2×10) = 36/20 = 1.8 m
        </div>
    </div>`,
    "options": [
        { "text": "أ) 1.8 m", "isCorrect": true },
        { "text": "ب) 3.6 m", "isCorrect": false },
        { "text": "ج) 5.4 m", "isCorrect": false },
        { "text": "د) 7.2 m", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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

// س27 - آلة أتوود (3kg و 2kg)
{
    "title": "س 27 (ميكانيكا): آلة أتوود (3kg و 2kg)",
    "text": "في الشكل الموضح يمر خيط على وتد أملس ثابت (الكتل المعلقة هي 3 kg و 2 kg) عجلة الجسمين تساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> a = (m₂ − m₁)/(m₂ + m₁) × g
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            a = (3 − 2)/(3 + 2) × 10 = 1/5 × 10 = 2 m/s²
        </div>
    </div>`,
    "options": [
        { "text": "أ) 4 m/s²", "isCorrect": false },
        { "text": "ب) 3 m/s²", "isCorrect": false },
        { "text": "ج) 2 m/s²", "isCorrect": true },
        { "text": "د) 1 m/s²", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي عجلة الجسمين؟",
            "options": [
                { "text": "أ) 4 m/s²", "isCorrect": false },
                { "text": "ب) 3 m/s²", "isCorrect": false },
                { "text": "ج) 2 m/s²", "isCorrect": true },
                { "text": "د) 1 m/s²", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! a = 2 m/s²"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 4 m/s²",
        "ب) 3 m/s²",
        "ج) 2 m/s²  ✅ (الإجابة الصحيحة)",
        "د) 1 m/s²",
        "",
        "══════════════ الحل ══════════════",
        "a = (m₂ − m₁)/(m₂ + m₁) × g",
        "a = (3 − 2)/(3 + 2) × 10 = 1/5 × 10 = 2 m/s²",
        "",
        "الإجابة: ج) 2 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 2 m/s² ✅"
},

// ══════════════════════════════════════════════════════════════
//                    📚 أسئلة الشغل والطاقة
// ══════════════════════════════════════════════════════════════

// س18 - القدرة والقوة
{
    "title": "س 18 (شغل وطاقة - صح/خطأ): القدرة والقوة",
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

// س19 - تحولات الطاقة في القذف الرأسي
{
    "title": "س 19 (شغل وطاقة - صح/خطأ): تحولات الطاقة في القذف الرأسي",
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
    "title": "س 20 (شغل وطاقة - صح/خطأ): طاقة الوضع والجاذبية",
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

// س28 - وحدة الشغل
{
    "title": "س 28 (شغل وطاقة): وحدة الشغل",
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
    "title": "س 29 (شغل وطاقة): القيم التي لا تساوي صفر",
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
    "title": "مسألة إضافية (شغل وطاقة): دفع صندوق على سطح خشن",
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

// ══════════════════════════════════════════════════════════════
//                    📚 أسئلة متقدمة (امتحانات سابقة)
// ══════════════════════════════════════════════════════════════

// س1 (2007) - كتل متصلة بين أفقي ومائل
{
    "title": "س 1 (2007): كتل متصلة بين أفقي ومائل",
    "text": "في الشكل التالي: الأسطح ملساء والكتل غير مستقرة. تتصل الكتلة m₂ الموضوعة على مستوى مائل بزاوية θ بخيط يمر على بكرة ملساء عند القمة ويتصل بالكتلة m₁ الموضوعة على مستوى أفقي أملس، فإن مقدار الشد في الحبل (T) يساوي:",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> m₂g·sinθ − T = m₂a , T = m₁a
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            T = (m₁·m₂·g·sinθ)/(m₁+m₂)
        </div>
    </div>`,
    "options": [
        { "text": "أ) m₁·m₂·g·sinθ/(m₁+m₂)", "isCorrect": true },
        { "text": "ب) m₂·g·sinθ/(m₁+m₂)", "isCorrect": false },
        { "text": "ج) m₁·g·sinθ", "isCorrect": false },
        { "text": "د) m₂·g·sinθ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
        "a = m₂g·sinθ/(m₁+m₂) → T = m₁a",
        "",
        "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
},

// س2 (2021-2022) - كتلتان مع احتكاك
{
    "title": "س 2 (2021-2022): كتلتان مع احتكاك - حالة اتزان",
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

// س3 - حساب الكتلة المجهولة
{
    "title": "س 3 (حساب الكتلة المجهولة)",
    "text": "تحركت المنظومة في اتجاه الكتلة المعلقة m بعجلة مقدارها (a = 5 m/s²)، والكتلة الأخرى مقدارها (2 kg) موضوعة على منضدة ملساء وتتصل بها عبر خيط وبكرة ملساء. أوجد مقدار الكتلة المجهولة m. (اعتبر g = 10 m/s²)",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> a = (mg − 20)/(m + 2)
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            5 = (10m − 20)/(m+2) → m = 6 kg
        </div>
    </div>`,
    "options": [
        { "text": "أ) 4 kg", "isCorrect": false },
        { "text": "ب) 5 kg", "isCorrect": false },
        { "text": "ج) 6 kg", "isCorrect": true },
        { "text": "د) 8 kg", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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
        "5 = (10m − 20)/(m+2) → m = 6 kg",
        "",
        "الإجابة: ج) 6 kg ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 6 kg ✅"
},

// س4 - استنتاج علاقة الاتزان
{
    "title": "س 4 (استنتاج علاقة الاتزان)",
    "text": "كتلتان (m₁, m₂) متصلتان بخيط يمر فوق بكرة ملساء ومثبتة عند حافة منضدة، توجد الكتلة (m₁) على سطح أفقي خشن معامل احتكاكه (μ). ما مقدار الكتلة الإضافية (m) التي يجب وضعها فوق الكتلة (m₁) حتى لا يتسارع النظام وتظل المجموعة متزنة؟",
    "svgCode": `<div style="background: #f1f5f9; border-radius: 8px; padding: 12px; text-align: center; border: 2px solid #3b82f6;">
        <div style="font-size: 14px; color: #1e293b; font-weight: bold; margin-bottom: 6px;">💡 تلميح الحل</div>
        <div style="font-size: 13px; color: #475569; line-height: 1.6;">
            <strong>القانون:</strong> T = m₂g , T = μ(m₁+m)g
        </div>
        <div style="font-size: 13px; color: #dc2626; margin-top: 4px; background: #fef2f2; padding: 4px 8px; border-radius: 4px;">
            m = m₂/μ − m₁
        </div>
    </div>`,
    "options": [
        { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
        { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
        { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
        { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي الكتلة الإضافية m؟",
            "options": [
                { "text": "أ) m = m₂/μ − m₁", "isCorrect": true },
                { "text": "ب) m = μ·m₂ − m₁", "isCorrect": false },
                { "text": "ج) m = m₂ − μ·m₁", "isCorrect": false },
                { "text": "د) m = m₂/(m₁·μ)", "isCorrect": false }
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
        "m₂g = μ(m₁+m)g → m = m₂/μ − m₁",
        "",
        "الإجابة: أ) m = m₂/μ − m₁ ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m = m₂/μ − m₁ ✅"
},

// ============================================================
// 🏁 انتهت جميع أسئلة الميكانيكا والشغل والطاقة 🏁
// ============================================================
// س 11 (مسألة البكرة الرأسية والأجسام المعلقة)
{
    "title": "س 11 (2022-2023): البكرة الرأسية والأجسام المعلقة",
    "text": "جسمان كتلتاهما (30 kg، 20 kg) مربوطان بخيط خفيف يمر على بكرة خفيفة بمحور أملس، بدأ الجسمان حركتهما من السكون رأسياً عندما كانا في نفس المستوى فإن العجلة التي يتحرك بها الجسم الأول تساوي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="150" y1="40" x2="250" y2="40" stroke="#343a40" stroke-width="8" stroke-linecap="round"/>
        <line x1="200" y1="40" x2="200" y2="80" stroke="#6c757d" stroke-width="6"/>
        <circle cx="200" cy="100" r="30" fill="#e9ecef" stroke="#343a40" stroke-width="4"/>
        <circle cx="200" cy="100" r="5" fill="#343a40"/>
        <line x1="170" y1="100" x2="170" y2="220" stroke="#495057" stroke-width="3"/>
        <line x1="230" y1="100" x2="230" y2="180" stroke="#495057" stroke-width="3"/>
        <rect x="145" y="220" width="50" height="50" rx="5" fill="#ffc107" stroke="#343a40" stroke-width="3"/>
        <text x="170" y="250" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#343a40" text-anchor="middle">30 kg</text>
        <rect x="205" y="180" width="50" height="50" rx="5" fill="#17a2b8" stroke="#343a40" stroke-width="3"/>
        <text x="230" y="210" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">20 kg</text>
        <path d="M 160 210 L 160 190" stroke="#dc3545" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="150" y="200" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <path d="M 240 170 L 240 150" stroke="#dc3545" stroke-width="2" marker-end="url(#arrow)"/>
        <text x="248" y="165" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <path d="M 120 180 L 120 220" stroke="#28a745" stroke-width="3" stroke-dasharray="4" marker-end="url(#arrow)"/>
        <text x="105" y="205" font-family="Arial, sans-serif" font-size="14" fill="#28a745" font-weight="bold">a</text>
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc3545"/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 5 m/s²", "isCorrect": false },
        { "text": "ب) 4 m/s²", "isCorrect": false },
        { "text": "ج) 3 m/s²", "isCorrect": false },
        { "text": "د) 2 m/s²", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
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
        "F = (30×10) − (20×10) = 300 − 200 = 100 N",
        "Σm = 30 + 20 = 50 kg",
        "a = F/Σm = 100/50 = 2 m/s²",
        "",
        "الإجابة: د) 2 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) 2 m/s² ✅"
},

// س 23 (مسألة القوة الأفقية على مستوى مائل مستقر)
{
    "title": "س 23 (ميكانيكا): القوة الأفقية على مستوى مائل",
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

// مسألة امتحان الوزارة (دفعة 2007) - كتل متصلة بين أفقي ومائل
{
    "title": "س 1 (2007): كتل متصلة بين أفقي ومائل",
    "text": "في الشكل التالي: الأسطح ملساء والكتل غير مستقرة. تتصل الكتلة m₂ الموضوعة على مستوى مائل بزاوية θ بخيط يمر على بكرة ملساء عند القمة ويتصل بالكتلة m₁ الموضوعة على مستوى أفقي أملس، فإن مقدار الشد في الحبل (T) يساوي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="280" x2="550" y2="280" stroke="#343a40" stroke-width="4"/>
        <line x1="50" y1="150" x2="300" y2="150" stroke="#343a40" stroke-width="4"/>
        <line x1="300" y1="150" x2="500" y2="280" stroke="#343a40" stroke-width="4"/>
        <circle cx="300" cy="150" r="15" fill="#e9ecef" stroke="#343a40" stroke-width="3"/>
        <circle cx="300" cy="150" r="3" fill="#343a40"/>
        <rect x="140" y="110" width="50" height="40" rx="3" fill="#6f42c1" stroke="#343a40" stroke-width="3"/>
        <text x="165" y="135" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₁</text>
        <line x1="190" y1="140" x2="290" y2="140" stroke="#495057" stroke-width="2.5"/>
        <text x="235" y="130" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <g transform="translate(400, 215) rotate(-33)">
            <rect x="-25" y="-20" width="50" height="40" rx="3" fill="#fd7e14" stroke="#343a40" stroke-width="3"/>
            <text x="0" y="5" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">m₂</text>
        </g>
        <line x1="312" y1="158" x2="380" y2="203" stroke="#495057" stroke-width="2.5"/>
        <text x="355" y="175" font-family="Arial, sans-serif" font-size="12" fill="#dc3545" font-weight="bold">T</text>
        <path d="M 460 280 A 40 40 0 0 0 475 260" fill="none" stroke="#343a40" stroke-width="2"/>
        <text x="445" y="270" font-family="Arial, sans-serif" font-size="16" font-style="italic" fill="#343a40">θ</text>
    </svg>`,
    "options": [
        { "text": "أ) m₁·m₂·g·sinθ/(m₁+m₂)", "isCorrect": true },
        { "text": "ب) m₂·g·sinθ/(m₁+m₂)", "isCorrect": false },
        { "text": "ج) m₁·g·sinθ", "isCorrect": false },
        { "text": "د) m₂·g·sinθ", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
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
        "1) m₂g·sinθ − T = m₂a",
        "2) T = m₁a",
        "3) بالتعويض: a = m₂g·sinθ/(m₁+m₂)",
        "4) T = m₁a = m₁·m₂·g·sinθ/(m₁+m₂)",
        "",
        "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) m₁·m₂·g·sinθ/(m₁+m₂) ✅"
},

// مسألة المنضدة الأفقية الملساء (حساب الكتلة المجهولة m)
{
    "title": "س 3 (حساب الكتلة المجهولة)",
    "text": "تحركت المنظومة في اتجاه الكتلة المعلقة m بعجلة مقدارها (a = 5 m/s²)، والكتلة الأخرى مقدارها (2 kg) موضوعة على منضدة ملساء وتتصل بها عبر خيط وبكرة ملساء. أوجد مقدار الكتلة المجهولة m. (اعتبر g = 10 m/s²)",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="300">
        <rect width="100%" height="100%" fill="#f8f9fa"/>
        <line x1="50" y1="180" x2="350" y2="180" stroke="#343a40" stroke-width="4"/>
        <line x1="100" y1="180" x2="100" y2="300" stroke="#6c757d" stroke-width="4"/>
        <line x1="320" y1="180" x2="320" y2="300" stroke="#6c757d" stroke-width="4"/>
        <circle cx="350" cy="180" r="15" fill="#e9ecef" stroke="#343a40" stroke-width="3"/>
        <circle cx="350" cy="180" r="3" fill="#343a40"/>
        <rect x="180" y="135" width="55" height="45" rx="4" fill="#007bff" stroke="#343a40" stroke-width="3"/>
        <text x="207.5" y="162" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">2 kg</text>
        <line x1="235" y1="170" x2="348" y2="170" stroke="#495057" stroke-width="2.5"/>
        <line x1="365" y1="185" x2="365" y2="260" stroke="#495057" stroke-width="2.5"/>
        <rect x="340" y="260" width="50" height="50" rx="4" fill="#e83e8c" stroke="#343a40" stroke-width="3"/>
        <text x="365" y="290" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">m</text>
        <path d="M 420 220 L 420 260" stroke="#28a745" stroke-width="3" fill="none" marker-end="url(#green-arrow)"/>
        <text x="430" y="245" font-family="Arial, sans-serif" font-size="12" fill="#28a745" font-weight="bold">a = 5 m/s²</text>
        <defs>
            <marker id="green-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#28a745"/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 4 kg", "isCorrect": false },
        { "text": "ب) 5 kg", "isCorrect": false },
        { "text": "ج) 6 kg", "isCorrect": true },
        { "text": "د) 8 kg", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
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
        "القانون العام: a = (mg − 20)/(m + 2)",
        "5 = (10m − 20)/(m + 2)",
        "5(m + 2) = 10m − 20",
        "5m + 10 = 10m − 20",
        "30 = 5m → m = 6 kg",
        "",
        "الإجابة: ج) 6 kg ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 6 kg ✅"
},


// ============================================================
// 🏁 انتهت الأسئلة المصورة 🏁
// ============================================================

{
    "title": " حساب السرعة عند منتصف المستوى المائل",
    "text": "إذا كانت طاقة الوضع عند أقصى نقطة لجسم كتلته 18 kg هي 1.8 kJ، انحدر على سطح أملس يميل بزاوية (θ)، فإن سرعته عندما يصل منتصف المستوى هي:",
    "svgCode": `<svg width='350' height='160' viewBox='0 0 350 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='350' height='160' fill='#f8fafc' rx='8' stroke='#cbd5e1' stroke-width='1'/>
        <text x='175' y='20' text-anchor='middle' font-size='12' fill='#1e293b' font-weight='bold'>جسم على سطح أملس مائل</text>
        <!-- المستوى المائل -->
        <line x1='40' y1='140' x2='310' y2='140' stroke='#94a3b8' stroke-width='1.5'/>
        <line x1='40' y1='140' x2='310' y2='30' stroke='#3b82f6' stroke-width='2.5'/>
        <!-- الارتفاع الكلي -->
        <line x1='310' y1='30' x2='310' y2='140' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,4'/>
        <text x='318' y='85' text-anchor='start' font-size='10' fill='#dc2626'>H=10m</text>
        <!-- منتصف المستوى -->
        <circle cx='175' cy='85' r='4' fill='#f59e0b'/>
        <text x='175' y='78' text-anchor='middle' font-size='10' fill='#f59e0b' font-weight='bold'>منتصف</text>
        <text x='175' y='98' text-anchor='middle' font-size='9' fill='#f59e0b'>h=5m</text>
        <!-- الجسم في أعلى السطح -->
        <rect x='296' y='24' width='14' height='14' fill='#dc2626' rx='2'/>
        <text x='303' y='18' text-anchor='middle' font-size='8' fill='#dc2626' font-weight='bold'>m</text>
        <!-- سهم السرعة -->
        <line x1='175' y1='85' x2='175' y2='130' stroke='#16a34a' stroke-width='2' marker-end='url(#arrowGreen)'/>
        <text x='183' y='110' text-anchor='start' font-size='10' fill='#16a34a' font-weight='bold'>v=?</text>
        <!-- تعريف الأسهم -->
        <defs>
            <marker id='arrowGreen' markerWidth='8' markerHeight='6' refX='4' refY='6' orient='auto'>
                <polygon points='0,6 4,0 8,6' fill='#16a34a'/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 200 m/s", "isCorrect": false },
        { "text": "ب) √200 m/s", "isCorrect": false },
        { "text": "ج) 100 m/s", "isCorrect": false },
        { "text": "د) 10 m/s", "isCorrect": true }
    ],
    "correctAnswerIndex": 3,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي سرعة الجسم عند منتصف المستوى؟",
            "options": [
                { "text": "أ) 200 m/s", "isCorrect": false },
                { "text": "ب) √200 m/s", "isCorrect": false },
                { "text": "ج) 100 m/s", "isCorrect": false },
                { "text": "د) 10 m/s", "isCorrect": true }
            ],
            "feedback": "✅ صحيح! v = 10 m/s"
        },
        {
            "title": "حساب الارتفاع الكلي",
            "question": "كيف نحسب الارتفاع الكلي H من طاقة الوضع؟",
            "options": [
                { "text": "H = E_p / (m × g)", "isCorrect": true },
                { "text": "H = m × g × E_p", "isCorrect": false },
                { "text": "H = E_p × m × g", "isCorrect": false }
            ],
            "feedback": "صحيح! E_p = m × g × H → H = E_p/(m×g) = 1800/(18×10) = 10m"
        },
        {
            "title": "حساب الارتفاع عند المنتصف",
            "question": "ما هو الارتفاع عند منتصف المستوى h؟",
            "options": [
                { "text": "h = H/2 = 5m", "isCorrect": true },
                { "text": "h = H = 10m", "isCorrect": false },
                { "text": "h = 2H = 20m", "isCorrect": false }
            ],
            "feedback": "صحيح! منتصف المستوى = نصف الارتفاع = 10/2 = 5m"
        },
        {
            "title": "حساب السرعة",
            "question": "كيف نحسب السرعة عند منتصف المستوى؟",
            "options": [
                { "text": "v = √(2×g×(H-h))", "isCorrect": true },
                { "text": "v = √(2×g×H)", "isCorrect": false },
                { "text": "v = m×g×(H-h)", "isCorrect": false }
            ],
            "feedback": "صحيح! v = √(2×10×(10-5)) = √100 = 10 m/s"
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
        "المعطيات:",
        "m = 18 kg",
        "E_p = 1.8 kJ = 1800 J",
        "g = 10 m/s²",
        "",
        "1) حساب الارتفاع الكلي (H):",
        "E_p = m × g × H",
        "1800 = 18 × 10 × H",
        "1800 = 180 × H",
        "H = 1800/180 = 10 m",
        "",
        "2) حساب الارتفاع عند منتصف المستوى (h):",
        "h = H/2 = 10/2 = 5 m",
        "",
        "3) حساب السرعة عند منتصف المستوى:",
        "v² = u² + 2 × g × (H - h)",
        "u = 0 (السكون)",
        "v² = 0 + 2 × 10 × (10 - 5)",
        "v² = 2 × 10 × 5 = 100",
        "v = √100 = 10 m/s",
        "",
        "الإجابة: د) 10 m/s ✅"
    ],
    "pdfFinalAnswer": "الإجابة: د) 10 m/s ✅"
},
// س 38 (جسمان على بكرة ملساء)
// س 38 (معدل - مع رسمة البكرة)
{
    "title": ": حركة جسمين على بكرة ملساء",
    "text": "جسمان كتلتاهما (4 kg, 6 kg) ربطا بخيط غير مرن يمر على بكرة ملساء، فإذا كانت الكتلتان عند نفس المستوى تحركت المجموعة من السكون، فإن سرعتهما عندما تكون المسافة بينهما (1.5 m) هي:",
    "svgCode": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" width="100%" height="100%">
        <rect width="400" height="450" fill="#ffffff"/>
        <defs>
            <marker id="arrow-up" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 5 0 L 10 10 L 0 10 z" fill="#e74c3c"/>
            </marker>
            <marker id="arrow-down" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 5 10 L 0 0 L 10 0 z" fill="#27ae60"/>
            </marker>
            <marker id="arrow-force" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 5 0 L 10 10 L 0 10 z" fill="#333333"/>
            </marker>
        </defs>
        <!-- البكرة -->
        <line x1="150" y1="30" x2="250" y2="30" stroke="#2c3e50" stroke-width="6" stroke-linecap="round"/>
        <line x1="200" y1="30" x2="200" y2="60" stroke="#7f8c8d" stroke-width="4"/>
        <line x1="170" y1="85" x2="170" y2="220" stroke="#34495e" stroke-width="2.5"/>
        <line x1="230" y1="85" x2="230" y2="150" stroke="#34495e" stroke-width="2.5"/>
        <circle cx="200" cy="85" r="30" fill="#f8f9fa" stroke="#2c3e50" stroke-width="3"/>
        <circle cx="200" cy="85" r="5" fill="#2c3e50"/>
        <!-- الجسم 4kg -->
        <g transform="translate(145, 220)">
            <rect x="0" y="0" width="50" height="50" fill="#ffffff" stroke="#333333" stroke-width="2.5" rx="3"/>
            <text x="25" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">4kg</text>
            <line x1="25" y1="0" x2="25" y2="-35" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-force)"/>
            <text x="12" y="-25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333333">T</text>
            <line x1="25" y1="50" x2="25" y2="85" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-force)"/>
            <text x="40" y="80" font-family="Arial, sans-serif" font-size="13" fill="#333333">m₁g</text>
            <line x1="-20" y1="45" x2="-20" y2="5" stroke="#e74c3c" stroke-width="3" marker-end="url(#arrow-up)"/>
            <text x="-35" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#e74c3c">a (▲)</text>
        </g>
        <!-- الجسم 6kg -->
        <g transform="translate(205, 150)">
            <rect x="0" y="0" width="50" height="50" fill="#ffffff" stroke="#333333" stroke-width="2.5" rx="3"/>
            <text x="25" y="30" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">6kg</text>
            <line x1="25" y1="0" x2="25" y2="-35" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-force)"/>
            <text x="12" y="-25" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#333333">T</text>
            <line x1="25" y1="50" x2="25" y2="95" stroke="#333333" stroke-width="1.5" marker-end="url(#arrow-force)"/>
            <text x="40" y="90" font-family="Arial, sans-serif" font-size="13" fill="#333333">m₂g</text>
            <line x1="70" y1="5" x2="70" y2="45" stroke="#27ae60" stroke-width="3" marker-end="url(#arrow-down)"/>
            <text x="82" y="28" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#27ae60">(▼) a</text>
        </g>
        <!-- المستوى الأصلي -->
        <line x1="110" y1="200" x2="290" y2="200" stroke="#bdc3c7" stroke-width="1.5" stroke-dasharray="4"/>
        <text x="350" y="204" font-family="Arial, sans-serif" font-size="12" fill="#7f8c8d" text-anchor="middle">المستوى الأصلي</text>
    </svg>`,
    "options": [
        { "text": "أ) 1.73 m/s", "isCorrect": true },
        { "text": "ب) 54.8 m/s", "isCorrect": false },
        { "text": "ج) 2.45 m/s", "isCorrect": false },
        { "text": "د) 3.9 m/s", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي سرعة الجسمين عندما تصبح المسافة بينهما 1.5m؟",
            "options": [
                { "text": "أ) 1.73 m/s", "isCorrect": true },
                { "text": "ب) 54.8 m/s", "isCorrect": false },
                { "text": "ج) 2.45 m/s", "isCorrect": false },
                { "text": "د) 3.9 m/s", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! v = √3 ≈ 1.73 m/s"
        },
        {
            "title": "تحليل الحركة",
            "question": "ما هي معادلة حركة الجسم الأثقل (6kg) الهابط؟",
            "options": [
                { "text": "m₂g - T = m₂a", "isCorrect": true },
                { "text": "T - m₂g = m₂a", "isCorrect": false },
                { "text": "m₂g + T = m₂a", "isCorrect": false }
            ],
            "feedback": "صحيح! الجسم الأثقل يتحرك لأسفل → m₂g - T = m₂a"
        },
        {
            "title": "حساب العجلة",
            "question": "بجمع المعادلتين، ما هي قيمة العجلة a؟",
            "options": [
                { "text": "a = 2 m/s²", "isCorrect": true },
                { "text": "a = 4 m/s²", "isCorrect": false },
                { "text": "a = 1 m/s²", "isCorrect": false }
            ],
            "feedback": "صحيح! 20 = 10a → a = 2 m/s²"
        },
        {
            "title": "حساب المسافة",
            "question": "ما هي المسافة التي يقطعها كل جسم (s) عندما تكون المسافة بينهما 1.5m؟",
            "options": [
                { "text": "s = 0.75 m", "isCorrect": true },
                { "text": "s = 1.5 m", "isCorrect": false },
                { "text": "s = 3 m", "isCorrect": false }
            ],
            "feedback": "صحيح! 2s = 1.5 → s = 0.75m"
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
        "المعطيات: m₁ = 4 kg, m₂ = 6 kg, g = 10 m/s²",
        "",
        "1) معادلات الحركة:",
        "T - m₁g = m₁a  →  T - 40 = 4a  ... (1)",
        "m₂g - T = m₂a  →  60 - T = 6a  ... (2)",
        "",
        "2) جمع المعادلتين (1) و (2):",
        "(T - 40) + (60 - T) = 4a + 6a",
        "20 = 10a",
        "a = 2 m/s²",
        "",
        "3) حساب المسافة (s):",
        "المسافة الفاصلة = s + s = 2s = 1.5",
        "s = 0.75 m",
        "",
        "4) حساب السرعة (v):",
        "v² = u² + 2as  (u = 0)",
        "v² = 0 + 2 × 2 × 0.75",
        "v² = 3",
        "v = √3 ≈ 1.73 m/s",
        "",
        "الإجابة: أ) 1.73 m/s ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 1.73 m/s ✅"
},
// س 39
{
    "title": " حساب العجلة من القدرة والتغير في السرعة",
    "text": "تتحرك سيارة كتلتها (950 kg) بقدرة (25 kW) سرعتها من (14 m/s) إلى (18 m/s) فإن العجلة التي تحركت بها:",
    "svgCode": `<svg width='350' height='160' viewBox='0 0 350 160' xmlns='http://www.w3.org/2000/svg'>
        <rect width='350' height='160' fill='#f8fafc' rx='8' stroke='#cbd5e1' stroke-width='1'/>
        <text x='175' y='20' text-anchor='middle' font-size='12' fill='#1e293b' font-weight='bold'>سيارة متحركة</text>
        <!-- السيارة -->
        <rect x='100' y='50' width='150' height='50' fill='#dbeafe' stroke='#3b82f6' stroke-width='2' rx='6'/>
        <rect x='110' y='60' width='30' height='20' fill='#93c5fd' rx='3'/>
        <rect x='210' y='60' width='30' height='20' fill='#93c5fd' rx='3'/>
        <circle cx='120' cy='105' r='12' fill='#1e293b'/>
        <circle cx='230' cy='105' r='12' fill='#1e293b'/>
        <text x='175' y='75' text-anchor='middle' font-size='11' fill='#1e3a8a' font-weight='bold'>m = 950 kg</text>
        <text x='175' y='92' text-anchor='middle' font-size='10' fill='#1e3a8a'>P = 25 kW</text>
        <!-- سهم السرعة -->
        <line x1='260' y1='75' x2='320' y2='75' stroke='#dc2626' stroke-width='2' marker-end='url(#arrowR)'/>
        <text x='290' y='68' text-anchor='middle' font-size='10' fill='#dc2626' font-weight='bold'>v</text>
        <text x='175' y='135' text-anchor='middle' font-size='11' fill='#475569'>u = 14 m/s  →  v = 18 m/s</text>
        <text x='175' y='152' text-anchor='middle' font-size='11' fill='#16a34a' font-weight='bold'>a = 1.64 m/s²</text>
        <defs>
            <marker id='arrowR' markerWidth='8' markerHeight='6' refX='4' refY='6' orient='auto'>
                <polygon points='0,6 4,0 8,6' fill='#dc2626'/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 1.64 m/s²", "isCorrect": true },
        { "text": "ب) 1.48 m/s²", "isCorrect": false },
        { "text": "ج) 16 m/s²", "isCorrect": false },
        { "text": "د) 2.6 m/s²", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي عجلة السيارة؟",
            "options": [
                { "text": "أ) 1.64 m/s²", "isCorrect": true },
                { "text": "ب) 1.48 m/s²", "isCorrect": false },
                { "text": "ج) 16 m/s²", "isCorrect": false },
                { "text": "د) 2.6 m/s²", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! a = 1.64 m/s²"
        },
        {
            "title": "حساب التغير في طاقة الحركة",
            "question": "ما هو التغير في طاقة الحركة ΔEk = ½×m×(v²−u²)؟",
            "options": [
                { "text": "60,800 J", "isCorrect": true },
                { "text": "30,400 J", "isCorrect": false },
                { "text": "121,600 J", "isCorrect": false }
            ],
            "feedback": "صحيح! ΔEk = ½×950×(324−196) = 475×128 = 60,800 J"
        },
        {
            "title": "حساب الزمن",
            "question": "ما هو الزمن t = W/P (حيث P = 25 kW = 25000 W)؟",
            "options": [
                { "text": "2.432 s", "isCorrect": true },
                { "text": "1.216 s", "isCorrect": false },
                { "text": "4.864 s", "isCorrect": false }
            ],
            "feedback": "صحيح! t = 60,800/25,000 = 2.432 s"
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
        "المعطيات:",
        "m = 950 kg",
        "P = 25 kW = 25,000 W",
        "u = 14 m/s, v = 18 m/s",
        "",
        "1) حساب التغير في طاقة الحركة (الشغل):",
        "W = ΔEk = ½ × m × (v² − u²)",
        "W = ½ × 950 × (18² − 14²)",
        "W = 475 × (324 − 196)",
        "W = 475 × 128 = 60,800 J",
        "",
        "2) حساب الزمن (t):",
        "W = P × t",
        "t = W/P = 60,800 / 25,000 = 2.432 s",
        "",
        "3) حساب العجلة (a):",
        "v = u + at",
        "a = (v − u)/t = (18 − 14)/2.432",
        "a = 4/2.432 = 1.644 m/s²",
        "",
        "الإجابة: أ) 1.64 m/s² ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 1.64 m/s² ✅"
},
// س 40
{
    "title": "س 40 (2022-2023): قذف جسم لأعلى مستوى مائل أملس",
    "text": "قُذف جسم لأعلى مستوى أملس يميل بزاوية (30°) مع الأفقي فكان أقصى ارتفاع يصل إليه المستوى هو (20 m) من سطح الأرض، فإن السرعة التي قُذف بها والمسافة التي يقطعها على التوالي تساوي:",
    "svgCode": `<svg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'>
        <rect width='400' height='200' fill='#f8fafc' rx='8' stroke='#cbd5e1' stroke-width='1'/>
        <text x='200' y='22' text-anchor='middle' font-size='13' fill='#1e293b' font-weight='bold'>جسم على مستوى مائل أملس</text>
        <!-- المستوى المائل -->
        <line x1='40' y1='180' x2='360' y2='180' stroke='#94a3b8' stroke-width='1.5'/>
        <line x1='40' y1='180' x2='330' y2='30' stroke='#3b82f6' stroke-width='3'/>
        <text x='370' y='180' text-anchor='start' font-size='10' fill='#475569'>سطح أملس</text>
        <!-- الزاوية -->
        <path d='M 70 170 L 85 170 L 85 155' fill='none' stroke='#dc2626' stroke-width='1.5'/>
        <text x='82' y='167' text-anchor='start' font-size='11' fill='#dc2626'>θ=30°</text>
        <!-- الارتفاع الرأسي -->
        <line x1='330' y1='30' x2='330' y2='180' stroke='#dc2626' stroke-width='1.5' stroke-dasharray='4,4'/>
        <text x='340' y='105' text-anchor='start' font-size='11' fill='#dc2626'>H=20m</text>
        <!-- المسافة على المستوى -->
        <line x1='40' y1='180' x2='330' y2='30' stroke='#16a34a' stroke-width='1.5' stroke-dasharray='6,4'/>
        <text x='190' y='115' text-anchor='middle' font-size='11' fill='#16a34a'>s = 40m</text>
        <!-- الجسم -->
        <rect x='315' y='35' width='15' height='15' fill='#dc2626' rx='2'/>
        <text x='322' y='30' text-anchor='middle' font-size='8' fill='#dc2626' font-weight='bold'>m</text>
        <!-- السهم -->
        <line x1='200' y1='160' x2='200' y2='130' stroke='#f59e0b' stroke-width='2' marker-end='url(#arrowGold)'/>
        <text x='210' y='145' text-anchor='start' font-size='10' fill='#f59e0b' font-weight='bold'>u=20m/s</text>
        <defs>
            <marker id='arrowGold' markerWidth='8' markerHeight='6' refX='4' refY='6' orient='auto'>
                <polygon points='0,6 4,0 8,6' fill='#f59e0b'/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 20 m/s , 40 m", "isCorrect": true },
        { "text": "ب) 10 m/s , 30 m", "isCorrect": false },
        { "text": "ج) صفر , 10 m", "isCorrect": false },
        { "text": "د) 20 m/s , 20 m", "isCorrect": false }
    ],
    "correctAnswerIndex": 0,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي السرعة الابتدائية والمسافة المقطوعة؟",
            "options": [
                { "text": "أ) 20 m/s , 40 m", "isCorrect": true },
                { "text": "ب) 10 m/s , 30 m", "isCorrect": false },
                { "text": "ج) صفر , 10 m", "isCorrect": false },
                { "text": "د) 20 m/s , 20 m", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! u = 20 m/s , s = 40 m"
        },
        {
            "title": "طريقة حفظ الطاقة",
            "question": "كيف نحسب السرعة الابتدائية باستخدام حفظ الطاقة؟",
            "options": [
                { "text": "u = √(2gH)", "isCorrect": true },
                { "text": "u = √(gH)", "isCorrect": false },
                { "text": "u = 2gH", "isCorrect": false }
            ],
            "feedback": "صحيح! u = √(2×10×20) = √400 = 20 m/s"
        },
        {
            "title": "طريقة معادلات الحركة",
            "question": "كيف نحسب المسافة المقطوعة s على المستوى؟",
            "options": [
                { "text": "s = H / sinθ = 20 / 0.5 = 40 m", "isCorrect": true },
                { "text": "s = H × sinθ = 20 × 0.5 = 10 m", "isCorrect": false },
                { "text": "s = H / cosθ = 20 / 0.866 = 23 m", "isCorrect": false }
            ],
            "feedback": "صحيح! sin30° = 0.5 → s = 20/0.5 = 40 m"
        },
        {
            "title": "طريقة معادلات الحركة (العجلة)",
            "question": "ما هي قيمة العجلة a على المستوى المائل؟",
            "options": [
                { "text": "a = -g·sinθ = -5 m/s²", "isCorrect": true },
                { "text": "a = -g·cosθ = -8.66 m/s²", "isCorrect": false },
                { "text": "a = -g = -10 m/s²", "isCorrect": false }
            ],
            "feedback": "صحيح! a = -10 × 0.5 = -5 m/s²"
        }
    ],
    "pdfSolutionSteps": [
        "══════════════ الخيارات ══════════════",
        "أ) 20 m/s , 40 m  ✅ (الإجابة الصحيحة)",
        "ب) 10 m/s , 30 m",
        "ج) صفر , 10 m",
        "د) 20 m/s , 20 m",
        "",
        "══════════════ الحل (الطريقة الأولى: حفظ الطاقة) ══════════════",
        "المعطيات: H = 20 m, g = 10 m/s², θ = 30°",
        "",
        "قانون حفظ الطاقة: ½·m·u² = m·g·H",
        "بشطب m: ½·u² = g·H",
        "u² = 2·g·H = 2 × 10 × 20 = 400",
        "u = √400 = 20 m/s",
        "",
        "حساب المسافة المقطوعة s:",
        "sinθ = H/s  →  s = H/sinθ = 20/0.5 = 40 m",
        "",
        "══════════════ الحل (الطريقة الثانية: معادلات الحركة) ══════════════",
        "1) حساب العجلة: a = -g·sinθ = -10 × 0.5 = -5 m/s²",
        "2) حساب المسافة: s = H/sinθ = 20/0.5 = 40 m",
        "3) حساب السرعة: v² = u² + 2as",
        "0 = u² + 2 × (-5) × 40",
        "0 = u² - 400 → u² = 400 → u = 20 m/s",
        "",
        "الإجابة: أ) 20 m/s , 40 m ✅"
    ],
    "pdfFinalAnswer": "الإجابة: أ) 20 m/s , 40 m ✅"
},
// س 1 (اتزان جسم تحت تأثير ثلاث قوى)
{
    "title": "س 1 (2022-2023): اتزان جسم تحت تأثير ثلاث قوى",
    "text": "في الشكل المقابل يتزن جسم تحت تأثير ثلاث قوى بحيث تكون قيمة F₁ تساوي:",
    "svgCode": `<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="398" height="248" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="200" y="22" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e293b">اتزان جسم تحت تأثير ثلاث قوى</text>
        <line x1="80" y1="120" x2="320" y2="120" stroke="#64748b" stroke-width="1.5" stroke-dasharray="8 6"/>
        <circle cx="200" cy="120" r="7" fill="#111827"/>
        <text x="200" y="145" text-anchor="middle" font-size="11" font-weight="bold">الجسم</text>
        <line x1="200" y1="120" x2="290" y2="40" stroke="#dc2626" stroke-width="4" marker-end="url(#arrowRed)"/>
        <text x="302" y="42" font-size="14" font-weight="bold" fill="#dc2626">F₁</text>
        <line x1="200" y1="120" x2="110" y2="40" stroke="#2563eb" stroke-width="4" marker-end="url(#arrowBlue)"/>
        <text x="90" y="42" font-size="14" font-weight="bold" fill="#2563eb">F₂</text>
        <line x1="200" y1="120" x2="200" y2="220" stroke="#16a34a" stroke-width="4" marker-end="url(#arrowGreen)"/>
        <text x="215" y="195" font-size="14" font-weight="bold" fill="#16a34a">10 N</text>
        <path d="M255 120 A55 55 0 0 0 245 92" fill="none" stroke="#dc2626" stroke-width="2.5"/>
        <text x="268" y="85" font-size="13" fill="#dc2626" font-weight="bold">30°</text>
        <path d="M145 120 A55 55 0 0 1 155 72" fill="none" stroke="#2563eb" stroke-width="2.5"/>
        <text x="118" y="82" font-size="13" fill="#2563eb" font-weight="bold">60°</text>
        <defs>
            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <polygon points="0,0 10,5 0,10" fill="#dc2626"/>
            </marker>
            <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <polygon points="0,0 10,5 0,10" fill="#2563eb"/>
            </marker>
            <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                <polygon points="0,0 10,5 0,10" fill="#16a34a"/>
            </marker>
        </defs>
    </svg>`,
    "options": [
        { "text": "أ) 8 N", "isCorrect": false },
        { "text": "ب) 4 N", "isCorrect": false },
        { "text": "ج) 5 N", "isCorrect": true },
        { "text": "د) 6 N", "isCorrect": false }
    ],
    "correctAnswerIndex": 2,
    "steps": [
        {
            "title": "اختر الإجابة الصحيحة",
            "question": "ما هي قيمة القوة F₁؟",
            "options": [
                { "text": "أ) 8 N", "isCorrect": false },
                { "text": "ب) 4 N", "isCorrect": false },
                { "text": "ج) 5 N", "isCorrect": true },
                { "text": "د) 6 N", "isCorrect": false }
            ],
            "feedback": "✅ صحيح! F₁ = 5 N"
        },
        {
            "title": "شرط الاتزان الرأسي",
            "question": "ما هو شرط الاتزان الرأسي (ΣF_y = 0)؟",
            "options": [
                { "text": "F₁ sin30° + F₂ sin60° = 10", "isCorrect": true },
                { "text": "F₁ cos30° + F₂ cos60° = 10", "isCorrect": false },
                { "text": "F₁ + F₂ = 10", "isCorrect": false }
            ],
            "feedback": "صحيح! المركبات الرأسية للقوى لأعلى = 10 N (لأسفل)"
        },
        {
            "title": "التعويض والحساب",
            "question": "بالتعويض F₂ = 8.66 N، ما هي قيمة F₁؟",
            "options": [
                { "text": "F₁ = 5 N", "isCorrect": true },
                { "text": "F₁ = 4 N", "isCorrect": false },
                { "text": "F₁ = 8 N", "isCorrect": false }
            ],
            "feedback": "صحيح! 0.5F₁ + 8.66×0.866 = 10 → 0.5F₁ = 2.5 → F₁ = 5 N"
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
        "المعطيات: F₂ = 8.66 N, F₃ = 10 N",
        "",
        "شرط الاتزان الرأسي (ΣF_y = 0):",
        "F₁ sin30° + F₂ sin60° = 10",
        "",
        "التعويض:",
        "F₁ × 0.5 + 8.66 × 0.866 = 10",
        "0.5F₁ + 7.5 = 10",
        "0.5F₁ = 10 - 7.5 = 2.5",
        "F₁ = 2.5 / 0.5 = 5 N",
        "",
        "الإجابة: ج) 5 N ✅"
    ],
    "pdfFinalAnswer": "الإجابة: ج) 5 N ✅"
}

];
