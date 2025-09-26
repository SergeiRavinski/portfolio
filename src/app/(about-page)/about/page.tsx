import Magazine from "@/components/pages/about/Magazine";
import PromoBlock from "@/components/pages/about/PromoBlock";
import SplitTextYoyo from "@/components/ui/SplitTextYoyo";

export default async function About() {
	return (
		<>
			<div className="p-6 flex flex-row justify-between items-center">
				<SplitTextYoyo text={"About"} />
			</div>

			<Magazine />
			<PromoBlock
				title="Sergei Ravinski – Frontend / Fullstack utvikler"
				text="E-post: test+test@gmail.com
				Telefon: +47 02985294
				Adresse: Oslo
				LinkedIn: linkedin.com/in/brukernavn
				GitHub: github.com/brukernavn"
				layout="imageLeft"
				background="light"
				button={{
					type: "text",
					textButton: "Ta kontakt",
					link: "/contact",
				}}
				image={{
					src: "/developer-black.svg",
					alt: "Ikone av en utvikler",
				}}
			/>
		</>
	);
}
