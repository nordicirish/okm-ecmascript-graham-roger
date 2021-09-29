let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

let myfunc = user.sayHello;
myfunc();
// hello undefined
// doesn't bind because my funct is not an object function
