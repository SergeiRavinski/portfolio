export interface ImageMagazineProps {
	src: string;
	altText: string;
	size: "small" | "large";
	hoverElement?: boolean;
	hoverText?: string;
}

export interface TextMagazineProps {
	size: "small" | "large";
	sectionTitle?: string;
	text: string;
}

export interface MapMagazineProps {
	lng: number;
	lat: number;
}

export interface PromoBlockMagazineProps {
	src: string;
	altText?: string;
	size: "small" | "large";
	sectionTitle?: string;
	title?: string;
	text?: string;
}

export interface PromoBlockProps {
	title: string;
	text: string;
	layout: "imageLeft" | "imageRight";
	background: "dark" | "light";
	button: {
		type: "text" | "primary" | "secondary";
		textButton?: string;
		link?: string;
	};
	image: {
		src: string;
		alt: string;
	};
}
