//require() loads node module 
var readlineSync = require('readline-sync');
// Wait for user's response.
var userName = readlineSync.question('What is your your name? ');
console.log('Hi ' + userName + '!');
 