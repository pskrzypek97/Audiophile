import { useState } from 'react';

import Hamburger from './Hamburger';
import Links from '../UI/Links';
import Cart from '../Modal/Cart';

const Navbar = () => {
	const [isCart, setIsCart] = useState(false);

	const handleCart = () => {
		setIsCart((prevCart) => !prevCart);
	};

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

			{isCart && <Cart />}
		</nav>
	);
};

export default Navbar;
