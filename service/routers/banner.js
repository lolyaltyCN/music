const mock = require('../util/mock')
const {createWebAPIRequest} = require('../util/util')
const flag = require('../util/config')

const banner = function (req, res) {
  if (flag) {
    console.log('banner - mock数据')
    res.json({banners: mock.banner})
    return
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {}
  createWebAPIRequest(
    'music.163.com',
    '/weapi/v2/banner/get',
    'POST',
    data,
    cookie,
    music_req => {
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
}

module.exports = banner
