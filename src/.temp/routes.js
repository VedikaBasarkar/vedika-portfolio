const c1 = () => import(/* webpackChunkName: "page--src--pages--services--witval--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/services/Witval/index.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--services--monitoring-and-alert-tool--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/services/monitoring-and-alert-tool/index.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--services--cosmos-sdk-module-developement--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/services/cosmos-sdk-module-developement/index.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--services--blockchain-research--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/services/blockchain-research/index.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--products--aneka--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/products/aneka/index.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--products--artha--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/products/artha/index.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--services--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/services/index.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--partners--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/partners/index.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--products--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/products/index.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--careers--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/careers/index.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--contact--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/contact/index.vue")
const c12 = () => import(/* webpackChunkName: "page--src--pages--about-us--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/about-us/index.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--blogs--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/blogs/index.vue")
const c14 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/404.vue")
const c15 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vedikabasarkar/Documents/Vitwit-Website/src/pages/Index.vue")

export default [
  {
    path: "/services/witval/",
    component: c1
  },
  {
    path: "/services/monitoring-and-alert-tool/",
    component: c2
  },
  {
    path: "/services/cosmos-sdk-module-developement/",
    component: c3
  },
  {
    path: "/services/blockchain-research/",
    component: c4
  },
  {
    path: "/products/aneka/",
    component: c5
  },
  {
    path: "/products/artha/",
    component: c6
  },
  {
    path: "/services/",
    component: c7
  },
  {
    path: "/partners/",
    component: c8
  },
  {
    path: "/products/",
    component: c9
  },
  {
    path: "/careers/",
    component: c10
  },
  {
    path: "/contact/",
    component: c11
  },
  {
    path: "/about-us/",
    component: c12
  },
  {
    path: "/blogs/",
    component: c13
  },
  {
    name: "404",
    path: "/404/",
    component: c14
  },
  {
    name: "home",
    path: "/",
    component: c15
  },
  {
    name: "*",
    path: "*",
    component: c14
  }
]
