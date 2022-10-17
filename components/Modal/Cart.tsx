import { useSelector, useDispatch } from 'react-redux';

import { removeAll } from '../../store/cart';

import ModalProduct from './ModalProduct';

const Cart = () => {
	const { cart } = useSelector((state) => state.cart);

	const dispatch = useDispatch();

	const total =
		cart.length === 1
			? cart[0].price
			: cart.reduce((prevPrice: number, { price }) => prevPrice + price, 0);

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
					<ModalProduct key={product.id} product={product} />
				))}
			<div className="summary__price">
				<div>
					<p className="paragraph paragraph--summary">total</p>
					<h6 className="heading-6">$ {!cart.length ? 0 : total}</h6>
				</div>
			</div>
			{cart.length >= 1 && <a className="btn btn--see-product">checkout</a>}
		</div>
	);
};

export default Cart;
