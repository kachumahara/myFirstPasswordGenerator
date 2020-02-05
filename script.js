// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLenght = prompt("How many characters would you like?")
  var uppercase = confirm("would you like to use uppercase characters?")
  var lowercase = confirm("would you like to use lowercase characters?")
  var numericNumbers = confirm("would you like to ise numeric characters?")
  var specialcharacters = confirm("would you like to use special?" )

  passwordText.value = password;
}
function generatePassword(){
getNumbers();
getLowerCases();
getUpperCases();
getSpecialCharacters();   

   
}

function getNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getLowerCases() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

function getUpperCases() {
  return +String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getSpecialCharacters() {
  return specialCharacters(Math.floor(Math.random() * specialCharacters.length));
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
