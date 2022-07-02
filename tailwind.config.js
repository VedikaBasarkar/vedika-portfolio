const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
            './src/**/*.js',
        ]
    },
    theme: {
        colors: {
            white: colors.white,
            black: colors.black,
            red: colors.red,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.purple,
            violet: colors.violet,
            green: colors.emerald,
            yellow: colors.yellow,
            orange: colors.orange,
            coolGray: colors.coolGray,
            blueGray: colors.blueGray,
            trueGray: colors.trueGray,
            gray: colors.gray,
            lime: colors.lime,
            rose: colors.rose,
            teal: colors.teal,
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '0.5rem',
                sm: '1rem',
                md: '1rem',
                lg: '2rem',
                xl: '6rem',
                '2xl': '16rem',
            },
        },
        screens: {
            'xs': '340px',
            // => @media (min-width: 400px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1920px',
            '3xl': '2560px'
        },
        fontSize: {
            'xxs': '.70rem',
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '10rem',
        },
        extend: {
            colors: {
                primary: '#1B69E6',
                primaryDark: '#111827',
                secondary: '#99F3BD',
                secondaryDark: '#5EEAD4',
                light: '#E5E7EB',
                dark: '#000',
            },
            fontFamily: {
                primary: ['Ubuntu', 'sans-serif'],
            },
            spacing: {
                '78': '20rem',
                '96': '24rem',
                '128': '32rem',
                '140': '40rem'
            }
        },
    },
    variants: {
        extend: {
            fontWeight: ['hover'],
        }
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}