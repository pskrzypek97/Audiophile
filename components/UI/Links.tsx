import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const activeLink = (dir: string | undefined, link: string) => {
	const active = dir === link ? 'link link-active' : 'link';
	return active;
};

const Links = () => {
	const [curDir, setCurDir] = useState<string | undefined>();

	const links = ['', 'headphones', 'speakers', 'earphones'];
	const router = useRouter();

	useEffect(() => {
		setCurDir(router.asPath.split('/')[1]);
	}, [router.asPath]);

	return (
		<ul className="links">
			{links.map((link) => (
				<Link key={link} href={`/${link}`}>
					<a className={activeLink(curDir, link)}>
						{link === '' ? 'home' : link}
					</a>
				</Link>
			))}
		</ul>
	);
};

export default Links;
