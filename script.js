console.log("Hello World");

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

function getHumanChoice(){
    const human_choice = prompt("choose: rock, paper or scissors?")
    
    if( human_choice.toLowerCase() === 'rock' || human_choice.toLowerCase() === 'paper' || human_choice.toLowerCase() ==='scissors' ){
        return human_choice.toLowerCase();
    }
    else{
        throw new Error("invalid choice");
    }
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Lose! ${computerChoice} beats ${humanChoice}`);
        }else if(computerChoice === 'scissors'){
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Won! ${humanChoice} beats ${computerChoice}`);
        }else{
            console.log("It was a draw! Both choose Rock");
        }
    }else if(humanChoice === 'paper'){
        if(computerChoice === 'paper'){
            console.log("It was a draw! Both choose Rock");            
        }else if(computerChoice === 'scissors'){
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Lose! ${computerChoice} beats ${humanChoice}`);         
        }else{
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Won! ${humanChoice} beats ${computerChoice}`);         
        }
    }else{
        if(computerChoice === 'paper'){
            humanScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Won! ${humanChoice} beats ${computerChoice}`);                   
        }else if(computerChoice === 'scissors'){
            console.log("It was a draw! Both choose Rock");
                     
        }else{
            computerScore += 1;
            console.log(`Computer choice: ${computerChoice}.\n You Lose! ${computerChoice} beats ${humanChoice}`);                 
        }
    }
}