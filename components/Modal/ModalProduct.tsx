import { useDispatch } from 'react-redux';
import { incrementAmount, subtractAmount } from '../../store/cart';

const ModalProduct = ({ product }) => {
	const dispatch = useDispatch();

	const handleIncrementAmount = () => {
		dispatch(incrementAmount(product.id));
	};

	const handleSubtractAmount = () => {
		dispatch(subtractAmount(product.id));
	};

	return (
		<div className="modal__product">
			<picture>
				<img src={product.cartImage} className="modal__img" />
			</picture>
			<div>
				<p className="paragraph paragraph--product">{product.name}</p>
				<span className="span span--summary">$ {product.originalPrice}</span>
			</div>
			<div className="product__buttons">
				<div className="product__quantity">
					<button className="btn btn--amount" onClick={handleSubtractAmount}>
						-
					</button>
					<span>{product.amount}</span>
					<button className="btn btn--amount" onClick={handleIncrementAmount}>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalProduct;
