const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [
    tailwind(),
]
module.exports = {
    siteName: 'Vedika',
    siteDescription: "Vedika is a freelance developer and designer.",
    siteUrl: 'https://Vedika.design',
    titleTemplate: '%s',
    icon: 'src/favicon.png',

    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
    plugins: ['gridsome-plugin-brotli']
}