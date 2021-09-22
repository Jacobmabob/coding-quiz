var highscores = JSON.parse(localStorage.getItem('player score'))
console.log(highscores)

var scoreTable = document.querySelector('.score-table');

for (var i = 0; i < highscores.length; i++) {
    document.createElement('tr');
    scoreTable.appendChild[tr]

}