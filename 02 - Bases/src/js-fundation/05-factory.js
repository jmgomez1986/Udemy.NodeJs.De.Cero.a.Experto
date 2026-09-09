// No hace falta poner /index, ya al poner el nombre de la carpeta, node busca automaticamente el index.js
// const { getUUID, getAge } = require("../plugins");

// const buildPerson = ({ name, birthday }) => {
//   return {
//     id: getUUID(),
//     name,
//     birthday,
//     age: getAge(birthday),
//   };
// };

// const obj = {
//   name: "Matias",
//   birthday: "1986-08-26",
// };
// const jhon = buildPerson(obj);

// console.log(jhon);

/** */

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthday }) => {
    return {
      id: getUUID(),
      name,
      birthday,
      age: getAge(birthday),
    };
  };
};

module.exports = {
  buildMakePerson,
};
