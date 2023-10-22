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
            return "You Lose! Paper beats Rock";
        }
        else {
            return "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        else {
            return "You Lost! Scissors beats Paper";
        }
    }
    else {
        if (computerSelection === "Rock") {
            return "You Lost! Rock beats Scissors";
        }
        else {
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    let playerSelection, computerSelection;
    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    playerSelection = prompt("Which one? Rock? Paper? Scissors?")
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}