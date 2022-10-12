import React from 'react';

const Header = ({ category }) => {
	if (category) {
		return (
			<header className="header header--category">
				<h2 className="heading-2 heading-2--category">{category}</h2>
			</header>
		);
	} else {
		return (
			<header className="header header--home">
				<article className="header__text">
					<span className="span span--new span--index">new product</span>
					<h1 className="heading-1">xx99 mark ii headphones</h1>
					<p className="paragraph paragraph--header">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<a href="#" className="btn btn--see-product">
						see product
					</a>
				</article>
			</header>
		);
	}
};

export default Header;
