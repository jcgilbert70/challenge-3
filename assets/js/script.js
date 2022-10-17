//Assignment Code

/*   pseudo code for referencing
#1 prompt user for the password criteia
    a) password length 8 < 128
    b) include special characters
    c) include numbers
    d) include lowercase
    e) include uppercase
#2 validate the input
#3 generate password based on criteria
    a) collect all variable arrays
    b) random generate passwod from available variables
#4 display password
*/

// possible character arrays
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ",", ".", "/", "<", ">", "?", "{", "}", "[", "]", "~"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// alert to inform user how to begin
alert("Click on Generate Password to begin selecting your password generation specifications")

// (#1) prompt password creation
function generatePassword() {
    console.log("Generate Password button pressed")
    
    // (#1-a user entered password length)
    // set confirmLength variable outside of paramiters to go through loop, display prompt, then let user go through the while loop until valid entry
    var confirmLength = 0

    while (confirmLength < 8 || confirmLength > 128) {
        alert("Please select a length for password between 8 and 128 characters");
        var confirmLength = (prompt("Click OK to confirm length of password"));
        console.log("User chose password length of: " + confirmLength)
    }

    // set the variable values to false to display the alert message then let user go through loop until valid entry, this change got rid of several lines of duplicate code
    var confirmSpecialChar = false
    var confirmNumericChar = false
    var confirmLowercase = false
    var confirmUppercase = false

    // (#2) validates viable options were selected or returns message to try again
    while (confirmSpecialChar === false && confirmNumericChar === false && confirmLowercase === false & confirmUppercase === false) {
        alert("Please select at least one option of special characters, numeric characters, lowercase characters, and uppercase characters to be included in your random password")

        // if all were false, re-attempts to confirm special characters, numbers, uppercase, and lowercase 
        // (#1-b) user picks to use special characters
        var confirmSpecialChar = confirm("Click OK to confrim if your password will include special characters");
        console.log("did user add special characters: " + confirmSpecialChar)

        //  (#1-c) user picks to use numbers
        var confirmNumericChar = confirm("Click OK to confrim if your password will include numeric characters");
        console.log("did user add numbers: " + confirmNumericChar)

        // (#1-d) user picks to use lowercase characters
        var confirmLowercase = confirm("Click OK to confrim if your password will include lowercase characters");
        console.log("did user add lowercase characters: " + confirmLowercase)

        // (#1-e) user picks to use uppercase characters
        var confirmUppercase = confirm("Click OK to confrim if your password will include uppercase characters");
        console.log("did user add uppercase characters: " + confirmUppercase)
    }

    // (#3-a) collecting all variables from arrays based on users decisions into new concatenated array
    var passwordVariables = []

    // if password will contain special characters is true bring in array for use
    if (confirmSpecialChar) {
        passwordVariables = passwordVariables.concat(specialChar)
        console.log("special characters added, show all elements in array: " + specialChar)
    }
    // if password will contain numbers is true bring in array for use
    if (confirmNumericChar) {
        passwordVariables = passwordVariables.concat(numbers)
        console.log("numbers added, show all elements in array: " + numbers)
    }
    // if password will contain lowercase characters is true bring in array for use
    if (confirmLowercase) {
        passwordVariables = passwordVariables.concat(lowercase)
        console.log("lowercase characters added, show all elements in array: " + lowercase)
    }
    // if password will contain uppercase characters is true bring in array for use
    if (confirmUppercase) {
        passwordVariables = passwordVariables.concat(uppercase)
        console.log("uppercase characters added, show all elements in array: " + uppercase)
    }

    // just lists the full array of available variables for password generation
    console.log("full list of all variables used to create the random password: " + passwordVariables)

    // code to fill randomPassword in loop from available variables
    var randomPassword = ""

    // (#3-b) generates password per legth given by user, by randomly selecting from variables made available by user
    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordVariables[Math.floor(Math.random() * passwordVariables.length)];
        console.log(randomPassword)
    }

    // (#4) code here, then return result var
    return randomPassword;
}

// Write password to the #password input text area
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//event listener to prompt questions when button pushed
document.querySelector("#generate").addEventListener("click", writePassword);