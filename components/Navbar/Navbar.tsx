import { useContext } from 'react';

import OverlayContext from '../../store/ModalProvider';

import Hamburger from './Hamburger';
import Links from '../UI/Links';
import Cart from '../Modal/Cart';

const Navbar = () => {
	const { setOverlay, modal, setModal } = useContext(OverlayContext);

	const handleCart = () => {
		setModal((prevModal) => !prevModal);
		setOverlay((prevOverlay) => !prevOverlay);
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

			{modal && <Cart />}
		</nav>
	);
};

export default Navbar;
