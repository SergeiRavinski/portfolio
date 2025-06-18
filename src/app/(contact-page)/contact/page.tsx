"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Contact() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});

	// Function to handle input changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: capitalizeFirstLetter(e.target.value),
		});
	};

	// Function to handle form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			console.log("Form Data:", formData);

			const res = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				alert("Email sent successfully!");
			} else {
				alert("Failed to send email.");
			}
		} catch (error) {
			console.error(error);
			alert("An error occurred.");
		}
	};

	// Function to capitalize the first letter of a string
	function capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
						<label
							htmlFor="firstName"
							className="mb-2 text-[0.9rem]"
						>
							First name
						</label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							required
							className="text-[0.8rem] border-b-1 border-b-solid border-b-(--color-dark-hover) transition-border duration-300 hover:border-b-(--color-primary-dark) p-2 w-full focus:outline-none focus:border-b-(--color-primary-dark) mb-4"
							onChange={handleChange}
						/>

						<label
							htmlFor="lastName"
							className="mb-2 text-[0.9rem]"
						>
							Last name
						</label>
						<input
							id="lastName"
							name="lastName"
							type="text"
							required
							className="text-[0.8rem] border-b-1 border-b-solid border-b-(--color-dark-hover) transition-border duration-300 hover:border-b-(--color-primary-dark) p-2 w-full focus:outline-none focus:border-b-(--color-primary-dark) mb-4"
							onChange={handleChange}
						/>

						<label htmlFor="email" className="mb-2 text-[0.9rem]">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="text-[0.8rem] border-b-1 border-b-solid border-b-(--color-dark-hover) transition-border duration-300 hover:border-b-(--color-primary-dark) p-2 w-full focus:outline-none focus:border-b-(--color-primary-dark) mb-4"
							onChange={handleChange}
						/>

						<label htmlFor="message" className="mb-2 text-[0.9rem]">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							className="text-[0.8rem] border-1 border-solid border-(--color-dark-hover) transitionorder duration-300 hover:border-(--color-primary-dark) p-2 w-full rounded-xs focus:outline-none focus:border-(--color-primary-dark) mb-6"
							required
							rows={8}
							onChange={handleChange}
						></textarea>

						<Button type="text" text="Send Message" color="dark" />
					</form>
				</div>
			</fieldset>
		</>
	);
}
