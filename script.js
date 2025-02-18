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