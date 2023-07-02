// notes: fix null break behavior

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

function checkPrompt(input){
    if (input === null) {
        console.log('User cancelled the prompt.'); // Log the message
        return false; // Exit the loop if the user cancels the prompt
      }
    if(input.toLowerCase() === 'rock' || input.toLowerCase() === 'paper' || input.toLowerCase() === 'scissors'){
        return true;
    } else {
        return false;
    }
}

function getPlayerChoice() {
    let choice = prompt('Rock, Paper, or Scissors?');
    while(!checkPrompt(choice)){
        choice = prompt('Please enter Rock, Paper, or Scissors');
        if (choice === null) {
            break;
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    if(player === computer){
        return 'Tie!';
    } else if(player === 'rock'){
        if(computer === 'paper'){
            return 'You Lose! Paper beats Rock';
        } else {
            return 'You Win! Rock beats Scissors';
        }
    } else if(player === 'paper'){
        if(computer === 'scissors'){
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'You Win! Paper beats Rock';
        }
    } else if(player === 'scissors'){
        if(computer === 'rock'){
            return 'You Lose! Rock beats Scissors';
        } else {
            return 'You Win! Scissors beats Paper';
        }
    }
}



function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(getPlayerChoice(), getComputerChoice());
        if(result.includes('Win')){
            playerScore++;
        } else{
            computerScore++;
        }
        console.log(result);
    }
    if(playerScore > computerScore){
        console.log('You Win ' + playerScore + ' out of 5 rounds!');
    } else if(playerScore < computerScore){
        console.log('You Lose ' + computerScore + ' out of 5 rounds :(');
    } else {
        console.log('Tie! You tied 5 out 5 games!');
    }    
}

game();