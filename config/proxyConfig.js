module.exports = {
    proxy: {
        '/search': { //http://localhost:4001印射为/search
            target: 'http://localhost:4001', // 接口域名
            changeOrigin: true, //是否跨域
        },
        '/banner': { //banner图
            target: 'http://localhost:4001',
            changeOrigin: true
        },
        '/search': { //搜索
            target: 'http://localhost:4001',
            changeOrigin: true
        },
        '/personalized': { //推荐歌单
            target: 'http://localhost:4001',
            changeOrigin: true
        },
        '/personalized/newsong': { //推荐新音乐
            target: 'http://localhost:4001',
            changeOrigin: true
        },
        '/playlist': { //歌单详情
            target: 'http://localhost:4001',
            changeOrigin: true
        }
    }
}