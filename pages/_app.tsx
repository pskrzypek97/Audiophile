import { AppProps } from 'next/app';
import '../styles/main.scss';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import { ModalProvider } from '../store/ModalProvider';

import Layout from '../components/Layout/Layout';

// put app component inisde Provider component so the store is
// available in the whole app
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ModalProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ModalProvider>
		</Provider>
	);
}

export default MyApp;
