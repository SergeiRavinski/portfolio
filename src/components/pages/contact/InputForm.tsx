import { InputFormProps } from "@/types/contact-page";
import ErrorMessage from "../../ui/ErrorMessage";

export default function InputForm({
	id,
	title,
	type,
	errors,
	errorMessage,
	handleChange,
	handleBlur,
}: InputFormProps) {
	return (
		<>
			<label htmlFor={id} className="mb-2 text-[0.8rem] md:text-[0.9rem]">
				{title}
			</label>

			<input
				id={id}
				name={id}
				type={type}
				className="border-b-solid transition-border mb-4 w-full border-b-1 border-b-(--color-dark-hover) p-2 text-[0.8rem] duration-300 hover:border-b-(--color-primary-dark) focus:border-b-(--color-primary-dark) focus:outline-none"
				onChange={handleChange}
				onBlur={handleBlur}
			/>

			{errors?.includes(id) && <ErrorMessage message={errorMessage} />}
		</>
	);
}
