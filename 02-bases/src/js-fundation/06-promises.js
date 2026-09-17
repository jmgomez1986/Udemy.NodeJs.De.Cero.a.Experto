const { httpClient } = require("../plugins");

// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   fetch(url).then((response) => {
//     response.json().then((pokemon) => {
//       callback & callback(pokemon.name);
//     });
//   });

// };

// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   return fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => pokemon.name);
// };

// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const response = await fetch(url);
//   const pokemon = await response.json();

//   return pokemon;
// };

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  return httpClient.get(url);
};

module.exports = getPokemonById;
