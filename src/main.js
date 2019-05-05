import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局消息插件
import Message from './components/Message'

import ElementUI from 'element-ui'

import '../static/css/reset.css'
import '../static/css/element-ui.css'
import '../static/css/iconfont.css'

Vue.use(Message)
Vue.use(ElementUI)

Vue.config.productionTip = false

const token = localStorage.getItem('token')
console.log(token)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
