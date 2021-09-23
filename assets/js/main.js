var timerElement = document.querySelector('#timer-count');
var startButton = document.querySelector('#start-button');
var buttonDiv = document.querySelector(".bttn");
var cardElement = document.querySelector('.card');
var cardHeader = document.querySelector('.card-header');
var cardContent = document.querySelector('.card-content')
var questionContent = document.querySelector('#question-content');
const originalState = cardElement.innerHTML
var playerPoints = 0
var titleImage = document.querySelector('.img');
var themeSong = document.querySelector('#theme-song');

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

var questionArray = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive
    ]

var currentQuestion = 0

var storageObjArray = []

function startQuiz() {
    startTimer();
    themeSong.play();

    titleImage.remove();
    cardContent.textContent= "";
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

   
    questionAnswerFill(currentQuestion);
    
    for (var i = 0; i < listArray.length; i++) {
        listArray[i].addEventListener('click', function(event) {
            console.log(questionArray[currentQuestion].correctAnswer)
            console.log(event.target.textContent)
            checkAnswer();
            setTimeout(function(){
                nextQuestion();
                revertColor();
            }, 800)
        })
    }   






    function questionAnswerFill(currentQuestion) {  
        questionContent.textContent = questionArray[currentQuestion].question;
        li1.textContent = questionArray[currentQuestion].answers[0]
        li2.textContent = questionArray[currentQuestion].answers[1]
        li3.textContent = questionArray[currentQuestion].answers[2]
        li4.textContent = questionArray[currentQuestion].answers[3]
    }

    function nextQuestion() {
        if (currentQuestion < 4) {
            currentQuestion++;
            questionAnswerFill(currentQuestion); 
        } else {
            logYourScore();
        }
    }

    function checkAnswer() {
        if (event.target.textContent === questionArray[currentQuestion].correctAnswer) {
            console.log(true)
            event.target.setAttribute('style', 'border-color: green;')
            playerPoints += 100;
            console.log(playerPoints);
        } else {
            event.target.setAttribute('style', 'border-color: tomato;')
            console.log(false);
            console.log(playerPoints);
            timerCount = timerCount - 10;
        }
    }

    function revertColor() {
        for (var i =0; i < listArray.length; i++)
            listArray[i].setAttribute('style', 'border-color: black;')
    }

    function logYourScore() {
        cardElement.innerHTML = "";

        var scoreHeading = document.createElement('h1');
        cardElement.appendChild(scoreHeading);
        scoreHeading.textContent = "Score: " + playerPoints;

        var playerScoreFormEl = document.createElement('form');
        cardElement.appendChild(playerScoreFormEl);
        // playerScoreFormEl.setAttribute('action', '#');
        playerScoreFormEl.setAttribute('method', 'post')

        var playerNameLabel = document.createElement('label');
        playerScoreFormEl.appendChild(playerNameLabel);
        playerNameLabel.textContent = "Save Your Score: "
        
        var playerName = document.createElement('input');
        playerScoreFormEl.appendChild(playerName)
        playerName.setAttribute('type', 'text');
        playerName.setAttribute('placeholder', 'Enter Your Name Here!')
        console.log(playerName)

       


        
        console.log(playerName.value)

        var submitButton = document.createElement('button');
        playerScoreFormEl.appendChild(submitButton);
        submitButton.textContent = "Submit"
        submitButton.setAttribute('type', 'submit')
        submitButton.setAttribute('style', 'display: block;')
        submitButton.setAttribute('class', 'submit-bttn');

        function handleFormSubmit(event) {
            event.preventDefault();    
            playerNameData = playerName.value,
            playerScore = playerPoints
            
            
            localStorage.setItem('player name', JSON.stringify(playerNameData)); 
            localStorage.setItem('player score', JSON.stringify(playerScore)); 
        }
        submitButton.addEventListener('click', handleFormSubmit)

    }
    
    var timer;
    var timerCount = 75;
    function startTimer() {
        timer = setInterval(function() {
            timerCount--;
            timerElement.textContent = timerCount;
            
            if (timerCount === 0) {
                clearInterval(timer);
                logYourScore();
            }

        }, 1000)
    } 
}
startButton.addEventListener('click', startQuiz)