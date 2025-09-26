import HamburgerMenu from "../../ui/HamburgerMenu";
// import SplitTextYoyo from "./SplitTextYoyo";
import ThemeToggle from "@/theme/theme-toggle";
import HoriontalScrollWave from "../../ui/HorizontalScrollWave";
import ScatterText from "../../ui/ScatterText";
import SocialMedia from "../../ui/SocialMedia";

export default function Aside() {
	return (
		<aside className="container w-1/3 sticky top-4 m-4 flex flex-col">
			<div className="flex flex-col">
				<section className="flex flex-row p-6 items-center text-xl tracking-tight gap-6">
					<HamburgerMenu />
					<ThemeToggle />
				</section>

				<div className="flex flex-col justify-between text-[0.7rem] uppercase ml-6 mt-8">
					<h1 className="font-semibold text-xl">Sergei Ravinski</h1>
					<h2 className="text-[0.8rem]">
						Frontend / Fullstack Utvikler | Next.js | Sanity
					</h2>
				</div>

				<HoriontalScrollWave />
			</div>

			{/* <SplitTextYoyo
				text={
					"FERDIGHETER <br> Frontend: HTML & CSS, JavaScript, TypeScript, Next.js, React.js, Vue.js, Tailwind, MUI, Zustand, Responsivt webdesign, Styled Components, Universell utforming (UU). <br> Backend: Sanity (Headless CMS), Node.js, Express.js, JSON, MongoDB, REST API, Firebase, GROQ, SEO <br/> Verktøy: Git, GitHub, VS Code, Postman, Chrome DevTools, Trello <br/> Hosting og distribusjon: Netlify, Vercel. <br/> Animasjon: JavaScript (GSAP), Motion, CSS <br/> Design: Figma, Adobe XD, UI/UX <br/> Arbeidsmetodikk: Scrum, Kanban"
				}
				aside={true}
			/> */}

			<ScatterText />
			<SocialMedia />
		</aside>
	);
}
