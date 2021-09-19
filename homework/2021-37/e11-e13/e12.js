const axios = require("axios");

const part2 = () =>
  axios.get("https://swapi.dev/api/people/").then((response) => {
    let starWars = response.data;
    let people = starWars.results;
    let characters = [];
    people.forEach((person) => characters.push(person.name));
    {
      console.log(`<ul>`);
      characters = characters.map(
        (
          character //use map and template literals to add li tags
        ) => console.log(`<li>${character}</li>`)
      );
      console.log(`</ul>`);
    }
    // output();
  });

part2();
