const c1 = () => import(/* webpackChunkName: "page--src--pages--yashraj-mukhate-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/yashraj-mukhate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ysa-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ysa.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--static-iot-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/static-iot.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about/index.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

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
    path: "/static-iot/",
    component: c3
  },
  {
    path: "/contact/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
