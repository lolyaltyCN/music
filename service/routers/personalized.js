const mock = require('../util/mock')
const {createWebAPIRequest} = require('../util/util')
const flag = require('../util/config')

const personalized = (req, res) => {
  if (flag) {
    console.log('推荐歌单 - mock数据')
    res.json(mock.personalizedmusic)
    return
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    limit: req.query.limit || 30,
    offset: req.query.limit || 0,
    total: true,
    n: 1000,
    csrf_token: ''
  }
  createWebAPIRequest(
    'music.163.com',
    '/weapi/personalized/playlist',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
}

module.exports = personalized
