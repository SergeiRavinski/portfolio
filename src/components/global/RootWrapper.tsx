export default function RootWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-row cursor-none min-h-screen h-full bg-(--color-primary-light) lowercase font-(family-name:--font-space-mono) selection:bg-(--color-primary-dark) selection:text-(--color-primary-light) text-(--color-primary-dark)">
			{children}
		</div>
	);
}
