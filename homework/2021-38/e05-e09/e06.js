function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;

  console.log(this instanceof Person);
}

var obj1 = Person("jack", "smith"); //false
// not using new this is a global value and not an instanc eof Person
var obj2 = new Person("jack", "smith"); // true

// Add following to Person function:

// what is the output of this when using new keyword or without?
