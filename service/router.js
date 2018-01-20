var express = require('express')
var router = express.Router()

// banner
router.use('/banner', require('./routers/banner'))

// personalizedmv
router.use('/personalized/mv', require('./routers/mv'))
// personalized_newsong
router.use('/personalized/newsong', require('./routers/newsong'))

// personalized
router.use('/personalized', require('./routers/personalized'))
// personalized
router.use('/playlist/detail', require('./routers/playlistDeatil'))

module.exports = router
