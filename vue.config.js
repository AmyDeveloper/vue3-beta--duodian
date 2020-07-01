const path = require('path')
const resolve = file => path.resolve(__dirname, file)
// const target = 'https://sxxxxxx'

module.exports = {
  outputDir: 'dist',
  assetsDir: 'static/shop',
  lintOnSave: false,
  css: {
    loaderOptions: {
      stylus: {
        import: [resolve('src/assets/styles/index.styl')],
      },
    },
  },
  // devServer: {
  //   proxy: {
  //     '/': {
  //       target,
  //       changeOrigin: true,
  //       secure: false,
  //       xfwd: false,
  //     },
  //   },
  // },
}
