/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				purple: '#7048ec',
				purpleDark: 'hsl(255, 81%, 0%)'
			}
		},
	},
	plugins: [],
};
