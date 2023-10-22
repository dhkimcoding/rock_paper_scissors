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