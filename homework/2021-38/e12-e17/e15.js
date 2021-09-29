let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
user.sayHello();

let f = user.sayHello;
f();
// returns undefined because is not an object function
// user.say hello isn't a function in this case

setTimeout(() => user.sayHello(), 1000);
// works because setTimeout is an arrow function
// lexically stores user object values

user.sayHello = function () {
  console.log("does it work?");
};

// works because it uses object . notation
