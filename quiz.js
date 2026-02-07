const preTestQuestions = [
    {
        question: "ข้อใดคือความหมายของ 'วิทยาการข้อมูล' (Data Science)?",
        options: ["การซ่อมคอมพิวเตอร์", "การนำข้อมูลมาวิเคราะห์เพื่อใช้ประโยชน์", "การเขียนโปรแกรมสร้างเกม", "การออกแบบกราฟิก"],
        correct: 1
    },
    {
        question: "ขั้นตอนแรกของกระบวนการวิทยาการข้อมูลคืออะไร?",
        options: ["การเก็บรวบรวมข้อมูล", "การวิเคราะห์ข้อมูล", "การตั้งคำถาม", "การนำเสนอผลลัพธ์"],
        correct: 2
    },
    {
        question: "ข้อมูลชนิดใดจัดเป็น Unstructured Data?",
        options: ["ตาราง Excel", "ฐานข้อมูล SQL", "รูปภาพและวิดีโอ", "ไฟล์ CSV"],
        correct: 2
    },
    {
        question: "Computational Thinking หมายถึงอะไร?",
        options: ["การคิดเหมือนหุ่นยนต์", "การคิดวิเคราะห์แก้ปัญหาอย่างเป็นระบบ", "การคำนวณเลขเร็ว", "การจดจำข้อมูลจำนวนมาก"],
        correct: 1
    },
    {
        question: "ข้อใด *ไม่ใช่* องค์ประกอบของ Computational Thinking?",
        options: ["Decomposition", "Abstraction", "Memorization (การท่องจำ)", "Pattern Recognition"],
        correct: 2
    },
    {
        question: "Decomposition คืออะไร?",
        options: ["การแตกปัญหาใหญ่เป็นปัญหาย่อย", "การหาสิ่งที่เหมือนกัน", "การตัดรายละเอียดที่ไม่จำเป็น", "การเขียนโค้ด"],
        correct: 0
    },
    {
        question: "ภาษา Python ถูกออกแบบมาให้มีจุดเด่นอย่างไร?",
        options: ["ทำงานเร็วที่สุดในโลก", "ไวยากรณ์อ่านง่ายคล้ายภาษาอังกฤษ", "ใช้สร้างระบบปฏิบัติการเท่านั้น", "ต้องเสียเงินซื้อ"],
        correct: 1
    },
    {
        question: "คำสั่งใดใช้แสดงผลข้อความใน Python?",
        options: ["input()", "show()", "print()", "display()"],
        correct: 2
    },
    {
        question: "สัญลักษณ์ใดใช้สำหรับการกำหนดค่าให้ตัวแปรใน Python?",
        options: ["==", "=", ":", "->"],
        correct: 1
    },
    {
        question: "ข้อใดคือตัวอย่างของ Internet of Things (IoT)?",
        options: ["เครื่องคิดเลข", "สมุดจดบันทึก", "ตู้เย็นอัจฉริยะที่สั่งของเองได้", "รองเท้าผ้าใบ"],
        correct: 2
    }
];

const postTestQuestions = [
    {
        question: "หากต้องการหาแนวโน้มราคาทองคำ ควรใช้วิธีการใด?",
        options: ["Data Cleaning", "Data Visualization", "Data Collection", "Data Analysis"],
        correct: 3
    },
    {
        question: "Big Data มีลักษณะเด่น 3V ยกเว้นข้อใด?",
        options: ["Volume (ปริมาณมาก)", "Velocity (เปลี่ยนแปลงเร็ว)", "Variety (หลากหลายรูปแบบ)", "Value (ราคาแพง)"],
        correct: 3
    },
    {
        question: "การตัดรายละเอียดที่ไม่จำเป็นออก เพื่อโฟกัสเฉพาะสิ่งที่สำคัญ คือแนวคิดใด?",
        options: ["Decomposition", "Abstraction", "Algorithm", "Pattern Recognition"],
        correct: 1
    },
    {
        question: "Algorithm ที่ดีควรมีลักษณะอย่างไร?",
        options: ["ซับซ้อนเข้าใจยาก", "มีความคลุมเครือ", "มีลำดับขั้นตอนชัดเจน", "ไม่มีจุดสิ้นสุด"],
        correct: 2
    },
    {
        question: "ผลลัพธ์ของโค้ด `print(10 + 5 * 2)` คือเท่าไร?",
        options: ["30", "20", "25", "Error"],
        correct: 1
    },
    {
        question: "ถ้า `score = 75` เงื่อนไข `if score > 80:` จะเป็นจริงหรือไม่?",
        options: ["จริง", "เท็จ", "Error", "ไม่สามารถสรุปได้"],
        correct: 1
    },
    {
        question: "โครงสร้างข้อมูลแบบ List ใน Python เขียนอย่างไร?",
        options: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"],
        correct: 2
    },
    {
        question: "Loop ใดที่เหมาะสมเมื่อทราบจำนวนรอบที่แน่นอน?",
        options: ["for loop", "while loop", "if-else", "def"],
        correct: 0
    },
    {
        question: "การทำ Data Visualization มีจุดประสงค์หลักเพื่ออะไร?",
        options: ["ทำให้ข้อมูลสวยงามเท่านั้น", "สื่อสารข้อมูลให้เข้าใจง่าย", "เพิ่มขนาดไฟล์", "ซ่อนข้อมูลที่เป็นความลับ"],
        correct: 1
    },
    {
        question: "ข้อใดคือนวัตกรรมที่เกิดจาก AI?",
        options: ["รถยนต์ดึงเชือก", "รถยนต์ไร้คนขับ", "รถจักรยาน", "รถม้า"],
        correct: 1
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(type) {
    if (type === 'pre') {
        currentQuestions = preTestQuestions;
        document.getElementById('quizTitle').innerText = "แบบทดสอบก่อนเรียน";
    } else {
        currentQuestions = postTestQuestions;
        document.getElementById('quizTitle').innerText = "แบบทดสอบหลังเรียน";
    }

    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quizModal').style.display = 'flex';
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizBody').style.display = 'block';

    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const html = `
        <h3>ข้อที่ ${currentQuestionIndex + 1}/${currentQuestions.length}</h3>
        <p class="quiz-question">${q.question}</p>
        <div class="quiz-options">
            ${q.options.map((opt, index) => `
                <button class="btn-option" onclick="checkAnswer(${index})">${opt}</button>
            `).join('')}
        </div>
    `;
    document.getElementById('quizContainer').innerHTML = html;
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === currentQuestions[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quizBody').style.display = 'none';
    const resultDiv = document.getElementById('quizResults');
    resultDiv.style.display = 'block';

    const percentage = (score / currentQuestions.length) * 100;
    let message = "";
    if (percentage >= 80) message = "ยอดเยี่ยมมาก!";
    else if (percentage >= 50) message = "ทำได้ดี!";
    else message = "พยายามอีกนิดนะ!";

    resultDiv.innerHTML = `
        <h2>จบการทดสอบ!</h2>
        <div class="score-circle">
            <span>${score}/${currentQuestions.length}</span>
        </div>
        <p class="score-message">${message}</p>
        <button class="btn-primary" onclick="closeQuiz()">ปิด</button>
    `;
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
}
