const axios = require("axios");

// Make a request for a user with a given ID
// axios.get("/user?ID=12345").then((response) => console.log(response));

// to read the body
// axios.get("/user?ID=12345").then((response) => console.log(response.data));

const main = async () => {
  try {
    let id = await addLocation({ lat: 60, lon: 60 });
    console.log(id); // outputs id of the added location

    let statusCode = await deleteLocation(id);
    console.log(statusCode); // 204

    let locations = await fetchAllLocations();
    console.log(locations); // outputs all locations

    let location = await fetchLocation(1);
    console.log(location); // outputs location with id of 1
  } catch (err) {
    console.log(err);
  }
};
main();

const addLocation = ({ lat: a, lon: b }) => {
  return;
};

const fetchLocation = (id) => {
  axios.get("/user?ID=id").then((response) => console.log(response));
};
