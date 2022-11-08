export interface Image {
	mobile: string;
	tablet: string;
	desktop: string;
}

interface Includes {
	quantity: number;
	item: string;
}

interface Others {
	slug: string;
	name: string;
	category: string;
	image: Image;
}

export interface ProductData {
	id: number;
	slug: string;
	name: string;
	image: Image;
	category: string;
	categoryImage: Image;
	new: boolean;
	price: number;
	description: string;
	features: string;
	includes: Includes[];
	gallery: {
		first: Image;
		second: Image;
		third: Image;
	};
	others: Others[];
}
