import { useState } from 'react';

import { useFormContext } from 'react-hook-form';

import EMoney from './EMoney';
import CashOnDelivery from './CashOnDelivery';

const Payment = () => {
	const [isEmoney, setIsEmoney] = useState(true);

	const { register, unregister } = useFormContext();

	const radioArr = [
		{
			id: 'e-money',
			name: 'e-Money',
			checked: true,
			isEmoney: true,
		},
		{
			id: 'cash',
			name: 'Cash on Delivery',
			checked: false,
			isEmoney: false,
		},
	];

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
									onClick={() => unregisterInputs(btn.isEmoney)}
									defaultChecked={btn.checked}
									{...register('payment-method')}
								/>
								<label htmlFor={btn.id}>{btn.name}</label>
							</div>
						))}
					</div>
				</div>
				<div className="checkout__extra">
					{!isEmoney && <CashOnDelivery />}
					{isEmoney && <EMoney isEmoney={isEmoney} />}
				</div>
			</div>
		</div>
	);
};

export default Payment;
