import { TextareaFormProps } from "@/types/contact-page";
import ErrorMessage from "../../ui/ErrorMessage";

export default function TextareaForm({
	id,
	title,
	errors,
	errorMessage,
	handleChange,
	handleBlur,
}: TextareaFormProps) {
	return (
		<>
			<label htmlFor="message" className="mb-2 text-[0.8rem] md:text-[0.9rem]">
				{title}
			</label>

			<textarea
				id={id}
				name={id}
				className="transitionorder mb-6 w-full rounded-xs border-1 border-solid border-(--color-dark-hover) p-2 text-[0.8rem] duration-300 hover:border-(--color-primary-dark) focus:border-(--color-primary-dark) focus:outline-none"
				rows={8}
				onChange={handleChange}
				onBlur={handleBlur}
			></textarea>

			{errors?.includes(id) && <ErrorMessage message={errorMessage} />}
		</>
	);
}
