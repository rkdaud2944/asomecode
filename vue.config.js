// vue.config.js
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
      // vue.config.js 의 electronBuilder.builderOptions 안에…
      builderOptions: {
        extraResources: [
          {
            from: 'src/assets',
            to:   'assets',
            filter: ['**/*.{png,jpg}']
          }
        ],
        appId: 'com.asomecode.app',
        publish: [
          // 이거 npm run ebf:prod하면 aws s3의 version-files라는 폴더에 올림
          {
            provider: 's3',
            bucket: 'asomecode-dev-resource',
            region: 'ap-northeast-2',
            path: 'version-files',
            publishAutoUpdate: true,  
          },
        ],
        win: {
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
