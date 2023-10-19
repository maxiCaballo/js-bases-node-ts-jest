import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('js-foundation/05-factory.ts', () => {
	const createID = () => '1234';
	const getAge = () => 31;

	test('buildMakePerson should return a function', () => {
		const makerPerson = buildMakePerson({ createID, getAge });

		expect(typeof makerPerson).toBe('function');
	});

	test('makerPerson should return a person', () => {
		const makerPerson = buildMakePerson({ createID, getAge });
		const person = makerPerson({ name: 'Maxi', birthdate: '1992-09-23' });

		//Si le pongo toBe da error porque son objetos que apuntan a diferentes lugares en memoria y por ende
		//no son iguales
		expect(person).toEqual({ id: '1234', name: 'Maxi', birthdate: '1992-09-23', age: 31 });
	});
});
