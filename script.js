// Assignment Code
var generateBtn = document.querySelector
  ("#generate");

function generatePassword() {

  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  // get user input
  var passLength = prompt("Please choose password length between 8 and 128 characters");
  //validate user input
  if (passLength < 8 || passLength > 128) {
    alert("please choose password between 8 to 128 characters");
    return;

  }
  var hasLowerCase = confirm("Do you want your password to contain lowercase letters?");
  var hasUpperCase = confirm("Do you want your password to contain uppercase letters?");
  var hasNumbers = confirm("Do you want your password to contain numbers?");
  var hasSpecial = confirm("Do you want your password to contain special characters?");

  // making sure that at least one of the variables is represented
  if (!(hasLowerCase || hasUpperCase || hasNumbers || hasSpecial)) {
    alert("you must choose at least one of the criteria");
    return;
  }
  var password = [];
  // setting the loop to run until the password length requirement is satisfied
  for (i = 0; i <= passLength; i++) {
    if (hasSpecial) {
      password.push(special[Math.floor(Math.random() * special.length)]);
      if (password.length == passLength) {
        break;
      }
      console.log(password);
    }
    if (hasNumbers) {
      password.push(numbers[Math.floor(Math.random() * numbers.length)]);
      if (password.length == passLength) {
        break;
      }
      console.log(password);
    }
    if (hasUpperCase) {
      password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
      if (password.length == passLength) {
        break;
      }
      console.log(password);
    }
    if (hasLowerCase) {
      password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
      if (password.length == passLength) {
        break;
      }
    }
  }
  console.log(password);
// shuffle password result and join the string to remove commas
  var charCount = password.length;
  var shufflePass = [];
  for (i = 0; i < charCount; i++) {
    var index = Math.floor(Math.random() * password.length);
    shufflePass.push(password[index]);
    password.splice(index, 1);
  }
  return (shufflePass.join(''));
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
