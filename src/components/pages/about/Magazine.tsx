import TextMagazine from "./TextMagazine";
import MapMagazine from "./MapMagazine";
import PromoBlockMagazine from "./PromoBlockMagazine";
import ImageMagazine from "./ImageMagazine";
import { MagazineDataProps } from "../../../types/about-page";
import { stegaClean } from "next-sanity";

export default function Magazine({ magazineData }: MagazineDataProps) {
	return (
		magazineData && (
			<section className="grid lg:grid-cols-4 grid-cols-1 gap-3 grid-flow-row w-full h-full mb-6 normal-case">
				{magazineData.map((element) => {
					// Image component
					if (element._type === "imageObject" && element.imageUrl) {
						const size = stegaClean(element.size);

						return (
							<ImageMagazine
								key={element._key}
								src={element.imageUrl}
								altText={element.imageAlt || "Image"}
								size={size}
								hoverElement={element.hoverElement}
								hoverText={element.hoverText}
							/>
						);
					}

					// PromoBlock component
					else if (
						element._type === "promoBlockMagazineObject" &&
						element.imageUrl
					) {
						const size = stegaClean(element.size);

						return (
							<PromoBlockMagazine
								key={element._key}
								src={element.imageUrl}
								altText={element.imageAlt || "Promo Image"}
								size={size}
								sectionTitle={element.sectionTitle}
								text={element.text}
								title={element.title}
							/>
						);
					}

					// Text component
					else if (
						element._type === "textMagazineObject" &&
						element.text
					) {
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
					else if (
						element._type === "mapMagazineObject" &&
						element.location
					) {
						const { lng, lat } = element.location;
						const stegaCleanedMapStyle = stegaClean(
							element.mapStyle
						);

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
