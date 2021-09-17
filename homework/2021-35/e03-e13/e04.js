//require() loads node module
var readlineSync = require("readline-sync");
// Wait for user's response.
var userName = readlineSync.question("What is your your name? ");
let i = 0;
let outputText = "";
while (i < 4) {
  outputText += userName;
  i++;
}
console.log("Hi " + outputText + "!");

// alternative method using string repeat
// console.log('Hi ' + userName.repeat(4) + '!');
