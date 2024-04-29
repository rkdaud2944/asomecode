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
    },
    
    configureWebpack: {
        resolve: {
            fallback: {
                crypto: require.resolve('crypto-browserify'),
                http: require.resolve('stream-http'),
                https: require.resolve('https-browserify'),
                zlib: require.resolve('browserify-zlib'),
                stream: require.resolve('stream-browserify'),
                buffer: require.resolve('buffer/'),
                util: require.resolve('util/'),
                os: require.resolve('os-browserify/browser'),
                path: require.resolve('path-browserify'),
                fs: false,  // fs는 브라우저에서 사용 불가능
                child_process: false,  // child_process는 브라우저에서 사용 불가능
                net: false, // net는 브라우저에서 사용할 수 없습니다.
                tls: false, // tls도 마찬가지입니다.
                serialport: false,
            }
        }
    }
})
