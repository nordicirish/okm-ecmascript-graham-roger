const axios = require("axios");
const part2 = () =>
  axios.get("https://swapi.dev/api/people/").then((response) => {
    let starWars = response.data;
    let people = starWars.results;
    people.forEach((person) => console.log(person.name));
  });
part2();
