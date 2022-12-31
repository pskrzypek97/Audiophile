import Link from 'next/link';

import HeadComp from '../components/Head/HeadComp';

import style from '../styles/page404.module.scss';

const Page404 = () => {
	return (
		<>
			<HeadComp title={'Page not found'} />

			<section className={style.main}>
				<h1 className="heading-1">404</h1>
				<h2 className="heading-2">page not found</h2>
				<Link href="/" className="btn btn--see-product">
					Go Home
				</Link>
			</section>
		</>
	);
};

export default Page404;
