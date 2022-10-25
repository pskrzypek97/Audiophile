const SummaryProduct = ({ product }) => {
	return (
		<div className="summary__product">
			<picture>
				<img src={product.cartImage} className="summary__img" />
			</picture>
			<div>
				<p className="paragraph paragraph--product">{product.name}</p>
				<span className="span span--summary">$ {product.originalPrice}</span>
			</div>
			<p className="paragraph">x{product.amount}</p>
		</div>
	);
};

export default SummaryProduct;
