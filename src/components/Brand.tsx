"use client";

import BrandLogo from "@/app/assets/svgs/brand.svg";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";

export const Brand = (props: SVGProps<SVGSVGElement>) => {
	const { className, href, ...rest } = props;

	const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<a href={href} title="Brand" onPointerDown={handleClick}>
			<BrandLogo
				{...rest}
				className={cn(
					"w-full aspect-[141/86] hover:brightness-110 transition-all",
					className
				)}
			/>
		</a>
	);
};
