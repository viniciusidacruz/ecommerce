import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ResetCSS } from '../global/styles/resetCSS';
import { THEME_DEFAULT } from '../global/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={THEME_DEFAULT}>
			<ResetCSS />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
