const c1 = () => import(/* webpackChunkName: "page--src--pages--products--aneka--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/aneka/index.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--products--artha--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/artha/index.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--yashraj-mukhate-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/yashraj-mukhate.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--static-iot-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/static-iot.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--products--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/products/index.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-us--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about-us/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

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
    path: "/static-iot/",
    component: c4
  },
  {
    path: "/products/",
    component: c5
  },
  {
    path: "/contact/",
    component: c6
  },
  {
    path: "/about-us/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
