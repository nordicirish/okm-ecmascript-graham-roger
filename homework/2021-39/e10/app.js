import fetch from "node-fetch";
const getUserInput = () => {
  let input = process.argv.splice(2); // [], ["1"] remove node and app.js
  return input.length === 0 ? null : input;
};

let ids = await getUserInput();
let hr = await fetch(`https://swapi.dev/api/people/`);
let data = await hr.json();

//fetch a single name
async function fetchName(id) {
  let sWName = await data.results[id - 1].name;
  return sWName;
}

// fetchFilmUrlArray();

async function fetchFilms(id) {
  let filmNames = await data.results[id - 1].films;

  return filmNames;
}
// fetchFilms();

async function fetchFilmTitles(id) {
  // await ids.forEach(async (id) => {
  let films = await fetchFilms(id);
  await films.forEach(async (film) => {
    let title = await fetchTitle(film);
    await console.log(title);
    return title;
  });
  // });
}

// fetchFilmTitles();

async function fetchTitle(film) {
  let filmIndex = film.charAt(film.length - 2); // last charcter is a backslash
  //swapi filmsjson doesn't return all films if loaded using films url rather than film index
  let filmFetch = await fetch(`https://swapi.dev/api/films/${filmIndex}/`);
  let filmData = await filmFetch.json();
  let filmTitle = await filmData.title;
  return filmTitle;
}

// results are output names first and then films even if warpped in forEach loop
async function fetchAll() {
  await ids.forEach(async (id) => {
    Promise.all([fetchName(id), fetchFilmTitles(id)])
      .then(([result]) => {
        console.log(result);
      })
      .catch((error) => console.log(`Error in promises ${error}`));
  });
}
fetchAll();

// fetch all names
// async function fetchNames() {
//   let names = [];
//   await ids.map(async (id) => {
//     await names.push(fetchName(id));
//     return names;
//   });
//   await console.log(names);
// }

// fetch array of urls for each characters films

// maps all films urls into array
// async function fetchFilmUrlArray() {
//   let filmsArray = [];
//   await ids.map(async (id) => {
//     filmsArray = await filmsArray.push(fetchFilms(id));
//     await console.log(filmsArray);
//     return filmsArray;
//   });
// }
