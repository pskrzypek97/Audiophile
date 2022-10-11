import React from 'react';

const SocialMedia = () => {
	const socialMedia = ['facebook', 'twitter', 'instagram'];

	return (
		<div className="social-media">
			{socialMedia.map((sm) => (
				<a className="btn btn--social-media" href="#">
					<svg>
						<use href={`sprite.svg#icon-${sm}`} />
					</svg>
				</a>
			))}
		</div>
	);
};

export default SocialMedia;
