
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    devServer: {
        port: 3001,
        open:true,
        proxy:{
            '/api':{
                target: 'http://47.75.248.68:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}
