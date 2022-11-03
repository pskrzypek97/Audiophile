import { useState } from 'react';

import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';
import SuccessModal from '../../components/Modal/SuccessModal';

const CheckoutPage = () => {
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

	return (
		<>
			<GoBackButton />

			<section className="checkout-main">
				<Checkout onSuccess={setIsSubmitSuccessful} />
				<Summary />
			</section>
			{isSubmitSuccessful && <SuccessModal />}
		</>
	);
};

export default CheckoutPage;
