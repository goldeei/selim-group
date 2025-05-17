import Image from "next/image";

// No imports needed for images in the public folder when used directly as string paths.
// Instead, define the paths directly.

const properties = [
	{
		id: "1",
		srcPath: "/placeholder-images/property1.png",
		altText: "Property image 1",
		width: 1403,
		height: 796,
	},
	{
		id: "2",
		srcPath: "/placeholder-images/property2.png",
		altText: "Property image 2",
		width: 1403,
		height: 804,
	},
	{
		id: "3",
		srcPath: "/placeholder-images/property3.png",
		altText: "Property image 3",
		width: 1403,
		height: 796,
	},
];

export const PropertyCarousel = () => {
	return (
		<div>
			<div className="flex flex-wrap gap-4">
				{properties.map(({ id, srcPath, altText, width, height }) => (
					<Image
						key={id}
						src={srcPath}
						alt={altText}
						width={width}
						height={height}
						className="size-96 object-cover"
					/>
				))}
			</div>
		</div>
	);
};
