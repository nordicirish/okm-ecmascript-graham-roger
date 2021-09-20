import { readFile } from "fs";
import { writeFile } from "fs";
import { Buffer } from "buffer";

const data = new Uint8Array(Buffer.from("Hello Node.js"));
let args1 = "" + process.argv.slice(2, 3); // gets filename tp copy from note input
let args2 = "" + process.argv.slice(3); //gets filename to write to from node input

//part1
// readFile(args1, "utf8", (err, data) => {
//   //utf8 needs to be specified t output string correctly
//   if (err) console.log("Error ", err);
//   console.log(data);
// });

readFile(args1, "utf8", (err, data) => {
  //utf8 needs to be specified t output string correctly
  if (err) console.log("Error ", err);
  console.log(data); // nest write function is the read function to ensure it fires in correct order
  writeFile(args2, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
