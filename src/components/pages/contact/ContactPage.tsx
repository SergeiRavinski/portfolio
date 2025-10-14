"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { capitalizeFirstLetter } from "@/helpers/capitalize-first-letter";
import InputForm from "@/components/pages/contact/InputForm";
import TextareaForm from "@/components/pages/contact/TextareaForm";
import SocialMedia from "@/components/ui/SocialMedia";
import LocationIcon from "../../../../public/location";
import Map from "@/components/ui/Map";
import { ContactPageData } from "@/types/contact-page";
import SplitTextYoyo from "@/components/ui/SplitTextYoyo";

export default function ContactPage({ data }: { data: ContactPageData }) {
	const { title, titleLocation, lat, lng, mapStyle, links } = data || {};

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
		<section className="md:my-20 my-10 flex justify-between md:flex-row flex-col items-end relative h-full lg:mx-[10%] md:mx-[3%] mx-[1%]">
			<fieldset className="flex flex-col content-end md:w-[45%] w-full h-full">
				<div className="flex flex-col w-full h-full normal-case">
					<h2 className=" md:text-[1.25rem] uppercase text-[1rem] mb-4">
						<SplitTextYoyo text={title} />
					</h2>

					<p className="md:text-[1rem] text-[0.8rem] mb-4">
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

			<div className="flex flex-col md:w-[45%] w-full h-full md:mt-0 mt-10 justify-between">
				{links && <SocialMedia links={links} />}

				<section>
					<span className="flex flex-row items-center uppercase mt-10 mb-4 h-4">
						<LocationIcon className="flex h-full text-(--color-primary-dark)" />
						<p className="text-[0.8rem] ml-2">{titleLocation}</p>
					</span>

					<div>
						<Map lng={lng} lat={lat} map={mapStyle} />
					</div>
				</section>
			</div>
		</section>
	);
}
