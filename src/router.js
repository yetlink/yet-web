import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('./views/Home.vue')
const Ment = () => import('./views/Statement.vue')
const UnauthorizedError = () => import('./views/UnauthorizedError.vue')
const NotFoundError = () => import('./views/NotFoundError.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/ment',
      name: 'ment',
      component: Ment
    },
    {
      path: '/401',
      name: '401',
      component: UnauthorizedError
    },
    {
      path: '/404',
      name: '404',
      component: NotFoundError
    },
    { // Resolve index ('/')
      path: '/',
      redirect: '/home'
    },
    { // Resolve HTTP ERROR (404-NOTFOUND)
      path: '*',
      redirect: '/404'
    }
  ]
})
