"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

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
			className={`gap-2 normal-case flex flex-row fixed bottom-20 left-1/2 -translate-x-1/2 transform bg-[var(--color-primary-light)] text-[var(--color-tertiary-dark)] py-2 px-4 rounded-xs drop-shadow-lg z-50 border border-[var(--color-tertiary-dark)] transition-all duration-500 ease-in-out ${
				showMessage
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-6 pointer-events-none"
			}`}
		>
			Message sent successfully!
		</div>
	);
}
