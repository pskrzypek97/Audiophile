import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { useImage } from '../../hooks/useImage';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addToCart, setId } from '../../store/cart';

import { ProductData } from '../../models/product';
import { ChosenProduct } from '../../models/chosenProduct';

import SeeProduct from '../../components/UI/SeeProduct';
import QuantityButtons from '../../components/UI/QuantityButtons';

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

	// set correct image based on screen width
	// const image = useImage({
	// 	mobile: productImage.mobile,
	// 	tablet: productImage.tablet,
	// 	desktop: productImage.d
	// })

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
					loading="lazy"
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
