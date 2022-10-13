const Features = ({ features, includes }) => {
	return (
		<section className="features">
			<div>
				<h3 className="heading-3">features</h3>
				<p style={{ whiteSpace: 'pre-line' }} className="paragraph">
					{features}
				</p>
			</div>
			<div>
				<h3 className="heading-3">in the box</h3>
				<ul>
					{includes.map((item) => (
						<li key={item.item} className="features__gadget">
							<p className="paragraph">
								<span>{item.quantity}x</span>
								{item.item}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Features;
