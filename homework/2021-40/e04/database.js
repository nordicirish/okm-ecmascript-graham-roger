const fs = require("fs");
const save = (name) => {
  const saveFile = (resolve, reject) => {
    fs.appendFile("database.txt", `${name} \n`, function (err) {
      if (err) {
        reject("problem with saving ");
      } else {
        resolve();
      }
    });
  };
  return new Promise(saveFile);
};

const getAll = () => {
  const readFile = (resolve, reject) => {
    fs.readFile("database.txt", "utf8", (err, names) => {
      if (err) {
        reject("problem accessing file");
      } else resolve(names);
    });
  };
  return new Promise(readFile);
};

module.exports = { save, getAll };
