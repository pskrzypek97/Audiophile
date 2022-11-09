import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';

import ModalContext from '../../store/ModalProvider';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
	children?: ReactNode;
}

const productArr = [
	'xx99-mark-two-headphones',
	'xx99-mark-one-headphones',
	'xx59-headphones',
	'zx9-speaker',
	'zx7-speaker',
	'yx1-earphones',
];

const Layout = ({ children }: Props) => {
	const { overlay, handleOverlay } = useContext(ModalContext);

	const router = useRouter();

	const mainStyle = productArr.some((product) =>
		router.asPath.includes(product)
	)
		? 'main main--product'
		: 'main';

	return (
		<div className="container">
			<Navbar />
			{overlay && <div className="overlay" onClick={handleOverlay}></div>}
			<main className={mainStyle}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
