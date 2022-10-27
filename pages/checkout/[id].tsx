import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';
import SuccessModal from '../../components/Modal/SuccessModal';

const CheckoutPage = () => {
	return (
		<>
			<GoBackButton />

			<section className="checkout-main">
				<Checkout />
				<Summary />
			</section>
			<SuccessModal />
		</>
	);
};

export default CheckoutPage;
