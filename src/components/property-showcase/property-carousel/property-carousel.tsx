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
		base: "relative lg:col-span-2 relative",
		mobile: {
			container: "inset-0 p-0 h-full [&_div]:h-full",
			content: "-ml-3",
			item: "basis-11/12 not-first:not-last:basis-10/12 pl-3",
		},
		mobileDisabled: "pointer-events-none",
	},
	image: {
		base: "size-full m-auto aspect-[16/9]",
		mobile: "object-cover aspect-[3/4]",
	},
	buttonContainer:
		"pt-12 w-full transform-all px-2 py-1 rounded-3xl absolute bottom-1 left-1/2 -translate-x-1/2 flex justify-center items-center gap-1",
	indicator: {
		wrapper: "",
		item: `size-2 shadow-inner rounded-full bg-${controlStyles.color.default}`,
		active: `bg-${controlStyles.color.hover} shadow`,
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

	const handlePropertyIndicatorClick = (property: Property) => {
		onPropertyChange(property);
		api?.scrollTo(properties.indexOf(property));
	};

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
				<CarouselButton dir="prev" />
				<motion.div
					variants={indicatorVariants}
					className={cn(
						controlStyles.container,
						"px-2 py-1 flex gap-2 rounded-3xl"
					)}
				>
					{properties.map((property) => (
						<div
							key={property._id}
							className={cn(
								styles.indicator.item,
								activeProperty._id === property._id && styles.indicator.active
							)}
							onClick={() => handlePropertyIndicatorClick(property)}
						/>
					))}
				</motion.div>
				<CarouselButton dir="next" />
			</motion.div>
		</Carousel>
	);
};
