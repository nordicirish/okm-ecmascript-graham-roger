var a = 10; // globally scoped var a
function testVar() {
  //functionally scoped var a is hoisted to top
  console.log("a is " + a); // output undefined - value is not hoisted from below with the variable
  var a = 20; // functionally scoped var a - var allows two different variables to have the same name
  console.log("a is " + a); // output 20
}
testVar();
console.log("a is " + a); //output 10 - global var value

function testLet() {
  let b = 10;
  console.log("b is " + b); // b is 10
  b = 20; // unable to use let to declare 2 variables of the same name
  console.log("b is " + b); // output 20
}
testLet();
// console.log("b is " + b); --- --- Uncaught ReferenceError: b is not defined as b is block scoped and not available globally

function testConst() {
  const c = 10;
  console.log("c is " + c); //c is 10
  c = 20;
  console.log("c is " + c); //Uncaught TypeError: Assignment to constant variable -- const values cannot be changed.
}
testConst();
