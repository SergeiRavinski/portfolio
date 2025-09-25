import { defineField } from "sanity";
import { HiOutlineMapPin } from "react-icons/hi2";

export const mapMagazineObject = defineField({
	name: "mapMagazineObject",
	title: "Map Magazine",
	type: "object",
	icon: HiOutlineMapPin,
	fields: [
		defineField({
			name: "location",
			title: "Location",
			type: "geopoint",
			description: "Select a location on the map",
			validation: (Rule) => Rule.required(),
		}),
	],

	preview: {
		select: {
			location: "location",
		},

		prepare({ location }) {
			return {
				title: location
					? `Lat: ${location.lat.toFixed(4)}, Lng: ${location.lng.toFixed(4)}`
					: "Geolocation not set",
				subtitle: "Map component",
				media: HiOutlineMapPin,
			};
		},
	},
});
