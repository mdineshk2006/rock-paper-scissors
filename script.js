let humanScore=0;
let computerScore=0;
function getComputerChoice(){
  let choice = Math.floor(Math.random()*3)+1;
   return choice;
}
function getHumanChoice(){
 let hchoice=prompt("enter your choice");
 return hchoice.toLowerCase();
}
function playRound(humanChoice , computerChoice){
    if(computerChoice==1){
        computerChoice="rock";
    }
    else if(computerChoice==2){
        computerChoice="paper";
    }
    else {
    computerChoice="scissors";
    }
    if(humanChoice==computerChoice){
        console.log("Draw!!NO winner")
    }
    else if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! rock beats scissors");
        humanScore++;
    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! paper beats rock");
        humanScore++;
    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! scissors beats paper");
        humanScore++;
    }
    else{
        console.log("computer wins");
        computerScore++;
    }
}
    
for(let i=1;i<=5;i++){     
const humanchoice= getHumanChoice();
const computerchoice= getComputerChoice();
playRound(humanchoice , computerchoice);
}
if(humanScore==computerScore){
    console.log("DRAW!!")
}
else if(humanScore>computerScore){
    console.log("YOU ARE THE GAME WINNER")
    console.log("YOUR SCORE IS :" + humanScore);
}
else{
    console.log("COMPUTER IS THE GAME WINNER")
    console.log("COMPUTER SCORE IS :" + computerScore);
}




