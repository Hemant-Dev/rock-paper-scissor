// console.log("Hello World!");
function getComputerSelection(){
    let movesArr = ["rock", "paper", "scissor"];
    let randomMoveIndex = getRandomInt(0,2);
    return movesArr[randomMoveIndex];
}
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
let userMove = "rock";

let computerMove = getComputerSelection();
let winner = "";
let points = 0;
function playRound(userMove, computerMove){
    if(userMove === "rock"){
        if(computerMove === "scissor"){
            winner = "User";
            points = 1;
        }
        else if(computerMove === "paper"){
            winner = "Computer";
            points = 1;
        }
        else{
            winner = "Both";
            points = 0;
        }
        
    }
    else if(userMove === "paper"){
        if(computerMove === "rock"){
            winner = "User";
            points = 1;
        }
        else if(computerMove === "scissor"){
            winner = "Computer";
            points = 1;
        }
        else{
            winner = "Both";
            points = 0;
        }
        
    }
    else if(userMove === "scissor"){
        if(computerMove === "rock"){
            winner = "Computer";
            points = 1;
        }
        else if(computerMove === "paper"){
            winner = "User";
            points = 1;
        }
        else{
            winner = "Both";
            points = 0;
        }
    }
    console.log("User Move: " + userMove + " Computer Move: " + computerMove);
    console.log("Winner : " + winner + " Points: " + points);
}
playRound(userMove, computerMove);