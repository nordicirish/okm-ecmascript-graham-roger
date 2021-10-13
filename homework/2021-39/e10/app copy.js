import fetch from "node-fetch";
const getUserInput = () => {
  let input = process.argv.splice(2); // [], ["1"] remove node and app.js
  return input.length === 0 ? null : input;
};

let ids = getUserInput();
let hr = await fetch(`https://swapi.dev/api/people/`);
let data = await hr.json();
// let filmFetch = await fetch(`https://swapi.dev/api/films/`);
// let filmData = await filmFetch.json();
// console.log(data);
// console.log(filmData);

async function fetchName() {
  let name = "";
  return name;
}

async function fetchAll(ids) {
  await ids.forEach(async (id) => {
    let films = await data.results[id - 1].films;
    console.log(films);
    let name = await data.results[id - 1].name;
    Promise.all([fetchName(), fetchAllFilms(films)])
      .then(([result]) => {
        console.log(result);
      })
      .catch((error) => console.log(`Error in promises ${error}`));
    await console.log(name);

    // await fetchAllFilms(films);
  });
}
fetchAll();

async function fetchTitle(film) {
  let filmIndex = await film.charAt(film.length - 2); // last charcter is a backslash
  let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
  let filmData = await filmFetch.json();
  let filmTitle = await filmData.title;
  return filmTitle;
}

async function fetchAllFilms(films) {
  await films.forEach(async (film) => {
    let title = await fetchTitle(film);
    await console.log(title);
  });
  // for (let i = 0; i < films.length; i++)
  //   async (film) => {
  //     let title = await fetchTitle(film);
  //     await console.log(title);
  //   };
  // await films.forEach(async (film) => {
  //   let title = await fetchTitle(film);
  //   await console.log(title);
  // });
}

// Promise.all is actually a promise that takes an array of
// promises as an input(an iterable).
// Then it gets resolved when all the promises get resolved or any one of
// them gets rejected

// async function main() {
// Promise.all([fetchName(), fetchAllFilms()])
//   .then(([result]) => {
//     console.log(result);
//   })
//   .catch((error) => console.log(`Error in promises ${error}`));
// }
// main();
