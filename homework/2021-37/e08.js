
function doIt() {
   console.log('hello')
}
console.log(typeof doIt)
console.log(doIt instanceof Function)

// typeof returns function
// Function (object) is a valid return values of typeof 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// instanceof returns true
// The instanceof operator tests the presence of constructor.prototype in object's prototype chain.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
// it returns true because function is actually a constructor that creates a function object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function



var myFunc = new Function('', 'console.log("hello")')
myFunc.call()
//output hello
// myFunc.call() instructs the constructor class to create and execute the myFunc function object using the arguments inherrited from the constructor 
// --- '' and  'console.log("hello")'

