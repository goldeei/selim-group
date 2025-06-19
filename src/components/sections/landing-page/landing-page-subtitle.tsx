"use client";

import { cn } from "@/lib/utils";

const styles = "text-primary-lighter tracking-widest";

interface LandingPageSubtitle {
	subtitle: string;
}
export const LandingPageSubtitle = (props: LandingPageSubtitle) => {
	const { subtitle } = props;

	return (
		<h2
			className={cn(
				styles,
				"text-3xl min-[480px]:text-4xl sm:text-5xl md:text-6xl"
			)}
		>
			{subtitle}
		</h2>
	);
};
