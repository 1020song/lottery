import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import continues from './components/continue.vue' //继续选号
import help from './components/help.vue' //帮助

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
    }
  ]
})
