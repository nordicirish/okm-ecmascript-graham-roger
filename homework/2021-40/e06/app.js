import {
  listNameAmount,
  listNames,
  totalAmount,
  amountOfName,
  readlineSync,
} from "./functions.js";

async function main() {
  let choices = [
    "List names and amounts",
    "List names",
    "Total amount of people",
    "Amount of given name",
  ];
  let index = 1;
  while (index != -1) {
    index = readlineSync.keyInSelect(choices, "Your choice?");
    switch (index) {
      case 0:
        await listNameAmount();
        break;
      case 1:
        await listNames();
        break;
      case 2:
        await totalAmount();
        break;
      case 3:
        await amountOfName();
        break;
    }
  }
}
main();
