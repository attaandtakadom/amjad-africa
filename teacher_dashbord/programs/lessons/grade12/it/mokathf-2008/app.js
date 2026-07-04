// ============================================================
// متغيرات التحكم
// ============================================================
let currentQIndex = 0;
let userAnswers = {};
let answeredQuestions = {};

// ============================================================
// تهيئة الامتحان
// ============================================================
function initExam() {
    if (typeof examQuestions === "undefined" || examQuestions.length === 0) {
        document.getElementById("question-container").innerHTML = 
        "<p style='color:red; text-align:center; padding:20px;'>❌ خطأ: لم يتم العثور على أسئلة!</p>";
        return;
    }
    
    console.log("✅ تم العثور على " + examQuestions.length + " سؤال");
    renderActiveQuestion(0);
}

// ============================================================
// عرض السؤال
// ============================================================
function renderActiveQuestion(index) {
    const data = examQuestions[index];
    if (!data) return;

    document.getElementById('q-source').innerText = `السؤال ${index + 1}`;
    document.getElementById('main-question-text').innerText = data.question;
    document.getElementById('question-counter').innerHTML = `سؤال ${index + 1} / ${examQuestions.length}`;

    // عرض SVG إن وجد
    const graphicContainer = document.getElementById('graphic-container');
    if (data.svg && data.svg.trim() !== "") {
        graphicContainer.innerHTML = data.svg;
        graphicContainer.style.display = 'block';
    } else {
        graphicContainer.innerHTML = '<p class="no-graphic">⚠️ لا يوجد رسم توضيحي</p>';
        graphicContainer.style.display = 'block';
    }

    // عرض الخيارات
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span>${opt}</span><i class="fa-regular fa-circle"></i>`;
        btn.onclick = function() { checkAnswer(index, idx); };
        
        // إذا كانت الإجابة محددة سابقاً
        if (answeredQuestions[index] !== undefined) {
            if (answeredQuestions[index] === idx) {
                btn.classList.add(answeredQuestions[index] === data.correctAnswer ? 'correct' : 'wrong');
                btn.querySelector('i').className = answeredQuestions[index] === data.correctAnswer ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
            }
            if (idx === data.correctAnswer && answeredQuestions[index] !== undefined) {
                btn.style.borderColor = '#22c55e';
                btn.style.background = '#dcfce7';
            }
        }
        
        optionsContainer.appendChild(btn);
    });

    // تحديث أزرار التنقل
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === examQuestions.length - 1;

    // عرض التغذية الراجعة
    const feedbackBox = document.getElementById('feedback-box');
    if (answeredQuestions[index] !== undefined) {
        const isCorrect = answeredQuestions[index] === data.correctAnswer;
        feedbackBox.className = `feedback-box ${isCorrect ? 'success' : 'error'}`;
        feedbackBox.innerHTML = isCorrect ? 
            '<i class="fa-solid fa-check"></i> ✅ إجابة صحيحة! درجة السؤال: 1.5' : 
            `<i class="fa-solid fa-xmark"></i> ❌ إجابة خاطئة - الإجابة الصحيحة هي: <span class="correct-answer">${data.options[data.correctAnswer]}</span>`;
        feedbackBox.style.display = 'block';
    } else {
        feedbackBox.style.display = 'none';
    }
}

// ============================================================
// التحقق من الإجابة
// ============================================================
function checkAnswer(index, selectedIdx) {
    const data = examQuestions[index];
    if (answeredQuestions[index] !== undefined) return;

    answeredQuestions[index] = selectedIdx;
    userAnswers[index] = selectedIdx;
    renderActiveQuestion(index);
}

// ============================================================
// التنقل بين الأسئلة
// ============================================================
function navigateQuestion(direction) {
    const newIndex = currentQIndex + direction;
    if (newIndex >= 0 && newIndex < examQuestions.length) {
        currentQIndex = newIndex;
        renderActiveQuestion(currentQIndex);
    }
}

// ============================================================
// توليد PDF
// ============================================================
function generatePDF() {
    const printableDoc = document.getElementById('printable-pdf-document');
    printableDoc.innerHTML = '';

    const totalScore = examQuestions.length * 1.5;
    const passingScore = Math.floor(examQuestions.length * 0.7) * 1.5;
    const watermarkText = `مدرسة أمجاد أفريقيا\nليبيا البيضاء`;

    let htmlContent = '';

    // ===== صفحة الغلاف =====
    htmlContent += `
        <div class="pdf-page" style="padding: 20mm 10mm; text-align: center; font-family: 'Cairo', sans-serif; background: #f8fafc; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; position: relative; overflow: hidden;">
            <div class="watermark-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 55px; font-weight: bold; color: rgba(0, 0, 0, 0.05); white-space: pre-line; text-align: center; line-height: 1.8; letter-spacing: 6px; pointer-events: none; z-index: 0; width: 100%; font-family: 'Cairo', sans-serif;">
                ${watermarkText}
            </div>
            <div style="position:relative; z-index:1; width:100%;">
                <div style="font-size:22px;color:#1a365d;margin-bottom:15px;font-weight:bold;border-bottom:2px solid #1a365d;padding-bottom:10px;display:inline-block;">
                    🏫 مدرسة أمجاد أفريقيا - ليبيا البيضاء
                </div>
                <div style="font-size:42px;font-weight:800;color:#0f172a;margin:20px 0 10px;">💻 تقنية المعلومات</div>
                <div style="font-size:32px;font-weight:700;color:#1a365d;margin-bottom:10px;">كراسة الحلول النموذجية</div>
                <div style="font-size:24px;font-weight:600;color:#334155;margin-bottom:20px;">الصف الثالث الثانوي</div>
                <div style="border:3px solid #1a365d;border-radius:16px;padding:25px 35px;margin:15px auto;background:rgba(255,255,255,0.95);max-width:80%;">
                    <h3 style="font-size:28px;color:#1e293b;margin:0 0 5px 0;">📚 كراسة الحلول النموذجية</h3>
                    <h4 style="font-size:20px;color:#475569;margin:8px 0;">مادة تقنية المعلومات</h4>
                    <div style="font-size:16px;color:#64748b;margin:5px 0;">الأسئلة الشاملة</div>
                    <div style="font-size:18px;font-weight:700;color:#0f172a;margin-top:10px;background:#dbeafe;padding:6px 18px;border-radius:8px;display:inline-block;">
                        العام الدراسي 2025 - 2026
                    </div>
                    <div style="font-size:15px;color:#059669;margin-top:10px;font-weight:bold;">
                        📊 عدد الأسئلة: ${examQuestions.length} سؤال
                    </div>
                    <div style="font-size:15px;color:#2563eb;margin-top:5px;font-weight:bold;">
                        ⭐ كل سؤال: 1.5 درجة | المجموع الكلي: ${totalScore.toFixed(1)} درجة
                    </div>
                    <div style="font-size:14px;color:#d97706;margin-top:5px;font-weight:bold;">
                        🎯 درجة النجاح (70%): ${passingScore.toFixed(1)} درجة
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

    // ===== صفحة الأسئلة =====
    htmlContent += `
        <div class="pdf-page" style="padding: 8mm 6mm 5mm 6mm; font-family: 'Cairo', sans-serif; background: white; direction: rtl; min-height: 100vh; position: relative; overflow: hidden;">
            <div class="watermark-text" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-30deg); font-size: 50px; font-weight: bold; color: rgba(0, 0, 0, 0.05); white-space: pre-line; text-align: center; line-height: 1.8; letter-spacing: 6px; pointer-events: none; z-index: 0; width: 100%; font-family: 'Cairo', sans-serif;">
                ${watermarkText}
            </div>
            <div style="position:relative; z-index:1;">
                <div style="text-align:center;border-bottom:2px solid #1a365d;padding-bottom:8px;margin-bottom:12px;">
                    <div style="font-size:16px;color:#1a365d;font-weight:bold;">مدرسة أمجاد أفريقيا - ليبيا البيضاء</div>
                    <div style="font-size:13px;color:#475569;">📘 كراسة الحلول النموذجية - تقنية المعلومات</div>
                    <div style="font-size:12px;color:#059669;margin-top:3px;">
                        📊 عدد الأسئلة: ${examQuestions.length} | ⭐ كل سؤال: 1.5 درجة | 🏆 المجموع: ${totalScore.toFixed(1)} درجة
                    </div>
                </div>
    `;

    // عرض جميع الأسئلة
    examQuestions.forEach((q, index) => {
        const correctIndex = q.correctAnswer;
        let correctText = "لم يتم تحديد";
        if (q.options && q.options[correctIndex] !== undefined) {
            correctText = q.options[correctIndex];
        }
        
        let svgHTML = "";
        if (q.svg && q.svg.trim() !== "") {
            svgHTML = `<div style="text-align:center;margin:5px 0;padding:5px;background:#f8fafc;border-radius:6px;">${q.svg}</div>`;
        }

        let optionsHTML = q.options.map((opt, i) => {
            const isCorrect = i === correctIndex;
            return `<span style="display:inline-block;margin:2px 4px;padding:2px 10px;background:${isCorrect ? '#dcfce7' : '#f1f5f9'};border-radius:4px;font-size:13px;${isCorrect ? 'font-weight:bold;color:#065f46;border:2px solid #22c55e;' : ''}">${opt}</span>`;
        }).join(' ');

        htmlContent += `
            <div style="margin-bottom:12px;padding:10px 12px;border-right:4px solid #28a745;background:rgba(255,255,255,0.95);border-radius:6px;page-break-inside:avoid;break-inside:avoid;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px;">
                    <div style="font-weight:bold;font-size:14px;color:#1a365d;line-height:1.5;">س ${index + 1}: ${q.question}</div>
                    <div style="background:#dbeafe;padding:1px 10px;border-radius:10px;font-size:12px;font-weight:bold;color:#1a365d;white-space:nowrap;">⭐ 1.5</div>
                </div>
                ${svgHTML}
                <div style="margin:3px 0;font-size:12px;color:#475569;">
                    <span style="font-weight:bold;">الخيارات:</span> ${optionsHTML}
                </div>
                <div style="margin-top:4px;padding:4px 8px;background:#dcfce7;border-radius:4px;border-right:3px solid #22c55e;">
                    <span style="color:#065f46;font-weight:bold;">✅ الإجابة النموذجية الصحيحة:</span> 
                    <span style="color:#065f46;font-weight:bold;font-size:14px;">${correctText}</span>
                </div>
            </div>
        `;
    });

    // ملخص الدرجات
    htmlContent += `
        <div style="margin-top:20px;padding:15px;background:rgba(240,253,244,0.95);border-radius:10px;border:3px solid #22c55e;text-align:center;">
            <h2 style="color:#065f46;font-size:20px;margin:0 0 8px 0;">📊 ملخص الدرجات</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin:8px 0;">
                <div style="background:white;padding:8px;border-radius:6px;border:1px solid #86efac;">
                    <div style="font-size:11px;color:#475569;">📝 عدد الأسئلة</div>
                    <div style="font-size:22px;font-weight:bold;color:#1a365d;">${examQuestions.length}</div>
                </div>
                <div style="background:white;padding:8px;border-radius:6px;border:1px solid #86efac;">
                    <div style="font-size:11px;color:#475569;">⭐ درجة كل سؤال</div>
                    <div style="font-size:22px;font-weight:bold;color:#2563eb;">1.5</div>
                </div>
                <div style="background:white;padding:8px;border-radius:6px;border:1px solid #86efac;">
                    <div style="font-size:11px;color:#475569;">🏆 المجموع الكلي</div>
                    <div style="font-size:22px;font-weight:bold;color:#059669;">${totalScore.toFixed(1)}</div>
                </div>
                <div style="background:white;padding:8px;border-radius:6px;border:1px solid #f59e0b;">
                    <div style="font-size:11px;color:#475569;">✅ النجاح (70%)</div>
                    <div style="font-size:22px;font-weight:bold;color:#d97706;">${passingScore.toFixed(1)}</div>
                </div>
            </div>
            <div style="margin-top:6px;padding:8px;background:white;border-radius:6px;border:1px solid #86efac;font-size:13px;color:#475569;">
                📌 كل سؤال بـ <b style="color:#2563eb;">1.5 درجة</b> | 🎯 النجاح: <b style="color:#d97706;">${passingScore.toFixed(1)}</b> من ${totalScore.toFixed(1)}
            </div>
        </div>
        <div style="text-align:center;margin-top:15px;padding-top:8px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;">
            ⚡ هذه المذكرة خاصة - لا يجوز نسخها ⚡
            <br>© 2026 مدرسة أمجاد أفريقيا - ليبيا البيضاء
        </div>
    `;

    htmlContent += '</div>';

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