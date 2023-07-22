// global variables

let games = 0;

// menu

const menu = document.getElementById("menu");
const menuTitle = document.getElementById("menu-title");
const menuTriangle = document.getElementById("menu-triangle");
const menuList = document.getElementById("menu-list");
const menuClose = document.getElementById("menu-close");

menuTitle.addEventListener("click", function() {
    menuList.classList.toggle("show"); 
});

menuClose.addEventListener("click", function() {
    menuList.classList.remove("show");
});

game.addEventListener("click", function() {
    menuList.classList.remove("show");
})

title.addEventListener("click", function() {
    menuList.classList.remove("show");
})


menuTitle.addEventListener("mouseover", function() {
    menuTriangle.classList.toggle("bi-caret-right");
    menuTriangle.classList.toggle("bi-caret-right-fill");
});

menuTitle.addEventListener("mouseout", function() {
    menuTriangle.classList.toggle("bi-caret-right-fill");
    menuTriangle.classList.toggle("bi-caret-right");
});

// menu reset 

const reset = document.getElementById("menu-reset");

reset.addEventListener("click", function() {
    pscore.innerHTML = "0";
    cscore.innerHTML = "0";
})

// menu avatar selection

let avatar = 0;
const menuProfilePic = document.getElementById("menu-profile-pic");
const humanAvatar = document.getElementById("humanav");

menuProfilePic.addEventListener("click", function() {
    if (avatar == 0){
    avatar = 1;
    humanAvatar.src = "images/human2.jpeg";
    document.getElementById("profile1").classList.toggle("active-menu-item");
    document.getElementById("profile2").classList.toggle("active-menu-item");
  } else if (avatar == 1){
    avatar = 2;
    humanAvatar.src = "images/human3.jpeg";
    document.getElementById("profile2").classList.toggle("active-menu-item");
    document.getElementById("profile3").classList.toggle("active-menu-item");
  } else {
    avatar = 0;
    humanAvatar.src = "images/human1.jpeg";
    document.getElementById("profile3").classList.toggle("active-menu-item");
    document.getElementById("profile1").classList.toggle("active-menu-item");
  }
});

// menu lang selection

let language = 0;
const menuLanguage = document.getElementById("menu-language");
const langEn = document.getElementsByClassName("en");
const langEs = document.getElementsByClassName("es");
const langRu = document.getElementsByClassName("ru");

menuLanguage.addEventListener("click", function() {
    if (language == 0){
        language = 1;
        document.getElementById("lang1").classList.toggle("active-menu-item");
        document.getElementById("lang2").classList.toggle("active-menu-item");
        for (const item of langEn) {
            item.classList.toggle('hidden');
          }
        for (const item of langEs) {
            item.classList.toggle('hidden');
          }
      } else if (language == 1){
        language = 2;
        document.getElementById("lang2").classList.toggle("active-menu-item");
        document.getElementById("lang3").classList.toggle("active-menu-item");
        for (const item of langEs) {
            item.classList.toggle('hidden');
          }
        for (const item of langRu) {
            item.classList.toggle('hidden');
          }
      } else {
        language = 0;
        document.getElementById("lang3").classList.toggle("active-menu-item");
        document.getElementById("lang1").classList.toggle("active-menu-item");
        for (const item of langRu) {
            item.classList.toggle('hidden');
          }
        for (const item of langEn) {
            item.classList.toggle('hidden');
          }
      }
});

// computer's choice

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

// play one round of the game

const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const result = document.getElementById("result");

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function(){
    paper.classList.toggle("paperDown");
    setTimeout(1);
    paper.classList.toggle("paperDown");
});

function playRound(playerSelection, computerSelection){
    games++;
    let player = playerSelection;
    let computer = computerSelection;
    result.innerHTML = "";
     if(player === computer){
        pscore.innerHTML++;
        cscore.innerHTML++;
        result.innerHTML = "Tie!";
    } else if(player === 'rock'){
        if(computer === 'paper'){
            cscore.innerHTML++
            result.innerHTML = 'You Lose! Paper beats Rock';
        } else {
            pscore.innerHTML++;
            result.innerHTML = 'You Win! Rock beats Scissors';
        }
    } else if(player === 'paper'){
        if(computer === 'scissors'){
            cscore.innerHTML++;
            result.innerHTML = 'You Lose! Scissors beats Paper';
        } else {
            pscore.innerHTML++;
            result.innerHTML = 'You Win! Paper beats Rock';
        }
    } else if(player === 'scissors'){
        if(computer === 'rock'){
            cscore.innerHTML++;
            result.innerHTML = 'You Lose! Rock beats Scissors';
        } else {
            pscore.innerHTML++;
            result.innerHTML = 'You Win! Scissors beats Paper';
        }
    }
}