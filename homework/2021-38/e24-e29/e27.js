// function Dog(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
//   this.sniffButt = function () {
//     console.log("hello world");
//   };
// }
// this.sniffbutt works because of closure -- the anomymous function holds the value of this

// let obj = { name: "jussi" };

// function Dog(name) {
//   this.name = name;
//   this.sniffButt = this.sniffButt.bind(obj);
// }

// works because this is bound to the object now

function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(this);
}
// works because bind captures the object name each time sniffButt runs
//  and allows delayedSniff butt to access the values

Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();

// sniff butt should be only once in memory as it's a prototype function

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

spot.delayedSniffButt();
vilma.delayedSniffButt();
// undefined sniffs butt this isn't bound
