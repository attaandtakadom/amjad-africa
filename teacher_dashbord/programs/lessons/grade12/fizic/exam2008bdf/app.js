// ============================================================
// متغيرات التحكم في الامتحان التفاعلي
// ============================================================
let currentQuestionIndex = 0;
let userAnswers = {};

// ============================================================
// تهيئة الامتحان عند تحميل الصفحة
// ============================================================
document.addEventListener("DOMContentLoaded", function() {
    console.log("🔄 جاري تهيئة الامتحان...");
    
    // التحقق من وجود المصفوفة
    if (typeof examQuestions === "undefined") {
        console.error("❌ خطأ: لم يتم تحميل مصفوفة examQuestions");
        document.getElementById("question-container").innerHTML = 
        "<p style='color:red; text-align:center; padding:20px;'>❌ خطأ: لم يتم العثور على مصفوفة الأسئلة!<br><small>تأكد من وجود ملف array-2008.js</small></p>";
        return;
    }
    
    if (examQuestions.length === 0) {
        console.error("❌ خطأ: مصفوفة الأسئلة فارغة");
        document.getElementById("question-container").innerHTML = 
        "<p style='color:red; text-align:center; padding:20px;'>❌ خطأ: مصفوفة الأسئلة فارغة!</p>";
        return;
    }
    
    console.log("✅ تم العثور على " + examQuestions.length + " سؤال");
    
    // عرض السؤال الأول
    showQuestion(0);
    
    // تحديث عدد الأسئلة
    document.getElementById("total-questions").textContent = examQuestions.length;
});

// ============================================================
// دالة عرض السؤال
// ============================================================
function showQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const currentQuestion = examQuestions[index];
    
    if (!currentQuestion) {
        questionContainer.innerHTML = "<p style='color:red;'>❌ خطأ: السؤال غير موجود</p>";
        return;
    }
    
    // تحديث عداد السؤال
    document.getElementById("progress-text").innerText = `السؤال ${index + 1} من ${examQuestions.length}`;
    
    // بناء خيارات الأسئلة
    let optionsHTML = "";
    currentQuestion.options.forEach((option, i) => {
        const isChecked = userAnswers[index] === i ? "checked" : "";
        optionsHTML += `
            <label class="option-label">
                <input type="radio" name="quiz-option" value="${i}" ${isChecked} onchange="saveAnswer(${index}, ${i})">
                <span>${option}</span>
            </label>
        `;
    });

    // عرض SVG إن وجد
    let svgHTML = "";
    if (currentQuestion.svg && currentQuestion.svg.trim() !== "") {
        svgHTML = `
            <div class="svg-container">
                ${currentQuestion.svg}
            </div>
        `;
    }

    // عرض السؤال
    questionContainer.innerHTML = `
        <div class="question-card">
            ${svgHTML}
            <div class="question-text">${currentQuestion.question}</div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        </div>
    `;

    // تحديث أزرار التنقل
    document.getElementById("prev-btn").disabled = index === 0;
    if (index === examQuestions.length - 1) {
        document.getElementById("next-btn").classList.add("hide");
        document.getElementById("submit-btn").classList.remove("hide");
    } else {
        document.getElementById("next-btn").classList.remove("hide");
        document.getElementById("submit-btn").classList.add("hide");
    }
}

// ============================================================
// دوال حفظ الإجابة وتحديث الدرجة
// ============================================================
function saveAnswer(questionIndex, selectedOptionIndex) {
    userAnswers[questionIndex] = selectedOptionIndex;
    updateLiveScore();
}

function updateLiveScore() {
    let currentScore = 0;
    for (let index in userAnswers) {
        if (userAnswers[index] === examQuestions[index].correct) {
            currentScore += 1.5;
        }
    }
    document.getElementById("score-live").innerText = `الدرجة الحالية: ${currentScore}`;
}

