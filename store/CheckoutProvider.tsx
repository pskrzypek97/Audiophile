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

interface CheckoutContext {
	valid: null | boolean;
	setValid: Dispatch<SetStateAction<boolean>>;
}

const CheckoutContext = createContext<CheckoutContext>({
	valid: null,
	setValid() {},
});

export const OverlayProvider = ({ children }: Props) => {
	const [valid, setValid] = useState(null);

	return (
		<CheckoutContext.Provider value={{ valid, setValid }}>
			{children}
		</CheckoutContext.Provider>
	);
};

export default CheckoutContext;
