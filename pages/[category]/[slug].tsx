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
	return (
		<>
			<GoBackButton />
			<section className="product">
				<Product product={product} />
			</section>
			<Features features={product.features} includes={product.includes} />
			<Gallery gallery={product.gallery} />
			<YouMayLike others={product.others} />
			<Categories onHamburger={false} />
			<Story />
		</>
	);
};

export default ProductPage;
