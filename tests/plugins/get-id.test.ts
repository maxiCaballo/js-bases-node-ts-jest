import { createID } from '../../src/plugins';

describe('plugins/get-id-plugin.ts', () => {
	test('createID should return a UUID', () => {
		const id = createID();

		expect(typeof id).toBe('string');
		expect(id.length).toBe(36);
	});
});
