import { ImageQueryResult } from "./query-results";
import { Property as GeneratedProperty } from "./sanity.types";

export type PropertyQueryResult = Omit<GeneratedProperty, "image"> & {
	_id: string;
	image: ImageQueryResult;
};

export type Property = Required<
	Pick<
		PropertyQueryResult,
		"_id" | "title" | "altText" | "description" | "image"
	>
>;
