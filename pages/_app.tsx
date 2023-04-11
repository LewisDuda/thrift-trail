import '@/styles/globals.css';
// import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { NextComponentType, NextPageContext } from 'next/types';
import { ThemeProvider } from 'next-themes';

interface AppProps {
	Component: NextComponentType<NextPageContext, any, any>;
	pageProps: any;
	session: any;
}

function App({ Component, pageProps, session }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ThemeProvider>
	);
}

export default App;
