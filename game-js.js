const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerChoice = Math.random();
  
  if (computerChoice <= 0.33){
    computerChoice = ROCK
  } else if (computerChoice <= 0.66){
    computerChoice = SCISSORS
  } else {
    computerChoice = PAPER
  }
  return computerChoice
}

function playerPlay(){
  return prompt('lets play rock, paper, scissors!').toUpperCase();
}

function gameRound(pChoice, cChoice){
  
  if (pChoice === cChoice){
    alert ('its a draw!')
  } else if (pChoice === ROCK && cChoice === SCISSORS){
    alert(`you chose ${ROCK}, and the computer chose ${SCISSORS}. You win!`), playerScore++
  }else if (pChoice === SCISSORS && cChoice === ROCK){
    alert(`you chose ${SCISSORS} and the computer chose ${ROCK}. You win!`), playerScore++
  }else if (pChoice === PAPER && cChoice === ROCK){
    alert(`you chose ${PAPER} and the computer chose ${ROCK}. You win!`), playerScore++
  } else{
    alert ('you lose!'), computerScore++
  }
  return
}

function gameResult(){
    for (let i = 0; i < 5; i++){
    gameRound(playerPlay(), computerPlay());
    alert(`Computer Score : ${computerScore} Player Score: ${playerScore}`);
  }
  console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`); 
  if (playerScore > computerScore){
    console.log('You won the Game!')
  }else if (computerScore > playerScore){
    console.log('You lost the Game!')
  }else {
    console.log('Tie Game!')
  }
}





gameResult()
