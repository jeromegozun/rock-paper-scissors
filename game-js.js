const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let computerChoice = Math.random();
  
  if (computerChoice <= 0.34){
    computerChoice = ROCK
  } else if (computerChoice <= 0.67){
    computerChoice = SCISSORS
  } else {
    computerChoice = PAPER
  }
  return computerChoice
}

const results = document.querySelector("#results")
const currentPlayerScore = document.querySelector('#player-score')
const currentComputerScore = document.querySelector('#computer-score')

function gameRound(pChoice, cChoice){
  if (pChoice === cChoice){
    results.textContent = 'its a draw!'
  }else if (pChoice === ROCK && cChoice === SCISSORS){
    results.textContent = `you chose ${ROCK}, and the computer chose ${SCISSORS}. You win!`, 
    playerScore++,
    currentPlayerScore.textContent = playerScore;
  }else if (pChoice === SCISSORS && cChoice === ROCK){
    results.textContent = `you chose ${SCISSORS} and the computer chose ${ROCK}. You win!`, 
    playerScore++,
    currentPlayerScore.textContent = playerScore;
  }else if (pChoice === PAPER && cChoice === ROCK){
    results.textContent = `you chose ${PAPER} and the computer chose ${ROCK}. You win!`, 
    playerScore++,
    currentPlayerScore.textContent = playerScore;
  }else{
    results.textContent = 'you lose!', 
    computerScore++,
    currentComputerScore.textContent = computerScore;
  }
  playAgainHandler()
}

let playAgain = document.querySelector("#play-again")

function playAgainHandler(){
  if (computerScore === 5 || playerScore === 5){
    playAgain.textContent = "Play Again?",
    rockSelect.removeEventListener('click', chooseRock),
    paperSelect.removeEventListener('click', choosePaper),
    scissorsSelect.removeEventListener('click', chooseScissors)
  }
}

function resetRound(){
  currentPlayerScore.textContent = 0;
  currentComputerScore.textContent = 0;
  computerScore = 0;
  playerScore = 0;
  results.textContent = "";
  playAgain.textContent = "";
  rockSelect.addEventListener('click', chooseRock);
  paperSelect.addEventListener('click', choosePaper);
  scissorsSelect.addEventListener('click', chooseScissors);
}

playAgain.addEventListener('click', resetRound)


const rockSelect = document.querySelector("#rock-img");
const paperSelect = document.querySelector("#paper-img");
const scissorsSelect = document.querySelector("#scissors-img");

function chooseRock(){
  let pChoice = ROCK;
  let cChoice = computerPlay();
  gameRound(pChoice, cChoice);
}

rockSelect.addEventListener('click', chooseRock);

function choosePaper(){
  let pChoice = PAPER
  let cChoice = computerPlay();
  gameRound(pChoice, cChoice);
}

paperSelect.addEventListener('click', choosePaper);

function chooseScissors(){
  let pChoice = SCISSORS;
  let cChoice = computerPlay();
  gameRound(pChoice, cChoice)
}

scissorsSelect.addEventListener('click', chooseScissors)






