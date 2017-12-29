import axios from 'axios'

/**
 * jsonp 抓取推荐页轮播图数据
 * 接口：https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg
 */
export default function getRecommend (cb) {
  axios.get('http://club.agoent.com/api/msg/allmessage/1001/1')
        .then(function (response) {
          cb(response)
        })
        .catch(function (err) {
          cb(err)
        })
}
