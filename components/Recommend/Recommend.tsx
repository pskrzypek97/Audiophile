import { motion } from 'framer-motion';
import { sectionVariants } from '../../variants/sectionVariants';

import SeeProduct from '../UI/SeeProduct';

const Recommend = () => {
	return (
		<motion.section
			className="recommend"
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			<div className="recommend__zx9">
				<img
					src="assets/home/desktop/image-speaker-zx9.png"
					alt="ZX9 Speaker"
				/>

				<article>
					<h1 className="heading-1">zx9 speaker</h1>
					<p className="paragraph paragraph--header">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<SeeProduct url={'/speakers/zx9-speaker'} />
				</article>
			</div>

			<div className="recommend__zx7">
				<h4 className="heading-4">zx7 speaker</h4>
				<SeeProduct url={'/speakers/zx7-speaker'} />
			</div>

			<picture>
				<img
					src="assets/home/desktop/image-earphones-yx1.jpg"
					alt="YX1 Earphones"
					loading="lazy"
				/>
			</picture>

			<div className="recommend__yx1">
				<h4 className="heading-4">yx1 earphones</h4>
				<SeeProduct url={'/earphones/yx1-earphones'} />
			</div>
		</motion.section>
	);
};

export default Recommend;
