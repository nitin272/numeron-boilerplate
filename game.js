// Iteration 2: Generate 2 random number and display it on the screen

const num1 = document.getElementById('number1');
var number1 = Math.round(Math.random() * 100);
const num2 = document.getElementById('number2');
var number2 = Math.round(Math.random() * 100);
num1.innerHTML = number1;
num2.innerHTML = number2;


// Iteration 3: Make the options button functional
var greaterthan = document.getElementById('greater-than');
var equalto = document.getElementById('equal-to');
var lesserthan = document.getElementById('lesser-than');

var score = 0;

greaterthan.onclick = () => {
    if (number1 > number2){
        score++;
        resetTime(timerid);
    }else{
        location.href = "./gameover.html"
    };

    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);
    num1.innerHTML = number1;
    num2.innerHTML = number2;
}

equalto.onclick = () => {
    if (number1 === number2){
        score++;
        resetTime(timerid);
    }else{
        location.href = "./gameover.html"
    };
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);
    num1.innerHTML = number1;
    num2.innerHTML = number2;
}

lesserthan.onclick = () => {
    if (number1 < number2){
        score++;
        resetTime(timerid);
    }else{
        location.href = './gameover.html'
    }
    number1 = Math.round(Math.random() * 100);
    number2 = Math.round(Math.random() * 100);
    num1.innerHTML = number1;
    num2.innerHTML = number2;
}

// Iteration 4: Build a timer for the game
var time = 5;
var timer = document.getElementById('timer');
var timerid;


function starttimer() {
    time=5;
    timer.innerHTML = time;
    timerid = setInterval(() => {
        time--;
        if (time==0){
            location.href = './gameover.html'
        }
        timer.innerHTML = time;
    },1000);
    localStorage.setItem("score",score);
}

function resetTime(intervalId) {
    clearInterval(intervalId);
    starttimer();
}
starttimer()
