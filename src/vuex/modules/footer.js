import * as types from '../types'

const state = {
  namespaced: true,
  footerList: [
    {
      name: '发现音乐',
      hash: '/',
      icon: 'icon-wangyiyunyinle',
      select: false
    }, {
      name: '我的音乐',
      hash: '/mineMusic',
      icon: 'icon-music',
      select: false
    }, {
      name: '朋友',
      hash: '/friend',
      icon: 'icon-19',
      select: false
    }, {
      name: '我的',
      hash: '/user',
      icon: 'icon-geren',
      select: false
    }
  ]
}

const getters = {
  footerList: (state) => {
    return state.footerList
  }
}

const mutations = {
  [types.GET_FOOTER_LIST] (state, i) {
    state
      .footerList
      .map(function (state, index) {
        state.select = false
        if (index === i) {
          state.select = true
        }
      })
  }
}

export default {
  state,
  getters,
  mutations
}
