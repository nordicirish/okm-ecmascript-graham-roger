//readline synch has a problem throws errors with modules so using node command line input node app.js 1
import fetchAll from "node-fetch";
// const getUserInput = () => {
//   let input = process.argv.splice(2); // [], ["1"] remove node and app.js
//   return input.length === 0 ? null : input[(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)];
// };

// let id = getUserInput().map();
let hr = await fetchAll(
  `https://swapi.dev/api/people/${forEach([(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)])}/`
).then((hr) => console.log(hr));

console.log(data);
// let data = await hr.json();

// async function fetchName() {
//   let name = await data.name;
//   return name;
// }

// async function fetchTitle(film) {
//   let filmIndex = film.charAt(film.length - 2); // last charcter is a backslash
//   let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
//   let filmData = await filmFetch.json();
//   let filmTitle = filmData.title;
//   return filmTitle;
// }

// async function loopFilms() {
//   let films = await data.films;
//   films.forEach(async (film) => {
//     let title = await fetchTitle(film);
//     console.log(title);
//   });
// }

// // Promise.all is actually a promise that takes an array of
// // promises as an input(an iterable).
// // Then it gets resolved when all the promises get resolved or any one of
// // them gets rejected

// async function main() {
//   Promise.all([fetchName(), loopFilms()])
//     .then(([result]) => {
//       console.log(result);
//     })
//     .catch((error) => console.log(`Error in promises ${error}`));
// }
// main();
