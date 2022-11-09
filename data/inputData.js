export const inputData = {
	billing: [
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
	],
	shipping: [
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
	],
	payment: [
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
	],
	'e-money': [
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
	],
};
