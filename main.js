var timerElement = document.querySelector('#timer-count')
var startButton = document.querySelector('#start-button')


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

startButton.addEventListener('click', startTimer)