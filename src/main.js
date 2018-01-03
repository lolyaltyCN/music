// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vue'
import Axios from 'axios'
import router from './router/router'
import "@/assets/icon/iconfont.css"
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import * as filters from './filter/filter'

// mount with global
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.config.devtools = true

window.onload = function () {
  window['adaptive'].desinWidth = 750
  window['adaptive'].baseFont = 16
  window['adaptive'].maxWidth = 480
  window['adaptive'].init()
}

Vue.prototype.$http = Axios

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
