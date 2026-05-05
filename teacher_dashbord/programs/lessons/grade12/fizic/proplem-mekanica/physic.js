// مصفوفة الأسئلة مربوطة بأسماء الدروس
const physicsData = [
    {
        lesson: "الكهرومغناطيسية",
        question: "ملف لولبي ملفوف حول مادة مغناطيسية، للحصول على مغناطيس دائم يلزم تغيير نوع:",
        options: ["السلك فقط", "التيار فقط", "المادة المغناطيسية والتيار", "عدد اللفات"],
        correct: 2
    },
    {
        lesson: "قانون لنز",
        question: "قاعدة لنز تستخدم لتحديد اتجاه:",
        options: ["المجال المغناطيسي", "التيار التأثيري", "حركة السلك", "الشحنة الكهربائية"],
        correct: 1
    },
    {
        lesson: "المولد الكهربائي",
        question: "في المولد الكهربائي، تتحول الطاقة الميكانيكية إلى طاقة:",
        options: ["حرارية", "كيميائية", "كهربائية", "ضوئية"],
        correct: 2
    }
];

let currentIdx = 0;
let userChoice = null;

const lessonEl = document.getElementById('lesson-title');
const questionEl = document.getElementById('question-display');
const optionsEl = document.getElementById('options-display');
const feedbackEl = document.getElementById('feedback');
const btn = document.getElementById('action-btn');

function initQuiz() {
    const data = physicsData[currentIdx];
    lessonEl.innerText = `الدرس: ${data.lesson}`;
    questionEl.innerText = data.question;
    optionsEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    userChoice = null;

    data.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerText = opt;
        div.onclick = () => {
            userChoice = i;
            document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
            div.classList.add('selected');
        };
        optionsEl.appendChild(div);
    });
    
    btn.innerText = "تحقق من الإجابة";
    btn.onclick = check;
}

function check() {
    if (userChoice === null) return alert("اختر إجابة!");
    
    const correctIdx = physicsData[currentIdx].correct;
    feedbackEl.style.display = 'block';

    if (userChoice === correctIdx) {
        feedbackEl.innerText = "✅ إجابة صحيحة";
        feedbackEl.className = "feedback correct";
    } else {
        feedbackEl.innerText = "❌ إجابة خاطئة";
        feedbackEl.className = "feedback wrong";
    }

    btn.innerText = "السؤال التالي";
    btn.onclick = next;
}

function next() {
    currentIdx++;
    if (currentIdx < physicsData.length) {
        initQuiz();
    } else {
        document.getElementById('q-area').innerHTML = "<h2>انتهت الأسئلة الشاملة!</h2>";
        btn.style.display = 'none';
    }
}

// تشغيل عند التحميل
window.onload = initQuiz;