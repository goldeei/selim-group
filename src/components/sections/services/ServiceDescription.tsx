import { cn } from "@/lib/utils";
import { motion } from "motion/react";

import { ServiceItem } from "./types";

const variants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

interface ServiceDescriptionProps {
	title: ServiceItem["title"];
	description: ServiceItem["description"];
	isMobile: boolean;
}

export const ServiceDescription = (props: ServiceDescriptionProps) => {
	const { description, title, isMobile } = props;

	return (
		<motion.div
			className="p-4 h-full flex flex-col"
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<motion.h4
				variants={itemVariants}
				className="border-b-2 border-secondary mb-2 pb-1"
			>
				{title}
			</motion.h4>
			<motion.p
				className={cn("text-2xl", isMobile && "text-3xl")}
				variants={itemVariants}
			>
				{description}
			</motion.p>
		</motion.div>
	);
};
