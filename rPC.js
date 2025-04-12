let humanScore = 0;
let computerScore = 0;





function getComputerChoice(max) {
    const computerChoice = Math.floor(Math.random() * max);
    let computer ="";
    if (computerChoice == 0) {
        computer = "rock";
    } else if (computerChoice == 1) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    return computer;
}

function getHumanChoice() {
    let humanChoice = prompt("Choose!", "rock? paper? or scissors");
    console.log(humanChoice.toLowerCase());
    return humanChoice.toLowerCase();
}

function five(x){
    return x+5;
}

function six(){
    let x = 5;
    return x;    return x;
}

function returnstuff(){
    six();    return x;
    five();
    let a = "1" + six();
    console.log(a);
}


function playRound() {
    let computerChoice = getComputerChoice(3);
    let lowerCasePrompt = getHumanChoice();
    if (lowerCasePrompt == "rock" && computerChoice =="rock"){
        return "tie!"
    } else if (lowerCasePrompt == "rock" && computerChoice == "scissors") {
        humanScore ++;
        return "you win! rock beats scissors!"
    } else if (lowerCasePrompt == "rock" && computerChoice == "paper") {
        computerScore ++;
        return "you lose! paper beats rock!"
    } else if (lowerCasePrompt == "paper" && computerChoice == "paper") {
        return "tie!"
    } else if (lowerCasePrompt == "paper" && computerChoice == "rock") {
        humanScore ++;
        return "you win! paper beats rock!"
    } else if (lowerCasePrompt == "paper" && computerChoice == "scissors") {
        computerScore ++;
        return "you lose! scissors beats paper!"
    } else if (lowerCasePrompt == "scissors" && computerChoice == "scissors") {
        return "tie!"
    } else if (lowerCasePrompt == "scissors" && computerChoice == "paper") {
        humanScore ++;
        return "you win! scissors beats paper!"
    } else if (lowerCasePrompt == "scissors" && computerChoice == "rock") {
        computerScore ++;
        return "you lose! rock beats scissors!"
    } 
}

function playGame(){
    while(computerScore<5 && humanScore <5){
        console.log(playRound());
        console.log("computer score: " + String(computerScore));
        console.log("human score: " + humanScore);
    }
    if (computerScore == 5){
        return "you lose and will forever be a loser."
    } else {
        return "you win. do you feel accomplished?"
    }
}

function loop(){
    for (let i =0; i>5; i++){
        console.log(i);
    }
}