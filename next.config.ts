import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,

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
									params: { overrides: { removeViewBox: true } },
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
