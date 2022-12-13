// Assignment code here

function generatePassword() {

// Prompt the user for the password length
let length = prompt("Enter the desired password length (8-128 characters):");

// Validate the password length
while (length < 8 || length > 128) {
  alert("Invalid password length. Please enter a value between 8 and 128.");
  length = prompt("Enter the desired password length (8-128 characters):");
}

// Prompt the user for the character types to include in the password
let lowercase = confirm("Include lowercase characters in the password?");
let uppercase = confirm("Include uppercase characters in the password?");
let numeric = confirm("Include numeric characters in the password?");
let special = confirm("Include special characters in the password?");

// Validate the character types
while (!lowercase && !uppercase && !numeric && !special) {
  alert("At least one character type must be selected. Please try again.");
  lowercase = confirm("Include lowercase characters in the password?");
  uppercase = confirm("Include uppercase characters in the password?");
  numeric = confirm("Include numeric characters in the password?");
  special = confirm("Include special characters in the password?");
}

/*//TODO

let charactersPw=[]
 // if lowercase true add to characterPW [abcdefghijklmnopqrstuvwxyz]
 // if uppercase true add to characterPW [ABCDEFGHIJKLMNOPQRSTUVWXYZ]
 // if numerical true add to characterPW [1234567890]
 // if special true add to characterPw  [!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]


 //for (let i = 0; i < length; i++) {pick random character from characterPw and assign it to password as string}
  
 // Return the generated password
  */

return password="PlaceholderDoNotUse"; 
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
