import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    white: 'var(--c1-white)',
                    lightest: 'var(--c1-lightest)',
                    light: 'var(--c1-light)',
                    DEFAULT: 'var(--c1)',
                    dark: 'var(--c1-dark)',
                    darkest: 'var(--c1-darkest)',
                    black: 'var(--c1-black)'
                },
                secondary: {
                    DEFAULT: 'var(--contrast)'
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        'max-width': '100%',
                        'margin-left': 'auto',
                        'margin-right': 'auto',
                        'color': 'var(--c2-dark)'
                    }
                }
            },
            width: {
                '70': '70%',
                '80': '80%',
                '90': '90%'
            }
        },
        fontFamily: {
            display: ['"Noto Sans"', 'sans-serif'],
            body: ['"Karla"', 'sans-serif'],
        },
    },
    plugins: [
        require('windicss/plugin/typography'),
    ]
});
