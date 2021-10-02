function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    if (b != 0) {
      setTimeout(() => {
        console.log("calculating stuff");
        // check if b isn't zero
        const division = a / b;
        resolve(division);
      }, 1000);
    } else {
      reject("cannot divide with zero");
    }
  }
  const p = new Promise(asynFunc);
  return p;
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    if (random != 0) {
      setTimeout(() => {
        console.log(`sending to backend ${result}`);
        resolve("done");
      }, 1000);
    } else {
      reject("failed to connect to backend.");
    }
  }

  const p = new Promise(asynFunc);
  return p;
}

// promises are chained together same as
// makeCalculation()
//   .then((division) => {
//     return sendStuffToBackend(division);
//   })
//   .then((msg) => {
//     console.log(msg);
//   });
makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));

// catch-function is called if one of the promises invokes the reject function. Now implement the
// makeCalculation so that you cannot make division with 0.

// PS C:\Users\roger\OneDrive\Documents\GitHub\okm-ecmascript-graham-roger\homework\20221-39\e02> node index.js
// calculating stuff
// failed to connect to backend.
// PS C:\Users\roger\OneDrive\Documents\GitHub\okm-ecmascript-graham-roger\homework\2021-39\e02> node index.js
// calculating stuff
// sending to backend 2
// done
