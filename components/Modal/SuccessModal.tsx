import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { removeAll, resetId } from '../../store/cart';

import Link from 'next/link';

const SuccessModal = () => {
	const { cart } = useAppSelector((store) => store.cart);
	const dispatch = useAppDispatch();

	const [showMore, setShowMore] = useState(false);

	const total =
		cart.length === 1
			? cart[0].price
			: cart.reduce((prevPrice: number, { price }) => prevPrice + price, 0);

	const slicedCart = cart.slice(1);

	// reset cart
	const handleResetCart = () => {
		dispatch(removeAll());
		dispatch(resetId());
	};

	return (
		<div className="modal modal--checkout">
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
						<div className="modal__product">
							<picture>
								<img className="modal__img" src={cart[0].cartImage} />
							</picture>
							<div>
								<p className="paragraph paragraph--product">{cart[0].name}</p>
								<span className="span span--summary">
									$ {cart[0].originalPrice}
								</span>
							</div>
							<p className="paragraph">x{cart[0].amount}</p>
						</div>
					)}
					{cart.length !== 0 &&
						showMore &&
						slicedCart.map((product) => (
							<div key={product.id} className="modal__product">
								<picture>
									<img className="modal__img" src={product.cartImage} />
								</picture>
								<div>
									<p className="paragraph paragraph--product">{product.name}</p>
									<span className="span span--summary">
										$ {product.originalPrice}
									</span>
								</div>
								<p className="paragraph">x{product.amount}</p>
							</div>
						))}
					{cart.length > 1 && (
						<div className="confirmation__more">
							<button
								className="btn btn--back"
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
			<Link href="/">
				<a className="btn btn--see-product" onClick={handleResetCart}>
					back to home
				</a>
			</Link>
		</div>
	);
};

export default SuccessModal;
