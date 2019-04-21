module.exports = {
    baseUrl: './',
    productionSourceMap: false,
    devServer: {
        compress: true,
       
        disableHostCheck: true,   // That solved it
        open:true,
        proxy: {
            '/api':{
                target:'http://bozai.natapp1.cc',
                changeOrigin:true,
                pathRewrite:{
                    '/api':'/api'
                }
            }
        }
    }
}