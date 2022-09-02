const c1 = () => import(/* webpackChunkName: "page--src--pages--yashraj-mukhate-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/yashraj-mukhate.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--ysa-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ysa.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--static-iot-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/static-iot.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--ripple-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ripple.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--photography-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/photography.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--keychron-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/keychron.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--jnec-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/jnec.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--hobby-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/hobby.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--fleet-management-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/fleet-management.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--about--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about/index.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

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
    path: "/ripple/",
    component: c4
  },
  {
    path: "/photography/",
    component: c5
  },
  {
    path: "/keychron/",
    component: c6
  },
  {
    path: "/jnec/",
    component: c7
  },
  {
    path: "/hobby/",
    component: c8
  },
  {
    path: "/fleet-management/",
    component: c9
  },
  {
    path: "/contact/",
    component: c10
  },
  {
    path: "/about/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
