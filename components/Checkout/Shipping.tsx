import { useState, useEffect } from 'react';

import { useFormContext, FieldError } from 'react-hook-form';

import { inputData } from '../../data/inputData';

import { InputsInt } from '../../models/inputs';

const Shipping = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [inputArr, setInputArr] = useState<InputsInt['shipping']>([]);

	useEffect(() => {
		setInputArr(inputData.shipping);
	}, []);

	return (
		<div>
			<span className="span span--checkout">shipping info</span>
			<div className="checkout__container checkout__container--shipping">
				{inputArr.map((input) => (
					<div key={input.id} className="input__container">
						<label htmlFor={input.id}>{input.name}</label>
						<input
							placeholder={input.placeholder}
							className={`input input--text ${
								errors[`${input.id}`] ? 'error' : ''
							}`}
							type="text"
							defaultValue=""
							{...register(input.id, {
								required: input.required as { value: boolean; message: string },
								minLength: input.minLength as {
									value: number;
									message: string;
								},
								maxLength: input.maxLength as {
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

export default Shipping;
