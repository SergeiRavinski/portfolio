"use client";

import * as motion from "motion/react-client";
import { useState } from "react";

export default function DarkModeToggle() {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);

	return (
		<button
			className="toggle-container flex w-12 h-7 border-1 border-(--color-dark-hover) inset-shadow cursor-pointer rounded-[50px] p-0.5"
			style={{
				justifyContent: "flex-" + (isOn ? "start" : "end"),
				boxShadow: "inset 0 4px 2px var(--color-secondary-dark)",
			}}
			onClick={toggleSwitch}
		>
			<motion.div
				className="flex toggle-handle w-[22px] h-[22px] bg-(--color-primary-dark) rounded-[50%]"
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
