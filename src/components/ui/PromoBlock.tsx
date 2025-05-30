import Button from "./Button";
import Image from "next/image";

export default function PromoBlock() {
	return (
		<>
			<section className="flex flex-row w-full text-(--color-primary-light) h-100 bg-(--color-primary-dark) mb-6">
				<div className="flex flex-col gap-6 justify-center w-1/2 h-full p-6">
					<h1 className="text-[1rem] uppercase">
						Sergei Ravinski Frontend / Fullstack Utvikler | Next.js
						| Sanity
					</h1>

					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus.
					</p>

					<section className="flex">
						<Button
							// clickEvent={sendEmail}
							type={"text"}
							text={"Send en e-post"}
						/>
					</section>
				</div>

				<div className="flex w-1/2 h-full">
					<Image
						className="w-full object-cover"
						src={"/kristiania.png"}
						width={500}
						height={500}
						alt="Default icon"
					/>
				</div>
			</section>

			<section className="flex flex-row w-full h-100 mb-6">
				<div className="flex w-1/2 h-full">
					<Image
						className="w-full object-cover"
						src={"/kristiania.png"}
						width={500}
						height={500}
						alt="Default icon"
					/>
				</div>

				<div className="flex flex-col gap-6 justify-center w-1/2 h-full p-6">
					<h1 className="text-[1rem] uppercase">
						Sergei Ravinski Frontend / Fullstack Utvikler | Next.js
						| Sanity
					</h1>

					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quisquam, voluptatibus.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quisquam, voluptatibus.
					</p>

					<section className="flex">
						<Button
							// clickEvent={sendEmail}
							type={"text"}
							text={"Send en e-post"}
						/>
					</section>
				</div>
			</section>
		</>
	);
}
