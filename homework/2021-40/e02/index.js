var { printName: p, sum: s } = require("./mymodule");
// Destructuring export obj assignments into 2 named variables p and s
//  can use {printName, sum} if not changing names
p(); // prints name
s(5, 5); // 10
