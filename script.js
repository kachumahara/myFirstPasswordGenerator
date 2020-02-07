// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
	var params = {
		lowercase: confirm('Would you like to use lowercase characters?'),
		uppercase: confirm('Would you like to use uppercase characters?'),
		specialChars: confirm('Would you like to use special characters?'),
		numericChars: confirm('Would you like to use numeric characters?'),
	};
	while (params.length < 8 || params.length > 128 || params.length === undefined) {
		options.length = prompt('How long would you like your password to be?');
	}
	var password = generatePassword(params);
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}
function generatePassword(options) {}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
