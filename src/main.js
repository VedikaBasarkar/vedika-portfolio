import Vue from 'vue'
import Vuex from 'vuex'
require('~/main.css')
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

import { HalfCircleSpinner } from 'epic-spinners';
import { extend } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { ValidationProvider, ValidationObserver } from "vee-validate";
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule]);
});

Vue.use(Vuesax, {
    // options here
})
import VueScrollTo from 'vue-scrollto'
import VueAnimXYZ from '@animxyz/vue'
import '@animxyz/core'
export default function(Vue, { router, head, isClient, appOptions }) {

    head.script.push({
        src: 'https://instant.page/5.1.0',
        type: 'module',
        integrity: 'sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw',
        body: true
    }, {
        src: 'https://kit.fontawesome.com/35b75f7f2e.js',
        defer: true
    }, {
        type: "application/ld+json",
        json: {
            "@context": "http://www.schema.org",
            "@type": "Organization",
            "name": "Vedika",
            "url": "",
            "logo": "",
            "description": "",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "",
                "addressRegion": "",
                "postalCode": ""
            }
        }
    })
    head.link.push()

    let copyRightNotice = `\u00a9 www.Vedika.com, ${ new Date().getFullYear() }. All rights reserved`;

    head.meta.push({
        key: "keywords",
        name: "keywords",
        content: "Vedika, Vedika Basarkar, Designer, UI, UI-UX, UI designer",
    }, {
        key: "description",
        name: "description",
        content: "Vedika Basarkar is a UI-UX designer and developer.",
    }, {
        name: "theme-color",
        color: "#191919",
    }, {
        name: "msapplication-TileColor",
        content: "#191919",
    }, {
        name: "msapplication-TileImage",
        content: "",
    }, {
        name: "copyright",
        content: copyRightNotice,
    }, {
        key: "og:type",
        property: "og:type",
        content: "website",
    }, {
        key: "og:description",
        property: "og:description",
        content: "Vedika is a UI-UX designer and developer.",
    }, {
        key: "og:image",
        property: "og:image",
        content: "",
    }, {
        property: "og:site_name",
        content: "Vedika",
    }, {
        key: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "",
    }, {
        property: "og:url",
        content: "https://VedikaBasarkar.com",
    }, {
        name: "twitter:card",
        content: "summary",
    }, {
        name: "twitter:description",
        content: "Vedika is a UI-UX designer and developer.",
    }, {
        name: "twitter:title",
        content: "Vedika",
    }, {
        name: "twitter:site",
        content: "@",
    }, {
        name: "twitter:creator",
        content: "@",
    }, {
        name: "twitter:image",
        content: "",
    });
    Vue.use(VueAnimXYZ)

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 800,
        easing: "ease",
        offset: -10,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })

    Vue.component('half-circle-spinner', HalfCircleSpinner)
    Vue.component('ValidationProvider', ValidationProvider)
    Vue.component('ValidationObserver', ValidationObserver)
}