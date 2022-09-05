const c1 = () => import(/* webpackChunkName: "page--src--pages--ripple-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/ripple.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--photography-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/photography.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--keychrons-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/keychrons.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--jnec-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/jnec.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--hobby-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/hobby.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--fleet-management-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/fleet-management.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/contact/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--about--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/about/index.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/404.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/vedika-portfolio/src/pages/Index.vue")

export default [
  {
    path: "/ripple/",
    component: c1
  },
  {
    path: "/photography/",
    component: c2
  },
  {
    path: "/keychrons/",
    component: c3
  },
  {
    path: "/jnec/",
    component: c4
  },
  {
    path: "/hobby/",
    component: c5
  },
  {
    path: "/fleet-management/",
    component: c6
  },
  {
    path: "/contact/",
    component: c7
  },
  {
    path: "/about/",
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
