import SummaryPrice from './SummaryPrice';

const Summary = () => {
	return (
		<section className="summary">
			<h6 className="heading-6">summary</h6>
			<div></div>
			<SummaryPrice />

			<button form="checkout" className="btn btn--see-product">
				continue & pay
			</button>
		</section>
	);
};

export default Summary;
