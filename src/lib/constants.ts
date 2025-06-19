export const LAYOUT = {
	NAVBAR_HEIGHT: "4rem",
	NAVBAR_HEIGHT_PX: 80,
} as const;

type MainPageSections = "services" | "renovations" | "aboutUs";
type MainPageSection = {
	id: string;
	title: string;
	href: string;
};
export const MAIN_PAGE_SECTIONS: Record<MainPageSections, MainPageSection> = {
	services: {
		id: "services",
		title: "Services",
		href: "#services",
	},
	renovations: {
		id: "renovations",
		title: "Renovations",
		href: "#renovations",
	},
	aboutUs: {
		id: "about-us",
		title: "About Us",
		href: "#about-us",
	},
} as const;
