import Link from 'next/link';
import { useRouter } from 'next/router';

const activeLink = (dir: string, link: string) => {
	const active = dir === link ? 'link link-active' : 'link';
	return active;
};

const Links = () => {
	const links = ['', 'headphones', 'speakers', 'earphones'];

	const router = useRouter();
	const curDir = router.asPath.split('/')[1];

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
