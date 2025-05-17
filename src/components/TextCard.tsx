import { useIsMobile } from "@/context/isMobileContext";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

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

interface TextCardProps {
	title: string;
	description: string;
	headerClassName?: string;
	descriptionClassName?: string;
	className?: string;
}

export const TextCard = (props: TextCardProps) => {
	const {
		title,
		description,
		className,
		headerClassName,
		descriptionClassName,
	} = props;

	const isMobile = useIsMobile();

	return (
		<motion.div
			className={cn("p-4 h-full flex flex-col", className)}
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<motion.h4
				variants={itemVariants}
				className={cn("border-b-2 border-secondary mb-2 pb-1", headerClassName)}
			>
				{title}
			</motion.h4>
			<motion.p
				className={cn(isMobile && "text-3xl", descriptionClassName)}
				variants={itemVariants}
			>
				{description}
			</motion.p>
		</motion.div>
	);
};
