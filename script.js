let yourScore = document.querySelector('#your-score');
let computerScore = document.querySelector('#computer-score');
let yourImage = document.querySelector('#your-image');
let computerImage = document.querySelector('#computer-image');

let player = 0;
let computer = 0;

//Runs game on-click
let rock = document.querySelector('#rock');
rock.addEventListener('click', playerRock);

let paper = document.querySelector('#paper');
paper.addEventListener('click', playerPaper)

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playerScissors)

//Computer Random Choice
function computerPlay() {
    let choices = Array("rock", "paper", "scissors");
    return choices[Math.floor(Math.random() * 3)];
}

//Display Player Choice
function yourRock() {
    document.getElementById('your-image').innerHTML='';
    let rockImage = document.createElement("img");
    rockImage.src = "images/rock.jpg";
    yourImage.appendChild(rockImage);
}

function yourPaper() {
    document.getElementById('your-image').innerHTML='';
    let paperImage = document.createElement("img");
    paperImage.src = "images/paper.jpg";
    yourImage.appendChild(paperImage);  
}

function yourScissors() {
    document.getElementById('your-image').innerHTML='';
    let scissorsImage = document.createElement("img");
    scissorsImage.src = "images/scissors.jpg";
    yourImage.appendChild(scissorsImage)
}

//Display Computer Choice
function computerRock() {
    document.getElementById('computer-image').innerHTML='';
    let rockImage = document.createElement("img");
    rockImage.src = "images/rock.jpg";
    computerImage.appendChild(rockImage);
}

function computerPaper() {
    document.getElementById('computer-image').innerHTML='';
    let paperImage = document.createElement("img");
    paperImage.src = "images/paper.jpg";
    computerImage.appendChild(paperImage);
}

function computerScissors() {
    document.getElementById('computer-image').innerHTML='';
    let scissorsImage = document.createElement("img");
    scissorsImage.src = "images/scissors.jpg";
    computerImage.appendChild(scissorsImage)
}


//Update Score
function scoreUpdate() {
    yourScore.textContent = player;
    computerScore.textContent = computer;

    if (player == 5) {
        alert("You win. Please refresh to play again")
    }
    else if (computer == 5) {
        alert("You lost. Please refresh to play again.")
    }
}
//The Game's Algorithm
function playerRock() {
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = "rock";

    if (playerSelection === "rock" && computerSelection === "paper") {
        computer++;
        yourRock();
        computerPaper();
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        player++;
        yourRock();
        computerScissors();
    }
    else {
        yourRock();
        computerRock();
    }
    scoreUpdate();
}
function playerPaper() {
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = "paper";

    if (playerSelection === "paper" && computerSelection === "scissors") {
        computer++;
        yourPaper();
        computerScissors()
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        player++;
        yourPaper();
        computerRock();
    }
    else {
        yourPaper();
        computerPaper();
    }
    scoreUpdate();
}
function playerScissors() {
    computerPlay();
    let computerSelection = computerPlay();
    let playerSelection = "scissors";
    if (playerSelection === "scissors" && computerSelection === "rock") {
        computer++;
        yourScissors();
        computerRock();
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        player++;
        yourScissors();
        computerRock();
    }
    else {
        yourScissors();
        computerRock();
    }
    scoreUpdate();
}

