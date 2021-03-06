import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局消息插件
import Message from './components/Message'
Vue.use(Message)

Vue.config.productionTip = false

const token = localStorage.getItem('token')
console.log(token)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
