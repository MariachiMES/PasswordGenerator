//when i click on the generate button, prompts appear
var generateBtn = document.querySelector("#generate");
var passwordTextEl = document.querySelector("#password");
var yourNewPassWord = [];
var passwordInfo = ["Y"];
var arrayPassword = [];
var acceptableChoices = ["Y", "N"];
var alphaUpper = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var alphaLower = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var possibleNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var possibleSymbols = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "|",
  "[",
  "]",
  "|",
  ":",
  ";",
  "'",
  "<",
  ">",
  "?",
  ",",
  ".",
  "/",
];

var prompting = function () {
  function passwordCriteria() {
    pwLength = prompt(
      "how many characters would you like your password to be? (enter 8-128)"
    );
    while (pwLength > 128 || pwLength < 8) {
      alert("please enter a number between 8-128");
      passwordCriteria();
    }
  }
  function upperCasing() {
    upperCaseChoice = prompt(
      "would you like to use uppercase letters? (Please enter 'Y' or 'N'."
    ).toUpperCase();
    while (!acceptableChoices.includes(upperCaseChoice.toUpperCase())) {
      alert("please enter 'Y' or 'N'.");
      upperCasing();
    }
  }
  function lowerCasing() {
    lowerCaseChoice = prompt(
      "would you like to use lowercase letters? (Please enter 'Y' or 'N'."
    ).toUpperCase();
    while (!acceptableChoices.includes(lowerCaseChoice.toUpperCase())) {
      alert("please enter 'Y' or 'N'.");
      lowerCasing();
    }
  }

  function symbolCasing() {
    symbolCaseChoice = prompt(
      "would you like to use symbols? (Please enter 'Y' or 'N'."
    ).toUpperCase();
    while (!acceptableChoices.includes(symbolCaseChoice.toUpperCase())) {
      alert("please enter 'Y' or 'N'.");
      symbolCasing();
    }
  }
  function numberCasing() {
    numberCaseChoice = prompt(
      "would you like to use numbers? (Please enter 'Y' or 'N'."
    ).toUpperCase();
    while (!acceptableChoices.includes(numberCaseChoice.toUpperCase())) {
      alert("please enter 'Y' or 'N'.");
      numberCasing();
    }
    if (
      numberCaseChoice === "N" &&
      lowerCaseChoice === "N" &&
      upperCaseChoice === "N" &&
      symbolCaseChoice === "N"
    ) {
      alert("You must choose at least one type of character");
      prompting();
    }
  }

  passwordCriteria();
  upperCasing();
  lowerCasing();
  symbolCasing();
  numberCasing();
};

var arrayConcat = function () {};
prompting();
if (passwordInfo.includes(upperCaseChoice)) {
  arrayPassword = arrayPassword.concat(alphaUpper);
}
if (lowerCaseChoice.includes(passwordInfo)) {
  arrayPassword = arrayPassword.concat(alphaLower);
}
if (symbolCaseChoice.includes(passwordInfo)) {
  arrayPassword = arrayPassword.concat(possibleSymbols);
}
if (numberCaseChoice.includes(passwordInfo)) {
  arrayPassword = arrayPassword.concat(possibleNumbers);
}

var emptyArrayPw = [];

for (i = 0; i < pwLength; i++) {
  var randPassword = (emptyArrayPw +=
    arrayPassword[Math.floor(Math.random() * arrayPassword.length)]);
}
console.log(randPassword);

var validator = function () {
  if (
    passwordInfo.includes(upperCaseChoice) &&
    alphaUpper.includes(!randPassword)
  ) {
    generatePassword();
  }
  if (
    passwordInfo.includes(lowerCaseChoice) &&
    alphaLower.includes(!randPassword)
  ) {
    generatePassword();
  }
  if (
    passwordInfo.includes(symbolCaseChoice) &&
    possibleSymbols.includes(!randPassword)
  ) {
    generatePassword();
  }
  if (
    passwordInfo.includes(numberCaseChoice) &&
    possibleNumbers.includes(!randPassword)
  ) {
    generatePassword();
  } else {
    passwordTextEl.append(randPassword);
  }
};

generateBtn.addEventListener("click", validator);

// var ThisIsYourPassword = function() {}
//     var yourNewPassword = [];
//     for (var i = 0; i <= pwLength.length; i++){
//     (Math.floor(Math.random()) * arrayPassword)
//     [i].push(yourNewPassWord);
// }

// console.log(yourNewPassword);
// console.log(ThisIsYourPassword());

// function random(input) {
//     var link = Math.floor(Math.random() * input.length);
//     var koolaid = input[link];
//     return koolaid;
// }

// var passwordArray = (passwordInfo.join());
// console.log(passwordArray.length)

// var finalPassword = {
//     for (var i = 0; i < pwLength; i++) {
//         Math.floor(Math.random()*passwordArray.length - 1);
// console.log(finalPassword.toString(","))
//     }
// }

// for (var i = 0; i < pwLength.length; i++){
//     var fuckingPassword = ""
//     fuckingPassword.push(Math.floor(Math.random() * passwordArray-1))
//     console.log(fuckingPassword);
// }

// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector(“#password”);
//      passwordText.value = password;
//      }
//   // Add event listener to generate button

// generateBtn.addEventListener("click”, writePassword)l

// var getRandomPassword = function () {
//     Math.floor((Math.random())* passwordArray.length);
//     console.log(getRandomPassword);
// }

// var generatedPassword = function (){
//     for (var i = 0; i < passwordInfo.Length; i++){
//         passwordInfo(Math.floor(Math.Random) * passwordInfo.length)
//     }
// }
// console.log(generatePassword)

//functions to generate random uppercase letters

//function to generate random lowercase letters

//function to generate random symbols

//function to generate random numbers

// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
