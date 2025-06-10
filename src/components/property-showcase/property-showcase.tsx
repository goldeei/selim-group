"use client";

import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import { useState } from "react";

import { PropertyCarousel } from "./property-carousel";
import { PropertyText } from "./property-details/property-text";

const styles = {
	base: "h-fit relative grid grid-cols-1 grid-rows-[auto_1fr] items-start",
	desktop: "lg:grid-cols-3 lg:grid-rows-1 lg:gap-8 lg:items-center",
	mobile: "h-full grid-rows-1",
};

export const PropertyShowcase = ({
	properties,
}: {
	properties: Property[];
}) => {
	const [activeProperty, setActiveProperty] = useState(properties[0]);
	const isMobile = useIsMobile();
	const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

	return (
		<div className={cn(styles.base, styles.desktop, isMobile && styles.mobile)}>
			<PropertyText
				activeProperty={activeProperty}
				isMobile={isMobile}
				isDescriptionOpen={isDescriptionOpen}
				setIsDescriptionOpen={setIsDescriptionOpen}
			/>
			<PropertyCarousel
				properties={properties}
				isMobile={isMobile}
				isDescriptionOpen={isDescriptionOpen}
				onPropertyChange={setActiveProperty}
			/>
		</div>
	);
};
