import React, { ReactNode, useContext } from 'react';
import { useRouter } from 'next/router';

import OverlayContext from '../../store/ModalProvider';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	const { overlay, setOverlay, setModal } = useContext(OverlayContext);

	const handleOverlay = () => {
		setOverlay((prevOverlay) => !prevOverlay);
		setModal(false);
	};

	const router = useRouter();

	const mainStyle = /\/.*\//.test(router.asPath)
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
