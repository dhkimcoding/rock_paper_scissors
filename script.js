function getComputerChoice() {
    let seed = Math.floor(Math.random() * 10);
    let result;
    if (seed % 3 === 0) {
        result = "Rock";
    }
    else if (seed % 3 === 1) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }
    return result;
}

function getCapitalized(str) {
    let firstLetter = str.charAt(0);
    firstLetter = firstLetter.toUpperCase();
    let remaining = str.slice(1).toLowerCase();
    return firstLetter + remaining;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getCapitalized(playerSelection)
    computerSelection = getCapitalized(computerSelection);
    if (playerSelection === computerSelection) {
        return "It's draw! " + playerSelection + " and " + computerSelection;
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
        else {
            myScore++;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            myScore++;
            return "You Win! Paper beats Rock";
        }
        else {
            computerScore++;
            return "You Lost! Scissors beats Paper";
        }
    }
    else {
        if (computerSelection === "Rock") {
            computerScore++;
            return "You Lost! Rock beats Scissors";
        }
        else {
            myScore++;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    let playerSelection, computerSelection;
    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));   
}

function checkGameOver() {
    if (myScore === 5 || computerScore === 5) {
        return true;
    }
    return false;
}

function getGameOverMessage() {
    if (myScore === 5) return 'YOU WIN!';
    else return 'COMPUTER WIN';
}

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let board = document.querySelector('#board');
let p = document.createElement('p');
p.setAttribute('id', 'score');
let myScore = 0, computerScore = 0;
p.textContent = `me: ${myScore} computer: ${computerScore}`;
board.appendChild(p);
let score = document.querySelector('#score');

rockBtn.addEventListener('click', () => {
    let playerSelection = 'Rock';;
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    score.textContent = `me: ${myScore} computer: ${computerScore}`;
    let p = document.createElement('p');
    p.textContent = result;
    board.appendChild(p);
    if (checkGameOver()) {
        let msg = getGameOverMessage();
        let heading = document.createElement('h1');
        heading.textContent = msg;
        board.appendChild(heading);
    }
});

paperBtn.addEventListener('click', () => {
    let playerSelection = 'Paper';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    score.textContent = `me: ${myScore} computer: ${computerScore}`;
    let p = document.createElement('p');
    p.textContent = result;
    board.appendChild(p);
    if (checkGameOver()) {
        let msg = getGameOverMessage();
        let heading = document.createElement('h1');
        heading.textContent = msg;
        board.appendChild(heading);
    }
});

scissorsBtn.addEventListener('click', () => {
    let playerSelection = 'Scissors';
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    score.textContent = `me: ${myScore} computer: ${computerScore}`;
    let p = document.createElement('p');
    p.textContent = result;
    board.appendChild(p);
    if (checkGameOver()) {
        let msg = getGameOverMessage();
        let heading = document.createElement('h1');
        heading.textContent = msg;
        board.appendChild(heading);
    }
});


