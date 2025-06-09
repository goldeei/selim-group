import { ImageQueryResult } from "./query-results";
import {
	Property as GeneratedProperty,
	PropertyPage as GeneratedPropertyPage,
} from "./sanity.types";

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

export type PropertyPageQueryResult = Omit<
	GeneratedPropertyPage,
	"properties"
> & {
	properties: Property[];
};

export type PropertyPagesQueryResult = (Omit<
	PropertyPageQueryResult,
	"properties"
> & {
	propertyCount: number;
})[];
