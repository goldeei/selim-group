const classes = "text-primary__lighter tracking-widest responsive";
const text = "WE DO HOUSES AND STUFF";

export const LandingPageSubtitle = ({ isMobile }: { isMobile: boolean }) => {
	return isMobile ? (
		<h4 className={classes}>{text}</h4>
	) : (
		<h2 className={classes}>{text}</h2>
	);
};
