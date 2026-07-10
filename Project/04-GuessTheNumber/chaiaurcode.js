let num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if(isNaN(guess) || guess < 1 || guess > 100) {
        alert("please enter a valid number");
    }
    else {
        prevGuess.push(guess);
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over, Random number was ${num}`);
            endGame();
            // playGame = false;
        }
        else {
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess) {
    if(guess === num) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < num) {
        displayMessage(`Number is too low`);
    }
    else {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess}`;
    numGuess++;
    remaining.innerHTML = 11 - numGuess;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id='newGame'> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (event) => {
        num = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1
        guessSlot.innerHTML = '';
        remaining.innerHTML = 10;
        userInput.removeAttribute('disabled');
        startOver.removeChild("#newGame");
        playGame = true;

    })
}