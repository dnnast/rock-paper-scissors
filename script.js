function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const min = 1;
    const max = 3;
    const i = Math.floor(Math.random() * (max - min + 1) + min);

    return choice[i - 1];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    console.log("Comp: ", computerSelection, "\nYou: ", playerSelection);

    const resultOptions = ["You Win!", "You Lose!", "It's a Tie!"];
    let result;

    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") result = resultOptions[2];
            else if (computerSelection === "Scissors") result = resultOptions[0];
            else result = resultOptions[1];

            break;

        case "Paper":
            if (computerSelection === "Rock") result = resultOptions[0];
            else if (computerSelection === "Scissors") result = resultOptions[1];
            else result = resultOptions[2];

            break;

        case "Scissors":
            if (computerSelection === "Rock") result = resultOptions[1];
            else if (computerSelection === "Scissors") result = resultOptions[2];
            else result = resultOptions[0];

            break;

        default:
            break;
    }

    if (result === resultOptions[0]) {
        result += ` ${playerSelection} beats ${computerSelection}`;
    } else if (result === resultOptions[1]) {
        result += ` ${computerSelection} beats ${playerSelection}`;
    }

    return result;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = window.prompt("Pick one: rock, paper or scissors").toLowerCase();

        if (
            playerSelection === "rock" ||
            playerSelection === "paper" ||
            playerSelection === "scissors"
        ) {
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            console.log(result);
        }
    }
}

playGame();
