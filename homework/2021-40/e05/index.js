const readline = require("readline-sync");
// ìmported functions
const { save, getAll } = require("./database.js");

// Turn your main function to async. Use async + await syntax.

async function main() {
  const choices = ["Save", "Display"];
  let index = readline.keyInSelect(choices, "Your Choice?");
  switch (choices[index]) {
    case "Save":
      try {
        await save("jack"); // awaits promise from save function
        console.log(`Saved!`);
      } catch (err) {
        console.log(err);
      }
      break;
    case "Display":
      try {
        let result = await getAll(); // result equals promise object
        console.log(result);
      } catch (err) {
        console.log(err);
      }
      break;
  }
}
main();
