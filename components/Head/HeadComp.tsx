import Head from 'next/head';

const capitalizeFirstLetter = (string: string) => {
	const newStr = string.charAt(0).toUpperCase() + string.slice(1);
	return newStr;
};

const HeadComp = ({ subtitle }: { subtitle: string }) => {
	// modify title in separate variable so it doesn't show error:
	// A title element received an array with more than 1 element as children
	const capitalizedTitle = `${capitalizeFirstLetter(subtitle)} | Audiophile
	e-commerce website`;

	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<meta name="keywords" content="Headphones, Speakers, Earphones, Shop" />

			<meta
				name="description"
				content="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
			/>

			<meta name="author" content="pskrzypek97" />

			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>

			<title>{capitalizedTitle}</title>
		</Head>
	);
};

export default HeadComp;
