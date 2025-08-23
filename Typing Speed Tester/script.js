// Sentences pool (add your own!)
const SENTENCES = [
  "Practice makes progress, keep typing and keep improving.",
  "Simplicity is the soul of efficiency and clarity.",
  "JavaScript powers interactivity on the modern web.",
  "Discipline is choosing what you want most over what you want now.",
  "Great things are done by a series of small things brought together."
];

const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const newTestBtn = document.getElementById("newTest");
const timeEl = document.getElementById("time");
const wpmEl = document.getElementById("wpm");
const accEl = document.getElementById("accuracy");
const mistakesEl = document.getElementById("mistakes");

let target = "";
let started = false;
let startTime = 0;
let timerId = null;
let mistakes = 0;
let typedChars = 0;
let currentIndex = 0;

// Utility: pick random sentence
function randomSentence() {
  return SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
}

// Render the target sentence as span.char for per-character styling
function renderQuote(text) {
  quoteEl.innerHTML = "";
  for (const ch of text) {
    const span = document.createElement("span");
    span.textContent = ch;
    span.className = "char";
    quoteEl.appendChild(span);
  }
  setCurrentPointer(0);
}

function setCurrentPointer(i) {
  const spans = quoteEl.querySelectorAll(".char");
  spans.forEach(s => s.classList.remove("current"));
  if (spans[i]) spans[i].classList.add("current");
}

// Reset everything and load a new test
function newTest() {
  target = randomSentence();
  renderQuote(target);
  inputEl.value = "";
  started = false;
  startTime = 0;
  currentIndex = 0;
  typedChars = 0;
  mistakes = 0;
  timeEl.textContent = "0.0";
  wpmEl.textContent = "0";
  accEl.textContent = "100";
  mistakesEl.textContent = "0";
  clearInterval(timerId);
  timerId = null;
  inputEl.focus();
}

// Timer updates every 100ms
function startTimer() {
  startTime = performance.now();
  timerId = setInterval(() => {
    const elapsedSec = (performance.now() - startTime) / 1000;
    timeEl.textContent = elapsedSec.toFixed(1);

    // WPM = (typed characters / 5) / minutes
    const minutes = elapsedSec / 60;
    const grossWPM = minutes > 0 ? Math.round((typedChars / 5) / minutes) : 0;
    wpmEl.textContent = String(grossWPM);
  }, 100);
}

// Update accuracy display
function updateAccuracy() {
  const correct = Math.max(0, typedChars - mistakes);
  const acc = typedChars === 0 ? 100 : Math.max(0, Math.round((correct / typedChars) * 100));
  accEl.textContent = String(acc);
}

// Handle input typing
inputEl.addEventListener("input", (e) => {
  const value = inputEl.value;
  // Start timer on first keystroke
  if (!started && value.length > 0) {
    started = true;
    startTimer();
  }

  // Compare latest character typed
  const spans = quoteEl.querySelectorAll(".char");
  // Only process new characters (backspace handled below)
  if (value.length > currentIndex) {
    const typedChar = value[value.length - 1];
    const expectedChar = target[currentIndex];

    typedChars++;
    if (typedChar === expectedChar) {
      spans[currentIndex].classList.remove("incorrect");
      spans[currentIndex].classList.add("correct");
      currentIndex++;
      setCurrentPointer(currentIndex);
    } else {
      spans[currentIndex].classList.add("incorrect");
      mistakes++;
      mistakesEl.textContent = String(mistakes);
      // keep pointer at same index; user can correct with backspace if they want
    }
    updateAccuracy();
  } else if (value.length < currentIndex) {
    // User pressed backspace: step back one character
    const idx = value.length; // new index after backspace
    spans[idx].classList.remove("correct", "incorrect");
    currentIndex = idx;
    setCurrentPointer(currentIndex);
    // Note: We do not decrement typedChars/mistakes here; keeps stats honest.
  }

  // Completed?
  if (currentIndex >= target.length) {
    clearInterval(timerId);
    timerId = null;
    setCurrentPointer(target.length - 1);
    inputEl.blur();
  }
});

// New test
newTestBtn.addEventListener("click", newTest);

// init
newTest();
