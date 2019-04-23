import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

<<<<<<< HEAD
=======
const token = localStorage.getItem('token')
console.log(token)

>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
