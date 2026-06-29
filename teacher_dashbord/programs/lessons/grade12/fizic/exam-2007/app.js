// متغيرات التحكم
let currentQuestionIndex = 0;
let userAnswers = {};

// تهيئة الامتحان
document.addEventListener("DOMContentLoaded", () => {
    if (typeof examQuestions !== "undefined" && examQuestions.length > 0) {
        showQuestion(currentQuestionIndex);
    } else {
        document.getElementById("question-container").innerHTML = 
            "<p style='color:red; text-align:center;'>❌ خطأ: لم يتم العثور على مصفوفة الأسئلة!</p>";
    }
});

// دالة عرض السؤال
function showQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const currentQuestion = examQuestions[index];
    
    document.getElementById("progress-text").innerText = `السؤال ${index + 1} من ${examQuestions.length}`;
    
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

    // عرض SVG
    let svgHTML = "";
    if (currentQuestion.svg && currentQuestion.svg.trim() !== "") {
        svgHTML = `
            <div class="svg-container">
                ${currentQuestion.svg}
            </div>
        `;
    }

    questionContainer.innerHTML = `
        <div class="question-card">
            ${svgHTML}
            <div class="question-text">${currentQuestion.question}</div>
            <div class="options-container">
                ${optionsHTML}
            </div>
        </div>
    `;

    document.getElementById("prev-btn").disabled = index === 0;
    
    if (index === examQuestions.length - 1) {
        document.getElementById("next-btn").classList.add("hide");
        document.getElementById("submit-btn").classList.remove("hide");
    } else {
        document.getElementById("next-btn").classList.remove("hide");
        document.getElementById("submit-btn").classList.add("hide");
    }
}

// دالة حفظ الإجابة
function saveAnswer(questionIndex, selectedOptionIndex) {
    userAnswers[questionIndex] = selectedOptionIndex;
    updateLiveScore();
}

// تحديث الدرجة الحية
function updateLiveScore() {
    let currentScore = 0;
    for (let index in userAnswers) {
        if (userAnswers[index] === examQuestions[index].correctAnswer) {
           currentScore= currentScore+1.5;
        }
    }
    document.getElementById("score-live").innerText = `الدرجة الحالية: ${currentScore}`;
}

// الانتقال للسؤال التالي
function nextQuestion() {
    if (currentQuestionIndex < examQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

// العودة للسؤال السابق
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

// إنهاء الامتحان
function finishExam() {
    let finalScore = 0;
    let reviewHTML = "<h3 style='text-align:center; color:#1a365d;'>📋 تقرير الإجابات النموذجية</h3>";

    examQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        if (isCorrect) finalScore++;

        // عرض SVG
        let graphicHtml = "";
        if (question.svg && question.svg.trim() !== "") {
            graphicHtml = `
                <div class="svg-container">
                    ${question.svg}
                </div>
            `;
        }

        const userChoiceText = userAnswer !== undefined ? question.options[userAnswer] : "لم يتم الإجابة";
        const correctChoiceText = question.options[question.correctAnswer];
        const isAnswered = userAnswer !== undefined;

        reviewHTML += `
            <div class="review-card ${isCorrect ? 'correct' : 'wrong'}">
                <div class="review-question">${index + 1}. ${question.question}</div>
                ${graphicHtml}
                <div class="review-answer">
                    <strong>إجابتك:</strong> 
                    <span class="${isCorrect ? 'review-user-answer correct' : 'review-user-answer'}">
                        ${userChoiceText}
                        ${!isAnswered ? ' ❌' : ''}
                    </span>
                </div>
                <div class="review-answer review-correct-answer">
                    <strong>✅ الإجابة الصحيحة:</strong> ${correctChoiceText}
                </div>
            </div>
        `;
    });

    // عرض النتيجة
    document.getElementById("quiz-screen").classList.add("hide");
    const resultScreen = document.getElementById("result-screen");
    resultScreen.classList.remove("hide");
    
    document.getElementById("final-score").innerText = finalScore;
    document.getElementById("total-questions").innerText = examQuestions.length;
    document.getElementById("review-container").innerHTML = reviewHTML;

    // رسائل النجاح/الفشل
    const passingScore = Math.floor(examQuestions.length * 0.7);
    if (finalScore >= passingScore) {
        document.getElementById("congrats-msg").classList.remove("hide");
        document.getElementById("fail-msg").classList.add("hide");
    } else {
        document.getElementById("fail-msg").classList.remove("hide");
        document.getElementById("congrats-msg").classList.add("hide");
    }
}

