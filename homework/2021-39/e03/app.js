function main() {
  let readlineSync = require("readline-sync");
  // Wait for user's response.
  let fileName = readlineSync.question("Give file name? ");
  //   console.log("The file name is " + fileName);
  readFile(fileName);
}
function readFile(fileName) {
  const fs = require("fs");
  fs.readFile(fileName, "utf-8", (err, data) => {
    //   callback function receives err and data args
    const obj = JSON.parse(data);
    if (err) {
      console.log("Filename does not exist");
    } else {
      console.log(obj.name);
    }
  });
}

main();
