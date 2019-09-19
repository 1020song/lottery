import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
import './assets/lottery/iconfont.css'
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
