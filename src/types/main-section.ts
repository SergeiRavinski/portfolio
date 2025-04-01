export interface Data {
	image: {
		asset: {
			_ref: string;
		};
	};
	link: string;
	_id: number;
	title: string;
	description: string;
	frontendTechnologies: string[];
	backendTechnologies: string[];
	tools: string[];
}

export interface GridStyles {
	color?: string;
	gridColumnStart?: string;
	gridColumnEnd?: string;
	size?: string;
	transform?: string;
	startPosition?: string;
	endPosition?: string;
	zIndex?: string;
}
