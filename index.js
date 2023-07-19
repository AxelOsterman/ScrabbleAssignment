// Points assigned to each letter of the alphabet
const points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

// acii chart values for upper case letters so I can convert the letters into points using a array
const lower = ['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','z','w','x','y','z'];

// acii chart values for lower case letters so I can convert the letters into points using a array
const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// temporary storage point
let temp = [];

let score = 0;

let word;

// This function is used so that it's more readable when I want to change the text in the text box
function message(text){
    document.getElementById('TxtField').value = text;
}

//Function that grabs user input from the text box and evalutes it so that we may get the score of the word
function calculateWord(){
    //Score variable that holds the score for the current word later on I put it here so that it resets everytime the button is pressed
    score = 0;
    // Grabs the word from the text box
    word = document.getElementById('TxtField').value;

    // splits the word into an array so that we can get each letter idivdually and calculate the value
    let wordArray = word.split("");
    //Gets the length of the array so that i know how many letters are in the user inputed word
    let length = wordArray.length;
    // This gets the length of the letters array so that I can iterate through it in the future
    let letterArrayLength = lower.length;

    // Loops for the array looking for a space to make sure people don't enter more than one word
    for (let i = 0; i < length; i++){
        // if we encounter a " " in the text we can say that this is a 
        if (wordArray[i] == ' '){
            message("ERROR: Please Only Enter 1 Word");
            return 1;
        }
    }
    //Loops through the word letter by letter
    for (let i = 0; i < length; i++){
        // Loops through the letter arrays
        for (let j = 0; j < letterArrayLength; j++){
            //Checks to see if the letter in the user inputed word is the same as the letter in the lower array
            if (wordArray[i] == lower[j]){
                // adds the score of the currently letter to the score variable
                score = score + points[j];
            }
            //Checks to see if the letter in the user inputed word is the same as the letter in the upper array
            if (wordArray[i] == upper[j]){
                // adds the score of the currently letter to the score variable
                score = score + points[j];
            }
        }
    }
    // Changes the text in the text field from the user inputed word to "The Word 'USERINPUTEDWORDHERE' is worth: 'TOTALSCORE' points"
    message("The word '"+word+"' is worth: "+score+" points");
    return 0;
}

//Function that clears text box
function clearTextBox(){
    message("");
    return 0;
}
