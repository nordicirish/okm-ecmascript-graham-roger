let readlineSync = require("readline-sync");
// Wait for user's response.
let fileName = readlineSync.question("Give file name? ");
//   console.log("The file name is " + fileName);
const util = require("util");
const fs = require("fs");
const { resolveMx } = require("dns");
const readFile = util.promisify(fs.readFile); // read file now a promise
readFile(fileName, "utf-8")
  .then((data) => console.log(data))
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));

function parseJson(data) {
  const obj = JSON.parse(data);
  function func(resolve, reject) {
    if ("name" in obj) {
      resolve(data);
    } else {
      reject("property not found");
    }
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject
  }
  const p = new Promise(func);
  return p;
}
