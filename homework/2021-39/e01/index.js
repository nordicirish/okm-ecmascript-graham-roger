// 1. Let’s assume you have two operations that takes some time
// a) long calculation
// b) sending the result of that calculation to backend or database
// Both of these are asynchronous and must be done with that order, so first A and then B.
// Take the following and run it:

// var sum = null;

// function makeCalculation() {
//   console.log("2) calculating sum...");
//   sum = 5 + 5;
//   console.log("3) sum is " + sum);
// }

// function sendStuffToBackend() {
//   console.log("4) sending " + sum + " to backend's database");
// }

// console.log("1) starting the calculation and sending");
// setTimeout(makeCalculation, 2000);
// setTimeout(sendStuffToBackend, 1000);
// console.log("5) ending the calculation and sending");

// functions are returning their results in the wrong order
// null result sent to the database as this is done before the
// calculated result is returned

// V2 using setTimeout
// var sum = null;

// function makeCalculation() {
//   console.log("2) calculating sum...");
//   sum = 5 + 5;
//   console.log("3) sum is " + sum);
// }

// function sendStuffToBackend() {
//   console.log("4) sending " + sum + " to backend's database");
// }

// console.log("1) starting the calculation and sending");
// setTimeout(makeCalculation, 2000);
// setTimeout(sendStuffToBackend, 1000);
// console.log("5) ending the calculation and sending");

// uses setTimeout to control the order of function execution
// outputs correct result but is an inefficient way of doing things
// here we have one async function (`makeCalculation`) that calls another async function (`sendStuffToBackend`).
// This can be really hard to follow if we have a lot of async function
//  calling other async function calling other async function.
//  Also problem is how to catch error handling, if problems occur
// either in making the calculation or sending to backend.

// let p = new Promise(function);
// The Promise takes a function that has some kind of async behaviour.
// Also the function has to have two functions(resolve, reject) as an argument.

// function asynFunc(resolve, reject) {
//   setTimeout(() => {
//     console.log("calculating stuff");
//     let division = 5 / 5;
//     resolve(division);
//   }, 1000);
// }

// const calculationPromise = new Promise(asynFunc);
// // // The promise object, calculationPromise here has then function that takes function as an argument:
// function ready(result) {
//   console.log(`result is ${result}`);
// }
// // calculationPromise.then(ready);
// // const calculationPromise = new Promise(asynFunc);
// // arrow notation below
// calculationPromise.then((result) => console.log(`result is ${result}`));

function makeCalculation() {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log("calculating stuff");
      const division = 5 / 5;
      resolve(division);
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

// make the calculation that takes time and when ready, invoke the
// arrow function.
makeCalculation().then((result) => console.log(`result = ${result}`));

// Now make another function sendStuffToBackend that returns a promise:
function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}

// Notice that this one has one argument result. Now chain these two promise functions together:

// makeCalculation()
//   .then((division) => {
//     return sendStuffToBackend(division);
//   })
//   .then((msg) => {
//     console.log(msg);
//   });

// arrow notation
makeCalculation()
  .then((sum) => sendStuffToBackend(sum))
  .then((msg) => console.log(msg));
