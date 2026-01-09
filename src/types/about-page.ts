import { ReactNode } from "react";
import { PortableTextBlock } from "sanity";
import { SanityImageProps } from "./components/sanity/sanity-next-image";

export interface ImageMagazineProps {
	imageObject: SanityImageProps;
	size: "small" | "large";
	hoverElement?: boolean;
	hoverText?: string;
}

export interface TextMagazineProps {
	size: "small" | "large";
	sectionTitle?: string;
	text: PortableTextBlock[];
	theme: "light" | "dark";
}

export interface MapMagazineProps {
	lng: number;
	lat: number;
	map: "light" | "streetsv12";
}

export interface PromoBlockMagazineProps {
	imageObject: any;
	size: "small" | "large";
	sectionTitle?: string;
	title?: string;
	text: PortableTextBlock[];
}

export interface PromoBlockProps {
	promoBlockData: {
		title?: string;
		text: PortableTextBlock[];
		layout: "imageLeft" | "imageRight";
		background: "dark" | "light";
		button: {
			textButton?: string;
			link?: string;
		};
		imageObject?: {
			image: {
				asset: {
					_ref: string;
					_type: string;
				};
				_type: string;
			};
			lqip?: string;
		};
	};
}

export interface MagazineDataProps {
	magazineData: (
		| {
				_key: string;
				_type: "imageObject";
				imageObject: SanityImageProps;
				imageUrl: string;
				imageAlt: string;
				size: "small" | "large";
				hoverElement?: boolean;
				hoverText?: string;
		  }
		| {
				imageObject: boolean;
				_key: string;
				_type: "promoBlockMagazineObject";
				title?: string;
				sectionTitle?: string;
				image: {
					src: string;
					altText: string;
				};
				imageUrl: string;
				imageAlt: string;
				size: "small" | "large";
				text: PortableTextBlock[];
		  }
		| {
				_key: string;
				_type: "textMagazineObject";
				sectionTitle?: string;
				text: PortableTextBlock[];
				size: "small" | "large";
				theme: "light" | "dark";
		  }
		| {
				_key: string;
				_type: "mapMagazineObject";
				location: {
					lng: number;
					lat: number;
				};
				mapStyle: "light" | "streetsv12";
		  }
	)[];
}

export interface PortableTextBlockValue {
	children: ReactNode;
	value?: PortableTextBlock;
}

export interface SanityImageValue {
	_type: "image";
	asset: { _ref: string; _type: "reference" };
	alt?: string;
	caption?: string;
}

export interface YouTubeValue {
	_type: "youtube";
	url: string;
}

export interface LinkValue {
	_type: "link";
	href: string;
	blank?: boolean;
}

export interface DropdownProps {
	label: string;
	isCollapsed?: boolean;
	content: PortableTextBlock[];
}
