import ImageMagazine from "./ImageMagazine";
import TextMagazine from "./TextMagazine";
import MapMagazine from "./MapMagazine";
import PromoBlockMagazine from "./PromoBlockMagazine";

export default function Magazine() {
	return (
		<section className="grid grid-cols-4 gap-3 grid-flow-row mb-6">
			<PromoBlockMagazine
				src={"/audi.png"}
				altText="Default icon"
				size={"large"}
				title="Høyskolen Kristiania"
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"large"}
				hoverElement={true}
				hoverText="hover text !!!!"
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Text elements */}
			<TextMagazine
				text={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit."
				}
				size={"small"}
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/audi.png"}
				altText="Default icon"
				size={"large"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			<TextMagazine
				text={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit"
				}
				size={"large"}
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Map element */}
			<MapMagazine lng={10.81278} lat={59.89595} />

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>

			{/* Image elements */}
			<ImageMagazine
				src={"/kristiania.png"}
				altText="Default icon"
				size={"small"}
				hoverElement={false}
				hoverText="hover text !!!!"
			/>
		</section>
	);
}
