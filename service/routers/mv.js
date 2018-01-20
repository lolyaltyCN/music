const mock = require('../util/mock')
const {createWebAPIRequest} = require('../util/util')
const flag = require('../util/config')

const mv = (req, res) => {
  if (flag) {
    console.log('推荐mv - mock数据')
    res.json(mock.personalizedmv)
    return
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const mvid = req.query.mvid
  const data = {
    id: mvid
  }
  createWebAPIRequest(
      'music.163.com',
      `/weapi/mv/detail`,
      'POST',
      data,
      cookie,
      music_req => {
        res.send(music_req)
      },
      err => res.status(502).send('fetch error')
    )
}
module.exports = mv
