import style from '../../styles/loader.module.scss';

const Loader = () => {
	return (
		<section className={style.main}>
			<div className={style.loader}>
				<div className={style.one}></div>
				<div className={style.two}></div>
				<div className={style.three}></div>
			</div>
		</section>
	);
};

export default Loader;
