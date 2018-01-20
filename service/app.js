const express = require('express')
const router = require('./router')

const app = express()

app.use('/api', router)

const port = process.env.PORT || 4001
app.use(function (req, res, next) {
  var err = new Error('Not Found 1')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json('error')
})

app.listen(port, () => {
  console.log(`后台服务已启动 @ http://localhost:${port}`)
})

module.exports = app
