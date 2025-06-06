import { urlFor } from "@/lib/imageUtils";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import Image, { ImageProps } from "next/image";

const ASPECT_RATIOS: Record<string, number> = {
	"3:4": 4 / 3, // Portrait mobile
	"16:9": 9 / 16, // Landscape desktop
	"1:1": 1, // Square
	"21:9": 9 / 21, // Ultra-wide panorama
} as const;

type AspectRatio = keyof typeof ASPECT_RATIOS;

/**
 * Calculate target dimensions based on aspect ratio
 * @param aspectRatio - Desired aspect ratio
 * @param width - Source width
 * @returns Calculated width and height
 */
const calculateDimensions = (
	aspectRatio: AspectRatio,
	width: number
): { width: number; height: number } => {
	const ratio = ASPECT_RATIOS[aspectRatio];
	return {
		width,
		height: Math.round(width * ratio),
	};
};

interface SanityImageProps extends Omit<ImageProps, "src"> {
	image: SanityImageObject; // Sanity image object
	alt: string;
	width?: number;
	height?: number;
	aspectRatio?: AspectRatio;
}

/**
 * Optimized Sanity image component with responsive aspect ratios and hotspot support
 */
export const SanityImage = (props: SanityImageProps) => {
	const { image, alt, width, height, aspectRatio, ...rest } = props;

	if (!image) {
		return null;
	}

	// Build the image URL using urlFor
	let imageBuilder = urlFor(image).auto("format").fit("crop");

	// Apply responsive aspect ratio sizing
	if (aspectRatio && width && height) {
		const targetHeight = calculateDimensions(aspectRatio, width).height;
		imageBuilder = imageBuilder.width(width).height(targetHeight);
	} else if (width && height) {
		imageBuilder = imageBuilder.width(width).height(height);
	} else if (width) {
		imageBuilder = imageBuilder.width(width);
	} else if (height) {
		imageBuilder = imageBuilder.height(height);
	}

	let imageUrl = imageBuilder.url();

	// Handle focal point manually since @sanity/image-url doesn't do it automatically
	// This is critical for proper hotspot-based cropping
	const sanityImage = image as { hotspot?: { x?: number; y?: number } };
	if (
		sanityImage.hotspot?.x !== undefined &&
		sanityImage.hotspot?.y !== undefined
	) {
		const separator = imageUrl.includes("?") ? "&" : "?";
		imageUrl = `${imageUrl}${separator}crop=focalpoint&fp-x=${sanityImage.hotspot.x}&fp-y=${sanityImage.hotspot.y}`;
	}

	return (
		<Image {...rest} src={imageUrl} alt={alt} width={width} height={height} />
	);
};
