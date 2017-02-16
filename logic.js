var wordList = [
"jerome",
"neena",
"darion",
"lou",
"greg"
]

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

function startGame(){
	/* 
1. select a word at random
2. want to break up that random word into letters and replace it them with underscores
3. want to add those underscores to the HTML
4. numguesses always equal 9, and blankandsuccesses is an empty array, and wronguesses 
is empty as well
*/
numGuesses = 9;
blanksAndSuccesses = [];
wrongGuesses =[];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];


}

function checkLetters(letter){
	/*
	1. Compare the letter the user picks matches any of the letters in the word 
	2. I want a conditional statement to determine if the letter the user picked is
	in the word. If so, do something, if not, do something else
	3. If the user is wrong we want to decrease numGuesses variables by one
	*/

}

function roundComplete(){
	/*
	1. Its going to update the HTML with letters that are in the word
	2. Its going to update the HTML with guesses we have left
	3. Its going to update the HTML to show the wrong guesses
	4. Its going to determine whether the user won the game or not
	*/


}

document.onkeyup = function(){
	
/*
1. Its going to take in the letter that we type in
2. its going to pass it through the checkLetters function
*/

}
