const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  productionSourceMap: false,
  publicPath: isProd ? '//assets.tanxiaoqing.top' : '/',
  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
  }
}
