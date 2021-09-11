const carBrands = [
  "Audi",
  "BMW",
  "Ford",
  "Lada",
  "Mercedes",
  "Nissan",
  "Toyota",
];

//initatilise 2 variables in 1 statement
let text = "";
for (let i = 0, len = carBrands.length; i < len; i++) {
  text += carBrands[i] + " ";
}
console.log(text);
text = ""; // reset text value
for (let x of carBrands) {
  text += x + " ";
}
console.log(text);
