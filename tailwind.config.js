/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

module.exports = {
	darkMode: 'class',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		colors: {
			light: {
				primary: '#F5EFE6',
				secondary: '#E8DFCA',
				tertiary: '#AEBDCA',
				quaternary: '#7895B2',
				five: '#7895b240',
			},
			dark: {
				primary: '#2C3333',
				secondary: '#395B64',
				tertiary: '#A5C9CA',
				quaternary: '#E7F6F2',
				five: '2c3333b3',
			},
			slate: colors.slate,
			white: colors.white,
			black: colors.black,
			lightShadow: 'rgba(0, 0, 0, 0.1)',
			darkShadow: 'rgba(0, 0, 0, 0.7)',
			transparent: colors.transparent,
			alert: '#EA5455',
			success: '#5D9C59',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				custom: '0 5px 10px',
			},
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
	},
	plugins: [],
};
