
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
/*
if (randomNumber == 1) {
    computerMove = 'kamień';
}  else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}
*/
let playerInput = prompt('Wybierz swój ruch: 1: kamień, 2: papier, 3: nożyce');
let playerMove = getMoveName(playerInput);
/*if (playerInput == 1) {
    playerMove = 'kamień';
} else if (playerInput == 2 ) {
    playerMove = 'papier';   
} else if (playerInput == 3) {
    playerMove = 'nożyce';
} else {
    playerMove = 'nieodpowiedni ruch';
}
*/



function getMoveName(argMoveId){
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

let score;

function displayResult(computerMove, playerMove) {
    if ((computerMove == 'kamień' && playerMove == 'papier')
      (computerMove == 'papier' && playerMove == 'nożyce')
      (computerMove == 'nożyce' && playerMove == 'kamień')) {
        score = 'Wygrałeś';
      } else if (computerMove == playerMove) {
        score = 'Remis';
      } else if (computerMove && playerMove == 'nieodpowiedni ruch') {
        score = 'Zagraj jeszcze raz';
      } else {
        score = 'Przegrałeś';
      }  
}

printMessage('Ruch komputera to: ' + computerMove + ', Twój ruch to: ' + playerMove + ' Rezultat: ' + score);


/*
if (computerMove == 'kamień' && playerMove == 'kamień') {
    score = 'Remis';
} else if (computerMove == 'kamień' && playerMove == 'papier') {
    score = 'Wygrałeś';
} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    score = 'Przegrałeś';
} else if (computerMove == 'kamień' && playerMove == 'nieodpowiedni ruch') {
    score = 'Zagraj jeszcze raz';
} else if (computerMove == 'papier' && playerMove == 'kamień') {
    score = 'Przegrałeś';
} else if (computerMove == 'papier' && playerMove == 'papier') {
    score = 'Remis';
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    score = 'Wygrałeś';
} else if (computerMove == 'papier' && playerMove == 'nieodpowiedni ruch') {
    score = 'Zagraj jeszcze raz';
} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    score = 'Wygrałeś';
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    score = 'Przegrałeś';
} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    score = 'Remis';
} else if (computerMove == 'nożyce' && playerMove == 'nieodpowiedni ruch') {
    score = 'Zagraj jeszcze raz';
}
*/


