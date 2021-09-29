function doIt() {
  //outputs global object
  console.log(this);
  //outputs true
  console.log(this == global);
  // creating global variable
  this.myvariable = 5;
}
doIt();

console.log(myvariable); // number 5
console.log(global.myvariable); //5
