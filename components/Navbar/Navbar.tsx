import { useContext } from 'react';

import ModalContext from '../../store/ModalProvider';

import Hamburger from './Hamburger';
import Links from '../UI/Links';
import Cart from '../Modal/Cart';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
	const { cart, handleCart, hamburgerMenu } = useContext(ModalContext);

	return (
		<nav className="navigation">
			<Hamburger />
			<svg className="logo">
				<use href="/sprite.svg#logo" />
			</svg>

			<Links />

			<svg className="cart" onClick={handleCart}>
				<use href="/sprite.svg#icon-cart"></use>
			</svg>

			{cart && <Cart />}
			{hamburgerMenu && <HamburgerMenu />}
		</nav>
	);
};

export default Navbar;
