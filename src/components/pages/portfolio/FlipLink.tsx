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
			className={`overflow-hidden relative flex leading-none uppercase 
	 
			hover:opacity-100 transition-opacity duration-300
		`}
		>
			<div
				className={`${pathName === path ? "opacity-100 font-bold" : "opacity-60"}`}
			>
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
				className={`${pathName === path ? "opacity-100 font-bold" : "opacity-60"} absolute inset-0`}
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
