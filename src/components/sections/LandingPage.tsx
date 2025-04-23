import LandingPageFooter from "@/app/assets/svgs/landing-page-footer.svg";
import LandingPageLogo from "@/app/assets/svgs/landing-page__desktop.svg";
import { Separator } from "../ui/Separator";

export const LandingPage = () => {
	return (
		<div className="bg-primary w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
			<div className="w-full max-w-4xl flex flex-col items-center gap-4 mt-auto">
				<LandingPageLogo
					className="w-4/5 h-full"
					preserveAspectRatio="xMidYMid meet"
				/>
				<Separator />
				<h2 className="text-primary__lighter tracking-widest">
					WE DO HOUSES AND STUFF
				</h2>
			</div>
			<LandingPageFooter className="mt-auto" />
		</div>
	);
};
