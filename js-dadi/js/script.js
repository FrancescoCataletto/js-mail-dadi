/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

const playerRandomNumber = Math.floor(Math.random()* 6) + 1;

const computerRandomNumber = Math.floor(Math.random()* 6) + 1;

console.log(playerRandomNumber, computerRandomNumber);

if(playerRandomNumber > computerRandomNumber){
    console.log("you won!")
}else if(computerRandomNumber > playerRandomNumber){
    console.log("The computer won!")
}else if(computerRandomNumber === playerRandomNumber){
    console.log("It's a draw!")
}