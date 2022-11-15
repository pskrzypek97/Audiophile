import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { ProductData } from '../../models/product';

const Gallery = ({ gallery }: { gallery: ProductData['gallery'] }) => {
	return (
		<motion.section
			className="gallery"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{Object.values(gallery).map((img) => (
				<picture key={img.desktop}>
					<motion.img
						src={img.desktop}
						className="gallery__img"
						loading="lazy"
						whileHover={{ scale: 1.05 }}
					/>
				</picture>
			))}
		</motion.section>
	);
};

export default Gallery;
