const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: [
        'quasar'
    ],

    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: false
        },
        electronBuilder: {
            nodeIntegration: true,
            externals: ['serialport'],
        }
    },
    
    chainWebpack: config => {
    config.module
      .rule('images')
      .use('file-loader')
      .loader('file-loader')
      .tap(options => {
        options.name = 'assets/[name].[hash:8].[ext]'
        return options
      })
  }
})