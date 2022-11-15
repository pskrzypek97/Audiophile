import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { ProductData } from '../../models/product';

import SeeProduct from '../UI/SeeProduct';

const YouMayLike = ({ others }: { others: ProductData['others'] }) => {
	return (
		<motion.section
			className="you-may-like"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<h3 className="heading-3">you may also like</h3>
			<div>
				{others.map((other) => (
					<div key={other.name} className="you-may-like__product">
						<picture>
							<source srcSet={other.image.mobile} media="(max-width: 600px)" />
							<img
								src={other.image.desktop}
								alt={other.name}
								className="you-may-like__img"
								loading="lazy"
							/>
						</picture>
						<h5 className="heading-5">{other.name}</h5>
						<SeeProduct url={`/${other.category}/${other.slug}`} />
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default YouMayLike;
