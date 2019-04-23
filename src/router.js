import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
=======

const Home = () => import('./views/Home.vue')
const Ment = () => import('./views/Statement.vue')
const UnauthorizedError = () => import('./views/UnauthorizedError.vue')
const NotFoundError = () => import('./views/NotFoundError.vue')
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/',
=======
      path: '/home',
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
      name: 'home',
      component: Home
    },
    {
<<<<<<< HEAD
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
=======
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
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
    }
  ]
})
