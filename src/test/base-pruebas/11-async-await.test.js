import { getImagen } from '../../base-pruebas/11-async-await';

describe('Pruebas en 11-async-await', () => {
	test('Debe retornar url de la imagen', async () => {
		const url = await getImagen();
		expect(typeof url).toBe('string');
	});
});
