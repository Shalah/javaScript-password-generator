// Assignment Code
// console.log("Check if everything is linked")

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

function trackingUsedCharacters(){
  if (userInputLength < 8 || userInputLength > 129){
    alert("")
  }
}

function test(){
  // Using "Number()" will convert the string into number.
  var userInput = Number(prompt("How many characters would you like your password to contain?"))
  console.log(userInput)
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
    confirmedCharacters();
  }

  return;
}


function confirmedCharacters(){
  //Check this part later
  console.log(usedCharacters)
  if (confirm("Click OK to confirm adding lowercase characters") == true) {
    usedCharacters += lowerAlphabets;
    console.log(usedCharacters)
  } 
  if (confirm("Click OK to confirm adding uppercase characters") == true) {
    usedCharacters += upperAlphabets;
    console.log(usedCharacters)
  } 
  if (confirm("Click OK to confirm adding numeric characters") == true) {
    usedCharacters += numbers;
    console.log(usedCharacters)
  } 
  if (confirm("Click OK to confirm adding special characters") == true) {
    usedCharacters += symbols;
    console.log(usedCharacters)
  } 
  if (usedCharacters == 0 ){
    alert("You have to pick one option at least")
    test();
  }
  
  // if (usedCharacters == lowerAlphabets || usedCharacters == upperAlphabets || usedCharacters == numbers || usedCharacters == symbols){
  //   alert("You have to pick one option at least")
  // }
  return usedCharacters;
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

