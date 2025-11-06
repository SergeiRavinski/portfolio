export interface ImageProps {
	value: any;
	className?: string;
	lqip?: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

export interface imagePreviewObject {
	placeholder?: "blur" | "empty";
	blurDataURL?: string;
}

export interface SanityImageProps {
	lqip: any;
	image: any;
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
}
