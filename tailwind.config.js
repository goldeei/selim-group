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
		"pt-[4rem]",
		"min-h-[calc(100dvh-4rem)]",
		"min-h-dvh",
		"sm:min-h-[calc(100dvh-4rem)]",
		"text-grey__light",
		"text-grey",
		"text-grey__dark",
		"text-grey__darker",
		"text-grey__darkest",
		"text-grey__lightest",
		"text-grey__lighter",
		"bg-grey__light",
		"bg-grey",
		"bg-grey__dark",
		"bg-grey__darker",
		"bg-grey__darkest",
		"bg-grey__lightest",
		"bg-grey__lighter",
	],
};
