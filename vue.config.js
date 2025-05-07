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
      externals: [
        'serialport',
        'electron-log',
        'electron-updater'
      ],
      preload: 'src/preload.js',
      builderOptions: {
        appId: 'com.asomecode.app',
        publish: [
          {
            provider: 's3',
            bucket: 'asomecode-dev-resource',
            region: 'ap-northeast-2',
            path: 'version-files/${version}'
          }
        ],
            // 1) 앱 식별자
            appId: 'com.asomecode.app',
        
            // 2) S3 publisher: 버전별 하위 폴더 자동 생성
            publish: [
              {
                provider: 's3',
                bucket: 'asomecode-dev-resource',
                region: 'ap-northeast-2',
                path: 'version-files/${version}'
              }
            ],
        
            // 3) 플랫폼별 빌드 타겟 & 아이콘
            win: {
              target: ['nsis', 'zip'],
              icon: 'src/assets/images/logo/asome-favicon-1024.ico'
            },
            mac: {
              target: ['dmg'],
              icon: 'src/assets/images/logo/asome-favicon-1024.ico'
            },
            linux: {
              target: ['AppImage'],
              icon: 'src/assets/images/logo/asome-favicon-1024.ico'
            }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/css/_variabled.scss";
        `,
      },
    },
  },
  devServer: {
    client: { overlay: false }
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
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        serialport: false,
      }
    }
  }
})
