const c1 = () => import(/* webpackChunkName: "page--src--pages--yashraj-mukhate-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/yashraj-mukhate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ysa-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ysa.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--vitwit-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/vitwit.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--static-iot-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/static-iot.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--nomadspaces-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/nomadspaces.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--jnec-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/jnec.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--ask-organic-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ask-organic.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--about--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about/index.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

export default [
  {
    path: "/yashraj-mukhate/",
    component: c1
  },
  {
    path: "/ysa/",
    component: c2
  },
  {
    path: "/vitwit/",
    component: c3
  },
  {
    path: "/static-iot/",
    component: c4
  },
  {
    path: "/nomadspaces/",
    component: c5
  },
  {
    path: "/jnec/",
    component: c6
  },
  {
    path: "/contact/",
    component: c7
  },
  {
    path: "/ask-organic/",
    component: c8
  },
  {
    path: "/about/",
    component: c9
  },
  {
    name: "404",
    path: "/404/",
    component: c10
  },
  {
    name: "home",
    path: "/",
    component: c11
  },
  {
    name: "*",
    path: "*",
    component: c10
  }
]
