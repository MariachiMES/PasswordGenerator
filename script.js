//when i click on the generate button, prompts appear
var generateBtn = document.querySelector("#generate");


var passwordInfo = ["Y"]
var arrayPassword = [""]
var acceptableChoices = ["Y", "N"]
var alphaUpper = "QWERTYUIOPASDFGHJKLZXCVBNM".split("")
var alphaLower = "qwertyuiopasdfghjklzxcvbnm".split("")
var possibleNumbers = "1234567890".split("")
var possibleSymbols = "~!@#$%^&*()_+-={}|[]|:;'<>?,./".split("")

function prompting () {
function passwordCriteria () {
    pwLength = prompt("how many characters would you like your password to be? (enter 8-128)")
    while (pwLength > 128 || pwLength < 8) {
        alert ("please enter a number between 8-128")
        passwordCriteria()
    }
}
function upperCasing () {
    upperCaseChoice = prompt ("would you like to use uppercase letters? (Please enter 'Y' or 'N'.").toUpperCase()
    while (!acceptableChoices.includes(upperCaseChoice.toUpperCase())) {
        alert ("please enter 'Y' or 'N'.")
        upperCasing()
    }
}
function lowerCasing () {
    lowerCaseChoice = prompt ("would you like to use lowercase letters? (Please enter 'Y' or 'N'.").toUpperCase()
    while (!acceptableChoices.includes(lowerCaseChoice.toUpperCase())) {
        alert ("please enter 'Y' or 'N'.")
        lowerCasing()
    }
}

function symbolCasing () {
    symbolCaseChoice = prompt ("would you like to use symbols? (Please enter 'Y' or 'N'.").toUpperCase()
    while (!acceptableChoices.includes(symbolCaseChoice.toUpperCase())) {
        alert ("please enter 'Y' or 'N'.")
        symbolCasing()
    }
}
function numberCasing () {
    numberCaseChoice = prompt ("would you like to use numbers? (Please enter 'Y' or 'N'.").toUpperCase()
    while (!acceptableChoices.includes(numberCaseChoice.toUpperCase())) {
        alert ("please enter 'Y' or 'N'.")
        numberCasing()
    }
    if (numberCaseChoice === "N" && lowerCaseChoice === "N" && upperCaseChoice === "N" && symbolCaseChoice === "N"){
        alert("You must choose at least one type of character")
        prompting()
    }
}
passwordCriteria()
upperCasing()
lowerCasing()
symbolCasing()
numberCasing()
}
prompting()
if (upperCaseChoice.includes(passwordInfo)) {
    arrayPassword = arrayPassword + alphaUpper 
}
if (lowerCaseChoice.includes(passwordInfo)) {
    arrayPassword = arrayPassword + alphaLower;
}
if (symbolCaseChoice.includes(passwordInfo)) {
    arrayPassword = arrayPassword + possibleSymbols
}
if (numberCaseChoice.includes(passwordInfo)) {
    arrayPassword = arrayPassword + possibleNumbers
}

console.log(arrayPassword);
console.log(pwLength);
console.log(upperCaseChoice);
console.log(lowerCaseChoice);
console.log(symbolCaseChoice);
console.log(numberCaseChoice);

function random(input) {
    var link = Math.floor(Math.random() * input.length);
    var koolaid = input[link];
    return koolaid;
}


var passwordArray = (passwordInfo.join());
console.log(passwordArray.length)

function generatePassword() {
    var finalPassword = [i]
    for (var i = 0; i < pwLength; i++) {
        Math.floor(Math.random()*passwordArray.length - 1);
console.log(finalPassword.toString(","))
    }
}




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
// generateBtn.addEventListener("click", writePassword);