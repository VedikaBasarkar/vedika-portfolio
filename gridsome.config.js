const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPlugins = [
    tailwind(),
]
module.exports = {
    siteName: 'Vedika Basarkar',
    siteDescription: "Vedika is a UI-UX designer and developer.",
    siteUrl: 'https://VedikaBasarkar.com',
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