import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';
import GoBackButton from '../../components/UI/GoBackButton';

const CheckoutPage = () => {
	return (
		<>
			<GoBackButton />

			<section className="checkout-main">
				<Checkout />
				<Summary />
			</section>
		</>
	);
};

export default CheckoutPage;
