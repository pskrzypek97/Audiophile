import { useEffect, Dispatch, SetStateAction } from 'react';

import { useForm, FormProvider } from 'react-hook-form';

import { CheckoutForm } from '../../models/checkoutForm';

import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';

interface OnValidProp {
	onValid: Dispatch<SetStateAction<boolean>>;
}

const Checkout = ({ onValid }: OnValidProp) => {
	const methods = useForm();
	const onSubmit = (data: CheckoutForm) => console.log(data);

	const { isValid } = methods.formState;

	useEffect(() => onValid(isValid), [isValid]);

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
