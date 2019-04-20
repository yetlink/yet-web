module.exports = {
  devServer: {
    port: 6600,
    proxy: {
      '/api': {
        target: 'https://ooo.oo',
        changeOrigin: true
      }
    },
  }
};
