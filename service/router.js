var express = require('express')
var router = express.Router()
var banner = require('./routers/banner')

// banner
router.use('/banner', banner)

module.exports = router
