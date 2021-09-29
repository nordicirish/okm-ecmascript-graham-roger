function outer() {
  let a = 5;

  function inner(b) {
    console.log(a + b);
  }
  // closure - inner function can access outer functions variables and store their values
  inner(5);
  inner(6);
  inner(7);
}
outer();
