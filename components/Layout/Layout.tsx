import React, { ReactNode } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { modalVariants } from '../../variants/modalVariants';

import { useLayout } from '../../hooks/useLayout';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface Props {
	children?: ReactNode;
}

const Layout = ({ children }: Props) => {
	const { overlay, handleOverlay, mainStyle } = useLayout();

	return (
		<div className="container">
			<Navbar />
			<AnimatePresence>
				{overlay && (
					<motion.div
						className="overlay"
						onClick={handleOverlay}
						variants={modalVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					></motion.div>
				)}
			</AnimatePresence>
			<main className={mainStyle}>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
