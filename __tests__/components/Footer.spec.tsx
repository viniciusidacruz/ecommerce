import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Footer } from '../../src/global/components';
import { THEME_DEFAULT } from '../../src/global/styles/theme';

describe('Footer', () => {
	it('Should renders descriptions', () => {
		const { getByText } = render(
			<ThemeProvider theme={THEME_DEFAULT}>
				<Footer />
			</ThemeProvider>
		);
		const description =
			'Desenvolvido por Vinicius Italo para aperfeiçoamento de técnologias da programação front-end';
		const copyright = 'Desenvolvido em 2022';

		expect(getByText(description)).toBeInTheDocument();
		expect(getByText(copyright)).toBeInTheDocument();
	});
});
