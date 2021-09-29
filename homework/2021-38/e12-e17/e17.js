// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`); //method
//   },
//   sayDelayedHello: function () {
//     let f = this.sayHello;
//     setTimeout(f, 1000);
//   },
// };

// then in the function `this`refers to `user`:
//     sayDelayedHello: function() {
//         // let f = this.sayHello
//         let f = user.sayHello
//         setTimeout(f, 1000)
//     }
// user.sayHello(); //Hello, Jack!
// user.sayDelayedHello(); //Hello undefined

// So the f here holds the function.
// But when passing the f to setTimeout and it will call after 1 sec by using syntax f(),
// not user.f().And when calling f() which points to sayHellofunction,
// thisdoes NOT point to user.

// let user = {
//   name: "Jack",
//   sayHello: function () {
//     console.log(`Hello, ${this.name}!`);
//   },
//   sayDelayedHello: function () {
//     setTimeout(this.sayHello, 1000);
//   },
// };
// user.sayHello(); //Hello Jack
// user.sayDelayedHello(); //Hello undefined

//sayDelayed this now mapped to user but value of this is not held after sayHello is called
// reverts to global this

function helper() {
  user.sayHello();
}
let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(helper, 1000);
  },
};
user.sayHello(); //Hello Jack
user.sayDelayedHello(); // Hello Jack
//works because it calls the helper function as an argument to construct
// the jack object and run the say hello function after a delay of 1 second
