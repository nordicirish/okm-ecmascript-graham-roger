const readline = require("readline-sync");
// ìmported functions
const { save, getAll } = require("./database.js");

function main() {
  const choices = ["Save", "Display"];
  let index = readline.keyInSelect(choices, "Your Choice?");
  switch (choices[index]) {
    case "Save":
      save("jack")
        .then(() => console.log(`Saved!`))
        .catch((err) => console.log(err));
      break;
    case "Display":
      getAll()
        .then((names) => console.log(names))
        .catch((err) => console.log(err));
      break;
  }
}
main();
