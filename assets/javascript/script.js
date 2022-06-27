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

 // This function determines the password length.
    var length = ""

    var passwordLengthFunction = function () {
        let pwdLength = prompt("How many characters would you like (min:8 , max:128)")
    
      
        if (pwdLength < 8) {
                  alert("You need at least 8 characters, reload the page and try again");
                  passwordLengthFunction()
        }
        else if (pwdLength > 128) {
            alert ('That is over the maximum number of characters, try again')
            passwordLengthFunction()
        }
        else {
            length = pwdLength
        }
      }
      // runs function 
      passwordLengthFunction();

      //logs output of length to the console. Should be removed later 
      console.log ("The password length should be: " + length + " characters long!")

    // The following prompts will set the remaining criteria for the password. console logs are included now so I can check my work, but will probably be removed once the program runs properly

    let lowerCase = confirm('Do you want lower case letters')
    console.log ('The password should contain lower case letters: ' + lowerCase)

    let upperCase = confirm ('Do you want upper case letters')
    console.log('The password should contain upper case letters : ' + upperCase)

    let numbers = confirm ('Would you like numbers in the password?')
    console.log ("The password should contain numbers : " + numbers)

    let specialCharacters = confirm ('Do you want to use any special characters')
    console.log ("The password should contain specail characters : " + specialCharacters)

    // This if statement validates that the password will contain at least one of the designated password elements are present. If none of the elements are selected it will refresh the page and force the user to start the process over again //

    if (lowerCase == false && upperCase == false && numbers == false && specialCharacters == false) {
        alert ('You must select at least 1 character type to continue'); 
        location.reload();
    }

// The following are the arrays for uppercase, lower case, numbers and special characters// 
    var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    // console.log (uc)

    var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // console.log (lc)

    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
    // console.log(num)

    var sc = ["~", "`", "!", "@", "#", "$", "%", "^", "&","*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]","|", "/", ":", ";", "'", '"', "<", ">", ",", ".", "?",'\\']
    // console.log (sc)

    // This section builds the master array for the project based upon the user's criteria 
    
    var concatRepo = [];

    if (upperCase ==true) {
        concatRepo = concatRepo.concat(uc);
        console.log(concatRepo)
    }

    if (lowerCase == true) {
        concatRepo = concatRepo.concat(lc)
        console.log(concatRepo)
    }

    if (numbers == true) {
        concatRepo = concatRepo.concat(num);
        console.log(concatRepo)
    }
    if (specialCharacters == true) {
        concatRepo = concatRepo.concat(sc)
        console.log (concatRepo)
    }
    
    console.log ("The final array includes: " + concatRepo)

    // concatLength will give us the total array size for all the selected arrays.
    
    let concatLenghth = concatRepo.length
    console.log ("The total length of the master array is : " + concatLenghth)

// The following function should generate random numbers that will eventually relate to characters in the concatRepo and will generate our random password.

function randomSelector(concatRepo) {
    for (let i=0; i < length; i++) { 
        return concatRepo = Math.floor(math.random() * concatLenghth)
    }
    console.log(randomSelector(concatRepo))
}
randomSelector()










 // PsuedoCode

  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

    
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

// **** Graveyard of unused code **** //
   // The following section contains variables to store the answers from the prompt section. Again the console.logs should be commented out prior to submitting the project//

    // var length = pwdLength
    // console.log ('The password length should be ' + length)

    // var lCase = lowerCase
    // console.log ('Should the password have lower case letters? : ' + lCase)

    // var uCase= upperCase
    // console.log ('Should the password have upper case letters? : ' + uCase)

    // var number = numbers
    // console.log ('Should there be numbers in the password? : ' + number)

    // var specialChar = specialCharacters
    // console.log ('Should the password have special characters? : ' + specialChar)

    
    
        // uc = uc.concat(lc, num)
        // console.log(uc)

    // if (upperCase == true) {
    //     concatRepo.push.apply (concatRepo, uc);
    //     console.log(concatRepo);
    // }
    
    // if (lowerCase == true){
    //     concatRepo.push.apply (concatRepo, lc);
    //     // console.log (concatRepo)
    // }

    // if (numbers == true) {
    //     concatRepo.push.apply (concatRepo, num)
    //     // console.log (concatRepo)
    // }
    
    // if (specialCharacters == true) {
    //     concatRepo.push.apply (concatRepo, sc);
    //     // console.log (concatRepo)
    // }