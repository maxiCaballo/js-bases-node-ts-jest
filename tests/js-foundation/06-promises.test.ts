import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('js-foundation/06-promises.ts', () => {
	test('getPokemonById should return a pokemon', async () => {
		const pokemonId = 1;
		const pokemonName = await getPokemonById(pokemonId);

		expect(pokemonName).toBe('bulbasaur');
	});

	test('getPokemonById should return an error if pokemon does not exist', async () => {
		const pokemonId = 10000000;

		//Este test falla porque la funcion o el sujeto de prueba arroja el error
		//expect(error).toBe(`Pokemon does not exist with id: ${pokemonId}`);

		try {
			await getPokemonById(pokemonId);
			//Si llego hasta el expect algo anda mal entonces fuerzo el error, true nunca puede ser false.
			expect(true).toBeFalsy();
		} catch (error) {
			expect(error).toBe(`Pokemon does not exist with id: ${pokemonId}`);
		}
	});
});
