import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	const router = useRouter();

	const mainStyle = /\/.*\//.test(router.asPath)
		? 'main main--product'
		: 'main';

	return (
		<div className="container">
			<Navbar />
			<main className={mainStyle}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
