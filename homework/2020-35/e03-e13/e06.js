var a = 10; // globally scoped var a
function testVar() {
  //functionally scoped var a is hoisted to top - undefiined value as value remains below
  console.log("a is " + a); // output undefined - value is not hoisted from below with the variable
  var a = 20; // functionally scoped var a - var allows two different variables to have the same name
  console.log("a is " + a); // output 20
}
testVar();
console.log("a is " + a); //output 10 - globally scoped var value

// let is block scoped
function testLet() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
}

testLet();
// can't be referenced oustside the block
try {
  console.log(i);
} catch (error) {
  console.error(error);
}

function testConst() {
  const c = 10;
  console.log("c is " + c); //c is 10
  c = 20;
  try {
    console.log("c is " + c); //Uncaught TypeError: Assignment to constant variable -- const values cannot be changed.
  } catch (error) {
    console.error(error);
  }
}
testConst();
