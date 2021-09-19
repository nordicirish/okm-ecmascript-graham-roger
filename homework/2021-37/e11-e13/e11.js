const axios = require("axios");
const part1 = () =>
  axios.get("https://swapi.dev/api/people/1").then((response) => {
    let starWars = response.data;
    console.log(starWars.name); //returns data for Luke Skywalker
  });
part1();
