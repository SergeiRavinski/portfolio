"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const path = usePathname();

	const styleActive = "border-b-2 font-bold border-[#29292B]";

	return (
		<header className="container mx-auto w-full p-6">
			<nav>
				<ul className="flex flex-row gap-4 justify-self-end border-b-2 border-(--color-secondary-dark) text-xl tracking-tight">
					{/* TODO: Add active class to the current page using ref */}
					<li className={`${path === "/" ? styleActive : ""}`}>
						<Link href="/">{path === "/" ? "." : ""}Portfolio</Link>
					</li>

					<li className={`${path === "/resume" ? styleActive : ""}`}>
						<Link href="/resume">
							{path === "/resume" ? "." : ""}Resume
						</Link>
					</li>

					<li
						className={` pb-2 ${path === "/about" ? styleActive : ""}`}
					>
						<Link href="/about">
							{path === "/about" ? "." : ""}About
						</Link>
					</li>

					<li className={`${path === "/contact" ? styleActive : ""}`}>
						<Link href="/contact">
							{path === "/contact" ? "." : ""}Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

//////////
// import { AnimatePresence } from "motion/react";
// import * as motion from "motion/react-client";
// import { usePathname } from "next/navigation";
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
