// function makeCalculationAndSendStuffToBackend() {
//   let p = new Promise((resolve, reject) => resolve("hello world"));
//     return p;
//     //promise
// }
// makeCalculationAndSendStuffToBackend().then((msg) => console.log(msg));

function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    if (b === 0) {
      reject("cannot divide with zero.");
    } else {
      setTimeout(() => {
        console.log("calculating stuff");
        const division = a / b;
        resolve(division);
      }, 1000);
    }
  }
  const p = new Promise(asynFunc);
  return p;
}
// makeCalculation(10, 2).then((result) => console.log(result)); // let result = await makeCalculation(10, 2) shortened version inside an
// asynch function;

// async function makeCalculationAndSendStuffToBackend() {
//   // 1) make calculation
//   const result = await makeCalculation(10, 2);
//   console.log(result);
//   // 2) send stuff to backend

//   // 3) inform that this is done
//   return "done";
// }
// makeCalculationAndSendStuffToBackend().then((msg) => console.log(msg));

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    setTimeout(() => {
      console.log(`sending to backend ${result}`);
      resolve("done");
    }, 1000);
  }
  const p = new Promise(asynFunc);
  return p;
}
// using await notation
async function makeCalculationAndSendStuffToBackend() {
  // 1) make calculation
  const result = await makeCalculation(10, 2);
  // 2) send stuff to backend
  const msg = await sendStuffToBackend(result);
  // 3) inform that this is done
  return msg;
}
makeCalculationAndSendStuffToBackend().then((msg) => console.log(msg));
