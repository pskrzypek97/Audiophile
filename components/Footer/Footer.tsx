import Links from '../UI/Links';
import SocialMedia from './SocialMedia';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top">
				<svg className="logo">
					<use href="/sprite.svg#logo" />
				</svg>
				<Links />
			</div>

			<div className="footer__bottom">
				<div className="footer__text">
					<p className="paragraph paragraph--white">
						Audiophile is an all in one stop to fulfill your audio needs.
						We&apos;re a small team of music lovers and sound specialists who
						are devoted to helping you get the most out of personal audio. Come
						and visit our demo facility - we&apos;re open 7 days a week.
					</p>

					<p className="paragraph paragraph--white">
						Copyright 2022. All Rights Reserved
					</p>
				</div>
				<SocialMedia />
			</div>
		</footer>
	);
};

export default Footer;
