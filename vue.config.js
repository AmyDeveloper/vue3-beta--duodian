const path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: true,
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, 'src/assets/styles/variable.styl'),
          path.resolve(__dirname, 'src/assets/styles/common.styl')
        ]
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://free-api.heweather.net'
      }
    }
  }
}
