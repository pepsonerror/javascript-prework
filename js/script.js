const possibleChoise = ['kamień','papier','nożyce'];
const errorChoise = 'nieznany ruch';
const messages = ['Twój ruch to: ','Komputer wylosował: '];

let playerInput = prompt(`Wybierz swój ruch! 1: ${possibleChoise[0]}, 2: ${possibleChoise[1]}, 3: ${possibleChoise[2]}.`);
let computerChoise = possibleChoise[Math.floor(Math.random() * 3)]; // possible indexs: 0..2
console.log('Gracz wpisał: ' + playerInput);

switch(playerInput) {
    case '1':
    case '2':
    case '3':
        printMessage(   '<p>' + messages[0] + possibleChoise[playerInput - 1] + '.</p>' +
                        '<p>' + messages[1] + computerChoise + '.</p>' + 
                        '<p>' + (   computerChoise === possibleChoise[0] &&
                                    possibleChoise[playerInput - 1] === possibleChoise[1]? 
                                    'Ty wygrywasz!' : 
                                    'Komputer wygrał!'
                                ) + '</p>'
                    );
        break;        
    default:
        printMessage(messages[0] + errorChoise);
}

