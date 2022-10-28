import { useState } from 'react';

import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';
import SuccessModal from '../../components/Modal/SuccessModal';

const CheckoutPage = () => {
	const [isSuccess, setIsSuccess] = useState(false);
	const [valid, setValid] = useState(null);

	console.log(valid);

	return (
		<>
			<GoBackButton />

			<section className="checkout-main">
				<Checkout onValid={setValid} />
				<Summary actions={{ setIsSuccess, valid }} />
			</section>
			{isSuccess && <SuccessModal />}
		</>
	);
};

export default CheckoutPage;
