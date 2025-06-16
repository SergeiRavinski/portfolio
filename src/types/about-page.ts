export interface ImageMagazineProps {
	src: string;
	altText: string;
	size: "small" | "large";
	hoverElement?: boolean;
	hoverText?: string;
}

export interface TextMagazineProps {
	text: string;
	size: "small" | "large";
}

export interface MapMagazineProps {
	lng: number;
	lat: number;
}

export interface PromoBlockMagazineProps {
	src: string;
	altText?: string;
	size: "small" | "large";
	title: string;
	text: string;
}

export interface PromoBlockProps {
	title: string;
	text: string;
	layout: "imageLeft" | "imageRight";
	background: "dark" | "light";
	button: {
		type: "text" | "primary" | "secondary";
		textButton?: string;
	};
	image: {
		src: string;
		alt: string;
	};
}
