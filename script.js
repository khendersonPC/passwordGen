// Assignments

//button
var generateBtn = document.getElementById("generate");
//number of characters
var numChar = 0;
//setting up booleans for choices
var lowercase = false;
var uppercase = false;
var numeric = false;
var special = false;
//Array of ALL options
var allCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", ",", "=", ">", "?", "@", "[", "\\", "]", "^", "_", ",", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "w", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//list of just uppercase
var upperLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//list of just lowercase
var lowerLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", "w"];
//list of numbers
var numLet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//list of symbols
var symLet = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", ",", "=", ">", "?", "@", "[", "\\", "]", "^", "_", ",", "`", "{", "|", "}", "~"];
var randomChar="";

// Write password to the #password input
function writePassword() {
  //lowercase=false;
  //uppercase=false;
  //numeric=false;
  //special=false;
  var password = "";

  //How this function basically works is that it chooses a random character from the entire list.
  //Then, it checks the character against its conditions selected. IF it meets the 
  //selected conditions, it adds it to the password string.

  while (password.length < numChar) {
    randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    //console.log("randomlett" + randomChar);

    if (lowercase == true && lowerLet.includes(randomChar)) {
      password += randomChar;
    }
    if (uppercase == true && upperLet.includes(randomChar)) {
      password += randomChar;
    }

    if (numeric == true && numLet.includes(randomChar)) {
      password += randomChar;
    }

    if (special == true && symLet.includes(randomChar)) {
      password += randomChar;
    }
 
  }


  passwordText.value = password;
  
}

// Events listeners for button and checkboxes
generateBtn.addEventListener("click", writePassword);

lowerBox.addEventListener('change', function (e) {
  if (lowerBox.checked) {
    lowercase = true;
  }
  else{
    lowercase=false;
  }

})
upperBox.addEventListener('change', function (e) {
  if (upperBox.checked) {
    uppercase = true;
    
  }
  else{
    uppercase=false;
  }
})
numericBox.addEventListener('change', function (e) {
  if (numericBox.checked) {
    numeric = true;
  }
  else{
    numeric=false;
  }
})
specialBox.addEventListener('change', function (e) {
  if (specialBox.checked) {
    special = true;
  }
  else{
    special=false;
  }
})

numCharInput.addEventListener('change', function (e) {
  numChar = parseInt(document.getElementById("numCharInput").value);
})
