
//returns a ramdom choice from de computer to play the game
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

//initiate both socres
let humanScore = 0;
let computerScore = 0;

//get the player's and computer's choice and compares who is the winner of the match. Or if it's a draw (both chose the same). Also add the score
//return the <p> to be added in the div
function playRound(humanChoice, computerChoice){

    const winner = document.createElement("p");
    
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper'){
            computerScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Lose! ${computerChoice} beats ${humanChoice}`;
        }else if(computerChoice === 'scissors'){
            humanScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Won! ${humanChoice} beats ${computerChoice}`;
        }else{
            winner.textContent = `Computer choice: ${computerChoice}. It was a Draw! Both chose ${humanChoice}`;
        }
    }else if(humanChoice === 'paper'){
        if(computerChoice === 'paper'){
            winner.textContent = `Computer choice: ${computerChoice}. It was a Draw! Both chose ${humanChoice}`;          
        }else if(computerChoice === 'scissors'){
            computerScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Lose! ${computerChoice} beats ${humanChoice}`;       
        }else{
            humanScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Won! ${humanChoice} beats ${computerChoice}`;     
        }
    }else{
        if(computerChoice === 'paper'){
            humanScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Won! ${humanChoice} beats ${computerChoice}`;                
        }else if(computerChoice === 'scissors'){
            winner.textContent = `Computer choice: ${computerChoice}. It was a Draw! Both chose ${humanChoice}`;
                     
        }else{
            computerScore += 1;
            winner.textContent = `Computer choice: ${computerChoice}. You Lose! ${computerChoice} beats ${humanChoice}`;                
        }
    }

    winner.textContent += `. Player: ${humanScore}. Computer: ${computerScore}`;

    return winner;
    
}

//starts the game and shows who is the winner based on the score
function playGame(humanChoice){
    const container = document.querySelector("#container");
    const matchResult = document.createElement("div");
    container.appendChild(matchResult);
    
    //play the game until someone get 5 wins
    if(humanScore >= 5 || computerScore >= 5){
        const finalResult = document.createElement("p");

        finalResult.textContent =`Final Score.\nYou: ${humanScore}\nComputer: ${computerScore}\n`
        if(humanScore > computerScore){
            finalResult.textContent += "Congratulations!!!! You beat the computer\n";
        }else{
            finalResult.textContent += "Computer beats you, but can try another time!";
        }
        matchResult.appendChild(finalResult);
        
    }else{
        let winner = playRound(humanChoice, getComputerChoice());
        matchResult.appendChild(winner);        
    } 
}


const buttons = document.querySelectorAll("button")

//add event in each button to play the game. Player choice is taken by button id (paper, rock, scissors)
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id; 
        playGame(buttonId);
    });
});