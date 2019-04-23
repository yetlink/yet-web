module.exports = {
<<<<<<< HEAD
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:6600',
          changeOrigin: true
        }
      }
    }
  }
=======
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
>>>>>>> 62cc387ab43662bee6664c0a0cac1032957ec3ed
