let playerScore = 0;
computerScore = 0;

const container = document.querySelector("#container");

const pScore = document.querySelector("#pScore");
const cScore = document.querySelector("#cScore");

const pChoice = document.querySelector("#pChoice");
const cChoice = document.querySelector("#cChoice");

const results = document.querySelector("#results");
const computerChoice = document.querySelector("#computerChoice");
const RoundResult = document.querySelector("#RoundResult");

function computerPlay() {
  const choicesArr = ["rock", "paper", "scissors"];
  return choicesArr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return ["tie", "It's a tie", computerSelection];
  } else {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return ["lose", "You Lose! Paper beats Rock", computerSelection];
      } else if (computerSelection === "scissors") {
        return ["win", "You Win! Rock beats Scissors", computerSelection];
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return ["win", "You Win! Paper beats Rock", computerSelection];
      } else if (computerSelection === "scissors") {
        return ["lose", "You Lose! Scissors beat Paper", computerSelection];
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return ["lose", "You Lose! Rock beats Scissors", computerSelection];
      } else if (computerSelection === "paper") {
        return ["win", "You Win! Scissors beat Paper", computerSelection];
      }
    }
  }
}

function restart() {
  const buttonDiv = document.querySelector("#buttons");
  buttons.forEach((button) => button.remove());
  const restart = document.createElement("button");
  restart.style.cssText = "width: 50%";
  restart.textContent = "NEW GAME";
  buttonDiv.appendChild(restart);
  restart.addEventListener("click", (restart) => location.reload());
}

function game(e) {
  let roundResult = playRound(this.id, computerPlay());

  if (roundResult[0] == "win") {
    ++playerScore;
  } else if (roundResult[0] == "lose") {
    ++computerScore;
  }
  pScore.textContent = `${playerScore}`;
  cScore.textContent = `${computerScore}`;
  pChoice.textContent = `${this.id}`;
  cChoice.textContent = `${roundResult[2]}`;
  RoundResult.textContent = `${roundResult[1]}`;

  if (playerScore == 5 || computerScore == 5) {
    if (playerScore > computerScore) {
      results.textContent = "Yay! You've won the game!";
    } else if (playerScore < computerScore) {
      results.textContent = "Loser! You've lost the game!";
    }
    restart();
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", game));
