/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

// RANDOM NUMBERS
const playerRandomNumber = Math.floor(Math.random()* 6) + 1;
const computerRandomNumber = Math.floor(Math.random()* 6) + 1;

// DOCUMENT ID
const pNumber = document.getElementById("playerNumber");
const cNumber = document.getElementById("computerNumber");
const winner = document.getElementById("winner");

// NUMBERS INSIDE ID
pNumber.append(playerRandomNumber);
cNumber.append(computerRandomNumber);

// CONDITIONS
if(playerRandomNumber > computerRandomNumber){
    winner.append("You won!");
}else if(computerRandomNumber > playerRandomNumber){
    winner.append("The computer won!");
}else if(computerRandomNumber === playerRandomNumber){
    winner.append("It's a draw!");
}