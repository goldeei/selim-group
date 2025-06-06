import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export type Property = {
	id: string;
	image: SanityImageObject; // Sanity image object
	altText: string;
	name: string;
	description: string;
	width: number;
	height: number;
};
