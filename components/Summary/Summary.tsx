import { useAppSelector } from '../../store/hooks';

import SummaryProduct from './SummaryProduct';
import SummaryPrice from './SummaryPrice';

const Summary = () => {
	const { cart } = useAppSelector((store) => store.cart);

	const total =
		cart.length === 1
			? cart[0].price
			: cart.reduce((prevPrice: number, { price }) => prevPrice + price, 0);

	return (
		<section className="summary">
			<h6 className="heading-6">summary</h6>
			<div>
				{cart.map((product) => (
					<SummaryProduct key={product.id} product={product} />
				))}
			</div>
			<SummaryPrice total={total} />

			<button form="checkout" className="btn btn--see-product">
				continue & pay
			</button>
		</section>
	);
};

export default Summary;
