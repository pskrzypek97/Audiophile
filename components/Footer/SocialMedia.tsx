const SocialMedia = () => {
	const socialMedia = ['facebook', 'twitter', 'instagram'];

	return (
		<div className="social-media">
			{socialMedia.map((sm) => (
				<a
					key={sm}
					className="btn btn--social-media"
					href="#"
					aria-label={`${sm} link`}
				>
					<svg>
						<use href={`/sprite.svg#icon-${sm}`} />
					</svg>
				</a>
			))}
		</div>
	);
};

export default SocialMedia;
