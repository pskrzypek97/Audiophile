import { useState, useEffect } from 'react';

import { useFormContext, FieldError } from 'react-hook-form';

import { InputsInt } from '../../models/inputs';

const Billing = ({ billing }: { billing: InputsInt['billing'] }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [inputArr, setInputArr] = useState<InputsInt['billing']>([]);

	useEffect(() => {
		setInputArr(billing);
	}, []);

	return (
		<div>
			<span className="span span--checkout">billing details</span>
			<div className="checkout__container checkout__container--billing">
				{inputArr.map((input) => (
					<div key={input.id} className="input__container">
						<label htmlFor={input.id}>{input.name}</label>
						<input
							className={`input input--text ${
								errors[`${input.id}`] ? 'error' : ''
							}`}
							placeholder={input.placeholder}
							id={input.id}
							type="text"
							defaultValue=""
							{...register(input.id, {
								required: input.required as { value: boolean; message: string },
								minLength: input.minLength as {
									value: number;
									message: string;
								},
								pattern: input.pattern as { value: RegExp; message: string },
							})}
						/>
						{errors[`${input.id}`] && (
							<span className="input__error">
								{errors[`${input.id}`]?.message as FieldError | any}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Billing;
