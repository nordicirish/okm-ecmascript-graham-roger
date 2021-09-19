const axios = require("axios");
const part3 = () =>
  axios.get("https://swapi.dev/api/people/").then((response) => {
    let starWars = response.data;
    let people = starWars.results;
    let characters = [];
    people.forEach((person) =>
      characters.push({
        name: person.name,
        // mass: Number(person.mass),
        // height: Number(person.height),
        BMI: person.mass / (((person.height / 100) * person.height) / 100),
      })
    );
    {
      console.log(`<ul>`);
      characters.sort((a, b) => b.BMI - a.BMI);
      characters.forEach((character) => {
        console.log(
          `<li>${character.name} BMI: ${Math.round(character.BMI)}</li>`
        );
      });
      console.log(`</ul>`);
      // https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/
    }
  });
part3();
