// const { createID } = require('./get-id-plugin');
// const { getAge } = require('./get-age-plugin');
// const { http } = require('./http-client-plugin');
// const buildLogger = require('./logger-plugin');

export { getAge } from './get-age-plugin';
export { createID } from './get-id-plugin';
export { buildLogger } from './logger-plugin';
export { httpClientPlugin as http } from './http-client-plugin';

// module.exports = {
// 	createID,
// 	getAge,
// 	http,
// 	buildLogger,
// };
