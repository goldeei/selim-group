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
}

export const ServiceDescription = (props: ServiceDescriptionProps) => {
	const { description, title } = props;

	return (
		<motion.div
			className="absolute top-0 left-0 p-4"
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<motion.h4 variants={itemVariants}>{title}</motion.h4>
			<motion.p className="text-xl" variants={itemVariants}>
				{description}
			</motion.p>
		</motion.div>
	);
};
