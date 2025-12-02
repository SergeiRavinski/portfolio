import { defineQuery } from "next-sanity";

export const PORTFOLIO_QUERY = defineQuery(`*[_type == 'portfolio'][0] {
	title,
	name,
	professionalTitle,
	projects[]->{
		_id,
		title,
		"imageObject": {
			image,
			"lqip": image.asset->metadata.lqip,
		},
		date,
		description,
		short_description,
		"liveDemoLink": links.liveDemo,
		"gitHubLink": links.github,
		techStack
	},
	skills,
	links
}`);

export const METADATA_QUERY = defineQuery(`*[_type == 'portfolio'][0] {
	metadata {
		seoTitle,
		seoDescription,
		seoKeywords,
		seoImage,
	},
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
			"imageObject": {
				image,
				"lqip": image.asset->metadata.lqip,
			},
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
			"imageObject": {
				image,
				"lqip": image.asset->metadata.lqip,
			},
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
		"imageObject": {
			image,
			"lqip": image.asset->metadata.lqip,
		},
		"imageUrl": image.asset->url,
		"imageAlt": image.attribution	  
	},
	phone,
	email,
	links,
	cv,
	location
}`);

export const SITEMAP_QUERY = defineQuery(`
  *[_type == "portfolio" && !defined(slug.current)] {
    "href": "/",
    _updatedAt
  }
`);
