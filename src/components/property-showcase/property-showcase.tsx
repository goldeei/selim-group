"use client";

import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import { useState } from "react";

import { PropertyCarousel } from "./property-carousel";
import { PropertyText } from "./property-details/property-text";

const styles = {
	base: "relative flex-1 min-h-0 flex flex-col gap-4 overflow-hidden",
	desktop: "lg:flex-row",
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
				styles.desktop,
				isMobile && styles.mobile,
				className
			)}
		>
			<PropertyText
				activeProperty={activeProperty}
				isMobile={isMobile}
				isDescriptionOpen={isDescriptionOpen}
				setIsDescriptionOpen={setIsDescriptionOpen}
			/>
			<PropertyCarousel
				properties={properties}
				isMobile={isMobile}
				onPropertyChange={setActiveProperty}
				activeProperty={activeProperty}
			/>
		</div>
	);
};
