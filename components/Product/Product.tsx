import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, setId } from '../../store/cart';

import { ProductData } from '../../models/product';
import { ChosenProduct } from '../../models/chosenProduct';

import SeeProduct from '../../components/UI/SeeProduct';
// import QuantityButtons from '../../components/UI/QuantityButtons';

import { v4 as uuidv4 } from 'uuid';

const removeCategory = (productName: ChosenProduct['name']) => {
	const categories = ['Headphones', 'Speaker', 'Earphones'];

	const category = categories.find((cat) => {
		if (productName.includes(cat)) {
			return cat;
		}
	}) as string;

	const shortName = productName.replace(category, '');

	return shortName;
};

const Product = ({ product }: { product: ProductData }) => {
	// set the product amount
	const [amount, setAmount] = useState(1);

	const handleIncrementAmount = () => {
		setAmount((prevAmount) => (prevAmount += 1));
	};

	const handleDecrementAmount = () => {
		if (amount > 1) setAmount((prevAmount) => (prevAmount -= 1));
	};

	// set cart id
	const { id } = useAppSelector((state) => state.cart);

	// push product to cart
	const dispatch = useAppDispatch();

	const cartProduct: ChosenProduct = {
		id: product.id,
		name: removeCategory(product.name),
		amount,
		price: product.price * amount,
		originalPrice: product.price,
		cartImage: `/assets/cart/image-${product.slug}.jpg`,
	};

	const handleAddToCart = () => {
		dispatch(addToCart(cartProduct));
		if (!id) dispatch(setId(uuidv4())); // if no id, set ID
	};

	// set the correct style depending on path
	const router = useRouter();
	const isProductPage = /\/.*\//.test(router.asPath);
	const productImage = isProductPage ? product.image : product.categoryImage;

	// reset amount when changing to next page
	useEffect(() => {
		const handleRouteChange = () => {
			setAmount(1);
		};

		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [router]);

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
					<SeeProduct url={`/${product.category}/${product.slug}`} />
				)}
			</article>
		</div>
	);
};

export default Product;
