import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = () => {
	return (
		<form id="checkout" className="checkout">
			<h3 className="heading-3">checkout</h3>

			<Billing />
			<Shipping />
			<Payment />
		</form>
	);
};

export default Checkout;
