let a = "hello";
let b = Number(a);
console.log(b);
// outputs NaN
let c = "" + b;
// console.log(c);
let i = 0;
let d = "";
for (i = 0; i < 16; i++) {
  d += c;
}
console.log(d);
let e = d + "batman";
console.log(e);
