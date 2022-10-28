import { Dispatch, SetStateAction } from 'react';

import { useAppSelector } from '../../store/hooks';

import SummaryProduct from './SummaryProduct';
import SummaryPrice from './SummaryPrice';

interface ActionsProps {
	actions: {
		valid: boolean | null;
		setIsSuccess: Dispatch<SetStateAction<boolean>>;
	};
}

const Summary = ({ actions }: ActionsProps) => {
	const { cart } = useAppSelector((store) => store.cart);

	const total =
		cart.length === 1
			? cart[0].price
			: cart.reduce((prevPrice: number, { price }) => prevPrice + price, 0);

	const handleSuccess = () => {
		if (actions.valid) {
			actions.setIsSuccess(true);
		}
	};

	return (
		<section className="summary">
			<h6 className="heading-6">summary</h6>
			<div>
				{cart.map((product) => (
					<SummaryProduct key={product.id} product={product} />
				))}
			</div>
			<SummaryPrice total={total} />

			<button
				form="checkout"
				className="btn btn--see-product"
				onClick={handleSuccess}
			>
				continue & pay
			</button>
		</section>
	);
};

export default Summary;
