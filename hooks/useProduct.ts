import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addToCart, setId } from '../store/cart';

import { ChosenProduct } from '../models/chosenProduct';
import { ProductData } from '../models/product';

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

export const useProduct = (product: ProductData) => {
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

	return {
		amount,
		handleDecrementAmount,
		handleIncrementAmount,
		handleAddToCart,
		productImage,
		isProductPage,
	};
};
