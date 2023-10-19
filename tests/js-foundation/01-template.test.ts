import { emailTemplate } from '../../src/js-foundation/01-template';

describe('js-foundation/01-template.ts', () => {
	test('emailTemplate should contain a greeting', () => {
		expect(emailTemplate).toMatch(/thank you for your order/i);
	});

	test('emailTemplate should contain {{name}} and {{orderId}}', () => {
		expect(emailTemplate).toMatch(/{{name}}/i);
		expect(emailTemplate).toMatch(/{{orderId}}/i);
	});
});
