const c1 = () => import(/* webpackChunkName: "page--src--pages--products--aneka--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/aneka/index.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--products--artha--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/artha/index.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--yashraj-mukhate-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/yashraj-mukhate.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--ysa-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ysa.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--static-iot-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/static-iot.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--products--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about-us--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about-us/index.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

export default [
  {
    path: "/products/aneka/",
    component: c1
  },
  {
    path: "/products/artha/",
    component: c2
  },
  {
    path: "/yashraj-mukhate/",
    component: c3
  },
  {
    path: "/ysa/",
    component: c4
  },
  {
    path: "/static-iot/",
    component: c5
  },
  {
    path: "/products/",
    component: c6
  },
  {
    path: "/contact/",
    component: c7
  },
  {
    path: "/about-us/",
    component: c8
  },
  {
    name: "404",
    path: "/404/",
    component: c9
  },
  {
    name: "home",
    path: "/",
    component: c10
  },
  {
    name: "*",
    path: "*",
    component: c9
  }
]
