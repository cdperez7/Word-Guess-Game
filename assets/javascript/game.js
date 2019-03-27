
var gotNames = ["tyrion", "daenerys", "stannis", "arya", "sansa", "cersei", "jaime", "tormund"]

var underscores = 0;
var wins = 0;
var losses = 0;
var remainingGuesses = 8;
var computerWord = "";
var wordLetters = [];
var userGuesses= [];






// Functions in game//



// document.onkeyup = function (event) {

//     if (event.keyCode >= 65 && event.keyCode <= 90) {
//         console.log(event)
//     }
// }


function begingame(){
    computerWord = gotNames[Math.floor(Math.random() * gotNames.length)];
    wordLetters = computerWord.split("");
    underscores = wordLetters.length;

    for (var i = 0; i < underscores; i++) {
        userGuesses.push("_");
}

    console.log(computerWord);
    console.log(wordLetters);
    console.log(underscores);
    console.log(userGuesses);

}



function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("randomName").innerText = userGuesses.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};


// HTML Inputs 

document.getElementById("randomName").innerHTML = userGuesses.join("");


// Order of steps in game

begingame()

console.log(computerWord)
