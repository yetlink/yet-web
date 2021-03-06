module.exports = {
  devServer: {
    port: 6600,
    proxy: {
      '/dev': {
        target: 'http://link.yet.ink',
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      '/prod': {
        target: 'http://yet.ink',
        changeOrigin: true,
        pathRewrite: {
          '^/prod': ''
        }
      }
    }
  }
}
