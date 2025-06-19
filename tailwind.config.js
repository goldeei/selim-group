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
		// Specific height utilities you use
		"min-h-[calc(100dvh-4rem)]",
		"min-h-dvh",
		"sm:min-h-[calc(100dvh-4rem)]",

		// Primary colors
		{
			pattern: /bg-primary-(lighter|light|dark|darker)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /text-primary-(lighter|light|dark|darker)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /border-primary-(lighter|light|dark|darker)/,
			variants: ["hover", "focus", "active"],
		},

		// Secondary colors
		{
			pattern: /bg-secondary-(light|dark)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /text-secondary-(light|dark)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /border-secondary-(light|dark)/,
			variants: ["hover", "focus", "active"],
		},

		// Grey colors
		{
			pattern: /bg-grey-(lightest|lighter|light|dark|darker|darkest)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /text-grey-(lightest|lighter|light|dark|darker|darkest)/,
			variants: ["hover", "focus", "active"],
		},
		{
			pattern: /border-grey-(lightest|lighter|light|dark|darker|darkest)/,
			variants: ["hover", "focus", "active"],
		},

		// Base colors without variants
		"bg-primary",
		"bg-secondary",
		"bg-grey",
		"text-primary",
		"text-secondary",
		"text-grey",
		"border-primary",
		"border-secondary",
		"border-grey",

		// Specific text sizes you use dynamically
		{
			pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl)/,
			variants: ["sm", "md", "lg"],
		},
	],
};
