"use client";

import { IsMobileProvider, useIsMobile } from "./isMobileContext";

interface ProviderProps {
	children: React.ReactNode;
	fallback: React.ReactNode;
}

function isMobileIsDefined(isMobile: boolean | undefined): isMobile is boolean {
	return isMobile !== undefined;
}

const ContextGuard = ({ children, fallback }: ProviderProps) => {
	const isMobile = useIsMobile();

	if (!isMobileIsDefined(isMobile)) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
};

export function AppProviders({ children, fallback }: ProviderProps) {
	return (
		<IsMobileProvider>
			<ContextGuard fallback={fallback}>{children}</ContextGuard>
		</IsMobileProvider>
	);
}
