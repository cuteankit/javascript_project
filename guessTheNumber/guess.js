let random = parseInt(Math.random()*100 +1)
 console.log(random);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowerHi = document.querySelector('.lowhi')
const startOver = document.querySelector('.resultParse');
 
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playgame = true

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please Enter a Valid Number`)
    }
    else if (guess>100) {
        alert(`Please Enter a  Number Less Than 100`)
    }
    else if (guess<1) {
        alert(`Please Enter a Number Greater Than 1`)
    } else {
        prevGuess.push(guess)
        if (numGuess===11) {
            displayGuess(guess) 
            displayMessage(`Game Over. Random number Was ${random}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess===random) {
        displayMessage(`You guessed it right`)
    } else if (guess > random) {
        displayMessage(`Number is TOOO High`)
    } else {
        displayMessage(`Number is TOOO Low`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess},  `
    numGuess++
    remaining.innerHTML =`${11-numGuess}`
}

function displayMessage(message) {
    lowerHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newgame">Start New Game</h2>`
    startOver.appendChild(p)
    playgame = false
    newgame();
}

function startGane() {
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListner('click', function () {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
                playgame = true;
    })
}