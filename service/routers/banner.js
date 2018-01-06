const mock = require('../mock')
const { createWebAPIRequest } = require('../util/util')

const banner = function (req, res) {
  res.json({banners: mock.banner})
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
