// Assignment Code
// console.log("Check if its linked")
var lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*(),./;{}[]<>";
var usedCharacters = "";
var userInputLength = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function test(){
  var userInput = Number(prompt("How many characters would you like your password to contain?"))
  console.log(typeof userInput)
  if (userInput < 8){ 
    alert("Password length must be at least 8")
    test();
  }
  else if (userInput > 129){
    alert("Password length must less than 129")
    test();
  }
  else{
    userInputLength = userInput;
  }
  return;
}


//Added this
function generatePassword(){
  var password = "";
  
  test();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// document.getElementById("generate").addEventListener("click", test);



/* 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

*/

