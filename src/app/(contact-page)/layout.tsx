import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
import MainContentWrapper from "@/components/global/MainContentWrapper";
import Header from "@/components/ui/Header";
import RootWrapper from "@/components/global/RootWrapper";
import Footer from "@/components/ui/Footer";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RootWrapper>
			<MainContentWrapper>
				<Header />
				{children}
				<Footer />
			</MainContentWrapper>
			<SanityLive />

			{/* VisualEditing */}
			{(await draftMode()).isEnabled && (
				<>
					<DisableDraftMode />
					<VisualEditing />
				</>
			)}
		</RootWrapper>
	);
}
