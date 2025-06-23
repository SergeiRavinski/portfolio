export default function ErrorMessage({ message }: { message: string }) {
	return (
		<div className="flex text-[0.9rem] border-1 border-solid border-(--color-tertiary-dark) px-2 py-0.5 text-(--color-tertiary-dark) mb-2">
			{message || "An error occurred."}
		</div>
	);
}
