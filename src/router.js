import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue')
const Ment = () => import('./views/Statement.vue')
const err = () => import('./views/401.vue')
const errr = () => import('./views/404.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/ment',
    name: 'ment',
    component: Ment
  }, {
    path: '/401',
    name: '401',
    component: err
  }, {
    path: '/404',
    name: '404',
    component: errr
  }
  ]
})