// ============================================================
// دوال التنقل بين الأسئلة
// ============================================================
function nextQuestion() {
    if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// ============================================================
// إنهاء الامتحان وعرض النتيجة
// ============================================================
function finishExam() {
    let finalScore = 0;
    let reviewHTML = "<h3 style='text-align:center; color:#1a365d;'>📋 تقرير الإجابات النموذجية</h3>";

    examQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        if (isCorrect) finalScore++;

        let graphicHtml = "";
        if (question.svg && question.svg.trim() !== "") {
            graphicHtml = `
                <div class="svg-container">
                    ${question.svg}
                </div>
            `;
        }

        const userChoiceText = userAnswer !== undefined ? question.options[userAnswer] : "لم يتم الإجابة";
        const correctChoiceText = question.options[question.correct];

        reviewHTML += `
            <div class="review-card ${isCorrect ? 'correct' : 'wrong'}">
                <div class="review-question">${index + 1}. ${question.question}</div>
                ${graphicHtml}
                <div class="review-answer">
                    <strong>إجابتك:</strong> 
                    <span class="${isCorrect ? 'review-user-answer correct' : 'review-user-answer'}">
                        ${userChoiceText}
                    </span>
                </div>
                <div class="review-answer review-correct-answer">
                    <strong>✅ الإجابة الصحيحة:</strong> ${correctChoiceText}
                </div>
                <div style="margin-top:4px; font-size:13px; color:#666;">
                    ⭐ الدرجة: 1.5
                </div>
            </div>
        `;
    });

    document.getElementById("quiz-screen").classList.add("hide");
    const resultScreen = document.getElementById("result-screen");
    resultScreen.classList.remove("hide");
    document.getElementById("final-score").innerText = finalScore;
    document.getElementById("total-questions").innerText = examQuestions.length;
    document.getElementById("review-container").innerHTML = reviewHTML;

    const passingScore = Math.floor(examQuestions.length * 0.7);
    if (finalScore >= passingScore) {
        document.getElementById("congrats-msg").classList.remove("hide");
        document.getElementById("fail-msg").classList.add("hide");
    } else {
        document.getElementById("fail-msg").classList.remove("hide");
        document.getElementById("congrats-msg").classList.add("hide");
    }
}

