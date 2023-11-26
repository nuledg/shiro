/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 100 },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.2s ease-in-out forwards",
			},
			height: {
				screen: "100dvh",
			},
		},
		variants: {
			fill: ["hover", "focus"],
		},
	},
	plugins: [],
};
