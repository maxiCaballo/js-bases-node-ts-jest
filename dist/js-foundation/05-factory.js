"use strict";
// const { createID, getAge } = require('../plugins');
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
//? Recibe las dependencias desde dode se la invoque (dependency injection), retorna una funcion para poder crear una persona.
//? CreateID y getAge estan en modulos aparte por si el dia de mañana hay que cambiar de dependencia o hacerlo de otra
//? forma no haya que cambiarlo en cada lugar donde se usa sino en uno solo, por eso estan en modulos aparte para evitar acoplamiento.
const buildMakePerson = ({ createID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: createID(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const jhon = buildPerson(obj);
// console.log(jhon);
// module.exports = {
// 	buildMakePerson,
// };
