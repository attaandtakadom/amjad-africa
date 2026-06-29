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
function generatePDF() {
    const btn = document.getElementById('pdfDownloadBtn');
    const originalText = btn.innerText;
    
    // تعطيل الزر وإظهار رسالة انتظار
    btn.disabled = true;
    btn.innerText = '⏳ جاري تحضير PDF...';

    // التحقق من وجود html2canvas
    if (typeof html2canvas === 'undefined') {
        alert('❌ خطأ: مكتبة html2canvas غير محملة. يرجى تحديث الصفحة.');
        btn.disabled = false;
        btn.innerText = originalText;
        return;
    }

    const element = document.getElementById('review-container');
    
    // التحقق من وجود عناصر لعرضها
    if (!element || element.innerHTML.trim() === '') {
        alert('❌ لا توجد إجابات لعرضها. قم بحل الامتحان أولاً.');
        btn.disabled = false;
        btn.innerText = originalText;
        return;
    }

    // محاولة توليد PDF
    html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
        onclone: function(doc) {
            // التأكد من عرض SVG بشكل صحيح
            const svgs = doc.querySelectorAll('svg');
            svgs.forEach(svg => {
                svg.style.display = 'block';
                svg.style.maxWidth = '100%';
                svg.style.height = 'auto';
            });
        }
    }).then((canvas) => {
        try {
            const imgData = canvas.toDataURL('image/png');
            
            // التحقق من وجود jsPDF
            if (typeof window.jspdf === 'undefined') {
                throw new Error('مكتبة jsPDF غير محملة');
            }
            
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const imgWidth = pdfWidth - 20;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            // إضافة الصورة إلى PDF
            let heightLeft = imgHeight;
            let position = 10;
            
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= (pdfHeight - 20);
            
            // إضافة صفحات إضافية إذا كانت المحتويات طويلة
            let pageCount = 1;
            while (heightLeft > 0) {
                position = -(pageCount * (pdfHeight - 20)) + 10;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= (pdfHeight - 20);
                pageCount++;
            }
            
            pdf.save('الاجابات_النموذجية_فيزياء_2008.pdf');
            
            // إعادة الزر لحالته الطبيعية
            btn.disabled = false;
            btn.innerText = '✅ تم التحميل!';
            setTimeout(() => {
                btn.innerText = originalText;
            }, 3000);
            
        } catch (error) {
            console.error('خطأ في إنشاء PDF:', error);
            alert('❌ حدث خطأ أثناء إنشاء PDF: ' + error.message);
            btn.disabled = false;
            btn.innerText = originalText;
        }
    }).catch((error) => {
        console.error('خطأ في html2canvas:', error);
        alert('❌ حدث خطأ أثناء تحويل المحتوى: ' + error.message + '\nيرجى المحاولة مرة أخرى.');
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

function downloadFromPreview() {
    const downloadBtn = document.getElementById('downloadFromPreviewBtn');
    const loadingIndicator = document.getElementById('previewLoading');
    
    // تعطيل الزر وإظهار مؤشر التحميل
    downloadBtn.disabled = true;
    downloadBtn.innerText = '⏳ جاري التحضير...';
    loadingIndicator.style.display = 'block';

    const previewContent = document.getElementById('preview-content');
    
    if (!previewContent || previewContent.innerHTML.trim() === '') {
        alert('❌ لا توجد إجابات لعرضها.');
        downloadBtn.disabled = false;
        downloadBtn.innerText = '📥 تحميل PDF';
        loadingIndicator.style.display = 'none';
        return;
    }

    // إنشاء عنصر مؤقت
    const tempContainer = document.createElement('div');
    tempContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        top: 0;
        width: 800px;
        background: white;
        padding: 30px;
        direction: rtl;
    `;
    tempContainer.innerHTML = previewContent.innerHTML;
    
    // إضافة الأنماط
    const style = document.createElement('style');
    style.textContent = `
        .svg-container { text-align: center; margin: 10px 0; padding: 10px; background: white; border-radius: 8px; }
        .svg-container svg { max-width: 100%; height: auto; }
        .review-card { margin-bottom: 20px; padding: 15px; border-right: 5px solid #007bff; background: #f8f9fa; border-radius: 5px; }
        .review-question { font-weight: bold; font-size: 16px; color: #1a365d; margin-bottom: 8px; }
        .review-answer { margin: 5px 0; padding: 8px 12px; background: #d4edda; border-radius: 5px; border-right: 3px solid #28a745; }
        .review-answer strong { color: #28a745; }
        .review-answer span { color: #155724; font-weight: bold; }
        .options-hint { margin-top: 5px; font-size: 12px; color: #888; }
        
        /* تنسيق العلامة المائية في الصفحة */
        .watermark-container {
            position: relative;
            overflow: hidden;
        }
        .watermark-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-30deg);
            font-size: 80px;
            font-weight: bold;
            color: #cccccc;
            opacity: 0.15;
            white-space: nowrap;
            pointer-events: none;
            z-index: 1000;
            font-family: 'Arial', sans-serif;
            letter-spacing: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
    `;
    tempContainer.appendChild(style);
    
    // إضافة العلامة المائية
    const watermarkText = document.getElementById('watermarkText')?.value || 'أفريقيا - نموذج إجابة';
    const watermarkColor = document.getElementById('watermarkColor')?.value || '#cccccc';
    const watermarkOpacity = parseFloat(document.getElementById('watermarkOpacity')?.value || '0.15');
    
    // إضافة العلامة المائية في الخلفية
    const watermarkDiv = document.createElement('div');
    watermarkDiv.className = 'watermark-container';
    watermarkDiv.style.position = 'relative';
    watermarkDiv.style.overflow = 'hidden';
    
    // نقل المحتوى إلى داخل الحاوية مع العلامة المائية
    while (tempContainer.firstChild) {
        watermarkDiv.appendChild(tempContainer.firstChild);
    }
    
    // إضافة العلامة المائية
    const watermarkSpan = document.createElement('div');
    watermarkSpan.className = 'watermark-text';
    watermarkSpan.textContent = watermarkText;
    watermarkSpan.style.color = watermarkColor;
    watermarkSpan.style.opacity = watermarkOpacity;
    watermarkSpan.style.fontSize = '70px';
    
    // وضع العلامة المائية في الخلفية
    watermarkDiv.style.position = 'relative';
    watermarkDiv.appendChild(watermarkSpan);
    
    // إعادة الحاوية إلى tempContainer
    tempContainer.appendChild(watermarkDiv);
    
    document.body.appendChild(tempContainer);

    // استخدام html2canvas
    html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: tempContainer.scrollWidth,
        height: tempContainer.scrollHeight
    }).then((canvas) => {
        document.body.removeChild(tempContainer);
        
        try {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            const imgWidth = pdfWidth - 20;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            let heightLeft = imgHeight;
            let position = 10;
            
            // إضافة الصفحة الأولى مع العلامة المائية
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= (pdfHeight - 20);
            
            let pageCount = 1;
            while (heightLeft > 0) {
                position = -(pageCount * (pdfHeight - 20)) + 10;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= (pdfHeight - 20);
                pageCount++;
            }
            
            pdf.save('الاجابات_النموذجية_فيزياء_2008.pdf');
            
            downloadBtn.disabled = false;
            downloadBtn.innerText = '✅ تم التحميل!';
            loadingIndicator.style.display = 'none';
            setTimeout(() => {
                downloadBtn.innerText = '📥 تحميل PDF';
            }, 3000);
            
        } catch (error) {
            console.error('خطأ في إنشاء PDF:', error);
            alert('❌ حدث خطأ أثناء إنشاء PDF: ' + error.message);
            downloadBtn.disabled = false;
            downloadBtn.innerText = '📥 تحميل PDF';
            loadingIndicator.style.display = 'none';
        }
    }).catch((error) => {
        console.error('خطأ في html2canvas:', error);
        if (tempContainer.parentNode) {
            document.body.removeChild(tempContainer);
        }
        alert('❌ حدث خطأ أثناء تحويل المحتوى. يرجى المحاولة مرة أخرى.');
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

