import { readFile } from "fs";
import { writeFile } from "fs";
import { Buffer } from "buffer";

const data = new Uint8Array(Buffer.from("Hello Node.js"));
let args1 = "" + process.argv.slice(2, 3); // gets filename tp copy from note input
let args2 = "" + process.argv.slice(3); //gets filename to write to from node input

const copy = (file1, file2, callback) => {
  readFile(file1, "utf8", (err, data) => {
    if (err) {
      callback(false);
    } else {
      writeFile(file2, data, "utf8", (err) => {
        if (err) {
          callback(false);
        } else {
          callback(true);
        }
      });
    }
  });
};
copy(
  args1,
  args2,
  (result) => (result = true ? console.log("success") : console.log("error"))
);
