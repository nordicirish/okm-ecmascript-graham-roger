let database = [];
let user = "";
let key = 1;
let userName = "";
// let user = { id: key, nameStudent: "" };
function add(userName) {
  user = userName;
  user = { id: key, nameStudent: userName };
  database.push(user);
  key++;
}

function remove(index) {
  database.splice(index, 1);
}

function display() {
  var asciitable = require("asciitable");
  var options = {
    intersectionCharacter: "0",
    columns: [
      { field: "id", name: "Student ID Number" },
      { field: "nameStudent", name: "Student Name" },
    ],
  };
  var table = asciitable(database, options);
  console.log(table);
}

// Starting point of our app
function main() {
  var readlineSync = require("readline-sync"),
    choice = ["Add", "Remove", "Display"],
    index = readlineSync.keyInSelect(choice, "Choice?");
  // console.log("index", index);

  // let userName = "";
  let arrayIndex;

  while (true) {
    //wrap the switch in while true so break exits the switch statement rather than the whole program
    switch (index) {
      case (index = 0):
        userName = readlineSync.question("May I have a student name? ");
        add(userName);
        console.log(userName + " is added!");
        // console.log(database);
        choice = ["Add", "Remove", "Display"];
        index = readlineSync.keyInSelect(choice, "Choice?");
        break;
      case (index = 1):
        userName = readlineSync.question("May I have a student Name? ");
        // console.log("userName", typeof userName);
        arrayIndex = database
          .map(function (e) {
            return e.nameStudent;
          })
          .indexOf(userName);
        // console.log("indexvalue", indexValue);
        remove(arrayIndex);
        console.log(userName + " is removed!");
        // console.log(database);
        choice = ["Add", "Remove", "Display"];
        index = readlineSync.keyInSelect(choice, "Choice?");
        break;
      case (index = 2):
        display();
        choice = ["Add", "Remove", "Display"];
        index = readlineSync.keyInSelect(choice, "Choice?");
        break;
      default:
        choice = ["Add", "Remove", "Display"];
        index = readlineSync.keyInSelect(choice, "Choice?");
    }
  }
}
main();
