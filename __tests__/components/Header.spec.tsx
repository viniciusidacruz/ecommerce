import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../../src/global/components';
import { THEME_DEFAULT } from '../../src/global/styles/theme';

describe('Header', () => {
	it('Should renders', () => {
		const { getByText } = render(
			<ThemeProvider theme={THEME_DEFAULT}>
				<Header />
			</ThemeProvider>
		);
		const buttonElement = getByText('Entrar');

		expect(buttonElement).toBeInTheDocument();
	});
});
