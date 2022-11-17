import { useContext } from 'react';

import { AnimatePresence } from 'framer-motion';

import ModalContext from '../../store/ModalProvider';

import Hamburger from './Hamburger';
import Links from '../UI/Links';
import Cart from '../Modal/Cart';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
	const { cart, handleCart, hamburgerMenu } = useContext(ModalContext);

	return (
		<nav className="navigation">
			<div className="navigation__content">
				<Hamburger />
				<svg className="logo">
					<use href="/sprite.svg#logo" />
				</svg>

				<Links />

				<svg className="cart" onClick={handleCart} aria-controls="cart">
					<use href="/sprite.svg#icon-cart"></use>
				</svg>

				<AnimatePresence>{cart && <Cart />}</AnimatePresence>
				<AnimatePresence>{hamburgerMenu && <HamburgerMenu />}</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
