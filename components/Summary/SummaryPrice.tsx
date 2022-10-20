const SummaryPrice = () => {
	const priceArr = [
		{
			title: 'total',
			price: 5396,
		},
		{
			title: 'shipping',
			price: 50,
		},
		{
			title: 'vat (included)',
			price: 1079,
		},
		{
			title: 'grand total',
			price: 5446,
		},
	];

	return (
		<div className="summary__price">
			{priceArr.map(({ title, price }) => (
				<div>
					<p className="paragraph paragraph--summary">{title}</p>
					<h6 className="heading-6">$ {price.toLocaleString()}</h6>
				</div>
			))}
		</div>
	);
};

export default SummaryPrice;
