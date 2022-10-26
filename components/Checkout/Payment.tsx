import { useState } from 'react';

import { useFormContext } from 'react-hook-form';

import EMoney from './EMoney';
import CashOnDelivery from './CashOnDelivery';

const Payment = () => {
	const [paymentOption, setPaymentOption] = useState('e-money');

	const { register } = useFormContext();

	const radioArr = [
		{
			id: 'e-money',
			name: 'e-Money',
			checked: true,
		},
		{
			id: 'cash',
			name: 'Cash on Delivery',
			checked: false,
		},
	];

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
									onClick={() => setPaymentOption(btn.id)}
									defaultChecked={btn.checked}
									{...register('payment-method')}
								/>
								<label htmlFor={btn.id}>{btn.name}</label>
							</div>
						))}
					</div>
				</div>
				<div className="checkout__extra">
					{paymentOption === 'cash' && <CashOnDelivery />}
					{paymentOption === 'e-money' && <EMoney />}
				</div>
			</div>
		</div>
	);
};

export default Payment;
