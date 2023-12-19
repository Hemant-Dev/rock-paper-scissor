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
let userMove = "";

//Playing Function
function playRound(userMove){
    
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
    // console.log("User Move: " + userMove + " Computer Move: " + computerMove);
    // console.log("Winner : " + winner + " User Points: " + userPoints + " , Computer Points: " + computerPoints);

    const winnerDiv = document.querySelector('div.winner');
    const h2 = document.createElement('h2');
    h2.textContent = `Winner: ${winner} ****** User Points: ${userPoints} ****** Computer Points: ${computerPoints}`;
    winnerDiv.appendChild(h2);


    //Deciding the winner of the match i.e first to 5 rounds
    const matchWinner = document.createElement('h1');
    if(userPoints == 3){
        matchWinner.textContent = `Winner Of the Match is User!!`;
    }else if(computerPoints == 3){
        matchWinner.textContent = `Winner of the Match is Computer!!`;
    }
    winnerDiv.appendChild(matchWinner);

}


//Rounds Played 
// let winnerOfTheMatch = "";
// function game(rounds){
//     for(let round=0; round<rounds; round++){
//         playRound(userMove);
//     }
//     if(userPoints > computerPoints)
//         winnerOfTheMatch = "User";
//     else if(userPoints < computerPoints)
//         winnerOfTheMatch = "Computer";
//     else    
//         winnerOfTheMatch = "Draw";

//     console.log("The Winner of the match is: " + winnerOfTheMatch + "!!!");
// }
// game(5);


//Adding Event Listeners for each button and setting the user move as the value of button clicked 
// and calling playRound func with it

const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissor = document.querySelector('button.scissor');
//User Move Allocation
rock.addEventListener('click', (e) => {
    // console.log(e.target.value);
    playRound(e.target.value);
});
paper.addEventListener('click', (e) => {
    // console.log(e.target.value);
    playRound(e.target.value);
});
scissor.addEventListener('click', (e) => {
    // console.log(e.target.value);
    playRound(e.target.value);
});

