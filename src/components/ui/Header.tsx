"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function Header() {
	return (
		<header className="container mx-auto w-full p-6">
			<nav>
				<ul className="flex flex-row gap-4 justify-self-end border-b-2 border-(--color-secondary-dark) text-xl tracking-tight">
					{/* TODO: Add active class to the current page using ref */}
					<FlipLink href="/" path="/">
						Portfolio
					</FlipLink>

					<FlipLink href="/resume" path="/resume">
						Resume
					</FlipLink>

					<FlipLink href="/about" path="/about">
						About
					</FlipLink>

					<FlipLink href="/contact" path="/contact">
						Contact
					</FlipLink>
				</ul>
			</nav>
		</header>
	);
}

const FlipLink = ({
	href,
	children,
	path,
}: {
	href: string;
	children: string;
	path: string;
}) => {
	const pathName = usePathname();
	const styleActive = "border-b-2 font-bold border-[#29292B]";

	return (
		<motion.li
			initial="initial"
			whileHover="hovered"
			className={`${pathName === path ? styleActive : ""} overflow-hidden relative `}
			// style={{ lineHeight: 0.75 }}
		>
			<div>
				<Link href={href}>
					{pathName === path ? "." : ""}
					{children.split("").map((letter, index) => {
						return (
							<motion.span
								variants={{
									initial: { y: 0 },
									hovered: { y: "-100%" },
								}}
								transition={{
									duration: DURATION,
									ease: "easeInOut",
									delay: STAGGER * index,
								}}
								key={index}
								className="inline-block h-fit"
							>
								{letter}
							</motion.span>
						);
					})}
				</Link>
			</div>

			<div className="absolute inset-0">
				<Link href={href}>
					{pathName === path ? "." : ""}
					{children.split("").map((letter, index) => {
						return (
							<motion.span
								variants={{
									initial: { y: "100%" },
									hovered: { y: 0 },
								}}
								transition={{
									duration: DURATION,
									ease: "easeInOut",
									delay: STAGGER * index,
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
};

//////////
// import { AnimatePresence } from "motion/react";
// import * as motion from "motion/react-client";
// import { usePathNamename } from "next/navigation";
// import { useState } from "react";

// export default function Header() {
// 	const path = usePathname();
// 	const [selectedTab, setSelectedTab] = useState(tabs[0]);

// 	return (
// 		<div style={container}>
// 			<nav style={nav}>
// 				<ul style={tabsContainer}>
// 					{tabs.map((item) => (
// 						<motion.li
// 							key={item.label}
// 							initial={false}
// 							animate={{
// 								backgroundColor:
// 									item === selectedTab ? "#eee" : "#eee0",
// 							}}
// 							style={tab}
// 							onClick={() => setSelectedTab(item)}
// 						>
// 							{item.label}
// 							{item === selectedTab ? (
// 								<motion.div
// 									style={underline}
// 									layoutId="underline"
// 									id="underline"
// 								/>
// 							) : null}
// 						</motion.li>
// 					))}
// 				</ul>
// 			</nav>

// 			{/* <main style={iconContainer}> */}
// 			<AnimatePresence mode="wait">
// 				<motion.div
// 					key={selectedTab ? selectedTab.label : "empty"}
// 					initial={{ y: 10, opacity: 0 }}
// 					animate={{ y: 0, opacity: 1 }}
// 					exit={{ y: -10, opacity: 0 }}
// 					transition={{ duration: 0.2 }}
// 					style={icon}
// 				>
// 					{selectedTab ? selectedTab.icon : "😋"}
// 				</motion.div>
// 			</AnimatePresence>
// 			{/* </main> */}
// 		</div>
// 	);
// }

// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
// 	width: 480,
// 	height: "60vh",
// 	maxHeight: 360,
// 	borderRadius: 10,
// 	background: "white",
// 	overflow: "hidden",
// 	boxShadow:
// 		"0 1px 1px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075), 0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075), 0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075)",
// 	display: "flex",
// 	flexDirection: "column",
// };

// const nav: React.CSSProperties = {
// 	background: "#fdfdfd",
// 	padding: "5px 5px 0",
// 	borderRadius: "10px",
// 	borderBottomLeftRadius: 0,
// 	borderBottomRightRadius: 0,
// 	borderBottom: "1px solid #eeeeee",
// 	height: 44,
// };

// const tabsStyles: React.CSSProperties = {
// 	listStyle: "none",
// 	padding: 0,
// 	margin: 0,
// 	fontWeight: 500,
// 	fontSize: 14,
// };

// const tabsContainer: React.CSSProperties = {
// 	...tabsStyles,
// 	display: "flex",
// 	width: "100%",
// };

// const tab: React.CSSProperties = {
// 	...tabsStyles,
// 	borderRadius: 5,
// 	borderBottomLeftRadius: 0,
// 	borderBottomRightRadius: 0,
// 	width: "100%",
// 	padding: "10px 15px",
// 	position: "relative",
// 	background: "white",
// 	cursor: "pointer",
// 	height: 24,
// 	display: "flex",
// 	justifyContent: "space-between",
// 	alignItems: "center",
// 	flex: 1,
// 	minWidth: 0,
// 	userSelect: "none",
// 	color: "#0f1115",
// };

// const underline: React.CSSProperties = {
// 	position: "absolute",
// 	bottom: -2,
// 	left: 0,
// 	right: 0,
// 	height: 2,
// 	background: "var(--accent)",
// };

// const iconContainer: React.CSSProperties = {
// 	display: "flex",
// 	justifyContent: "center",
// 	alignItems: "center",
// 	flex: 1,
// };

// const icon: React.CSSProperties = {
// 	fontSize: 128,
// };

// /**
//  * ==============   Data   ================
//  */

// const allIngredients = [
// 	{ icon: "Po", label: "Portfolio" },
// 	{ icon: "Re", label: "Resume" },
// 	{ icon: "Ab", label: "About" },
// 	{ icon: "Co", label: "Contact" },
// ];

// const [portfolio, resume, about, contact] = allIngredients;
// const tabs = [portfolio, resume, about, contact];
