"use client";

import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import { useState } from "react";

import { PropertyCarousel } from "./property-carousel";
import { PropertyText } from "./property-details/property-text";

const styles = {
	base: "relative flex-1 min-h-0 flex flex-col justify-center gap-4 overflow-hidden",
	desktop:
		"lg:flex-row lg:items-center lg:gap-8 mb-8 p-4 md:p-8 lg:p-0 lg:px-8 bg-black/10 rounded shadow-inner",
	mobile: "h-full break-out",
};

export const PropertyShowcase = ({
	properties,
	className,
}: {
	properties: Property[];
	className?: string;
}) => {
	const [activeProperty, setActiveProperty] = useState(properties[0]);
	const isMobile = useIsMobile();
	const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

	return (
		<div
			className={cn(
				styles.base,
				isMobile ? styles.mobile : styles.desktop,
				className
			)}
		>
			<PropertyCarousel
				properties={properties}
				isMobile={isMobile}
				onPropertyChange={setActiveProperty}
				activeProperty={activeProperty}
			/>
			<PropertyText
				activeProperty={activeProperty}
				isMobile={isMobile}
				isDescriptionOpen={isDescriptionOpen}
				setIsDescriptionOpen={setIsDescriptionOpen}
			/>
		</div>
	);
};
