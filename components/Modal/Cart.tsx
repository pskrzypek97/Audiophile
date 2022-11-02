import Link from 'next/link';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

import { removeAll } from '../../store/cart';

import SmallProduct from '../SmallProduct/SmallProduct';

const Cart = () => {
	const { cart, id, total } = useAppSelector((state) => state.cart);

	const dispatch = useAppDispatch();

	return (
		<div className="modal modal--cart">
			<div className="modal__head">
				<h6 className="heading-6">Cart ({cart.length})</h6>
				<button
					className="btn btn--remove"
					onClick={() => dispatch(removeAll())}
				>
					Remove all
				</button>
			</div>
			{cart.length < 1 && <p className="paragraph">Cart is empty</p>}
			{cart.length >= 1 &&
				cart.map((product) => (
					<SmallProduct
						key={product.id}
						type={'modal'}
						product={product}
						child={'QuantityButtons'}
					/>
				))}
			<div className="summary__price">
				<div>
					<p className="paragraph paragraph--summary">total</p>
					<h6 className="heading-6">$ {total}</h6>
				</div>
			</div>
			{cart.length >= 1 && (
				<Link href={`/checkout/${id}`}>
					<a className="btn btn--see-product">checkout</a>
				</Link>
			)}
		</div>
	);
};

export default Cart;
