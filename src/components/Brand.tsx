"use client";

import BrandLogo from "@/app/assets/svgs/brand.svg";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const Brand = (props: SVGProps<SVGSVGElement>) => {
	const { className, ...rest } = props;

	const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<button title="Brand" onPointerDown={handleClick}>
			<BrandLogo
				{...rest}
				className={cn("hover:brightness-110 transition-all", className)}
			/>
		</button>
	);
};
