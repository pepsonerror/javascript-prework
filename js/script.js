const possibleChoise = ['kamień','papier','nożyce'];
const errorChoise = 'nieznany ruch';
const messages = ['Twój ruch to: ','Komputer wylosował: '];

let playerInput = prompt(`Wybierz swój ruch! 1: ${possibleChoise[0]}, 2: ${possibleChoise[1]}, 3: ${possibleChoise[2]}.`);
let computerChoise = possibleChoise[Math.floor(Math.random() * 3)];

switch(playerInput) {
    case '1':
    case '2':
    case '3':
        const playerChoiseText= getTextOfChoiseNatural(playerInput);
        printMessage(   messageWithTagPEndDot(  messages[0] + playerChoiseText) +
                        messageWithTagPEndDot(  messages[1] + computerChoise ) +
                        messageWithTagPEndDot(  computerChoise === possibleChoise[0] &&
                                                playerChoiseText === possibleChoise[1]? 
                                                'Ty wygrywasz!' : 
                                                'Komputer wygrał!'
                                             )
                    );
        break;        
    default:1
        printMessage(messages[0] + errorChoise);
}

/* tylko takie funkcje przyszły mi na myśl, bo nie bardzo wiem co można by jeszcze uprościć  DRY */
function getTextOfChoiseNatural(index){
    try{
        return possibleChoise[index - 1]
    }catch(error){
        console.log('Error!: ' + error);        
        return '?!';
    }
}

function messageWithTagPEndDot(textMessage){
    return '<p>' + textMessage + '.</p>';
}