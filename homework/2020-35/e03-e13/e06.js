var i = 5;
function testVar() {
  for (var i = 0; i < 3; i++) {
    //two variables of the same name can be declared using var
    console.log("i is", i);
  }
  try {
    console.log("i is", i); //var values can be changed  and are functually scoped or globally scoped
  } catch (error) {
    // i can be accessed outside the block it was declared in .. will fail if let is used
    console.error(error);
  }
}
try {
  console.log(" Global i is " + i); //output 5 - globally scoped var value
} catch (error) {
  console.error(error);
}

testVar();

// let values can be changed but let is block scoped
function testLet() {
  for (let z = 0; z < 3; z++) {
    console.log("z is ", z);
  }
  try {
    console.log("z is ", z); // fails because access is outside the code block
  } catch (error) {
    console.error("Let can't be accessed outside its block scope ", error);
  }
}

testLet();

function testConst() {
  const c = 10;
  console.log("c is " + c); //c is 10
  c = 20;
  try {
    console.log("c is " + c);
  } catch (error) {
    console.error("Const values can't be changed", error);
  }
}
testConst();
