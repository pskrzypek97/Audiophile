import { useFormContext, FieldError } from 'react-hook-form';

const Billing = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const inputArr = [
		{
			id: 'name',
			name: 'Name',
			placeholder: 'Alexei Ward',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 2,
				message: 'The name must be at least 2 characters long.',
			},
		},
		{
			id: 'email',
			name: 'Email Address',
			placeholder: 'alexei@mail.com',
			required: {
				value: true,
				message: 'This field is required',
			},
			pattern: {
				value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				message: 'Wrong format',
			},
		},
		{
			id: 'phone',
			name: 'Phone Number',
			placeholder: '+1 202-555-0136',
			required: {
				value: true,
				message: 'This field is required',
			},
			minLength: {
				value: 9,
				message: 'The phone number must be at least 9 characters long',
			},
			pattern: {
				value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
				message: 'Wrong format',
			},
		},
	];

	return (
		<div>
			<span className="span span--checkout">billing details</span>
			<div className="checkout__container checkout__container--billing">
				{inputArr.map((input) => (
					<div key={input.id} className="input__container">
						<label htmlFor={input.id}>{input.name}</label>
						<input
							className="input input--text"
							placeholder={input.placeholder}
							id={input.id}
							type="text"
							defaultValue=""
							{...register(input.id, {
								required: input.required,
								minLength: input.minLength,
								pattern: input.pattern,
							})}
						/>
						{errors[`${input.id}`] && (
							<span>{errors[`${input.id}`]?.message as FieldError | any}</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Billing;
