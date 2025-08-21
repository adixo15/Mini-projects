let randomNumber = Math.floor(Math.random() * 100) + 1;

const submit = document.getElementById("subt");
const userinput = document.getElementById("guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const LoworHi = document.querySelector(".loworHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuesses = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
    return;
  }
  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  prevGuesses.push(guess);
  numGuess++;
  displayGuess(guess);

  if (guess === randomNumber) {
    displayMessage("🎉 You Won!! Correct Guess");
    endGame();
  } else if (numGuess === 10) {
    displayMessage(`❌ Game Over! Random number was ${randomNumber}`);
    endGame();
  } else {
    displayMessage(guess > randomNumber ? "📈 Number too High" : "📉 Number too Low");
  }
}

function displayGuess(guess) {
  userinput.value = "";
  guessSlot.innerHTML += `${guess} `;
  remaining.textContent = `${10 - numGuess}`;
}

function displayMessage(message) {
  LoworHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id="newGame">New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    numGuess = 0;
    guessSlot.textContent = "";
    remaining.textContent = "10";
    userinput.removeAttribute("disabled");
    startOver.removeChild(p);
    LoworHi.textContent = "";
    playGame = true;
  });
}
