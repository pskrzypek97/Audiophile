const SummaryPrice = ({ total }: { total: number }) => {
	const priceArr = [
		{
			title: 'total',
			price: total,
		},
		{
			title: 'shipping',
			price: 50,
		},
		{
			title: 'vat (included)',
			price: (total * 0.2).toLocaleString('pl', {
				useGrouping: false,
				minimumFractionDigits: 2,
			}),
		},
		{
			title: 'grand total',
			price: total + 50,
		},
	];

	return (
		<div className="summary__price">
			{priceArr.map(({ title, price }) => (
				<div key={price}>
					<p className="paragraph paragraph--summary">{title}</p>
					<h6 className="heading-6">$ {price.toLocaleString()}</h6>
				</div>
			))}
		</div>
	);
};

export default SummaryPrice;
