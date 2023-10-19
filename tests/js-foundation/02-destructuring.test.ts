import { characters } from '../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring.ts', () => {
	test('characters should contain Flash and Superman', () => {
		expect(characters).toContain('Flash');
		expect(characters).toContain('Superman');
	});

	test('1st characters should be Flash and  2nd Superman', () => {
		const [batman, superman] = characters;
		expect(batman).toBe('Batman');
		expect(superman).toBe('Superman');
	});
});
