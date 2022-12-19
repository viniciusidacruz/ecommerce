import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Footer, Header } from '../global/components';

import { ResetCSS } from '../global/styles/resetCSS';
import { THEME_DEFAULT } from '../global/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={THEME_DEFAULT}>
			<ResetCSS />
			<Header />
			<Component {...pageProps} />
			<Footer />
		</ThemeProvider>
	);
}
