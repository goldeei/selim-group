import { cn } from "@/lib/utils";

import { CarouselNext, CarouselPrevious } from "../../ui/carousel";

export const styles =
	"z-20 bg-primary__lighter text-grey__darker border-primary__light border-1 hover:bg-primary__light" as const;

interface CarouselButtonProps {
	dir: "prev" | "next";
}
export const CarouselButton = (props: CarouselButtonProps) => {
	const { dir } = props;

	return dir === "next" ? (
		<CarouselNext className={cn(styles, "right-2")} />
	) : (
		<CarouselPrevious className={cn(styles, "left-2")} />
	);
};
