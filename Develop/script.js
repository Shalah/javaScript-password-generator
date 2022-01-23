// Assignment Code
// console.log("Check if everything is linked")



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // console.log(userInputLength);


}




function confirmedCharacters(){
  //Check this part later
  //console.log(usedCharacters)
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
  //console.log(usedCharacters)
  // if (usedCharacters == lowerAlphabets || usedCharacters == upperAlphabets || usedCharacters == numbers || usedCharacters == symbols){
  //   alert("You have to pick one option at least")
  // }
  return usedCharacters;
}


//Added this
function generatePassword(){
  var lowerAlphabets = "abcdefghijklmnopqrstuvwxyz";
  var upperAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!@#$%^&*(),./;{}[]<>";
  var usedCharacters = "";
  var userInputLength = "";
  var randomPassword = "";

  var userInput = Number(prompt("How many characters would you like your password to contain?"))
  console.log(userInput)
  console.log(typeof userInput)

  if (userInput < 8){ 
    alert("Password length must be at least 8")
    
  }
  if (userInput > 129){
    alert("Password length must less than 129")

  }
  else{
    userInputLength = userInput;
  }
  

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
  }
  else{
    for(let i=0; i < userInput; i++){
      randomPassword += usedCharacters.charAt(Math.floor(Math.random() * usedCharacters.length))
      //console.log(userInputLength);
    }
    console.log(randomPassword);
    return randomPassword;
  }

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);