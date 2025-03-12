
function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    switch (choice){
        case 0:
            return 'rock';           
        case 1:
            return 'paper';          
        case 2:
            return 'scissors';
        default:
        throw new Error("Invalid choice (omg what happned?)");       
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Lose! ${computerChoice} beats ${humanChoice}`);
        }else if(computerChoice === 'scissors'){
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Won! ${humanChoice} beats ${computerChoice}`);
        }else{
            console.log(`Computer choice: ${computerChoice}.\nIt was a Draw! Both chose ${humanChoice}`);
        }
    }else if(humanChoice === 'paper'){
        if(computerChoice === 'paper'){
            console.log(`Computer choice: ${computerChoice}.\nIt was a Draw! Both chose ${humanChoice}`);           
        }else if(computerChoice === 'scissors'){
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Lose! ${computerChoice} beats ${humanChoice}`);         
        }else{
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Won! ${humanChoice} beats ${computerChoice}`);         
        }
    }else{
        if(computerChoice === 'paper'){
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Won! ${humanChoice} beats ${computerChoice}`);                   
        }else if(computerChoice === 'scissors'){
            console.log(`Computer choice: ${computerChoice}.\nIt was a Draw! Both chose ${humanChoice}`);
                     
        }else{
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\nYou Lose! ${computerChoice} beats ${humanChoice}`);                 
        }
    }
}

function playGame(humanChoice){

    playRound(humanChoice, getComputerChoice());
    
    console.log(`Final Score.\nYou: ${humanScore}\nComputer: ${computerScore}\n`);
     if(humanScore > computerScore){
        console.log("Congratulations! You beat the computer\n");
    }else if(humanScore < computerScore) {
        console.log("Computer beats you, but can try another time!");
    }else{
        console.log("Almost there! It was a Draw! You can try again.")
    }    
}

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id; 
        playGame(buttonId);
    });
});