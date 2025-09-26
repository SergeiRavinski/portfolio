import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY =
	defineQuery(`*[_type == 'projects'] | order(date desc) {
	_id,
	title,
	image,
	date,
	description,
	short_description,
	link,
	frontendTechnologies,
	backendTechnologies,
	tools
  }`);
