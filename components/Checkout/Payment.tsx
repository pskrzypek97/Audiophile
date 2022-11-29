import { useState, useEffect } from 'react';

import { useFormContext } from 'react-hook-form';

import { InputsInt } from '../../models/inputs';

import EMoney from './EMoney';
import CashOnDelivery from './CashOnDelivery';

interface PaymentInt {
	payment: InputsInt['payment'];
	emoney: InputsInt['e-money'];
}

const Payment = ({ payment, emoney }: PaymentInt) => {
	const [isEmoney, setIsEmoney] = useState(true);
	const [radioArr, setRadioArr] = useState<InputsInt['payment']>([]);

	const { register, unregister } = useFormContext();

	useEffect(() => {
		setRadioArr(payment);
	}, []);

	const unregisterInputs = (state: boolean) => {
		unregister('e-money pin');
		unregister('e-money number');
		setIsEmoney(state);
	};

	return (
		<div className="checkout__payment">
			<span className="span span--checkout">payment details</span>
			<div>
				<div className="input__container input__container--radio">
					<label className="checkout__label">Payment Method</label>
					<div className="input__radio-container">
						{radioArr.map((btn) => (
							<div key={btn.id}>
								<input
									className="input input--radio"
									type="radio"
									id={btn.id}
									value={btn.id}
									onClick={() => unregisterInputs(btn.isEmoney!)}
									defaultChecked={btn.checked}
									{...register('payment-method')}
								/>
								<label htmlFor={btn.id}>
									<span>{btn.name}</span>
								</label>
							</div>
						))}
					</div>
				</div>
				<div className="checkout__extra">
					{!isEmoney && <CashOnDelivery />}
					{isEmoney && <EMoney emoney={emoney} />}
				</div>
			</div>
		</div>
	);
};

export default Payment;
