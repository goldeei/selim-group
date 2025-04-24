import { createClient } from "next-sanity";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const client = createClient({
	projectId: "yjp7gm6e",
	dataset: "production",
	apiVersion: "2024-11-01",
	useCdn: false,
});
