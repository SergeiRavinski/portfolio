"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
	const environment = useDraftModeEnvironment();

	// Only show the disable draft mode button when outside of Presentation Tool
	if (environment !== "live" && environment !== "unknown") {
		return null;
	}

	return (
		<a
			href="/api/draft-mode/disable"
			className="fixed right-4 bottom-4 border-1 border-solid border-(--color-tertiary-dark) bg-(--color-primary-light) px-4 py-2"
		>
			Disable Draft Mode
		</a>
	);
}
