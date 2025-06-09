import { SanityImageCrop, SanityImageHotspot } from "./sanity.types";

/**
 * Image object as returned by IMAGE_FRAGMENT GROQ query
 */
export type ImageQueryResult = {
	_type: "image";
	asset: {
		_id: string;
		_type: "sanity.imageAsset";
		url: string;
		metadata: {
			dimensions?: {
				width?: number;
				height?: number;
				aspectRatio?: number;
			};
			lqip?: string;
			blurHash?: string;
		};
	} | null;
	hotspot?: SanityImageHotspot;
	crop?: SanityImageCrop;
} | null;
