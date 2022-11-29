import { useContext, Dispatch, SetStateAction } from 'react';

import ModalContext from '../../store/ModalProvider';

import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { inputData } from '../../data/inputData';

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
	const { handleSuccessModal } = useContext(ModalContext);

	const methods = useForm<CheckoutForm>();
	const onSubmit: SubmitHandler<CheckoutForm> = async (data) => {
		const result = await postFormData(data);
		onSuccess(result.success);
		handleSuccessModal();
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				id="checkout"
				className="checkout"
			>
				<h3 className="heading-3">checkout</h3>

				<Billing billing={inputData.billing} />
				<Shipping shipping={inputData.shipping} />
				<Payment payment={inputData.payment} emoney={inputData['e-money']} />
			</form>
		</FormProvider>
	);
};

export default Checkout;
