/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'icon-gradient': 'linear-gradient(to right, #6DDAC7 30%, #15ABFF 90%)',
				'icon-gradient-bottom' : 'linear-gradient(to bottom, #6DDAC7 30%, #15ABFF 90%)',
			},
		},
	},
	plugins: [],
}
