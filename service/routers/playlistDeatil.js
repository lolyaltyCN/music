const mock = require('../util/mock')
const {createWebAPIRequest} = require('../util/util')
const flag = require('../util/config')

const playlistDeatil = (req, res) => {
  if (flag) {
    console.log('歌单详情 - mock数据')
    res.json(mock.playdetail)
    return
  }
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  console.log('歌单详情 - 歌单id:' + req.query.id)
  const data = {
    id: req.query.id,
    n: 100000,
    csrf_token: ''
  }

  createWebAPIRequest(
    'music.163.com',
    '/weapi/v3/playlist/detail',
    'POST',
    data,
    cookie,
    music_req => {
      // console.log(JSON.parse(music_req).playlist.tracks.length)
      // console.log(JSON.parse(music_req).playlist.trackIds.length)
      res.send(music_req);
    },
    err => {
      res.status(502).send('fetch error');
    }
  )
}

module.exports = playlistDeatil
