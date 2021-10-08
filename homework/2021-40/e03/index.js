import { max, min } from "./modules/utility.js";
import input from "./modules/commandlineargument.js";
// default export can be renamed on import

let myArray = [1, 2, 3, 4];
console.log(max(myArray));

let myArray2 = [1, 2, 3, 4];
console.log(min(myArray2));

let myArray3 = input();
console.log("max is ", max(myArray3));
console.log("min is ", min(myArray3));
