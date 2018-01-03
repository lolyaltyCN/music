import * as types from '../types'
import * as api from '../../api/api'

const state = {
  // 用户登录状态
  navList: [
    {
      name: '音乐',
      hash: 'music'
    }, {
      name: '视频',
      hash: 'user'
    }, {
      name: '电台',
      hash: 'rdioStation'
    }, {
      name: '榜单',
      hash: 'rank'
    }
  ],
  bannerList: []
}

const getters = {
  navList: state => state.navList,
  bannerList: state => {
    return state.bannerList
  }
}

const actions = {
  getbanner ({commit}) {
    api
      .getbanner()
      .then(res => {
        commit(types.GET_BANNER_LIST, res.banners)
      })
  }
}

const mutations = {
  [types.GET_NAV_LIST] (state, i) {
    state
      .navList
      .map(function (state, index) {
        state.navList = false
        if (index === i) {
          state.navList = true
        }
      })
  },
  [types.GET_BANNER_LIST] (state, res) {
    state
      .bannerList = res
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
