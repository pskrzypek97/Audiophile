import { AppProps } from 'next/app';
import '../styles/main.scss';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
