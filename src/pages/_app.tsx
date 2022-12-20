import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from '../global/store';

import { Footer, Header } from '../global/components';

import { ResetCSS } from '../global/styles/resetCSS';
import { THEME_DEFAULT } from '../global/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={THEME_DEFAULT}>
			<Provider store={store}>
				<ResetCSS />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Provider>
		</ThemeProvider>
	);
}
