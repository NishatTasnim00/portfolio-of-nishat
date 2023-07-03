/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// daisyui: {
	// 	themes: [
	// 		{
	// 			mytheme: {
	// 				primary: '#270d72',

	// 				secondary: '#65f286',

	// 				accent: '#c2c5fc',

	// 				neutral: '#1d1622',

	// 				'base-100': '#e6e4e7',

	// 				info: '#3ab1cf',

	// 				success: '#5ad8b2',

	// 				warning: '#c77305',

	// 				error: '#f3644f',
	// 			},
	// 		},
	// 	],
	// },

	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
			},
			keyframes: {
				text: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center',
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
};

