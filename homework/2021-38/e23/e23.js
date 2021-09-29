// // v1 anonymous function and variable
// function Clock() {
//   this.time = new Date().toString();
//   let someVariable = this; //captures time object same a lexical this

//   this.startInterval = function () {
//     setInterval(function () {
//       someVariable.tick();
//     }, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {
//     return this.time;
//   };
// }

// let clock = new Clock();
// console.log(clock.render()); // outputs time
// clock.startInterval(); // outputs time for every second, uses render

// // v2 using arrow function - lexical this
// function Clock() {
//   this.time = new Date().toString();
//   // var _this = this; lexical this declared (babel code)

//   this.startInterval = () => {
//     //captures time object same a lexical this
//     setInterval(() => {
//       this.tick();
//       // _this.tick();lexical this used
//     }, 1000);
//   };
//   this.tick = function () {
//     this.time = new Date().toString();
//     console.log(this.render());
//   };
//   this.render = function () {
//     return this.time;
//   };
// }

// let clock = new Clock();
// console.log(clock.render()); // outputs time
// clock.startInterval(); // outputs time for every second, uses render

// v3 using functional binding
function Clock() {
  this.time = new Date().toString();
  // var _this = this; lexical this declared (babel code)

  this.startInterval = function () {
    setInterval(this.tick, 1000);
  };

  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.tick = this.tick.bind(this);
  // functional variable captures object by copying the this.tick function
  // needs to be declared after the original function
  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render
