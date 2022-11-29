import { createContext, useState, useEffect, useMemo, ReactNode } from 'react';

import { useRouter } from 'next/router';

interface Props {
	children?: ReactNode;
}

interface ModalContextInterface {
	overlay: boolean;
	cart: boolean;
	hamburgerMenu: boolean;
	successModal: boolean;
	handleOverlay: () => void;
	handleCart: () => void;
	handleSuccessModal: () => void;
	handleSuccessModalOff: () => void;
	handleHamburgerMenu: () => void;
}

const ModalContext = createContext<ModalContextInterface>({
	overlay: false,
	cart: false,
	hamburgerMenu: false,
	successModal: false,
	handleOverlay() {},
	handleCart() {},
	handleSuccessModal() {},
	handleSuccessModalOff() {},
	handleHamburgerMenu() {},
});

export const ModalProvider = ({ children }: Props) => {
	const [overlay, setOverlay] = useState(false);
	const [cart, setCart] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [hamburgerMenu, setHamburgerMenu] = useState(false);

	const router = useRouter();

	// turn off modals when route changes
	useEffect(() => {
		setCart(false);
		setOverlay(false);
		setHamburgerMenu(false);
	}, [router.asPath]);

	// turn off hamburgerMenu when screen width is less than 851px
	useEffect(() => {
		const handleHamburgerMenuOff = () => {
			if (screen.width > 850 && hamburgerMenu) {
				setHamburgerMenu(false);
			}
		};

		window.addEventListener('resize', handleHamburgerMenuOff);

		return window.removeEventListener('resize', handleHamburgerMenuOff);
	}, []);

	const handleOverlay = () => {
		if (successModal) return;
		setOverlay((preOverlay) => !preOverlay);
		setCart(false);
		setHamburgerMenu(false);
	};

	const handleCart = () => {
		if (router.asPath.includes('checkout')) setCart(false);
		else {
			setCart((prevCart) => !prevCart);
			setOverlay((prevOverlay) => !prevOverlay);
			setHamburgerMenu(false);

			if (hamburgerMenu) {
				setHamburgerMenu(false);
				setOverlay(true);
			}
		}
	};

	const handleSuccessModal = () => {
		setSuccessModal(true);
		setOverlay(true);
	};

	const handleSuccessModalOff = () => {
		setSuccessModal(false);
		setOverlay(false);
	};

	const handleHamburgerMenu = () => {
		if (successModal) setHamburgerMenu(false);
		else {
			setHamburgerMenu((prevMenu) => !prevMenu);
			setOverlay((prevOverlay) => !prevOverlay);
			if (cart) {
				setCart(false);
				setOverlay(true);
			}
		}
	};

	const memoizedValues = useMemo(
		() => ({
			overlay,
			cart,
			hamburgerMenu,
			successModal,
			handleOverlay,
			handleCart,
			handleSuccessModal,
			handleSuccessModalOff,
			handleHamburgerMenu,
		}),
		[
			overlay,
			cart,
			hamburgerMenu,
			successModal,
			handleOverlay,
			handleCart,
			handleSuccessModal,
			handleSuccessModalOff,
			handleHamburgerMenu,
		]
	);

	return (
		<ModalContext.Provider value={memoizedValues}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContext;
