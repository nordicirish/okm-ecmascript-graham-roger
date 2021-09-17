// eslint-disable-next-line no-undef
var myArgs = process.argv.slice(2); // removes node and filename
var output = `${Number(myArgs[0]) + Number(myArgs[1])}`; // use Number function to convert strings to numbers
console.log(output);

/*  C:\Users\roger\OneDrive\Documents\GitHub\okm-ecmascript-graham-roger\homework\2020-35\e03-e13>node e09.js 7 7
14*/
