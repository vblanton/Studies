// notes: fix null break behavior so that it doesn't throw errors?

// global variables

let games = 0;
let avatar = 0;

const humanav = document.getElementById("humanav");
const next = document.getElementById("next");

next.addEventListener("click", function() {
  if (avatar == 0){
    avatar = 1;
    humanav.src = "images/human2.jpeg";
  } else {
    avatar = 0;
    humanav.src = "images/human1.jpeg";
  }
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
}

// function checkPrompt(input){
//     if (input === null) {
//         console.log('User cancelled the prompt.'); // Log the message
//         return 'exit';
//       }
//     if(input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors'){
//         return true;
//     }
// }

// function getPlayerChoice() {
//     let choice = prompt('Rock, Paper, or Scissors?');
//     while(!checkPrompt(choice)){
//         if (choice === null) {
//             return 'exit'
//         }
//         choice = prompt('Please enter Rock, Paper, or Scissors or press Esc to quit');
//     }
//     return choice;
// }

function playRound(playerSelection, computerSelection){
    games++;
    let player = playerSelection;
    let computer = computerSelection;
    if(player === computer){
        pscore.innerHTML++;
        cscore.innerHTML++;
        result.innerHTML == 'Tie!';
    } else if(player === 'rock'){
        if(computer === 'paper'){
            cscore.innerHTML++
            return 'You Lose! Paper beats Rock';
        } else {
            pscore.innerHTML++;
            return 'You Win! Rock beats Scissors';
        }
    } else if(player === 'paper'){
        if(computer === 'scissors'){
            cscore.innerHTML++;
            return 'You Lose! Scissors beats Paper';
        } else {
            pscore.innerHTML++;
            return 'You Win! Paper beats Rock';
        }
    } else if(player === 'scissors'){
        if(computer === 'rock'){
            cscore.innerHTML++;
            return 'You Lose! Rock beats Scissors';
        } else {
            pscore.innerHTML++;
            return 'You Win! Scissors beats Paper';
        }
    }
}


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     // for(let i = 0; i < 5; i++){
//     //     let result = playRound(getPlayerChoice(), getComputerChoice());
//     //     if(result.includes('exit')) {
//     //         break;
//     //     }
//     //     if(result.includes('Win')){
//     //         playerScore++;
//     //     } else if(result.includes('Lose')){
//     //         computerScore++;
//     //     }
//     //     console.log(result);
//     // }
//     if(playerScore > computerScore){
//         console.log('You Win ' + playerScore + ' out of 5 rounds!');
//     } else if(playerScore < computerScore){
//         console.log('You Lose ' + computerScore + ' out of 5 rounds :(');
//     } else {
//         console.log('Tie!');
//     }    
// }

// game();