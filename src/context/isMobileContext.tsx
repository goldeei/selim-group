"use client";

import { cache, createContext, use } from "react";
import { useWindowSize } from "usehooks-ts";

type IsMobile = undefined | boolean;
const IsMobileContext = createContext<IsMobile>(undefined);

const getIsMobile = cache((width: number) => {
	return width < 640;
});

export function IsMobileProvider({ children }: { children: React.ReactNode }) {
	const { width } = useWindowSize();
	const isMobile = getIsMobile(width);

	return <IsMobileContext value={isMobile}>{children}</IsMobileContext>;
}

export function useIsMobile(): boolean {
	const context = use(IsMobileContext);

	if (context === undefined) {
		throw new Error("useIsMobile must be used within an IsMobileProvider");
	}

	return context;
}
