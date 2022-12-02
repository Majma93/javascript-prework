let playerMove = 'papier';
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove;

if (randomNumber == 1) {
    computerMove = 'kamień';
}  else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}

printMessage('Zagrałem ' + computerMove + '! Jeśli Twoj ruch to ' + playerMove + ', to wygrywasz');

