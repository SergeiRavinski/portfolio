import { defineQuery } from "next-sanity";

export const PORTFOLIO_QUERY = defineQuery(`*[_type == 'portfolio'][0] {
	title,
	name,
	professionalTitle,
	projects[]->{
		_id,
		title,
		image,
		date,
		description,
		short_description,
		"liveDemoLink": links.liveDemo,
		"gitHubLink": links.github,
		techStack
	},
	"frontendTech": skills.frontendTech,
	"backendTech": skills.backendTech,
	"tools": skills.tools,
	"hostingPlatforms": skills.hostingPlatforms,
	"animationLibraries": skills.animationLibraries,
	"design": skills.design,
	"methodologies": skills.methodologies,
	links
}`);

export const CONTACT_QUERY = defineQuery(`*[_type == 'contact'][0] {
	_id,
	title,
	titleLocation,
	"lat": location.lat,
	"lng": location.lng,
	mapStyle,
	links	
}`);

export const ABOUT_QUERY = defineQuery(`*[_type == 'about'][0] {
	_id,
	title,
	name,
	magazineComponents[]{
		// Image object
		_type == "imageObject" => {
			_key,
			_type,
			image,
			"imageUrl": image.asset->url,
			"imageAlt": image.attribution,
			size,
			hoverElement,
			hoverText
		},
  
		// Promoblock object
		_type == "promoBlockMagazineObject" => {
			_key,
			_type,
			title,
			sectionTitle,
			image,
			"imageUrl": image.asset->url,
			"imageAlt": image.attribution,
			size,
			text
		},
  
		// Text object
		_type == "textMagazineObject" => {
			_key,
			_type,
			sectionTitle,
			text,
			size,
			theme
		},
  
		// Map object
		_type == "mapMagazineObject" => {
			_key,
			_type,
			mapStyle,
			location
		},
	},
	promoBlock{
		title,
		text,
		layout,
		background,
		button{	
			textButton,
			link
		},
		image,
		"imageUrl": image.asset->url,
		"imageAlt": image.attribution	  
	},
	phone,
	email,
	links,
	cv,
	location
}`);
