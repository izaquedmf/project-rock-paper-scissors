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


