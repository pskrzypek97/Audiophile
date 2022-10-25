import { useAppDispatch } from '../../store/hooks';
import { incrementAmount, subtractAmount } from '../../store/cart';

import { ChosenProduct } from '../../models/chosenProduct';

import QuantityButtons from '../UI/QuantityButtons';

const ModalProduct = ({ product }: { product: ChosenProduct }) => {
	const dispatch = useAppDispatch();

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
			<QuantityButtons
				actions={{
					isProductPage: false,
					amount: product.amount,
					increment: handleIncrementAmount,
					subtract: handleSubtractAmount,
				}}
			/>
		</div>
	);
};

export default ModalProduct;
