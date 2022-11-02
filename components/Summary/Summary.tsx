import { Dispatch, SetStateAction } from 'react';

import { useAppSelector } from '../../store/hooks';

import SmallProduct from '../SmallProduct/SmallProduct';
import SummaryPrice from './SummaryPrice';

interface ActionsProps {
	actions: {
		valid: boolean | null;
		setIsSuccess: Dispatch<SetStateAction<boolean>>;
	};
}

const Summary = ({ actions }: ActionsProps) => {
	const { cart, total } = useAppSelector((store) => store.cart);

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
					<SmallProduct
						key={product.id}
						type={'summary'}
						product={product}
						child={'AmountParagraph'}
					/>
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
