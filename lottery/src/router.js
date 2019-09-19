import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Integral from './components/Integral'

import continues from './components/continue.vue' //继续选号
import help from './components/help.vue' //帮助

import Home from './views/Home.vue'
import login from './views/login.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Integral',
      name: 'Integral',
      component: Integral
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: help
    },
    {
      path: '/continues',
      name: 'continues',
      component: continues
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
