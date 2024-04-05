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
            preload: 'src/preload.js',
            builderOptions: {
                win: {
                    icon: 'src/assets/images/logo/asome-favicon-1024.ico'
                }
            }
        }
    },
    css: {
        loaderOptions: {
            scss: {
            // 이 옵션에 변수를 모아둔 파일을 연결한다.
            additionalData: `
                @import "@/assets/css/_variabled.scss";
                    `,
            },
        },
    },
    devServer: {
        client:{overlay : false}
    }
})
