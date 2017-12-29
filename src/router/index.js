import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import index from '@/components/index'

Vue.use(Router)

const vueRouterList = [
  {
    path: '/vue',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'index',
    component: index/* ,
      children:[
      {
        path: '/user',
        component: USer,
    ]  */
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
]

export default new Router({
  mode: 'history',
  routes: vueRouterList
})
