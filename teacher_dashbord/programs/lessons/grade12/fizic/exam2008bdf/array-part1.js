const examQuestions = [

{
    question: "استقرت نواة أيون ألومنيوم (Al³⁺) فقدت 3 إلكترونات على مسافة قدرها 2 × 10⁻¹⁰ m من أيون أكسجين (O²⁻) اكتسب إلكترونين في الهواء. احسب مقدار القوة الكهربائية المتبادلة بين الأيونين وحدد نوعها: (علماً بأن: e = 1.6 × 10⁻¹⁹ C، k = 9 × 10⁹ N·m²/C²)",
    options: [
        "أ) 3.456 × 10⁻⁸ N (قوة تجاذب)",
        "ب) 3.456 × 10⁻⁸ N (قوة تنافر)",
        "ج) 1.152 × 10⁻⁸ N (قوة تجاذب)",
        "د) 6.912 × 10⁻⁸ N (قوة تنافر)"
    ],
    correctAnswer: 0,
    svg: `<svg width="320" height="130" viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="310" height="120" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                
                <!-- أيون الألومنيوم -->
                <circle cx="70" cy="55" r="22" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
                <text x="70" y="59" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Al³⁺</text>
                <text x="70" y="95" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#991b1b" text-anchor="middle">(فقد 3e⁻)</text>

                <!-- خط المسافة بين الشحنتين -->
                <line x1="92" y1="55" x2="228" y2="55" stroke="#64748b" stroke-width="2" stroke-dasharray="4"/>
                <text x="160" y="45" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">r = 2 × 10⁻¹⁰ m</text>

                <!-- أيون الأكسجين -->
                <circle cx="250" cy="55" r="22" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
                <text x="250" y="59" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">O²⁻</text>
                <text x="250" y="95" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">(اكتسب 2e⁻)</text>
              </svg>`,
    answerSvg: `<svg width="350" height="160" viewBox="0 0 350 160" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="340" height="150" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <text x="175" y="24" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">تحديد اتجاه القوة الكهربائية (قوة تجاذب)</text>

        <!-- الشحنة الموجبة -->
        <circle cx="80" cy="75" r="20" fill="#ef4444"/>
        <text x="80" y="79" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">+q₁</text>

        <!-- الشحنة السالبة -->
        <circle cx="270" cy="75" r="20" fill="#2563eb"/>
        <text x="270" y="79" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">-q₂</text>

        <!-- أسهم التجاذب -->
        <line x1="100" y1="75" x2="150" y2="75" stroke="#16a34a" stroke-width="3"/>
        <polygon points="150,70 160,75 150,80" fill="#16a34a"/>
        <text x="125" y="65" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">F</text>

        <line x1="250" y1="75" x2="200" y2="75" stroke="#16a34a" stroke-width="3"/>
        <polygon points="200,70 190,75 200,80" fill="#16a34a"/>
        <text x="225" y="65" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">F</text>

        <!-- النتيجة النهائية -->
        <text x="175" y="130" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">F = 3.456 × 10⁻⁸ N (قوة تجاذب)</text>
    </svg>`,
    explanation: "1) حساب شحنة أيون الألومنيوم: q₁ = n₁ × e = +3 × (1.6 × 10⁻¹⁹) = +4.8 × 10⁻¹⁹ C\n2) حساب شحنة أيون الأكسجين: q₂ = n₂ × e = -2 × (1.6 × 10⁻¹⁹) = -3.2 × 10⁻¹⁹ C\n3) التعويض في قانون كولوم: F = k × |q₁ × q₂| / r²\nF = (9 × 10⁹) × (4.8 × 10⁻¹⁹ × 3.2 × 10⁻¹⁹) / (2 × 10⁻¹⁰)² = 3.456 × 10⁻⁸ N.\nوبما أن الشحنتين مختلفتا الإشارة (موجبة وسالبة) فإن القوة المتبادلة بينهما هي قوة تجاذب."
},


  {
    question: "س 22: يصبح القضيب الزجاجي موجب الشحنة عند دلكه بالحرير لأنه:",
    options: [
      "أ) يكتسب إلكترونات",
      "ب) يكتسب بروتونات",
      "ج) يكتسب بروتونات ويفقد إلكترونات",
      "د) يفقد إلكترونات"
    ],
    correctAnswer: 3,
    svg: "",
    explanation: "عند دلك القضيب الزجاجي بالحرير تنتقل بعض الإلكترونات من الزجاج إلى الحرير. لذلك يفقد القضيب الزجاجي إلكترونات ويصبح لديه نقص في الشحنات السالبة، فتظهر موجب الشحنة. البروتونات لا تنتقل من جسم إلى آخر أثناء عملية الدلك، ولذلك الإجابة الصحيحة هي (د)."
  },
  {
    question: "س 42: الحث الكهربائي: هو عملية شحن عازل دون أي تلامس بالجسم الشاحن:",
    options: [
      "أ) صح",
      "ب) خطأ"
    ],
    correctAnswer: 1,
    explanation: "العبارة خطأ؛ لأن الحث الكهرواستاتيكي يحدث في الموصلات عند تقريب جسم مشحون منها دون تلامس، حيث تتحرك الإلكترونات الحرة داخل الموصل ويحدث إعادة توزيع للشحنات. أما العازل فلا تتحرك فيه الشحنات الحرة عبر الجسم بالطريقة نفسها، وإنما يمكن أن يحدث فيه استقطاب للشحنات. لذلك فالإجابة الصحيحة هي: (ب) خطأ.",
    svg: ""
  }
,

    {
        question: "س 35: في الشكل الموضح، قضيب مشحون بشحنة سالبة يقترب من الطرف P لقضيب فلزي معزول. فإن العبارة الصحيحة لوصف حركة الشحنات هي:",
        options: [
            "أ) تنتقل الإلكترونات في القضيب الفلزي من الطرف P للطرف Q",
            "ب) تنتقل الشحنات الموجبة في القضيب المشحون من P إلى الطرف Q",
            "ج) تنتقل الشحنات الموجبة في القضيب الفلزي من الطرف Q إلى الطرف P",
            "د) تقفز الإلكترونات من القضيب المشحون إلى القضيب الفلزي عبر الفجوة"
        ],
        correctAnswer: 0,

        svg: `<svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 230"
            width="100%"
            height="100%">

            <rect width="100%" height="100%" fill="#ffffff" />

            <g transform="translate(20, 15)">

                <!-- القضيب المشحون -->
                <g transform="translate(220, 20) rotate(-25)">
                    <rect x="0" y="0"
                        width="120"
                        height="22"
                        rx="4"
                        fill="#ffffff"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-dasharray="5,3" />

                    <text x="60" y="-9"
                        font-family="Arial, sans-serif"
                        font-size="11"
                        font-weight="bold"
                        fill="#000000"
                        text-anchor="middle">
                        قضيب مشحون
                    </text>

                    <g font-family="Arial, sans-serif"
                       font-size="14"
                       font-weight="bold"
                       fill="#000000"
                       text-anchor="middle">

                        <text x="15" y="16">-</text>
                        <text x="35" y="16">-</text>
                        <text x="55" y="16">-</text>
                        <text x="75" y="16">-</text>
                        <text x="95" y="16">-</text>

                    </g>
                </g>


                <!-- القضيب الفلزي -->
                <g transform="translate(60, 100)">

                    <rect x="0" y="0"
                        width="160"
                        height="28"
                        rx="5"
                        fill="#f5f5f5"
                        stroke="#000000"
                        stroke-width="1.5" />

                    <path d="M 152 0 A 8 14 0 0 1 152 28"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-dasharray="2,2" />

                    <path d="M 160 0 A 8 14 0 0 1 160 28"
                        fill="none"
                        stroke="#000000"
                        stroke-width="1.5" />

                    <text x="80" y="44"
                        font-family="Arial, sans-serif"
                        font-size="11"
                        font-weight="bold"
                        fill="#000000"
                        text-anchor="middle">
                        قضيب فلزي
                    </text>

                    <text x="-14" y="19"
                        font-family="Georgia, serif"
                        font-size="16"
                        font-style="italic"
                        font-weight="bold"
                        fill="#000000"
                        text-anchor="middle">
                        Q
                    </text>

                    <text x="174" y="19"
                        font-family="Georgia, serif"
                        font-size="16"
                        font-style="italic"
                        font-weight="bold"
                        fill="#000000"
                        text-anchor="middle">
                        P
                    </text>

                </g>

                <!-- إشارة التقريب -->
                <line x1="210" y1="95"
                      x2="235" y2="70"
                      stroke="#999999"
                      stroke-width="1"
                      stroke-dasharray="3,3" />

            </g>
        </svg>`,

        explanation: "عندما يقترب القضيب السالب من الطرف P للقضيب الفلزي المعزول، فإنه يؤثر بقوة تنافر على الإلكترونات الحرة داخل الفلز. لذلك تتحرك الإلكترونات بعيداً عن الطرف P باتجاه الطرف Q.\n\nوبالتالي يصبح الطرف P موجباً نسبياً بسبب نقص الإلكترونات، بينما يصبح الطرف Q سالباً نسبياً بسبب تجمع الإلكترونات فيه.\n\nولا تنتقل الشحنات الموجبة نفسها داخل الفلز، كما أن الإلكترونات لا تقفز من القضيب المشحون إلى القضيب الفلزي لأن القضيبين غير متلامسين.\n\nإذن الإجابة الصحيحة هي (أ): تنتقل الإلكترونات في القضيب الفلزي من الطرف P إلى الطرف Q."
    },


    {
        question: "س 36: الأشكال التالية تمثل خطوط المجال الكهربائي الصحيحة ما عدا:",
        options: [
            "أ) شحنة موجبة منفردة (تخرج منها خطوط المجال عمودياً إلى الخارج)",
            "ب) شحنتان (سالبة وموجبة)، تظهر فيها الخطوط وهي تخرج من الشحنة السالبة وتدخل إلى الموجبة",
            "ج) شحنتان (سالبة وموجبة)، تظهر فيها الخطوط وهي تخرج من الشحنة الموجبة وتدخل إلى السالبة",
            "د) شحنة سالبة منفردة (تدخل إليها خطوط المجال عمودياً من الخارج)"
        ],
        correctAnswer: 1,

        svg: `<svg width="400"
            height="700"
            viewBox="0 0 400 700"
            xmlns="http://www.w3.org/2000/svg">

            <rect width="100%" height="100%" fill="white"/>

            <defs>
                <marker id="arrow"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth">

                    <path d="M0,0 L0,6 L9,3 z"
                        fill="black"/>
                </marker>

                <marker id="arrow-red"
                    markerWidth="10"
                    markerHeight="10"
                    refX="9"
                    refY="3"
                    orient="auto"
                    markerUnits="strokeWidth">

                    <path d="M0,0 L0,6 L9,3 z"
                        fill="red"/>
                </marker>
            </defs>


            <!-- أ: شحنة موجبة -->
            <g transform="translate(200, 100)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    +
                </text>

                <line x1="0" y1="-15"
                    x2="0" y2="-65"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="10.6" y1="-10.6"
                    x2="45.9" y2="-45.9"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="15" y1="0"
                    x2="65" y2="0"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="10.6" y1="10.6"
                    x2="45.9" y2="45.9"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="0" y1="15"
                    x2="0" y2="65"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-10.6" y1="10.6"
                    x2="-45.9" y2="45.9"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-15" y1="0"
                    x2="-65" y2="0"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-10.6" y1="-10.6"
                    x2="-45.9" y2="-45.9"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <text x="80" y="5"
                    font-size="16"
                    font-family="Arial"
                    text-anchor="start">
                    أ)
                </text>
            </g>


            <!-- ب: الاتجاه الخاطئ -->
            <g transform="translate(130, 270)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    -
                </text>

            </g>

            <g transform="translate(270, 270)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    +
                </text>

            </g>

            <rect x="100" y="240"
                width="200"
                height="80"
                fill="none"
                stroke="red"
                stroke-width="3"
                rx="10"/>

            <g transform="translate(200, 270)">

                <path d="M -55 0 L 55 0"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -55 -10 Q 0 -40 55 -10"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -55 10 Q 0 40 55 10"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -45 -22 Q -20 -60 35 -27"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -45 22 Q -20 60 35 27"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -85 0 L -120 0"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M 85 0 L 120 0"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -80 -20 L -110 -35"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M 80 -20 L 110 -35"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M -80 20 L -110 35"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <path d="M 80 20 L 110 35"
                    stroke="red"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow-red)"/>

                <text x="140" y="5"
                    font-size="16"
                    font-family="Arial"
                    text-anchor="start">
                    ب)
                </text>

            </g>


            <!-- ج: الاتجاه الصحيح -->
            <g transform="translate(130, 440)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    -
                </text>

            </g>

            <g transform="translate(270, 440)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    +
                </text>

            </g>

            <g transform="translate(200, 440)">

                <path d="M 55 0 L -55 0"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 55 -10 Q 0 -40 -55 -10"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 55 10 Q 0 40 -55 10"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 35 -27 Q 20 -60 -45 -22"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 35 27 Q 20 60 -45 22"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M -120 0 L -85 0"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 120 0 L 85 0"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M -110 -35 L -80 -20"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 110 -35 L 80 -20"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M -110 35 L -80 20"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <path d="M 110 35 L 80 20"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                    marker-end="url(#arrow)"/>

                <text x="140" y="5"
                    font-size="16"
                    font-family="Arial"
                    text-anchor="start">
                    ج)
                </text>

            </g>


            <!-- د: شحنة سالبة -->
            <g transform="translate(200, 610)">

                <circle cx="0" cy="0"
                    r="15"
                    fill="none"
                    stroke="black"
                    stroke-width="2"/>

                <text x="0" y="5"
                    font-size="20"
                    font-family="Arial"
                    text-anchor="middle">
                    -
                </text>

                <line x1="0" y1="-65"
                    x2="0" y2="-15"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="45.9" y1="-45.9"
                    x2="10.6" y2="-10.6"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="65" y1="0"
                    x2="15" y2="0"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="45.9" y1="45.9"
                    x2="10.6" y2="10.6"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="0" y1="65"
                    x2="0" y2="15"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-45.9" y1="45.9"
                    x2="-10.6" y2="10.6"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-65" y1="0"
                    x2="-15" y2="0"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <line x1="-45.9" y1="-45.9"
                    x2="-10.6" y2="-10.6"
                    stroke="black"
                    stroke-width="2"
                    marker-end="url(#arrow)"/>

                <text x="80" y="5"
                    font-size="16"
                    font-family="Arial"
                    text-anchor="start">
                    د)
                </text>

            </g>

        </svg>`,

        explanation: "اتجاه خطوط المجال الكهربائي له قاعدة أساسية: تخرج خطوط المجال من الشحنة الموجبة وتدخل إلى الشحنة السالبة.\n\nفي الشكل (أ) الشحنة موجبة منفردة، ولذلك يجب أن تخرج الخطوط منها إلى الخارج، وهذا صحيح.\n\nفي الشكل (ج) الخطوط تتجه من الشحنة الموجبة إلى الشحنة السالبة، وهذا هو الاتجاه الصحيح أيضاً.\n\nفي الشكل (د) الشحنة سالبة منفردة، ولذلك تدخل خطوط المجال إليها من الخارج، وهذا صحيح.\n\nأما الشكل (ب) فيُظهر الخطوط خارجة من الشحنة السالبة ومتجهة نحو الشحنة الموجبة، وهذا عكس الاتجاه الصحيح لخطوط المجال الكهربائي.\n\nإذن الشكل غير الصحيح هو (ب)، والإجابة الصحيحة هي (ب)."
    },


    {
        question: "س 17: تم توصيل شكل كروي مشحون كهربائياً بشحنة 0.4mC بالأرض عن طريق سلك، فإذا كان الوقت المستغرق لتفريغ شحنة الشكل الكروي هي 0.2Sec فإن متوسط التيار الساري خلال السلك واتجاهه التقليدي هو:",
        options: [
            "أ) 2A من الموصل الكروي إلى الأرض",
            "ب) 2A من الأرض إلى الموصل الكروي",
            "ج) 2mA من الموصل الكروي إلى الأرض",
            "د) 2mA من الأرض إلى الموصل الكروي"
        ],
        correctAnswer: 2,
        svg: `<svg width="180" height="120" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="130" cy="40" r="25" fill="#fecdd3" stroke="#dc3545" stroke-width="2"/>
            <text x="120" y="38" font-family="Arial" font-size="16" fill="#dc3545" font-weight="bold">++</text>
            <text x="120" y="54" font-family="Arial" font-size="16" fill="#dc3545" font-weight="bold">++</text>

            <path d="M 105,40 L 50,40 L 50,80"
                fill="none"
                stroke="#2563eb"
                stroke-width="2"/>

            <line x1="35" y1="80" x2="65" y2="80"
                stroke="#000" stroke-width="3"/>
            <line x1="42" y1="86" x2="58" y2="86"
                stroke="#000" stroke-width="2"/>
            <line x1="47" y1="92" x2="53" y2="92"
                stroke="#000" stroke-width="1"/>

            <g stroke="#000" stroke-width="1.5">
                <line x1="30" y1="40" x2="30" y2="65"/>
                <polygon points="30,65 26,57 34,57" fill="#000"/>
            </g>

            <text x="10" y="30"
                font-family="Arial"
                font-size="11"
                font-weight="bold">
                تقليدي
            </text>
        </svg>`,

        explanation: "المعطيات:\nالشحنة المفرغة Q = 0.4 mC\nالزمن t = 0.2 s\n\nنستخدم العلاقة:\nI = Q / t\n\nأولاً نحول الشحنة إلى الكولوم:\n0.4 mC = 0.4 × 10^-3 C = 4 × 10^-4 C\n\nإذن:\nI = (4 × 10^-4) / 0.2\nI = 2 × 10^-3 A\n\nوبالتحويل إلى الملي أمبير:\nI = 2 mA\n\nولأن الكرة موجبة الشحنة وتقوم بتفريغ شحنتها إلى الأرض، فإن اتجاه التيار التقليدي يكون من الموصل الكروي الموجب إلى الأرض.\n\nإذن الإجابة الصحيحة هي (ج): 2 mA من الموصل الكروي إلى الأرض."
    },


    {
        question: "س 18: شحنتان نقطيتان (A) , (B) تحملان شحنة (+Q) , (-Q) على التوالي وكانت المسافة بينهما (r) والقوة المؤثرة (F)، فإذا تم نقل 25% من الشحنة (A) إلى (B) فإن القوة بين الشحنتين تصبح:",
        options: [
            "أ) 16/9 F",
            "ب) 4/3 F",
            "ج) 15/16 F",
            "د) 9/16 F"
        ],
        correctAnswer: 3,
        svg: "",

        explanation: "نستخدم قانون كولوم:\nF = k |q₁q₂| / r²\n\nفي البداية:\nq₁ = +Q\nq₂ = -Q\n\nإذن مقدار حاصل ضرب الشحنتين في البداية:\n|q₁q₂| = Q²\n\nتم نقل 25% من شحنة A إلى B، لذلك تبقى على A نسبة 75% من شحنتها:\nq₁' = 0.75Q = 3Q/4\n\nأما B فكانت شحنتها -Q، واستقبلت مقدار 25% من شحنة A، أي +Q/4:\nq₂' = -Q + Q/4\nq₂' = -3Q/4\n\nإذن القوة الجديدة:\nF' = k |(3Q/4)(-3Q/4)| / r²\nF' = k (9Q²/16) / r²\n\nوبما أن:\nF = kQ²/r²\n\nفإن:\nF' = 9/16 F\n\nإذن الإجابة الصحيحة هي (د): 9/16 F."
    },


    {
        question: "س 19: كرتان متماثلتان من النحاس معزولتان، شحنة الأولى 10 ميكروكولوم والثانية (-6) ميكروكولوم تلامستا ثم ابعدتا عن بعضهما مسافة 60cm، فإن القوة الكهربائية التي تؤثر بها كل منهما على الأخرى ونوعها تكون:",
        options: [
            "أ) 6 × 10^-4 N تنافر",
            "ب) 0.167 N تجاذب",
            "ج) 0.1 N تنافر",
            "د) 0.06 N تجاذب"
        ],
        correctAnswer: 2,
        svg: "",

        explanation: "لأن الكرتين متماثلتان وموصلتان من النحاس، فعند تلامسهما تتوزع الشحنة الكلية بينهما بالتساوي.\n\nالشحنة الكلية:\nQ = (+10) + (-6)\nQ = +4 μC\n\nوبعد التلامس تصبح شحنة كل كرة:\nq = +4/2 = +2 μC\n\nإذن أصبحت الكرتان تحملان شحنتين موجبتين، ولذلك تكون القوة بينهما قوة تنافر.\n\nنستخدم قانون كولوم:\nF = k q₁q₂ / r²\n\nحيث:\nk = 9 × 10^9 N·m²/C²\nq₁ = q₂ = 2 μC = 2 × 10^-6 C\nr = 60 cm = 0.60 m\n\nبالتعويض:\nF = (9 × 10^9)(2 × 10^-6)(2 × 10^-6) / (0.60)²\n\nF = (9 × 10^9 × 4 × 10^-12) / 0.36\nF = 0.036 / 0.36\nF = 0.1 N\n\nإذن القوة مقدارها 0.1 N وتكون قوة تنافر.\n\nالإجابة الصحيحة هي (ج)."
    },


    {
        question: "س 21: وضع إلكترون في مجال كهربائي منتظم متأثر بقوة مقدارها 4.8 × 10^-15 N فإن شدة المجال الكهربائي تساوي:",
        options: [
            "أ) 33 × 10^-5 N/C",
            "ب) 3.3 × 10^-5 N/C",
            "ج) 3 × 10^4 N/C",
            "د) 3 × 10^3 N/C"
        ],
        correctAnswer: 2,
        svg: "",

        explanation: "المعطيات:\nF = 4.8 × 10^-15 N\nشحنة الإلكترون من حيث المقدار:\n|q| = 1.6 × 10^-19 C\n\nنستخدم العلاقة بين القوة وشدة المجال الكهربائي:\nF = |q|E\n\nومنها:\nE = F / |q|\n\nبالتعويض:\nE = (4.8 × 10^-15) / (1.6 × 10^-19)\n\nوبقسمة المعاملات وطرح الأسس:\nE = 3 × 10^4 N/C\n\nإذن شدة المجال الكهربائي تساوي 3 × 10^4 N/C.\n\nالإجابة الصحيحة هي (ج)."
    }



]