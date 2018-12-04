
var path = require('path')
function resolve(dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {
    devServer: {
        port: 80,
        open:true,
        proxy:{
            '/api':{
                target: ' https://easy-mock.com/mock/5be3a7c0ff88a57e78f70993/example',
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
