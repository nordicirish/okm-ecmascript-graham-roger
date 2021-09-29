// Implement the Person function so that it always creates a person object
// even if you forget the new keyword:
function Person(fname, lname) {
  if (this instanceof Person) {
    this.fname = fname;
    this.lname = lname;
    // if new is used creates instance
  } else {
    // adds new to object data to create instance
    return new Person(fname, lname);
  }

  console.log(this instanceof Person);
}

var obj = Person("jack", "smith"); //true
var obj1 = new Person("jack", "smith"); // true
