window.onload = function() {
    const container = document.getElementById('questions-container');
    if (typeof questions !== 'undefined') {
        let content = "";
        questions.forEach(q => {
            content += `
                <div class="question-card" style="background: white; border-radius: 20px; padding: 25px; margin-bottom: 40px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: right; border: 1px solid #eee;">
                    <div style="margin-bottom: 20px; line-height: 1.6;">${q.text}</div>
                    ${q.givensHTML}
                    ${q.solutionHTML}
                </div>
            `;
        });
        container.innerHTML = content;
    }
};

function toggleSolution(id) {
    const content = document.getElementById('sol-content-' + id);
    const btn = document.getElementById('btn-' + id);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        btn.innerText = "إخفاء الحل";
        btn.style.background = "#f44336"; // أحمر عند الإخفاء
    } else {
        content.style.display = "none";
        btn.innerText = "إظهار الحل التفصيلي";
        btn.style.background = "#4caf50"; // أخضر عند العرض
    }
}