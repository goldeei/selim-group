import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Simple function that gives the builder an image and returns the builder
// for you to specify additional parameters
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
	return builder.image(source);
}
