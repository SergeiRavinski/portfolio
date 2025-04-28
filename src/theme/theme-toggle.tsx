"use client";

import { useTheme } from "next-themes";
import * as motion from "motion/react-client";

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const toggleSwitch = () => setTheme(theme === "dark" ? "light" : "dark");

	return (
		<button
			className="toggle-container flex w-10 h-6 border-1 border-(--color-dark-hover) inset-shadow cursor-pointer rounded-[50px] p-0.5"
			style={{
				justifyContent: "flex-" + (theme === "light" ? "start" : "end"),
				boxShadow: "inset 0 4px 2px var(--color-secondary-dark)",
			}}
			onClick={toggleSwitch}
		>
			<motion.div
				className="flex toggle-handle w-[18px] h-[18px] bg-(--color-primary-dark) rounded-[50%]"
				layout
				transition={{
					type: "spring",
					visualDuration: 0.2,
					bounce: 0.2,
				}}
			/>
		</button>
	);
}
