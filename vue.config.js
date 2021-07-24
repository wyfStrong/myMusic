module.exports = {
    // 代理设置
    devServer: {
        // 端口号
        // port: 3000,
        // host: '0.0.0.0',
        // 代理
        proxy: {
            '/api': {
                target: 'https://m.kuwo.cn/newh5app',
                changeOrigin: true,
                pathRewrite: {

                }
            },
        }
    }

}