// =============================================
// دالة توليد PDF المصححة (مع معالجة الأخطاء)
// =============================================
// =============================================
// إعادة الدالة الأصلية كما كانت (بدون ضغط لضمان ظهور كافة الأسئلة)
// =============================================
function generatePDF() {
    const btn = document.getElementById('pdfDownloadBtn');
    const originalText = btn.innerText;
    
    btn.disabled = true;
    btn.innerText = '⏳ جاري توليد ملف PDF...';

    const element = document.getElementById('review-container');
    
    if (!element || element.innerHTML.trim() === '') {
        alert('❌ لا توجد إجابات لعرضها.');
        btn.disabled = false;
        btn.innerText = originalText;
        return;
    }

    // إعدادات التقاط الشاشة الأصلية (عالية الدقة وبدون ضغط)
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'الاجابات_النموذجية_فيزياء_2008.pdf',
        image: { type: 'png' }, // العودة لصيغة PNG الأصلية
        html2canvas: { 
            scale: 2, // الدقة العالية الأصلية
            useCORS: true,
            logging: false,
            letterRendering: true
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // التنفيذ باستخدام آلية التصوير الكاملة والمباشرة
    html2pdf().set(opt).from(element).save().then(() => {
        btn.disabled = false;
        btn.innerText = '✅ تم التحميل!';
        setTimeout(() => { btn.innerText = originalText; }, 3000);
    }).catch((error) => {
        console.error('خطأ أثناء توليد PDF:', error);
        alert('❌ حدث خطأ أثناء إنشاء الملف.');
        btn.disabled = false;
        btn.innerText = originalText;
    });
}

// دالة مساعدة للطباعة
function printReview() {
    window.print();
}
// =============================================
// دوال المعاينة والتحميل (بدون تحميل مباشر من الخارج)
// =============================================

// دالة فتح نافذة المعاينة
function openPreview() {
    // التحقق من وجود الأسئلة
    if (typeof examQuestions === "undefined" || examQuestions.length === 0) {
        alert('❌ لا توجد أسئلة لعرضها.');
        return;
    }

    // بناء محتوى المعاينة
    let previewHTML = `
        <div style="text-align: center; margin-bottom: 15px; padding: 10px; background: #e8f4fd; border-radius: 8px; border: 2px solid #007bff;">
            <h3 style="color: #007bff; margin: 0;">📖 الإجابات النموذجية</h3>
            <p style="margin: 5px 0; color: #555; font-size: 14px;">عدد الأسئلة: ${examQuestions.length}</p>
        </div>
    `;

    examQuestions.forEach((question, index) => {
        const correctChoiceText = question.options[question.correctAnswer];
        
        // عرض SVG إذا كان موجوداً
        let graphicHtml = "";
        if (question.svg && question.svg.trim() !== "") {
            graphicHtml = `
                <div class="svg-container" style="text-align: center; margin: 10px 0; padding: 10px; background: white; border-radius: 8px;">
                    ${question.svg}
                </div>
            `;
        }

        previewHTML += `
            <div style="margin-bottom: 15px; padding: 12px; border-right: 4px solid #007bff; background: white; border-radius: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                <div style="font-weight: bold; font-size: 15px; color: #1a365d; margin-bottom: 5px;">
                    ${index + 1}. ${question.question}
                </div>
                ${graphicHtml}
                <div style="margin-top: 8px; padding: 6px 10px; background: #d4edda; border-radius: 4px; border-right: 3px solid #28a745;">
                    <strong style="color: #28a745;">✅ الإجابة الصحيحة:</strong> 
                    <span style="color: #155724; font-weight: bold;">${correctChoiceText}</span>
                </div>
                <div style="margin-top: 4px; font-size: 11px; color: #888;">
                    الخيارات: ${question.options.map((opt, i) => `${i+1}- ${opt}`).join(' | ')}
                </div>
            </div>
        `;
    });

    // إضافة ملاحظة في النهاية
    previewHTML += `
        <div style="text-align: center; margin-top: 15px; padding: 10px; background: #fff3cd; border-radius: 8px; border: 2px solid #ffc107;">
            <p style="margin: 0; color: #856404; font-size: 14px;">📝 هذه الإجابات النموذجية للمراجعة والدراسة</p>
        </div>
    `;

    // وضع المحتوى في نافذة المعاينة
    document.getElementById('preview-content').innerHTML = previewHTML;
    
    // إظهار نافذة المعاينة
    document.getElementById('previewModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // إعادة تعيين زر التحميل
    const downloadBtn = document.getElementById('downloadFromPreviewBtn');
    downloadBtn.disabled = false;
    downloadBtn.innerText = '📥 تحميل PDF';
    document.getElementById('previewLoading').style.display = 'none';
}

// دالة إغلاق نافذة المعاينة
function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// دالة تحميل PDF من داخل المعاينة (بدون تحميل مباشر من الخارج)
// =============================================
// دالة تحميل PDF مع علامة مائية
// =============================================

// =============================================
// دالة تحميل PDF المضمونة والمضغوطة (حل مشكلة الصفحات الفارغة)
// =============================================
function downloadFromPreview() {
    const downloadBtn = document.getElementById('downloadFromPreviewBtn');
    const loadingIndicator = document.getElementById('previewLoading');
    
    // تعطيل الزر وإظهار مؤشر التحميل
    downloadBtn.disabled = true;
    downloadBtn.innerText = '⏳ جاري ضغط وتوليد الملف...';
    loadingIndicator.style.display = 'block';

    const previewContent = document.getElementById('preview-content');
    
    if (!previewContent || previewContent.innerHTML.trim() === '') {
        alert('❌ لا توجد إجابات لعرضها.');
        downloadBtn.disabled = false;
        downloadBtn.innerText = '📥 تحميل PDF';
        loadingIndicator.style.display = 'none';
        return;
    }

    // 1. قراءة متغيرات العلامة المائية من الواجهة
    const watermarkText = document.getElementById('watermarkText')?.value || 'أفريقيا - نموذج إجابة';
    const watermarkColor = document.getElementById('watermarkColor')?.value || '#cccccc';
    const watermarkOpacity = parseFloat(document.getElementById('watermarkOpacity')?.value || '0.12');
    
    // 2. إنشاء عنصر العلامة المائية وحقنه مباشرة في الحاوية الحقيقية المشاهدة
    const watermarkSpan = document.createElement('div');
    watermarkSpan.id = 'dynamic-pdf-watermark';
    watermarkSpan.textContent = watermarkText;
    watermarkSpan.style.cssText = `
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-30deg);
        font-size: 65px;
        font-weight: bold;
        color: ${watermarkColor};
        opacity: ${watermarkOpacity};
        white-space: nowrap;
        pointer-events: none;
        z-index: 9999;
        font-family: 'Arial', sans-serif;
        letter-spacing: 5px;
    `;
    previewContent.style.position = 'relative';
    previewContent.appendChild(watermarkSpan);

    // 3. إعدادات التصدير الذكية المباشرة من العنصر النشط
    const opt = {
        margin:       [12, 12, 12, 12],
        filename:     'الاجابات_النموذجية_فيزياء_2008.pdf',
        image:        { type: 'jpeg', quality: 0.6 }, 
        html2canvas:  { 
            scale: 1.5, // درجة وضوح ممتازة للنصوص والرموز
            useCORS: true,
            logging: false,
            letterRendering: true
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait', compress: true },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // 4. استدعاء المحرك للتصدير من العنصر المرئي مباشرة لضمان عدم ظهور صفحات فارغة
    html2pdf().set(opt).from(previewContent).save().then(() => {
        // إزالة العلامة المائية بعد الانتهاء حتى لا تتكرر في العرض الثابت
        const wm = document.getElementById('dynamic-pdf-watermark');
        if (wm) wm.remove();

        downloadBtn.disabled = false;
        downloadBtn.innerText = '✅ تم التحميل!';
        loadingIndicator.style.display = 'none';
        setTimeout(() => {
            downloadBtn.innerText = '📥 تحميل PDF';
        }, 3000);
    }).catch((error) => {
        console.error('خطأ أثناء توليد الـ PDF:', error);
        // تنظيف العلامة المائية في حالة حدوث خطأ أيضاً
        const wm = document.getElementById('dynamic-pdf-watermark');
        if (wm) wm.remove();
        
        alert('❌ حدث خطأ أثناء إنشاء الملف، يرجى المحاولة مرة أخرى.');
        downloadBtn.disabled = false;
        downloadBtn.innerText = '📥 تحميل PDF';
        loadingIndicator.style.display = 'none';
    });
}
// دالة العودة للامتحان (تظل موجودة)
function backToExam() {
    document.getElementById("result-screen").classList.add("hide");
    document.getElementById("quiz-screen").classList.remove("hide");
    if (typeof currentQuestionIndex !== 'undefined') {
        showQuestion(currentQuestionIndex);
    }
}
// =========================================================
// دالة توليد كتاب الإجابات النموذجية الفوري الكامل للمنصة
// =========================================================
// =========================================================
// دالة توليد كتاب الإجابات النموذجية الفوري من مصفوفة examQuestions
// =========================================================
function generateModelAnswersPDF() {
    const btn = document.getElementById('pdfDirectBtn');
    if (!btn) return;

    // 1. التحقق من وجود مصفوفة الامتحان المحددة لديكِ
    if (typeof examQuestions === 'undefined' || examQuestions.length === 0) {
        alert('❌ خطأ: لم يتم العثور على مصفوفة examQuestions في ملف array-2008.js');
        return;
    }

    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = '⏳ جاري إنشاء وتجميع كتاب الإجابات النموذجية...';

    // 2. بناء حاوية التصوير المؤقتة خلف الكواليس
    const tempWorker = document.createElement('div');
    tempWorker.style.position = 'absolute';
    tempWorker.style.left = '-9999px';
    tempWorker.style.width = '750px'; 
    tempWorker.style.direction = 'rtl';
    tempWorker.style.fontFamily = "'Segoe UI', Tahoma, sans-serif";
    
    // الهيدر الرئيسي الاحترافي لملف الـ PDF
    let htmlContent = `
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px double #007bff; padding-bottom: 20px;">
            <h1 style="color: #007bff; margin: 0 0 10px 0; font-size: 26px;">منصة أمجد أفريقيا التعليمية</h1>
            <h2 style="color: #333; margin: 0; font-size: 20px;">كتاب الإجابات النموذجية - امتحان الفيزياء لدفعة 2008</h2>
        </div>
    `;

    // 3. قراءة البيانات وحقنها من مصفوفة examQuestions مباشرة
    examQuestions.forEach((q, index) => {
        // جلب نص الخيار الصحيح بناءً على رقم المؤشر المسجل في الخصائص
        let correctOptionText = "لم يتم تحديد الإجابة النموذجية";
        if (q.options && q.options[q.correct] !== undefined) {
            correctOptionText = q.options[q.correct];
        }

        htmlContent += `
            <div style="margin-bottom: 25px; padding: 15px; border-right: 5px solid #28a745; background: #f0fff4; border-radius: 6px; page-break-inside: avoid; break-inside: avoid;">
                <div style="font-weight: bold; font-size: 18px; color: #1a365d; margin-bottom: 10px; line-height: 1.6;">
                    س ${index + 1}: ${q.question}
                </div>
                
                <!-- حقن رسم الـ SVG الفيزيائي في حال تواجده بالسؤال -->
                ${q.svg ? `<div class="svg-container" style="text-align: center; margin: 15px 0;">${q.svg}</div>` : ''}
                
                <div style="margin-top: 10px; font-size: 16px;">
                    <span style="color: #28a745; font-weight: bold;">✔️ الإجابة النموذجية:</span> 
                    <span style="color: #333;">${correctOptionText}</span>
                </div>
            </div>
        `;
    });

    tempWorker.innerHTML = htmlContent;
    document.body.appendChild(tempWorker);

    // 4. إعدادات مكتبة html2pdf لتوليد ملف عالي الدقة بدون فراغات صفحات
    const opt = {
        margin:       [15, 15, 15, 15],
        filename:     'كتاب_الاجابات_النموذجية_فيزياء_2008.pdf',
        image:        { type: 'png' }, // استخدام PNG للحفاظ على جودة خطوط ورسومات الفيزياء
        html2canvas:  { 
            scale: 2, 
            useCORS: true,
            logging: false,
            letterRendering: true
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // 5. بدء توليد وحفظ الملف مباشرة
    html2pdf().set(opt).from(tempWorker).save().then(() => {
        tempWorker.remove(); // تدمير الحاوية بعد التنزيل لتنظيف الذاكرة
        btn.disabled = false;
        btn.innerText = '✅ تم تحميل ملف المنصة!';
        setTimeout(() => { btn.innerText = originalText; }, 3000);
    }).catch((error) => {
        console.error('خطأ أثناء توليد كتاب الإجابات:', error);
        tempWorker.remove();
        alert('❌ حدث خطأ أثناء إعداد ملف الـ PDF.');
        btn.disabled = false;
        btn.innerText = originalText;
    });
}