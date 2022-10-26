import { useForm, FormProvider } from 'react-hook-form';

import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';

const Checkout = () => {
	const methods = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				id="checkout"
				className="checkout"
			>
				<h3 className="heading-3">checkout</h3>

				<Billing />
				<Shipping />
				<Payment />
			</form>
		</FormProvider>
	);
};

export default Checkout;
