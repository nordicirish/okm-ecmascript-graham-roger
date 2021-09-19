const axios = require("axios");

const part3 = () =>
  axios.get("https://swapi.dev/api/people/").then((response) => {
    let starWars = response.data;
    let people = starWars.results;
    let characters = [];
    people.forEach((person) => characters.push(person.name));
    {
      console.log("<ul>");
      characters = characters
        .map((character) => "<li>" + character + "</li>")
        .join(""); //remove quotes
      console.log(characters);
      console.log("</ul>");
    }
    // output();
  });

part3();
