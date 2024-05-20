let input = document.querySelector("#input");
let btn = document.querySelector("#btn")
let preGuesses = document.querySelector("#pre-guesses")
let remGuesses = document.querySelector("#rem-guesses")
const showResult = document.querySelector("#show")
const startNewGame = document.querySelector("#newGame")
startNewGame.hidden = true

let randomNum = Math.floor(Math.random() * 100) + 1
console.log(randomNum)
let count = 1;
remGuesses.innerHTML = 10

btn.addEventListener('click', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput() {
    if (input.value === '') {
        alert("enter a number")
    } else if (input.value < 1) {
        alert("numbers should be greater than 1")
    } else if (input.value > 100) {
        alert("numbers should be less than 100")
    } else if (input.value == randomNum) {
        showResult.innerHTML = "You guessed it right :)"
        endGame();
        newGame()
    } else {
        displayGuess()
        count++;
        DisplayRemGuesses(count);
    }
}
function displayGuess() {
    preGuesses.innerHTML = `${preGuesses.innerHTML}   ${input.value}`
    input.value = ''
}
function DisplayRemGuesses(count) {
    remGuesses.innerHTML = 11 - count
    displayResult()

}
function displayResult() {
    if (remGuesses.innerHTML < 1) {
        btn.disabled = true
        showResult.innerHTML = `You lost, random number is ${randomNum}`
        newGame();
    }
}
function endGame() {
    btn.disabled = true
    newGame();
}
function newGame() {
    startNewGame.hidden = false

    startNewGame.addEventListener('click', () => {
        document.location.reload()
    })
}