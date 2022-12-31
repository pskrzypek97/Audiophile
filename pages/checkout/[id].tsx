import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppSelector } from '../../store/hooks';

import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';
import SuccessModal from '../../components/Modal/SuccessModal';
import HeadComp from '../../components/Head/HeadComp';
import Loader from '../../components/Loader/Loader';

const CheckoutPage = () => {
	const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);
	const [loading, setLoading] = useState(true);

	const { id } = useAppSelector((state) => state.cart);
	const router = useRouter();

	useEffect(() => {
		if (router.asPath.includes(id.toString())) setLoading(false);
		if (!router.asPath.includes(id.toString())) router.push('/404');
	}, []);

	const checkoutPage = (
		<>
			<HeadComp title={'Checkout'} />
			<GoBackButton />

			<section className="checkout-main">
				<Checkout onSuccess={setIsSubmitSuccessful} />
				<Summary />
			</section>
			{isSubmitSuccessful && <SuccessModal />}
		</>
	);

	return (
		<>
			{loading && <Loader />}
			{!loading && checkoutPage}
		</>
	);
};

export default CheckoutPage;
