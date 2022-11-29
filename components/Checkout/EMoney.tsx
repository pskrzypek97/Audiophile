import { useState, useEffect } from 'react';

import { useFormContext, FieldError } from 'react-hook-form';

import { InputsInt } from '../../models/inputs';

const EMoney = ({ emoney }: { emoney: InputsInt['e-money'] }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [inputArr, setInputArr] = useState<InputsInt['e-money']>([]);

	useEffect(() => {
		setInputArr(emoney);
	}, []);

	return (
		<>
			{inputArr.map((input) => (
				<div key={input.id} className="input__container">
					<label htmlFor={input.id}>{input.name}</label>
					<input
						type="text"
						id={input.id}
						placeholder={input.placeholder}
						className={`input input--text ${
							errors[`${input.id}`] ? 'error' : ''
						}`}
						defaultValue=""
						{...register(input.id, {
							required: input.required as { value: boolean; message: string },
							minLength: input.minLength as { value: number; message: string },
							maxLength: input.maxLength as { value: number; message: string },
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
		</>
	);
};

export default EMoney;
