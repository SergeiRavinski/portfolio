// Reset form data to initial state
export function resetFormData(
	setFormData: React.Dispatch<
		React.SetStateAction<{
			firstName: string;
			lastName: string;
			email: string;
			message: string;
		}>
	>
) {
	setFormData({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
}
