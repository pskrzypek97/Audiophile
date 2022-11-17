import { useState, useContext, useEffect, SetStateAction } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { removeAll, resetId } from '../../store/cart';
import ModalContext from '../../store/ModalProvider';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import { modalVariants } from '../../variants/modalVariants';

import SmallProduct from '../SmallProduct/SmallProduct';
import { ChosenProduct } from '../../models/chosenProduct';

const SuccessModal = () => {
	// access cart and total
	const { cart, total } = useAppSelector((store) => store.cart);
	const dispatch = useAppDispatch();

	// manage the showMore button
	const [showMore, setShowMore] = useState(false);

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

	return (
		<motion.div
			className="modal modal--checkout"
			variants={modalVariants}
			initial="hidden"
			animate="visible"
		>
			<svg className="modal__logo">
				<use href="/sprite.svg#icon-order-confirmation" />
			</svg>
			<h3 className="heading-3">
				thank you <br /> for your order
			</h3>
			<p className="paragraph">
				You will receive an email confirmation shortly.
			</p>
			<div className="confirmation">
				<div className="confirmation__products">
					{cart.length !== 0 && (
						<SmallProduct
							type={'modal'}
							product={cart[0]}
							child={'AmountParagraph'}
						/>
					)}
					{cart.length !== 0 &&
						showMore &&
						slicedCart.map((product: ChosenProduct) => (
							<SmallProduct
								key={product.id}
								type={'modal'}
								product={product}
								child={'AmountParagraph'}
							/>
						))}
					{cart.length > 1 && (
						<div className="confirmation__more">
							<button
								className="btn btn--success-modal"
								onClick={() => setShowMore((prevShowMore) => !prevShowMore)}
							>
								{!showMore && `and ${cart.length - 1} other item(s)`}
								{showMore && 'View less'}
							</button>
						</div>
					)}
				</div>

				<div className="confirmation__total">
					<p className="paragraph paragraph--summary">grand total</p>
					<h6 className="heading-6">$ {total + 50}</h6>
				</div>
			</div>
			<Link href="/" className="btn btn--see-product">
				back to home
			</Link>
		</motion.div>
	);
};

export default SuccessModal;
