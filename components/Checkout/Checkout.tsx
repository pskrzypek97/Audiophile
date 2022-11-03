import { Dispatch, SetStateAction } from 'react';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { CheckoutForm } from '../../models/checkoutForm';

import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';

interface OnSuccessProp {
	onSuccess: Dispatch<SetStateAction<boolean>>;
}

const postFormData = (data: CheckoutForm): Promise<{ success: boolean }> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(data);
			resolve({ success: true });
		}, 1000);
	});
};

const Checkout = ({ onSuccess }: OnSuccessProp) => {
	const methods = useForm<CheckoutForm>();
	const onSubmit: SubmitHandler<CheckoutForm> = async (data) => {
		const result = await postFormData(data);
		onSuccess(result.success);
	};

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
