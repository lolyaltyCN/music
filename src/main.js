// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vue'
import router from './router'
import "@/assets/icon/iconfont.css"
import store from './vuex'
Vue.config.productionTip = false

Vue.config.devtools = true

window.onload = function () {
  window['adaptive'].desinWidth = 750
  window['adaptive'].baseFont = 16
  window['adaptive'].maxWidth = 480
  window['adaptive'].init()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
