import { cn } from "@/lib/utils";

import { CarouselNext, CarouselPrevious } from "../../ui/carousel";

export const carouselButtonClasses =
	"z-20 bg-primary__lighter text-grey__darker border-primary__light border-1 hover:bg-primary__light";

interface CarouselButtonProps {
	dir: "prev" | "next";
}
export const CarouselButton = (props: CarouselButtonProps) => {
	const { dir } = props;

	return dir === "next" ? (
		<CarouselNext className={cn(carouselButtonClasses, "right-2")} />
	) : (
		<CarouselPrevious className={cn(carouselButtonClasses, "left-2")} />
	);
};
