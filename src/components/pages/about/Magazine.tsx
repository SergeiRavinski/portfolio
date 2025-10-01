import TextMagazine from "./TextMagazine";
import MapMagazine from "./MapMagazine";
import PromoBlockMagazine from "./PromoBlockMagazine";
import ImageMagazine from "./ImageMagazine";

export default function Magazine() {
	return (
		<section className="grid grid-cols-4 gap-3 grid-flow-row mb-6 normal-case">
			{/* Image elements */}
			<ImageMagazine
				src={"/sergei-ravinski.jpg"}
				altText="Image"
				size="small"
				hoverText="hover text !!!!"
			/>
			{/* Samendrag */}
			<TextMagazine
				size="small"
				sectionTitle="Sammendrag"
				text="Motivert og engasjert utvikler med erfaring innen moderne teknologier som TypeScript, React.js, Next.js, Node.js, Sanity og Tailwind. Jeg trives med å jobbe strukturert, har øye for detaljer og brenner for å lage brukervennlige og logiske løsninger.
				Har jobbet med utvikling av applikasjoner og nettsider for både offentlige etater og private virksomheter.
				Liker å bidra i tverrfaglige team og samarbeide tett med andre fagdisipliner.
				Søker stadig nye utfordringer for å styrke mine ferdigheter og bidra til innovative prosjekter.
				"
			/>

			{/* Erfaring */}
			<TextMagazine
				size="large"
				sectionTitle="Erfaring"
				text="Februar 2025 – d.d. Frilans, Oslo (Fullstack-utvikler) 
				Jeg har utviklet en fullstack nettbutikk med komplett checkout- og betalingssystem ved hjelp av Stripe. Prosjektet inkluderer brukerautentisering, produktadministrasjon, ordreoppfølging og sikre transaksjoner. I tillegg har jeg jobbet parallelt med min porteføljeside.

				•	Porteføljenettside
				Personlig portefølje utviklet for å presentere prosjekter og erfaring innen moderne webteknologier. Løsningen er bygget i Next.js med Sanity som headless CMS, Tailwind og interaktive animasjoner med Framer Motion og GSAP.

				Teknologier: HTML&CSS, TypeScript, Next.js, Tailwind, Zustand, Sanity, GROQ, Sanity Visual Editing, GSAP, Mapbox, Framer Motion, Universell utforming, Git, SEO, Vercel, Figma

				•	Node.js Kursprosjekt (Udemy)
				Praktisk prosjekt fra et omfattende Node.js-kurs, der jeg utviklet server-side applikasjoner med SQL- og NoSQL-databaser, samt REST- og GraphQL-APIer. Prosjektet inkluderte dynamiske nettsider, bruk av Express.js med MVC-struktur, autentisering, filhåndtering og integrasjon av betalingsløsning med Stripe.

				Teknologier: HTML&CSS, Node.js, Express.js, SQL, MySQL, MongoDB, EGS, MVC, Git, UX/UI

				September 2023 – Februar 2025 Per Høj AS, Oslo (Utvikler)
Som utvikler har jeg levert innovative løsninger og utviklet applikasjoner og nettsider ved å bruke moderne teknologier som TypeScript, React.js, Next.js, Node.js, Sanity, GROQ, Tailwind, MUI, GSAP og SEO. 
Her er noen av prosjektene jeg har jobbet med: 
•	Norsk Tipping
Oppgraderte og moderniserte et fire år gammelt prosjekt ved bruk av de nyeste versjonene av React.js og MUI. Samt utviklet jeg nye komponenter som brukes av Norsk Tippings partnere.

Teknologier: HTML&CSS, TypeScript, React.js, MUI, Styled Components, Dependency time machine

•	Espira.no (https://espira.no)
Nettsted for privat barnehageselskap med over 100 barnehager over hele landet. Oppgaven her var å flytte sidene fra WordPress til Sanity, med en ny frontend utviklet i Next.js.

Teknologier: HTML&CSS, Next.js, TypeScript, Node.js, Universell utforming, Sanity (med bruk av innholdsbaserte custom komponenter), GROQ, Tailwind, Sanity Visual Editing, Git, JSON, SEO, Vercel, Adobe XD

•	Melk.no (https://melk.no)
Nettsted som fremmer kunnskap om melk og meieriprodukter i et sunt kosthold. Utviklet nettsider med fokus på SEO og responsivt design.

Teknologier: HTML&CSS, TypeScript, Next.js, Universell utforming, Sanity, GROQ, Sanity Visual Editing, Tailwind, Git, Vercel, SEO, Adobe XD

•	Perhoj.no (https://perhoj.no)
Nettsted til reklamebyrået Per Høj AS. Flyttet sidene fra WordPress til Sanity med en ny frontend utviklet i Next.js. Brukte Zustand for tilstandsadministrasjon og Node.js for innholdsmigrasjon. I tillegg brukte jeg Sanity med en ganske avansert sidebygger-modul, innholdsbaserte custom komponenter og forhåndsvisning.

Teknologier: HTML&CSS, TypeScript, Next.js, Node.js, Universell utforming, Sanity, GROQ, Sanity Visual Editing, Zustand, Tailwind, Git, JSON, SEO, Vercel, Adobe XD

•	NASAK Familiekart (https://nasakfamiliekart.no)
Utviklet et visuelt verktøy for å illustrere familieforhold tilpasset samisk kultur. Implementerte interaktive animasjoner ved hjelp av JavaScript og GSAP-animasjonsbiblioteket. Løsningen brukes av terapeuter for å forenkle kommunikasjonen rundt familierelasjoner for barn, unge og voksne.

Teknologier: HTML&CSS, JavaScript, GSAP, Git, Adobe XD

Mars 2016 – Mai 2022 Vedlikeholdsprosjekt AS, Oslo (Prosjektleder)
•	Ledet over 30 byggeprosjekter, inkludert innkjøp og koordinering av team.
•	Ansvar for selskapets digitale markedsføring (SEO og bilderedigering).
November 2014 – Januar 2016 Triosystems LLC, Minsk (Grunder og Daglig leder) 
•	Etablerte og ledet en teknologi-startup som nådde semifinalen i en startup-konkurranse med applikasjonen Netgram. Applikasjonen muliggjorde automatisk innhenting av utvalgte Instagram-bilder, påføring av merkevarelogoer eller kampanjeslagord, og utskrift til markedsføringsformål.
•	Utviklet og administrerte nettsiden, inkludert planlegging og implementering av funksjonaliteter.
•	Ansvarlig for selskapets nettside, strategisk forretningsutvikling og oppfølging av kunder.
•	Ledet teamet i den tidlige vekstfasen ved å organisere arbeidsoppgaver, sikre effektiv drift og fremme innovasjon i selskapets tjenester.

Teknologier: HTML&CSS, JavaScript
				"
			/>

			{/* Utdanning */}
			<PromoBlockMagazine
				src={"/kristiania.png"}
				altText="Høyskolen Kristiania"
				size="large"
				sectionTitle="Utdanning"
				text="•	Fagskolegrad (Frontend-utvikling), Høyskolen Kristiania, Oslo August 2022 – Juni 2023
				•	Bachelorgrad (Ledelse), Institutt for Økonomi og Juss, Moskva September 2010 – Juni 2016
				Utdanningen er godkjent som likestilt med en akkreditert norsk bachelorgrad (180 studiepoeng / 3 års høyere utdanning), og inkluderer i tillegg 60 studiepoeng / 1 års høyere utdanning på mastergradsnivå.
				•	Bachelorgrad (Teknikk), MGAK, Minsk September 2006 – Juni 2010
				"
			/>

			{/* Ferdigheter */}
			<TextMagazine
				size="small"
				sectionTitle="Ferdigheter"
				text="Frontend: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Vue.js, Tailwind, MUI, Zustand, UU.
Backend: Node.js, Express.js, Sanity, Firebase, MongoDB, REST API, GROQ.
Design & Verktøy: Figma, Adobe XD, Git, Postman, DevTools.
Andre: GSAP, Framer Motion, Scrum, SEO, Netlify, Vercel."
			/>

			{/* Kurs */}
			<TextMagazine
				size="small"
				sectionTitle="Kurs"
				text="Next.js 14 & React – The Complete Guide (Udemy). Node.js – The Complete Guide (MVC, REST APIs, GraphQL, Deno)."
			/>
			{/* Utmerkelser og priser */}
			<TextMagazine
				size="small"
				sectionTitle="Utmerkelser og priser"
				text="•	Etablerte og ledet en teknologi-startup som nådde semifinalen i en startup-konkurranse med applikasjonen Netgram. Applikasjonen muliggjorde automatisk innhenting av utvalgte Instagram-bilder, påføring av merkevarelogoer eller kampanjeslagord, og utskrift til markedsføringsformål."
			/>

			{/* Språk */}
			<TextMagazine
				size="small"
				sectionTitle="Språk"
				text="Norsk (flytende), Engelsk (flytende), Belarusisk (morsmål), Russisk (morsmål)."
			/>

			{/* Kart */}
			<MapMagazine lng={10.81278} lat={59.89595} map={"light"} />
		</section>
	);
}
