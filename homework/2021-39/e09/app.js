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

async function fetchTitle(film) {
  let filmIndex = film.charAt(film.length - 2); // last charcter is a backslash
  let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
  let filmData = await filmFetch.json();
  let filmTitle = filmData.title;
  return filmTitle;
}

async function fetchAllFilms() {
  let data = await fetchData();
  let films = await data.films;
  films.forEach(async (film) => {
    let title = await fetchTitle(film);
    await console.log(title); // if no await films are output in random order
  });
}

// Promise.all is actually a promise that takes an array of
// promises as an input(an iterable).
// Then it gets resolved when all the promises get resolved or any one of
// them gets rejected

async function main() {
  Promise.all([fetchName(), fetchAllFilms()])
    .then(([result]) => {
      console.log(result);
    })
    .catch((error) => console.log(`Error in promises ${error}`));
}
main();
