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

const container = document.querySelector('#container')
const buttons = document.querySelectorAll('.choice')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const message = document.createElement('p')
        message.textContent = playRound(e.target.id)
        message.style.textAlign = "center"

        if (message.textContent.slice(0, 5) === "You L") {
            message.style.color = "#EE6C4D"
            message.style.fontSize = "28px"
            const computer = document.querySelector('#computerScore')
            let score = computer.textContent
            computer.textContent = parseInt(score) + 1
            if (parseInt(computer.textContent) === 5) {
                const overlay = document.querySelector('.overlay')
                overlay.classList.toggle('overlayActive')
                const popup = document.querySelector('.popup')
                popup.classList.toggle('active')
                const result = document.querySelector('#result')
                result.textContent = "You lost the computer wins :( Better try Again"
                const replay = document.querySelector('#replay')
                replay.addEventListener('click', () => {
                    window.location.reload() 
                })
            }
        } else if (message.textContent.slice(0, 5) === "You W") {
            message.style.color = "#2a9d8f"
            message.style.fontSize = "28px"
            const player = document.querySelector('#playerScore')
            let score = player.textContent
            player.textContent = parseInt(score) + 1
            if (parseInt(player.textContent) === 5) {
                const overlay = document.querySelector('.overlay')
                overlay.classList.toggle('overlayActive')
                const popup = document.querySelector('.popup')
                popup.classList.toggle('active')
                const result = document.querySelector('#result')
                result.textContent = "Congratulations, you won!"
                const replay = document.querySelector('#replay')
                replay.addEventListener('click', () => {
                    window.location.reload()
                })
            }
        }
        else {
            message.style.color = "#3D5A80"
            message.style.fontSize = "28px"
        }

        container.appendChild(message)
        setTimeout(() => {
            container.removeChild(message)
        }, 1000)
    })
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', () => {
    window.location.reload()
})