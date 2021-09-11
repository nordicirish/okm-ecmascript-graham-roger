function stringFormats() {
  let x = "hello";
  let y = "hello";
  let z = `hello`;
  let yourBill = "20";
  let a = x + " John your discounted bill is ${yourBill * 0.8} euros";
  console.log(a); //  everything inside the quotes is treated as a string
  let b = y + " John your discounted bill is ${yourBill * 0.8} euros";
  console.log(b); //  everything inside the quotes is treated as a string
  let c = z + ` John your discounted bill is ${yourBill * 0.8} euros`;
  console.log(c); //  ``allow for the inclusion of expressions which will be executed and the result included in the output
}
stringFormats();
