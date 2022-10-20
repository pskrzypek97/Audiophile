const Billing = () => {
	const inputArr = [
		{
			type: 'text',
			id: 'name',
			name: 'Name',
			placeholder: 'Alexei Ward',
		},
		{
			type: 'email',
			id: 'email',
			name: 'Email Address',
			placeholder: 'alexei@mail.com',
		},
		{
			type: 'tel',
			id: 'phone',
			name: 'Phone Number',
			placeholder: '+1 202-555-0136',
		},
	];

	return (
		<div>
			<span className="span span--checkout">billing</span>
			<div className="checkout__container checkout__container--billing">
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

export default Billing;
