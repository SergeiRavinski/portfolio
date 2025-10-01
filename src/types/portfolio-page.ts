export interface HoverElementProps {
	visible: boolean;
	technologies?: string[];
	position?: {
		x: number;
		y: number;
	};
}

export interface SkillsProps {
	skills: {
		frontendTech: string[];
		backendTech: string[];
		tools: string[];
		hostingPlatforms: string[];
		animationLibraries: string[];
		design: string[];
		methodologies: string[];
	};
}

export interface LinkProps {
	links: {
		_key: string;
		title: string;
		url: string;
	}[];
}
