const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector('button').textContent = 'Play New Game'
    logWins();
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice () {
    let input = prompt('Type Rock, Paper, or Scissors');
    while (input == null) {
        input = prompt('Type Rock, Paper, or Scissors');
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false){
        input = prompt('Please Type Rock, Paper, or Scissors Correctly');
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}


function computerChoice () {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } 
    else {
        return false;
    }
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'Tie';
    }
    else if (
        (playerChoice == 'paper' && computerChoice == 'rock')  ||
        (playerChoice == 'rock' && computerChoice == 'scissors')  ||
        (playerChoice == 'scissors' && computerChoice == 'paper')
    ){
        return 'Player';
    }
    else {
        return 'Computer';
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == 'Player').length;
    let computerWins = winners.filter((item) => item == 'Computer').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    if (winner == 'Tie') {
        console.log("It's a Tie!");
    }
    else {
        console.log(winner, 'Won The Round!');
    }
    console.log('------------------------')
}
