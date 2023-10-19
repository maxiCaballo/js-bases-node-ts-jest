// const { http } = require('../plugins');

import { http } from '../plugins';

export const getPokemonById = async (id: string | number): Promise<string> => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const pokemon = await http.get(url);

		return pokemon.name;
	} catch (error) {
		throw `Pokemon does not exist with id: ${id}`;
	}

	// Then
	// return fetch(url)
	// 	.then((response) => response.json())
	// 	.then((pokemon) => pokemon.name)
	// 	.catch((error) => 'There was an error');
};

// module.exports = getPokemonById;
