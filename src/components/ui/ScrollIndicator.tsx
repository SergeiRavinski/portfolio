import { MotionValue, motion } from "motion/react";

export default function ScrollIndicator({
	scrollY,
}: {
	scrollY: MotionValue<number>;
}) {
	return (
		<motion.div
			id="scroll-indicator"
			style={{
				scaleX: scrollY,
				position: "sticky",
				top: 0,
				left: 0,
				right: 0,
				height: 2,
				originX: 0,
				zIndex: 10,
				backgroundColor: "var(--color-tertiary-dark)",
			}}
		/>
	);
}
