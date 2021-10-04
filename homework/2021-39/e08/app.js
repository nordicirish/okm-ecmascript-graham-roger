//readline synch has a problem throws errors with modules so using node command line input node app.js 1
import fetch from "node-fetch";
const getUserInput = () => {
  let input = process.argv.splice(2); // [], ["1"] remove node and app.js
  return input.length === 0 ? null : input[0];
};

let id = getUserInput();
let hr = await fetch(`https://swapi.dev/api/people/${id}/`);
let data = await hr.json();

async function fetchName() {
  let name = await data.name;
  return name;
}

async function fetchTitle() {
  let films = await data.films;
  let film = films[0];
  let filmIndex = film.charAt(film.length - 2); // last charcter is a backslash
  let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
  let filmData = await filmFetch.json();
  let title = filmData.title;
  return title;
}

fetchName().then((name) => console.log(`Character name: ${name}`));
fetchTitle().then((title) => console.log(`First film: ${title}`));
