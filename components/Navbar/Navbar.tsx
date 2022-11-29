import { useContext } from 'react';

import { AnimatePresence } from 'framer-motion';

import ModalContext from '../../store/ModalProvider';

import HamburgerIcon from './HamburgerIcon';
import Links from '../UI/Links';
import Cart from '../Modal/Cart';
import HamburgerMenu from './HamburgerMenu';
import CartIcon from './CartIcon';

const Navbar = () => {
	const { cart, hamburgerMenu } = useContext(ModalContext);

	return (
		<nav className="navigation">
			<div className="navigation__content">
				<HamburgerIcon />
				<svg className="logo">
					<use href="/sprite.svg#logo" />
				</svg>

				<Links isHamburger={false} />

				<CartIcon />

				<AnimatePresence>{cart && <Cart />}</AnimatePresence>
				<AnimatePresence>{hamburgerMenu && <HamburgerMenu />}</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
