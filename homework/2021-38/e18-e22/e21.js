let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    let f = this.sayHello;
    setTimeout(f, 1000);
  },
};
user.sayHello = user.sayHello.bind(user);
//copies the function and stores the bound value
user.sayDelayedHello();
