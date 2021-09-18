let readlineSync = require("readline-sync");

let people = [
  { name: "John" },
  { name: "Paul" },
  { name: "George" },
  { name: "Ringo" },
]; //initialise the array with some key value pair objects

const add = () => {
  let name = readlineSync.question("Give me a name: ");
  people.push({ name: name });
  display(); // executes display function
};

const remove = () => {
  let name = readlineSync.question("Give me a name: ");
  people = people.filter((person) => person.name != name);
  display();
};
// filter creates a new array with onject that match the criteria (must not match the name entered)
const display = () => {
  console.log("People in the database");
  {
    people.forEach((person) => console.log(person.name)); //anonymous function iterates through the array using forEach and outputs each name
  }
};

const main = () => {
  let choices = ["Add", "Remove", "Display"];
  let index = 1;
  while (index != -1) {
    // switch statements are inside a loop statement to stop the break statments from making the main function exit
    index = readlineSync.keyInSelect(choices, "Choice?");
    switch (index) {
      case 0:
        add();
        break;
      case 1:
        remove();
        break;
      case 2:
        display();
        break;
    }
  }
};
main();
