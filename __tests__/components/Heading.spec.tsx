import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Heading } from '../../src/global/components';
import { THEME_DEFAULT } from '../../src/global/styles/theme';

describe('Heading', () => {
	it('Should renders', () => {
		const { getByText, debug } = render(
			<ThemeProvider theme={THEME_DEFAULT}>
				<Heading level={1} title="First test" fontSize="lg" />
			</ThemeProvider>
		);
		debug();
		expect(getByText('First test')).toBeInTheDocument();
	});
});
