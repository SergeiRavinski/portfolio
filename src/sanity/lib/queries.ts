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
