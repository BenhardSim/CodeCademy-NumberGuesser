let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
};

const getAbsoluteDistance = (player,secretNum) => {
    return Math.abs(player-secretNum)
};
function compareGuesses(human,computer,secretNum){
    if(getAbsoluteDistance(human,secretNum) < getAbsoluteDistance(computer,secretNum)){
        return true
    }else if(getAbsoluteDistance(human,secretNum) > getAbsoluteDistance(computer,secretNum)){
        return false
    }else if(getAbsoluteDistance(human,secretNum) === getAbsoluteDistance(computer,secretNum)){
        return true
    }
};
function updateScore(winner){
    if(winner === 'human'){
         humanScore++ ;
    }else if(winner === 'computer'){
         computerScore++;
    }
};
function advanceRound(){
    currentRoundNumber++;
}

const alert = (humanG) => {
    if(humanG > 10 || humanG < 0){
        return 'Choose a number betwwen 0-9'
    }
}