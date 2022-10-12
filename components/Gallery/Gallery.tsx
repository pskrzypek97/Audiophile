const Gallery = ({ gallery }) => {
	return (
		<section className="gallery">
			{Object.values(gallery).map((img) => (
				<picture>
					<img src={img.desktop.substring(1)} className="gallery__img" />
				</picture>
			))}
		</section>
	);
};

export default Gallery;
