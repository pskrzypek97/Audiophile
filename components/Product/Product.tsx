import SeeProduct from '../../components/UI/SeeProduct';

interface ProductProp {
	product: {
		categoryImage: {
			mobile: string;
			tablet: string;
			desktop: string;
		};
		new: boolean;
		name: string;
		description: string;
		slug: string;
		category: string;
	};
}

const Product = ({ product }: ProductProp) => {
	return (
		<div className="product__container product__container--category">
			<picture>
				<source
					srcSet={product.categoryImage.mobile.substring(1)}
					media="(max-width: 600px)"
				/>
				<source
					srcSet={product.categoryImage.tablet.substring(1)}
					media="(max-width: 850px)"
				/>
				<img src={product.categoryImage.desktop.substring(1)} />
			</picture>
			<article className="product__detail">
				{product.new && <span className="span span--new">new product</span>}
				<h2 className="heading-2">{product.name}</h2>
				<p className="paragraph">{product.description}</p>
				<SeeProduct url={`/${product.category}/${product.slug}`} />
			</article>
		</div>
	);
};

export default Product;
