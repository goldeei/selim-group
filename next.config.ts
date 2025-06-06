import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/**",
			},
		],
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		config.module.rules.push({
			test: /\.svg\?react$/i,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						icon: true,
						svgoConfig: {
							plugins: [
								{
									name: "preset-default",
									params: { overrides: { removeViewBox: false } },
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
};

export default nextConfig;
