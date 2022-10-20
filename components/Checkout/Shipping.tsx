const Shipping = () => {
	const inputArr = [
		{
			type: 'text',
			id: 'address',
			name: 'Address',
			placeholder: '1137 Williams Avenue',
		},
		{
			type: 'text',
			id: 'zip',
			name: 'ZIP Code',
			placeholder: '10001',
		},
		{
			type: 'text',
			id: 'city',
			name: 'City',
			placeholder: 'New York',
		},
		{
			type: 'text',
			id: 'country',
			name: 'Country',
			placeholder: 'United States',
		},
	];

	return (
		<div>
			<span className="span span--checkout">shipping</span>
			<div className="checkout__container checkout__container--shipping">
				{inputArr.map((input) => (
					<div className="input__container">
						<label htmlFor={input.id}>{input.name}</label>
						<input
							type={input.type}
							id={input.id}
							name={input.name}
							placeholder={input.placeholder}
							className="input input--text"
						/>
						<span>Wrong format</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Shipping;
