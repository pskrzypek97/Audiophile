import { motion } from 'framer-motion';
import { modalVariants } from '../../variants/modalVariants';

import Categories from '../Categories/Categories';

const HamburgerMenu = () => {
	return (
		<motion.div
			className="hamburger-menu__menu"
			id="hamburger-menu"
			variants={modalVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Categories onHamburger={true} />
		</motion.div>
	);
};

export default HamburgerMenu;
