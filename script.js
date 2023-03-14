// Create querySelectors for each class here
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blankLetters = [];

// Array of words the user will guess
var words = ["function","variable","boolean","object","index","repository","commit","stylesheet","array","javascript"];

// The init function is called when the page loads
function init () {
    getWins();
    getLosses();
}

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

// The winGame function is called when the win condition is met
function winGame() {
    wordBlank.textContent = "You Win!";
    winCounter++
    startButton.disabled = false;
    setWins()
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    wordBlank.textContent = "GAME OVER";
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
        // Tests if win conditions are met
        if (isWin && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            winGame();
        }
    }
    // Tests if time has run out
    if (timerCount === 0) {
        //Clears Interval
        clearInterval(timer);
        loseGame();
    }
}, 1000)
}

// Creates blanks on screen
function renderBlanks() {
    // Randomly picks word from words array
    chosenWord = words[Math.floor(Math.random() *words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    blankLetters = []
    // Uses loop to push blanks to blankLetters array
    for (var i = 0; i < numBlanks; i++) {
        blankLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blankLetters.join(" ")
}

// Updates win count on screen and sets win count to client storage
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCounter", loseCounter);
}

// These functions are used by init
function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
        winCounter = 0;
    } else {
        // If a value is retrieved from client storage set the winCounter to that value
        winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
}

function getLosses() {
    var storedlosses = localStorage.getItem("loseCount");
    if (storedlosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedlosses;
    }
    lose.textContent = loseCounter;
}

function checkWin() {
    // If the word equals the blankLetters array when converted to string, set isWin to true
    if (chosenWord === blankLetters.join("")) {
        // This value is used in the timer function to test if win condition is met
        isWin = true;
    }
}

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {
    var letterInWord = false;
    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                blankLetters[j] = letter;
            }
        }
        wordBlank.textContent = blankLetters.join(" ");
    }
}

// Attach event listener to document to listen for key event
document.addEventListener("keydown", function(event) {
    // If the count is zero, exit function
    if (timerCount === 0) {
        return;
    }
      // Convert all keys to lower case
      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
      // Test if key pushed is letter
      if (alphabetNumericCharacters.includes(key)) {
        var letterGuessed = event.key;
        checkLetters(letterGuessed)
        checkWin();
      }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
     // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}

// Attaches event listener to button
resetButton.addEventListener("click", resetGame);