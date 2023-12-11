// console.log("Hello World!");
function getComputerSelection(){
    let movesArr = ["rock", "paper", "scissor"];
    let randomMoveIndex = getRandomInt(0,2);
    return movesArr[randomMoveIndex];
}
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

let winner = "";
let userPoints = 0;
let computerPoints = 0;
let userMove = "";
function playRound(userMove){
    userMove = window.prompt("Enter Rock, Paper Or Scissor: ");
    //Error Handling
    if(userMove === null){
        console.log("Enter a Value !!");
    }
    else{
        //Correcting input
        userMove = userMove.toLowerCase();
    }
    let computerMove = getComputerSelection();
    
    if(userMove === "rock"){
        if(computerMove === "scissor"){
            winner = "User";
            userPoints += 1;
        }
        else if(computerMove === "paper"){
            winner = "Computer";
            computerPoints += 1;
        }
        else{
            winner = "Draw";
            // points = 0;
        }
        
    }
    else if(userMove === "paper"){
        if(computerMove === "rock"){
            winner = "User";
            userPoints += 1;
        }
        else if(computerMove === "scissor"){
            winner = "Computer";
            computerPoints += 1;
        }
        else{
            winner = "Draw";
            // points = 0;
        }
        
    }
    else if(userMove === "scissor"){
        if(computerMove === "rock"){
            winner = "Computer";
            computerPoints += 1;
        }
        else if(computerMove === "paper"){
            winner = "User";
            userPoints += 1;
        }
        else{
            winner = "Draw";
            points = 0;
        }
    }
    console.log("User Move: " + userMove + " Computer Move: " + computerMove);
    console.log("Winner : " + winner + " User Points: " + userPoints + " , Computer Points: " + computerPoints);
}
// playRound(userMove, computerMove);

function game(rounds){
    let winnerOfTheMatch = "";
    for(let round=0; round<rounds; round++){
        playRound(userMove);
    }
    if(userPoints > computerPoints)
        winnerOfTheMatch = "User";
    else if(userPoints < computerPoints)
        winnerOfTheMatch = "Computer";
    else    
        winnerOfTheMatch = "Draw";

    console.log("The Winner of the match is: " + winnerOfTheMatch + "!!!");
}
game(5);
