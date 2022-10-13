import { useRouter } from 'next/router';

import { ProductData } from '../../models/product';

import SeeProduct from '../../components/UI/SeeProduct';
import QuantityButtons from '../../components/UI/QuantityButtons';

const Product = ({ product }: { product: ProductData }) => {
	const router = useRouter();

	const isProductPage = /\/.*\//.test(router.asPath);

	const productImage = isProductPage ? product.image : product.categoryImage;

	return (
		<div
			className={`product__container ${
				isProductPage ? '' : 'product__container--category'
			}`}
		>
			<picture>
				<source
					srcSet={productImage.mobile.substring(1)}
					media="(max-width: 600px)"
				/>
				<source
					srcSet={productImage.tablet.substring(1)}
					media="(max-width: 850px)"
				/>
				<img
					src={productImage.desktop.substring(1)}
					className="product__image"
				/>
			</picture>
			<article className="product__detail">
				{product.new && <span className="span span--new">new product</span>}
				<h2 className="heading-2">{product.name}</h2>
				<p className="paragraph">{product.description}</p>
				{isProductPage && (
					<>
						<h6 className="heading-6">$ {product.price}</h6>
						<QuantityButtons />
					</>
				)}
				{!isProductPage && (
					<SeeProduct url={`/${product.category}/${product.slug}`} />
				)}
			</article>
		</div>
	);
};

export default Product;
