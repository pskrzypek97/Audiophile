const Product = ({ product }) => {
	return (
		<div className="product__container product__container--category">
			<picture>
				<img src={product.categoryImage.desktop.substring(1)} />
			</picture>
			<article className="product__detail">
				{product.new && <span className="span span--new">new product</span>}
				<h2 className="heading-2">{product.name}</h2>
				<p className="paragraph">{product.description}</p>
				<a href="#" className="btn btn--see-product">
					see product
				</a>
			</article>
		</div>
	);
};

export default Product;
