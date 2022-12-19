import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import { Drawer } from '../../src/global/components';
import { THEME_DEFAULT } from '../../src/global/styles/theme';

describe('Drawer', () => {
	it('Should renders', () => {
		const { getByText, getByTestId } = render(
			<ThemeProvider theme={THEME_DEFAULT}>
				<Drawer />
			</ThemeProvider>
		);
		const closeIcon = getByTestId('close-icon');
		const iconsGroup = getByTestId('icons-group');
		const backgroundWrapper = getByTestId('background');

		expect(closeIcon).toBeInTheDocument();
		expect(iconsGroup).toBeInTheDocument();
		expect(backgroundWrapper).toBeInTheDocument();
		expect(getByText('Menu')).toBeInTheDocument();
	});

	it('Should be change open drawer icons', async () => {
		const { getByTestId } = render(
			<ThemeProvider theme={THEME_DEFAULT}>
				<Drawer />
			</ThemeProvider>
		);

		const iconsGroup = getByTestId('icons-group');
		const openIcon = getByTestId('open-header-icon');

		expect(openIcon).toBeInTheDocument();

		await userEvent.click(iconsGroup);

		const closeIcon = getByTestId('close-header-icon');

		expect(closeIcon).toBeInTheDocument();
	});
});
