// const axios = require('axios');
import axios from 'axios';

export const httpClientPlugin = {
	get: async (url: string) => {
		const { data } = await axios.get(url);

		return data;
	},
	post: async (url: string, body: any) => {
		throw new Error('Method not implemented yet');
	},
	put: async (url: string, body: any) => {
		throw new Error('Method not implemented yet');
	},
	delete: async (url: string, body: any) => {
		throw new Error('Method not implemented yet');
	},
};

// module.exports = {
// 	http: httpClientPlugin,
// };
