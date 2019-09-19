import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import Home from './views/Home.vue'

import Integral from './components/Integral'

=======
import Home from './views/Home.vue'
import login from './views/login.vue'
>>>>>>> b335c462f55525c87509df2d3e91e1f3ea5eafc5
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/Integral',
      name: 'Integral',
      component: Integral
=======
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name: 'login',
      component:login
>>>>>>> b335c462f55525c87509df2d3e91e1f3ea5eafc5
    }
  ]
})
