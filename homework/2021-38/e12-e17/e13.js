// function doIt() {
//   console.log(this);
// }
// doIt();
// // global this

// function doIt() {
//   console.log(this);
// }
// let x = doIt;
// x();
// // global this

function doIt() {
  console.log(this);
}
obj = { key: "value" };

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj
let x = doIt.bind(obj);
console.log(obj);
