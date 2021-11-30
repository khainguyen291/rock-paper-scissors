// playRound()

function playRound() {

    //Randomized choice between RPS for computer
    let choices = Array("rock", "paper", "scissors");
    function computerPlay() {
        return choices[Math.floor(Math.random() * 3)];
    }

    //Computer and Player's Choice, converted to all lowercase
    let computerInput = computerPlay();
    let computerSelection = computerInput.toLowerCase();


    let playerInput = prompt("Rock, Paper, or Scissors?", "")
    let playerSelection = playerInput.toLowerCase();

    //Outcomes
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    //If player selected Scissors
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost. You selected scissors and the computer selected rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won. You selected scissors and the computer selected paper."
    }

    //If player selected ROCK
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost. You selected rock and the computer selected paper."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won. You selected rock and the computer selected scissors."
    }
    //If player selected PAPER
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost. You selected paper and the computer selected scissors."
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won. You selected paper and the computer selected rock."
    }

    //For Wrong Input

    else {
        return "Incorrect input. Please try again."
    }


}



//New Code
function playRound() {

    //Randomized choice between RPS for computer
    let choices = Array("rock", "paper", "scissors");
    function computerPlay() {
        return choices[Math.floor(Math.random() * 3)];
    }

    //Computer and Player's Choice, converted to all lowercase
    let computerInput = computerPlay();
    let computerSelection = computerInput.toLowerCase();


    let playerSelection = playerInput.toLowerCase();

    //Outcomes
    if (playerSelection === computerSelection) {
        return "It's a tie"
    }
    //If player selected Scissors
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost. You selected scissors and the computer selected rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won. You selected scissors and the computer selected paper."
    }

    //If player selected ROCK
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost. You selected rock and the computer selected paper."
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won. You selected rock and the computer selected scissors."
    }
    //If player selected PAPER
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost. You selected paper and the computer selected scissors."
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won. You selected paper and the computer selected rock."
    }

    //For Wrong Input

    else {
        return "Incorrect input. Please try again."
    }


}
