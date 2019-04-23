module.exports = {
  devServer: {
    port: 6600,
    proxy: {
      '/api': {
        target: 'https://mufeng.me',
        changeOrigin: true
      }
    }
  }
}
