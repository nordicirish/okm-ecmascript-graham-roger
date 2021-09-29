// v1 hello function moved inside constructor
// class Person {
//   constructor(name) {
//     this.name = name;
//     this.hello = function () {
//       console.log(`hello ${name}`);
//     };
//   }

//   delayedHello() {
//     setTimeout(this.hello, 1000);
//   }
// }

// let jack = new Person("jack");
// jack.delayedHello();

// v2 using class fields

class Person {
  name; // class field holds value of name so it isn't destroyed
  constructor(name) {
    // this.name = name; replaced by class field
    this.hello = function () {
      console.log(`hello ${name}`);
    };
  }

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}

let jack = new Person("jack");
jack.delayedHello();
