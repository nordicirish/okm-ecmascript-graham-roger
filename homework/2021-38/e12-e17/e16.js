let user = {
  firstName: "Jack",
  //  method
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};

// copies the sayHello function and replaces the this keyword with the equivalent object value
//this .firstName is now Jack
let myFunction = user.sayHello.bind(user);
myFunction();
