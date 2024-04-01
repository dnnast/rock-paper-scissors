function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors"];
    const min = 1;
    const max = 3;
    const i = Math.floor(Math.random() * (max - min + 1) + min);

    return choice[i - 1];
}

function playRound(playerSelection) {
    round++;
    if (round == 6) {
        score = [0, 0];
        round = 1;
    }

    computerSelection = getComputerChoice();

    const resultOptions = ["You Win!", "You Lose!", "It's a Tie!"];
    let result = 0;

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") result = resultOptions[2];
            else if (computerSelection === "Scissors") {
                result = resultOptions[0];
                score[0] += 1;
            } else {
                result = resultOptions[1];
                score[1] += 1;
            }

            break;

        case "Paper":
            if (computerSelection === "Rock") {
                result = resultOptions[0];
                score[0] += 1;
            } else if (computerSelection === "Scissors") {
                result = resultOptions[1];
                score[1] += 1;
            } else result = resultOptions[2];

            break;

        case "Scissors":
            if (computerSelection === "Rock") {
                result = resultOptions[1];
                score[1] += 1;
            } else if (computerSelection === "Scissors") {
                result = resultOptions[2];
            } else {
                result = resultOptions[0];
                score[0] += 1;
            }

            break;

        default:
            break;
    }

    if (result === resultOptions[0]) {
        result += ` ${playerSelection} beats ${computerSelection}`;
    } else if (result === resultOptions[1]) {
        result += ` ${computerSelection} beats ${playerSelection}`;
    }

    resultContainer.innerHTML = `<p>Round: ${round}</p>
                      <p>${result}</p>
                      <p>Score: </p>
                      <p>You: ${score[0]}</p>
                      <p>Computer: ${score[1]}</p>
                      `;
}

//-------------------------VARIABLES---------------------------------
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

const buttonsContainer = document.getElementById("btn-container");
const resultContainer = document.getElementById("results-container");

rockBtn.innerHTML = "Rock";
paperBtn.innerHTML = "Paper";
scissorsBtn.innerHTML = "Scissors";

rockBtn.setAttribute("id", "rock");
paperBtn.setAttribute("id", "paper");
scissorsBtn.setAttribute("id", "scissors");

buttonsContainer.appendChild(rockBtn);
buttonsContainer.appendChild(paperBtn);
buttonsContainer.appendChild(scissorsBtn);

let score = [0, 0];
let round = 0;

//--------------------------EVENT LISTENERS---------------------------
buttonsContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("Rock");
            break;

        case "paper":
            playRound("Paper");
            break;

        case "scissors":
            playRound("Scissors");
            break;
    }
});
