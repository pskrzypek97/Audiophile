import React from 'react';

const Story = () => {
	return (
		<section className="story">
			<div className="story__left">
				<h2 className="heading-2">
					Bringing you the <span>best</span> audio gear
				</h2>
				<p className="paragraph">
					Located at the heart of New York City. Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available for
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy your portable audio equipment.
				</p>
			</div>

			<picture>
				{/* <source
						srcset="./assets/shared/mobile/image-best-gear.jpg"
						media="(max-width: 600px)"
					/>
					<source
						srcset="./assets/shared/tablet/image-best-gear.jpg"
						media="(max-width: 850px)"
					/> */}
				<img
					src="assets/shared/desktop/image-best-gear.jpg"
					alt="Man listening to music"
				/>
			</picture>
		</section>
	);
};

export default Story;
