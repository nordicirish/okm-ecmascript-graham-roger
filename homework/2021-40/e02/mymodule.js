const printName = () => console.log("Roger");
const sum = (a, b) => console.log(a + b);

// module.exports = printName;
// export multiple functions as an object
let obj = { printName: printName, sum: sum };
module.exports = obj;
