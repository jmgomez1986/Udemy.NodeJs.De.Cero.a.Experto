// const {emailTemplate} = require('./js-fundation/01-template'); // Importacion tradicional de modulos de node.js
// require('./js-fundation/02-destructuring');
// const { getUserById } = require("./js-fundation/03-callbacks");
// const { getUserById } = require("./js-fundation/04-arrow");
// const { buildMakePerson } = require("./js-fundation/05-factory");
// const { getUUID, getAge } = require("./plugins");
// const getPokemonById = require("./js-fundation/06-promises");
const { buildLogger } = require("./plugins");

// console.log(emailTemplate);

/**/
// const id = 1;
// getUserById(id, function(error, user) {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });

/**/
// const id = 1;
// getUserById(id, (error, user) => {
//   if (error) throw new Error(error);

//   console.log(user);
// });

/**/
//! Referencia a la funcion factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = {
//   name: "Matias",
//   birthday: "1986-08-26",
// };

// const jhon = makePerson(obj);

// console.log(jhon);

/**/

// const name = getPokemonById(1, (pokemonName) => {
//   console.log(pokemonName);
// });

// getPokemonById(1)
//   .then((pokemon) => console.log({ name: pokemon.name }))
//   .catch((error) => console.log("Por favor intente de nuevo", error))
//   .finally(() => console.log("Finalizado"));

// const pokemonName = getPokemonById(1);
// console.log(pokemonName);

/**
 * Usango Logger (Winston)
 */

const logger = buildLogger("app.js");

logger.log("Hello World!!!");
logger.error("Hubo un ERROR!!!");
