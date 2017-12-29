import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
Vue.use(Vuex)
let state = {
    footerList: [
        {
            name: "发现音乐",
            hash: "/",
            icon: "icon-wangyiyunyinle",
            selsect: true
        }, {
            name: "我的音乐",
            hash: "mineMusic",
            icon: "icon-music",
            selsect: false
        }, {
            name: "朋友",
            hash: "friend",
            icon: "icon-19",
            selsect: false
        }, {
            name: "我的",
            hash: "user",
            icon: "icon-geren",
            selsect: false
        }
    ],
    indexList:[
        {
            name: "音乐",
            hash: "music"
          },
          {
            name: "视频",
            hash: "user"
          },
          {
            name: "电台",
            hash: "rdioStation"
          },
          {
            name: "榜单",
            hash: "rank"
          }
    ]
}

export default new Vuex.Store({state, mutations});