import { ProductData } from '../../models/product';

const Gallery = ({ gallery }: { gallery: ProductData['gallery'] }) => {
	return (
		<section className="gallery">
			{Object.values(gallery).map((img) => (
				<picture key={img.desktop}>
					<img src={img.desktop.substring(1)} className="gallery__img" />
				</picture>
			))}
		</section>
	);
};

export default Gallery;
