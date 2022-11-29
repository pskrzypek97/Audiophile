import { motion } from 'framer-motion';

import Links from '../UI/Links';

const hamburgerVariants = {
	hidden: {
		opacity: 0,
		x: '-100%',
	},
	visible: {
		opacity: 1,
		x: 0,

		transition: {
			duration: 0.2,
		},
	},
	exit: {
		opacity: 0,
		x: '-100%',

		transition: {
			duration: 0.2,
		},
	},
};

const HamburgerMenu = () => {
	return (
		<motion.div
			className="hamburger-menu"
			id="hamburger-menu"
			variants={hamburgerVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<Links isHamburger={true} />
		</motion.div>
	);
};

export default HamburgerMenu;
