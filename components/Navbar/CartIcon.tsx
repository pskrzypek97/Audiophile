import { useContext } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import { useAppSelector } from '../../store/hooks';
import ModalContext from '../../store/ModalProvider';

const cartAmountVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.25,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.25,
		},
	},
};

const CartIcon = () => {
	const { cart } = useAppSelector((state) => state.cart);

	const { handleCart } = useContext(ModalContext);

	return (
		<div className="cart">
			<svg className="cart__icon" onClick={handleCart}>
				<use href="/sprite.svg#icon-cart"></use>
			</svg>

			<AnimatePresence>
				{cart.length && (
					<motion.div
						className="cart__amount"
						variants={cartAmountVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<span>{cart.length}</span>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default CartIcon;
