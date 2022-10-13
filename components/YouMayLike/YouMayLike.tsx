import SeeProduct from '../UI/SeeProduct';

const YouMayLike = ({ others }) => {
	return (
		<section className="you-may-like">
			<h3 className="heading-3">you may also like</h3>
			<div>
				{others.map((other) => (
					<div key={other.name} className="you-may-like__product">
						<picture>
							<source
								srcSet={other.image.mobile.substring(1)}
								media="(max-width: 600px)"
							/>
							<img
								src={other.image.desktop.substring(1)}
								alt=""
								className="you-may-like__img"
							/>
						</picture>
						<h5 className="heading-5">{other.name}</h5>
						<SeeProduct url={`/${other.category}/${other.slug}`} />
					</div>
				))}
			</div>
		</section>
	);
};

export default YouMayLike;
