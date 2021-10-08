// a) Now take the following function
function greeting({ txt, amount }) {
  console.log(txt.repeat(amount));
}
// it should output the given txt (string) the amount (number) of times.
// Implement the function and call it.
// Do not touch the given function declaration.

greeting({ txt: "hello world ", amount: 5 });

// b) Now take the following function

const merge = (array1, array2, order) => {
  let arrayNew = []; //initialise arrayNew
  if (order == true) {
    //   spread operator ... takes all values in each array
    arrayNew = [...array1, ...array2];
  } else {
    arrayNew = [...array2, ...array1];
  }

  return arrayNew;
};

// If given [1,2], [3,4] and true
//       => returns [1,2,3,4]

// If given [1,2], [3,4] and false
//       => returns[3, 4, 1, 2]

console.log(merge([1, 2], [3, 4], true));
console.log(merge([1, 2], [3, 4], false));

// c) take the following
// Create the copy function, it will copy the given array and return it.
// So the function will create new array with exactly the same content than the given argument array.
// Return the newly created array.

const copy = (a1) => {
  let a2 = [...a1];
  return a2;
};

let array1 = [1, 2];
let array2 = copy(array1);

console.log(array2); // [1,2]
