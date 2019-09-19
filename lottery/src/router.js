import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 选彩票 倒计时
import lotteryHall from './views/lotteryHall.vue'
import selects from './views/select.vue' // 选号
import trend from './views/trend.vue' // 走势图
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
    }
  ]
})
