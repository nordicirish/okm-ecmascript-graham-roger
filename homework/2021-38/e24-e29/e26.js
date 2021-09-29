function Person(name) {
  this.name = name;
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};

let jack = new Person("jack");
jack.drinkBeer();
let tina = new Person("tina");
tina.drinkBeer();

// function Programmer(name, salary) {
//   this.name = name;
//   this.salary = this.salary;
// }

function Programmer(name, salary) {
  // Person.call invokes the Person function so that this refers to the Programmer object
  //  Only the person constructor now sets the name
  Person.call(this, name);
  this.salary = this.salary;
}

Programmer.prototype.codeApps = function () {
  console.log(this.name + " implements apps");
};
let hannah = new Programmer("hannah", 4000);
hannah.codeApps();
// hannah.drinkBeer(); fails as drinkBeer is not a Programmer function

Object.setPrototypeOf(Programmer.prototype, Person.prototype);
// allows programmer prototype to inherit from the person protoype
hannah.drinkBeer(); // works now as can access person functions
