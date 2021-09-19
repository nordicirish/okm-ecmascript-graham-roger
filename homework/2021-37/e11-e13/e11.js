const axios = require("axios");
const args = process.argv.slice(2); // slice (2) removes the first 2 arguments from the node command line
// https://nodejs.dev/learn/nodejs-accept-arguments-from-the-command-line
const part1 = () =>
  axios.get("https://swapi.dev/api/people/" + args).then((response) => {
    let starWars = response.data;
    console.log(starWars.name); //returns data for Luke Skywalker if node e11.js 1 is used
  });
part1();
