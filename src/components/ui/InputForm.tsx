import ErrorMessage from "./ErrorMessage";

export default function InputForm({
	id,
	title,
	type,
	errors,
	errorMessage,
	handleChange,
	handleBlur,
}: {
	id: string;
	title: string;
	type: string;
	errors?: string[];
	errorMessage: string;
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	handleBlur?: () => void;
}) {
	return (
		<>
			<label htmlFor={id} className="mb-2 text-[0.9rem]">
				{title}
			</label>

			<input
				id={id}
				name={id}
				type={type}
				className="text-[0.8rem] border-b-1 border-b-solid border-b-(--color-dark-hover) transition-border duration-300 hover:border-b-(--color-primary-dark) p-2 w-full focus:outline-none focus:border-b-(--color-primary-dark) mb-4"
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			{errors?.includes(id) && <ErrorMessage message={errorMessage} />}
		</>
	);
}
