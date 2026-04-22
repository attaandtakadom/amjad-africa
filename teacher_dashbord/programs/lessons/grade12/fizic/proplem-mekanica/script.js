function toggleSolution(id) {
    const content = document.getElementById('sol-content-' + id);
    const btn = document.getElementById('btn-' + id);
    if (content.style.display === "none") {
        content.style.display = "block";
        btn.innerText = "إخفاء الحل";
        btn.style.background = "#f44336"; // يتغير للأحمر عند الإخفاء
    } else {
        content.style.display = "none";
        btn.innerText = "إظهار الحل التفصيلي";
        btn.style.background = "#2196f3"; // يعود للأزرق
    }
}

function checkAnswerDirect(id, correct) {
    const selected = document.querySelector(`input[name="q${id}"]:checked`);
    const feedback = document.getElementById(`feedback-${id}`);
    
    if (!selected) {
        feedback.innerText = "الرجاء اختيار إجابة أولاً!";
        feedback.style.color = "orange";
        return;
    }
    
    if (selected.value === correct) {
        feedback.innerText = "✔️ إجابة صحيحة! أحسنتِ يا بطل/ة أمجاد أفريقيا.";
        feedback.style.color = "green";
    } else {
        feedback.innerText = "❌ إجابة خاطئة. حاول مرة أخرى أو شاهد الحل التفصيلي.";
        feedback.style.color = "red";
    }
}
