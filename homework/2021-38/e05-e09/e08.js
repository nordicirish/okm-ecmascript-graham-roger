// 8. Instead of using constructor function, use classes defined in EcmaScript 2015. Use babel and compile it to older javascript. Notice the checking that throws the exception!

// Tips: Use “try it out” tab. Copy and paste your code. Set “force all transformations”. See that older version uses functions and has “instanceof” checking.

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
}

var obj = Person("jack", "smith"); //false
var obj1 = new Person("jack", "smith"); // true
("use strict");

//Babel output
// Exception is automatically thrown without the need to specify it
// "use strict";

// function _classCallCheck(instance, Constructor) {
//   if (!(instance instanceof Constructor)) {
//     throw new TypeError("Cannot call a class as a function");
//   }
// }

// var Person = function Person(fname, lname) {
//   _classCallCheck(this, Person);

//   this.fname = fname;
//   this.lname = lname;
// };
