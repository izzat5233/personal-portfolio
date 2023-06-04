/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'sans-serif'],
                'cursive': ['Dancing Script', 'cursive'],
            },
            fontSize: {
                'bigger': '1.25em',
            },
            colors: {
                'primary': 'var(--color-primary)',
                'secondary': 'var(--color-secondary)',
                'accent': 'var(--color-accent)',
                'neutral': 'var(--color-neutral)',
                'fore': 'var(--color-fore)',
                'back': 'var(--color-back)',
            },
        },
    },
    variants: {},
    plugins: [],
}
