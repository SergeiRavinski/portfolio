import TextMagazine from "./TextMagazine";
import MapMagazine from "./MapMagazine";
import PromoBlockMagazine from "./PromoBlockMagazine";
import ImageMagazine from "./ImageMagazine";
import { MagazineDataProps } from "../../../types/about-page";
import { stegaClean } from "next-sanity";

export default function Magazine({ magazineData }: MagazineDataProps) {
	return (
		magazineData && (
			<section className="mb-6 grid h-full w-full grid-flow-row grid-cols-1 gap-3 normal-case lg:grid-cols-4">
				{magazineData.map((element) => {
					// Image component
					if (element._type === "imageObject" && element.imageObject) {
						const size = stegaClean(element.size);

						return (
							<ImageMagazine
								key={element._key}
								imageObject={element.imageObject}
								size={size}
								hoverElement={element.hoverElement}
								hoverText={element.hoverText}
							/>
						);
					}

					// PromoBlock component
					else if (element._type === "promoBlockMagazineObject" && element.imageObject) {
						const size = stegaClean(element.size);

						return (
							<PromoBlockMagazine
								key={element._key}
								imageObject={element.imageObject}
								size={size}
								sectionTitle={element.sectionTitle}
								text={element.text}
								title={element.title}
							/>
						);
					}

					// Text component
					else if (element._type === "textMagazineObject" && element.text) {
						const size = stegaClean(element.size);
						const theme = stegaClean(element.theme);

						return (
							<TextMagazine
								key={element._key}
								size={size}
								sectionTitle={element.sectionTitle}
								text={element.text}
								theme={theme}
							/>
						);
					}

					// Map component
					else if (element._type === "mapMagazineObject" && element.location) {
						const { lng, lat } = element.location;
						const stegaCleanedMapStyle = stegaClean(element.mapStyle);

						return (
							<MapMagazine
								key={element._key}
								lng={lng}
								lat={lat}
								map={stegaCleanedMapStyle}
							/>
						);
					}
				})}
			</section>
		)
	);
}
