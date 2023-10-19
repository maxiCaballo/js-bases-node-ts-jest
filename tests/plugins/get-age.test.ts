import { getAge } from '../../src/plugins';

describe('plugins/get-age.plugins.ts', () => {
	test('getAge should return the age of a person', () => {
		const birthdate = '1992-09-23';
		const age = getAge(birthdate);

		expect(age).toBe(31);
	});

	test('getAge should return 0 years', () => {
		//Espio el metodo getFullYear del objeto Date y lo fuerzo a que retorne 1995 cuando sea invocado
		const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);

		const birthdate = '1995-09-23';
		const age = getAge(birthdate);

		expect(spy).toHaveBeenCalled();
		expect(age).toBe(0);
	});
});
