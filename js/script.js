
function getMoveName(argMoveId) {
    if(argMoveId == 1){
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieodpowiedni ruch';
    }
}      

function displayResult(argComputerMove, argPlayerMove) {
    clearMessages();
    printMessage('Komputer wybrał ' + argComputerMove + ', Ty wybierasz ' + argPlayerMove + '.');

    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!');
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
    } else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
    } else {
        printMessage('Gra nierozsrzygnięta');
    }
} 

function playGame(playerInput) {

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    let playerMove = getMoveName(playerInput);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1)});

document.getElementById('play-paper').addEventListener('click', function(){playGame(2)});

document.getElementById('play-scissors').addEventListener('click', function(){playGame(3)});
