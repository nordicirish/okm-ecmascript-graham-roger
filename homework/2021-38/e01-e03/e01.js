function doIt() {
  function inner() {
    console.log("hello world"); //closure -use inner function to ensure variable isn't destroyed and can be passed
  }
  return inner;
}

let f = doIt();

f();

// Look closely line 2, the `f` should be a function. In line 2 the app should output “hello world”. Implement the `doIt` - function.
