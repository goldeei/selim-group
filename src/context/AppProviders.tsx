"use client";

import { IsMobileProvider, useIsMobile } from "./isMobileContext";

interface ProviderProps {
	children: React.ReactNode;
	fallback: React.ReactNode;
}

const ContextGuard = ({ children, fallback }: ProviderProps) => {
	const isMobile = useIsMobile();

	if (isMobile === undefined) {
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
