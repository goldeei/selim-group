"use client";

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import { SanityImage } from "@/components/ui/SanityImage";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Property } from "../types";
import { CarouselButton } from "./PropertyCarouselButton";

interface PropertyCarouselProps {
	properties: Property[];
	isMobile: boolean;
	isDescriptionOpen: boolean;
	onPropertyChange: (property: Property) => void;
}

const styles = {
	carousel: {
		base: "lg:col-span-2 relative p-12",
		mobile: "absolute inset-0 p-0 h-full [&_div]:h-full",
		mobileDisabled: "pointer-events-none",
	},
	image: {
		base: "size-full m-auto aspect-[16/9]",
		mobile: "object-cover aspect-[3/4]",
	},
	buttonContainer: "",
} as const;

const animations = {
	buttons: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
} as const;

export const PropertyCarousel = (props: PropertyCarouselProps) => {
	const { isMobile, isDescriptionOpen, properties, onPropertyChange } = props;

	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (api) {
			api.on("select", () => {
				onPropertyChange(properties[api.selectedScrollSnap()]);
			});
		}
	}, [api, onPropertyChange, properties]);

	return (
		<Carousel
			className={cn(
				styles.carousel.base,
				isMobile && [
					styles.carousel.mobile,
					isDescriptionOpen && styles.carousel.mobileDisabled,
				]
			)}
			setApi={setApi}
		>
			<CarouselContent>
				{properties.map(({ id, srcPath, altText, width, height }) => (
					<CarouselItem key={id}>
						<SanityImage
							src={srcPath}
							hotspotCrop={isMobile ? "3:4" : "16:9"}
							alt={altText}
							width={width}
							height={height}
							className={cn(styles.image.base, isMobile && styles.image.mobile)}
						/>
					</CarouselItem>
				))}
			</CarouselContent>

			<AnimatePresence>
				{!isDescriptionOpen && (
					<motion.div
						initial={animations.buttons.initial}
						animate={animations.buttons.animate}
						exit={animations.buttons.exit}
						className={styles.buttonContainer}
					>
						<CarouselButton dir="prev" />
						<CarouselButton dir="next" />
					</motion.div>
				)}
			</AnimatePresence>
		</Carousel>
	);
};
