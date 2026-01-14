"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Alert() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [showMessage, setShowSuccess] = useState(false);

	useEffect(() => {
		if (searchParams.get("submitted") === "true") {
			setShowSuccess(true);

			// Optional: remove ?submitted=true from URL
			router.replace("/");

			// Hide after 3 seconds
			setTimeout(() => {
				setShowSuccess(false);
			}, 3000);
		}
	}, [searchParams, router]);

	return (
		<div
			className={`fixed bottom-[5%] left-1/2 z-50 flex -translate-x-1/2 transform flex-row gap-2 rounded-xs border border-[var(--color-tertiary-dark)] bg-[var(--color-primary-light)] px-4 py-2 text-[var(--color-tertiary-dark)] normal-case drop-shadow-lg transition-all duration-500 ease-in-out ${
				showMessage
					? "translate-y-0 opacity-100"
					: "pointer-events-none translate-y-6 opacity-0"
			}`}
		>
			Message sent successfully!
		</div>
	);
}
