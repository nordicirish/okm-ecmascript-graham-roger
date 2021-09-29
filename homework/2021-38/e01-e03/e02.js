function doIt(a) {
  const inner = () => (a == true ? console.log("world") : console.log("hello"));
  return inner;
}
//variable a is bound to inner function so it isn't destroyed

doIt(false)(); // outputs hello
doIt(true)(); // outputs world
