

const choices = ['rock', 'paper', 'scissors'];
let winners = [];

function resetGame() {
    winners = []
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent =  'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}

function startGame() {
    let imgs = document.querySelectorAll('img'); // an array
    imgs.forEach(img => 
        img.addEventListener('click', () => {
            if(img.id) {
                playRound(img.id)
        }
    }
    ))
 }

 function playRound(playerChoice){
    let wins = checkWins();
    if (wins >= 5) {
        return //if true, the code stops here
    }
    const computerChoice = computerSelect();
    
    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins()
    if(wins == 5) {
        displayEnd();
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == 'Player').length;

    if(playerWins == 5) {
        document.querySelector('.winner').textContent = `You Win The Game!`;
    }
    else {
        document.querySelector('.winner').textContent = `You Lost!`
    }
    document.querySelector('.reset').style.display = 'flex';
}    

function displayRound(playerChoice,computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWInner(winner);
}

function displayRoundWInner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = 'You Won The Round!'
    }
    else if (winner == 'Computer')  {
        document.querySelector('.winner').textContent = 'The Computer Won The Round'
    }
    else {
        document.querySelector('.winner').textContent = 'The Round Was A Tie';
    }
}
function tallyWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    const ties = winners.filter((item) => item == 'Tie').length;
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`
}

function computerSelect() {
    //todo - update the dom with the computer selection
    const choice = choices[Math.floor(Math.random() * choices.length)];
    
    // document.querySelector(`.${choice}`).classList.add("active");
  
    // setTimeout(() => {
    //   document.querySelector(`.${choice}`).classList.remove("active");
    // }, 700);
  
    return choice;
  }
function checkWins() {
    const pWinCount = winners.filter((item) => item == 'Player').length;
    const cWinCount = winners.filter((item) => item == 'Computer').length;
    return Math.max(pWinCount, cWinCount);
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Score:${ties}`
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


startGame();






// function logWins() { 
//     const pWinCount = winners.filter((item) => item == 'Player').length;
//     const cWinCount = winners.filter((item) => item == 'Computer').length;
//     const ties = winners.filter((item) => item == 'Tie').length;
// }