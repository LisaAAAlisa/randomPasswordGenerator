// Assignment Code
var generateBtn = document.querySelector
("#generate");

function generatePassword {

var passChars = "0123456789@#$" +
            "abcdefghijklmnopqrstuvwxyz" +
            "ABCDEFGHIJKLMNOPRSTUVWXYZ";

}

var passLength= prompt("Please choose password length between 8 and 128 characters");
var lowerCase= prompt("Do you want your password to contain lowercase letters?");
var upperCase= prompt("Do you want your password to contain uppercase letters?");
var numbers= prompt("Do you want your password to contain numbers?");
var special= prompt("Do you want your password to contain special characters?");

if (passLength < 8 || passLength > 128) {
  alert("the password requirement is not met");
  return;
}
if(!(lowerCase || upperCase || numbers || special)) {
  alert("Password must contain at least one type of character.");
  return;
}
var password = "";
var charArray = [0];

if (lowerCase) {

}
if (upperCase) {

}
if (numbers) {

}
if (special) {

}

var minimumCount = 0;

for (var i=0; i=<128; i++) {
  var oneCh = Math.floor(Math.random() *specialChars,length +1);
  password += specialChars.charAt(oneCh)
  return Math.random(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
