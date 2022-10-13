const QuantityButtons = () => {
	return (
		<div className="product__buttons">
			<div className="product__quantity">
				<button className="btn btn--amount">-</button>
				<span>1</span>
				<button className="btn btn--amount">+</button>
			</div>
			<a href="#" className="btn btn--see-product">
				add to cart
			</a>
		</div>
	);
};

export default QuantityButtons;
