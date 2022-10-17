const QuantityButtons = () => {
	return (
		<div className="product__buttons">
			<div className="product__quantity">
				<button className="btn btn--amount">-</button>
				<span>1</span>
				<button className="btn btn--amount">+</button>
			</div>
			<button className="btn btn--see-product">add to cart</button>
		</div>
	);
};

export default QuantityButtons;
