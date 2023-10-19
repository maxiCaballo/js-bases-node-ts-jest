import { buildMakePerson } from './js-foundation/05-factory';
import { buildLogger } from './plugins/logger-plugin';
import { getPokemonById } from './js-foundation/06-promises';

// const templateExports = require('./js-foundation/01-template');
// const { getUserById } = require('./js-foundation/05-factory');

// const { createID, getAge, buildLogger } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// console.log(templateExports.emailTemplate);

//! Referencia a la funcion factory y uso
// const makePerson = buildMakePerson({ createID, getAge });//Inyeccion de dependencia para que el modulo no tenga los require
// const obj = { name: 'Jhon', birthdate: '1992-09-23' };
// const jhon = makePerson(obj);
// console.log(jhon);

// const logger = buildLogger('server.js');
// logger.log('Hello world');
// logger.error('This is something bad');

// const getPokemonById = require('./js-foundation/06-promises');
getPokemonById(1)
	.then((pokemon) => console.log({ pokemon }))
	.catch((error) => console.log(error))
	.finally(() => 'Finaly');
