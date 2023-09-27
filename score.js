// Iteration 5: Store the player score and display it on the game over screen
// Iteration 5: Store the player score and display it on the game over screen
var playagain = document.getElementById('play-again-button');
playagain.onclick = () => {
    location.href = './game.html';
}

const scoreboard = document.getElementById('score-board');
let score = localStorage.getItem('score');

scoreboard.innerHTML = score;
