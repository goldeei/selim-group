"use client";

import { createContext, use, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

type IsMobile = undefined | boolean;
const IsMobileContext = createContext<IsMobile>(undefined);

export function IsMobileProvider({ children }: { children: React.ReactNode }) {
	const [isMobile, setIsMobile] = useState<IsMobile>(undefined);

	const { width } = useWindowSize({ debounceDelay: 50 });
	useEffect(() => {
		// tailwind sm breakpoint
		if (width < 640) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	return <IsMobileContext value={isMobile}>{children}</IsMobileContext>;
}

export const useIsMobile = () => use(IsMobileContext);
