import {
	createContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface Props {
	children?: ReactNode;
}

interface OverlayContext {
	overlay: boolean;
	modal: boolean;
	setOverlay: Dispatch<SetStateAction<boolean>>;
	setModal: Dispatch<SetStateAction<boolean>>;
}

const OverlayContext = createContext<OverlayContext>({
	overlay: false,
	modal: false,
	setOverlay() {},
	setModal() {},
});

export const OverlayProvider = ({ children }: Props) => {
	const [overlay, setOverlay] = useState(false);
	const [modal, setModal] = useState(false);

	return (
		<OverlayContext.Provider value={{ overlay, setOverlay, modal, setModal }}>
			{children}
		</OverlayContext.Provider>
	);
};

export default OverlayContext;
