import * as types from '../types'
import * as api from '../../api/api'

const state = {
  // 推荐歌单personalized
  playlistDetailList: {}
}

const getters = {
  playlistDetail: state => state.playlistDetailList
}

const actions = {
  getplaylistDetail ({commit}, id) {
    api
      .playlistDetail(id)
      .then(res => {
        if (res.code === 200) {
          commit(types.GET_PLAYDETAIL_LIST, res.playlist)
        } else {
          commit(types.GET_PLAYDETAIL_LIST, [])
        }
      })
  }
}

const mutations = {
  [types.GET_PLAYDETAIL_LIST] (state, res) {
    state.playlistDetailList = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
