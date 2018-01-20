const mock = require('../util/mock')
const {createWebAPIRequest} = require('../util/util')
const flag = require('../util/config')

const newsong = (req, res) => {
  if (flag) {
    console.log('推荐新音乐 - mock数据')
    res.json(mock.personalized)
    return
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    type: 'recommend'
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/newsong',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
}
module.exports = newsong
