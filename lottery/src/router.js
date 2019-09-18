import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

import Integral from './components/Integral'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Integral',
      name: 'Integral',
      component: Integral
    }
  ]
})
