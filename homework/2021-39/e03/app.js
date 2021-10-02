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
    if (err) {
      console.log("Filename does not exist");
    } else {
      try {
        const obj = JSON.parse(data);
        // console.log("valid json");
        //   valid json test
        try {
          if ("name" in obj) {
            console.log(`name is ${obj.name}`);
          }
          // name key test
        } catch (err) {
          console.log(`file ${fileName} contains json but not property name`);
        }
      } catch (err) {
        console.log(`file ${fileName} does not contain json`);
      }
    }
  });
}

main();
