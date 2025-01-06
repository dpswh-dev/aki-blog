/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins'],
                tilt: ['Tilt\\ Warp'],
            },
            colors: {
                primary: '#030637',
                secondary: '#33367A',
                accent: '#E070BD',
                darktext: '#480935',
                subtitle: '#767AB7',
                display: '#B9BDF5',
                heading: '#868EFF',
            },
        },
    },
    plugins: [],
}
