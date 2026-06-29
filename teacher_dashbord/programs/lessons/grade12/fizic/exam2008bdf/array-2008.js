// مصفوفة أسئلة امتحان الفيزياء لدفعة 2008






const examQuestions = [

     {
        question: "س 39: القوة المغناطيسية المؤثرة على سلك مستقيم وضع منطبقاً على محور ملف لولبي ويمر بكل منهما تياراً شدته I تساوي صفراً:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 40: في دائرة كهربائية تحتوي على مقاومة قيمتها R وفرق الجهد بين طرفيها V، إذا زاد فرق الجهد بين طرفيها إلى الضعف زادت المقاومة إلى الضعف:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 41: الانبعاث الإشعاعي عملية عشوائية لا يمكن تحديد أي من الأنوية سوف تتفكك:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 42: الحث الكهربائي: هو عملية شحن عازل دون أي تلامس بالجسم الشاحن:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 43: إذا كانت الطاقة المستهلكة في النظام العالمي 45MJ فيكون مقدارها بالوحدة التجارية للطاقة 12.5:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 44: يوضح التصميم التوصيل الصحيح لمصباحين جهد كل منهما 240V وقدرتهما 50W و 30W بحيث يرمز L إلى السلك المكهرب و N السلك المتعادل:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 1,
        svg: `<svg width="220" height="120" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="30" x2="200" y2="30" stroke="#000" stroke-width="2"/>
                <line x1="20" y1="90" x2="200" y2="90" stroke="#000" stroke-width="2"/>
                <text x="10" y="34" font-family="Arial" font-size="12" font-weight="bold">L</text>
                <text x="10" y="94" font-family="Arial" font-size="12" font-weight="bold">N</text>
                <circle cx="80" cy="30" r="4" fill="#000"/>
                <circle cx="140" cy="30" r="4" fill="#000"/>
                <circle cx="80" cy="60" r="12" fill="none" stroke="#000" stroke-width="2"/>
                <line x1="72" y1="52" x2="88" y2="68" stroke="#000" stroke-width="1.5"/>
                <line x1="72" y1="68" x2="88" y2="52" stroke="#000" stroke-width="1.5"/>
                <circle cx="140" cy="60" r="12" fill="none" stroke="#000" stroke-width="2"/>
                <line x1="132" y1="52" x2="148" y2="68" stroke="#000" stroke-width="1.5"/>
                <line x1="132" y1="68" x2="148" y2="52" stroke="#000" stroke-width="1.5"/>
                <path d="M 80,30 L 80,48 M 80,72 L 80,90" stroke="#000" stroke-width="1.5"/>
                <path d="M 140,30 L 140,48 M 140,72 L 140,90" stroke="#000" stroke-width="1.5"/>
                <circle cx="80" cy="90" r="4" fill="#000"/>
                <circle cx="140" cy="90" r="4" fill="#000"/>
                <circle cx="110" cy="90" r="5" fill="#fff" stroke="#000"/>
                <line x1="105" y1="90" x2="115" y2="85" stroke="#000" stroke-width="2"/>
              </svg>`
    },
    {
        question: "س 45: لتحديد قطبية العينة الفولاذية الممغنطة باستخدام قاعدة قبضة اليد اليمنى يشير أصبع الإبهام إلى اتجاه التيار الكهربائي في الملف اللولبي:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 46: تبلغ القوة الدافعة الكهربائية المستحثة أقصاها عندما يكون مستوى الملف موازياً لخطوط القوة المغناطيسية:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 47: في محرك التيار المستمر يستمر الملف في الحركة باتجاه واحد نتيجة تغير اتجاه التيار المار في الملف كل نصف دورة:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 48: المجال المغناطيسي: هو المنطقة التي تبذل فيها قوة مغناطيسية على أي جسم مغناطيسي يوضع داخل تأثير المجال:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 49: يتناسب شدة المجال الكهربائي تناسباً طردياً مع مقلوب البعد راديان 1/r حيث r هو بعد النقطة المراد قياس شدة المجال الكهربائي عندها:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 50: إذا سرت شحنة مقدرها 3.75 × 10^4 C خلال سخان كهربائي وكانت كمية الطاقة الكهربائية المحولة إلى حرارة 9MJ، فإن فرق الجهد عبر طرفي السخان يساوي 240V:",
        options: [
            "أ) صح",
            "ب) خطأ"
        ],
        correctAnswer: 0,
        svg: ""
    }

    
    ,
    {
        question: "س 16: ............ هو الاسم الذي يطلق على الجزيئات المكونة للنواة:",
        options: [
            "أ) الأيونات",
            "ب) الإلكترونات",
            "ج) النويدات",
            "د) النكليونات"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 17: ملف مستطيل عدد لفته 300 لفة طوله 25cm وعرضه 15cm فإذا كان الملف يدور بسرعة منتظمة وفي مجال مغناطيسي كثافة فيضه 0.365T فكانت القوة الدافعة المستحثة خلال 1/4 دورة من بدء دوران الملف من المستوى الرأسي (العمودي) على المجال 492.75V فإن الملف يدور بـ:",
        options: [
            "أ) 1800 دورة في الدقيقة",
            "ب) 7200 دورة في الدقيقة",
            "ج) 1000 دورة في الدقيقة",
            "د) 120 دورة في الدقيقة"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 18: يستخدم أنبوب وعداد جيجر مولر للكشف عن الإشعاع فإذا اشتمل الإشعاع على أشعة جاما سيتناقص معدل التعداد عندما يكون:",
        options: [
            "أ) نوع العنصر الماص: ألومنيوم / سمك العنصر الماص: واحد متر",
            "ب) نوع العنصر الماص: ورق / سمك العنصر الماص: عدة سنتمترات",
            "ج) نوع العنصر الماص: ألومنيوم / سمك العنصر الماص: عدة سنتمترات",
            "د) نوع العنصر الماص: رصاص / سمك العنصر الماص: عدة سنتمترات"
        ],
        correctAnswer: 3,
        svg: ""
    },
   
   
    {
        question: "س 21: تتصل محطة لتوليد الكهرباء بمصنع يبعد عنها مسافة 2.5km بسلكين فإذا كان فرق الجهد بين طرفي السلكين عند المحطة 240V وبين الطرفين عند المصنع 220V وكان المصنع يستخدم تيار شدته 80A فإن نصف قطر السلك المستخدم إذا علمت أن المقاومة النوعية لمادة السلك 1.57 × 10^-8 Ω.m يساوي:",
        options: [
            "أ) 0.005 cm",
            "ب) 1.5 cm",
            "ج) 0.7 cm",
            "د) 1 cm"
        ],
        correctAnswer: 3,
        svg: `<svg width="180" height="100" viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
                <!-- رسم الدائرة الموضح بالهامش اليدوي -->
                <rect x="20" y="25" width="30" height="50" fill="none" stroke="#22c55e" stroke-width="1.5"/>
                <line x1="20" y1="35" x2="10" y2="35" stroke="#22c55e"/>
                <line x1="20" y1="65" x2="10" y2="65" stroke="#22c55e"/>
                <text x="25" y="55" font-family="Arial" font-size="8" fill="#000">240V</text>
                
                <!-- أسلاك التوصيل والمقاومات -->
                <line x1="50" y1="35" x2="80" y2="35" stroke="#000" stroke-width="1.5"/>
                <rect x="80" y="30" width="25" height="10" fill="#fff" stroke="#dc3545" stroke-width="1.5"/>
                <text x="85" y="38" font-family="Arial" font-size="8" fill="#dc3545">Rs</text>
                <line x1="105" y1="35" x2="135" y2="35" stroke="#000" stroke-width="1.5"/>
                
                <line x1="50" y1="65" x2="135" y2="65" stroke="#000" stroke-width="1.5"/>
                
                <!-- حمل المصنع -->
                <rect x="135" y="30" width="30" height="40" fill="none" stroke="#2563eb" stroke-width="1.5"/>
                <text x="142" y="54" font-family="Arial" font-size="8" fill="#2563eb">RL</text>
              </svg>`
    },
    {
        question: "س 22: يصبح القضيب الزجاجي موجب الشحن عند دلكه بالحرير لأنه:",
        options: [
            "أ) يكتسب إلكترونات",
            "ب) يكتسب بروتونات",
            "ج) يكتسب بروتونات ويققد إلكترونات",
            "د) يفقد إلكترونات"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 23: قذف إلكترون في اتجاه مواز لسلك طويل يحمل تياراً كهربائياً شدته 5A فإذا علمت أن سرعة الإلكترون 10^5 m/s وبعده عن السلك 10mm فإن القوة المغناطيسية المؤثرة عليه تساوي:",
        options: [
            "أ) 3.2 × 10^-18 N",
            "ب) صفراً",
            "ج) 5 × 10^-12 N",
            "د) 1.6 × 10^-18 N"
        ],
        correctAnswer: 3,
        svg: ""
    }
,
    {
        question: "س 24: ملف دائري نصف قطر لفاته r يمر فيه تيار كهربائي يولد مجالاً مغناطيسياً عند مركزه شدته B، سحب من طرفيه بشكل عمودي على مستوى لفاته فأصبح ملفاً لولبياً طوله ثلاثة أمثال نصف قطره ومر به نفس التيار، فإن شدة المجال المغناطيسي عند نقطة بداخله على محوره تساوي:",
        options: [
            "أ) B لولبي = B دائري",
            "ب) B لولبي = 1/3 B دائري",
            "ج) B لولبي = 3 B دائري",
            "د) B لولبي = 2/3 B دائري"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 25: القدرات الاختراقية النسبية لأنواع الإشعاع الثلاثة تكون مرتبة كالآتي:",
        options: [
            "أ) alpha > beta > gamma",
            "ب) alpha = beta = gamma",
            "ج) gamma < alpha < beta",
            "د) alpha < beta < gamma"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 26: أي مما يلي لا يؤثر على مقدار القوة الدافعة الكهربية المستحثة في الحث الكهرومغناطيسي:",
        options: [
            "أ) قوة المجال المغناطيسي المرتبط بالملف",
            "ب) مقاومة الملف الذي يقطع المجال المغناطيسي",
            "ج) عدد اللفات في الملف",
            "د) السرعة التي يقطع بها الملف المجال المغناطيسي"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 27: الجسيمات المكونة للنواة يطلق عليها اسم:",
        options: [
            "أ) الأيونات",
            "ب) الإلكترونات",
            "ج) النويدات",
            "د) النكليونات"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 28: ملف مستطيل عدد لفاته 300 لفة وطوله 25cm وعرضه 15cm يدور بسرعة منتظمة في مجال مغناطيسي كثافة فيضه 0.365T، فكانت القوة الدافعة المستحثة خلال ربع لفة من بدء الدوران من الوضع العمودي تساوي 492.75V، فإن الملف يدور بمعدل:",
        options: [
            "أ) 1800 دورة في الدقيقة",
            "ب) 7200 دورة في الدقيقة",
            "ج) 1000 دورة في الدقيقة",
            "د) 120 دورة في الدقيقة"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 29: يستخدم أنبوب وعداد جيجر مولر للكشف عن الإشعاع، فإذا اشتمل الإشعاع على أشعة جاما سيتناقص معدل التعداد عندما يكون نوع وسمك العنصر الماص كالتالي:",
        options: [
            "أ) ألومنيوم / واحد متر",
            "ب) ورق / عدة سنتمترات",
            "ج) ألومنيوم / عدة سنتمترات",
            "د) رصاص / عدة سنتمترات"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 30: ثلاثة مصابيح متماثلة وصلت مرة على التوالي ومرة أخرى على التوازي مع نفس المصدر، فإن النسبة بين القدرة الكهربائية المستنفذة في المصابيح في الحالتين توالي وتوازي هي:",
        options: [
            "أ) 3 : 6",
            "ب) 3 : 9",
            "ج) 1 : 9",
            "د) 3 : 1"
        ],
        correctAnswer: 2,
        svg: ""
    },
    {
        question: "س 31: يوضح الرسم البياني سلسلة اضمحلال إشعاعي للنواة A وصولاً للنواة E، فإن عدد جسيمات ألفا وبيتا المنبعثة خلال هذه المراحل على الترتيب هو:",
        options: [
            "أ) 1 بيتا ، 2 ألفا",
            "ب) 4 بيتا ، 3 ألفا",
            "ج) 2 بيتا ، 2 ألفا",
            "د) 2 بيتا ، 1 ألفا"
        ],
        correctAnswer: 1,
        svg: `<svg width="250" height="200" viewBox="0 0 250 200" xmlns="http://www.w3.org/2000/svg">
                <line x1="40" y1="20" x2="40" y2="170" stroke="#000" stroke-width="1.5"/>
                <line x1="40" y1="170" x2="220" y2="170" stroke="#000" stroke-width="1.5"/>
                <text x="15" y="15" font-family="Arial" font-size="10" font-weight="bold">العدد النووي</text>
                <text x="170" y="185" font-family="Arial" font-size="10" font-weight="bold">العدد البروتوني</text>
                <g stroke="#666" stroke-width="0.5" font-family="Arial" font-size="8">
                    <text x="22" y="30">240</text><line x1="35" y1="28" x2="40" y2="28"/>
                    <text x="22" y="60">238</text><line x1="35" y1="58" x2="40" y2="58"/>
                    <text x="22" y="90">234</text><line x1="35" y1="88" x2="40" y2="88"/>
                    <text x="22" y="120">230</text><line x1="35" y1="118" x2="40" y2="118"/>
                    <text x="22" y="150">226</text><line x1="35" y1="148" x2="40" y2="148"/>
                    <text x="40" y="180">86</text>
                    <text x="75" y="180">88</text>
                    <text x="110" y="180">90</text>
                    <text x="145" y="180">92</text>
                </g>
                <path d="M 145,58 L 110,88 L 127,88 L 145,88 L 110,148" fill="none" stroke="#2563eb" stroke-width="2"/>
                <circle cx="145" cy="58" r="4" fill="#dc3545"/><text x="152" y="55" font-family="Arial" font-weight="bold" font-size="11">A</text>
                <circle cx="110" cy="148" r="4" fill="#22c55e"/><text x="100" y="160" font-family="Arial" font-weight="bold" font-size="11">E</text>
              </svg>`
    },
    {
        question: "س 32: تتصل محطة لتوليد الكهرباء بمصنع يبعد عنها مسافة 2.5km بسلكين، فإذا كان فرق الجهد عند المحطة 240V وعند المصنع 220V والتيار المستخدم 80A، فإن نصف قطر السلك المستخدم يساوي علماً بأن المقاومة النوعية للسلك هي 1.57 × 10^-8 Ω.m:",
        options: [
            "أ) 0.005 cm",
            "ب) 1.5 cm",
            "ج) 0.7 cm",
            "د) 1 cm"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 33: يصبح القضيب الزجاجي موجب الشحنة عند دلكه بالحرير لأنه:",
        options: [
            "أ) يكتسب إلكترونات",
            "ب) يكتسب بروتونات",
            "ج) يكتسب بروتونات ويفقد إلكترونات",
            "د) يفقد إلكترونات"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 34: قذف إلكترون في اتجاه مواز لسلك طويل يحمل تياراً كهربائياً شدته 5A، فإذا كانت سرعة الإلكترون 10^5 m/s وبعده عن السلك 10mm، فإن القوة المغناطيسية المؤثرة عليه تساوي:",
        options: [
            "أ) 3.2 × 10^-18 N",
            "ب) صفراً",
            "g) 5 × 10^-12 N",
            "د) 1.6 × 10^-18 N"
        ],
        correctAnswer: 1,
        svg: ""
    },
    {
        question: "س 35: إذا تم استعمال جميع الأجهزة في وقت واحد لمدة 30min وكانت تكلفة الطاقة الكهربائية 20 درهماً لكل كيلوات.ساعة، فإن تكاليف تشغيل المولد وأقصى تيار يتحمله الكابل عند جهد 250V هما على الترتيب:",
        options: [
            "أ) 100 درهم - 0.04 A",
            "ب) 6000 درهم - 0.04 A",
            "ج) 1000 درهم - 40 A",
            "د) 100 درهم - 40 A"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 36: يمثل الرسم البياني العلاقة بين شدة التيار وفرق الجهد لسلك منتظم المقطع طوله 100cm ونصف قطره 0.05mm، فإن مقدار مقاومته النوعية تساوي:",
        options: [
            "أ) 5 × 10^-8 Ω.m",
            "ب) 3.92 × 10^-7 Ω.m",
            "ج) 1.57 × 10^-7 Ω.m",
            "د) 5 × 10^-10 Ω.m"
        ],
        correctAnswer: 2,
        svg: `<svg width="220" height="140" viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="20" x2="30" y2="110" stroke="#000" stroke-width="1.5"/>
                <line x1="30" y1="110" x2="190" y2="110" stroke="#000" stroke-width="1.5"/>
                <text x="15" y="15" font-family="Arial" font-size="10" font-weight="bold">I(A)</text>
                <text x="195" y="115" font-family="Arial" font-size="10" font-weight="bold">V(Volt)</text>
                <line x1="30" y1="110" x2="160" y2="40" stroke="#000" stroke-width="2"/>
                <line x1="120" y1="110" x2="120" y2="62" stroke="#dc3545" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="30" y1="62" x2="120" y2="62" stroke="#dc3545" stroke-width="1" stroke-dasharray="2,2"/>
                <text x="117" y="122" font-family="Arial" font-size="9">6</text>
                <text x="15" y="65" font-family="Arial" font-size="9">0.3</text>
              </svg>`
    },
    {
        question: "س 37: كل الطرق التالية تستخدم لإزالة مغنطة مغنطيس ما عدا:",
        options: [
            "أ) التيار المستمر",
            "ب) التيار المتردد",
            "ج) التسخين",
            "د) الطرق"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 38: كتلة من مادة مشعة تزن 10N وعمر النصف لها 5 أيام، فإن وزنها قبل ثلاثة أضعاف عمر النصف يساوي:",
        options: [
            "أ) 1.25 N",
            "ب) 80 N",
            "ج) 40 N",
            "د) 2.5 N"
        ],
        correctAnswer: 1,
        svg: ""
    },
   

  {
        question: "س 1: مقدار الزيادة في الكتلة عندما يمتص 1kg ماء (4200J) حرارة ليتسبب في رفع درجة الحرارة 1K هو:",
        options: [
            "أ) 2.15 × 10^-13 kg",
            "ب) 3.78 × 10^-4 kg",
            "ج) 1.4 × 10^-5 kg",
            "د) 4.7 × 10^-14 kg"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
    question: "س 34: من الشكل التالي، لقياس فرق الجهد عبر المقاومة (S) يجب توصيل الفولتمتر عند:",
    options: ["أ) Q فقط", "ب) P فقط", "ج) W أو P", "د) P أو Q"],
    correctAnswer: 3,
    svg: `<svg width="240" height="180" viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="140" height="130" fill="none" stroke="#000" stroke-width="2"/>
        <circle cx="110" cy="20" r="6" fill="#000"/>
        <line x1="100" y1="12" x2="120" y2="12" stroke="#000" stroke-width="2"/>
        <line x1="105" y1="7" x2="115" y2="7" stroke="#000" stroke-width="1"/>
        <circle cx="110" cy="50" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="104" y="54" font-family="Arial" font-size="12" font-weight="bold">W</text>
        <line x1="40" y1="50" x2="96" y2="50" stroke="#000" stroke-width="2"/>
        <line x1="124" y1="50" x2="180" y2="50" stroke="#000" stroke-width="2"/>
        <circle cx="110" cy="90" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="105" y="94" font-family="Arial" font-size="12" font-weight="bold">Q</text>
        <line x1="40" y1="90" x2="96" y2="90" stroke="#000" stroke-width="2"/>
        <line x1="124" y1="90" x2="180" y2="90" stroke="#000" stroke-width="2"/>
        <rect x="90" y="120" width="40" height="16" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="107" y="132" font-family="Arial" font-size="12" font-weight="bold">S</text>
        <line x1="40" y1="160" x2="96" y2="160" stroke="#000" stroke-width="2"/>
        <line x1="124" y1="160" x2="180" y2="160" stroke="#000" stroke-width="2"/>
        <line x1="40" y1="150" x2="40" y2="160" stroke="#000" stroke-width="2"/>
        <line x1="180" y1="150" x2="180" y2="160" stroke="#000" stroke-width="2"/>
        <circle cx="110" cy="160" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
        <text x="105" y="164" font-family="Arial" font-size="12" font-weight="bold">P</text>
    </svg>`
},
    {
        question: "س 4: يستخدم الحديد المطاوع في قلب المحول الكهربائي لأنه:",
        options: [
            "أ) يضمن رابطة لتدفق مغناطيسي أفضل بين الملفين",
            "ب) له مقاومة كهربائية منخفضة",
            "ج) لن ينصهر بسهولة عندما يكون التيار المستحث أكبر من اللازم",
            "د) يوصل التيار المستحث بشكل جيد"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
        question: "س 5: كل مما يلي يكافئ وحدة قياس emf المستحثة ماعدا:",
        options: [
            "أ) T.m^2 / Sec",
            "ب) H.A / sec",
            "ج) wb / sec",
            "د) H.A / C"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 6: محول نموذجي خافض للجهد نسبة التحويل فيه (25%) يتصل بمنبع تيار متردد جهده (240V)، فإذا كان تيار ملفه الثانوي (1.2A) فإن جهد ملفه الثانوي وتيار الملف الابتدائي هما على الترتيب:",
        options: [
            "أ) 3A , 20V",
            "ب) 1A , 20V",
            "ج) 0.3A , 60V",
            "د) 3A , 12V"
        ],
        correctAnswer: 2,
        svg: ""
    },
    {
        question: "س 7: كل العبارات الآتية صحيحة ماعدا:",
        options: [
            "أ) معادلة الكتلة الطاقة لأينشتاين تكون أكثر نفعاً عند تطبيقها على التفاعلات النووية والنشاط الإشعاعي",
            "ب) الاندماج النووي هو العملية التي تندمج فيها نويدات أخف وزناً معاً لتكوين نواة أثقل مع إطلاق طاقة",
            "ج) الانشطار النووي هو العملية التي تتجزأ فيها النويدات غير المستقرة الثقيلة لإنتاج طاقة",
            "د) الانشطار والاندماج النووي من الصعب التحكم فيهما"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 8: مقاومة سلك ما هي (R) وطوله ومساحة مقطعه المستعرض هما (L) , (A) على التوالي، عند زيادة طوله إلى (3L) ومساحة مقطعه المستعرض إلى (2A) تصبح مقاومته:",
        options: [
            "أ) 3R",
            "ب) 2/3 R",
            "ج) 2R",
            "د) 3/2 R"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 9: مقاومتان (8Ω , R) وصلتا على التوازي كانت المقاومة المكافئة لهما تساوي (25%) من المقاومة المكافئة لهما على التوالي، فإن قيمة المقاومة (R):",
        options: [
            "أ) 16Ω",
            "ب) 4Ω",
            "ج) 8Ω",
            "د) 36Ω"
        ],
        correctAnswer: 2,
        svg: ""
    },
    {
        question: "س 10: كل مما يلي من استخدامات المغناطيسيات الكهربائية ما عدا:",
        options: [
            "أ) مولد التيار المتردد",
            "ب) قاطع الدائرة الكهربائية",
            "ج) المفتاح الريشي",
            "د) المرحل المغناطيسي"
        ],
        correctAnswer: 0,
        svg: ""
    },
{
    question: "س 44: في الدائرة الكهربائية الموضحة بالرسم، إذا علمت أن القدرة التي تستهلكها المقاومتان (R و ⅓R) والواقعتان بين النقطتين A, B لا تتأثر بفتح المفتاح (K) أو غلقه، فإن قيمة المقاومة (R) تساوي:",
    options: ["أ) 6 Ω", "ب) 1 Ω", "ج) 2 Ω", "د) 3 Ω"],
    correctAnswer: 2,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g stroke="#000000" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 150,100 L 220,100" />
            <path d="M 280,100 L 450,100 L 450,165" />
            <path d="M 150,260 L 450,260 L 450,195" />
            <path d="M 150,100 L 150,140" />
            <path d="M 150,220 L 150,260" />
            <path d="M 290,100 L 290,140" />
            <path d="M 290,220 L 290,260" />
            <circle cx="220" cy="100" r="4" fill="#000000" />
            <circle cx="280" cy="100" r="4" fill="#000000" />
            <line x1="220" y1="100" x2="270" y2="75" />
            <line x1="430" y1="165" x2="470" y2="165" />
            <line x1="440" y1="175" x2="460" y2="175" stroke-width="5" />
            <line x1="430" y1="185" x2="470" y2="185" />
            <line x1="440" y1="195" x2="460" y2="195" stroke-width="5" />
            <rect x="340" y="85" width="50" height="30" fill="#ffffff" />
            <rect x="275" y="140" width="30" height="80" fill="#ffffff" />
            <rect x="135" y="140" width="30" height="80" fill="#ffffff" />
        </g>
        <g fill="#000000">
            <circle cx="315" cy="100" r="6" />
            <circle cx="315" cy="260" r="6" />
        </g>
        <g font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#000000">
            <text x="240" y="60">K</text>
            <text x="90" y="185">⅓ R</text>
            <text x="245" y="185">R</text>
            <text x="310" y="85">A</text>
            <text x="350" y="70">1 Ω</text>
            <text x="485" y="185">E</text>
            <text x="310" y="295">B</text>
        </g>
    </svg>`
},
{
    question: "س 35: في الشكل الموضح، قضيب مشحون بشحنة سالبة يقترب من الطرف P لقضيب فلزي معزول. فإن العبارة الصحيحة لوصف حركة الشحنات هي:",
    options: [
        "أ) تنتقل الإلكترونات في القضيب الفلزي من الطرف P للطرف Q",
        "ب) تنتقل الشحنات الموجبة في القضيب المشحون من P إلى الطرف Q",
        "ج) تنتقل الشحنات الموجبة في القضيب الفلزي من الطرف Q إلى الطرف P",
        "د) تقفز الإلكترونات من القضيب المشحون إلى القضيب الفلزي عبر الفجوة"
    ],
    correctAnswer: 0,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 230" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g transform="translate(20, 15)">
            <g transform="translate(220, 20) rotate(-25)">
                <rect x="0" y="0" width="120" height="22" rx="4" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3" />
                <text x="60" y="-9" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">قضيب مشحون</text>
                <g font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="#000000" text-anchor="middle">
                    <text x="15" y="16">-</text>
                    <text x="35" y="16">-</text>
                    <text x="55" y="16">-</text>
                    <text x="75" y="16">-</text>
                    <text x="95" y="16">-</text>
                </g>
            </g>
            <g transform="translate(60, 100)">
                <rect x="0" y="0" width="160" height="28" rx="5" fill="#f5f5f5" stroke="#000000" stroke-width="1.5" />
                <path d="M 152 0 A 8 14 0 0 1 152 28" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="2,2" />
                <path d="M 160 0 A 8 14 0 0 1 160 28" fill="none" stroke="#000000" stroke-width="1.5" />
                <text x="80" y="44" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">قضيب فلزي</text>
                <text x="-14" y="19" font-family="Georgia, serif" font-size="16" font-style="italic" font-weight="bold" fill="#000000" text-anchor="middle">Q</text>
                <text x="174" y="19" font-family="Georgia, serif" font-size="16" font-style="italic" font-weight="bold" fill="#000000" text-anchor="middle">P</text>
            </g>
            <line x1="210" y1="95" x2="235" y2="70" stroke="#999999" stroke-width="1" stroke-dasharray="3,3" />
        </g>
    </svg>`
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
    svg: `<svg width="400" height="700" viewBox="0 0 400 700" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white"/><defs><marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="black"/></marker><marker id="arrow-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="red"/></marker></defs><g transform="translate(200, 100)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">+</text><line x1="0" y1="-15" x2="0" y2="-65" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="10.6" y1="-10.6" x2="45.9" y2="-45.9" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="15" y1="0" x2="65" y2="0" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="10.6" y1="10.6" x2="45.9" y2="45.9" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="0" y1="15" x2="0" y2="65" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-10.6" y1="10.6" x2="-45.9" y2="45.9" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-15" y1="0" x2="-65" y2="0" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-10.6" y1="-10.6" x2="-45.9" y2="-45.9" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><text x="80" y="5" font-size="16" font-family="Arial" text-anchor="start">أ)</text></g><g transform="translate(130, 270)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">-</text></g><g transform="translate(270, 270)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">+</text></g><rect x="100" y="240" width="200" height="80" fill="none" stroke="red" stroke-width="3" rx="10"/><g transform="translate(200, 270)"><path d="M -55 0 L 55 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -55 -10 Q 0 -40 55 -10" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -55 10 Q 0 40 55 10" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -45 -22 Q -20 -60 35 -27" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -45 22 Q -20 60 35 27" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -85 0 L -120 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M 85 0 L 120 0" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -80 -20 L -110 -35" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M 80 -20 L 110 -35" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M -80 20 L -110 35" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><path d="M 80 20 L 110 35" stroke="red" stroke-width="2" fill="none" marker-end="url(#arrow-red)"/><text x="140" y="5" font-size="16" font-family="Arial" text-anchor="start">ب)</text></g><g transform="translate(130, 440)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">-</text></g><g transform="translate(270, 440)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">+</text></g><g transform="translate(200, 440)"><path d="M 55 0 L -55 0" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 55 -10 Q 0 -40 -55 -10" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 55 10 Q 0 40 -55 10" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 35 -27 Q 20 -60 -45 -22" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 35 27 Q 20 60 -45 22" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M -120 0 L -85 0" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 120 0 L 85 0" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M -110 -35 L -80 -20" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 110 -35 L 80 -20" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M -110 35 L -80 20" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><path d="M 110 35 L 80 20" stroke="black" stroke-width="2" fill="none" marker-end="url(#arrow)"/><text x="140" y="5" font-size="16" font-family="Arial" text-anchor="start">ج)</text></g><g transform="translate(200, 610)"><circle cx="0" cy="0" r="15" fill="none" stroke="black" stroke-width="2"/><text x="0" y="5" font-size="20" font-family="Arial" text-anchor="middle">-</text><line x1="0" y1="-65" x2="0" y2="-15" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="45.9" y1="-45.9" x2="10.6" y2="-10.6" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="65" y1="0" x2="15" y2="0" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="45.9" y1="45.9" x2="10.6" y2="10.6" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="0" y1="65" x2="0" y2="15" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-45.9" y1="45.9" x2="-10.6" y2="10.6" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-65" y1="0" x2="-15" y2="0" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><line x1="-45.9" y1="-45.9" x2="-10.6" y2="-10.6" stroke="black" stroke-width="2" marker-end="url(#arrow)"/><text x="80" y="5" font-size="16" font-family="Arial" text-anchor="start">د)</text></g></svg>`
},
{
        question: "س 12: تمثيلاً لخطوط المجال المغناطيسي لسلكين متوازيين يحملان تياراً كهربائياً، فإن كثافة الفيض المغناطيسي عند النقطة (A) التي تقع في منتصف المسافة بينهما تساوي:",
        options: [
            "أ) B = 2 × 10^-7 I (1/r1 - 1/r2) تجاذب",
            "ب) B = 2 × 10^-7 I (1/r1 + 1/r2) تنافر",
            "ج) B = 2 × 10^-7 I (1/r1 + 1/r2) تجاذب",
            "د) B = 2 × 10^-7 I (1/r1 - 1/r2) تنافر"
        ],
        correctAnswer: 0,
        svg: `<svg width="240" height="100" viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="50" r="25" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="60" cy="50" r="15" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="60" cy="50" r="3" fill="#000"/>
                <text x="57" y="53" font-family="Arial" font-size="12" font-weight="bold" fill="#000">X</text>
                <circle cx="180" cy="50" r="25" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="180" cy="50" r="15" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="180" cy="50" r="3" fill="#000"/>
                <text x="177" y="53" font-family="Arial" font-size="12" font-weight="bold" fill="#000">X</text>
                <circle cx="120" cy="50" r="3" fill="#000"/>
                <text x="117" y="42" font-family="Arial" font-size="12" font-weight="bold">A</text>
                <path d="M 60,20 Q 90,25 120,50" fill="none" stroke="#dc3545" stroke-width="1.5" stroke-dasharray="3,3"/>
                <path d="M 180,20 Q 150,25 120,50" fill="none" stroke="#dc3545" stroke-width="1.5" stroke-dasharray="3,3"/>
              </svg>`
    },
    {
        question: "س 13: أي مما يلي يصف الشكل الصحيح لقراءات الأميتر والفولتمتر:",
        options: [
            "أ) V2 < V1 , A2 > A1",
            "ب) V2 = V1 , A2 = A1",
            "ج) V2 > V1 , A2 = A1",
            "د) V2 = V1 , A2 < A1"
        ],
        correctAnswer: 2,
        svg: `<svg width="280" height="100" viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="20" y1="70" x2="260" y2="70" stroke="#000" stroke-width="2"/>
                <circle cx="40" cy="70" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
                <text x="35" y="74" font-family="Arial" font-size="12" font-weight="bold">A1</text>
                <rect x="75" y="60" width="40" height="20" fill="#fff" stroke="#000" stroke-width="2"/>
                <text x="83" y="75" font-family="Arial" font-size="11">5Ω</text>
                <rect x="155" y="60" width="40" height="20" fill="#fff" stroke="#000" stroke-width="2"/>
                <text x="163" y="75" font-family="Arial" font-size="11">10Ω</text>
                <circle cx="230" cy="70" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
                <text x="225" y="74" font-family="Arial" font-size="12" font-weight="bold">A2</text>
                <path d="M 70,70 L 70,30 L 120,30 L 120,70" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="95" cy="30" r="12" fill="#fff" stroke="#000" stroke-width="1.5"/>
                <text x="91" y="34" font-family="Arial" font-size="12" font-weight="bold">V1</text>
                <path d="M 150,70 L 150,30 L 200,30 L 200,70" fill="none" stroke="#000" stroke-width="1.5"/>
                <circle cx="175" cy="30" r="12" fill="#fff" stroke="#000" stroke-width="1.5"/>
                <text x="171" y="34" font-family="Arial" font-size="12" font-weight="bold">V2</text>
              </svg>`
    },
    {
        question: "س 14: سلك مستقيم طوله (3m) يراد عمل منه ملف لولبي بحيث تكون لغاته متراصة تماماً، محيط اللفة (2.5cm) وسمكها (0.5mm)، لفت اللفات على أسطوانة من الحديد نفاذيته قدر نفاذية الفراغ (500 مرة) ووصلت إلى مصدر جهد يعطي تياراً شدته (1A)، فإن كثافة الفيض المغناطيسي عند نقطة على محوره تساوي:",
        options: [
            "أ) 2 × 10^6 T",
            "ب) 7.5 × 10^-2 T",
            "ج) 2.5 × 10^-2 T",
            "د) 0.0126 × 10^2 T"
        ],
        correctAnswer: 3,
        svg: ""
    },
    {
        question: "س 15: النسبة المئوية للقدرة المفقودة في محطة توليد الكهرباء ذات (25KV) إذا علمت أن مقاومة الموصلات (5Ω) والتيار الساري (10A) تساوي:",
        options: [
            "أ) % 0.2",
            "ب) % 2",
            "ج) % 0.02",
            "د) % 5"
        ],
        correctAnswer: 0,
        svg: ""
    },
    {
    question: "س 19: في الشكل التالي، إذا كانت المقاومة الداخلية للمصدر مهملة، يكون للتيار الكهربائي أقل قيمة عند غلق المفتاح:",
    options: ["أ) K₁", "ب) K₂", "ج) K₃", "د) K₄"],
    correctAnswer: 1,
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="100%">
        <rect width="100%" height="100%" fill="#ffffff" />
        <g font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#000000">
            <text x="210" y="45">K₁</text>
            <text x="145" y="225">K₂</text>
            <text x="325" y="195">K₃</text>
            <text x="325" y="315">K₄</text>
            <text x="295" y="105">R</text>
            <text x="415" y="255">R</text>
        </g>
        <g stroke="#000000" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M 180 60 L 100 60 L 100 440 L 220 440" />
            <path d="M 280 60 L 400 60 L 400 170" />
            <path d="M 180 120 L 230 120" />
            <path d="M 230 120 L 240 120 L 244 110 L 252 130 L 260 110 L 268 130 L 276 110 L 284 130 L 288 120 L 350 120" />
            <path d="M 350 120 L 350 190" /> 
            <path d="M 180 120 L 180 210" />
            <path d="M 180 270 L 180 440" />
            <path d="M 180 190 L 290 190" />
            <path d="M 350 190 L 400 190" />
            <path d="M 180 320 L 290 320" />
            <path d="M 350 320 L 400 320" />
            <path d="M 240 190 L 240 320" />
            <path d="M 400 170 L 400 210" />
            <path d="M 400 320 L 400 440 L 280 440" />
            <path d="M 400 210 L 400 220 L 390 224 L 410 232 L 390 240 L 410 248 L 390 256 L 410 264 L 400 268 L 400 290" />
            <g transform="translate(220, 425)">
                <line x1="10" y1="0" x2="10" y2="30" stroke-width="4" />
                <line x1="20" y1="7" x2="20" y2="23" stroke-width="7" />
                <line x1="30" y1="0" x2="30" y2="30" stroke-width="4" />
                <line x1="40" y1="7" x2="40" y2="23" stroke-width="7" />
            </g>
            <circle cx="180" cy="60" r="3" fill="#000000" />
            <circle cx="230" cy="60" r="3" fill="#000000" />
            <line x1="180" y1="60" x2="225" y2="45" stroke-width="3" />
            <circle cx="180" cy="210" r="3" fill="#000000" />
            <circle cx="180" cy="270" r="3" fill="#000000" />
            <line x1="180" y1="270" x2="165" y2="225" stroke-width="3" />
            <circle cx="290" cy="190" r="3" fill="#000000" />
            <circle cx="350" cy="190" r="3" fill="#000000" />
            <line x1="290" y1="190" x2="345" y2="175" stroke-width="3" />
            <circle cx="290" cy="320" r="3" fill="#000000" />
            <circle cx="350" cy="320" r="3" fill="#000000" />
            <line x1="290" y1="320" x2="345" y2="305" stroke-width="3" />
        </g>
    </svg>`
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
                <path d="M 105,40 L 50,40 L 50,80" fill="none" stroke="#2563eb" stroke-width="2"/>
                <line x1="35" y1="80" x2="65" y2="80" stroke="#000" stroke-width="3"/>
                <line x1="42" y1="86" x2="58" y2="86" stroke="#000" stroke-width="2"/>
                <line x1="47" y1="92" x2="53" y2="92" stroke="#000" stroke-width="1"/>
                <g stroke="#000" stroke-width="1.5">
                    <line x1="30" y1="40" x2="30" y2="65"/>
                    <polygon points="30,65 26,57 34,57" fill="#000"/>
                </g>
                <text x="10" y="30" font-family="Arial" font-size="11" font-weight="bold">تقليدي</text>
              </svg>`
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
        svg: ""
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
        svg: ""
    },
    {
        question: "س 20: إذا كانت شدة المجال المغناطيسي عند النقطة (C) الناشئ عن تيار كهربائي يسري في سلك مستقيم طويل يساوي 15mT كما مبين بالرسم، فإن مقدارها عند النقطة (D) بالوحدة نفسها يساوي:",
        options: [
            "أ) 45 mT",
            "ب) 3.75 mT",
            "ج) 5 mT",
            "د) 20 mT"
        ],
        correctAnswer: 1,
        svg: `<svg width="260" height="120" viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg">
                <line x1="30" y1="10" x2="30" y2="110" stroke="#000" stroke-width="3"/>
                <polygon points="30,10 26,20 34,20" fill="#000"/>
                <text x="10" y="105" font-family="Arial" font-size="11" font-weight="bold">I(A)</text>
                <circle cx="80" cy="60" r="3" fill="#dc3545"/>
                <text x="77" y="75" font-family="Arial" font-size="12" font-weight="bold" fill="#dc3545">C</text>
                <circle cx="200" cy="60" r="3" fill="#2563eb"/>
                <text x="197" y="75" font-family="Arial" font-size="12" font-weight="bold" fill="#2563eb">D</text>
                <g stroke="#666" stroke-width="1" stroke-dasharray="2,2">
                    <line x1="30" y1="60" x2="200" y2="60"/>
                    <line x1="80" y1="50" x2="80" y2="70"/>
                    <line x1="200" y1="50" x2="200" y2="70"/>
                </g>
                <text x="45" y="52" font-family="Arial" font-size="10" fill="#666">1cm</text>
                <text x="130" y="52" font-family="Arial" font-size="10" fill="#666">3cm</text>
              </svg>`
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
        svg: ""
    },
    {
        question: "س 22: عند قصف نواة النيتروجين بجسيم ألفا (α) يمكن أن تتحول إلى نواة أكسجين (17) بالإضافة إلى جسيم آخر (X) كما هو مبين بالمعادلة الموضحة؛ فإن قيم كل من A و Z على الترتيب هما:",
        options: [
            "أ) 3 ، 1",
            "ب) 1 ، 1",
            "ج) 2 ، 4",
            "د) 6 ، 10"
        ],
        correctAnswer: 1,
        svg: `<svg width="260" height="70" viewBox="0 0 260 70" xmlns="http://www.w3.org/2000/svg">
                <g font-family="Arial" font-size="12" font-weight="bold" fill="#000">
                    <text x="15" y="25" font-size="10">14</text>
                    <text x="15" y="45" font-size="10">7</text>
                    <text x="30" y="38" font-size="18">N</text>
                    <text x="55" y="38">+</text>
                    <text x="70" y="25" font-size="10">4</text>
                    <text x="70" y="45" font-size="10">2</text>
                    <text x="85" y="38" font-size="18">α</text>
                    <line x1="110" y1="32" x2="140" y2="32" stroke="#000" stroke-width="2"/>
                    <polygon points="140,32 132,28 132,36"/>
                    <text x="155" y="25" font-size="10">17</text>
                    <text x="155" y="45" font-size="10">8</text>
                    <text x="170" y="38" font-size="18">O</text>
                    <text x="195" y="38">+</text>
                    <text x="210" y="25" font-size="10" fill="#dc3545">A</text>
                    <text x="210" y="45" font-size="10" fill="#dc3545">Z</text>
                    <text x="225" y="38" font-size="18" fill="#dc3545">X</text>
                </g>
              </svg>`
    },
    {
        question: "س 23: ثلاث مقاومات 2Ω , 4Ω , 6Ω متصلة بمصدر تيار كهربائي فإذا كان فرق الجهد بين طرفي كل مقاومة 3V , 2V , 5V على الترتيب كما بالرسم التخطيطي، فإن مقدار المقاومة المكافئة لها يساوي:",
        options: [
            "أ) 12 Ω",
            "ب) 1.66 Ω",
            "ج) 3 Ω",
            "د) 5 Ω"
        ],
        correctAnswer: 1,
        svg: `<svg width="280" height="120" viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
                <polyline points="20,60 50,60" fill="none" stroke="#000" stroke-width="2"/>
                <polyline points="50,60 50,30 75,30" fill="none" stroke="#000" stroke-width="2"/>
                <polyline points="50,60 50,90 115,90" fill="none" stroke="#000" stroke-width="2"/>
                <polyline points="75,30 80,20 88,40 96,20 104,40 112,20 120,40 125,30" fill="none" stroke="#dc3545" stroke-width="2"/>
                <text x="90" y="15" font-family="Arial" font-size="11" font-weight="bold" fill="#dc3545">6 Ω</text>
                <polyline points="125,30 155,30" fill="none" stroke="#000" stroke-width="2"/>
                <polyline points="155,30 160,20 168,40 176,20 184,40 192,20 200,40 205,30" fill="none" stroke="#dc3545" stroke-width="2"/>
                <text x="170" y="15" font-family="Arial" font-size="11" font-weight="bold" fill="#dc3545">4 Ω</text>
                <polyline points="205,30 230,30 230,60" fill="none" stroke="#000" stroke-width="2"/>
                <polyline points="115,90 120,80 128,100 136,80 144,100 152,80 160,100 165,90" fill="none" stroke="#2563eb" stroke-width="2"/>
                <text x="130" y="75" font-family="Arial" font-size="11" font-weight="bold" fill="#2563eb">2 Ω</text>
                <polyline points="165,90 230,90 230,60 260,60" fill="none" stroke="#000" stroke-width="2"/>
              </svg>`
    }
];

// ملاحظة: تأكد من أن جميع الأسئلة تستخدم خاصية "svg" وليس "svgCode"
