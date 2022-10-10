// Assignment Code

// possible character arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialChar;
var confirmNumericChar;
var confirmLowercase;
var confirmUppercase;


var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("button pressed")
    var confirmLength = (prompt("How many characters will your password contain"));

    while (confirmLength < 8 || confirmLength > 128) {
        alert("Must select length for password between 8 and 128 characters");
        var confirmLength = (prompt("How many characters will your password contain"));
    }

    confirmSpecialChar = confirm("Click on confrim if your password will include special characters");
    console.log(confirmSpecialChar)
    confirmNumericChar = confirm("Click on confrim if your password will include numeric characters");
    console.log(confirmNumericChar)
    confirmLowercase = confirm("Click on confrim if your password will include lowercase characters");
    console.log(confirmLowercase)
    confirmUppercase = confirm("Click on confrim if your password will include uppercase characters");
    console.log(confirmUppercase)

    var passwordChar = []

    if (confirmSpecialChar) {
        passwordChar = passwordChar.concat(specialChar)
        console.log(specialChar)
    }

    if (confirmNumericChar) {
        passwordChar = passwordChar.concat(numbers)
        console.log(numbers)
    }

    if (confirmLowercase) {
        passwordChar = passwordChar.concat(lowercase)
        console.log(lowercase)
    }

    if (confirmUppercase) {
        passwordChar = passwordChar.concat(uppercase)
        console.log(uppercase)
    }

    console.log(passwordChar)

    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar)];
        console.log(randomPassword)
    }
    /*
    
    #1 prompt user for the password criteia
        a) password length 8 < 128
        b) include numbers
        c) include lowercase
        d) include uppercase
        e) include special characters
    #2 validate the input
    #3 generate password based on criteria
    #4 display password
    
    */

    // (#4) code here, then return result var
    return randomPassword;
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