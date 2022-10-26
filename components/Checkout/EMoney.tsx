import { useFormContext } from 'react-hook-form';

const EMoney = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputArr = [
		{
			id: 'e-money number',
			name: 'e-Money Number',
			placeholder: '238521993',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 9,
				message: 'Number must be at least 9 characters long',
			},
			maxLength: {
				value: 9,
				message: 'Number cannot be longer than 9 characters',
			},
			pattern: {
				value: /^[0-9]+$/,
				message: 'Wrong format',
			},
		},
		{
			id: 'e-money pin',
			name: 'e-Money PIN',
			placeholder: '6891',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 4,
				message: 'PIN must be at least 4 characters long',
			},
			maxLength: {
				value: 4,
				message: 'PIN cannot be longer than 4 characters',
			},
			pattern: {
				value: /^[0-9]+$/,
				message: 'Wrong format',
			},
		},
	];

	return (
		<>
			{inputArr.map((input) => (
				<div key={input.id} className="input__container">
					<label htmlFor={input.id}>{input.name}</label>
					<input
						type="text"
						id={input.id}
						placeholder={input.placeholder}
						className="input input--text"
						{...register(input.id, {
							required: input.required,
							minLength: input.minLength,
							maxLength: input.maxLength,
							pattern: input.pattern,
						})}
					/>
					{errors[`${input.id}`] && (
						<span>{errors[`${input.id}`]?.message}</span>
					)}
				</div>
			))}
		</>
	);
};

export default EMoney;
