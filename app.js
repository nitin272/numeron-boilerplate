// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.
const playbtn= document.getElementById("play-button");
playbtn.onclick = () => {
    location.href = "./game.html"
};
