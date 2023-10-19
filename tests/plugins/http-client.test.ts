import { http } from '../../src/plugins';

describe('plugin/http-client-plugin.ts', () => {
	test('httpClientPlugin.get() should return a string', async () => {
		const url = 'https://jsonplaceholder.typicode.com/todos/1';
		const data = await http.get(url);

		const expectedData = {
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: expect.any(Boolean), //Espero que haya un booleano
		};

		expect(data).toEqual(expectedData);
	});

	test('httpClientPlugin.get() should have DELETE, PUT, and POST method', async () => {
		expect(typeof http.delete).toBe('function');
		expect(typeof http.put).toBe('function');
		expect(typeof http.post).toBe('function');
	});
});
