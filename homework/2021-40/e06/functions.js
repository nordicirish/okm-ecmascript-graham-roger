import * as fs from "fs";
import util from "util";
import readlineSync from "readline-sync"; //module import
const readFile = util.promisify(fs.readFile); // read file now a promise

async function importData() {
  let data = await readFile("./names.json", "utf-8");
  let hr = await JSON.parse(data);
  return hr;
}

// List names and amounts, order by amount, most popular first
async function listNameAmount() {
  let hr = await importData();
  let popularNames = hr.names.sort((a, b) => b.amount - a.amount);
  console.log("Names sorted by popularity");
  popularNames.forEach((person) => console.log(person.name, person.amount));
}

// List names in alphabetical order
async function listNames() {
  let hr = await importData();
  //destructure
  let result = hr.names.map((person) => ({
    name: person.name,
  }));

  let alphaOrderNames = result.sort((a, b) => a.name.localeCompare(b.name));
  console.log("Names in alphabetical order");
  alphaOrderNames.forEach((person) => console.log(person.name));
}

// Return the total amount of all the names
async function totalAmount() {
  let hr = await importData();
  //destructure
  let result = await hr.names.map((person) => ({
    name: person.name,
    amount: person.amount,
  }));
  let total = 0;
  for (let i = 0; i < result.length; i++) {
    total = total + result[i].amount;
  }

  console.log("Total employees: ", total);
}

// Return the amount of the name given as a parameter
async function amountOfName() {
  let hr = await importData();
  //destructure
  let result = await hr.names.map((person) => ({
    name: person.name,
    amount: person.amount,
  }));
  let nameSearched = readlineSync.question("May I have a name?\n");
  try {
    const nameFound = result.filter(function (person) {
      return person.name == nameSearched;
    });
    console.log(
      "There are",
      nameFound[0].amount,
      "people called",
      nameFound[0].name,
      "working here"
    );
  } catch {
    console.log(nameSearched, "was not found");
  }
}

export { listNameAmount, listNames, totalAmount, amountOfName, readlineSync };
// allows imported readlineSync to be exported again
