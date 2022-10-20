import Checkout from '../../components/Checkout/Checkout';
import Summary from '../../components/Summary/Summary';

const CheckoutPage = () => {
	return (
		<>
			<a href="#" className="btn btn--back">
				Go Back
			</a>

			<section className="checkout-main">
				<Checkout />
				<Summary />
			</section>
		</>
	);
};

export default CheckoutPage;
