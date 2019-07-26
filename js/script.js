const prefixIdButton = 'btn_';
const possibleChoise = ['Kamień','Papier','Nożyce'];
const errorChoise = 'nieznany ruch';
const messages = ['Twój ruch to: ','Komputer wylosował: '];
let scoreComputer = 0;
let scorePlayer = 0;


function init() {
    let i = 0;
    const divButtons = document.getElementById('buttons');
    possibleChoise.forEach(item => {        
        i++;
        itemButton = document.createElement('button');
        itemButton.setAttribute("id",prefixIdButton + i);    
        itemButton.appendChild(document.createTextNode(getTextOfChoiseNatural(i)));
        itemButton.addEventListener('click', function(){        
            playGame(this.id.replace(prefixIdButton,''));
        });
        divButtons.appendChild(itemButton);     
    });
}

function whoWinner(user1,user2) {
    if( user1 === possibleChoise[0] &&
        user2 === possibleChoise[1]) {
            scorePlayer++;
            return 'Ty wygrywasz!';
        } else {
            scoreComputer++;
            return 'Komputer wygrał!'
        }
}

function playGame(playerInput){
    console.log(playerInput);
    clearMessages('messages');    
    clearMessages('scores');    
    const computerChoise = possibleChoise[Math.floor(Math.random() * 3)];
    switch(playerInput) {
        case '1':
        case '2':
        case '3':
            const playerChoiseText= getTextOfChoiseNatural(playerInput);
            printMessage('messages',    messageWithTagPEndDot(  messages[0] + playerChoiseText) +
                                        messageWithTagPEndDot(  messages[1] + computerChoise ) +
                                        messageWithTagPEndDot(  whoWinner(computerChoise,playerChoiseText))                                     
                        );
            break;        
        default:
            printMessage(messages[0] + errorChoise);
    }  
    printMessage('scores',  messageWithTagPEndDot(`Ilość wygranych komputera: ${scorePlayer}`) +
                            messageWithTagPEndDot(`Ilość twoich wygranych:  ${scoreComputer}`)
                );
}
 
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

init();