// ============================================================
// دالة توليد PDF مع حساب الدرجات (كل سؤال 1.5 درجة)
// ============================================================
function generateModelAnswersPDF() {
    const btn = document.getElementById('pdfDirectBtn');
    if (!btn) return;

    // التحقق من وجود المصفوفة
    if (typeof examQuestions === 'undefined' || examQuestions.length === 0) {
        alert('❌ خطأ: لم يتم العثور على مصفوفة examQuestions');
        return;
    }

    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = '⏳ جاري إنشاء كراسة الحلول النموذجية...';

    // إنشاء حاوية التصدير
    const container = document.createElement('div');
    container.id = 'printable-pdf-document';
    container.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 800px;
        direction: rtl;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        background: white;
        padding: 0;
    `;

    // ===== صفحة الغلاف =====
    const coverPage = document.createElement('div');
    coverPage.className = 'pdf-cover-page';
    coverPage.style.cssText = `
        page-break-after: always;
        break-after: page;
        padding: 20mm 15mm;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        background: linear-gradient(135deg, #f8fafc 0%, #e8f0fe 100%);
        min-height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const totalScore = examQuestions.length * 1.5;
    const passingScore = Math.floor(examQuestions.length * 0.7) * 1.5;

    coverPage.innerHTML = `
        <div style="position: relative; width: 100%;">
            <!-- العلامة المائية -->
            <div style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(-30deg);
                font-size: 60px;
                font-weight: bold;
                color: rgba(0, 0, 0, 0.04);
                white-space: pre-line;
                text-align: center;
                line-height: 1.8;
                letter-spacing: 8px;
                pointer-events: none;
                z-index: 0;
                width: 100%;
            ">
                مدرسة أمجاد أفريقيا
                ليبيا البيضاء
            </div>

            <div style="position: relative; z-index: 1;">
                <div style="font-size: 20px; color: #1a365d; margin-bottom: 15px; font-weight: bold; border-bottom: 2px solid #1a365d; padding-bottom: 10px; display: inline-block;">
                    🏫 مدرسة أمجاد أفريقيا - ليبيا البيضاء
                </div>
                
                <div style="font-size: 48px; font-weight: 800; color: #0f172a; margin: 20px 0 10px;">
                    📘 الفيزياء الكهربائية
                </div>
                <div style="font-size: 36px; font-weight: 700; color: #1a365d; margin-bottom: 10px;">
                    كراسة الحلول النموذجية
                </div>
                <div style="font-size: 28px; font-weight: 600; color: #334155; margin-bottom: 25px;">
                    دفعة 2008 - الصف الثالث الثانوي
                </div>

                <div style="border: 3px solid #1a365d; border-radius: 16px; padding: 30px 40px; margin: 15px auto; background: rgba(255,255,255,0.9); max-width: 80%;">
                    <h3 style="font-size: 32px; color: #1e293b; margin: 0 0 5px 0;">📚 كراسة الحلول النموذجية</h3>
                    <h4 style="font-size: 22px; color: #475569; margin: 8px 0;">امتحان الفيزياء الكهربائية</h4>
                    <div style="font-size: 18px; color: #64748b; margin: 5px 0;">دفعة 2008</div>
                    <div style="font-size: 20px; font-weight: 700; color: #0f172a; margin-top: 10px; background: #dbeafe; padding: 8px 20px; border-radius: 8px; display: inline-block;">
                        العام الدراسي 2025 - 2026
                    </div>
                    <div style="font-size: 16px; color: #059669; margin-top: 10px; font-weight: bold;">
                        📊 عدد الأسئلة: ${examQuestions.length} سؤال
                    </div>
                    <div style="font-size: 16px; color: #2563eb; margin-top: 5px; font-weight: bold;">
                        ⭐ كل سؤال: 1.5 درجة | المجموع الكلي: ${totalScore.toFixed(1)} درجة
                    </div>
                    <div style="font-size: 15px; color: #d97706; margin-top: 5px; font-weight: bold;">
                        🎯 درجة النجاح (70%): ${passingScore.toFixed(1)} درجة
                    </div>
                </div>

                <div style="font-size: 24px; color: #059669; margin: 15px 0; font-weight: bold;">
                    ✨ إهداء إلى طلبتنا المتميزين ✨
                </div>

                <div style="font-size: 14px; color: #475569; margin-top: 10px;">
                    <span style="font-weight: bold;">رابط البوت التعليمي:</span><br>
                    <a href="http://t.me/amjad_africa2027bot" style="color: #2563eb; text-decoration: none; font-size: 16px;">
                        t.me/amjad_africa2027bot
                    </a>
                </div>
                <div style="font-size: 12px; color: #94a3b8; margin-top: 15px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
                    © 2026 جميع الحقوق محفوظة - مدرسة أمجاد أفريقيا
                </div>
            </div>
        </div>
    `;

    container.appendChild(coverPage);

    // ===== صفحة الأسئلة والإجابات =====
    const questionsPage = document.createElement('div');
    questionsPage.className = 'pdf-questions-page';
    questionsPage.style.cssText = `
        padding: 10mm 8mm 8mm 8mm;
        background: white;
        position: relative;
        min-height: 800px;
    `;

    // العلامة المائية
    const watermarkHTML = `
        <div style="
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-30deg);
            font-size: 50px;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.04);
            white-space: pre-line;
            text-align: center;
            line-height: 1.8;
            letter-spacing: 6px;
            pointer-events: none;
            z-index: 0;
            width: 100%;
        ">
            مدرسة أمجاد أفريقيا
            ليبيا البيضاء
        </div>
    `;

    let questionsHTML = watermarkHTML;

    // الهيدر مع معلومات الدرجات
    questionsHTML += `
        <div style="position: relative; z-index: 1; text-align: center; border-bottom: 2px solid #1a365d; padding-bottom: 10px; margin-bottom: 15px;">
            <div style="font-size: 18px; color: #1a365d; font-weight: bold;">مدرسة أمجاد أفريقيا - ليبيا البيضاء</div>
            <div style="font-size: 14px; color: #475569;">📘 كراسة الحلول النموذجية - امتحان الفيزياء الكهربائية (دفعة 2008)</div>
            <div style="font-size: 13px; color: #059669; margin-top: 3px;">
                📊 عدد الأسئلة: ${examQuestions.length} | 
                ⭐ كل سؤال: 1.5 درجة | 
                🏆 المجموع: ${(examQuestions.length * 1.5).toFixed(1)} درجة
            </div>
        </div>
    `;

    // إضافة الأسئلة مع أرقام الدرجات
    examQuestions.forEach((q, index) => {
        const correctOptionText = q.options && q.options[q.correct] !== undefined ? q.options[q.correct] : "لم يتم تحديد الإجابة";
        const questionScore = 1.5;
        
        let svgHTML = "";
        if (q.svg && q.svg.trim() !== "") {
            svgHTML = `
                <div style="text-align: center; margin: 8px 0; padding: 5px; background: #f8fafc; border-radius: 6px;">
                    ${q.svg}
                </div>
            `;
        }

        let optionsHTML = q.options.map((opt, i) => {
            const isCorrect = i === q.correct;
            return `<span style="
                display: inline-block; 
                margin: 2px 4px; 
                padding: 2px 10px; 
                background: ${isCorrect ? '#dcfce7' : '#f1f5f9'}; 
                border-radius: 4px; 
                font-size: 13px; 
                ${isCorrect ? 'font-weight: bold; color: #065f46; border: 1px solid #86efac;' : ''}
            ">${i+1}- ${opt}</span>`;
        }).join(' ');

        questionsHTML += `
            <div style="
                position: relative;
                z-index: 1;
                margin-bottom: 14px; 
                padding: 12px 14px; 
                border-right: 4px solid #28a745; 
                background: #fafffa; 
                border-radius: 6px; 
                page-break-inside: avoid; 
                break-inside: avoid;
                box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <div style="font-weight: bold; font-size: 15px; color: #1a365d; line-height: 1.5;">
                        س ${index + 1}: ${q.question}
                    </div>
                    <div style="
                        background: #dbeafe; 
                        padding: 2px 12px; 
                        border-radius: 12px; 
                        font-size: 13px; 
                        font-weight: bold; 
                        color: #1a365d;
                        white-space: nowrap;
                    ">
                        ⭐ ${questionScore} درجة
                    </div>
                </div>
                ${svgHTML}
                <div style="margin: 4px 0; font-size: 13px; color: #475569;">
                    <span style="font-weight: bold;">الخيارات:</span> ${optionsHTML}
                </div>
                <div style="margin-top: 5px; padding: 5px 10px; background: #dcfce7; border-radius: 4px; border-right: 3px solid #22c55e;">
                    <span style="color: #065f46; font-weight: bold;">✅ الإجابة النموذجية:</span> 
                    <span style="color: #065f46; font-weight: bold; font-size: 15px;">${correctOptionText}</span>
                </div>
            </div>
        `;
    });

    // ===== صفحة ملخص الدرجات =====
    questionsHTML += `
        <div style="
            position: relative;
            z-index: 1;
            margin-top: 25px;
            padding: 20px;
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
            border-radius: 12px;
            border: 3px solid #22c55e;
            text-align: center;
        ">
            <h2 style="color: #065f46; font-size: 22px; margin: 0 0 10px 0;">📊 ملخص الدرجات</h2>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 10px 0;">
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #86efac;">
                    <div style="font-size: 12px; color: #475569;">📝 عدد الأسئلة</div>
                    <div style="font-size: 24px; font-weight: bold; color: #1a365d;">${examQuestions.length}</div>
                </div>
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #86efac;">
                    <div style="font-size: 12px; color: #475569;">⭐ درجة كل سؤال</div>
                    <div style="font-size: 24px; font-weight: bold; color: #2563eb;">1.5</div>
                </div>
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #86efac;">
                    <div style="font-size: 12px; color: #475569;">🏆 المجموع الكلي</div>
                    <div style="font-size: 24px; font-weight: bold; color: #059669;">${totalScore.toFixed(1)}</div>
                </div>
                <div style="background: white; padding: 10px; border-radius: 8px; border: 1px solid #f59e0b;">
                    <div style="font-size: 12px; color: #475569;">✅ درجة النجاح (70%)</div>
                    <div style="font-size: 24px; font-weight: bold; color: #d97706;">${passingScore.toFixed(1)}</div>
                </div>
            </div>
            
            <div style="margin-top: 10px; padding: 10px; background: white; border-radius: 8px; border: 1px solid #86efac;">
                <div style="font-size: 14px; color: #475569;">
                    📌 <b>ملاحظة:</b> كل سؤال يحسب بـ <b style="color: #2563eb;">1.5 درجة</b>
                </div>
                <div style="font-size: 13px; color: #475569; margin-top: 3px;">
                    🎯 درجة النجاح هي <b style="color: #d97706;">${passingScore.toFixed(1)}</b> من ${totalScore.toFixed(1)}
                </div>
            </div>
        </div>
    `;

    // التذييل
    questionsHTML += `
        <div style="position: relative; z-index: 1; text-align: center; margin-top: 20px; padding-top: 10px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
            ⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡
            <br>© 2026 مدرسة أمجاد أفريقيا - ليبيا البيضاء
        </div>
    `;

    questionsPage.innerHTML = questionsHTML;
    container.appendChild(questionsPage);

    document.body.appendChild(container);

    // إعدادات التصدير
    const opt = {
        margin: [8, 8, 8, 8],
        filename: 'كراسة_الحلول_النموذجية_فيزياء_2008.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2.5,
            useCORS: true,
            logging: false,
            letterRendering: true,
            backgroundColor: '#ffffff',
            width: 800
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy']
        }
    };

    // توليد وحفظ الملف
    html2pdf().set(opt).from(container).save().then(() => {
        container.remove();
        btn.disabled = false;
        btn.innerText = '✅ تم تحميل الملف بنجاح!';
        setTimeout(() => { btn.innerText = originalText; }, 3000);
    }).catch((error) => {
        console.error('خطأ أثناء توليد PDF:', error);
        container.remove();
        alert('❌ حدث خطأ أثناء إعداد ملف PDF. يرجى المحاولة مرة أخرى.');
        btn.disabled = false;
        btn.innerText = originalText;
    });
}

// ============================================================
// دالة العودة للامتحان
// ============================================================
function backToExam() {
    document.getElementById("result-screen").classList.add("hide");
    document.getElementById("quiz-screen").classList.remove("hide");
    if (typeof currentQuestionIndex !== 'undefined') {
        showQuestion(currentQuestionIndex);
    }
}

console.log("✅ تم تحميل app.js بنجاح!");