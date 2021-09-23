

var playerName = localStorage.getItem('player name')
var playerScore = localStorage.getItem('player score')
var currentPlayer = [{name: playerName, score: playerScore}]

var scoreTable = document.querySelector('.score-table');

var scoreRow = document.createElement('tr');
    scoreTable.appendChild(scoreRow);

    var playerNameSpace = document.createElement('td')
    scoreRow.appendChild(playerNameSpace);
    playerNameSpace.textContent = playerName
    var playerScoreSpace = document.createElement('td')
    scoreRow.appendChild(playerScoreSpace);
    playerScoreSpace.textContent = playerScore

var listOfPlayerNames = []
var listOfPlayerScores = []
function pushNewPlayers() {
    listOfPlayerNames.push(playerName);
    listOfPlayerScores.push(playerScore);
}
function init(){
    pushNewPlayers()
}
init()