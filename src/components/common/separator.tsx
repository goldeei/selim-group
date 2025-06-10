import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Separator = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			{...props}
			className={cn("w-full h-2 bg-accent shadow-inner", props.className)}
		/>
	);
};
