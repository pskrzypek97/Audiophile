import { useState } from 'react';

import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';
import SuccessModal from '../../components/Modal/SuccessModal';
import HeadComp from '../../components/Head/HeadComp';

const CheckoutPage = () => {
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

	return (
		<>
			<HeadComp subtitle={'Checkout'} />
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
