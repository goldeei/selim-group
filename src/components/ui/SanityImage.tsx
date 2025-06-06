import Image, { ImageProps } from "next/image";

interface SanityImageProps extends ImageProps {
	alt: string;
	hotspotCrop?: "3:4" | "16:9";
}

export const SanityImage = (props: SanityImageProps) => {
	const { hotspotCrop, src, alt, ...rest } = props;

	const imageUrl = `${src}?ar=${hotspotCrop}&fit=crop&crop=focalpoint`;

	return <Image {...rest} alt={alt} src={imageUrl} />;
};
