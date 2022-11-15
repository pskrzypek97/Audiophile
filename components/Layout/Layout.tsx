import React, { ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setCartSlice } from '../../store/cart';

import { motion, AnimatePresence } from 'framer-motion';
import { modalVariants } from '../../variants/modalVariants';

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
	'checkout',
];

const Layout = ({ children }: Props) => {
	const { overlay, handleOverlay } = useContext(ModalContext);

	const router = useRouter();

	const { cart, id, total } = useAppSelector((state) => state.cart);
	const dispatch = useAppDispatch();

	// get cart when reloading the page or revisiting
	useEffect(() => {
		const cartObj = JSON.parse(window.localStorage.getItem('cart') as string);
		if (cartObj) {
			dispatch(setCartSlice(cartObj));
		}
		if (!cartObj) return;
	}, []);

	// update localstorage each time user updates cart
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify({ id, cart, total }));
	}, [total]);

	const mainStyle = productArr.some((product) =>
		router.asPath.includes(product)
	)
		? 'main main--product'
		: 'main';

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
