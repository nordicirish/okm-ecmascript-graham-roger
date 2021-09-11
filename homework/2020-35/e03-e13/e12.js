// eslint-disable-next-line no-unused-vars
function palindromeCheck(str) {
  // uses builtin javascript functions

  const newString = string.toLowerCase().split(" ").join("").trim();
  // converts to lowercase -- split and join remove internal spaces -- trim external spaces
  // console.log("newstring",newString);
  // convert string to an array
  const array = Array.from(newString);
  // reverse the array values
  const reverseArray = array.reverse();
  // convert array to string
  const reverseString = reverseArray.join("");
  // console.log("reverse", reverseString);

  if (newString == reverseString) {
    console.log("Yup it is a palindrome");
  } else {
    console.log("Nope not a palindrome");
  }
}

// user input
// require() loads node module
var readlineSync = require("readline-sync");
console.log("Welcome to the pallindrome checker");
const string = readlineSync.question("Please enter a string! "); // Wait for user's response.
palindromeCheck(string);
