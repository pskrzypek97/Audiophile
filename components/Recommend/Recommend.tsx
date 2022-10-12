import SeeProduct from '../UI/SeeProduct';

const Recommend = () => {
	return (
		<section className="recommend">
			<div className="recommend__zx9">
				<img src="assets/home/desktop/image-speaker-zx9.png" alt="" />

				<article>
					<h1 className="heading-1">zx9 speaker</h1>
					<p className="paragraph paragraph--header">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<SeeProduct url={'/speakers/zx9-speaker'} />
				</article>
			</div>

			<div className="recommend__zx7">
				<h4 className="heading-4">zx7 speaker</h4>
				<SeeProduct url={'/speakers/zx7-speaker'} />
			</div>

			<picture>
				<img
					src="assets/home/desktop/image-earphones-yx1.jpg"
					alt="YX1 Earphones"
				/>
			</picture>

			<div className="recommend__yx1">
				<h4 className="heading-4">yx1 earphones</h4>
				<SeeProduct url={'/earphones/yx1-earphones'} />
			</div>
		</section>
	);
};

export default Recommend;
