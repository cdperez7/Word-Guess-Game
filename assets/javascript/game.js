var gotNames = ["tyrion", "daenerys", "stannis", "arya", "sansa", "cersei", "jaime", "tormund"]

var wins = 0; // number of wins
var losses = 0; // number of losses
var numberOfGuesses = 8; // self explanatory
var computerRandom = ""; // string in which gotName will be held
var computerAndUser = []; // holds both the computer generated word and user guess
var lettersInName = []; // holds each letter as individual item
var underscores = 0; // amount of underscores for each word. will match lettersInName
var wrongLetters = []; // puts all wrong letters to side for user in empty array to start




// First function, to be run when the first game starts and after a game is won or lost 

function setup() {

    // randomly generates name from gotNames
    computerRandom = gotNames[Math.floor(Math.random() * gotNames.length)];
    console.log(computerRandom);

    // splits it into individual letters
    lettersInName = computerRandom.split("");
    console.log(lettersInName);

    // adds underscores for each letter in chosen name
    underscores = lettersInName.length;
    console.log(underscores);

    // resets guesses to 8, and clears previous tries
    numberOfGuesses = 8;
    wrongLetters = [];
    computerAndUser = [];

    // Loops through the length of word and pushes a _ for each letter to guess
    for (var i = 0; i < underscores; i++) {
        computerAndUser.push("_");
    }
    console.log(computerAndUser);


    updateResults();

}

// Updates html on the screen, and combines the word that needs to be guessed so that user can interact with it
function updateResults() {

    // First adds the computer word to the HTML. second two are for wins/losses
    document.getElementById("computerWord").innerText = computerAndUser.join(" ");
    document.getElementById("winScore").innerText = wins;
    document.getElementById("lossScore").innerText = losses;

}

// this checks if the game is won or lost
function testWinOrLoss() {

    // First updates numbers of guesses, second adds content to main word, third adds keys to wrong letters
    document.getElementById("numGuesses").innerText = numberOfGuesses;
    document.getElementById("computerWord").innerText = computerAndUser.join(" ");
    document.getElementById("wrongGuesses").innerText = wrongLetters.join(" ");


    // compares the lettersInName (chosen computer word) to the full guess, if it is even then it is a win
    if (lettersInName.toString() == computerAndUser.toString()) {
        wins++;
        console.log("testing if won");

        // reset game
        setup();


    }



    // same thing but for loss, and I used guesses = 0 to show loss. 
    else if (numberOfGuesses == 0) {
        losses++;
        console.log("testing if lost");

        // reset up the game
        setup();
    }
}

function checkUserKeys(key) {
    var isKeyInWord = false;

    // these two loops runs through computer word, and checks if key pressed matches
    for (var i = 0; i < underscores; i++) {
        if (computerRandom[i] == key) {
            isKeyInWord = true;
        }
    }

    if (isKeyInWord) {
        for (var i = 0; i < underscores; i++) {
            if (computerRandom[i] == key) {
                computerAndUser[i] = key;
            }
        }
    }
    // if it does not match, push the letter to wrongLetters group which is displayed on screen through GEBID and subtract number guesses
    else {
        wrongLetters.push(key);
        numberOfGuesses--;
    }


}




// Main process

setup();

// after game is setup, pressing key is what triggers the rest of the functions and analyzes/outputs results 
document.onkeydown = function (event) {

    // found the below var = string function on a stack overflow example. 
    // https://stackoverflow.com/questions/38428160/javascript-replacing-characters-in-string-from-keycode-event
    var keyGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkUserKeys(keyGuess);
    testWinOrLoss();
    console.log(keyGuess);
}