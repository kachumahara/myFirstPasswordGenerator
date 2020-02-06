// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var params = {
		length: prompt('How long would you like your password to be?'),
		lowercase: confirm('Would you like to use lowercase characters?'),
		uppercase: confirm('Would you like to use uppercase characters?'),
		specialChars: confirm('Would you like to use special characters?'),
		numericChars: confirm('Would you like to use numeric characters?'),
	};
	var password = generatePassword(params);
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}
function generatePassword(options) {
	getNumbers();
	getLowerCases();
	getUpperCases();
	getSpecialCharacters();
	function GetNumbers() {
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

	if (options.numbers) {
		numbers === true;
		lowercase === true;
		uppercase === true;
		specialcharacters === true;
		return;
	}
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
