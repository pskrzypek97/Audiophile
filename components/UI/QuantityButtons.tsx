interface QuantityButtonsProps {
	amount: number;
	isProductPage: boolean;
	onAddToCart?: () => void;
	subtract: () => void;
	increment: () => void;
}

const QuantityButtons = ({ actions }: { actions: QuantityButtonsProps }) => {
	return (
		<div className="product__buttons">
			<div className="product__quantity">
				<button className="btn btn--amount" onClick={actions.subtract}>
					-
				</button>
				<span>{actions.amount}</span>
				<button className="btn btn--amount" onClick={actions.increment}>
					+
				</button>
			</div>
			{actions.isProductPage && (
				<button className="btn btn--see-product" onClick={actions.onAddToCart}>
					add to cart
				</button>
			)}
		</div>
	);
};

export default QuantityButtons;
