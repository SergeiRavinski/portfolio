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
			<label
				htmlFor="message"
				className="mb-2 md:text-[0.9rem] text-[0.8rem]"
			>
				{title}
			</label>

			<textarea
				id={id}
				name={id}
				className="text-[0.8rem] border-1 border-solid border-(--color-dark-hover) transitionorder duration-300 hover:border-(--color-primary-dark) p-2 w-full rounded-xs focus:outline-none focus:border-(--color-primary-dark) mb-6"
				rows={8}
				onChange={handleChange}
				onBlur={handleBlur}
			></textarea>

			{errors?.includes(id) && <ErrorMessage message={errorMessage} />}
		</>
	);
}
