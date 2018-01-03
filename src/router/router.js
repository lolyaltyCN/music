import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import index from '@/components/index'
import music from '@/components/music'
import NotFond404 from '@/components/404'
import Album from '@/components/album'

Vue.use(Router)

const vueRouterList = [
  {
    path: '/vue',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    component: index,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: music
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/playlist/:id',
    name: 'album',
    component: Album
  },
  {
    path: '*',
    component: NotFond404
  }
]

export default new Router({mode: 'history', routes: vueRouterList})
