import Vue from 'vue'
import App from './App.vue'
import router from './routs/'

import './assets/scss/app.scss'
Vue.use(router)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
