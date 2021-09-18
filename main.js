var timerElement = document.querySelector('#timer-count');
var startButton = document.querySelector('#start-button');
var buttonDiv = document.querySelector(".bttn");
var cardElement = document.querySelector('.card');
var cardHeader = document.querySelector('.card-header');
var cardContent = document.querySelector('.card-content')
var questionContent = document.querySelector('#question-content');


const questionOne = {
    question: "Inside of which HTML element do we put the JavaScript?",
    answers:[
            "<scripting>",
            "<script>",
            "<javascript>",
            "<js>"
            ],
    correctAnswer: "<script>"
}

const questionTwo = {
    question: "How does a FOR loop start?",
    answers:[
            "for i = 1 to 5",
            "for (i = 0; i <= 5; i++)",
            "for (i = 0; i <= 5)",
            "for (i <=5; i++)"
            ],
    correctAnswer: "for (i = 0; i <= 5; i++)"
}

const questionThree = {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers:[
            "Math.rnd(7.25)",
            "Math.round(7.25)",
            "rnd(7.25)",
            "round(7.25)",
            ],
    correctAnswer: "Math.round(7.25)"            
}

const questionFour = {
    question: "How do you find the number with the highest value of x and y?",
    answers:[
            "Math.ceil(x,y)",
            "top(x,y)",
            "ceil(x,y)",
            "Math.max(x,y)",
            ],       
    correctAnswer: "Math.max(x,y)"
}

const questionFive = {
    question: "How to write an IF statement in JavaScript?",
    answers:[
            "if i = 5",
            "if i == 5 then",
            "if (i == 5)",
            "if i = 5 then",
            ],
    correctAnswer: "if (i == 5)"
}

function startQuiz() {
    startTimer();

    cardContent.textContent = "";
    buttonDiv.innerHTML = "";
    var questionListEl = document.createElement("ol");
    var li1= document.createElement("li");
    var li2= document.createElement("li");
    var li3= document.createElement("li");
    var li4= document.createElement("li");
    var listArray = [li1, li2, li3, li4];

    cardContent.appendChild(questionListEl)
    questionListEl.appendChild(li1)
    questionListEl.appendChild(li2)
    questionListEl.appendChild(li3)
    questionListEl.appendChild(li4)

    function questionAnswerFill(currentQuestion) {
        var currentQuestion = [
                              questionOne,
                              questionTwo,
                              questionThree,
                              questionFour,
                              questionFive
                              ]

        questionContent.textContent = currentQuestion[0].question;
        for (let i = 0; i < listArray.length; i++)
        console.log(questionContent);
    }

    questionAnswerFill()



    // questionContent.textContent = questionOne.question;

    
}



var timer;
var timerCount = 75;
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer)
        }

    }, 1000)
} 

startButton.addEventListener('click', startQuiz)