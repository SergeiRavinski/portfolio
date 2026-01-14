import MainContentWrapper from "../global/MainContentWrapper";
import RootWrapper from "../global/RootWrapper";
import Button from "./Button";
import Header from "./Header";
import SplitTextYoyo from "./SplitTextYoyo";

export default function PageNotFound() {
	return (
		<RootWrapper>
			<MainContentWrapper>
				<Header />

				<main className="z-50 flex h-full flex-col items-center justify-center bg-(--color-primary-light) px-6 text-center text-(--color-primary-dark)">
					<SplitTextYoyo text="404" isNotFound />

					<p className="mb-8 max-w-md text-lg text-(--color-primary-dark) sm:text-xl">
						Oops. This page doesn’t exist.
					</p>

					<Button text="Back to Home" type="text" link="/" />
				</main>
			</MainContentWrapper>
		</RootWrapper>
	);
}
