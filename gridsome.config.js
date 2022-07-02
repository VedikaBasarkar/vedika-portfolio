const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [
    tailwind(),
]
module.exports = {
    siteName: 'Vitwit',
    siteDescription: "VITWIT IS A ONE-STOP SOLUTION TO YOUR BLOCKCHAIN REQUIREMENTS.",
    siteUrl: 'https://vitwit.com',
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