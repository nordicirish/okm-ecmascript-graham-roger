// setTimeout(function () {
//   console.log("hello");
// });

// // OR

// Anonymous arrow function
// setTimeout(() => {
//   console.log("hello");
// });

// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     setTimeout(function () {
//       this.sayHello();
//     }, 1000);
//   },
// };
// user.sayDelayedHello();

// ouput TypeError: this.sayHello is not a function
// fails because anonymous function is a normal function
//  and this is a global variable without a sayHello function

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() => {
      this.sayHello();
    }, 1000);
    //arrow function uses lexixal this
  },
};
user.sayDelayedHello();

("use strict");

var user = {
  name: "Jack",
  sayHello: function sayHello() {
    console.log("Hello, ".concat(this.name, "!"));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this;
    //arrow function uses lexixal this and creates a variable _this to store the value of this
    // it can then be passed via closure
    setTimeout(function () {
      _this.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();
