export default function ErrorMessage({ message }: { message: string }) {
	return (
		<div className="mb-2 flex border-1 border-solid border-(--color-tertiary-dark) px-2 py-0.5 text-[0.9rem] text-(--color-tertiary-dark)">
			{message ?? "An error occurred."}
		</div>
	);
}
