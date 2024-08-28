const answerButton = document.querySelectorAll(".answer");
const humanAnswer = document.querySelector(".human-answer");
const computerAnswer = document.querySelector(".computer-answer");
const humanPick = document.querySelector(".human-pick");
const computerPick = document.querySelector(".computer-pick");
const roundResult = document.querySelector(".round-result");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");

let humanScoreResult = 0;
let computerScoreResult = 0;
let rounds = 1;

function getHumanChoice(humanChoice) {

  let answer = humanChoice;
  let myAnswer = "";

  switch(answer) {
    case "rock":
      myAnswer = "✊";
      break;
    case "paper":
      myAnswer = "✋";
      break;
    case "scissors":
      myAnswer = "✌️";
      break;
  }

  humanPick.textContent = "You pick";
  humanAnswer.textContent = myAnswer;

  return myAnswer;
}


const getComputerChoice = () => {

  let randomNumber =  Math.floor(Math.random() * 3);
  let computerRNG = "";

  switch(randomNumber) {
    case 0:
      computerRNG = "✊";
      break;
    case 1:
      computerRNG = "✋";
      break;
    case 2:
      computerRNG = "✌️";
      break;
  }

  computerPick.textContent = "Computer Picks";
  computerAnswer.textContent = computerRNG;

  return computerRNG;
}


const playRound = (humanChoice, computerChoice) => {

  if(humanChoice === computerChoice) {
    roundResult.textContent = "It's a draw!";
  } else if((humanChoice === "✊" && computerChoice === "✌️") 
      || (humanChoice === "✋" && computerChoice ==="✊")
      || (humanChoice === "✌️" && computerChoice === "✋")) {
    humanScoreResult++;
    roundResult.textContent = "You win!";  
  } else {
    computerScoreResult++;
    roundResult.textContent = "You lose!";
  }
}


function playGame() {
  let answer = this.value;

  const humanSelection = getHumanChoice(answer);
  const computerSelection = getComputerChoice();  

  if(rounds <= 5) {
    playRound(humanSelection, computerSelection);
    humanScore.textContent = `Your Score: ${humanScoreResult}`;
    computerScore.textContent = `Computer Score: ${computerScoreResult}`;
    rounds++;
  } else {
    if(humanScoreResult > computerScoreResult) {
      alert("You win this game");
      location.reload();
    } else {
      alert("Sorry! You lose. Try again.");
      location.reload();
    }
  }
  
}

answerButton.forEach(answer => {
  answer.addEventListener("click", playGame, true);
});


