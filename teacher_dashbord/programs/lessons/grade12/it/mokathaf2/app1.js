// ============================================================
// متغيرات التحكم
// ============================================================
let currentPage = 0;
const QUESTIONS_PER_PAGE = 10;
let userAnswers = {};
let answeredQuestions = {};

// ============================================================
// حساب عدد الصفحات
// ============================================================
function getTotalPages() {
    return Math.ceil(examQuestions.length / QUESTIONS_PER_PAGE);
}

// ============================================================
// تهيئة البرنامج
// ============================================================
function initExam() {
    if (typeof examQuestions === "undefined" || examQuestions.length === 0) {
        document.getElementById("questions-container").innerHTML = 
        "<p style='color:red; text-align:center; padding:20px;'>❌ خطأ: لم يتم العثور على أسئلة!</p>";
        return;
    }
    console.log("✅ تم العثور على " + examQuestions.length + " سؤال");
    renderPage(0, false);
}

// ============================================================
// عرض صفحة الأسئلة
// ============================================================
function renderPage(page, shouldScroll = false) {
    const container = document.getElementById('questions-container');
    const totalPages = getTotalPages();
    currentPage = page;

    const start = page * QUESTIONS_PER_PAGE;
    const end = Math.min(start + QUESTIONS_PER_PAGE, examQuestions.length);
    const pageQuestions = examQuestions.slice(start, end);

    document.getElementById('page-counter').innerHTML = `صفحة ${page + 1} / ${totalPages}`;
    document.getElementById('page-indicator').textContent = `الصفحة ${page + 1} من ${totalPages}`;

    document.getElementById('prev-btn').disabled = page === 0;
    document.getElementById('next-btn').disabled = page === totalPages - 1;

    let html = '';
    pageQuestions.forEach((q, idx) => {
        const globalIndex = start + idx;
        const questionNum = globalIndex + 1;

        let optionsHTML = '';
        q.options.forEach((opt, optIdx) => {
            let btnClass = 'opt-btn';
            let icon = '<i class="fa-regular fa-circle"></i>';
            
            if (answeredQuestions[globalIndex] !== undefined) {
                if (answeredQuestions[globalIndex] === optIdx) {
                    btnClass += answeredQuestions[globalIndex] === q.correctAnswer ? ' correct' : ' wrong';
                    icon = answeredQuestions[globalIndex] === q.correctAnswer ? 
                        '<i class="fa-solid fa-circle-check"></i>' : 
                        '<i class="fa-solid fa-circle-xmark"></i>';
                }
                if (optIdx === q.correctAnswer && answeredQuestions[globalIndex] !== undefined) {
                    btnClass += ' correct';
                }
            }

            optionsHTML += `
                <button class="${btnClass}" onclick="checkAnswer(${globalIndex}, ${optIdx})">
                    <span>${opt}</span>
                    ${icon}
                </button>
            `;
        });

        // ✅ التعديل هنا: إظهار التبرير العلمي (correction) عند الإجابة الخاطئة
        let feedbackHTML = '';
        if (answeredQuestions[globalIndex] !== undefined) {
            const isCorrect = answeredQuestions[globalIndex] === q.correctAnswer;
            const correctText = q.options[q.correctAnswer];
            
            // التحقق من وجود نص تصحيح للسؤال
            let correctionTextHTML = '';
            if (!isCorrect && q.correction && q.correction.trim() !== "") {
                correctionTextHTML = `<div style="margin-top: 8px; font-size: 14px; color: #7f1d1d; border-top: 1px dashed #fca5a5; padding-top: 6px; font-weight: normal;">💡 <b>التبرير العلمي:</b> ${q.correction}</div>`;
            }

            feedbackHTML = `
                <div class="feedback-box ${isCorrect ? 'success' : 'error'}">
                    ${isCorrect ? 
                        '<i class="fa-solid fa-check"></i> ✅ إجابة صحيحة' : 
                        `<i class="fa-solid fa-xmark"></i> ❌ إجابة خاطئة - الإجابة الصحيحة هي: <span class="correct-answer">${correctText}</span> ${correctionTextHTML}`
                    }
                </div>
            `;
        }

        html += `
            <div class="question-item">
                <div class="q-number">س ${questionNum}:</div>
                <div class="q-text">${q.question}</div>
                <div class="q-options">${optionsHTML}</div>
                ${feedbackHTML}
            </div>
        `;
    });

    container.innerHTML = html;
    
    if (shouldScroll) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ============================================================
// التحقق من الإجابة
// ============================================================
function checkAnswer(index, selectedIdx) {
    if (answeredQuestions[index] !== undefined) return;

    answeredQuestions[index] = selectedIdx;
    userAnswers[index] = selectedIdx;
    
    renderPage(currentPage, false); // عدم القفز لأعلى عند الإجابة
}

// ============================================================
// التنقل بين الصفحات
// ============================================================
function nextPage() {
    if (currentPage < getTotalPages() - 1) {
        renderPage(currentPage + 1, true);
    }
}

function prevPage() {
    if (currentPage > 0) {
        renderPage(currentPage - 1, true);
    }
}

// ============================================================
// توليد PDF (كتاب مراجعة بدون درجات - بدون رأس وتذييل داخلي)
// ============================================================
function generatePDF() {
    const printableDoc = document.getElementById('printable-pdf-document');
    printableDoc.innerHTML = '';

    const watermarkText = `مدرسة أمجاد أفريقيا\nليبيا البيضاء`;

    let htmlContent = '';

    // ===== صفحة الغلاف =====
    htmlContent += `
        <div class="pdf-page" style="text-align: center; background: #f8fafc; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; overflow: hidden;">
            <div class="watermark-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 60px; font-weight: bold; color: rgba(0, 0, 0, 0.06); white-space: pre-line; text-align: center; line-height: 1.8; letter-spacing: 8px; pointer-events: none; z-index: 0; width: 100%; font-family: 'Cairo', sans-serif;">
                ${watermarkText}
            </div>
            <div style="position:relative; z-index:1; width:100%;">
                <div style="font-size:22px;color:#1a365d;margin-bottom:15px;font-weight:bold;border-bottom:2px solid #1a365d;padding-bottom:10px;display:inline-block;">
                    🏫 مدرسة أمجاد أفريقيا - ليبيا البيضاء
                </div>
                <div style="font-size:42px;font-weight:800;color:#0f172a;margin:20px 0 10px;">💻 تقنية المعلومات</div>
                <div style="font-size:32px;font-weight:700;color:#1a365d;margin-bottom:10px;">كتاب المراجعة النهائية</div>
                <div style="font-size:24px;font-weight:600;color:#334155;margin-bottom:20px;">الصف الثالث الثانوي</div>
                <div style="border:3px solid #1a365d;border-radius:16px;padding:25px 35px;margin:15px auto;background:rgba(255,255,255,0.95);max-width:80%;">
                    <h3 style="font-size:28px;color:#1e293b;margin:0 0 5px 0;">📚 كتاب المراجعة النهائية</h3>
                    <h4 style="font-size:20px;color:#475569;margin:8px 0;">مادة تقنية المعلومات</h4>
                    <div style="font-size:16px;color:#64748b;margin:5px 0;">أسئلة شاملة للمراجعة</div>
                    <div style="font-size:18px;font-weight:700;color:#0f172a;margin-top:10px;background:#dbeafe;padding:6px 18px;border-radius:8px;display:inline-block;">
                        العام الدراسي 2025 - 2026
                    </div>
                    <div style="font-size:15px;color:#2563eb;margin-top:10px;font-weight:bold;">
                        📊 عدد الأسئلة: ${examQuestions.length} سؤال
                    </div>
                </div>
                <div style="font-size:20px;color:#059669;margin:12px 0;font-weight:bold;">✨ إهداء إلى طلبتنا المتميزين ✨</div>
                <div style="font-size:14px;color:#475569;margin-top:8px;">
                    <span style="font-weight:bold;">رابط البوت التعليمي:</span><br>
                    <span style="color:#2563eb;font-size:15px;">t.me/amjad_africa2027bot</span>
                </div>
                <div style="font-size:11px;color:#94a3b8;margin-top:12px;border-top:1px solid #e2e8f0;padding-top:8px;">
                    © 2026 جميع الحقوق محفوظة - مدرسة أمجاد أفريقيا
                </div>
            </div>
        </div>
    `;

    // ===== صفحة الأسئلة (بدون رأس وتذييل) =====
    const totalPages = Math.ceil(examQuestions.length / 10);
    
    for (let p = 0; p < totalPages; p++) {
        const start = p * 10;
        const end = Math.min(start + 10, examQuestions.length);
        const pageQuestions = examQuestions.slice(start, end);

        htmlContent += `
            <div class="pdf-page" style="position: relative; overflow: hidden; background: white; padding: 8mm 6mm;">
                <div class="watermark-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 55px; font-weight: bold; color: rgba(0, 0, 0, 0.06); white-space: pre-line; text-align: center; line-height: 1.8; letter-spacing: 6px; pointer-events: none; z-index: 0; width: 100%; font-family: 'Cairo', sans-serif;">
                    ${watermarkText}
                </div>
                <div style="position:relative; z-index:1;">
        `;

        pageQuestions.forEach((q, idx) => {
            const globalIndex = start + idx;
            const questionNum = globalIndex + 1;
            const correctText = q.options[q.correctAnswer] || "لم يتم تحديد";

            let optionsHTML = q.options.map((opt, i) => {
                const isCorrect = i === q.correctAnswer;
                return `<span style="display:inline-block;margin:2px 4px;padding:2px 10px;background:${isCorrect ? '#dcfce7' : '#f1f5f9'};border-radius:4px;font-size:13px;${isCorrect ? 'font-weight:bold;color:#065f46;border:2px solid #22c55e;' : ''}">${opt}</span>`;
            }).join(' ');

            // إضافة التبرير للنسخة المطبوعة أيضاً لزيادة الفائدة العلمية
            let pdfCorrectionHTML = '';
            if (q.correction && q.correction.trim() !== "") {
                pdfCorrectionHTML = `<div style="margin-top:3px;font-size:12px;color:#7f1d1d;">💡 <b>التبرير:</b> ${q.correction}</div>`;
            }

            htmlContent += `
                <div style="margin-bottom:8px;padding:8px 10px;border-right:4px solid #28a745;background:#fafffa;border-radius:6px;page-break-inside:avoid;break-inside:avoid;">
                    <div style="font-weight:bold;font-size:14px;color:#1a365d;line-height:1.5;margin-bottom:2px;">س ${questionNum}: ${q.question}</div>
                    <div style="margin:2px 0;font-size:13px;color:#475569;">
                        <span style="font-weight:bold;">الخيارات:</span> ${optionsHTML}
                    </div>
                    <div style="margin-top:3px;padding:3px 8px;background:#dcfce7;border-radius:4px;border-right:3px solid #22c55e;">
                        <span style="color:#065f46;font-weight:bold;">✅ الإجابة النموذجية:</span> 
                        <span style="color:#065f46;font-weight:bold;font-size:14px;">${correctText}</span>
                    </div>
                    ${pdfCorrectionHTML}
                </div>
            `;
        });

        htmlContent += `
                </div>
            </div>
        `;
    }

    printableDoc.innerHTML = htmlContent;
    printableDoc.style.display = 'block';

    setTimeout(function() {
        window.print();
        setTimeout(function() {
            printableDoc.style.display = 'none';
        }, 1000);
    }, 500);
}

// ============================================================
// بدء التشغيل
// ============================================================
window.onload = function() {
    initExam();
};