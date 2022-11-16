import { useMemo } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';

import { data } from '../../data/shopData';
import { ProductData } from '../../models/product';

import Categories from '../../components/Categories/Categories';
import Story from '../../components/Story/Story';
import Product from '../../components/Product/Product';
import YouMayLike from '../../components/YouMayLike/YouMayLike';
import Gallery from '../../components/Gallery/Gallery';
import Features from '../../components/Features/Features';
import GoBackButton from '../../components/UI/GoBackButton';
import HeadComp from '../../components/Head/HeadComp';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = data.map((product) => {
		return {
			params: {
				category: product.category,
				slug: product.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context.params?.slug;

	const findProduct = data.find((prod) => {
		return prod.slug === slug;
	});

	return {
		props: { product: findProduct },
	};
};

const ProductPage = ({ product }: { product: ProductData }) => {
	const goBackButton = useMemo(() => <GoBackButton />, []);

	const categoriesAndStory = useMemo(
		() => (
			<>
				<Categories onHamburger={false} />
				<Story />
			</>
		),
		[]
	);

	return (
		<>
			<HeadComp subtitle={product.name} />
			{goBackButton}
			<section className="product">
				<Product product={product} />
			</section>
			<Features features={product.features} includes={product.includes} />
			<Gallery gallery={product.gallery} />
			<YouMayLike others={product.others} />
			{categoriesAndStory}
		</>
	);
};

export default ProductPage;
