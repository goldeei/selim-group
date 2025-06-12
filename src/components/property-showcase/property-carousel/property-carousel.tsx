"use client";

import { SanityImage } from "@/components/common/sanity-image";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

import { CarouselButton } from "./property-carousel-button";
import { controlStyles, indicatorVariants } from "./styles";

interface PropertyCarouselProps {
	properties: Property[];
	isMobile: boolean;
	onPropertyChange: (property: Property) => void;
	activeProperty: Property;
}

const styles = {
	carousel: {
		base: "relative lg:col-span-2",
		mobile: {
			container: "inset-0 h-full p-0 [&_div]:h-full",
			content: "-ml-3",
			item: "basis-11/12 not-first:not-last:basis-10/12 pl-3",
		},
	},
	image: {
		base: "m-auto size-full aspect-[16/9]",
		mobile: "aspect-[3/4] object-cover",
	},
	buttonContainer:
		"absolute bottom-1 left-1/2 z-50 flex w-full max-h-fit -translate-x-1/2 transform-all justify-center items-center gap-1 px-2 py-1 pt-12 rounded-3xl",
	indicator: {
		container: {
			base: "flex max-h-fit gap-2 px-2 py-1 rounded-3xl",
			mobile: "border-transparent",
		},
		item: {
			base: "size-2 max-h-2 rounded-full shadow-inner",
			desktop: `bg-${controlStyles.color.default}`,
			mobile: "bg-secondary__dark",
		},
		active: {
			base: "shadow",
			desktop: `bg-${controlStyles.color.hover}`,
			mobile: "bg-secondary__light",
		},
	},
} as const;

export const PropertyCarousel = (props: PropertyCarouselProps) => {
	const { isMobile, properties, onPropertyChange, activeProperty } = props;

	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (api) {
			api.on("select", () => {
				onPropertyChange(properties[api.selectedScrollSnap()]);
			});
		}
	}, [api, onPropertyChange, properties]);

	useEffect(() => {
		api?.scrollTo(properties.indexOf(activeProperty));
	}, [activeProperty, api, properties]);

	return (
		<Carousel
			className={cn(
				styles.carousel.base,
				isMobile && [styles.carousel.mobile.container]
			)}
			setApi={setApi}
		>
			<CarouselContent className={styles.carousel.mobile.content}>
				{properties.map(({ _id, image, altText }) => (
					<CarouselItem key={_id} className={styles.carousel.mobile.item}>
						<SanityImage
							image={image}
							aspectRatio={isMobile ? "3:4" : "16:9"}
							alt={altText}
							className={cn(styles.image.base, isMobile && styles.image.mobile)}
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<motion.div
				className={styles.buttonContainer}
				initial="initial"
				whileHover="hovered"
			>
				{!isMobile && <CarouselButton dir="prev" />}
				<motion.div
					key={isMobile ? "indicators-mobile" : "indicators-desktop"}
					variants={isMobile ? undefined : indicatorVariants}
					className={cn(
						controlStyles.container,
						styles.indicator.container.base,
						isMobile && styles.indicator.container.mobile
					)}
				>
					{properties.map((property) => (
						<div
							key={property._id}
							className={cn(
								styles.indicator.item.base,
								isMobile
									? styles.indicator.item.mobile
									: styles.indicator.item.desktop,
								activeProperty._id === property._id &&
									(styles.indicator.active.base,
									isMobile
										? styles.indicator.active.mobile
										: styles.indicator.active.desktop)
							)}
							onClick={() => onPropertyChange(property)}
						/>
					))}
				</motion.div>
				{!isMobile && <CarouselButton dir="next" />}
			</motion.div>
		</Carousel>
	);
};
