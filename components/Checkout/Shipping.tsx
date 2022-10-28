import { useFormContext } from 'react-hook-form';

const Shipping = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputArr = [
		{
			id: 'address',
			name: 'Address',
			placeholder: '1137 Williams Avenue',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 5,
				message: 'Address must be at least 5 characters long',
			},
		},
		{
			id: 'zip',
			name: 'ZIP Code',
			placeholder: '10001',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 2,
				message: 'ZIP Code must be at least 2 characters long',
			},
			maxLength: {
				value: 12,
				message: 'ZIP Code cannot be longer than 12 characters',
			},
			pattern: {
				value: /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/,
				message: 'Wrong format',
			},
		},
		{
			id: 'city',
			name: 'City',
			placeholder: 'New York',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 2,
				message: 'Country must be at least 2 characters long',
			},
			pattern: {
				value: /^[A-Za-z]+$/,
				message: 'Wrong format',
			},
		},
		{
			id: 'country',
			name: 'Country',
			placeholder: 'United States',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 3,
				message: 'Country must be at least 3 characters long',
			},
			pattern: {
				value: /^[A-Za-z]+$/,
				message: 'Wrong format',
			},
		},
	];

	return (
		<div>
			<span className="span span--checkout">shipping info</span>
			<div className="checkout__container checkout__container--shipping">
				{inputArr.map((input) => (
					<div key={input.id} className="input__container">
						<label htmlFor={input.id}>{input.name}</label>
						<input
							placeholder={input.placeholder}
							className="input input--text"
							type="text"
							defaultValue=""
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
			</div>
		</div>
	);
};

export default Shipping;
