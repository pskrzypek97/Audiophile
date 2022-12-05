import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { useProduct } from '../../hooks/useProduct';

import { ProductData } from '../../models/product';

import SeeProduct from '../../components/UI/SeeProduct';
import QuantityButtons from '../../components/UI/QuantityButtons';

const Product = ({ product }: { product: ProductData }) => {
	const {
		amount,
		handleDecrementAmount,
		handleIncrementAmount,
		handleAddToCart,
		productImage,
		isProductPage,
	} = useProduct(product);

	return (
		<motion.div
			className={`product__container ${
				isProductPage ? '' : 'product__container--category'
			}`}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<picture>
				<source srcSet={productImage.mobile} media="(max-width: 600px)" />
				<source srcSet={productImage.tablet} media="(max-width: 850px)" />
				<img
					src={productImage.desktop}
					className="product__image"
					alt={product.name}
				/>
			</picture>
			<article className="product__detail">
				{product.new && <span className="span span--new">new product</span>}
				<h2 className="heading-2">{product.name}</h2>
				<p className="paragraph">{product.description}</p>
				{isProductPage && (
					<>
						<h6 className="heading-6">$ {product.price}</h6>
						<QuantityButtons
							actions={{
								isProductPage: true,
								increment: handleIncrementAmount,
								subtract: handleDecrementAmount,
								amount,
								onAddToCart: handleAddToCart,
							}}
						/>
					</>
				)}
				{!isProductPage && (
					<SeeProduct url={`/${product.category}/${product.slug}`} />
				)}
			</article>
		</motion.div>
	);
};

export default Product;
