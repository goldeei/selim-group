import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
	paddingOffset?: number;
	fullHeight?: boolean;
	noGutter?: boolean;
	ref?: React.Ref<HTMLElement>;
}

export const Section = (props: SectionProps) => {
	const {
		paddingOffset = 32,
		fullHeight = true,
		noGutter,
		className,
		children,
		...rest
	} = props;

	return (
		<section
			className={cn(
				"pt-[var(--section-padding-top)]",
				{ "min-h-[var(--full-page-height)]": fullHeight },
				!noGutter && "gutter",
				className
			)}
			style={
				{
					"--section-padding-top": `calc(var(--navbar-height) + ${paddingOffset}px)`,
				} as React.CSSProperties
			}
			{...rest}
		>
			<div className="max-content-width mx-auto h-full flex flex-col">
				{children}
			</div>
		</section>
	);
};
