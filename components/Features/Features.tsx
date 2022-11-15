import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { ProductData } from '../../models/product';

const Features = ({
	features,
	includes,
}: {
	features: ProductData['features'];
	includes: ProductData['includes'];
}) => {
	return (
		<motion.section
			className="features"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div>
				<h3 className="heading-3">features</h3>
				<p style={{ whiteSpace: 'pre-line' }} className="paragraph">
					{features}
				</p>
			</div>
			<div>
				<h3 className="heading-3">in the box</h3>
				<ul>
					{includes.map((item) => (
						<li key={item.item} className="features__gadget">
							<p className="paragraph">
								<span>{item.quantity}x</span>
								{item.item}
							</p>
						</li>
					))}
				</ul>
			</div>
		</motion.section>
	);
};

export default Features;
