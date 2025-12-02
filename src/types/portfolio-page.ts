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
		_key: string;
		_type?: string;
		title: string;
		technologies: string[] | null;
	}[];
}

export interface LinkProps {
	links: {
		_key: string;
		_type?: string;
		title: string;
		url: string;
	}[];
	isDashed?: boolean;
	isPortfolioPage?: boolean;
}

export interface ProfileHeaderProps {
	name: string;
	professionalTitle: string;
}

export interface ScatterCharProps {
	char: string;
	i: number;
	isOn: boolean;
	shuffledIndexes: number[];
	fallDistances: number[];
	charRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
	rawText: string;
	sections: unknown[];
}

export interface Path {
	href: string | URL;
	_updatedAt: string | number | Date;
}
