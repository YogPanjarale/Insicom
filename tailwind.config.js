module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    
    extend: {
      fontFamily: {
        blinker: "'Blinker', sans-serif",
      },
			colors: {
				"primary-light": "#FFF6F6",
			},
		},
	},
	plugins: [],
};
