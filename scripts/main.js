function computerPlay() {
    let random = Math.floor(1 + Math.random() * 3);
    if (random === 1) {
        return "Rock"
    } else if (random == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    if (playerSelection === computerSelection) {
        return "It's a tie"
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock"
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock"
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper"
        } else if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors"
        }
    }
}

function game() {

    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose: ");
        computerSelection = computerPlay();
        try {
            result = playRound(playerSelection, computerSelection);
            if (result.slice(0, 5) === "You L") {
                computerScore++;
            } else if (result.slice(0, 5) === "You W") {
                playerScore++;
            }
        } catch (error) {
            console.error("You fucked up")
        }
        console.log(result)
    }
    if (playerScore < computerScore) {
        console.log("You lost!");
    } else if (playerScore > computerScore) {
        console.log("You won!");
    } else {
        console.log("It's a tie!")
    }
}