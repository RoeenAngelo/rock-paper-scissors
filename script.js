
var values = ['rock', 'paper', 'scissors'];

function getComputerChoice(array) {
    return values[Math.floor(Math.random()*values.length)];
}

function getPlayerChoice() {
    var choice = prompt('Please select Rock, Paper, or Scissors').toLowerCase();
        if (choice === null || choice != rock || choice != paper || choice != scissors);
            getPlayerChoice();
}

function playRound(computer, player) {
    getComputerChoice();
    getPlayerChoice();
}