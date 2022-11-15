import Link from 'next/link';

import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

const Categories = ({ onHamburger }: { onHamburger: boolean }) => {
	const categories = ['headphones', 'speakers', 'earphones'];

	return (
		<motion.section
			className={`categories ${
				onHamburger ? 'categories--hamburger-menu' : ''
			}`}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{categories.map((category) => (
				<Link key={category} href={`/${category}`} legacyBehavior>
					<a className="btn btn--shop" href="#">
						<h6 className="heading-6">{category}</h6>
						<div className="categories__shop">
							<span>shop</span>
							<svg className="arrow-right">
								<use href="/sprite.svg#icon-arrow-right"></use>
							</svg>
						</div>
					</a>
				</Link>
			))}
		</motion.section>
	);
};

export default Categories;
