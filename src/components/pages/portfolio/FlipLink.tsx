import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FlipLink({
	href,
	children,
	path,
}: {
	href: string;
	children: string;
	path: string;
}) {
	const pathName = usePathname();
	const duration = 0.25;
	const stagger = 0.025;

	return (
		<motion.li
			initial="initial"
			whileHover="hovered"
			className={`relative flex overflow-hidden leading-none uppercase transition-opacity duration-300 hover:opacity-100`}
		>
			<div className={`${pathName === path ? "font-bold opacity-100" : "opacity-60"}`}>
				<Link href={href}>
					{children.split("").map((letter, index) => {
						return (
							<motion.span
								variants={{
									initial: { y: 0 },
									hovered: { y: "-100%" },
								}}
								transition={{
									duration: duration,
									ease: "easeInOut",
									delay: stagger * index,
								}}
								key={index}
								className="inline-block"
							>
								{letter}
							</motion.span>
						);
					})}
				</Link>
			</div>

			<div
				className={`${pathName === path ? "font-bold opacity-100" : "opacity-60"} absolute inset-0`}
			>
				<Link href={href}>
					{children.split("").map((letter, index) => {
						return (
							<motion.span
								variants={{
									initial: { y: "100%" },
									hovered: { y: 0 },
								}}
								transition={{
									duration: duration,
									ease: "easeInOut",
									delay: stagger * index,
								}}
								key={index}
								className="inline-block"
							>
								{letter}
							</motion.span>
						);
					})}
				</Link>
			</div>
		</motion.li>
	);
}
