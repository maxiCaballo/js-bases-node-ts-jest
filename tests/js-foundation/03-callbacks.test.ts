import { getUserById } from '../../src/js-foundation/04-arrow';

describe('js-foundation/03-callbacks.ts', () => {
	test('getUserById shoult return an error if the user does not exist', () => {
		const id = 10;

		getUserById(id, (err, user) => {
			expect(err).toBe(`User not found with id: ${id}`);
			expect(user).toBeUndefined();
		});
	});

	test('getUserById shoult return John Doe user', (done) => {
		const id = 1;

		getUserById(id, (err, user) => {
			expect(user?.name).toMatch(/john doe/i);
			expect(user?.id).toBe(id);

			expect(user).toEqual({
				id: 1,
				name: 'John Doe',
			});

			expect(err).toBeUndefined();
			done(); //Para codigo asincrono, es como un await en Jest
		});
	});
});
