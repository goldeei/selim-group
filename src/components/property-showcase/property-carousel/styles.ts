const controlStyles = {
	container: "border border-white/60 shadow-lg",
	color: {
		default: "grey__light",
		hover: "grey",
	},
};

const indicatorVariants = {
	initial: {
		backdropFilter: "blur(1px)",
		backgroundColor: "rgba(255, 255, 255, 0.4)",
	},
	hovered: {
		backdropFilter: "blur(12px)",
		backgroundColor: "rgba(255, 255, 255, 0.6)",
	},
};

const controlVariants = {
	initial: { ...indicatorVariants.initial, opacity: 0 },
	hovered: { ...indicatorVariants.hovered, opacity: 1 },
};

export { controlStyles, controlVariants, indicatorVariants };
