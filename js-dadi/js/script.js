/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

const randomButton = document.getElementById("randomNumbers");
randomButton.innerHTML = "Click me!";


// RANDOM NUMBERS
randomButton.addEventListener("click", function(){
    const playerRandomNumber = Math.floor(Math.random()* 6) + 1;
    const computerRandomNumber = Math.floor(Math.random()* 6) + 1;

    // DOCUMENT ID
    const pNumber = document.getElementById("playerNumber");
    const cNumber = document.getElementById("computerNumber");
    const winner = document.getElementById("winner");

    // NUMBERS INSIDE ID
    pNumber.innerHTML = playerRandomNumber;
    cNumber.innerHTML = computerRandomNumber;

    // CONDITIONS
    if(playerRandomNumber > computerRandomNumber){
        winner.innerHTML = "You won!";
    }else if(computerRandomNumber > playerRandomNumber){
        winner.innerHTML = "The computer won!";
    }else if(computerRandomNumber === playerRandomNumber){
        winner.innerHTML = "It's a draw!";
    }
})


