import Link from 'next/link';

interface Url {
	url: string;
}

const SeeProduct = ({ url }: Url) => {
	return (
		<Link href={url}>
			<a className="btn btn--see-product">see product</a>
		</Link>
	);
};

export default SeeProduct;
