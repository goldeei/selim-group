import { cn } from "@/lib/utils";

import { CarouselNext, CarouselPrevious } from "../../ui/carousel";

export const styles =
	"w-6 h-1/3 bg-grey text-grey__darker border-grey__darker border-1 hover:bg-grey__light" as const;

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
