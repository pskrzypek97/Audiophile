import { useAppSelector } from '../../store/hooks';

import SmallProduct from '../SmallProduct/SmallProduct';
import SummaryPrice from './SummaryPrice';

const Summary = () => {
	const { cart, total } = useAppSelector((store) => store.cart);

	return (
		<section className="summary">
			<h6 className="heading-6">summary</h6>
			<div>
				{cart.map((product) => (
					<SmallProduct
						key={product.id}
						type={'summary'}
						product={product}
						child={'AmountParagraph'}
					/>
				))}
			</div>
			<SummaryPrice total={total} />

			<button form="checkout" className="btn btn--see-product btn--long">
				continue & pay
			</button>
		</section>
	);
};

export default Summary;
