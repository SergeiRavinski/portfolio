import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import MainContentWrapper from "@/components/global/MainContentWrapper";
import Header from "@/components/ui/Header";
import RootWrapper from "@/components/global/RootWrapper";

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
			</MainContentWrapper>
			<SanityLive />

			{(await draftMode()).isEnabled && (
				<>
					<DisableDraftMode />
					<VisualEditing />
				</>
			)}
		</RootWrapper>
	);
}
