import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import Home from './views/Home.vue'
// 选彩票 倒计时
import lotteryHall from './views/lotteryHall.vue'
import selects from './views/select.vue' // 选号
import trend from './views/trend.vue' // 走势图
=======
// import Home from './views/Home.vue'

import Integral from './components/Integral'

import continues from './components/continue.vue' //继续选号
import help from './components/help.vue' //帮助

import Home from './views/Home.vue'
import login from './views/login.vue'
>>>>>>> fb88e12dd2e7678db09bb26ece92b2ceae88ce66
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
<<<<<<< HEAD
      path: '/lotteryHall',
      name: 'lotteryHall',
      component: lotteryHall,
      children: [
        {
          path: '/',
          name: 'selects',
          component: selects
        },
        {
          path: 'trend',
          name: 'trend',
          component: trend
        }
      ]
=======
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
>>>>>>> fb88e12dd2e7678db09bb26ece92b2ceae88ce66
    }
  ]
})
