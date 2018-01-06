const host = 'http://localhost:4001'

module.exports = {
    proxy: {
        '/search': {
            target: host, // 接口域名
            changeOrigin: true, //是否跨域
        },
        '/banner': { //banner图
            target: host,
            changeOrigin: true
        },
        '/search': { //搜索
            target: host,
            changeOrigin: true
        },
        '/personalized': { //推荐歌单
            target: host,
            changeOrigin: true
        },
        '/personalized/newsong': { //推荐新音乐
            target: host,
            changeOrigin: true
        },
        '/playlist': { //歌单详情
            target: host,
            changeOrigin: true
        }
    }
}