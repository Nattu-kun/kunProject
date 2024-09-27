const questions = [
    {
        question: "java Script use for What ?",
        answers: [
            {text: "Game-Dev", correct: false},
            {text: "Video-Editing", correct: false},
            {text: "Web-Dev", correct: true},
            {text: "Cyber-Dev", correct: false},
        ]
    },

    {
        question: "Which language is primarily used for styling web pages ? ",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "Css", correct: true},
            {text: "Python", correct: false},
            {text: "Java", correct: false},
        ]
    },

    {
        question: "Which symbol is used for comments in Python ?",
        answers: [
            {text: "//", correct: false},
            {text: "#", correct: true},
            {text: "``", correct: false},
            {text: "!", correct: false},
        ]
    },

    {
        question: "Which of the following is a loop structure in programming ?",
        answers: [
            {text: "if", correct: false},
            {text: "while", correct: true},
            {text: "print", correct: false},
            {text: "cout", correct: false},
        ]
    },

    {
        question: "Which language is often referred to as the 'BackBone'of web development ?",
        answers: [
            {text: "Ruby", correct: false},
            {text: "Swift", correct: false},
            {text: "Python", correct: false},
            {text: "JavaScript", correct: true},
        ]
    },

];

const questionElement = document.getElementById("question");
const answers_buttons = document.getElementById("answer_buttons");
const next_button = document.getElementById("next_btn");

let currQueIdx = 0;
let score = 0;

function startQuiz(){
    currQueIdx = 0;
    score = 0;
    next_button.innerHTML = "Next";
    showQue();
}

function showQue(){
    resetState();
    let currQue = questions[currQueIdx];
    let queNo = currQueIdx + 1;

    questionElement.innerHTML = queNo + ". " + currQue.question;

    currQue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers_buttons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    next_button.style.display = "none";
    while(answers_buttons.firstChild){
        answers_buttons.removeChild(answers_buttons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorr = selectedBtn.dataset.correct === "true";
    if(isCorr){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answers_buttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    next_button.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    next_button.innerHTML = "Play Again";
    next_button.style.display = "block";
}
function handleNextButton(){
    currQueIdx++;
    if(currQueIdx < questions.length){
        showQue();
    }
    else{
        showScore();
    }
}
next_button.addEventListener("click", () => {
    if(currQueIdx < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
