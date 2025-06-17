import Button from "@/components/ui/Button";

export default async function Contact() {
	return (
		<>
			<fieldset className="flex flex-col w-1/2 h-full my-16">
				<div className="flex flex-col w-full h-full normal-case">
					<h2 className="text-xl mb-4">Contact Me</h2>
					<p>
						I am always open to discussing new projects, creative
						ideas, or opportunities to be part of your vision.
					</p>
				</div>

				<div className="flex flex-col w-full h-full normal-case">
					<form className="flex flex-col w-full h-full">
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
						></textarea>

						<Button type="text" text="Send Message" color="dark" />
					</form>
				</div>
			</fieldset>
		</>
	);
}
