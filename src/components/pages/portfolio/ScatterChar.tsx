import { useLabelRanges } from "@/hooks/use-label-ranges";
import { motion } from "framer-motion";

export function ScatterChar({
	char,
	i,
	isOn,
	shuffledIndexes,
	fallDistances,
	charRefs,
	rawText,
	sections,
}: {
	char: string;
	i: number;
	isOn: boolean;
	shuffledIndexes: number[];
	fallDistances: number[];
	charRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
	rawText: string;
	sections: unknown[];
}) {
	const delayIndex = shuffledIndexes.indexOf(i);
	const delay = isOn ? delayIndex * 0.02 : delayIndex * 0.001;
	const rotation = Math.random() * 360 - 180;
	const labelRanges = useLabelRanges(
		rawText,
		sections as { label: string }[]
	);
	const isBold = labelRanges.some(({ start, end }) => i >= start && i < end);

	if (char === "\n") return <br key={`br-${i}`} />;

	return (
		<motion.span
			key={i}
			ref={(el) => {
				charRefs.current[i] = el;
			}}
			className={`inline-block whitespace-pre ${isBold ? "font-bold uppercase" : "font-normal"}`}
			animate={
				isOn
					? {
							y: [0, fallDistances[i] - 25 ?? 500],
							rotate: [0, rotation],
						}
					: { y: 0, rotate: 0 }
			}
			transition={
				isOn
					? {
							duration: 1.5,
							delay,
							ease: "easeOut",
							rotate: {
								duration: 1.2,
								delay,
								ease: "easeOut",
							},
						}
					: { duration: 0.2, delay, ease: "easeOut" }
			}
		>
			{char === " " ? "\u00A0" : char}
		</motion.span>
	);
}
