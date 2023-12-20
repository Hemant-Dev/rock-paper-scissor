// console.log("Hello World!");
function getComputerSelection(){
    let movesArr = ["rock", "paper", "scissor"];
    let randomMoveIndex = getRandomInt(0,2);
    return movesArr[randomMoveIndex];
}
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
//Game Variables Global
let winner = "";
let userPoints = 0;
let computerPoints = 0;
//Playing Function
function playRound(userMove, computerMove){
    
    //Error Handling
    if(userMove === null){
        console.log("Enter a Value !!");
    }
    else{
        //Correcting input
        userMove = userMove.toLowerCase();
    }

    
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
    showScore(userMove, computerMove, winner);

}
function isGameOver(){
    return userPoints == 3 || computerPoints == 3;
}
//UI
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');
const winnerDisplay = document.querySelector('.winner');
const gameWindow = document.querySelector('.gameWindow');
const scoreDisplay = document.querySelector('.score');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorBtn.addEventListener('click',() => handleClick('scissor'));

function handleClick(playerSelection){
    //Before Selection
    if(isGameOver()){
        showWinner();
        return;
    }

    const computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);

    //After Selection check
    if(isGameOver()){
        showWinner();
        return;
    }
}

function showWinner(){
    let gameWinner = userPoints > computerPoints ? 'User' : 'Computer';
    const heading = document.createElement('h1');
    heading.textContent = `Winner is ${gameWinner}`;
    winnerDisplay.appendChild(heading);
    disableBtn(); //Cannot Play further
}

function disableBtn(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
}

function showScore(userMove, computerMove, winner){
    const roundMove = document.createElement('h2');
    roundMove.textContent = `User Move: ${userMove.toUpperCase()} ***** Computer Move: ${computerMove.toUpperCase()} ***** Round Winner: ${winner}`;
    const roundScore  = document.createElement('h2');
    roundScore.textContent = `User Points: ${userPoints} && Computer Points: ${computerPoints}`;
    scoreDisplay.appendChild(roundMove);
    scoreDisplay.appendChild(roundScore);
}

