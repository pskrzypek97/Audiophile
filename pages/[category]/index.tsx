import { useState, useEffect, useMemo } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import { data } from '../../data/shopData';
import { ProductData } from '../../models/product';

import Product from '../../components/Product/Product';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Story from '../../components/Story/Story';
import HeadComp from '../../components/Head/HeadComp';

export const getStaticPaths: GetStaticPaths = async () => {
	const categoryArr = data.map((product) => {
		return product.category;
	});

	const categorySet = [...new Set(categoryArr)];

	const paths = Array.from(categorySet).map((category) => {
		return {
			params: { category },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const category = context.params?.category;

	const filteredProducts = data.filter((prod) => {
		return prod.category === category;
	});

	return {
		props: { products: filteredProducts },
	};
};

const CategoryPage = ({ products }: { products: ProductData[] }) => {
	const [productsArr, setProductsArr] = useState(products);

	// sort array inside useEffect so it doesn't cause hydration bug
	useEffect(() => {
		const sortedProducts = [...products].sort((a, b) => b.id - a.id);
		setProductsArr(sortedProducts);
	}, [products]);

	// memonized Categories and Story so they don't re-render while
	// new productsArr is updated
	const categoriesAndStory = useMemo(
		() => (
			<>
				<Categories />
				<Story />
			</>
		),
		[]
	);

	return (
		<>
			<HeadComp subtitle={productsArr[0]?.category} />
			<Header category={productsArr[0]?.category} />
			<section className="product">
				{productsArr.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</section>
			{categoriesAndStory}
		</>
	);
};

export default CategoryPage;
