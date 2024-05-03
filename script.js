let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.round(Math.random()*9)
const compareGuesses = (humanGuessInput,computerGuess,target) => Math.abs(humanGuessInput-target)<Math.abs(computerGuess-target)
const updateScore = (winner)=>{
    if(winner=='human'){return humanScore+=1}
    else if(winner=='computer'){return computerScore+=1}
}
const advanceRound = () => currentRoundNumber+=1
console.log(computerScore)

console.log(compareGuesses(1,8,random))

