// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 // The following section contains the code that controls the prompts that will determine the parameters of the password. Console.logs are there to verify this code is working and should be commented out prior to submitting project //

    let pwdLength = prompt("How many characters would you like (min:8 , max:128)")
    console.log(pwdLength)

    // Trying to figure out how to reload the page immediately if the number falls outside acceptable parameters so the user doesnt go through the rest of the questions to have the page reload on them.// 

        if (pwdLength < 8) {
            alert("You need at least 8 characters, reload the page and try again");
            window.stop();
            location.reload();
        }

        // } else if (pwdLength > 128) {
        //     alert("Nobody needs a password that big, refresh and try again!");
        //     location.reload();
        // } else {
        //     alert("you want a pasword with " + pwdLength + " characters? No problemo!");
        // }

    let lowerCase = confirm('Do you want lower case letters')
    console.log (lowerCase)

    let upperCase = confirm ('Do you want upper case letters')
    console.log(upperCase)

    let numbers = confirm ('Would you like numbers in the password?')
    console.log (numbers)

    let specialCharacters = confirm ('Do you want to use any special characters')
    console.log (specialCharacters)

    // The following section contains variables to store the answers from the prompt section. Again the console.logs should be commented out prior to submitting the project//

    var length = pwdLength
    console.log ('The password length should be ' + length)

    var lCase = lowerCase
    console.log ('Should the password have lower case letters? : ' + lCase)

    var uCase= upperCase
    console.log ('Should the password have upper case letters? : ' + uCase)

    var number = numbers
    console.log ('Should there be numbers in the password? : ' + number)

    var specialChar = specialCharacters
    console.log ('Should the password have special characters? : ' + specialChar)

// The following are the arrays for uppercase, lower case, numbers and special characters// 
    var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    console.log (uc)

    var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    console.log (lc)

    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    console.log(num)

    var sc = ["~", "`", "!", "@", "#", "$", "%", "^", "&","*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]","|", "/", ":", ";", "'", '"', "<", ">", ",", ".", "?",'\\']
    console.log (sc)
 
 // PsuedoCode

  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password

//   return password;
// }
 
 
    // PsuedoCode
  // prompt = length
    // let pwdLength = prompt("how many characters")
    // console.log(pwdLength)
  // confirm - lowercase, uppercase, numeric, special characters
    // let numbers  =  confirm("DO you want numbers");
      // console.log(numbers);
  // create var to hold anser to prompt/confirm 
  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

  // List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password

//   return password;
// }