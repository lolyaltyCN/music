import Vue from 'vue'
import Vuex from 'vuex'

import footer from './modules/footer.js'
import nav from './modules/nav.js'
import music from './modules/music.js'
import playlistDetail from './modules/playlistDetail.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    footer,
    nav,
    music,
    playlistDetail
  }
})
