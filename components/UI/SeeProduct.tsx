import Link from 'next/link';

const SeeProduct = ({ url }) => {
	return (
		<Link href={url}>
			<a className="btn btn--see-product">see product</a>
		</Link>
	);
};

export default SeeProduct;
