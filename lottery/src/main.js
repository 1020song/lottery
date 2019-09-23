import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'
import vueResource from 'vue-resource'
import './assets/lottery/iconfont.css'
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.use(vueResource)
Vue.prototype.$axios = axios
new Vue({
  router,
  store,
  // axios,
  render: h => h(App)
}).$mount('#app')
