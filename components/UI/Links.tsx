import React from 'react';

import Link from 'next/link';

const Links = () => {
	const links = ['home', 'headphones', 'speakers', 'earphones'];

	return (
		<ul className="links">
			{links.map((link) => (
				<Link key={link} href={link === 'home' ? `/` : `/${link}`}>
					<a className="link">{link}</a>
				</Link>
			))}
		</ul>
	);
};

export default Links;
