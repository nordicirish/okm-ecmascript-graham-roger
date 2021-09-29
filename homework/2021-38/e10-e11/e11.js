function doIt(a, b) {
  console.log(this); // object not mapped to this when doIt.apply is run
}
let object = { key: "value" };
doIt.apply(5, 5);

// TypeError: CreateListFromArrayLike called on non-object
//apply isn't an object function and doesn't bind
