// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   drinkBeer() {
//     console.log(this.name + " drinks beer");
//   }
//   sayHello() {
//     console.log("hello from " + this.name);
//   }
// }
// let jack = new Person("jack");
// jack.sayHello();
// let tina = new Person("tina");
// tina.sayHello();

// Person.prototype.sayHello(); //undefined
// Person.prototype.drinkBeer();//undefined
// functions are loaded twice

class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      // in object and multiplied in memory
      console.log(name + " drinks beer");
    };
  }
  sayHello() {
    console.log("hello from " + this.name); // in prototype and once in memory
  }
}

let jack = new Person("jack");
jack.drinkBeer();
jack.sayHello();
// drinkBeer is loaded into memory twice. Loaded with each object created
