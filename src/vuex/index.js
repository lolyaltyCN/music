import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
    footerList:[
        {
          name: "发现音乐",
          hash: "findMusic",
          icon: "icon-wangyiyunyinle",
          selsect:true
        },
        {
          name: "我的音乐",
          hash: "mineMusic",
          icon: "icon-music",
          selsect:false
        },
        {
          name: "朋友",
          hash: "friend",
          icon: "icon-19",
          selsect:false
        },
        {
          name: "我的",
          hash: "user",
          icon: "icon-geren",
          selsect:false
        }
      ]
}

export default new Vuex.Store({
    state
})