// Create querySelectors for each class here
var wordBlank = document.querySelector(".word-blanks");
var Wins = document.querySelector("Wins");
var Losses = document.querySelector("Losses");
var TimerElement = document.querySelector("")


// Create global variables needed here
var chosenWord = ;


// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];

// Array of words the user will guess


// The init function is called when the page loads 
function init() {

  
}

// The startGame function is called when the start button is clicked
function startGame() {
  
  // Prevents start button from being clicked when round is in progress
  
  // Function calls
  
}

// The winGame function is called when the win condition is met
function winGame() {
  
  // Function call
 
}

// The loseGame function is called when timer reaches 0
function loseGame() {
  
  // Function call
 
}

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  
      // Tests if win condition is met
    
        // Clears interval and stops timer
    
    // Tests if time has run out
  
      // Clears interval

}

// Creates blanks on screen
function renderBlanks() {
  // Randomly picks word from words array
  
  // Uses loop to push blanks to blankLetters array
  
  // Converts blankLetters array into a string and renders it on the screen
  
}

// Updates win count on screen and sets win count to client storage
function setWins() {
 
}

// Updates lose count on screen and sets lose count to client storage
function setLosses() {

}

// These functions are used by init
function getWins() {
  // Get stored value from client storage, if it exists
 
  // If stored value doesn't exist, set counter to 0

    // If a value is retrieved from client storage set the winCounter to that value
  
  //Render win count to page
}

function getlosses() {

}

function checkWin() {
  // If the word equals the blankLetters array when converted to string, set isWin to true

    // This value is used in the timer function to test if win condition is met

  }

// Tests if guessed letter is in word and renders it to the screen.
function checkLetters(letter) {

}

// Attach event listener to document to listen for key event

  // If the count is zero, exit function
 
  // Convert all keys to lower case
  
  // Test if key pushed is letter


// Attach event listener to start button to call startGame function on click

// Calls init() so that it fires when page opened

// Bonus: Add reset button

function resetGame() {
  // Resets win and loss counts
  // Renders win and loss counts and sets them into client storage

}
// Attaches event listener to button