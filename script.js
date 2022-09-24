const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice; 
}

function checkWinner(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        return 'Tie';
    }
    else if (
        (computerSelection == 'paper' && playerSelection == 'scissors') ||
        (computerSelection == 'scissors' && playerSelection == 'rock')  ||
        (computerSelection == 'rock' && playerSelection == 'scissors') 
    ) {
        return 'Player';
    }
    else {
        return 'Computer';
    }    
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    
    if (result == 'Tie') {
        return "It's a Tie!"
    }
    else if (result == 'Player') {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}

function getPlayerChoice () {
    let validatedInput = false;
    while (validatedInput == false){
        const choice = prompt('Please Choose: Rock, Paper, or Scissors');
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log('-------------')
        
        if (checkWinner(playerSelection, computerSelection) == 'Player') {
            scorePlayer++;
        }
        else if (checkWinner(playerSelection, computerSelection) == 'Computer') {
            scoreComputer++;
        }

    }
    console.log('Game Over!');
    if (scorePlayer > scoreComputer) {
        console.log('Player Wins!');
    }
    else if (scorePlayer < scoreComputer) {
        console.log('You Lose!');
    }
    else {
        console.log("It's a Tie!");
    }
        
}

game()
