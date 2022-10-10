// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("button pressed")

/*

#1 prompt user for the password criteia
    a) password length 8 < 128
    b) include lowercase
    c) include uppercase
    d) include special characters
#2 validate the input
#3 generate password based on criteria
#4 display password

*/

// (#4) code here, then return result var
    return "generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















dictionary = +'abcdefghijklmnopqrstuvqxyz';
dictionary = +'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
dictionary = +'1234567890';
dictionary = +'!@#$%^&*()_+-{}[];<>:';