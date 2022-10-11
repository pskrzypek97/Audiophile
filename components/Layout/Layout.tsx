import React, { ReactNode } from 'react';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className="container">
			<Navbar />
			<main className="main">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
