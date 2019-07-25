const possibleChoise = ['kamień','papier','nożyce'];
const errorChoise = 'nieznany ruch';
const prefixMessage = 'Twój ruch to: ';

let playerInput = prompt(`Wybierz swój ruch! 1: ${possibleChoise[0]}, 2: ${possibleChoise[1]}, 3: ${possibleChoise[2]}.`);
console.log('Gracz wpisał: ' + playerInput);

switch(playerInput) {
    case '1':
    case '2':
    case '3':
        printMessage(prefixMessage + possibleChoise[playerInput - 1]);
        break;        
    default:
        printMessage(prefixMessage + errorChoise);
}

