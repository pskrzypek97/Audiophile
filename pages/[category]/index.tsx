import { GetStaticProps, GetStaticPaths } from 'next';

import { data } from '../../data/data';

import Product from '../../components/Product/Product';
import Categories from '../../components/Categories/Categories';
import Header from '../../components/Header/Header';
import Story from '../../components/Story/Story';

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

const CategoryPage = ({ products }) => {
	return (
		<>
			<Header category={products[0].category} />
			<section className="product">
				{products.map((product) => (
					<Product product={product} />
				))}
			</section>
			<Categories />
			<Story />
		</>
	);
};

export default CategoryPage;
