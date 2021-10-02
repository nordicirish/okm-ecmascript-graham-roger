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
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
}

makeCalculation(10, 0)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
// catch-function is called if one of the promises invokes the reject function. Now implement the
// makeCalculation so that you cannot make division with 0.
