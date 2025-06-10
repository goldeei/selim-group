import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { ServiceItem } from "./types";

interface ServiceDescriptionContainerProps {
	isMobile: boolean;
	service: ServiceItem;
	children: React.ReactNode;
	onDialogClose: () => void;
}
export const ServiceDescriptionContainer = (
	props: ServiceDescriptionContainerProps
) => {
	const { isMobile, children, service, onDialogClose } = props;

	if (isMobile)
		return (
			<Sheet open onOpenChange={onDialogClose}>
				<SheetContent side="bottom" className="h-2/3 bg-white">
					<SheetHeader>
						<SheetTitle className="hidden">{service.title}</SheetTitle>
					</SheetHeader>
					<div className="[&_h4]:mb-4">{children}</div>
				</SheetContent>
			</Sheet>
		);

	return (
		<div className="flex-1 bg-white border-s-12 border-primary rounded-xs">
			{children}
		</div>
	);
};
