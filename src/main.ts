import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VanUi from '@/lib/van-ui'
import errorHandler from '@/lib/error-handler'

Vue.config.productionTip = false
Vue.use(VanUi)
Vue.use(errorHandler)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
