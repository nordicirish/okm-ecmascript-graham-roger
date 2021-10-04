// Move require to top
const fs = require("fs");
const readlineSync = require("readline-sync");
const util = require("util");
const readFile = util.promisify(fs.readFile); // read file now a promise

// not needed
// const { resolveMx } = require("dns");

// Wait for user's response.
let fileName = readlineSync.question("Give file name? ");

function parseJson(data) {
  function func(resolve, reject) {
    const obj = JSON.parse(data);
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

// first read, then parse. If parsing fails it will go to the catch
readFile(fileName, "utf-8")
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log("error handling here " + msg));
