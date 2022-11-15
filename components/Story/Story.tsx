import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import { useImage } from '../../hooks/useImage';

const Story = () => {
	const image = useImage({
		mobile: '/assets/shared/mobile/image-best-gear.jpg',
		tablet: '/assets/shared/tablet/image-best-gear.jpg',
		desktop: '/assets/shared/desktop/image-best-gear.jpg',
	});

	return (
		<motion.section
			className="story"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div className="story__left">
				<h2 className="heading-2">
					Bringing you the <span>best</span> audio gear
				</h2>
				<p className="paragraph">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>

			<picture>
				{/* <source
					srcSet="/assets/shared/mobile/image-best-gear.jpg"
					media="(max-width: 600px)"
				/>
				<source
					srcSet="/assets/shared/tablet/image-best-gear.jpg"
					media="(max-width: 850px)"
				/> */}
				<img src={image} alt="Man listening to music" loading="lazy" />
			</picture>
		</motion.section>
	);
};

export default Story;
