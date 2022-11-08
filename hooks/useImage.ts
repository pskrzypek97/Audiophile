import { useState, useEffect } from 'react';

import { Image } from '../models/product';

export const useImage = (images: Image) => {
	const [curImage, setCurImage] = useState('');

	useEffect(() => {
		const handleScreenWidth = () => {
			if (window.innerWidth > 850) setCurImage(images.desktop);
			else if (window.innerWidth <= 850 && window.innerWidth > 600)
				setCurImage(images.tablet);
			else if (window.innerWidth <= 600) setCurImage(images.mobile);
		};
		if (window.innerWidth > 850) setCurImage(images.desktop);
		else if (window.innerWidth <= 850 && window.innerWidth > 600)
			setCurImage(images.tablet);
		else if (window.innerWidth <= 600) setCurImage(images.mobile);

		window.addEventListener('resize', handleScreenWidth);

		return () => window.removeEventListener('resize', handleScreenWidth);
	}, []);

	return curImage;
};
