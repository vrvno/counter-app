import React from 'react';
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FirstApp/>', () => {
	// test('debe hacer match con el snapshot', () => {
	// 	const title = 'uHola, Soy Goku';
	// 	const { container } = render(<FirstApp title={title} />);

	// 	expect(container).toMatchSnapshot();
	// });

	test('debe de mostrar el titulo en un h1', () => {
		const title = 'Hola, Soy Goku';
		const { container, getByText, getByTestId } = render(
			<FirstApp title={title} />
		);
		expect(getByText(title)).toBeTruthy();

		// const h1 = container.querySelector('h1');
		// expect(h1.innerHTML).toContain(title);
		expect(getByTestId('test-title').innerHTML).toContain('Hola, Soy Goku');
	});

	test('debe de mostrar subtitulo', () => {
		const title = 'Hola, Soy Goku';
		const subTitle = 'Soy un subtítulo';
		const { getAllByText } = render(
			<FirstApp title={title} subTitle={subTitle} />
		);

		expect(getAllByText(subTitle).length).toBe(1);
	});
});
