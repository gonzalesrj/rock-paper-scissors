let humanScore;
let computerScore;
let rounds;
let getAnswer;

const getComputerChoice = () => {
  let randomNumber =  Math.floor(Math.random() * 3);

  return (randomNumber === 0) ? "rock"
    : (randomNumber === 1) ? "paper"
    : "scissor";
}

const getHumanChoice = () => {
  let answer = getAnswer.toLowerCase();
  return answer;
}

const playRound = (humanChoice, computerChoice) => {

  if(humanChoice === computerChoice) {
    return `You chose ${humanChoice} and computer chose ${computerChoice}. It's a draw!`;
  } else if((humanChoice === "rock" && computerChoice === "scissor") 
      || (humanChoice === "paper" && computerChoice ==="rock")
      || (humanChoice === "scissor" && computerChoice === "paper")) {
      humanScore++;
      return `You win! ${humanChoice} beats ${computerChoice}`;  
  } else {
    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
}

const playGame = () => {
  rounds = 0;
  humanScore = 0;
  computerScore = 0;

  while(rounds !== 5) {
    getAnswer = prompt("Enter your answer");

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    console.log(playRound(humanSelection, computerSelection));
    console.log(`Your score: ${humanScore} Computer Score: ${computerScore}`);

    rounds++;
  } 

  if (humanScore > computerScore) {
    console.log("You win this game");
  } else {
    console.log("Sorry! You lose. Try again.");
  }
}

playGame();

