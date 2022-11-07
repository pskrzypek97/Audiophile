import Categories from '../Categories/Categories';

const HamburgerMenu = () => {
	return (
		<div className="hamburger-menu__menu">
			<Categories onHamburger={true} />
		</div>
	);
};

export default HamburgerMenu;
