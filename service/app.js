const express = require('express')
const router = require('./router')

const app = express()

app.use(router)

const port = process.env.PORT || 4001

app.listen(port, () => {
  console.log(`后台服务已启动 @ http://localhost:${port}`)
})

module.exports = app
