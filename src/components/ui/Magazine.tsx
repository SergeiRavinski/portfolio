import Image from "next/image";

export default function Magazine() {
	return (
		<section className="grid grid-cols-4 gap-3 grid-flow-row mb-6">
			<div className="h-full relative grid col-span-2 row-span-2 group transition-all duration-300 ease-in-out">
				<Image
					className="w-full h-full object-cover"
					src={"/kristiania.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>

				<div className="hidden group-hover:flex h-full w-full text-(--color-primary-light) p-6 absolute top-0 left-0 bg-(--color-primary-dark) opacity-80 transition-all duration-300 ease-in-out">
					hover text
				</div>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/audi.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			</div>

			<div className="h-full grid col-span-2 row-span-2">
				<Image
					className="w-full h-full object-cover"
					src={"/audi.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/kristiania.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/audi.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full col-span-2 row-span-2">
				<div className="bg-(--color-primary-dark) text-(--color-primary-light) p-4 h-full">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/kristiania.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/audi.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full col-span-2 row-span-2">
				<Image
					className="w-full h-full object-cover"
					src={"/kristiania.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/kristiania.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>

			<div className="h-full">
				<Image
					className="w-full h-full object-cover"
					src={"/audi.png"}
					width={500}
					height={500}
					alt="Default icon"
				/>
			</div>
		</section>
	);
}
