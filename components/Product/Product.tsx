import { useState } from 'react';

import { useRouter } from 'next/router';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart';

import { ProductData } from '../../models/product';

import SeeProduct from '../../components/UI/SeeProduct';
// import QuantityButtons from '../../components/UI/QuantityButtons';

const Product = ({ product }: { product: ProductData }) => {
	// set the product amount
	const [amount, setAmount] = useState(1);

	const handleIncrementAmount = () => {
		setAmount((prevAmount) => (prevAmount += 1));
	};

	const handleDecrementAmount = () => {
		if (amount > 1) setAmount((prevAmount) => (prevAmount -= 1));
	};

	// push product to cart
	const dispatch = useDispatch();

	const cartProduct = {
		id: product.id,
		name: product.name,
		amount,
		price: product.price * amount,
		originalPrice: product.price,
		cartImage: `/assets/cart/image-${product.slug}.jpg`,
	};

	const handleAddToCart = () => {
		dispatch(addToCart(cartProduct));
	};

	// set the correct style depending on path
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
						<div className="product__buttons">
							<div className="product__quantity">
								<button
									className="btn btn--amount"
									onClick={handleDecrementAmount}
								>
									-
								</button>
								<span>{amount}</span>
								<button
									className="btn btn--amount"
									onClick={handleIncrementAmount}
								>
									+
								</button>
							</div>
							<button
								className="btn btn--see-product"
								onClick={handleAddToCart}
							>
								add to cart
							</button>
						</div>
					</>
				)}
				{!isProductPage && (
					<SeeProduct
						url={`/${product.category}/${product.slug}`}
						text={'see product'}
					/>
				)}
			</article>
		</div>
	);
};

export default Product;
