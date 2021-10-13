import fetch from "node-fetch";
const getUserInput = () => {
  let input = process.argv.splice(2); // [], ["1"] remove node and app.js
  return input.length === 0 ? null : input;
};

let hr = await fetch(`https://swapi.dev/api/people/`);
let data = await hr.json();
let ids = await getUserInput();

async function fetchNames() {
  await ids.forEach(async (id) => {
    let name = await data.results[id - 1].name;
    await console.log(name);
    return name;
  });
}

async function fetchFilmTitles() {
  await ids.forEach(async (id) => {
    let films = await data.results[id - 1].films;
    await films.forEach(async (film) => {
      let title = await fetchTitle(film);
      // await console.log(title); // if no await films are output in random order
      console.log(title);
    });
  });
}

async function fetchData() {
  Promise.all([fetchNames(), fetchFilmTitles()])
    .then(([result]) => {
      // console.log(result);
    })
    .catch((error) => console.log(`Error in promises ${error}`));
}
fetchData();

async function fetchTitle(film) {
  let filmIndex = film.charAt(film.length - 2); // last charcter is a backslash
  let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
  let filmData = await filmFetch.json();
  let filmTitle = await filmData.title;
  return filmTitle;
}

// async function fetchAllFilms() {
//   let [films] = await fetchData();
//   await films.forEach(async (film) => {
//     let title = await fetchTitle(film);
//     await console.log(title); // if no await films are output in random order
//   });

// fetchAllFilms();
// if no await films are output in random order
// let filmList = await Promise.all([
//   films.map(async (film) => {
//     let title = await fetchTitle(film);

//     // await console.log(title);
//     // console.log("testibng", filmList);
//   }),
//   () => {
//     return filmList;
//   },
// ]);

//   let title = await fetchTitle(film);
//   await console.log(title);

// if no await films are output in random order
// });

// fetchAllFilms();
// Promise.all is actually a promise that takes an array of
// promises as an input(an iterable).
// Then it gets resolved when all the promises get resolved or any one of
// them gets rejected

// async function main() {
//   Promise.all([fetchName(), fetchAllFilms()])
//     .then(([result]) => {
//       console.log(result);
//     })
//     .catch((error) => console.log(`Error in promises ${error}`));
// }
// main();
