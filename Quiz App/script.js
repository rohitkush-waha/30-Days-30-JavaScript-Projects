const questions = [
    {
        question: "Which is largest animal in the world?",
        answers:[
                {text: "Shark", correct:false},
                {text: "Blue whale", correct:true},
                {text: "Elephant", correct:false},
                {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers:[
                {text: "Shark", correct:false},
                {text: "Blue whale", correct:true},
                {text: "Elephant", correct:false},
                {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers:[
                {text: "Shark", correct:false},
                {text: "Blue whale", correct:true},
                {text: "Elephant", correct:false},
                {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers:[
                {text: "Shark", correct:false},
                {text: "Blue whale", correct:true},
                {text: "Elephant", correct:false},
                {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers:[
                {text: "Shark", correct:false},
                {text: "Blue whale", correct:true},
                {text: "Elephant", correct:false},
                {text: "Giraffe", correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQestion();
}
function showQestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

}