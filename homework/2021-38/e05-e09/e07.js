function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }

  console.log(this instanceof Person);
}

var obj = Person("jack", "smith"); //false
var obj1 = new Person("jack", "smith"); // true

// 7. Implement the previous so that exception is raised if programmer forgets the new keyword:

// `throw new TypeError("Cannot call a class as a function");`
