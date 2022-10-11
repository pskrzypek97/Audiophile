import React from 'react';

const Categories = () => {
	const categories = ['headphones', 'speakers', 'earphones'];

	return (
		<section className="categories">
			{categories.map((category) => (
				<a className="btn btn--shop" href="#">
					<h6 className="heading-6">{category}</h6>
					<div className="categories__shop">
						<span>shop</span>
						<svg className="arrow-right">
							<use href="sprite.svg#icon-arrow-right"></use>
						</svg>
					</div>
				</a>
			))}
		</section>
	);
};

export default Categories;
