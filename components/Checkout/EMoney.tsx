const EMoney = () => {
	const inputArr = [
		{
			type: 'text',
			id: 'e-money number',
			name: 'e-Money Number',
			placeholder: '238521993',
		},
		{
			type: 'text',
			id: 'e-money pin',
			name: 'e-Money PIN',
			placeholder: '6891',
		},
	];

	return (
		<>
			{inputArr.map((input) => (
				<div key={input.id} className="input__container">
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
		</>
	);
};

export default EMoney;
