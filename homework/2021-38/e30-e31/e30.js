class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  // set writes
  set radius(newRadius) {
    this._radius = newRadius;
    // user input validation
    if (this._radius <= 0) {
      throw "radius must be greater than zero";
    }
  }
  // get reads
  get radius() {
    return this._radius;
  }
}
let c = new Circle(50);
console.log(c); // sets radius
c.radius = 30; // changes radius, uses setter
console.log(c.radius); // returns radius, uses getter
c.radius = -70; // crashes app, radius must be > 0
