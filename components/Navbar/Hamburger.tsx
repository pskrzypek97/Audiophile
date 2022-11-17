import { useContext } from 'react';

import ModalContext from '../../store/ModalProvider';

const Hamburger = () => {
	const { handleHamburgerMenu } = useContext(ModalContext);

	return (
		<>
			<svg
				className="hamburger-menu"
				onClick={handleHamburgerMenu}
				aria-controls="hamburger-menu"
			>
				<use href="/sprite.svg#icon-hamburger"></use>
			</svg>
		</>
	);
};

export default Hamburger;
