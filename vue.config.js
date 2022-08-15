const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: [
        'quasar'
    ],

    configureWebpack: {
        resolve: {
            fallback: {
                os: require.resolve("os-browserify/browser"),
                path: false,
                fs: false,
                stream: false,
                child_process: false,
            },
        },
    },

    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: false
        },
        electronBuilder: {
            externals: ['serialport'],
            nodeModulesPath: ['../../node_modules']
        }
    }
})
