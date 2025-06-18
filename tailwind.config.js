/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-oswald)", "sans-serif"],
				heading: ["var(--font-bebas-neue)", "sans-serif"],
			},
		},
	},
	safelist: [
		{ pattern: /pt-.*/ },
		{ pattern: /text-.*/ },
		{ pattern: /bg-.*/ },
		"min-h-[calc(100dvh-4rem)]",
		"min-h-dvh",
		"sm:min-h-[calc(100dvh-4rem)]",
	],
};
