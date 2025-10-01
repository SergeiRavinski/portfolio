export interface MainSectorData {
	title: string;
	name?: string;
	professionalTitle?: string;
	projects: Project[];
	frontendTech?: string[];
	backendTech?: string[];
	tools?: string[];
	hostingPlatforms?: string[];
	animationLibraries?: string[];
	design?: string[];
	methodologies?: string[];
	links?: string[];
}

export interface Project {
	_id: string;
	title: string;
	image: {
		asset: {
			_ref: string;
			_type: string;
		};
		_type: string;
	};
	date: string;
	description?: string;
	short_description?: string;
	liveDemoLink?: string;
	gitHubLink?: string;
	techStack: string[];
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
