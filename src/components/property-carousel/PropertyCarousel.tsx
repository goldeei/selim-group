"use client";

import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { TextCard } from "../TextCard";
import { Button } from "../ui/button";
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel";
import { CarouselButton } from "./CarouselButton";

const properties = [
	{
		id: "1",
		srcPath: "/placeholder-images/property1.png",
		altText: "Modern waterfront apartment with floor-to-ceiling windows",
		name: "Lakeside Vista Apartments",
		description:
			"Luxury waterfront living with panoramic views of Lake Washington. This 3-bedroom, 2-bath apartment features floor-to-ceiling windows, high-end appliances, and a private balcony. Building amenities include a 24-hour fitness center, rooftop lounge, and secured parking.",
		width: 1403,
		height: 796,
	},
	{
		id: "2",
		srcPath: "/placeholder-images/property2.png",
		altText: "Renovated historic townhouse with brick exterior",
		name: "Heritage Row Townhomes",
		description:
			"Beautifully restored 19th century townhome in the heart of the historic district. This 2-bedroom, 2.5-bath property combines classic architectural details with modern conveniences. Featuring original hardwood floors, exposed brick walls, updated kitchen with quartz countertops, and a private courtyard garden.",
		width: 1403,
		height: 804,
	},
	{
		id: "3",
		srcPath: "/placeholder-images/property3.png",
		altText: "Contemporary single-family home with large backyard",
		name: "Oakridge Modern",
		description:
			"Newly constructed energy-efficient home in the desirable Oakridge neighborhood. This 4-bedroom, 3-bath residence offers an open floor plan, chef's kitchen with island seating, home office, and primary suite with walk-in closet. The landscaped backyard includes a covered patio and built-in fire pit. Walking distance to parks, schools, and shopping.",
		width: 1403,
		height: 796,
	},
];

export const PropertyCarousel = () => {
	const [activeProperty, setActiveProperty] = useState(properties[0]);
	const [api, setApi] = useState<CarouselApi>();
	const isMobile = useIsMobile();
	const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

	useEffect(() => {
		if (api) {
			api.on("select", () => {
				setActiveProperty(properties[api.selectedScrollSnap()]);
			});
		}
	}, [api]);

	return (
		<div
			className={cn(
				"relative grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-3 lg:grid-rows-1 lg:gap-8 items-start lg:items-center",
				isMobile ? "h-full grid-rows-1 " : "h-fit"
			)}
		>
			<motion.div
				layout
				className={cn(
					"lg:col-span-1",
					isMobile &&
						"relative z-10 mt-auto bg-gradient-to-b from-transparent to-grey__darkest/50 to-grey__darkest/90 h-fit min-h-40 py-16 px-4",
					isMobile && isDescriptionOpen ? "to-30%" : "to-60%"
				)}
			>
				{isMobile && (
					<div className="w-full flex justify-center items-center">
						<Button
							variant="ghost"
							className="w-full text-secondary__light hover:bg-transparent hover:text-secondary__light"
							onPointerDown={() => setIsDescriptionOpen(!isDescriptionOpen)}
						>
							<ChevronUp className="size-6" />
						</Button>
					</div>
				)}
				<TextCard
					key={activeProperty.id}
					title={activeProperty.name}
					description={activeProperty.description}
					className={cn(isMobile && "py-0")}
					headerClassName={cn(
						"text-primary__lighter border-secondary__light text-2xl md:text-3xl lg:text-4xl"
					)}
					descriptionClassName={cn(
						"text-primary__lighter text-lg md:text-xl lg:text-2xl",
						isMobile && "text-lg",
						isMobile && !isDescriptionOpen && "hidden"
					)}
				/>
			</motion.div>
			<Carousel
				className={cn(
					"lg:col-span-2 relative p-12",
					isMobile && "absolute inset-0 p-0 h-full [&_div]:h-full"
				)}
				setApi={setApi}
			>
				<CarouselContent>
					{properties.map(({ id, srcPath, altText, width, height }) => (
						<CarouselItem key={id}>
							<Image
								src={srcPath}
								alt={altText}
								width={width}
								height={height}
								className={cn("size-full m-auto", isMobile && "object-cover")}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className={cn(isMobile && "w-full max-h-fit absolute bottom-8")}>
					<CarouselButton dir="prev" />
					<CarouselButton dir="next" />
				</div>
			</Carousel>
		</div>
	);
};
