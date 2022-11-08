import Link from 'next/link';

interface Url {
	url: string;
}

const SeeProduct = ({ url }: Url) => {
	return (
		<Link href={url} className="btn btn--see-product">
			see product
		</Link>
	);
};

export default SeeProduct;
