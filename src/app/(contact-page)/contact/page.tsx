"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { capitalizeFirstLetter } from "@/helpers/capitalize-first-letter";
import InputForm from "@/components/ui/InputForm";
import TextareaForm from "@/components/ui/TextareaForm";

export default function Contact() {
	const router = useRouter();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<string[]>([]);

	// Function to handle input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: capitalizeFirstLetter(e.target.value),
		});

		if (errors?.length > 0) {
			validateFormData();
		}
	};

	// Function to handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors([]);

		const validationPassed = validateFormData();

		if (validationPassed) {
			// Send the form data to the API endpoint
			try {
				const res = await fetch("/api/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});

				if (res.ok) {
					router.push("/?submitted=true");
				} else {
					alert("Failed to send email.");
				}
			} catch (error) {
				console.error(error);
				alert("An error occurred.");
			}
		}
	};

	// Function to validate form data
	function validateFormData() {
		const newErrors: string[] = [];
		// Regular expression for basic email validation
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		for (const key in formData) {
			if (formData[key as keyof typeof formData] === "") {
				newErrors.push(key);
			} else if (key === "email" && !emailPattern.test(formData.email)) {
				newErrors.push("email");
			}
		}

		setErrors(newErrors);

		return newErrors.length === 0;
	}

	return (
		<>
			<fieldset className="flex flex-col mx-auto w-1/3 h-full my-16">
				<div className="flex flex-col w-full h-full normal-case">
					<h2 className="text-xl mb-4">Contact Me</h2>
					<p>
						I am always open to discussing new projects, creative
						ideas, or opportunities to be part of your vision.
					</p>
				</div>

				<div className="flex flex-col w-full h-full normal-case">
					<form
						className="flex flex-col w-full h-full"
						onSubmit={handleSubmit}
					>
						{/* First Name */}
						<InputForm
							id={"firstName"}
							title={"First name"}
							type={"text"}
							errors={errors}
							errorMessage={"Please enter your first name"}
							handleChange={handleChange}
						/>

						{/* Last Name */}
						<InputForm
							id={"lastName"}
							title={"Last name"}
							type={"text"}
							errors={errors}
							errorMessage={"Please enter your last name"}
							handleChange={handleChange}
						/>

						{/* Email */}
						<InputForm
							id={"email"}
							title={"Email"}
							type={"text"}
							errors={errors}
							errorMessage={"Please enter a valid email address."}
							handleChange={handleChange}
							handleBlur={() => validateFormData()}
						/>

						{/* Message */}
						<TextareaForm
							id={"message"}
							title={"Message"}
							errors={errors}
							errorMessage={"Please enter your message"}
							handleChange={handleChange}
							handleBlur={() => validateFormData()}
						/>

						<Button type="text" text="Send Message" color="dark" />
					</form>
				</div>
			</fieldset>
		</>
	);
}
