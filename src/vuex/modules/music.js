import * as types from '../types'
import * as api from '../../api/api'

const state = {
  // 推荐歌单personalized
  personalizedList: [],
  personalizedMvList: [],
  personalizedMusicList: []
}

const getters = {
  personalizedList: state => state.personalizedList,
  personalizedMvList: state => state.personalizedMvList,
  personalizedMusicList: state => state.personalizedMusicList
}

const actions = {
  getpersonalized ({commit}) {
    api
      .personalized()
      .then(res => {
        if (res.code === 200) {
          commit(types.GET_PERSONAILZED_LIST, res)
        } else {
          commit(types.GET_PERSONAILZED_LIST, [])
        }
      })
  },
  getpersonalizedMv ({commit}) {
    api
      .personalizedMv()
      .then(res => {
        if (res.code === 200) {
          commit(types.GET_PERSONAILZEDMV_LIST, res)
        } else {
          commit(types.GET_PERSONAILZEDMV_LIST, [])
        }
      })
  },
  getpersonalizedMusic ({commit}) {
    api
      .personalizedMusci()
      .then(res => {
        if (res.code === 200) {
          commit(types.GET_PERSONAILZEDMUSIC_LIST, res)
        } else {
          commit(types.GET_PERSONAILZEDMUSIC_LIST, [])
        }
      })
  }
}

const mutations = {
  [types.GET_PERSONAILZED_LIST] (state, res) {
    state.personalizedList = res.result
  },
  [types.GET_PERSONAILZEDMV_LIST] (state, res) {
    state.personalizedMvList = res.result
  },
  [types.GET_PERSONAILZEDMUSIC_LIST] (state, res) {
    state.personalizedMusicList = res.result
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
