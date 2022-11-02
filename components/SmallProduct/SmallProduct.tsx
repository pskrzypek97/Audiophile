import { useAppDispatch } from '../../store/hooks';
import { incrementAmount, subtractAmount } from '../../store/cart';

import { ChosenProduct } from '../../models/chosenProduct';

import QuantityButtons from '../UI/QuantityButtons';

interface SmallProduct {
	type: 'modal' | 'summary';
	product: ChosenProduct;
	child: 'QuantityButtons' | 'AmountParagraph';
}

const SmallProduct = ({ type, product, child }: SmallProduct) => {
	const dispatch = useAppDispatch();

	const handleIncrementAmount = () => {
		dispatch(incrementAmount(product.id));
	};

	const handleSubtractAmount = () => {
		dispatch(subtractAmount(product.id));
	};

	return (
		<div className={`${type}__product`}>
			<picture>
				<img className={`${type}__img`} src={product.cartImage} />
			</picture>
			<div>
				<p className="paragraph paragraph--product">{product.name}</p>
				<span className="span span--summary">$ {product.originalPrice}</span>
			</div>
			{child === 'QuantityButtons' && (
				<QuantityButtons
					actions={{
						isProductPage: false,
						amount: product.amount,
						increment: handleIncrementAmount,
						subtract: handleSubtractAmount,
					}}
				/>
			)}
			{child === 'AmountParagraph' && (
				<p className="paragraph">x{product.amount}</p>
			)}
		</div>
	);
};

export default SmallProduct;
