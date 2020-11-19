const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  productionSourceMap: false,
  publicPath: isProd ? '//assets.tanxiaoqing.top/' : '/'
}