var gotNames = ["tyrion", "daenerys", "stannis", "arya", "sansa", "cersei", "jaime", "tormund"]

var wins = 0; // number of wins
var losses = 0; // number of losses
var numberOfGuesses = 8; // self explanatory
var computerRandom = ""; // string in which gotName will be held
var computerAndUser = []; // holds both the computer generated word and user guess
var lettersInName = []; // holds each letter as individual item
var underscores = 0; // amount of underscores for each word. will match lettersInName
var wrongLetters = []; // puts all wrong letters to side for user




// First function, to be run when the first game starts and after a game is won or lost 

function setup(){

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

    // Loops through the length of word and pushes a _ for each letter
    for (var i = 0; i < underscores; i++){
        computerAndUser.push("_");
    }
    console.log(computerAndUser);

    // Updates html on the screen, and combines the word that needs to be guessed so that user can interact with it
    document.getElementById("computerWord").innerHTML = computerAndUser.join(" ");
    document.getElementById("numGuesses").innerHTML = numberOfGuesses;
    document.getElementById("winScore").innerHTML = wins;
    document.getElementById("lossScore").innerHTML = losses;
    

}

// this checks if the game is won or lost
function testWinOrLoss(){

    document.getElementById("numGuesses").innerHTML = numberOfGuesses;
    document.getElementById("computerWord").innerHTML = computerAndUser.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");


    // compares the lettersInName (chosen computer word) to the full guess, if it is even then it is a win
    if (lettersInName.toString() == computerAndUser.toString()){
        wins++;
        console.log("testing if won");

        // specifying where to make changes for wins (same for losses below)
        document.getElementById("winScore").innerHTML = wins;

        // if (computerRandom === "arya"){
        //     document.getElementById("img").src = "https://imgix.bustle.com/rehost/2016/9/14/65fc1f3e-e14c-4d30-b3bd-82e849646826.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70";
        
        // }

        setup();


        
    }

    // same thing but for loss, and I used guesses = 0 to show loss. 
    else if (numberOfGuesses == 0){
        losses++;
        console.log("testing if lost");

        document.getElementById("lossScore").innerHTML = losses;

        // reset up the game
        setup();
    }
}

function checkUserKeys(letter){
    var isLetterInWord = false;

    // runs through computer word, and checks if key pressed matches
    for (var i = 0; i < underscores; i++){
        if (computerRandom[i] == letter){
            isLetterInWord = true;
        }
    }

    if (isLetterInWord){
    for ( var i = 0; i < underscores; i++){
        if (computerRandom[i] == letter){
            computerAndUser[i] = letter;
        }
    }
}
    // if it does not match, push the letter to wrongLetters group which is displayed on screen through GEBID and subtract number guesses
    else {
        wrongLetters.push(letter);
        numberOfGuesses--;
    }


}



// Main process

setup();

// after game is setup, pressing key is what triggers the rest of the functions and analyzes/outputs results 
document.onkeydown = function(event){

    // found the below var = string function on a stack overflow example. 
    // https://stackoverflow.com/questions/38428160/javascript-replacing-characters-in-string-from-keycode-event
    var keyGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkUserKeys(keyGuess);
    testWinOrLoss();
    console.log(keyGuess);
}