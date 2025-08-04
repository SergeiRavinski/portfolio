import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import Aside from "@/components/ui/Aside";
import MainContentWrapper from "@/components/global/MainContentWrapper";
import Header from "@/components/ui/Header";
import RootWrapper from "@/components/global/RootWrapper";
import Alert from "@/components/ui/Alert";
import VerticalScrollWave from "@/components/ui/VerticalScrollWave";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<RootWrapper>
			<Aside />
			<VerticalScrollWave />
			<MainContentWrapper>
				<Header />
				{children}
				<Alert />
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
