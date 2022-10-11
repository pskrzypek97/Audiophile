import Hamburger from './Hamburger';
import Links from '../UI/Links';

const Navbar = () => {
	return (
		<nav className="navigation">
			<Hamburger />
			<svg className="logo">
				<use href="sprite.svg#logo" />
			</svg>

			<Links />

			<svg className="cart">
				<use href="sprite.svg#icon-cart"></use>
			</svg>
		</nav>
	);
};

export default Navbar;
