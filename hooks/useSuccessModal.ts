import { useState, useContext, useEffect, SetStateAction } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeAll, resetId } from '../store/cart';
import ModalContext from '../store/ModalProvider';

import { ChosenProduct } from '../models/chosenProduct';

export const useSuccessModal = () => {
	// access cart and total
	const { cart, total } = useAppSelector((store) => store.cart);
	const dispatch = useAppDispatch();

	// access handleSuccessModalOff and successModal state
	const { handleSuccessModalOff, successModal } = useContext(ModalContext);
	const router = useRouter();

	// create slicedCart array
	const [slicedCart, setSlicedCart] = useState<
		SetStateAction<ChosenProduct[] | any>
	>([]);
	useEffect(() => setSlicedCart(cart.slice(1)), [cart]);

	// reset cart and turn modal off
	// when leaving page while successModal is true
	useEffect(() => {
		const handleRouteChange = () => {
			if (successModal) {
				dispatch(removeAll());
				dispatch(resetId());
				handleSuccessModalOff();
			}
		};

		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [dispatch, handleSuccessModalOff, router.events, successModal]);

	return { cart, total, slicedCart };
};
