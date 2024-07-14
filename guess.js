let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let result = document.querySelector('.result');
let body = document.querySelector('body');

document.querySelector('#paper').addEventListener('click', function() {
    player.textContent = 'Player: Paper';
    playGame('paper');
});

document.querySelector('#rock').addEventListener('click', function() {
    player.textContent = 'Player: Rock';
    playGame('rock');
});

document.querySelector('#scissors').addEventListener('click', function() {
    player.textContent = 'Player: Scissors';
    playGame('scissors');
});

function playGame(playerChoice) {
    let game = ['rock', 'paper', 'scissors'];
    let random = game[Math.floor(Math.random() * game.length)];
    computer.textContent = 'Computer: ' + random;

    if (random === playerChoice) {
        result.textContent = 'It\'s a Tie';
        result.style.background = 'blue';
        body.style.background = 'blue';
    } else if (
        (random === 'rock' && playerChoice === 'paper') ||
        (random === 'scissors' && playerChoice === 'rock') ||
        (random === 'paper' && playerChoice === 'scissors')
    ) {
        result.textContent = 'You Win';
        result.style.background = 'green';
        body.style.background = 'green';
    } else {
        result.textContent = 'Computer Wins';
        result.style.background = 'red';
        body.style.background = 'red';
    }
}
let modalContainer = document.querySelector('.modal-container');
let closeModalBtn = document.querySelector('.close-btn');
let rulesBtn = document.querySelector('.btn');

closeModalBtn.addEventListener('click', function() {
    modalContainer.classList.add('visually-hidden');
});
rulesBtn.addEventListener('click', function() {
    modalContainer.classList.remove('visually-hidden');
});
