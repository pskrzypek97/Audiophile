import { useEffect, useContext } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setCartSlice } from '../store/cart';
import ModalContext from '../store/ModalProvider';

const productArr = [
	'xx99-mark-two-headphones',
	'xx99-mark-one-headphones',
	'xx59-headphones',
	'zx9-speaker',
	'zx7-speaker',
	'yx1-earphones',
	'checkout',
];

export const useLayout = () => {
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
	}, [dispatch]);

	// update localstorage each time user updates cart
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify({ id, cart, total }));
	}, [total, id, cart]);

	const mainStyle = productArr.some((product) =>
		router.asPath.includes(product)
	)
		? 'main main--product'
		: 'main';

	return { overlay, handleOverlay, mainStyle };
};
