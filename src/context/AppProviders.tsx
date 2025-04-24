"use client";

import { useEffect, useState } from "react";
import { IsMobileProvider, useIsMobile } from "./isMobileContext";

interface ProviderProps {
	children: React.ReactNode;
	fallback: React.ReactNode;
}

const ContextGuard = ({ children, fallback }: ProviderProps) => {
	const [isMounted, setIsMounted] = useState(false);
	const isMobile = useIsMobile();

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted || isMobile === undefined) {
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
