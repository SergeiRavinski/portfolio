export interface TextareaFormProps {
	id: string;
	title: string;
	errors?: string[];
	errorMessage: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleBlur?: () => void;
}

export interface InputFormProps {
	id: string;
	title: string;
	type: string;
	errors?: string[];
	errorMessage: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	handleBlur?: () => void;
}

export interface ContactPageData {
	title: string;
	titleLocation: string;
	lat: number;
	lng: number;
	mapStyle: "light" | "streetsv12";
	links: {
		_key: string;
		title: string;
		url: string;
	}[];
}
