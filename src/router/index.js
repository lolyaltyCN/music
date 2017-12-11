import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import USer from '@/components/USer'

Vue.use(Router)

const vueRouterList = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/user',
    name: 'USer',
    component: USer
  }
]

export default new Router({
  mode: 'history',
  routes: vueRouterList
})
