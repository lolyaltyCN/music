import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import User from '@/components/User'
import index from '@/components/index'
import music from '@/components/music'
import NotFond404 from '@/components/404'
import Playlist from '@/components/playlist'
import Album from '@/components/common/album'

Vue.use(Router)

const vueRouterList = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/vue',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/index',
    component: index,
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
    path: '/playdetail/:id',
    name: 'playlist',
    component: Playlist,
    children: [
      {
        path: '/',
        component: Album
      }
    ]
  },
  {
    path: '*',
    component: NotFond404
  }
]

export default new Router({mode: 'history', routes: vueRouterList})
