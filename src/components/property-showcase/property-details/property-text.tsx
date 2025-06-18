import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Property } from "@/types/property";
import { ChevronUp } from "lucide-react";
import { motion } from "motion/react";

interface PropertyTextProps {
	activeProperty: Property;
	isMobile: boolean;
	isDescriptionOpen: boolean;
	setIsDescriptionOpen: (isOpen: boolean) => void;
}

const styles = {
	container: {
		base: "lg:max-w-1/3 relative pointer-events-none",
		mobile:
			"absolute bottom-0 z-10 mt-auto bg-gradient-to-b from-transparent h-fit p-8",
		mobileGradientCollapsed: "to-grey__darkest/50 to-grey__darkest/90 to-60%",
		mobileGradientExpanded: "to-grey__darkest/50 to-grey__darkest/90 to-30%",
	},
	toggleButton: {
		wrapper: "w-full flex justify-center items-center pointer-events-auto",
		button:
			"w-full text-secondary__light hover:bg-transparent hover:text-secondary__light",
		icon: "size-6",
	},
	titleSection: {
		base: "border-b-3 mb-4 border-secondary__light",
		mobile: "py-0",
	},
	title: {
		base: "text-primary__lighter text-2xl pb-2",
		responsive: "md:text-3xl lg:text-4xl",
	},
	description: {
		container: "overflow-hidden",
		text: {
			base: "text-primary__lighter",
			desktop: "md:text-xl",
			mobile: "text-lg",
		},
	},
} as const;

const animations = {
	title: { duration: 0.8 },
	description: { duration: 0.3, ease: "easeOut" as const },
	descriptionText: { duration: 0.3, ease: "easeOut" as const },
} as const;

export const PropertyText = (props: PropertyTextProps) => {
	const { activeProperty, isMobile, isDescriptionOpen, setIsDescriptionOpen } =
		props;

	return (
		<motion.div
			className={cn(
				styles.container.base,
				isMobile && [
					styles.container.mobile,
					isDescriptionOpen
						? styles.container.mobileGradientExpanded
						: styles.container.mobileGradientCollapsed,
				]
			)}
		>
			{/* Toggle */}
			{isMobile && (
				<div className={styles.toggleButton.wrapper}>
					<Button
						variant="ghost"
						className={styles.toggleButton.button}
						onPointerDown={() => setIsDescriptionOpen(!isDescriptionOpen)}
					>
						<ChevronUp className={styles.toggleButton.icon} />
					</Button>
				</div>
			)}
			{/* Header */}
			<div
				className={cn(
					styles.titleSection.base,
					isMobile && styles.titleSection.mobile
				)}
			>
				<motion.h3
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					key={activeProperty.title}
					className={cn(styles.title.base, styles.title.responsive)}
					transition={animations.title}
				>
					{activeProperty.title}
				</motion.h3>
			</div>
			{/* Description */}
			<motion.div
				initial={false}
				animate={{
					height: !isMobile || isDescriptionOpen ? "auto" : 0,
					opacity: !isMobile || isDescriptionOpen ? 1 : 0,
				}}
				transition={animations.description}
				className={styles.description.container}
			>
				<motion.div
					initial={isMobile ? { y: 20 } : undefined}
					animate={{ y: 0 }}
					exit={isMobile ? { y: -20 } : undefined}
					transition={animations.descriptionText}
					className={cn(
						styles.description.text.base,
						!isMobile && styles.description.text.desktop,
						isMobile && styles.description.text.mobile
					)}
				>
					{activeProperty.description}
				</motion.div>
			</motion.div>
		</motion.div>
	);
};
