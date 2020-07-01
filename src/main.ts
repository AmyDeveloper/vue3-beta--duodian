import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VanUi from '@/lib/van-ui'

Vue.config.productionTip = false
Vue.use(VanUi)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
