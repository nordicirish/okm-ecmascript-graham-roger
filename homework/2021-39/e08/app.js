import readlineSync from "readline-sync"; //module import
import fetch from "node-fetch";
let id = readlineSync.question("May I have a number?\n");

async function fetchData() {
  let hr = await fetch(`https://swapi.dev/api/people/${id}/`);
  let data = await hr.json();
  return data;
}
async function fetchName() {
  let data = await fetchData();
  let name = await data.name;
  return name;
}

async function fetchTitle() {
  let data = await fetchData();
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
