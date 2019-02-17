
// adding listeners to buttons;
document.querySelector("#rock").addEventListener("click", ()=>playRound("rock",computerPlay()));
document.querySelector("#paper").addEventListener("click", ()=>playRound("paper",computerPlay()));
document.querySelector("#scissors").addEventListener("click", ()=>playRound("scissors",computerPlay()));
document.querySelector("#reset").addEventListener("click", ()=>reset());


// score animation function;
function anim (x) {
if(x=="p"){
    document.querySelector("#animate2").classList.add("animated");
}
else if(x=="c"){
    document.querySelector("#animate1").classList.add("animated");
}
// after playing the animation, remove animation class;
setTimeout(function(){
    document.querySelector("#animate1").classList.remove("animated");
    document.querySelector("#animate2").classList.remove("animated");
},1200);

}

// score variables;
var computerScore = 0;
var playerScore = 0;
updateScore();


// to restart the game;
function reset (){
    computerScore = 0;
    playerScore = 0;
    document.querySelector("#reset").style = "visibility:hidden";
    document.querySelector("#status").innerHTML = "Select one;";
    updateScore();
}

// random selection for computer;
function computerPlay () {
    let rnd =  Math.floor((Math.random() * 3) + 1);

    switch(rnd){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}

// main game mechanics;
function playRound (playerSelection, computerSelection){

    if(playerScore>=5 || computerScore >=5){
        alert("Please start a new game");
        return;
    }
        
    if(playerSelection == "rock"){
        console.log('player rock');
        if(computerSelection=="Rock"){
            document.querySelector("#status").innerHTML = "Both you and computer picked Rock! It's a tie.";
        }
        else if(computerSelection=="Scissors"){
            playerScore++;
            anim("p");
            document.querySelector("#status").innerHTML = "You picked Rock, computer picked Scissors! You won.";
        }
        else{
            computerScore++;
            anim("c");
            document.querySelector("#status").innerHTML = "You picked Rock, computer picked Paper! Computer won.";
        }
    }
    else if (playerSelection=="paper"){
        if(computerSelection=="Rock"){
            playerScore++;
            anim("p");
            document.querySelector("#status").innerHTML = "You picked Paper, computer picked Rock! You won.";
        }
        else if(computerSelection=="Scissors"){
            computerScore++;
            anim("c");
            document.querySelector("#status").innerHTML = "You picked Paper, computer picked Scissors! Computer won.";
        }
        else {
            document.querySelector("#status").innerHTML = "Both you and computer picked Paper! It's a tie.";
        }
    }
    else if (playerSelection=="scissors"){
        if(computerSelection=="Rock"){
            computerScore++;
            anim("c");
            document.querySelector("#status").innerHTML = "You picked Scissors, computer picked Rock! Computer won.";
        }
        else if (computerSelection=="Scissors"){
            document.querySelector("#status").innerHTML = "Both you and computer picked Scissors! It's a tie.";
        }
        else{
            playerScore++;
            anim("p");
            document.querySelector("#status").innerHTML = "You picked Scissors, computer picked Paper! You won.";
        }
    }        
    updateScore();    
}

// score keeping;
function updateScore () {
    document.querySelector("#pscore").innerHTML = playerScore;
    document.querySelector('#cscore').innerHTML = computerScore;
    if(playerScore>=5 && playerScore>computerScore){
        alert('Yaay, you won!!!');
        document.querySelector("#reset").style = "visibility:visible";
    }
    if(computerScore>=5 && computerScore>playerScore){
        alert('sorry, you lost this time!');
        document.querySelector("#reset").style = "visibility:visible";
    }
    //to reset focus after clicking;
    document.activeElement.blur();
}



    
