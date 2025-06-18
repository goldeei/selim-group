import { LAYOUT } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	fullHeight?: boolean;
	noGutter?: boolean;
	ref?: React.Ref<HTMLElement>;
}

const styles = {
	desktop: `min-h-[calc(100dvh-${LAYOUT.NAVBAR_HEIGHT})]`,
	mobile: `min-h-dvh sm:min-h-[calc(100dvh-${LAYOUT.NAVBAR_HEIGHT})]`,
	content: "max-content-width mx-auto h-full flex flex-col",
};

export const Section = (props: SectionProps) => {
	const { fullHeight = true, noGutter, className, children, ...rest } = props;

	return (
		<section
			className={cn(
				`pt-[${LAYOUT.NAVBAR_HEIGHT}]`,
				{ [styles.desktop]: fullHeight, [styles.mobile]: fullHeight },
				!noGutter && "gutter",
				className
			)}
			{...rest}
		>
			<div className={cn(styles.content, "")}>{children}</div>
		</section>
	);
};
