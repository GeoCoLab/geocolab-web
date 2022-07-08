import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    lightest: 'var(--c1-lightest)',
                    light: 'var(--c1-light)',
                    DEFAULT: 'var(--c1)',
                    dark: 'var(--c1-dark)',
                    darkest: 'var(--c1-darkest)'
                },
                secondary: {
                    lightest: 'var(--c2-lightest)',
                    light: 'var(--c2-light)',
                    DEFAULT: 'var(--c2)',
                    dark: 'var(--c2-dark)',
                    darkest: 'var(--c2-darkest)'
                },
                gray: {
                    100: 'var(--grey-1)',
                    200: 'var(--grey-2)',
                    300: 'var(--grey-3)'
                }
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
