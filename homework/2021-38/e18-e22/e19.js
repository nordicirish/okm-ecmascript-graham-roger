// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     let variable = 10;
//     setTimeout(function () {
//       console.log(variable);
//     }, 1000);
//   },
// };
// user.sayDelayedHello();
// output 10

// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     console.log(this); //inner function closure
//     setTimeout(function () {
//       console.log(this);
//       //doesn't work as  it is called anonymousFunction()and thisis lost now.
//       // if object function eg user.anonymousFunction() would work
//     }, 1000);
//   },
// };
// user.sayDelayedHello();

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // THIS WORKS (this refers to user)
    let thisWorks = this; //capture this in a variable
    console.log(this);
    setTimeout(function () {
      // THIS DOES NOT WORK (this does not refer to user)
      //   console.log(this);
      //   console.log(thisWorks); // inner function capture outer function variable
      thisWorks.sayHello();
    }, 1000);
  },
};
user.sayDelayedHello();

// Outputs Hello jack after 1 second
// thisWorks captures value of this
//passed into sayHello object function as the user part
