import { useContext } from 'react';

import ModalContext from '../../store/ModalProvider';

const HamburgerIcon = () => {
	const { handleHamburgerMenu } = useContext(ModalContext);

	return (
		<>
			<svg
				className="hamburger-icon"
				onClick={handleHamburgerMenu}
				aria-controls="hamburger-menu"
			>
				<use href="/sprite.svg#icon-hamburger"></use>
			</svg>
		</>
	);
};

export default HamburgerIcon;
