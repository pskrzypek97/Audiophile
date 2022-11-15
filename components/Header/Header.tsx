import { motion } from 'framer-motion';

import { ProductData } from '../../models/product';

import SeeProduct from '../UI/SeeProduct';

const Header = ({
	category,
}: {
	category: ProductData['category'] | false;
}) => {
	const articleVariants = {
		hidden: {
			x: '-100%',
		},
		visible: {
			x: 0,
			transition: {
				duration: 0.8,
				type: 'spring',
			},
		},
	};

	if (category) {
		return (
			<header className="header header--category">
				<h2 className="heading-2 heading-2--category">{category}</h2>
			</header>
		);
	} else {
		return (
			<header className="header header--home">
				<motion.article
					className="header__text"
					variants={articleVariants}
					initial="hidden"
					animate="visible"
				>
					<span className="span span--new span--index">new product</span>
					<h1 className="heading-1">xx99 mark ii headphones</h1>
					<p className="paragraph paragraph--header">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<SeeProduct url={'/headphones/xx99-mark-two-headphones'} />
				</motion.article>
			</header>
		);
	}
};

export default Header;
