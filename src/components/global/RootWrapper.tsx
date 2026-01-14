export default function RootWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-full min-h-screen cursor-none flex-row bg-(--color-primary-light) font-(family-name:--font-space-mono) text-(--color-primary-dark) lowercase selection:bg-(--color-primary-dark) selection:text-(--color-primary-light)">
			{children}
		</div>
	);
}
