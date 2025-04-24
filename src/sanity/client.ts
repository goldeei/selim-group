import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "yjp7gm6e",
	dataset: "production",
	apiVersion: "2024-11-01",
	useCdn: false,
});
