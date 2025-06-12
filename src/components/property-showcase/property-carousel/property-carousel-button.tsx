import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { CarouselNext, CarouselPrevious } from "../../ui/carousel";
import { controlStyles, controlVariants } from "./styles";

export const styles = {
	wrapper: "flex items-center rounded-full",
	button: cn(
		"!static !transform-none !left-auto !right-auto !top-auto !translate-x-0 !translate-y-0 [&_svg]:!size-[14px] size-4 bg-transparent hover:bg-transparent",
		`text-${controlStyles.color.hover} hover:text-grey__dark`,
		controlStyles.container
	),
};
interface CarouselButtonProps {
	dir: "prev" | "next";
}
export const CarouselButton = (props: CarouselButtonProps) => {
	const { dir } = props;

	return (
		<motion.div className={styles.wrapper} variants={controlVariants}>
			{dir === "next" ? (
				<CarouselNext className={styles.button} />
			) : (
				<CarouselPrevious className={styles.button} />
			)}
		</motion.div>
	);
};
